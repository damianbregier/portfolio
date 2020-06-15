//Read this fuction when document (page) is ready
$(document).ready(function(){
    //Activates superslide
    $('#slides').superslides({
        animation: 'fade',
        play: 7000,
        pagination: false
    });

    //Activate typing of title elements
    var typed = new Typed(".typed", {
        strings: ["CS Student.", "Beginner Programmer.", "Future FullStack."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    //Activate skills carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('.chart').easyPieChart({
        //your configuration goes here
    });

});