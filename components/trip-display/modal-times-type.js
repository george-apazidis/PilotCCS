(function () {
    const trigger = document.querySelector('.js-modal-uid-765858768');
    trigger.onclick = () => {
        const modal = document.querySelector('#modal-uid-765858768');
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };


    // captue event orionModalFooterBtnClicked
    document.getElementById('modal-uid-765858768')
    .addEventListener('orionModalFooterBtnClicked', function (e) {
        this.removeAttribute('is-open');
    });
})()