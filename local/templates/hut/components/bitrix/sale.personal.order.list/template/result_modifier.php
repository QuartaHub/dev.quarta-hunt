<?php

use Helpers\IblockHelper;
use \Bitrix\Iblock\Elements\ElementHutMainCatalogTable;

foreach ($arResult['ORDERS'] as $key => &$order) {
    foreach ($order['BASKET_ITEMS'] as &$item) {
        if (str_contains($item['PRODUCT_XML_ID'], '#')) {
            $parentId = CCatalogSku::GetProductInfo(
                $item['PRODUCT_ID'],
                IblockHelper::getIdByCode("hutMainOffersCatalog")
            )['ID'];
        } else {
            $parentId = $item['PRODUCT_ID'];
        }
        $element = ElementHutMainCatalogTable::getList([
            'filter' => [
                'ID' => $parentId
            ],
            'select' => [
                'PREVIEW_PICTURE',
                'DETAIL_PICTURE'
            ]
        ])?->fetch();

        if ($element["PREVIEW_PICTURE"]) {
            $renderImage = CFile::ResizeImageGet($element["PREVIEW_PICTURE"], array("width" => 75, "height" => 82), BX_RESIZE_IMAGE_EXACT, false);
        } elseif($element["DETAIL_PICTURE"]) {
            $renderImage = CFile::ResizeImageGet($element["DETAIL_PICTURE"], array("width" => 75, "height" => 82), BX_RESIZE_IMAGE_EXACT, false);
        }

        if ($renderImage && $renderImage['src']) {
            $item['PREVIEW_PICTURE'] = $renderImage["src"];
        }
    }
}
