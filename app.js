// import functions and grab DOM elements

import { renderIngredientList } from "./utils";

const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');
 


// let state
let ingredients = [];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = {
        ingredients: data.get('ingredients'),
        qty: data.get('qty'),
        measurement: data.get('measurement'),
    };
    ingredients.push.get('ingredients'),
    form.reset();
    renderIngredientList();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
