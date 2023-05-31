(function () {
    const trigger = document.querySelector('.js-modal-uid-iiuaf797');
    trigger.onclick = () => {
        const modal = document.querySelector('#modal-uid-iiuaf797');
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };


    // captue event orionModalFooterBtnClicked
    document.getElementById('modal-uid-iiuaf797')
    .addEventListener('orionModalFooterBtnClicked', function (e) {
        this.removeAttribute('is-open');
    });
})()