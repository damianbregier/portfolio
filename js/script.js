//Read this fuction when document (page) is ready
$(document).ready(function(){
    //Activates superslide
    $('#slides').superslides({
        animation: 'fade',
        play: 7000,
        pagination: false
    });

    //Activate typed
    var typed = new Typed(".typed", {
        strings: ["CS Student.", "Beginner Programmer.", "Future FullStack."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

});