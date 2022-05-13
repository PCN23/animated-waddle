export function renderIngredientLI(item) {
    const li = document.createElement('list');
    li.textContent = `${item.qty} ${item.measurement} of ${item.ingredients}`;
    return li;
}
export function renderMealLI(meal) {
    const li = document.createElement('list');
    li.textContent = `${meal.name} - ${meal.count} ${meal.ingredients}`;

    // const li = document.createElement ('food-list');
    
    return li;
}