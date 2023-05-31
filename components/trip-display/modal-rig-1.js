(function () {
    const trigger = document.querySelector('.js-modal-rig');
    trigger.onclick = () => {
        const modal = document.querySelector('#modal-rig');
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };

    // captue event orionModalFooterBtnClicked
    document.getElementById('modal-rig')
    .addEventListener('orionModalFooterBtnClicked', function (e) {
        this.removeAttribute('is-open');
    });
})()