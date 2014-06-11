$(document).ready(function(){
  
  $('#trigger-overlay').click(function() {
     $('.overlay').toggleClass('overlay_clicked');
     
     $('#trigger-overlay').toggleClass('trigger_clicked');
     
     $('.mobilenav_bar').toggleClass('no-bg');
  });
  
  $('a.gallery').fancybox({
      'titlePosition' : 'inside'
      });
  
});