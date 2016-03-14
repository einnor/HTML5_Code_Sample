$(document).ready(function(e){
  //Local Storage
  localStorage.name   = "Ronnie Nyaga";
  var userName = localStorage.name;
  $('#name').html(userName);

  // Full screen
  $('.fs-button').on('click',function(){
    var image = document.getElementById('fullscreen');
    if(document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    }
    else {
      image.webkitRequestFullScreen();
    };
  })
})
