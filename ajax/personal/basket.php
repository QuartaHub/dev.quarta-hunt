<?php

include_once $_SERVER["DOCUMENT_ROOT"] . '/bitrix/modules/main/include/prolog_before.php';

use Personal\Basket;
use Personal\BufferBasket;

$requestBody = json_decode(file_get_contents('php://input'));
$response = null;

$basket = new Basket();
$bufferBasket = new BufferBasket();

switch ($requestBody->action) {
    case 'GET':
        $response = $basket->getProductsInBasket();
        break;

    case 'GET_COUNT':
        $response = $basket->getProductsCount();
        break;

    case 'GET_AVAILABLE_OFFERS_FOR_PURCHASING':
        $response = $basket->getAvailableOffersForPurchasing($requestBody->id);
        break;

    case 'GET_AVAILABLE_OFFERS_FOR_DELETING':
        $response = $basket->getAvailableOffersForDeleting($requestBody->id);
        break;

    case 'ADD':
        $response = $basket->addProductToBasket($requestBody->id, $requestBody->quantity);
        $response = $bufferBasket->addProductToBufferBasket($requestBody->id, $requestBody->quantity);
        break;

    case 'SET_QUANTITY':
        $response = $basket->setProductQuantityToBasket($requestBody->id, $requestBody->quantity);
        break;

    case 'DELETE':
        $response = $basket->deleteProductFromBasket($requestBody->id, $requestBody->quantity);
        $response = $bufferBasket->deleteProductFromBufferBasket($requestBody->id);
        break;

    case 'DELETE_ALL':
        $response = $basket->deleteAllProductFromBasket();
        break;

    default:
        break;
}

echo json_encode($response);