<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? if (!empty($arResult)): ?>
	<ul id="horizontal-catalog-menu">

		<?
		$previousLevel = 0;
		foreach ($arResult as $arItem):
			if ($arItem['PARAMS']['NOT_SHOW_IN_MENU'] == 1) {
				continue;
			}
		?>

			<? if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel): ?>
				<?= str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"])); ?>
			<? endif ?>

			<? if ($arItem["IS_PARENT"]): ?>

				<? if ($arItem["DEPTH_LEVEL"] == 1): ?>
					<li><a href="<?= $arItem["LINK"] ?>" class="is-parent root-item <? if ($arItem["SELECTED"]): ?>root-item-selected<? endif ?>">
							<button type="button" class="button parent-back"><?= buildSVG('left', SITE_TEMPLATE_PATH . ICON_PATH) ?></button><?= $arItem["TEXT"] ?>
						</a>
						<ul class="second">
						<? else: ?>
							<li<? if ($arItem["SELECTED"]): ?> class="item-selected" <? endif ?>><a href="<?= $arItem["LINK"] ?>" class="parent"><?= $arItem["TEXT"] ?></a>
								<ul class="third">
								<? endif ?>

							<? else: ?>

								<? if ($arItem["PERMISSION"] > "D"): ?>

									<? if ($arItem["DEPTH_LEVEL"] == 1): ?>
										<li><a href="<?= $arItem["LINK"] ?>" class="root-item <? if ($arItem["SELECTED"]): ?>root-item-selected<? endif ?>"><?= $arItem["TEXT"] ?></a></li>
									<? else: ?>
										<li<? if ($arItem["SELECTED"]): ?> class="item-selected" <? endif ?>><a href="<?= $arItem["LINK"] ?>"><?= $arItem["TEXT"] ?></a>
					</li>
				<? endif ?>

			<? else: ?>

				<? if ($arItem["DEPTH_LEVEL"] == 1): ?>
					<li><a href="" class="root-item <? if ($arItem["SELECTED"]): ?>root-item-selected<? endif ?>" title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>"><?= $arItem["TEXT"] ?></a></li>
				<? else: ?>
					<li><a href="" class="denied" title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>"><?= $arItem["TEXT"] ?></a></li>
				<? endif ?>

			<? endif ?>

		<? endif ?>

		<? $previousLevel = $arItem["DEPTH_LEVEL"]; ?>

	<? endforeach ?>

	<? if ($previousLevel > 1): //close last item tags
	?>
		<?= str_repeat("</ul></li>", ($previousLevel - 1)); ?>
	<? endif ?>

	</ul>
	<div class="menu-clear-left"></div>
<? endif ?>