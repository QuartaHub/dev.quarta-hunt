<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

use Bitrix\Main\Context;

$request = Context::getCurrent()->getRequest();
if ($request->get("CANCEL")) {
    $order = \Bitrix\Sale\Order::load($request->get("ID"));
    if ($order->isCanceled() == false) {
        $order->setField("CANCELED", "Y");
        $order->setField("STATUS_ID", "OT");
        $order->save();

        echo json_encode(['statusCancel' => 'success']);
    } else {
        echo json_encode(['statusCancel' => 'nothing']);
    }
}
