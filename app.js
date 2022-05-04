// import functions and grab DOM elements

import { renderIngredientLI, renderMealLI } from './utils';


const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove');
const mealName = document.getElementById('meal-name');
const save = document.getElementById('save-meal');
 


// let state
let ingredients = [];
let meals = [];

function renderMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMealLI(meal);
        mealList.append(li);
    }
}

function renderIngredients() {
    ingredientsList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLI(item);
        ingredientsList.appendChild(li);
    }
}

function resetIngredients() {
    ingredients = [];
    ingredientsList.textContent = '';
}

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
});

remove.addEventListener('click', () =>{
  // get user input
    ingredients.pop();
  // use user input to update state 
  // update DOM to reflect the new state
});

