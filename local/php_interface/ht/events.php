<?php

use Bitrix\Main\EventManager;
use Bitrix\Main\Loader;

Loader::includeModule('sale');
Loader::includeModule('iblock');

$eventManager = EventManager::getInstance();

$eventManager->addEventHandler(
    'main',
    'OnBeforeUserRegister',
    [
        'CustomEvents\CUserEx',
        'OnBeforeUserRegister'
    ]
);
