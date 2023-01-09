$(function(){

    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

  var sliderService = new Swiper('.service-slider ', {
  // Optional parameters
  
  
  loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.service__button-next',
    prevEl: '.service__button-prev',
  },

  breakpoints: {
    1500:{
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 37,
    },
    1200: {
        centeredSlides: true,
        slidesPerView: 3, 
        spaceBetween: 20,
        
       
    },
    992: {
        slidesPerView: 2,
        spaceBetween: 20,
       
        centeredSlides: false,
       
        
        
    },
    767: {
        slidesPerView: 1,
        
    },
  },

  
});


var sliderClients = new Swiper('.clients-slider ', {
  // Optional parameters
  
 
  loop: true,
 

  // Navigation arrows
  navigation: {
    nextEl: '.clients__button-next',
    prevEl: '.clients__button-prev',
  },

   breakpoints: {
    1500:{
        slidesPerView: 2,
        spaceBetween: 37,
    },
    1200: {
        slidesPerView: 1, 
        
        
       
    },
    992: {
        slidesPerView: 1,
        spaceBetween: 20,
       
        centeredSlides: false,
       
        
        
    },
    767: {
        slidesPerView: 1,
        
    },
  },

  
});



var modalToggle = document.querySelector('.modal-toggle');
var modalToggleMobile = document.querySelector('.modal-toggle--mb');
modalToggle.addEventListener('click', openModal);
modalToggleMobile.addEventListener('click', openModal);

var closeModalButton = document.querySelector('.button-close');
closeModalButton.addEventListener('click', closeModal);

 
// Настройка фокуса в модальном окне

var focusedElementBeforeModal;

var modal = document.querySelector('.modal__dialog');
var modalOverlay = document.querySelector('.modal__overlay');



function openModal() {
  var modalOverlay = document.querySelector('.modal__overlay');
  var modalDialog = document.querySelector('.modal__dialog');
  modalOverlay.classList.add("modal__overlay--visible")
  modalDialog.classList.add("modal__dialog--visible");
  document.querySelector('html').classList.add("hystmodal-opened");
  // Сохранение фокуса
  focusedElementBeforeModal = document.activeElement;

  modal.addEventListener('keydown', trapTabKey);

  // Закрытие при клике вне формы
  modalOverlay.addEventListener('click', closeModal);

  // Находим все элементы для фокуса 
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var focusableElements = modal.querySelectorAll(focusableElementsString);
  // // Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstTabStop = focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];
  firstTabStop.focus();

  function trapTabKey(e) {
    // Check for TAB key press
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }
  }

}


function closeModal() {
 
  var modalOverlay = document.querySelector('.modal__overlay');
  var modalDialog = document.querySelector('.modal__dialog');
  
  modalOverlay.classList.remove("modal__overlay--visible");
  modalDialog.classList.remove("modal__dialog--visible");
  document.querySelector('html').classList.remove("hystmodal-opened");
  
  // Set focus back to element that had it before the modal was opened
  focusedElementBeforeModal.focus();
}


// проверка на пустоту заполненных полей
$('.form-modal').submit(function(){
  if(document.forms.email.value == '' || document.form.password.value == ""){
    valid = false;
    return valid;
  } else{
    closeModal();
  }
});

// Закрытие на esc
$(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      closeModal()
    }
  });







});

