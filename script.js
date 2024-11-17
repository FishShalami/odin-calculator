//functions for changing buttons on click
const buttons = document.querySelectorAll('button')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        this.classList.add("clicked");
        setTimeout(() => {
            this.classList.remove("clicked");
        }, 150);
    });

}



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


const numSelect = document.querySelectorAll(".num");
let numSelectValue = ''
let num1 = ''
let num2 = ''

const userNumSelect = function() {
    for(let i = 0; i < numSelect.length; i++) {
        numSelect[i].addEventListener("click", function(e) {
            numSelectValue += Number(e.target.innerText); //allows repeated button clicks for numbers like 222, or 1133
            // console.log("You clicked the " + numSelectValue + " button");
            displayNumber.textContent = numSelectValue;
            // num1 = numSelectValue;
            return numSelectValue;
        });
    
    }
}


//operator selection function:
const operatorSelect = document.querySelectorAll('.operator');
let opSelectChar = ''

const userOperatorSelect = function() {
    for(let i = 0; i < operatorSelect.length; i++) {
        operatorSelect[i].addEventListener("click", function(e) {
            opSelectChar = e.target.innerText; 
            console.log("You clicked the " + opSelectChar + " button");
            return opSelectChar;
        });
    }
}

userNumSelect();
userOperatorSelect();

//display the value in the 'screen' of the calculator
const displayScreen = document.querySelector(".display-num");
let displayNumber = document.createElement('p');
displayScreen.appendChild(displayNumber);

//initialize display with the initial value
displayNumber.textContent = numSelectValue;



//if user selects clear, then set all variables to default. clearing function:
//variables set to '' or 0 and p element for the display set to ''



//logic for operations:
    //clear screen --> if user selects numbers, store number in a variable, num1
    //once user selects an operator, store the operator selected as a variable, operator
    //the next number entered is to be used as other number variable, num2
    // use the operator function for operate(num1, num2, operator)
    //store the result from operate in the calc display window p element




