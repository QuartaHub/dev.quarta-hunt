# ������ ������� � ���� ����

# ���������
 * ��������� � ����� local/modules/interlabs.oneclick
 * ��� ��������� � ����� .last_version � � � ����� .last_version.zip

# ������
# ������
```

 <?php
$APPLICATION->IncludeComponent(
   "interlabs:oneclick",
   ".default", //.default | .popup
   Array(
      "ID" => $itemIds['ID'],//#ELEMENT_ID#
      "USE_FIELD_COMMENT" => 'Y',
      "USE_FIELD_EMAIL" => 'Y',
      "BUY_STRATEGY" => 'OnlyProduct' // ProductAndBasket|OnlyProduct|OnlyBasket
   ),
   false
   );
?>

```