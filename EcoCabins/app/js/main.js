$(function(){
    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    var header = $('.menu-scroll'),
            scrollPrev = 0;
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 100 && scrolled > scrollPrev){
            header.addClass('out');
            $('.header-logo__img').removeClass('color');
            $('.header__burger-span').removeClass('color');
            $('.header__burger').removeClass('color');
        } else {
            header.removeClass('out');
            $('.header-logo__img').addClass('color');
            $('.header__burger-span').addClass('color');
            $('.header__burger').addClass('color');
        }
        
        scrollPrev = scrolled;
    });
    
    window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled === 0) {
        $('.header-logo__img').removeClass('color');
        $('.header__burger-span').removeClass('color');
        $('.header__burger').removeClass('color');
    } 
}



    var materialsSlider = new Swiper('.materials-slider', {
       // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: { 
        //     delay: 3000, 
        // },
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
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });
});