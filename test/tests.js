import { renderMealLi, renderIngredientLi } from '../utils.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>rice 2 cups</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredientLi({ ingredient: 'rice', quantity: 2, measurement: 'cups' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>pork - 1</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMealLi({ name:'pork', count: '1', });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
