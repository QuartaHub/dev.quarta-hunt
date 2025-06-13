<?php

namespace Personal;

use CIBlockSection;
use General\Product;
use Bitrix\Highloadblock as HL;
use Exception;
use CModule;
use Bitrix\Sale\Fuser;

/**
 * Класс по работе с буферной корзиной
 */
class BufferBasket extends Basket
{
    private $fUser;

    public function __construct()
    {
        $this->fUser = Fuser::getId();
        parent::__construct();
    }

    public function addProductToBufferBasket(int $productId, int $quantity = 1): bool
    {
        try {
            $productObject = new Product($productId);
            $productIblockSectionID = $productObject->getFieldValue('IBLOCK_SECTION_ID');
            $productIblockID = $productObject->getFieldValue('IBLOCK_ID');
            $productPrice = $productObject->getFieldValue('PRICE_1');
            $productPrice3 = $productObject->getFieldValue('PRICE_3');

            if (!$this->isProductAvailable($productId, $quantity)) {
                return false;
            }

            $sectionResource = CIBlockSection::GetList(
                [],
                ["IBLOCK_ID" => $productIblockID, "ID" => $productIblockSectionID],
                false,
                ['UF_LISENCE_PRODUCTS'])
                ->GetNext();

            $isOpt = $this->user->isWholesaler();
            $hlblock = HL\HighloadBlockTable::getById(QUARTA_BUFFERBASKET_CODE_GROUP)->fetch();
            $entity = HL\HighloadBlockTable::compileEntity($hlblock);
            $entityDataClass = $entity->getDataClass();
            $changeData = $entityDataClass::getList([
                "select" => ['ID', 'UF_KOLICHESTVO'],
                "order" => ["ID" => "ASC"],
                "filter" => ["UF_FUSER_ID" => $this->fUser, "UF_PRODUCT_ID" => $productId]
            ])->fetch();

            if (!empty($changeData)) {
                $data = ["UF_KOLICHESTVO" => $changeData['UF_KOLICHESTVO'] + 1];
                $entityDataClass::update($changeData['ID'], $data);
            } else {
                $data = [ "UF_PRODUCT_ID" => $productId,
                    "UF_KOLICHESTVO" => $quantity,
                    "UF_PRICE" => !$isOpt ? $productPrice : $productPrice3,
                    "UF_LICENSE" => $sectionResource['UF_LISENCE_PRODUCTS'],
                    "UF_FUSER_ID" => $this->fUser];
                $entityDataClass::add($data);
            }

            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    public function deleteProductFromBufferBasket(int $productId): bool
    {
        try {
            $hlblock = HL\HighloadBlockTable::getById(QUARTA_BUFFERBASKET_CODE_GROUP)->fetch();
            $entity = HL\HighloadBlockTable::compileEntity($hlblock);
            $entityDataClass = $entity->getDataClass();
            $changeData = $entityDataClass::getList(array(
                "select" => ['ID', 'UF_KOLICHESTVO'],
                "order" => ["ID" => "ASC"],
                "filter" => ["UF_FUSER_ID" => $this->fUser, "UF_PRODUCT_ID" => $productId]
            ))->fetch();

            if (!empty($changeData)) {
                $data = ["UF_KOLICHESTVO" => $changeData['UF_KOLICHESTVO'] - 1];
                $data['UF_KOLICHESTVO'] === 0 ? $entityDataClass::Delete($changeData['ID']) :
                    $entityDataClass::update($changeData['ID'], $data);
            } else {
                return false;
            }

            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}