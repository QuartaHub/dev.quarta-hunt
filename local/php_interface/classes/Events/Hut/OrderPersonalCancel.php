<?php

namespace CustomEvents\Hut;

use  Bitrix\Main\Context;

class OrderPersonalCancel
{
    public static function orderCancel()
    {
        $context = Context::getCurrent();
        $request = $context->getRequest();

        if ($request->get("CANCEL")) {
            $order = \Bitrix\Sale\Order::load($request->get("ID"));
            $order->setField("CANCELED", "Y");
            $order->save();
        }
    }
}
