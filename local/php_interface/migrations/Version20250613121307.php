<?php

namespace Sprint\Migration;

class Version20250613121307 extends Version
{
    protected $author = "admin";

    protected $description   = "124572 | 1. Доработка служб доставки - с помощью модуля маркетплейс - Изменения логики оформления заказа | элементы ИБ связей";

    protected $moduleVersion = "4.2.4";

    /**
     * @throws Exceptions\MigrationException
     * @throws Exceptions\RestartException
     * @return bool|void
     */
    public function up()
    {
        $this->getExchangeManager()
             ->IblockElementsImport()
             ->setExchangeResource('iblock_elements.xml')
             ->setLimit(20)
             ->execute(function ($item) {
                 $this->getHelperManager()
                      ->Iblock()
                      ->addElement(
                          $item['iblock_id'],
                          $item['fields'],
                          $item['properties']
                      );
             });
    }

    /**
     * @throws Exceptions\MigrationException
     * @throws Exceptions\RestartException
     * @return bool|void
     */
    public function down()
    {
    }
}
