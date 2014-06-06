$(document).ready(function(){
  $( "#music" ).click(function() {
    //$('#music_submenu').removeClass('goaway');
    $('#music_submenu').css('opacity', '1.0');
    $('#music_submenu').css('top', '0px');
    // $('#that_triangle').slideToggle('triangle_submenu');
    // $('#music_submenu').slideToggle('goaway');
    // if ($('#that_triangle').position().top == 68){
    //   $('#that_triangle').css('display', 'none');
    // }else if ($('#that_triangle').position().top == 108){
    //   $('#that_triangle').css('top', '68px');
    // }
  });
  $( "#media" ).click(function() {
    // $('#that_triangle').slideToggle('triangle_submenu');
    // $('#media_submenu').slideToggle('goaway');
    // if ($('#that_triangle').position().top == 68){
    //   $('#that_triangle').css('top', '108px');
    // }else if ($('#that_triangle').position().top == 108){
    //   $('#that_triangle').css('top', '68px');
    // }
  });
  
  var anchor = document.querySelectorAll('button');
  
  [].forEach.call(anchor, function(anchor){
    var open = false;
    anchor.onclick = function(event){
      event.preventDefault();
      if(!open){
        this.classList.add('close');
        open = true;
      }
      else{
        this.classList.remove('close');
        open = false;
      }
    }
  }); 
  
});