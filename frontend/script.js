$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up scripting
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeOut: 1500,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            500:{
                items: 2,
                nav: false
            }
        }
    });


    // typing Animation script
    var typed = new Typed(".typing", {
        strings: ["progremmer", "web developer", "web designer", "application developer" , "application designer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});