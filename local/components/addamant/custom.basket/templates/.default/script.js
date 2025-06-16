class CustomBasket
{
    constructor(data = {
        productItemCardClass: '.product-item-card',
        deleteProductIconClass: '.delete-product-icon',
        basketItemBlockAmountClass: '.basket-item-block-amount',
        basketBtnClearClass: '.basket__btn-clear',
        basketBtnCheckoutClass: '.basket-btn-checkout',
        basketCheckboxClass: '.product-checkbox__input'
    }) {
        this.productItemCard = document.querySelectorAll(data.productItemCardClass);
        this.deleteProductIconClass = data.deleteProductIconClass;
        this.deleteProductAjaxUrl = '/ajax/customBasket/deleteItem.php';
        this.updateProductAjaxUrl = '/ajax/customBasket/updateItem.php';
        this.clearBasketAjaxUrl = '/ajax/customBasket/clearBasket.php';
        this.createOrderAjaxUrl = '/ajax/customBasket/createOrder.php';
        this.createLicenseOrderAjaxUrl = '/ajax/customBasket/createLicenseOrder.php';
        this.basketItemBlockAmountClass = data.basketItemBlockAmountClass;
        this.basketBtnClear = document.querySelector(data.basketBtnClearClass);
        this.basketBtnCheckout = document.querySelectorAll(data.basketBtnCheckoutClass);
        this.basketCheckboxClass = data.basketCheckboxClass;
        this.basketFormWrapSubmitBtn = document.querySelectorAll('input[name="iblock_submit"]');
        this.basketBtnLicenseCheckout = document.getElementById('bid-license-btn__open');

        this.eventCustomBasketListener();
    }

    eventCustomBasketListener()
    {
        if (this.basketBtnCheckout) {
            this.basketBtnCheckout.forEach(btn => {
                btn.setAttribute('disabled', 'disabled');
            })
        }

        if (this.basketBtnLicenseCheckout) {
            this.basketBtnLicenseCheckout.setAttribute('disabled', 'disabled');
        }

        if (this.productItemCard) {
            this.productItemCard.forEach(product => {
                let productId = product.dataset.productId;
                let storeIds = product.dataset.storeIds;

                let deleteProductBtn = product.querySelector(this.deleteProductIconClass);

                let checkbox = product.querySelector(this.basketCheckboxClass)

                if (checkbox) {
                    checkbox.addEventListener('change', (e) => {
                        if (e.target.checked) {
                            this.recalcPrice(checkbox.closest('.basket-store-block'));
                            if (this.basketBtnLicenseCheckout) {
                                this.basketBtnLicenseCheckout.removeAttribute('disabled');
                            }
                            this.basketBtnCheckout.forEach(btn => {
                                btn.removeAttribute('disabled');
                            })
                        } else {
                            this.recalcPrice(checkbox.closest('.basket-store-block'));
                            if (this.basketBtnLicenseCheckout) {
                                this.basketBtnLicenseCheckout.setAttribute('disabled', 'disabled');
                            }
                            this.basketBtnCheckout.forEach(btn => {
                                btn.setAttribute('disabled', 'disabled');
                            })
                        }
                    })
                }

                if (deleteProductBtn) {
                    deleteProductBtn.addEventListener('click', () => {
                        this.deleteProduct(productId, storeIds, product);
                    });
                }

                let amountBlock = product.querySelector(this.basketItemBlockAmountClass);

                if (amountBlock) {
                    this.amountEventsHandler(amountBlock, storeIds, productId, product);
                }
            });
        }

        if (this.basketBtnClear) {
            this.basketBtnClear.addEventListener('click', () => {
                this.clearAllBasket();
            });
        }

        if (this.basketBtnCheckout) {
            this.basketBtnCheckout.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.createOrder(btn);
                });
            })
        }
        if (this.basketFormWrapSubmitBtn) {
            this.basketFormWrapSubmitBtn.forEach(checkbtn => {
                checkbtn.addEventListener('click', () => {
                    this.createOrder(checkbtn);
                })
            })
        }
    }

    /**
     * Функция по созданию заказа
     * Получаем все товары (которые доступны) из блока, в котором находится кликнутая кнопка
     * И передаем их в ajax файл
     *
     * @param btn
     */
    createOrder(btn)
    {
        if (btn.name === "iblock_submit") {
            var mainBlock = document.getElementById('bid-license__open');
        } else {
            var mainBlock = btn.closest('.basket-store-block');
        }

        if (mainBlock) {
            mainBlock.classList.add('overlay');
            let products = mainBlock.querySelectorAll('.product-item-card:not(.cant-buy)');
            let productsToOrder = [];

            if (products) {
                products.forEach(product => {
                    if (
                        product.dataset.productId &&
                        product.querySelector('.basket-item-amount-filed').value &&
                        product.firstElementChild.childNodes[1].checked
                    ) {
                        let productObj = {
                            ID: product.dataset.productId,
                            QUANTITY: product.querySelector('.basket-item-amount-filed').value,
                            NAME: product.querySelector('.product-name').innerText
                        };

                        productsToOrder.push(productObj);
                    }
                });

                if (productsToOrder.length > 0) {
                    if (btn.name === "iblock_submit") {
                        document.getElementsByName('other_fields')[0].value = JSON.stringify(productsToOrder);
                    } else {
                        this.runAjax(
                            this.createOrderAjaxUrl,
                            {
                                products: productsToOrder
                            },
                            response => {
                                let res = JSON.parse(response);

                                if (res.SUCCESS === true) {
                                    window.location.href = '/cart/purchase';
                                } else {
                                    console.log('ERROR MESSAGE: ' . res.ERROR_MESSAGE);
                                }
                            },
                            () => {}
                        );
                    }
                }
            }
        }
    }

    /**
     * Функция по очистке всей корзины
     * Собираем все товары из корзины
     * И передаем их в ajax файл
     */
    clearAllBasket()
    {
        if (this.productItemCard) {
            let products = [];

            this.productItemCard.forEach(product => {
                if (
                    product.dataset.productId &&
                    product.dataset.storeIds
                ) {
                    let productObj = {
                        ID: product.dataset.productId,
                        STORE_ID: product.dataset.storeIds
                    };

                    products.push(productObj);
                }
            });

            if (products.length !== 0) {
                this.runDeleteAllProductComponentAjax(products);
            }
        }
    }

    /**
     * Функция по добавлению событий на блок - счётчик
     *
     * @param amountBlock
     * @param storeIds
     * @param productId
     * @param block
     */
    amountEventsHandler(amountBlock, storeIds, productId, block)
    {
        let plus = amountBlock.querySelector('.basket-item-amount-btn-plus');
        let minus = amountBlock.querySelector('.basket-item-amount-btn-minus');
        let input = amountBlock.querySelector('input');
        let mainBlock = block.closest('.basket-store-block');
        let mode = mainBlock.dataset.storeId;

        let maxQuantity = input.dataset.maxQuantity;
        let quantity = input.value;
        let minValue = 1;

        if (
            minValue >= maxQuantity ||
            quantity >= maxQuantity
        ) {
            plus.style.pointerEvents = 'none';
        }

        plus.addEventListener('click', () => {
            if (maxQuantity > quantity) {
                quantity++;
                input.value = quantity;

                if (quantity >= maxQuantity) {
                    plus.style.pointerEvents = 'none';
                }

                this.updateProduct(productId, storeIds, quantity, block, mode);
            }

            if (quantity > 1) {
                minus.style.pointerEvents = 'all';
            }
        });

        minus.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                input.value = quantity;

                this.updateProduct(productId, storeIds, quantity, block, mode);
            }

            if (quantity == 1) {
                minus.style.pointerEvents = 'none';
                plus.style.pointerEvents = 'all';
            } else {
                minus.style.pointerEvents = 'all';
            }

            if (quantity <= maxQuantity) {
                mainBlock.querySelector('.basket-btn-checkout').disabled = false;
                block.classList.remove('cant-buy');
            }
        });

        input.addEventListener('change', () => {
            quantity = input.value;

            if (parseInt(quantity) >= parseInt(maxQuantity) && parseInt(maxQuantity) > 0) {
                input.value = maxQuantity;
                quantity = maxQuantity;
                plus.style.pointerEvents = 'none';
                minus.style.pointerEvents = 'all';
            } else {
                quantity = input.value;
                plus.style.pointerEvents = 'all';

                if (quantity > 1) {
                    minus.style.pointerEvents = 'all';
                }
            }

            mainBlock.querySelector('.basket-btn-checkout').disabled = false;
            block.classList.remove('cant-buy');

            this.updateProduct(productId, storeIds, quantity, block, mode);
        });
    }

    /**
     * Функция по калькуляции суммы товаров при изменении
     *
     * @param mainBlock
     */
    recalcPrice(mainBlock)
    {
        if (!mainBlock) {
            return;
        }

        let products = mainBlock.querySelectorAll('.product-item-card ');
        let totalTextBlock = mainBlock.querySelector('.total-store-text');

        if (products && totalTextBlock) {
            let sum = 0;

            products.forEach(product => {
                if (product.firstElementChild.childNodes[1].checked) {
                    let productSum = 0;
                    let productPrice = product.querySelector('.product-price').textContent.replace(/\s/g, '');
                    let productSumBlock = product.querySelector('.product-sum');
                    let productQuantity = product.querySelector('input.basket-item-amount-filed').value;

                    productSum = parseInt(productPrice) * parseInt(productQuantity);
                    productSumBlock.textContent = this.numberWithSpaces(productSum) + ' ₽';

                    sum += productSum;
                }
            });

            totalTextBlock.textContent = 'Итого: ' + this.numberWithSpaces(sum) + ' ₽';
        }
    }

    /**
     * Вспомогательная функция, которая добавляет проблелы тысячам
     * Например входит 1000, выходит 1 000
     *
     * @param num
     * @returns {string}
     */
    numberWithSpaces(num)
    {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    /**
     * Функция по обновлению количества товара
     *
     * @param productId
     * @param storeIds
     * @param quantity
     * @param block
     * @param mode
     */
    updateProduct(productId, storeIds, quantity, block, mode)
    {
        block.closest('.basket-store-block').classList.add('overlay');
        this.runUpdateProductComponentAjax(productId, storeIds, quantity, block, mode);
    }

    /**
     * Функция по удалению товара из корзины
     *
     * @param productId
     * @param storeIds
     * @param block
     */
    deleteProduct(productId, storeIds, block)
    {
        block.closest('.basket-store-block').classList.add('overlay');
        this.runDeleteProductComponentAjax(productId, storeIds, block);
    }

    /**
     * Функция для ajax запроса очистки корзины
     *
     * @param products
     */
    runDeleteAllProductComponentAjax(products)
    {
        this.runAjax(
            this.clearBasketAjaxUrl,
            {
                products: products
            },
            response => {
                let res = JSON.parse(response);

                if (res.SUCCESS === true) {
                    window.location.reload();
                } else {
                    console.log('ERROR MESSAGE: ' . res.ERROR_MESSAGE);
                }
            },
            () => {}
        );
    }

    /**
     * Функция для ajax запроса удалению товара из корзины
     *
     * @param productId
     * @param storeIds
     * @param block
     */
    runDeleteProductComponentAjax(productId, storeIds, block)
    {
        this.runAjax(
            this.deleteProductAjaxUrl,
            {
                productId: productId,
                storeIds: storeIds
            },
            response => {
                let res = JSON.parse(response);

                if (res.SUCCESS === true) {
                    let parent = block.closest('.basket-store-block');
                    parent.classList.remove('overlay');

                    block.remove();
                    this.recalcPrice(parent);
                } else {
                    console.log('ERROR MESSAGE: ' . res.ERROR_MESSAGE);
                }
            },
            () => {}
        );
    }

    /**
     * Функция для ajax запроса обновлению товара в корзине
     *
     * @param productId
     * @param storeIds
     * @param quantity
     * @param block
     * @param mode
     */
    runUpdateProductComponentAjax(productId, storeIds, quantity, block, mode = 'all')
    {
        this.runAjax(
            this.updateProductAjaxUrl,
            {
                productId: productId,
                storeIds: storeIds,
                quantity: quantity,
                mode: mode
            },
            response => {
                let res = JSON.parse(response);

                if (res.SUCCESS === true) {
                    block.closest('.basket-store-block').classList.remove('overlay');
                    this.recalcPrice(block.closest('.basket-store-block'));
                } else {
                    console.log('ERROR MESSAGE: ' . res.ERROR_MESSAGE);
                }
            },
            () => {}
        );
    }

    /**
     * ajax метод
     *
     * @param url
     * @param data
     * @param responseHandler
     * @param errorHandler
     */
    runAjax(url, data, responseHandler, errorHandler)
    {
        BX.ajax({
            url,
            method: 'POST',
            data,
            onsuccess: response => responseHandler(response),
            onfailure: error => errorHandler(error)
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new CustomBasket;
});