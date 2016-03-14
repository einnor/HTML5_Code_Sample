document.getElementsByClassName("fs-button").addEventListener("click", function(){
  var image = document.getElementById('fullscreen');
  if(document.webkitFullscreenElement) {
    document.webkitCancelFullScreen();
  }
  else {
    image.webkitRequestFullScreen();
  };
});
