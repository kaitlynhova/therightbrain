$(document).ready(function(){
  
  $('#trigger-overlay').click(function() {
     $('.overlay').toggleClass('overlay_clicked');
     
     $('#trigger-overlay').toggleClass('trigger_clicked');
     
     $('.mobilenav_bar').toggleClass('no-bg');
  });
  
  $('a.gallery').fancybox({
      'titlePosition' : 'inside'
      });
      $('#mobile_music').click(function() {
        $('#mobile_music_subnav').toggleClass('tada_subnav');
      });
      $('#mobile_media').click(function() {
        $('#mobile_media_subnav').toggleClass('tada_subnav');
      });
  
});