<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Блог");?>

<?php

global $USER;

$itsUrFace = false;
$itsPrivatePerson = false;
$itsGuest = $USER->IsAuthorized();

$rsUser = CUser::GetByID($USER->GetID());
$arUser = $rsUser->Fetch();

if ($arUser && $arUser['UF_TYPE'] == 'wholesale') {
	$itsUrFace = true;
} else if ($arUser && $arUser['UF_TYPE'] == 'retail') {
	$itsPrivatePerson = true;
}

if ($itsUrFace) {
	$GLOBALS['arrFilterNews'] = ['!PROPERTY_HIDE_ON_UR_VALUE' => 'Y'];
} else if ($itsPrivatePerson) {
	$GLOBALS['arrFilterNews'] = ['!PROPERTY_HIDE_ON_PRIVATE_PERSON_VALUE' => 'Y'];
}

if($itsGuest) {
	$GLOBALS['arrFilterNews'] = ['!PROPERTY_HIDE_ON_GUEST_VALUE' => 'Y'];
}

?>

<?$APPLICATION->IncludeComponent(
	"bitrix:news", 
	"news", 
	array(
		"ADD_ELEMENT_CHAIN" => "Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"BROWSER_TITLE" => "-",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "7200",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"COMPONENT_TEMPLATE" => "news",
		"DETAIL_ACTIVE_DATE_FORMAT" => "d.m.Y",
		"DETAIL_DISPLAY_BOTTOM_PAGER" => "Y",
		"DETAIL_DISPLAY_TOP_PAGER" => "N",
		"DETAIL_FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"DETAIL_PAGER_SHOW_ALL" => "Y",
		"DETAIL_PAGER_TEMPLATE" => "",
		"DETAIL_PAGER_TITLE" => "Страница",
		"DETAIL_PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"DETAIL_SET_CANONICAL_URL" => "N",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FILTER_FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "arrFilterNews",
		"FILTER_PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "news",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"LIST_ACTIVE_DATE_FORMAT" => "d.m.Y",
		"LIST_FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"LIST_PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"MEDIA_PROPERTY" => "",
		"MESSAGE_404" => "",
		"META_DESCRIPTION" => "-",
		"META_KEYWORDS" => "-",
		"NEWS_COUNT" => "25",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => "articles",
		"PAGER_TITLE" => "Блог",
		"PREVIEW_TRUNCATE_LEN" => "",
		"SEF_FOLDER" => "/blog/",
		"SEF_MODE" => "Y",
		"SET_LAST_MODIFIED" => "Y",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"SHOW_404" => "N",
		"SLIDER_PROPERTY" => "",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N",
		"TEMPLATE_THEME" => "blue",
		"USE_CATEGORIES" => "N",
		"USE_FILTER" => "Y",
		"USE_PERMISSIONS" => "N",
		"USE_RATING" => "N",
		"USE_REVIEW" => "N",
		"USE_RSS" => "N",
		"USE_SEARCH" => "N",
		"USE_SHARE" => "N",
		"SEF_URL_TEMPLATES" => array(
			"news" => "",
			"section" => "#CODE#/",
			"detail" => "#SECTION_CODE#/#ELEMENT_CODE#/",
		)
	),
	false
);?>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>