document.addEventListener("DOMContentLoaded",function(){

    var coll = document.getElementsByClassName("js-collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }

    // collapse or expand all reference materials
    var toggleAll = document.querySelector(".js-collapse-all-refs");

    // if toggleAll exists 
    if (toggleAll) {
        toggleAll.addEventListener("click", function(event) {

            event.preventDefault();

            var allRefs = document.querySelectorAll(".references .js-collapsible");

            // if toggleAll content is "Collapse All", change to "Expand All" and collapse all
            if (toggleAll.textContent === "Collapse All") {
                toggleAll.textContent = "Expand All";

                for (i = 0; i < allRefs.length; i++) {
                    allRefs[i].classList.remove("active");
                }

            } else {
                
                // if toggleAll content is "Expand All", change to "Collapse All" and expand all
                toggleAll.textContent = "Collapse All";

                for (i = 0; i < allRefs.length; i++) {
                    allRefs[i].classList.add("active");
                }
            }

        });
    }
});