$(document).ready(function(){
   $('#burger').click(function(event){
        $('.header__burger, .header__burger-span, .header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    }); 
    var mySwiper = new Swiper('.swiper-container', {
       // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: { 
            delay: 3000, 
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });
                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#menu-footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            if ($(window).width() <= 767) {
                top = $(id).offset().top - 100;
            }
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    function backToTop(){
        let button = $('.back-to-top');

        $(window).on('scroll', () => {
        if($(this).scrollTop() >= 50){
            button.fadeIn();
        }else {
            button.fadeOut();
        }
        });
        button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
        })
    }
    backToTop();

   
    AOS.init();
});
