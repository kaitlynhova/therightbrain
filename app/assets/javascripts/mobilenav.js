$(document).ready(function(){
  // MOBILE NAV CLICK ANNIMATIONS FROM HAMBURGER TO X
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