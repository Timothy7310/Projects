$(documnet).ready(function () {
    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header-nav').toggleClass('active');
        
    });
});