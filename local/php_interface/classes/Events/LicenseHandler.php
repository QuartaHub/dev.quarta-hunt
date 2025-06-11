<?php

namespace CustomEvents;

use Bitrix\Main\Loader;

class LicenseHandler
{
    protected static $BID_LICENSE_PRODUCT_IBLOCK_ID = 113;

    public static function IBlockElementAddHandler(&$arFields)
    {
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
                $arFields['IBLOCK_SECTION_ID'][] = $section['ID'];
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
        }
    }

    public static function mailTemplateSend($mailFields)
    {
        \Bitrix\Main\Mail\Event::sendImmediate(array(
            "EVENT_NAME" => "BID_LICENSE_PRODUCT",
            "LID" => $mailFields['SITE_ID'],
            "C_FIELDS" => $mailFields['SITE_ID']
        ));
    }
}
