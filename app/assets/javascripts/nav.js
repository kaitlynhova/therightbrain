$(document).ready(function(){
  
  $('#trigger-overlay').click(function() {
     $('.overlay').toggleClass('overlay_clicked');
     
     $('#trigger-overlay').toggleClass('trigger_clicked');
     
     $('.mobilenav_bar').toggleClass('no-bg');
  });
  
  $('#trigger-contact-overlay').click(function() {
     $('.contact-overlay').toggleClass('overlay_clicked');
     
     $('#trigger-contact-overlay').toggleClass('trigger_clicked');
     
     $('.navbg').toggleClass('no-bg');
     $('#that_triangle').toggleClass('go-away');
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
  $('#music').click(function() {
    //$('#that_triangle').toggleClass("goaway");
    $('#that_triangle').toggleClass("godown");
    $('#music_submenu').toggleClass("comeback");
    $('.navbg').toggleClass('newheight');
  });
  $('#media').click(function() {
    $('#that_triangle').toggleClass("godown");
    $('#media_submenu').toggleClass("comeback");
    $('.navbg').toggleClass('newheight');
  });
  
  
});