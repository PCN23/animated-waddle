// import functions and grab DOM elements

import { renderIngredientLI, renderMealLI } from './utils.js';


const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('removeList');
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
        qty: Number(data.get('quantity')),
        measurement: data.get('measurement'),
    };
    ingredients.push(item);
    form.reset();
    renderIngredients();
});

remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

save.addEventListener('click', () => {
    const name = mealName.value;
    const count = ingredients.length;
    //const ingredients = ingredients[0];
    
    meals.push({ name, count }); 
    renderMeals();
    renderIngredients();
    resetIngredients();
});

