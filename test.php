<?php

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Интернет магазин товаров для охоты, стрельбы и активного отдыха в Quarta «Оружейный квартал»");
$APPLICATION->SetPageProperty("title", "Товары для охоты, стрельбы и активного отдыха в Quarta «Оружейный квартал»");

$APPLICATION->SetTitle("Товары для охоты, стрельбы и активного отдыха в Quarta «Оружейный квартал»"); ?>
<?
$offersExists = CCatalogSKU::getExistOffers(
    45839, // ID товара
    $iblockId // ID инфоблока (необязательно)
);

if ($offersExists) {
    echo "У товара есть торговые предложения";
} else {
    echo "У товара есть торговые предложения";
}
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php");