(function () {
    const trigger = document.getElementById("crew-lounge-info");
    trigger.onclick = () => {
        const modal = document.getElementById("modal-lounge-info");
        modal.setAttribute('is-open', '');
        scrimClick(modal);
    };

    //capture event orionModalFooterBtnClicked
    document.getElementById("modal-lounge-info").addEventListener("orionModalFooterBtnClicked", function (e) {
        this.removeAttribute('is-open');
    });
})();