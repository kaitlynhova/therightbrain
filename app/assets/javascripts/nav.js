$(document).ready(function(){
  $( "#music" ).click(function() {
    $('#that_triangle').slideToggle('triangle_submenu');
    $('#music_submenu').slideToggle('goaway');
    if ($('#that_triangle').position().top == 68){
      $('#that_triangle').css('display', 'none');
    }else if ($('#that_triangle').position().top == 108){
      $('#that_triangle').css('top', '68px');
    }
  });
  $( "#media" ).click(function() {
    $('#that_triangle').slideToggle('triangle_submenu');
    $('#media_submenu').slideToggle('goaway');
    if ($('#that_triangle').position().top == 68){
      $('#that_triangle').css('top', '108px');
    }else if ($('#that_triangle').position().top == 108){
      $('#that_triangle').css('top', '68px');
    }
  });
  
});