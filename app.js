import { renderMealLi, renderIngredientLi } from './utils.js';
// import functions and grab DOM elements
//import { renderStat, renderGame } from './utils.js';
// let state
const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const mealsList = document.getElementById('meal-list');
const remove = document.getElementById('remove');
const save = document.getElementById('save-meal');
const mealName = document.getElementById('meal-name');
let meals = [];
let ingredients = [];



function renderMeals() {
    mealsList.textContent = '';
    for (let meal of meals) {
        const li = renderMealLi(meal);
        mealsList.append(li);
    }

}
function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLi(item);
        ingredientList.appendChild(li);
    }

}

function resetIngredients(){
    ingredients = [];
    ingredientList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = {
        ingredient: data.get('ingredient'),
        quantity: data.get('quantity'),
        measurement: data.get('measurement'),
      
    };

    ingredients.push(item);
    renderIngredients();
    form.reset();

    
});

remove.addEventListener ('click', ()=> {
    ingredients.pop();
    renderIngredients();
});

save.addEventListener ('click', () => {
    const name = mealName.value;
    const count = ingredients.length;  
    meals.push({ name, count });
    renderMeals();
    resetIngredients();

    
    
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state