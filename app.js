// import functions and grab DOM elements
//import { renderStat, renderGame } from './utils.js';
// let state
const form = document.getElementById('add-ingredient');
const foodList = document.getElementById('food-list');
const mealsList = document.getElementById('meal-list');
const remove = document.getElementById('remove');
const save = document.getElementById('save-meal');

let meals = [];
let quantity = [];
let measurement = [];


function renderMeals() {
    mealsList.textContent = '';
    for (let item of meals) {
        const li = renderMeals(item);
        mealsList.appendChild(li);
    }

}
function renderFood() {
  const foodList.textContent = '';
  for (let item of food) {
    const li = renderFood(item);
    foodList.appendChild.(li);
  }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const meal = {
        ingredient: formData.get('ingredient'),
        quantity: formData.get('quantity'),
        measurement: formData.get('quantity'),
      
    };

    meal.push(meal);
    renderMeals();
    form.reset();

    
});

remove.addEventListener ('click' , ( )=> {
    meals.pop();
    renderMeals();
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state