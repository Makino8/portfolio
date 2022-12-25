'use strict';
// navi
$(function(){
    $('.menu-btn').click(function(){
        $('.sp-menu').slideToggle(200);
    });
    $('.sp-menu li').click(function(){
        $('.sp-menu').css({display:'none'});
    });
});

// 2_cthulhu-flexslider
$(window).on("load", function(){
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 4000,
        animationSpeed: 2000,

    });/* flexslider */
})/* function    */


// fadein
function scroll_effect() {
    var element = document.getElementsByClassName('scroll-up');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 100;
    for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {
        element[i].classList.add('is-show');
      }
    }
  }
  window.addEventListener('scroll', scroll_effect);