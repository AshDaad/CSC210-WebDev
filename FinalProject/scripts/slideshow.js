
var image = document.getElementById("image");

var imageArray = ["images/example1b.jpg", "images/example1.jpg", "images/example2b.png","images/example2.jpg", "images/example3b.png", "images/example3.jpg"];

var imageIndex = 0;

function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}

window.onload = function() {
   setInterval(changeImage,2000);
}