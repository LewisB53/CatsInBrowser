var app = function() {
//Create an <article> with class 'quote'
  var ulCat =document.createElement('ul');
  ulCat.classList.add('cat');
// Create <liName>
  var liName = document.createElement('li')
  liName.innerText = "Name: Poppy"

// Create <lifood>
  var liFood = document.createElement('li')
  liFood.innerText = "Favourite Food: Big Mac, Large fries and a coke";
  // goes down level by level like a path through tags
  var catImage = document.createElement('li')
  catImage.innerText = "Insert image here";

 

 // then builds back up appending the changes
  liName.appendChild(liFood);
  liName.appendChild(catImage);
  ulCat.appendChild(liName)

  var quoteList = document.querySelector('#cats')
  quoteList.appendChild(ulCat)
}


window.onload = app;
