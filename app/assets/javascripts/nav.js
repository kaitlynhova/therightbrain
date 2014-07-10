$(document).ready(function(){
  
  //MOBILE OVERLAY
  $('#trigger-overlay').click(function() {
     $('.overlay').toggleClass('overlay_clicked');
     
     $('#trigger-overlay').toggleClass('trigger_clicked');
     
     $('.mobilenav_bar').toggleClass('no-bg');
  });
  
  //FANCYBOX FORMATTING 
  $('a.gallery').fancybox({
      'titlePosition' : 'inside'
    });
    
  //MOBILE MUSIC MENU POP UP
  $('#mobile_music').click(function() {
      $('#mobile_music_subnav').toggleClass('tada_subnav');
      });
      $('#mobile_media').click(function() {
        $('#mobile_media_subnav').toggleClass('tada_subnav');
    });
  
  //DESKTOP MUSIC MENU POP DOWN  
  $('#music').click(function() {
    if ($( "#navbg" ).hasClass( "newheight" )){
      $('#media_submenu').toggleClass("comeback");
      $('#music_submenu').toggleClass("comeback");
      $('#media_submenu').css("display","none !important;");
    }
    else{
      $('#that_triangle').toggleClass("godown");
      $('#music_submenu').toggleClass("comeback");
      
      $('.navbg').toggleClass('newheight');
    } 
  });
  //DESKTOP MEDIA MENU POP DOWN 
  $('#media').click(function() {
    if ($( "#navbg" ).hasClass( "newheight" )){
      $('#media_submenu').toggleClass("comeback");
      $('#music_submenu').toggleClass("comeback");
      $('#music_submenu').css("display","none !important");
    }

    else{
      $('#that_triangle').toggleClass("godown");
      $('#media_submenu').toggleClass("comeback");
      $('.navbg').toggleClass('newheight');
    } 
  });
  
  
});