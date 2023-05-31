(function () {
    const trigger1483 = document.querySelectorAll('.js-modal-1483-legality');

    trigger1483.forEach((trigger, index) => {
        
        trigger.onclick = (e) => {
            e.stopPropagation();// Don't bubble/capture the event any further
            const modal = document.querySelector('#modal-1483-legality');
            modal.setAttribute('is-open', '');
            scrimClick(modal);
        };
        
    });
    
    // captue event orionModalFooterBtnClicked
    document.getElementById('modal-1483-legality')
    .addEventListener('orionModalFooterBtnClicked', function (e) {
        this.removeAttribute('is-open');
    });
})()