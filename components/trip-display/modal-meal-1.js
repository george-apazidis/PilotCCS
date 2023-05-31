(function () {
    const trigger = document.querySelector('.js-modal-uid-ad65s87');
    trigger.onclick = () => {
        const modal = document.querySelector('#modal-uid-ad65s87');
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };


    // captue event orionModalFooterBtnClicked
    document.getElementById('modal-uid-ad65s87')
    .addEventListener('orionModalFooterBtnClicked', function (e) {
        this.removeAttribute('is-open');
    });
})()