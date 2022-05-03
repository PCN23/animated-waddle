// import functions and grab DOM elements


const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove');
 


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

remove.addEventListener('click', () =>{
  // get user input
    ingredients.pop();
  // use user input to update state 
    renderIngredients();
  // update DOM to reflect the new state
});