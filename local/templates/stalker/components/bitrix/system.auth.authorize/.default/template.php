<?

use Bitrix\Main\Localization\Loc;

if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

Loc::loadMessages(__FILE__);

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponent $component
 */

//one css for all system.auth.* forms
$APPLICATION->SetAdditionalCSS("/bitrix/css/main/system.auth/flat/style.css");
?>

<div class="bx-authform">

<?
if(!empty($arParams["~AUTH_RESULT"])):
	$text = str_replace(array("<br>", "<br />"), "\n", $arParams["~AUTH_RESULT"]["MESSAGE"]);
?>
	<div class="alert alert-danger"><?=nl2br(htmlspecialcharsbx($text))?></div>
<?endif?>

<?
if($arResult['ERROR_MESSAGE'] <> ''):
	$text = str_replace(array("<br>", "<br />"), "\n", $arResult['ERROR_MESSAGE']);
?>
	<div class="alert alert-danger"><?=nl2br(htmlspecialcharsbx($text))?></div>
<?endif?>

	<h3 class="bx-title"><?=GetMessage("AUTH_PLEASE_AUTH")?></h3>

<?if($arResult["AUTH_SERVICES"]):?>
<?
$APPLICATION->IncludeComponent("bitrix:socserv.auth.form",
	"flat",
	array(
		"AUTH_SERVICES" => $arResult["AUTH_SERVICES"],
		"AUTH_URL" => $arResult["AUTH_URL"],
		"POST" => $arResult["POST"],
	),
	$component,
	array("HIDE_ICONS"=>"Y")
);


//    $arParams["NOT_SHOW_LINKS"] = "Y";
?>

	<hr class="bxe-light">
<?endif?>

<!--	<form name="form_auth" method="post" target="_top" action="--><?//=$arResult["AUTH_URL"]?><!--">-->
	<form name="form_auth" method="post" target="_top" action="/login/">

		<input type="hidden" name="AUTH_FORM" value="Y" />
		<input type="hidden" name="TYPE" value="AUTH" />
<?if ($arResult["BACKURL"] <> ''):?>
		<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
<?endif?>
<?foreach ($arResult["POST"] as $key => $value):?>
		<input type="hidden" name="<?=$key?>" value="<?=$value?>" />
<?endforeach?>

		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><?=GetMessage("AUTH_LOGIN")?></div>
			<div class="bx-authform-input-container">
				<input type="text" name="USER_LOGIN" maxlength="255" value="<?=$arResult["LAST_LOGIN"]?>" />
			</div>
		</div>
		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><?=GetMessage("AUTH_PASSWORD")?></div>
			<div class="bx-authform-input-container">
<?if($arResult["SECURE_AUTH"]):?>
				<div class="bx-authform-psw-protected" id="bx_auth_secure" style="display:none"><div class="bx-authform-psw-protected-desc"><span></span><?echo GetMessage("AUTH_SECURE_NOTE")?></div></div>

<script type="text/javascript">
document.getElementById('bx_auth_secure').style.display = '';
</script>
<?endif?>
				<input type="password" name="USER_PASSWORD" maxlength="255" autocomplete="off" />
			</div>
		</div>

<?if($arResult["CAPTCHA_CODE"]):?>
		<input type="hidden" name="captcha_sid" value="<?echo $arResult["CAPTCHA_CODE"]?>" />

		<div class="bx-authform-formgroup-container dbg_captha">
			<div class="bx-authform-label-container">
				<?echo GetMessage("AUTH_CAPTCHA_PROMT")?>
			</div>
			<div class="bx-captcha"><img src="/bitrix/tools/captcha.php?captcha_sid=<?echo $arResult["CAPTCHA_CODE"]?>" width="180" height="40" alt="CAPTCHA" /></div>
			<div class="bx-authform-input-container">
				<input type="text" name="captcha_word" maxlength="50" value="" autocomplete="off" />
			</div>
		</div>
<?endif;?>

<?if ($arResult["STORE_PASSWORD"] == "Y"):?>
<?/*?>
		<div class="bx-authform-formgroup-container">
			<div class="checkbox form-check">
                <input type="checkbox" id="USER_REMEMBER" name="USER_REMEMBER" class="form-check-input" value="Y" checked="checked" />
                    <!--                    <span class="ui-radio"></span>-->
                <label class="bx-filter-param-label checkout__label_ form-check-label" for="USER_REMEMBER">
					<span class="bx-filter-param-text"><?=GetMessage("AUTH_REMEMBER_ME")?></span>
				</label>
			</div>
		</div>
<?*/?>

    <div class="customers__subscribe">
        <label class="toggle">
            <input type="checkbox" id="USER_REMEMBER" name="USER_REMEMBER" class="form-check-input" value="Y" checked="checked" />
            <span class="toggle__item"></span>
        </label>
        <div class="customers__subscribe-text">
            <?=GetMessage("AUTH_REMEMBER_ME")?>
        </div>
    </div>
<?endif?>
        <div class="privacy-block">
            <input required type="checkbox" id="privacy-text" name="privacy-text">
            <label for="privacy-text"><?= Loc::getMessage('PRIVACY_TEXT') ?></label>
            <div class="error_message"></div>
        </div>
		<div class="bx-authform-formgroup-container">
			<input type="submit" class="ui-button ui-button--red auth" style="padding: 16px; max-width: 100%" name="Login" value="<?=GetMessage("AUTH_AUTHORIZE")?>" />
		</div>
	</form>
<??>
<?if ($arParams["NOT_SHOW_LINKS"] != "Y"):?>
	<hr class="bxe-light">

	<noindex>
		<div class="bx-authform-link-container">
			<a href="/auth/?forgot_password=yes" rel="nofollow"><b><?=GetMessage("AUTH_FORGOT_PASSWORD_2")?></b></a>
		</div>
	</noindex>
<?endif?>

<?if($arParams["NOT_SHOW_LINKS"] != "Y" && $arResult["NEW_USER_REGISTRATION"] == "Y" && $arParams["AUTHORIZE_REGISTRATION"] != "Y"):?>
	<noindex>
		<div class="bx-authform-link-container">
			<?=GetMessage("AUTH_FIRST_ONE")?><br />
			<a href="/auth/?register=yes" rel="nofollow"><b><?=GetMessage("AUTH_REGISTER")?></b></a>
		</div>
	</noindex>
<?endif?>
<??>
</div>

<script type="text/javascript">
<?if ($arResult["LAST_LOGIN"] <> ''):?>
try{document.form_auth.USER_PASSWORD.focus();}catch(e){}
<?else:?>
try{document.form_auth.USER_LOGIN.focus();}catch(e){}
<?endif?>
</script>

