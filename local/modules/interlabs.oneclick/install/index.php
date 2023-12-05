<?php
/**
 * Created by PhpStorm.
 * User: akorolev
 * Date: 01.10.2018
 * Time: 10:01
 */

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ModuleManager;
use Bitrix\Main\Config\Option;
use Bitrix\Main\EventManager;
use Bitrix\Main\Application;
use Bitrix\Main\IO\Directory;
use \Bitrix\Main\IO\File;

Loc::loadMessages(__FILE__);

/**
 * Class interlabs_oneclick
 */
class interlabs_oneclick extends CModule
{
    var $MODULE_ID = "interlabs.oneclick";
    var $MODULE_NAME;
    var $MODULE_DESCRIPTION;
    var $MODULE_VERSION;
    var $MODULE_VERSION_DATE;
    /**
     * interlabs_ONECLICK constructor.
     */
    public function __construct()
    {

        if (file_exists(__DIR__ . "/version.php")) {

            $arModuleVersion = array();

            include(__DIR__ . "/version.php");

            $this->MODULE_ID = str_replace("_", ".", get_class($this));
            $this->MODULE_VERSION = $arModuleVersion["VERSION"];
            $this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
            $this->MODULE_NAME = Loc::getMessage("INTERLABS_ONECLICK_NAME");
            $this->MODULE_DESCRIPTION = Loc::getMessage("INTERLABS_ONECLICK_DESCRIPTION");
            $this->PARTNER_NAME = Loc::getMessage("INTERLABS_ONECLICK_PARTNER_NAME");
            $this->PARTNER_URI = Loc::getMessage("INTERLABS_ONECLICK_PARTNER_URI");
        }

        return false;
    }

    /**
     * @return bool|void
     */
    public function DoInstall()
    {

        global $APPLICATION;

        if (!CModule::IncludeModule('sale')) {
            $APPLICATION->ThrowException(
                'Sale module is not install'
            );
        }

        if (CheckVersion(ModuleManager::getVersion("main"), "14.00.00")) {

            $this->InstallFiles();
            $this->InstallDB();

            ModuleManager::registerModule($this->MODULE_ID);

            $this->InstallEvents();
        } else {

            $APPLICATION->ThrowException(
                Loc::getMessage("INTERLABS_ONECLICK_INSTALL_ERROR_VERSION")
            );
        }

        $APPLICATION->IncludeAdminFile(
            Loc::getMessage("INTERLABS_ONECLICK_INSTALL_TITLE") . " \"" . Loc::getMessage("INTERLABS_ONECLICK_NAME") . "\"",
            __DIR__ . "/step.php"
        );

        Option::set($this->MODULE_ID, 'FIO_CODE', 'NAME');
        Option::set($this->MODULE_ID, 'EMAIL_CODE', 'EMAIL');
        Option::set($this->MODULE_ID, 'PHONE_CODE', 'PHONE');


        if (Loader::includeModule('sale')) {
            $db_ptype = CSalePersonType::GetList(Array("SORT" => "ASC"), []);//Array("LID" => SITE_ID)
            $arSalePersonType = [];
            while ($ptype = $db_ptype->Fetch()) {
                $arSalePersonType[$ptype["ID"]] = $ptype["NAME"];
                if (Option::get($this->MODULE_ID, 'person_type_id', 0) == 0) {
                    Option::set($this->MODULE_ID, 'person_type_id', $ptype["ID"]);
                }
            }

            if (true || count($arSalePersonType) == 0) {
                $by = "sort";
                $order = "asc";
                $db_res = CLanguage::GetList($by, $order);
                $lang=[];
                if ($db_res && $res = $db_res->GetNext()) {
                    do {
                        $lang[$res["LID"]] = $res;

                    } while ($res = $db_res->GetNext());
                }
                foreach ($lang as $idLang => $arLang) {
                    $el = new CSalePersonType;
                    if ($id = $el->Add([
                            'LID' => $idLang,// - ��� �����, � �������� �������� ��� �����������. (����� ���� �������� ������);
                            'NAME' => 'Default',// - �������� ���� �����������;
                            'SORT' => '500',// - ������ ����������.
                            'ACTIVE' => 'Y',// - ���� ���������� ������������ [Y|N] .
                        ]
                    )) {
                        Option::set($this->MODULE_ID, 'person_type_id', $id);
                        //https://dev.1c-bitrix.ru/user_help/store/sale/settings/order_props/sale_order_props_group.php
                        //add group SELECT * FROM `b_sale_order_props_group` LIMIT 0, 1000
                        //add property SELECT * FROM `b_sale_order_props` LIMIT 0, 1000
                        break;
                    }
                }

            }
        }else{
           // echo 'No load sale module';
        }

        return false;
    }

    /**
     * @return bool|void
     */
    public function InstallFiles()
    {
        CopyDirFiles(
            __DIR__ . "/components/interlabs/oneclick",
            Application::getDocumentRoot() . "/bitrix/components/interlabs/oneclick",
            true,
            true
        );


        return false;
    }

    /**
     * @return bool
     */
    public function InstallDB()
    {

        return false;
    }

    /**
     * @return bool|void
     */
    public function InstallEvents()
    {
        return false;
    }

    /**
     * @return bool|void
     */
    public function DoUninstall()
    {

        global $APPLICATION;

        $this->UnInstallFiles();
        $this->UnInstallDB();
        $this->UnInstallEvents();

        ModuleManager::unRegisterModule($this->MODULE_ID);

        $APPLICATION->IncludeAdminFile(
            Loc::getMessage("INTERLABS_ONECLICK_UNINSTALL_TITLE") . " \"" . Loc::getMessage("INTERLABS_ONECLICK_NAME") . "\"",
            __DIR__ . "/unstep.php"
        );

        return false;
    }

    /**
     * @return bool|void
     */
    public function UnInstallFiles()
    {


        Directory::deleteDirectory(
            Application::getDocumentRoot() . "/bitrix/components/interlabs/oneclick"
        );

        return false;
    }

    public function UnInstallDB()
    {

        Option::delete($this->MODULE_ID);

        return false;
    }

    public function UnInstallEvents()
    {


        return false;
    }

}