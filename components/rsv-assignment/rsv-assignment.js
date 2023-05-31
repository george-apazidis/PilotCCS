(function () {

    const trigger = document.querySelector('.js-modal-uid-7i65858768');
    const modalRSV = document.querySelector('#modal-uid-7i65858768');
    const RSVacknowledged = document.querySelector('.js-RSV-confirmation');

    trigger.onclick = () => {
        modalRSV.removeAttribute('hidden');
        modalRSV.isOpen = !modalRSV.isOpen;
    };

    // captue event orionModalFooterBtnClicked on RSV modal
    modalRSV.addEventListener('orionModalFooterBtnClicked', function (e) {
        if (e.detail.variant === 'primary') {

            // remove hidden attribute from RSV acknowledgement
            RSVacknowledged.removeAttribute('hidden');

            // add hidden attribute to js-modal-RSV
            trigger.setAttribute('hidden', '');

            this.isOpen = !this.isOpen;
        }
    });

})()

document.addEventListener("DOMContentLoaded",function(){

    // grab all elements that contain class that start with '.js-modal-*'
    const allModals = document.querySelectorAll('[class*="js-modal-"]');

    // loop through all modals
    allModals.forEach(modal => {
        // add click event listener to each modal
        modal.addEventListener('click', function(e) {
            // prevent browser from jumping to top of page
            e.preventDefault();
        });
    });

});
