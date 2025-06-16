<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

use Bitrix\Sale\Fuser;
use Classes\DeliverySettings;
use Classes\LinkCityToStore;
use Local\Util\HighloadblockManager;
use \Bitrix\Catalog\StoreTable;
use \Bitrix\Catalog\ProductTable;
use \Bitrix\Catalog\StoreProductTable;
use \Bitrix\Iblock\Elements\ElementCatalog1cTable;
use \Bitrix\Main\Engine\CurrentUser;

/**
 * Класс кастомных корзин
 */
class CustomBasketComponent extends CBitrixComponent
{
    private array $hlProductsInfo = [];
    private array $result = [];

    /**
     * Получает корзину пользователя из HL блока
     *
     * @return void Записывает в переменную hlProductsInfo инфу
     */
    private function getUserBasket() : void
    {
        $fUserId = Fuser::getId();

        $customBasketsHl = new HighloadblockManager(QUARTA_BUFFERBASKET_CODE_GROUP);

        $customBasketsHl->prepareParamsQuery(
            [
                'ID',
                'UF_KOLICHESTVO',
                'UF_PRODUCT_ID',
                'UF_LICENSE'
            ],
            [],
            [
                'UF_FUSER_ID' => $fUserId,
            ]
        );

        $this->hlProductsInfo = $customBasketsHl->getDataAll();
    }

    /**
     * Разбивает товары из корзины на подгруппы:
     *  1. Лицензионные товары
     *  2. Нелицензионные товары
     *
     * @return void Записывается в переменную result
     */
    private function splitIntoGroupsBasketItems() : void
    {
        if (empty($this->hlProductsInfo)) {
            return;
        }

        $groupItems = [];
        foreach ($this->hlProductsInfo as $product) {
            $groupItems = $this->getItems($groupItems, $product);
        }

        foreach ($groupItems as $key => $item) {
            if ($item['UF_LICENSE']) {
                $groupItems['LICENSE'][] = $item;
            } else {
                $groupItems['NO_LICENSE'][] = $item;
            }
            unset($groupItems[$key]);
        }

        $this->result['STORE_TEXT'][] = 'Лицензионные товары';
        $this->result['STORE_TEXT'][] = 'Нелицензионные товары';
        $this->result['ITEMS'] = $groupItems;
        $this->result['COUNT_PRODUCTS'] = count($groupItems);

    }

    /**
     * Получение полной информации о товарах
     *
     * @return void Записываются данные в переменную result
     */
    private function getProductsInfo() : void
    {
        if (empty($this->result['ITEMS'])) {
            return;
        }

        foreach ($this->result['ITEMS'] as $key => $items) {
            foreach ($items as $num => $item) {
                $product = ProductTable::getList([
                    'select' => [
                        'ID',
                        'QUANTITY'
                    ],
                    'filter' => [
                        'ID' => $item['UF_PRODUCT_ID']
                    ]
                ])->fetch();
                if ($product) {
                    $productInfo['AMOUNT'] = $product['QUANTITY'];
                    $productInfo['QUANTITY'] = $item['UF_KOLICHESTVO'];
                    $productInfo['STORE_ID'] = $item['UF_STORE_ID'];
                    $productInfo['ID'] = $item['UF_PRODUCT_ID'];
                    $productInfo['CAN_BUY'] = true;

                    if ($item['UF_KOLICHESTVO'] > $productInfo['AMOUNT']) {
                        $productInfo['CAN_BUY'] = false;
                    }

                    $productInfo['PRICE'] = CCatalogProduct::GetOptimalPrice($item['UF_PRODUCT_ID'], 1, CurrentUser::get()->getUserGroups());

                    $element = ElementCatalog1cTable::getList([
                        'select' => ['*'
                        ],
                        'filter' => [
                            'ACTIVE' => 'Y',
                            'ID' => $item['UF_PRODUCT_ID']
                        ]
                    ])->fetch();

                    if (empty($element)) {
                        $element = CCatalogSku::GetProductInfo($item['UF_PRODUCT_ID']);
                    }

                    $element = ElementCatalog1cTable::getList([
                        'select' => [
                            'NAME',
                            'PREVIEW_PICTURE',
                            'CML2_ARTICLE',
                            'CODE'
                        ],
                        'filter' => [
                            'ACTIVE' => 'Y',
                            'ID' => $element['ID']
                        ]
                    ])?->fetchObject();

                    $rsStoreAmount = \Bitrix\Catalog\StoreProductTable::getList(array(
                        'filter' => array('=PRODUCT_ID' => $element['ID'], 'STORE.ACTIVE'=>'Y', '>AMOUNT' => 0),
                        'select' => array('AMOUNT','STORE_ID','STORE_TITLE' => 'STORE.TITLE')
                    ));
                    while($arStoreAmount = $rsStoreAmount->fetch())
                    {
                        $amount[] = $arStoreAmount;
                    }

                    if ($element) {
                        if ($element->getName()) {
                            $productInfo['NAME'] = $element->getName();
                        }

                        if ($element->getPreviewPicture()) {
                            $productInfo['PICTURE'] = CFile::GetPath($element->getPreviewPicture());
                        }

                        if ($element->getCml2Article() && $element->getCml2Article()->getValue()) {
                            $productInfo['ARTICLE'] = $element->getCml2Article()->getValue();
                        }

                        if ($element->getCode()) {
                            $productInfo['LINK'] = '/catalog/products/' . $element->getCode() . '/';
                        }
                        $productInfo['STORE_ID'] = $amount;
                    }
                    if (
                        $productInfo['QUANTITY'] &&
                        is_array($productInfo['PRICE']) &&
                        $productInfo['PRICE']['DISCOUNT_PRICE']
                    ) {
                        $productInfo['SUM'] = (int)$productInfo['QUANTITY'] * (int)$productInfo['PRICE']['DISCOUNT_PRICE'];
                    }
                    unset($amount);
                    $this->result['ITEMS'][$key][$num] = $productInfo;
                }
            }
        }
    }

    /**
     * Функция помощник по переборке массива с товарами
     *
     * @param array $groupItems
     * @param mixed $product
     * @return array
     */
    private function getItems(array $groupItems, mixed $product) : array
    {
        if (!is_array($groupItems[$product['UF_PRODUCT_ID']]['UF_STORE_ID'])) {
            $product['UF_STORE_ID'] = [$product['UF_STORE_ID']];
        }

        if (isset($groupItems[$product['UF_PRODUCT_ID']])) {
            $groupItems[$product['UF_PRODUCT_ID']]['UF_QUANTITY'] += $product['UF_KOLICHESTVO'];
            $groupItems[$product['UF_PRODUCT_ID']]['UF_STORE_ID'][] = $product['UF_STORE_ID'];
        } else {
            $groupItems[$product['UF_PRODUCT_ID']] = $product;
        }
        return $groupItems;
    }

    /*
     * Записываем получившийся результат в переменную $arResult компонента
     *
     * @return void
     */
    private function makeResult() : void
    {
        $this->arResult = $this->result;
    }

    public function executeComponent() : void
    {
        $this->getUserBasket();
        $this->splitIntoGroupsBasketItems();
        $this->getProductsInfo();
        $this->makeResult();

        $this->includeComponentTemplate();
    }
}