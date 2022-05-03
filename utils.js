export function renderIngredientLi(item) {
    const li = document.getElementById('list');
    li.textContent = `${item.qty} ${item.em} of ${item.ingredient}`;
    return li;
}
export function renderMealli(meal) {
    const li = document.getElementById('list');
    li.textContent = `${meal.name} - ${meal.count} Ingredients`;
}