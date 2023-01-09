$(function(){
    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('fixed');
    });



     // Якорные ссылки

    $("body").on('click', '[href*="#"]', function(e){
          
        
        if(window.matchMedia('(max-width: 767px)').matches){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top + fixed_offset }, 1000);
        } else{
            var fixed_offset = 50;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        }      
        e.preventDefault();
       
    });
    






    // const modalButton = document.querySelectorAll('.button-certificates');
    // var modalImg = document.querySelector('#img01');
    // var modal = document.getElementById('modalCertificates');
    // var modalOverlay = document.querySelector('.modal-certificates__overlay');

    // modalButton.forEach(el=> el.addEventListener('click', function openModal(e){
    //     console.log(modalImg.getAttribute('src'));
    //     console.log(el.querySelector('.study__certificates-img').getAttribute('src'));

    //     e.preventDefault();
    //     modalImg.src = el.querySelector('.study__certificates-img').src;
    //     modal.style.visibility = "visible";
    //     modal.style.opacity = "1";
    //     modalOverlay.style.visibility = "visible";
    //     modalOverlay.style.opacity = "1";
    //     document.querySelector('html').classList.add("hystmodal-opened");

    //             focusedElementBeforeModal = document.activeElement;
    //              modal.addEventListener('keydown', trapTabKey);
    //              // Находим все элементы для фокуса 
    //              var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    //              var focusableElements = modal.querySelectorAll(focusableElementsString);
    //              // Convert NodeList to Array
    //              focusableElements = Array.prototype.slice.call(focusableElements);

    //              var firstTabStop = focusableElements[0];
    //              var lastTabStop = focusableElements[focusableElements.length - 1];
    //              firstTabStop.focus();

    //             function trapTabKey(e) {
    //                  // Check for TAB key press
    //                  if (e.keyCode === 9) {
    //                      // SHIFT + TAB
    //                      if (e.shiftKey) {
    //                          if (document.activeElement === firstTabStop) {
    //                              e.preventDefault();
    //                              lastTabStop.focus();
    //                          }
    //                      // TAB
    //                      } else {
    //                          if (document.activeElement === lastTabStop) {
    //                              e.preventDefault();
    //                              firstTabStop.focus();
    //                          }
    //                      }
    //                 }
    //             }
        

    //          }
    // ));
            
                
           


    


    // var closeButton = document.getElementsByClassName("modal-certificates__close")[0];
    // closeButton.onclick = function closeModal () {
    //         modal.style.visibility = "hidden";
    //         modal.style.opacity = "0";
    //         modalOverlay.style.visibility = "hidden";
    //         modalOverlay.style.opacity = "0";
    //         document.querySelector('html').classList.remove("hystmodal-opened");
    //         focusedElementBeforeModal.focus();
    // }

    // var modalOverlay = document.querySelector('.modal-certificates__overlay');
    // modalOverlay.onclick = function closeModal () {
    //          modal.style.visibility = "hidden";
    //          modal.style.opacity = "0";
    //          modalOverlay.style.visibility = "hidden";
    //          modalOverlay.style.opacity = "0";
    //          document.querySelector('html').classList.remove("hystmodal-opened");
    //          focusedElementBeforeModal.focus();
             
    // }


     const modalButton = document.querySelectorAll('.button-certificates');
		var modalImg = document.querySelector('#img01');
		var modal = document.getElementById('modalCertificates');
		var close = document.getElementById("close");
		var overlay = document.querySelector('.modal-certificates__overlay');
    
    
    
    
    function closeModal(){

  		modal.style.visibility = "hidden";
  		modal.style.opacity = "0";
  		overlay.style.visibility = "hidden";
  		overlay.style.opacity = "0";
  		document.querySelector('html').classList.remove("hystmodal-opened");
  
}
function openModal(){
   	modal.style.visibility = "visible";
		modal.style.opacity = "1";
		overlay.style.visibility = "visible";
		overlay.style.opacity = "1";
		document.querySelector('html').classList.add("hystmodal-opened");
}
    
    
    
    

    modalButton.forEach(el=> el.addEventListener('click', function (e){
       

        e.preventDefault();
        modalImg.src = el.querySelector('.study__certificates-img').src;
       	openModal();

	}
));
            
               
   
    // close.onclick = function () {
    //         closeModal ();
    // }

    close.addEventListener('click', function (){
         closeModal ();
    })

  
    // overlay.onclick = function () {
    //          closeModal ();
             
    // }

    overlay.addEventListener('click', function (){
         closeModal ();
    })



   



    
});


// var modalOverlay = document.querySelector('.modal-certificates__overlay');
// var close = document.getElementById("close");
// var modal = document.getElementById("modalCertificates");
// const modalButton = document.querySelectorAll('.button-certificates');



// function openModal(){
//     modal.style.visibility = "visible";
//     modal.style.opacity = "1";
//     modalOverlay.style.visibility = "visible";
//     modalOverlay.style.opacity = "1";
//     document.querySelector('html').classList.add("hystmodal-opened");
    
// }


// function onClick(element) {
//     document.getElementById("img01").src = element.src;
   
// }



// modalButton.forEach(el=> el.addEventListener('click', function (e){
    
//     openModal();
// }))


// function closeModal() {
// 	modal.style.visibility = "hidden";
//     modal.style.opacity = "0";
//     modalOverlay.style.visibility = "hidden";
// 	modalOverlay.style.opacity = "0";
//     document.querySelector('html').classList.remove("hystmodal-opened");
// }

// close.onclick = function (){
//     closeModal ();
// }

// modalOverlay.onclick =   function () {
// 	closeModal ();
// }
  

  