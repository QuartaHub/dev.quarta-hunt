class LicensePopup {
    constructor() {
        this.formWrap = document.querySelector(".bid-license__wrapper");
        this.formWrapOpen = document.querySelector(".bid-license__wrapper p");
        this.formWrapBtn = document.getElementById("bid-license-btn__open");
        this.formWrapClose = document.querySelector('.bid-license__close');

        this.addLicensePopupEventHandler();
    }

    addLicensePopupEventHandler() {
        if (this.formWrapBtn) {

            this.formWrapBtn.addEventListener('click', () => {
                this.openLicenseModal();
            })
        }

        if (this.formWrapClose) {
            this.formWrapClose.addEventListener('click', () => {
                this.closeLicenseModal();
            });
        }

        if(this.formWrapOpen){
            this.openLicenseModal();
        }
    }

    openLicenseModal() {
        if (
            this.formWrapBtn
        ) {
            this.formWrap.classList.add('active');
        }
    }

    closeLicenseModal() {
        this.formWrap.classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new LicensePopup();
});