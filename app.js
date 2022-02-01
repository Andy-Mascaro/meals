// import functions and grab DOM elements
//import { renderStat, renderGame } from './utils.js';
// let state
const form = document.getElementById('add-ingredient');
const foodList = document.getElementById('food-list');
const mealList = document.getElementById('meal-list');
const remove = document.getElementById('remove');
const save = document.getElementById('save-meal');

let ingredient = [];
let quantity = [];
let measurement = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const meal = {
        ingredient: formData.get('ingredient'),
        quantity: formData.get('quantity'),
        measurment: formData.get('measurment'),

    };

    meal.push(meal);
    renderStats();
    form.requestFullscreen();
    
    
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state