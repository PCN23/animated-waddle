export function renderIngredientLI(item) {
    const li = document.getElementById('list');
    li.textContent = `${item.qty} ${item.measurement} of ${item.ingredient}`;
    return li;
}
export function renderMealLI(meal) {
    const li = document.getElementById('list');
    li.textContent = `${meal.name} - ${meal.count} Ingredients`;
    return li;
}