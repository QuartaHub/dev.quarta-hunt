<?php

namespace CustomEvents;

use Bitrix\Main\Diag\Debug;
use Helpers\IblockHelper;
use \Bitrix\Catalog\ProductTable;

class OnAfterIBlockElementUpdate
{
    public static function OnAfterIBlockElementUpdateHandler(&$arFields) : void
    {
        if ($arFields['IBLOCK_ID'] == 107) {
            $product = ProductTable::getList([
                'filter' => ['ID' => $arFields['ID']]
            ])?->fetch();

            $available = false;

            if (is_array($product) && $product['AVAILABLE'] == 'Y') {
                $available = '16888';
            }

            \CIBlockElement::SetPropertyValuesEx(
                $arFields['ID'],
                false,
                [
                    'IS_AVAILABLE' => $available
                ]
            );
        }
    }
}