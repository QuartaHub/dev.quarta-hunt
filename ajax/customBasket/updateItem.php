<?php

require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) {
    die();
}

use Bitrix\Main\Application;
use Local\Util\HighloadblockManager;
use \Bitrix\Sale\Fuser;
use \Bitrix\Catalog\StoreProductTable;

$request = Application::getInstance()->getContext()->getRequest();

$productId = intval($request->getPost('productId')) ?: 0;
$storeIds = (string)$request->getPost('storeIds') ?: '';
$quantity = intval($request->getPost('quantity')) ?: 0;
$mode = $request->getPost('mode') ?: 'all';

if (
    $productId === 0 ||
    $quantity === 0
) {
    die(json_encode(['SUCCESS' => false]));
}

$storeIds = explode(',', $storeIds);
$userId = 0;
$fUser = Fuser::getId();
$mode = 'all';

switch ($mode) {
    case 'store' :

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
            $field = [
                'UF_KOLICHESTVO' => $quantity
            ];

            try {
                $customBasketsHl->update($item['ID'], $field);
                die(json_encode(['SUCCESS' => true]));
            } catch (Exception $error) {
                die(json_encode([
                    'SUCCESS' => false,
                    'ERROR_MESSAGE' => $error->getMessage()
                ]));
            }
        }

        die(json_encode(['SUCCESS' => false]));
    case 'all' :
    {
            $store = StoreProductTable::getList([
                'select' => ['AMOUNT'],
                'filter' => [
                    'PRODUCT_ID' => $productId,
                    'STORE.ACTIVE' => 'Y',
                ]
            ])?->fetch();

            $maxStoreAmount = 0;
            if ($store) {
                $maxStoreAmount = $store['AMOUNT'];
            }

            if ($maxStoreAmount >= $quantity) {
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
                    $field = [
                        'UF_KOLICHESTVO' => $quantity
                    ];
                    try {
                        $customBasketsHl->update($item['ID'], $field);
                        die(json_encode(['SUCCESS' => true]));
                    } catch (Exception $error) {
                        die(json_encode([
                            'SUCCESS' => false,
                            'ERROR_MESSAGE' => $error->getMessage()
                        ]));
                    }
                }
            } else {
                $quantity = $quantity - $maxStoreAmount;

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
                    $field = [
                        'UF_KOLICHESTVO' => $maxStoreAmount
                    ];
                    try {
                        $customBasketsHl->update($item['ID'], $field);
                    } catch (Exception $error) {
                        die(json_encode([
                            'SUCCESS' => false,
                            'ERROR_MESSAGE' => $error->getMessage()
                        ]));
                    }
                }
            }
        }

        if ($quantity > 0) {
            $customBasketsHl = new HighloadblockManager(QUARTA_BUFFERBASKET_CODE_GROUP);

            $customBasketsHl->prepareParamsQuery(
                [
                    'ID',
                    'UF_KOLICHESTVO'
                ],
                [],
                [
                    'UF_FUSER_ID' => $fUser,
                    'UF_PRODUCT_ID' => $productId,
                ]
            );

            $item = $customBasketsHl->getData();

            if ($item) {
                $field = [
                    'UF_KOLICHESTVO' => $quantity + $item['UF_KOLICHESTVO']
                ];

                try {
                    $customBasketsHl->update($item['ID'], $field);
                    die(json_encode(['SUCCESS' => true]));
                } catch (Exception $error) {
                    die(json_encode([
                        'SUCCESS' => false,
                        'ERROR_MESSAGE' => $error->getMessage()
                    ]));
                }
            }
        }

        die(json_encode(['SUCCESS' => false]));
}

die(json_encode(['SUCCESS' => false]));