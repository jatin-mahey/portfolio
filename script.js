// Load to document
document.addEventListener("DOMContentLoaded", (event) => {

    // Get the event elements
    let events = document.getElementsByClassName('event input');
        Array.from(events).forEach(input => {

        // Get the detail elements 
        let id = input.getAttribute("id");
        let details = document.getElementsByClassName(id + " details");
        let close = document.getElementsByClassName("close");

        // Attach an click event listener to each input button on timeline
        input.addEventListener("click", (event) => {

            // Hide all the detail windows
            hideAllDetails();

            // Show the details for the input button checked
            if (input.checked == true) {
                Array.from(details).forEach(el => { makeVisible(el); });
                Array.from(close).forEach(el => { el.style.setProperty('visibility', 'visible'); });
            }
        });

        // Hide the details window when the cross is pressed
        Array.from(close).forEach(x => { 
            x.addEventListener("click", (event) => {
                hideAllDetails();
            });
        });
    });

    // Hide all the details windows for each event
    function hideAllDetails() {
        let details = document.getElementsByClassName("details");
        let close = document.getElementsByClassName("close");
        Array.from(details).forEach(el => { makeHidden(el); });
        Array.from(close).forEach(el => { el.style.setProperty('visibility', 'hidden'); });
    }
    
    // Set visibility true for element
    function makeVisible(el) {
        el.style.setProperty('visibility', 'visible');
        el.style.setProperty('opacity', '0.95');
        el.style.setProperty('transition', 'opacity 0.5s linear');
    }

    // Set visibility false for element
    function makeHidden(el) {
        el.style.setProperty('visibility', 'hidden');
        el.style.setProperty('opacity', '0');
        el.style.setProperty('transition', 'visibility 0s 0.5s, opacity 0.5s linear');
    }
});