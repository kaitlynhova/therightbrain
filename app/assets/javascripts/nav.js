$(document).ready(function(){
  $( "#music" ).click(function() {
    $('#music_submenu').slideToggle('goaway');
    $('.that_triangle').slideToggle('triangle_submenu');
  });
});