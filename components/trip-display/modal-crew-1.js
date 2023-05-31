(function () {
    const trigger = document.querySelector('.js-modal-crew-u123456');
    trigger.onclick = () => {
        const modal = document.querySelector('#modal-crew-u123456');
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };
})()