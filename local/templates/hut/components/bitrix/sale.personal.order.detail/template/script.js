BX.namespace('BX.Sale.PersonalOrderComponent');

(function () {
	BX.Sale.PersonalOrderComponent.PersonalOrderDetail = {
		init: function (params) {
			var linkMoreOrderInformation = document.getElementsByClassName('sale-order-detail-about-order-inner-container-name-read-more')[0];
			var linkLessOrderInformation = document.getElementsByClassName('sale-order-detail-about-order-inner-container-name-read-less')[0];
			var clientInformation = document.getElementsByClassName('sale-order-detail-about-order-inner-container-details')[0];
			var listShipmentWrapper = document.getElementsByClassName('sale-order-detail-payment-options-shipment');
			var listPaymentWrapper = document.getElementsByClassName('sale-order-detail-payment-options-methods');
			var shipmentTrackingId = document.getElementsByClassName('sale-order-detail-shipment-id');

			if (shipmentTrackingId[0]) {
				Array.prototype.forEach.call(shipmentTrackingId, function (blockId) {
					var clipboard = blockId.parentNode.getElementsByClassName('sale-order-detail-shipment-id-icon')[0];
					if (clipboard) {
						BX.clipboard.bindCopyClick(clipboard, { text: blockId.innerHTML });
					}
				});
			}


			BX.bind(linkMoreOrderInformation, 'click', function () {

				clientInformation.style.display = 'inline-block';
				linkMoreOrderInformation.style.display = 'none';
				linkLessOrderInformation.style.display = 'inline-block';
			}, this);
			BX.bind(linkLessOrderInformation, 'click', function () {
				clientInformation.style.display = 'none';
				linkMoreOrderInformation.style.display = 'inline-block';
				linkLessOrderInformation.style.display = 'none';
			}, this);

			Array.prototype.forEach.call(listShipmentWrapper, function (shipmentWrapper) {
				var detailShipmentBlock = shipmentWrapper.getElementsByClassName('sale-order-detail-payment-options-shipment-composition-map')[0];
				var showInformation = shipmentWrapper.getElementsByClassName('sale-order-detail-show-link')[0];
				var hideInformation = shipmentWrapper.getElementsByClassName('sale-order-detail-hide-link')[0];

				BX.bindDelegate(shipmentWrapper, 'click', { 'class': 'sale-order-detail-show-link' }, BX.proxy(function () {
					showInformation.style.display = 'none';
					hideInformation.style.display = 'inline-block';
					detailShipmentBlock.style.display = 'block';
				}, this));
				BX.bindDelegate(shipmentWrapper, 'click', { 'class': 'sale-order-detail-hide-link' }, BX.proxy(function () {
					showInformation.style.display = 'inline-block';
					hideInformation.style.display = 'none';
					detailShipmentBlock.style.display = 'none';
				}, this));
			});

			Array.prototype.forEach.call(listPaymentWrapper, function (paymentWrapper) {
				var rowPayment = paymentWrapper.getElementsByClassName('sale-order-detail-payment-options-methods-info')[0];

				BX.bindDelegate(paymentWrapper, 'click', { 'class': 'active-button' }, BX.proxy(function () {
					BX.toggleClass(paymentWrapper, 'sale-order-detail-active-event');
				}, this));

				BX.bindDelegate(rowPayment, 'click', { 'class': 'sale-order-detail-payment-options-methods-info-change-link' }, BX.proxy(function (event) {
					event.preventDefault();

					var btn = rowPayment.parentNode.getElementsByClassName('sale-order-detail-payment-options-methods-button-container')[0];
					var linkReturn = rowPayment.parentNode.getElementsByClassName('sale-order-detail-payment-inner-row-template')[0];
					BX.ajax(
						{
							method: 'POST',
							dataType: 'html',
							url: params.url,
							data:
							{
								sessid: BX.bitrix_sessid(),
								orderData: params.paymentList[event.target.id],
								templateName: params.templateName,
								returnUrl: params.returnUrl,
							},
							onsuccess: BX.proxy(function (result) {
								rowPayment.innerHTML = result;
								if (btn) {
									btn.parentNode.removeChild(btn);
								}
								linkReturn.style.display = "block";
								BX.bind(linkReturn, 'click', function () {
									window.location.reload();
								}, this);
							}, this),
							onfailure: BX.proxy(function () {
								return this;
							}, this)
						}, this
					);

				}, this));
			});
		}
	};
})();

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector('.sale-order-detail-about-order-inner-container-repeat-cancel')) {
		document.querySelector('.sale-order-detail-about-order-inner-container-repeat-cancel').addEventListener('click', async function (event) {
			event.preventDefault();
			const href = this.getAttribute('href');
			const paramsString = href.replace(/^\/.*?\?/, '');
			const params = new URLSearchParams(paramsString);

			try {
				const data = new URLSearchParams({
					ID: params.get('ID'),
					CANCEL: params.get('CANCEL')
				});

				const response = await fetch('/local/ajax/hut/orderCancel.php', {
					method: 'POST',
					body: data
				});

				const result = await response.text();
				if (result.includes('success')) {
					window.location.reload();
				}
			} catch (error) {
				console.error('Ошибка:', error);
			}
		});
	}
});