//Read this fuction when document (page) is ready
$(document).ready(function () {
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
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            966: {
                items: 4
            }
        }
    })
    //Get cursor position and start animation of loading chart
    //where cursor reach skills section + certain delay
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }

            });

        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
        
                element.countup(endVal);
            })

            countUpFinished = true;

        }


    });
    //Activates fancy box
    $("[data-fancybox]").fancybox();



});