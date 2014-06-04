$(document).ready(function(){
  $( "#music" ).click(function() {
    $('#music_submenu').slideToggle('goaway');
    $('#that_triangle').toggleClass("goaway_for_real");
  });
});