//functions for add, subtract, multiply, divide

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a ,b) {
    return a / b;
};


//Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

const operate = function(a, b, operator) {
    if (operator === '+') {
        return add(a,b);
    } else if ( operator === '-') {
        return subtract(a,b);
    } else if (operator === 'x') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    } else {
        return 'Error';
    }
};

//functions for display of numbers



//create three variables for num1, operator, num2

let num1 = 1;
let num2 = 1;
let operator = '+';
