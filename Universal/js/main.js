$(document).ready(function() {
    $('#burger').click(function(event){
        $('.header__burger,.header__burger-span, .header-nav' ).toggleClass('active');
        $('body').toggleClass('lock');
    });
    var tabsItem = $(".recommendations-item");
    var contentItem = $(".lifehacks-content__item")

    tabsItem.on('click', function(event){
        var activeContent = $(this).attr("data-target");
        tabsItem.removeClass('recommendations-item--active');
        contentItem.removeClass("lifehacks-content__item--active")
        $(activeContent).addClass('lifehacks-content__item--active');
        $(this).addClass("recommendations-item--active");
    });

    $('#change-color1').on("click", function() {
	if( $('#change-color1').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color1').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color1').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color2').on("click", function() {
	if( $('#change-color2').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color2').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color2').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color3').on("click", function() {
	if( $('#change-color3').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color3').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color3').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color4').on("click", function() {
	if( $('#change-color4').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color4').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color4').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color5').on("click", function() {
	if( $('#change-color5').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color5').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color5').css({ fill: "#BCBFC2" });
    }    
    });

    $('#change-color6').on("click", function() {
	if( $('#change-color6').css('fill') == "rgb(188, 191, 194)"){
  	$('#change-color6').css({ fill: "#FF4F52" });
    }else{
  	$('#change-color6').css({ fill: "#BCBFC2" });
    }    
    });

    
   
   $('#read-tags-change1').on('click', function(){
    $('#read-tags-change1').toggleClass('read-tags-button--active')
   });
   $('#read-tags-change2').on('click', function(){
    $('#read-tags-change2').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change3').on('click', function(){
    $('#read-tags-change3').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change4').on('click', function(){
    $('#read-tags-change4').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change5').on('click', function(){
    $('#read-tags-change5').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change6').on('click', function(){
    $('#read-tags-change6').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change7').on('click', function(){
    $('#read-tags-change7').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change8').on('click', function(){
    $('#read-tags-change8').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change9').on('click', function(){
    $('#read-tags-change9').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change10').on('click', function(){
    $('#read-tags-change10').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change11').on('click', function(){
    $('#read-tags-change11').toggleClass('read-tags-button--active')
   });

   $('#read-tags-change12').on('click', function(){
    $('#read-tags-change12').toggleClass('read-tags-button--active')
   });
   $('#read-tags-change13').on('click', function(){
    $('#read-tags-change13').toggleClass('read-tags-button--active')
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



var mySwiperArticle = new Swiper('.swiper-container-article', {

  loop: true,

  

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next ',
    prevEl: '.slider-button--prev',
  },
   keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

 
})




$(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        
        email: {
          required: "Enter your email address",
          email: "Enter your email address in the format name@domain.com",
        },
        
      },
    });
  });

  
$(".think-about-form").each(function () {
    $(this).validate({
      errorClass: "invalid-textarea",
      messages: {
        message: {
          required: "Минимальный набор 100 символов",
           email: " Минимальный набор 100 символов"
        },
        
        
      },
    });
  });



  $('#loading').on('click', function(){
    $('.comments-item-hidden').removeClass('comments-item-hidden'),
    $('.button-loading').addClass('button-loading-hidden');

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

});

