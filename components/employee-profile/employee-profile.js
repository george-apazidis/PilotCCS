document.addEventListener("DOMContentLoaded",function(){

    const profileBtn = document.querySelector('.js-profile-btn');
    const profileMenu = document.querySelector('.js-employee-profile');
    const profileMenuCloseBtn = document.querySelector('.js-employee-menu-close');
    const openProfileMenu = document.querySelector('.js-open-profile');

    if(profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if(!profileBtn.classList.contains('active')) {
                showProfileMenu();
            }
            else {
                hideProfileMenu();
            }
        });
    }

    if(openProfileMenu) {
        openProfileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            if(!openProfileMenu.classList.contains('active')) {
                showProfileMenu();
            }
            else {
                hideProfileMenu();
            }
        });
    }

    // close profile menu when clicking outside of it
    document.addEventListener('click', function(e) {
        if( profileBtn && profileBtn.classList.contains('active')) {
            hideProfileMenu();
        }
    });

    // close profile menu on ESC key press
    document.addEventListener('keydown', function(e) {
        if(e.code === 'Escape' && profileBtn.classList.contains('active')) {
            hideProfileMenu();
        }
    });


    if(profileMenu) {
        profileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    if(profileMenuCloseBtn) {
        profileMenuCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            hideProfileMenu();
        });
    }


    function showProfileMenu() {
        // add active class to profileBtn
        profileBtn.classList.add('active');

        // update z-index of .pccs-header
        document.querySelector('.pccs-header').style.zIndex = '2';

        // update z-index of .pccs-nav
        document.querySelector('.pccs-nav').style.zIndex = '1';
    }

    function hideProfileMenu() {  
        // remove active class from profileBtn
        profileBtn.classList.remove('active');

        // update z-index of .pccs-header
        document.querySelector('.pccs-header').style.zIndex = '1';

        // update z-index of .pccs-nav
        document.querySelector('.pccs-nav').style.zIndex = '2';
    }

});


