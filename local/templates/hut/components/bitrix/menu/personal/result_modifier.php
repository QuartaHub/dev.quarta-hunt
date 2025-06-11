<?php

global $APPLICATION;

foreach ($arResult as $key => &$arItem):
    if ($arItem['LINK'] == '/exit' && $USER->IsAuthorized()) {
        $arItem['LINK'] = $APPLICATION->GetCurPageParam(
            "logout=yes&" . bitrix_sessid_get(),
            [
                "login",
                "logout",
                "register",
                "forgot_password",
                "change_password"
            ]
        );
    }
    if ($arItem['LINK'] == '/exit' && !$USER->IsAuthorized()) {
        $arItem['PERMISSION'] = 'N';
    }
endforeach;