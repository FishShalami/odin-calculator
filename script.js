//functions for changing buttons on click
const buttons = document.querySelectorAll('button')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        this.classList.add("clicked");
        setTimeout(() => {
            this.classList.remove("clicked");
        }, 125);
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
let isEnteringSecondNumber = false;

const userNumSelect = function() {
    for(let i = 0; i < numSelect.length; i++) {
        numSelect[i].addEventListener("click", function(e) {

            if (isEnteringSecondNumber) {
                numSelectValue = ''; // Clear numSelectValue for num2
                displayNumber.textContent = ''; // Clear the display
                isEnteringSecondNumber = false; // Reset flag
            }

            numSelectValue += Number(e.target.innerText); //allows repeated button clicks for numbers like 222, or 1133
            // console.log("You clicked the " + numSelectValue + " button");
            displayNumber.textContent = numSelectValue;
           
            if (!opSelectChar) {
                num1 = numSelectValue; // Update num1 if no operator selected
            } else {
                num2 = numSelectValue; // Update num2 after operator selection
            }
        });
    
    }
};


//operator selection function:
const operatorSelect = document.querySelectorAll('.operator');
let opSelectChar = ''

const userOperatorSelect = function() {
    for(let i = 0; i < operatorSelect.length; i++) {
        operatorSelect[i].addEventListener("click", function(e) {
            
            if (num1 && !isEnteringSecondNumber) {
                opSelectChar = e.target.innerText; // Store the selected operator
                // console.log(`Operator selected: ${opSelectChar}`);
                isEnteringSecondNumber = true; // Set flag to enter num2
            }
        });
    }
}

//function to clear the display
const clearSelect = document.querySelector('#ac');


const clearDisplay = function() {
    clearSelect.addEventListener("click", function(e) {
        displayNumber.textContent = '';
        numSelectValue = '';
        num1 = '';
        opSelectChar = '';
        console.log('You pressed the clear button');
    });
}

//function for the equal operator
const equalSelect = document.querySelector('#equal');
    
const equals = function() {
    equalSelect.addEventListener("click", function(e) {
        if (num1 && num2 && opSelectChar) {
            let result = operate(num1, num2, opSelectChar);
            if (result % 1 !== 0) {
                result = result.toFixed(13);
            } 
            console.log(`${num1} ${opSelectChar} ${num2} = ${result}`);
            displayNumber.textContent = result;
            num1 = result;
            num2 = '';
            opSelectChar = '';
            isEnteringSecondNumber = false;
        }
    });
};

clearDisplay();
userNumSelect();
// num1 = numSelectValue;
userOperatorSelect();
equals();


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
    //store the result from operate in the calc display window p element and set it equal to num1 and await the next operator button




