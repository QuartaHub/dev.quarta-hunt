<?php

use Helpers\IblockHelper;

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
        $element = \Bitrix\Iblock\Elements\ElementHutMainCatalogTable::getByPrimary($parentId, [
            'select' => ['PREVIEW_PICTURE'],
        ])->fetch();
        $renderImage = CFile::ResizeImageGet($element["PREVIEW_PICTURE"], array("width" => 75, "height" => 82), BX_RESIZE_IMAGE_EXACT, false);
        $item['PREVIEW_PICTURE'] = $renderImage["src"];
    }
}
