$(document).ready(function(){
  $( "#music" ).click(function() {
    $('#music_submenu').slideToggle('goaway');
    $('.that_triangle').css('display','none !important');
  });
});