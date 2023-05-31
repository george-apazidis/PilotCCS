const mobileBtn = document.getElementById('mobile-menu-btn');
const closeBTN = document.querySelector('.pccs-nav__close-btn');
const navMenu = document.getElementById('nav-menu');
const collapseLink = document.querySelector('.nav-collapse');
const dashboardLink = document.querySelector('.js-dashboard-link');

function toggleCollapseLink(){
    // update text collapse/expand
    if(navMenu.hasAttribute('is-open')){
        collapseLink.textContent = 'Collapse';
    } else{
        collapseLink.textContent = 'Expand';
    }
}

mobileBtn.addEventListener('click', function(){
    navMenu.setAttribute('is-open', '');
    toggleCollapseLink();
});

closeBTN.addEventListener('click', function(){
    navMenu.removeAttribute('is-open');
    toggleCollapseLink();
});

collapseLink.addEventListener('click', function(){
    
    navMenu.toggleAttribute("is-open");

    toggleCollapseLink();
});

if(dashboardLink) {
    dashboardLink.addEventListener('click', function(){
        // if width is less than 768px
        if(window.innerWidth < 768){
            navMenu.removeAttribute('is-open');
            toggleCollapseLink();
        }
    });
}

