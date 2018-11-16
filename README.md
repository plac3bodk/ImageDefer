# ImageDefer.js
Improve pageload by deferring images - No jQuery or LazyLoad needed

## Getting started
Listing a bunch of images on your website/blog, will often result in very long load times.
To avoid this, you can defer your images, by using a base 64 image as src, until the DOM has loaded.

#### Example
```
<img src="placeholder.png" data-src="real_image.png">
```
Loading the same placeholder image on every image source, will ensure that your browser only needs to load it once.
When the DOM is loaded, the script will replace the placeholder image with the real image paths.

#### Usage

##### HTML
```
<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="your_img_path">
```

##### JavaScript
```
function imageDefer() {
var getImg = document.getElementsByTagName('img');
for (var i=0; i<getImg.length; i++) {
if(getImg[i].getAttribute('data-src')) {
getImg[i].setAttribute('src',getImg[i].getAttribute('data-src'));
} } }
window.onload = imageDefer;
```

Add the ImageDefer.js before the end body tag, to run the imageDefer function after DOM has loaded.
