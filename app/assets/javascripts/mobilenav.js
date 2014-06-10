$(document).ready(function(){

  var anchor = document.querySelectorAll('button');
  
  [].forEach.call(anchor, function(anchor){
    var open = false;
    anchor.onclick = function(event){
      event.preventDefault();
      $('.overlay').toggleClass('overlay-scale');
      $('.mobilenav_bar').toggleClass('no-bg');
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