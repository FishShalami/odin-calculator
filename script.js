//future changes, modify the decimal function such that it is ignored if the result is already a decimal.



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
    return Number(a) + Number(b);
};

const subtract = function(a, b) {
    return Number(a) - Number(b);
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a ,b) {
    return a / b;
};



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
const decimalButton = document.querySelector('#decimal');
const percentButton = document.querySelector('#pct');
const negButton = document.querySelector('#posneg');
let numSelectValue = ''
let num1 = ''
let num2 = ''
let isEnteringSecondNumber = false;
let isDecimal = false;
let isPercent = false;
// let isNeg = false;






const negButtonSelect = function() {
    negButton.addEventListener("click", function(e) {
        console.log('Invert button pushed');
        
        if (numSelectValue !== '') {
            numSelectValue *= -1;
            displayNumber.textContent = numSelectValue;

            // Update the correct number
            if (!opSelectChar) {
                num1 = Number(numSelectValue); // Update num1 if no operator is selected
            } else {
                num2 = Number(numSelectValue); // Update num2 if operator is selected
            }

        } else if (num1 && !num2 && !isEnteringSecondNumber) {
            // If result is displayed and no new number input yet, invert num1
            num1 = (Number(num1) * -1);
            displayNumber.textContent = num1;
        }
        
        
    });
};

const decimalButtonSelect = function() {
    decimalButton.addEventListener("click", function(e) {
        console.log('The decimal button was pressed!');
        if(!isDecimal) {
            if (isEnteringSecondNumber) {
                // Reset for second number
                numSelectValue = '';
                displayNumber.textContent = '';
                isEnteringSecondNumber = false;
                isDecimal = false;
                isPercent = false;
            }
            if(numSelectValue === '') {
                numSelectValue = '0.'; // Start with '0.' if no number has been entered yet
            } else {
                numSelectValue += '.';
            }
            displayNumber.textContent = numSelectValue; // Display as string to avoid NaN
            isDecimal = true;
        }
    });
}



const percentButtonSelect = function() {
    percentButton.addEventListener("click", function(e) {
        console.log('The percent button was pushed');
        if (!isPercent) { // Only apply percentage if not already applied
            if (numSelectValue !== '') {
                numSelectValue = Number(numSelectValue) / 100;
                displayNumber.textContent = numSelectValue;
                isPercent = true; 
                // Update the correct number
                if (!opSelectChar) {
                    num1 = numSelectValue; // Update num1 if no operator is selected
                } else {
                    num2 = numSelectValue; // Update num2 if operator is selected
                }
            } else if (num1 && !num2 && !isEnteringSecondNumber) {
                // If result is displayed and no new number input yet, apply percent to num1
                num1 = Number(num1) / 100;
                displayNumber.textContent = num1;
                isPercent = true;
            }
        }
    });
}



const userNumSelect = function() {
    for(let i = 0; i < numSelect.length; i++) {
        numSelect[i].addEventListener("click", function(e) {

            if (isEnteringSecondNumber) {
                numSelectValue = ''; // Clear numSelectValue for num2
                displayNumber.textContent = ''; // Clear the display
                isEnteringSecondNumber = false; // Reset flag
                isDecimal = false;
                isPercent = false;
            }

            if (!isPercent) { 
                // Only allow appending numbers if percentage is not applied
                numSelectValue += e.target.innerText; 
                console.log("You clicked the " + e.target.innerText + " button");
                displayNumber.textContent = numSelectValue;
            }

           
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
            let result; //initialze result
            
            //handle division by zero
            if (Number(num2) === 0 && opSelectChar === '/') {
                result = 'Nope!';
            } else {
            
                result = operate(num1, num2, opSelectChar);
                //round to 13 decimal places if not a whole number
                if (result % 1 !== 0) {
                    result = Number(result.toFixed(13).replace(/\.?0+$/, ""));
                } 
            }

            console.log(`${num1} ${opSelectChar} ${num2} = ${result}`);
            displayNumber.textContent = result;
            num1 = result;
            num2 = '';
            opSelectChar = '';
            numSelectValue = ''; //Reset numSelectValue
            isEnteringSecondNumber = false;
        }
    });
};

clearDisplay();
decimalButtonSelect();
negButtonSelect();
percentButtonSelect()
userNumSelect();
userOperatorSelect();
equals();


//display the value in the 'screen' of the calculator
const displayScreen = document.querySelector(".display-num");
let displayNumber = document.createElement('p');
displayScreen.appendChild(displayNumber);

//initialize display with the initial value
displayNumber.textContent = numSelectValue;






