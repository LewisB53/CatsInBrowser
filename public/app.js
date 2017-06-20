var cats = [
  {
    text: 'Name: Poppy\n',
    favouriteFood: "Big Mac, Large fries and coke\n",
    image: "[insert image here]"
  }
]

var createcatul = function () {
  var catul = document.createElement('ul');
  catul.classList.add('cat');
  return catul;
}

var createliCat = function (text) {
  var liCat = document.createElement('liCat');
  liCat.innerText = text;
  return liCat;
}

var createliFood = function (catName) {
  var liFood = document.createElement('liFood');
  liFood.innerText = catName;
  return liFood;
}

var createliImage = function (catName) {
  var LiImage = document.createElement('liImage');
  liImage.innerText = catName;
  return liImage;
}

var appendElements = function (list, ul, liCat, liFood,liImage) {
  liCat.appendChild(liFood);
  liCat.appendChild(liImage);
  ul.appendChild(liCat);
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


