$(document).ready(function(){
  
  $('#trigger-overlay').click(function() {
     $('.overlay').toggleClass('overlay_clicked');
     
     $('#trigger-overlay').css("z-index", 101);
     
     $('.mobilenav_bar').css("background","none");
  });
  
});