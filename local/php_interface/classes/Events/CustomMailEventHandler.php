<?
namespace CustomEvents;

use CFormResult;

class CustomMailEventHandler
{
    static function onBeforeEventAddHandler(&$event, &$lid, &$arFields, &$message_id, &$files)
    {
        //  FORM_FILLING_SIMPLE_FORM_4 - тип почтового события и 337 - ID почтового шаблона на свои
        if ($event === 'FORM_FILLING_SIMPLE_FORM_4' && $message_id === '337') {

            if (!is_array($files)) $files = [];

            foreach ($arFields as $key => $field) {

                if ($link = self::getLinkFromField($field)) {

                    if ($arFile = self::getFileFromLink($link)) {

                        $files[] = $arFile['FILE_ID'];

                    }

                }

            }
        }
    }

    // Ищем ссылки на скачивания файлов в письме
    static function getLinkFromField($field)
    {
        preg_match("/(https\:.*form_show_file.*action\=download)/", $field, $out);
        return ($out[1] ?: false);
    }


    static function getFileFromLink($link)
    {
        $uri = new \Bitrix\Main\Web\Uri($link);
        parse_str($uri->getQuery(), $query);
        return CFormResult::GetFileByHash($query["rid"], $query["hash"]);
    }

}