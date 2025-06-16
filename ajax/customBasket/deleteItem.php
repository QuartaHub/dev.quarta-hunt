<?php

require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) {
    die();
}

use Bitrix\Main\Application;
use Local\Util\HighloadblockManager;
use \Bitrix\Sale\Fuser;

$request = Application::getInstance()->getContext()->getRequest();

$productId = intval($request->getPost('productId')) ?: 0;
$storeIds = (string)$request->getPost('storeIds') ?: '';

if (
    $productId === 0
) {
    die(json_encode(['SUCCESS' => false]));
}

$storeIds = explode(',', $storeIds);
$fUser = Fuser::getId();

if (!is_array($storeIds) || count($storeIds) <= 0) {
    die(json_encode(['SUCCESS' => false]));
}

foreach ($storeIds as $storeId) {
    $customBasketsHl = new HighloadblockManager(QUARTA_BUFFERBASKET_CODE_GROUP);

    $customBasketsHl->prepareParamsQuery(
        ['ID'],
        [],
        [
            'UF_FUSER_ID' => $fUser,
            'UF_PRODUCT_ID' => $productId,
        ]
    );

    $item = $customBasketsHl->getData();

    if ($item) {
        try {
            $customBasketsHl->delete($item['ID']);
        } catch (Exception $error) {
            die(json_encode([
                'SUCCESS' => false,
                'ERROR_MESSAGE' => $error->getMessage()
            ]));
        }
    }
}

die(json_encode(['SUCCESS' => true]));