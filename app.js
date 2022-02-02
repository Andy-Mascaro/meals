// import functions and grab DOM elements
//import { renderStat, renderGame } from './utils.js';
// let state
const form = document.getElementById('add-ingredient');
const foodList = document.getElementById('food-list');
const mealsList = document.getElementById('meal-list');
const remove = document.getElementById('remove');
const save = document.getElementById('save-meal');

let meals = [];
let food = [];



function renderMeals() {
    mealsList.textContent = '';
    for (let item of meals) {
        const li = renderMeals(item);
        mealsList.appendChild(li);
    }

}
function renderFood() {
    foodList.textContent = '';
    for (let food of food) {
        const li = renderFood(food);
        foodList.appendChild(li);
    }

}

function resetMeals(){
    meals = [];
    mealsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const meal = {
        ingredient: formData.get('ingredient'),
        quantity: formData.get('quantity'),
        measurement: formData.get('quantity'),
      
    };

    meals.push(meal);
    renderMeals();
    form.reset();

    
});

remove.addEventListener ('click', ()=> {
    meals.pop();
    renderMeals();
});

save.addEventListener ('click', () => {
    let totalQuantity = 0;
    for (let meal of meals) {
        totalQuantity += (meal.points * 1);
    }
    const recipe = {
        number: recipe.length + 1,
        totalQuantity: totalQuantity,
    };
    recipe.push(recipe);
    renderFood();
    resetMeals();
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state