(function () {
    const trigger = document.querySelector('.js-modal-uid-76sdf7a');
    trigger.onclick = () => {
        const modal = document.querySelector('#modal-uid-76sdf7a');
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };

    document.getElementById('modal-uid-76sdf7a').addEventListener('orionModalFooterBtnClicked', function (e) { this.removeAttribute('is-open');});

})()