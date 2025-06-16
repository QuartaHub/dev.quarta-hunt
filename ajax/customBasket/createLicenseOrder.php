<?php

require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) {
    die();
}

use Bitrix\Main\Loader;
use Bitrix\Main\Application;

$request = Application::getInstance()->getContext()->getRequest();
$products = json_decode($request->getPost('other_fields'));

$BID_LICENSE_PRODUCT_IBLOCK_ID = 113;

if ($arFields['IBLOCK_ID'] == self::$BID_LICENSE_PRODUCT_IBLOCK_ID) {
    Loader::includeModule('iblock');

    $rsSites = \CSite::GetList($by = "sort", $order = "desc", array("DOMAIN" => $_SERVER['SERVER_NAME']));
    while ($arSite = $rsSites->Fetch()) {
        $arSites[] = $arSite["LID"];
    }
    $siteId = $arSites[0];

    $rsSections = \CIBlockSection::GetList(
        [],
        [
            'ACTIVE' => 'Y',
            'IBLOCK_ID' => $arFields['IBLOCK_ID'],
            "=NAME" => $siteId
        ],
        false,
        false,
        ['ID']
    );

    if ($section = $rsSections->Fetch()) {
        $arSects[] = $section['ID'];
        \CIBlockElement::SetElementSection($arFields["ID"], $arSects);
        \Bitrix\Iblock\PropertyIndex\Manager::updateElementIndex($arSects, $arFields["ID"]);
    }

    $arProps = [];

    foreach ($arFields['PROPERTY_VALUES'] as $key => $value) {
        $res = \CIBlockProperty::GetByID($key);
        if ($ar_res = $res->GetNext()) {
            $arProps[$key]['CODE'] = $ar_res['CODE'];
        }

        $arProps[$key]['VALUE'] = $value;
    }

    foreach ($arProps as $key => $propsValue) {
        $mailFields[$propsValue['CODE']] = $propsValue['VALUE'];
    }

    $mailFields['SITE_ID'] = $siteId;

    self::mailTemplateSend($mailFields);

    die(json_encode(['SUCCESS' => true]));