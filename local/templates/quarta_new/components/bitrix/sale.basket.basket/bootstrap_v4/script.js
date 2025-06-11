class Basket {
    constructor(data = {
        amountFieldClass: '.basket-item-amount-filed',
        plusBtnClass: '.basket-item-amount-btn-plus',
        parentBlockClass: '.basket-item-block-amount'
    }) {
        this.amountFieldClass = data.amountFieldClass;
        this.plusBtnClass = data.plusBtnClass;
        this.parentBlockClass = data.parentBlockClass;

        this.observer = new MutationObserver(this.handleMutations.bind(this));
        this.observer.observe(document.body, { subtree: true, childList: true });
        this.hangEvents();
    }

    handleMutations(mutations) {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.matches(this.amountFieldClass)) {
                        this.hangEventsOnField(node);
                    }
                    if (node.querySelectorAll) {
                        const fields = node.querySelectorAll(this.amountFieldClass);
                        fields.forEach(field => this.hangEventsOnField(field));
                    }

                    if (node.matches(this.plusBtnClass)) {
                        this.hangEventsOnPlusBtn(node);
                    }
                    if (node.querySelectorAll) {
                        const plusBtns = node.querySelectorAll(this.plusBtnClass);
                        plusBtns.forEach(btn => this.hangEventsOnPlusBtn(btn));
                    }
                }
            });
        });
    }

    hangEvents() {
        document.querySelectorAll(this.amountFieldClass).forEach(field => {
            this.hangEventsOnField(field);
        });

        document.querySelectorAll(this.plusBtnClass).forEach(btn => {
            this.hangEventsOnPlusBtn(btn);
        });
    }

    hangEventsOnField(field) {
        const maxShowQuantity = parseInt(field.dataset.showMaxQuantity);
        if (isNaN(maxShowQuantity)) return;

        const handleInput = () => {
            const value = field.value.trim();
            if (value === '' || isNaN(value)) return;

            const currentValue = parseInt(value, 10);

            this.updatePlusBtnState(field, maxShowQuantity);

            if (currentValue > maxShowQuantity) {
                field.value = maxShowQuantity;
                field.dispatchEvent(new Event('input', { bubbles: true }));
                field.blur();
            }
        };

        field.addEventListener('input', handleInput);
        field.addEventListener('paste', () => setTimeout(handleInput, 0));
        field.addEventListener('change', handleInput);

        this.updatePlusBtnState(field, maxShowQuantity);
    }

    hangEventsOnPlusBtn(btn) {
        const parentBlock = btn.closest(this.parentBlockClass);
        if (!parentBlock) return;

        const input = parentBlock.querySelector(this.amountFieldClass);
        if (!input) return;

        const maxShowQuantity = parseInt(input.dataset.showMaxQuantity);
        if (isNaN(maxShowQuantity)) return;

        btn.addEventListener('click', () => {
            const currentValue = parseInt(input.value) || 0;

            if (currentValue >= maxShowQuantity) {
                input.value = maxShowQuantity;
                this.updatePlusBtnState(input, maxShowQuantity);
            }
        });

        this.updatePlusBtnState(input, maxShowQuantity);
    }

    updatePlusBtnState(input, maxShowQuantity) {
        const parentBlock = input.closest(this.parentBlockClass);
        if (!parentBlock) return;

        const plusBtn = parentBlock.querySelector(this.plusBtnClass);
        if (!plusBtn) return;

        const currentValue = parseInt(input.value) || 0;

        if (currentValue >= maxShowQuantity) {
            plusBtn.style.pointerEvents = 'none';
            plusBtn.style.opacity = '0.5';
        } else {
            plusBtn.style.pointerEvents = 'auto';
            plusBtn.style.opacity = '1';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => new Basket());