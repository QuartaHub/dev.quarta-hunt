class Basket
{
    constructor(data = {
        amountFieldClass: '.basket-item-amount-filed'
    }) {
        this.amountFieldClass = data.amountFieldClass;
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
                }
            });
        });
    }

    hangEvents() {
        document.querySelectorAll(this.amountFieldClass).forEach(field => {
            this.hangEventsOnField(field);
        });
    }

    hangEventsOnField(field) {
        let maxShowQuantity = parseInt(field.dataset.showMaxQuantity);
        if (isNaN(maxShowQuantity)) {
            return;
        }

        if (maxShowQuantity === 0) {
            maxShowQuantity = 9999;
        }

        const handleInput = () => {
            const value = field.value.trim();
            if (value === '' || isNaN(value)) {
                return;
            }

            const currentValue = parseInt(value, 10);
            if (currentValue > maxShowQuantity) {
                field.value = maxShowQuantity;
                field.dispatchEvent(new Event(
                        'input',
                        { bubbles: true }
                    )
                );
                field.blur();
            }
        };

        field.addEventListener('input', handleInput);
        field.addEventListener('paste', () => setTimeout(handleInput, 0));
        field.addEventListener('change', handleInput);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Basket();
});