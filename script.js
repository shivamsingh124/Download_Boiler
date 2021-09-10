// $(document).ready(function() {
//     $(window).scroll(function() {
//         if (this.scrollY > 20) {
//             $('.navbar').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }
//         if (this.scrollY > 500) {
//             $('.scroll-up-btn').addClass("show");
//         } else {
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     //slide up script
//     $('.scroll-up-btn').click(function() {
//         $('html').animate({ scrollTop: 0 });
//     });

//     // typing animation script 
//     var typed = new Typed(".typing", {
//         strings: ["Developer", "Designer", "Open-Source Contributor", "Mentor", "Programmer", "Brand Ambassador", "Learner", "Sophomore"],
//         typeSpeed: 50,
//         backSpeed: 25,
//         loop: true
//     })

//     // toggle menu/navbar script 
//     $('.menu-btn').click(function() {
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });
//     // owl carousel script
//     // $('.carousel').owlCarousel({
//     //     margin: 20,
//     //     loop: true,
//     //     autoplay: true,
//     //     autoplayTimeout: 1500,
//     //     autoplayHoverPause: true,
//     //     responsive: {
//     //         0: {
//     //             items: 1,
//     //             nav: false
//     //         },
//     //         300: {
//     //             items: 2,
//     //             nav: false
//     //         },
//     //         600: {
//     //             items: 3,
//     //             nav: false
//     //         },
//     //         1000:{
//     //             items:3,
//     //             nav: false
//     //         }
//     //     }
//     // });
// });

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({
            scrollTop: 0
        });
    });

    // typing animation script 
    var typed = new Typed(".typing",{
        strings: ["Developer", "Designer", "Freelancer", "WTEF Scholar", "STEP Intern", "Programmer", "Blogger", "Learner", "Egalitarian", "Environmentalist", "Sophomore"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // toggle menu/navbar script 
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });

    // // Set our variables, adjust maxTilt if you want more rotation.
    // var maxTilt = 5;
    // var mouseX, mouseY;
    // // Capture the mouse position in an X and Y variable
    // $(document).on("mousemove", function(event) {
    //     mouseX = event.pageX;
    //     mouseY = event.pageY;
    // });
    // // For each item with the tilt class...
    // $('.tilt').each(function() {
    //     // Variables for the tilt elements width height and offset
    //     var thisWidth = $(this).width();
    //     var thisHeight = $(this).height();
    //     var thisOffset = $(this).offset();
    //     // When the mouse moves over a tilt element...
    //     $(this).mousemove(function() {
    //         // Create the tilt variables which take the percentage of the mouse position relative to the right and bottom of the tilt element, multiply it by the max tilt times two and subtract the max tilt so that when you're on the left side of the element it gets a negative tilt value. The top offset of the element is subtracted from the Y value of the mouse to accomodate elements that exist farther down the page.
    //         var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
    //         var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;
    //         // Transform tilt based on our variables. Adjust scale if you can see the edge of the screen when it tilts.
    //         $(this).css('transform', 'rotateY(' + horTilt + 'deg) rotateX(' + verTilt + 'deg) scale(1.2) translateZ(10px)');
    //     });
    // });
});
