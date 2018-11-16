function imageDefer() {
  var getImg = document.getElementsByTagName('img');
    for (var i=0; i<getImg.length; i++) {
      if(getImg[i].getAttribute('data-src')) {
        getImg[i].setAttribute('src',getImg[i].getAttribute('data-src'));
  } } }
window.onload = imageDefer;
