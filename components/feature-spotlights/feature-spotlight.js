// event listener to hide Feature Spotlights
document.querySelector('.js-hide-fs').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.js-featSpotlight').setAttribute('hidden', '');
    document.querySelector('.js-featEmptyMessage').removeAttribute('hidden');
});