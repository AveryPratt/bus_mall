'use strict';

var imgContainer = document.getElementById('image-container');
var productImg = [];
var newImg = [];
var previousImages = [];
// product constructor

function Product(imgName, path, views, clicks) {
  this.imgName = imgName;
  this.path = path;
  this.views = views;
  this.click = clicks;
  productImg.push(this);
};

new Product('bag', 'img/bag.jpg', 0, 0);
new Product('banana', 'img/banana.jpg', 0, 0);
new Product('bathroom', 'img/bathroom.jpg', 0, 0);
new Product('boots', 'img/boots.jpg', 0, 0);
new Product('breakfast', 'img/breakfast.jpg', 0, 0);
new Product('bubblegum', 'img/bubblegum.jpg', 0, 0);
new Product('chair', 'img/chair.jpg', 0, 0);
new Product('cthulhu', 'img/cthulhu.jpg', 0, 0);
new Product('dog-duck', 'img/dog-duck.jpg', 0, 0);
new Product('pen', 'img/pen.jpg', 0, 0);
new Product('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
new Product('scissors', 'img/scissors.jpg', 0, 0);
new Product('shark', 'img/shark.jpg', 0, 0);
new Product('sweep', 'img/sweep.png', 0, 0);
new Product('tautaun', 'img/tauntaun.jpg', 0, 0);
new Product('unicorn', 'img/unicorn.jpg', 0, 0);
new Product('usb', 'img/usb.gif', 0, 0);
new Product('water-can', 'img/water-can.jpg', 0, 0);
new Product('wine-glass', 'img/wine-glass.jpg', 0, 0);



var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');

var leftImg;
var centerImg;
var rightImg;

render();



function render() {
  var imgRandom = function() {
    for (var i = 0; i < productImg.length; i++) {
      leftImg = Math.floor(Math.random() * productImg.length);
      centerImg = Math.floor(Math.random() * productImg.length);
      rightImg = Math.floor(Math.random() * productImg.length);
      newImg = [];
      newImg.push(leftImg, centerImg, rightImg);

    }
    imgRandom();
    left.setAttribute('src', leftImg.path);
    middle.setAttribute('src', centerImg.path);
    right.setAttribute('src', rightImg.path);
  };
  //checking for duplicate images
  while ((leftImg === centerImg) || (centerImg === rightImg) || (leftImg === rightImg) || newImg[0] === previousImages[0] || newImg[0] === previousImages[1] || newImg[0] === previousImages[2] || newImg[1] === previousImages[0] || newImg[1] === previousImages[1] || newImg[1] === previousImages[2] || newImg[2] === previousImages[0] || newImg[2] === previousImages[1] || newImg[2] === previousImages[2]) {
    imgRandom();
  }
}
