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
        $('html').animate({ scrollTop: 0 });
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Open-Source Contributor", "Mentor", "Programmer", "Brand Ambassador", "Learner", "Sophomore"],
        typeSpeed: 50,
        backSpeed: 25,
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
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            300: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }
    });
});