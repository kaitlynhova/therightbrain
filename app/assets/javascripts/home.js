$(document).ready(function(){
 var previous_scroll_position = 0;
 loadPhotos();
// SCROLLING EFFECT ON HOME PAGE
//replace image every 50px  
 function loadPhotos(){
   var windscroll = $(window).scrollTop();
   console.log(windscroll);
   if (windscroll < 50) {
     $('#moving_photo1').removeClass('goaway');
     $('#moving_photo2').addClass('goaway');
     $('#moving_photo3').addClass('goaway');
   }
   if (windscroll >= 50) {
     $('#moving_photo1').addClass('goaway');
     $('#moving_photo2').removeClass('goaway');
     $('#moving_photo3').addClass('goaway');
   }
    if (windscroll >= 100) {
      $('#moving_photo1').addClass('goaway');
      $('#moving_photo2').addClass('goaway');
      $('#moving_photo3').removeClass('goaway');
    }  
 }
  $(window).scroll(function() {
    loadPhotos();
  });
});