document.addEventListener("DOMContentLoaded",function(){

  const tripDetailsBtn = document.querySelector('.js-trip-details-btn');
  const tripDisplayOverlay = document.getElementById('trip-display-overlay');
  const allColumns = document.querySelectorAll('.main-content--column');
  const tripDisplayCloseBtn = document.querySelector('.js-trip-display-close');
  const tripDisplayBackBtn = document.querySelector('.js-link-trip-display-back');
  const menuLinkDashboard = document.querySelector('.js-link-dashboard-home');
  const headerHeading = document.querySelector('.pccs-header__heading')



  // show trip details
  if(tripDetailsBtn) {
    tripDetailsBtn.addEventListener('click', showTripDetails);
  }

  if(menuLinkDashboard) {
    menuLinkDashboard.addEventListener('click', hideTripDetails);
  }

  // hide trip details
  tripDisplayCloseBtn.addEventListener('click', hideTripDetails);
  tripDisplayBackBtn.addEventListener('click', hideTripDetails);





  function showTripDetails() {
      allColumns.forEach(function(column){
          // add hidden attribute
          column.setAttribute('hidden', '');
      });

      // remove hidden attribute from tripDisplayOverlay
      tripDisplayOverlay.removeAttribute('hidden');

      // if headerHeading exists then set textContent
      if(headerHeading) {
        headerHeading.textContent = 'Trip Details';
      }

  }

  function hideTripDetails() {
      allColumns.forEach(function(column){
          // remove hidden attribute
          column.removeAttribute('hidden');
      });

      // add hidden attribute from tripDisplayOverlay
      tripDisplayOverlay.setAttribute('hidden', '');

      // if headerHeading exists then set textContent
      if(headerHeading) {
        headerHeading.textContent = 'Dashboard';
      }
  }

  // grab all js-link elements
  const allLinks = document.querySelectorAll('.js-link');

  // loop through all js-link elements
  allLinks.forEach(link => {
    // add click event listener to each link
    link.addEventListener('click', function(e) {
      // prevent browser from jumping to top of page
      e.preventDefault();
    });
  });
  
  var coll = document.getElementsByClassName("js-collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = "max-content";
      }
    });
  }

  // All flight-expandables close buttons
  var allCloseButtons = document.getElementsByClassName("js-close-expandable");
  var i;

  for (i = 0; i < allCloseButtons.length; i++) {
    allCloseButtons[i].addEventListener("click", function(e) {

      e.preventDefault();

      // hide all tab content
      var allTabContent = e.target.closest('.js-tabs-wrap').querySelectorAll('.js-tab-content');

      for (var i = 0; i < allTabContent.length; i++) {
        allTabContent[i].style.display = "none";
      }

      // remove active class from all tabs
      var allTabs = e.target.closest('.js-tabs-wrap').querySelectorAll('.js-tab-link');

      for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].classList.remove("active");
      }

    });

  }

  // cabin seats expandable link
  const expandCabinLink = document.querySelector('.js-expand-cabin-table');

  // grab all the rows in the cabin table
  const cabinRows = document.querySelectorAll('#cabinSeats .trip-assignment__flight-expandables-table-row');

  // set the number of seats in the cabin in HTML
  if (document.querySelector('.js-number-of-cabin-seats')) {
    document.querySelector('.js-number-of-cabin-seats').innerHTML = cabinRows.length;
  }

  function toggleCabinSeats(){

    if (expandCabinLink.hasAttribute('is-open')){
        expandCabinLink.textContent = `See all ${cabinRows.length} cabin seats`;
        expandCabinLink.removeAttribute('is-open');
          // hide all rows except first 3
          cabinRows.forEach((row, index) => {
              if(index > 2){
                row.setAttribute('hidden', '');
              }
          });
      } else {
        expandCabinLink.textContent = 'See less';
        expandCabinLink.setAttribute('is-open', '');
        cabinRows.forEach(row => row.removeAttribute('hidden'));
      }

  }

  if(expandCabinLink) {
    expandCabinLink.addEventListener('click', function(e){
      e.preventDefault(); // Cancel the native event
      e.stopPropagation();// Don't bubble/capture the event any further
      toggleCabinSeats();
  });
  }


  function generateAllTabsLogic() {
    const allTabs = document.querySelectorAll('.js-tabs-wrap');
    
    allTabs.forEach(tab => {
      const allTabLinks = tab.querySelectorAll('.js-tab-link');
      const allTabContents = tab.querySelectorAll('.js-tab-content');
      allTabLinks.forEach(link => {
        
        // event listener for each tab in js-tabs-wrap component
        link.addEventListener('click', function(e) {

          // remove active class from all links
          allTabLinks.forEach(link => link.classList.remove('active'));

          // add active class to clicked on link
          link.classList.add('active');

          // hide all tab contents
          allTabContents.forEach(content => content.style.display = 'none');

          // get data-tab attribute from clicked link
          const contentId = link.getAttribute('data-tab');

          // grab closest tab wit contentId
          const content = e.target.closest('.js-tabs-wrap').getElementsByClassName(contentId);

          // display block the content element
          content[0].style.display = 'block';
        });
      });
    });
  }

  // grab all elements that contain class that start with '.js-modal-*'
  const allModals = document.querySelectorAll('[class*="js-modal-"]');

  // loop through all modals
  allModals.forEach(modal => {
    // add click event listener to each modal
    modal.addEventListener('click', function(e) {
      // prevent browser from jumping to top of page
      e.preventDefault();

    });
  });


  generateAllTabsLogic();

});


function scrimClick(el) {

  const scrim = el.shadowRoot.querySelector('.orion-modal__scrim');

  // add click event listener to scrim
  scrim.addEventListener('click', function () {
    el.removeAttribute('is-open');
  });
}