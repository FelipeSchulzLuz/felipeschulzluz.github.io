import Flickity from flickity


var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  fullscreen: true,
  adaptiveHeight: true,
  imagesLoaded: true,
});

