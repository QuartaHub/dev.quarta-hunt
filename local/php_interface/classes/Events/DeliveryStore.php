<?php

namespace CustomEvents;

use \Bitrix\Main\Event;
use \Bitrix\Sale;
use \Bitrix\Iblock\Elements\ElementDeliveryStoreTable;
use \Bitrix\Sale\Delivery\Services\Manager;
use \Bitrix\Main\Context;



class DeliveryStore
{   
    public static function getBasket()
    {
        return Sale\Basket::loadItemsForFUser(Sale\Fuser::getId(), Context::getCurrent()->getSite());
    }

    /*public static function getDeliveryId(&$arResult, &$arParams)
    {   
        $storeValue = self::userBasketList();
        
        foreach($arResult['DELIVERY'] as $deliveryProps){
           if($deliveryProps['CHECKED'] == "Y"){
                $checedDelivery = $deliveryProps['ID'];
           }
        }
        
        foreach($arResult['BASKET_ITEMS'] as $key => &$basketItemJS){
           foreach ($storeValue[$basketItemJS['PRODUCT_ID']]['STORES'] as $store) {
                if ($checedDelivery == $store['DELIVERY_ID']) {
                    $basketItemJS['QUANTITY'] = $store["STORE_QUANTITY"];
                }
            }
        }
        //self::checkBasket(3);
        file_put_contents($_SERVER["DOCUMENT_ROOT"].'/test.txt', var_export($arResult, true) );
    }*/

    public static function getDeliveryId($order, &$arUserResult, $request, &$arParams, &$arResult) 
    {   
        $basket = self::getBasket();
        $storeValue = self::userBasketList();

        foreach($arResult['DELIVERY'] as $deliveryProps){
           if($deliveryProps['CHECKED'] == "Y"){
                $checkedDelivery = $deliveryProps['ID'];
           }
        }
        
        foreach($arResult['BASKET_ITEMS'] as &$basketItem){
           foreach ($storeValue[$basketItem['ID']]['STORES'] as $store) {
                if ($checkedDelivery == $store['DELIVERY_ID']) {
                    $basketItem['QUANTITY'] = $store["STORE_QUANTITY"];
                    $basketItem['~QUANTITY'] = $store["STORE_QUANTITY"];
                    $order->getBasket()->getItemById($basketItem['ID'])->setField("QUANTITY", $store["STORE_QUANTITY"]);
                }
            }
        }

        foreach($arResult['JS_DATA']['GRID']['ROWS'] as &$basketItemJS){
            foreach ($storeValue[$basketItemJS['data']['ID']]['STORES'] as $store) {
                if ($checkedDelivery == $store['DELIVERY_ID']) {
                    $basketItemJS['data']['QUANTITY'] = $store["STORE_QUANTITY"];
                    $basketItemJS['data']['~QUANTITY'] = $store["STORE_QUANTITY"];
                    $basketItemJS['columns']['QUANTITY'] = $store["STORE_QUANTITY"] . preg_replace("/[0-9]{1}/", "", $basketItemJS['columns']['QUANTITY']); 
                }
            } 
        }

        foreach($arResult['GRID']['ROWS'] as &$basketItemCrid){
            foreach ($storeValue[$basketItemCrid['data']['ID']]['STORES'] as $store) {
                if ($checkedDelivery == $store['DELIVERY_ID']) {
                    $basketItemCrid['data']['QUANTITY'] = $store["STORE_QUANTITY"];
                    $basketItemCrid['data']['~QUANTITY'] = $store["STORE_QUANTITY"];
                    $basketItemCrid['columns']['QUANTITY'] = $store["STORE_QUANTITY"] . preg_replace("/[0-9]{1}/", "", $basketItemJS['columns']['QUANTITY']);
                }
            } 
        }

        foreach($arUserResult['QUANTITY_LIST'] as $key => &$quantityItem){
           foreach ($storeValue[$key]['STORES'] as $store) {
                if ($checkedDelivery == $store['DELIVERY_ID']) {
                    $quantityItem = $store["STORE_QUANTITY"];
                }
            }
        }

        foreach ($basket as $basketElItem) {
            foreach ($storeValue[$basketElItem->getId()]['STORES'] as $store) {
                if ($checkedDelivery == $store['DELIVERY_ID']) {
                    $quantity = $store["STORE_QUANTITY"];
                }
            }
 
            if ($basketElItem->getQuantity() > $quantity) {
                $basketElItem->setField('QUANTITY', $quantity);
                $basketElItem->save();
            }
        }

        file_put_contents($_SERVER["DOCUMENT_ROOT"].'/test.txt', var_export($arResult, true), FILE_APPEND);
    }

    /*public static function checkBasket($arResult)
    {
        $basket = self::getBasket();
        $storeValue = self::userBasketList();

        foreach ($basket as $basketItem) {
            foreach ($storeValue[$basketItem->getProductId()]['STORES'] as $store) {
                if ($curDelivertId == $store['DELIVERY_ID']) {
                    $quantity = $store["STORE_QUANTITY"];
                }
            }

            if ($basketItem->getQuantity() > $quantity) {
                var_export($quantity);
                $basketItem->setField('QUANTITY', $quantity);
                $basketItem->save();
            }
        }
    }*/

    public static function userBasketList()
    {
        $delivery = self::deliveryLinkStore();
        $basket = self::getBasket();
        $quantityBasketItems = [];

        foreach ($basket as $basketItem) {
            $productProps = \CCatalogProduct::GetByID($basketItem->getProductId());
            $rsStores = \CCatalogStoreProduct::GetList(
                [],
                ["PRODUCT_ID" => $basketItem->getProductId()],
                ["STORE_ID", "AMOUNT"]
            );

            while ($arStore = $rsStores->Fetch()) {
                $stores[$arStore["STORE_ID"]] = [
                    "STORE_QUANTITY" => $arStore["AMOUNT"],
                    "DELIVERY_ID" => $delivery[$arStore["STORE_ID"]]['VALUE']
                ];
            }

            $quantityBasketItems[$basketItem->getId()] = [
                'PRODUCT_ID' => $basketItem->getProductId(),
                'BASKET_ID' => $basketItem->getId(),
                'QUANTITY_BASKET' => $basketItem->getQuantity(),
                'QUANTITY_AVAILABLE' => $productProps['QUANTITY'],
                'STORES' => $stores
            ];
        }

        return $quantityBasketItems;
    }

    public static function deliveryLinkStore()
    {
        $arSeliveryLinkStore = [];
        $deliveryLinkStoreElements = ElementDeliveryStoreTable::getList([
            'select' => ['ID', 'NAME', 'DELIVERY_TYPE_' => 'DELIVERY_TYPE', 'STORE_' => 'STORE'],
            'filter' => ['ACTIVE' => 'Y'],
        ])->fetchAll();

        foreach ($deliveryLinkStoreElements as $element) {
            $arSeliveryLinkStore[$element['STORE_VALUE']] = ['VALUE' => $element['DELIVERY_TYPE_VALUE']];
        }

        return $arSeliveryLinkStore;
    }
}
