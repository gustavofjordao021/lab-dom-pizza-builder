// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
};

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushrooms){
    if (state.mushrooms) {
      $mushrooms.style.visibility = "visible";
    }
    else {
      $mushrooms.style.visibility = "hidden";
    }
  })
};

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
};


function renderWhiteSauce() {
  document.querySelectorAll('.sauce.sauce-white').forEach(function($sauceWhite){
    if (state.whiteSauce) {
      $sauceWhite.style.visibility = "visible";
    }
    else {
      $sauceWhite.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust-gluten-free');
  function changeCrust(crust){
    if (!state.crustGlutenFree) {
      console.log("Test");
      // $glutenFreeCrust.className = "crust-gluten-free";
    }
    else {
      $glutenFreeCrust.style.visibility = "visible";
    }
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
 };

 document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
 };

 document.querySelector('.btn.btn-crust').onclick = function() {
  state.crustGlutenFree = !state.crustGlutenFree
  renderEverything()
 };