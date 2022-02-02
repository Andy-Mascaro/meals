export function renderFood(item) {
    const li = document.createElement ('li');
    li.textContent = `${item.ingredient} ${item.quantity} ${item.measurement}`;
    return li;
}


export function renderMeals(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.count}`;
    return li;
}