var cats = [
  {
    text: 'Name: Poppy\n',
    favouriteFood: "Big Mac, Large fries and coke\n",
    image: "[insert image here]"
  }
]

var createcatul = function () {
  // Create an <ul> with a class 'cat'
  var catul = document.createElement('ul');
  catul.classList.add('cat');
  return catul;
}

var createliCat = function (text) {
  // create <liCat> with text inside it
  var liCat = document.createElement('liCat');
  liCat.innerText = text;
  return liCat;
}

var createliFood = function (catName) {
  // Create a <liFood> with text inside it
  var liFood = document.createElement('liFood');
  liFood.innerText = catName;
  return liFood;
}

var createliImage = function (catName) {
  // Create a <liFood> with text inside it
  var LiImage = document.createElement('liImage');
  liImage.innerText = catName;
  return liImage;
}

var appendElements = function (list, ul, liCat, liFood,liImage) {
 
  // Put <liFood> in the <liCat>
  liCat.appendChild(liFood);
  liCat.appendChild(liImage);
  // Put the <liCat> in the <ul>
  ul.appendChild(liCat);
  // Put full <ul> in the list of cats
  list.appendChild(ul);
}

var addcat = function(catName, catText,catImage) {
  var catul = createcatul();
  var liCat = createliCat(catText);
  var liFood = createliFood(catName);
  var liImage = createliFood(catImage);


  var catsList = document.querySelector('#cats');
  appendElements(catsList, catul, liCat, liFood,liImage);
}


var app = function () {

  for (var cat of cats) {
    addcat(cat.favouriteFood, cat.text,cat.image);
  }

}

window.onload = app;


