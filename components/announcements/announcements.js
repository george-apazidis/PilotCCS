// Announcements

const announcementLink = document.querySelector('.js-seeAllAnnouncements');
const numberOfAnnouncements = document.querySelectorAll('#announcements .list-group__item').length;
const numberOfAnnouncementsFields = document.querySelectorAll('.js-numOfAnnouncements');
const currentSlideNumber = document.querySelector('.js-currentAnnouncement');

function toggleAnnouncements(){
    const announcements = document.querySelectorAll('#announcements .list-group__item');

    if (announcementLink.hasAttribute('is-open')){
        announcementLink.textContent = `See all ${numberOfAnnouncements} Announcements`;
        announcementLink.removeAttribute('is-open');
        // hide all announcements except first 3
        announcements.forEach((announcement, index) => {
            if(index > 2){
                announcement.setAttribute('hidden', '');
            }
        });
    } else{
        announcementLink.textContent = 'See less';
        announcementLink.setAttribute('is-open', '');
        announcements.forEach(announcement => announcement.removeAttribute('hidden'));
    }

}

// set number of announcements in each slide
numberOfAnnouncementsFields.forEach(field => field.innerHTML = numberOfAnnouncements);

announcementLink.addEventListener('click', function(e){
    e.preventDefault(); // Cancel the native event
    e.stopPropagation();// Don't bubble/capture the event any further
    toggleAnnouncements();
});


// Modals

const modalAnnouncements = document.getElementById('anouncement-modal');

// all announcement links
const allAnnouncementLinks = document.querySelectorAll('#announcements .list-group__item a');

const prevBtn = document.querySelector('.js-btnPrevAnouncement');
const nextBtn = document.querySelector('.js-btnNextAnouncement');

// add click event to all announcement links
allAnnouncementLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault(); // Cancel the native event
        e.stopPropagation(); // Don't bubble/capture the event any further
        // remove hidden attribute from modal
        modalAnnouncements.removeAttribute('hidden');
        modalAnnouncements.isOpen = !modalAnnouncements.isOpen;
    });
});


// Announcements Modal slider

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("js-slideshowItem");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    //hide all slides
    for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none";  
        // add hidden attribute to all slides
        slides[i].setAttribute('hidden', '');
    }

    //remove hidden attribute from current slide
    slides[slideIndex-1].removeAttribute('hidden');

    // update current slide number
    currentSlideNumber.innerHTML = slideIndex;

    // hide prev button on first slide
    if(slideIndex == 1){
        // hide prev button
        prevBtn.style.display = 'none';
    } else{
        // show prev button
        prevBtn.style.display = 'flex';
    }

    // hide next button on last slide
    if(slideIndex == slides.length){
        // hide next button
        nextBtn.style.display = 'none';
    } else{
        // show next button
        nextBtn.style.display = 'flex';
    }

}

prevBtn.addEventListener('click', function(){
    plusSlides(-1);
});

nextBtn.addEventListener('click', function(){
    plusSlides(1);
});

// space bar event listener for prev button
prevBtn.addEventListener('keydown', function(e){
    if(e.key === ' '){
        plusSlides(-1);
    }
});

// space bar event listener for next button
nextBtn.addEventListener('keydown', function(e){
    if(e.key === ' '){
        plusSlides(1);
    }
});