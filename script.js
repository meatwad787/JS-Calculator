const NumberButton = document.querySelectorAll('[data-number]');
const OperationButton = document.querySelectorAll('[data-operation]');
const DeleteButton = document.querySelector('[data-delete]');
const AllClearButton = document.querySelector('[data-all-clear]');
const EqualsButton = document.querySelector('[data-equals]');
const Previous = document.querySelector('[data-previous]');
const Current = document.querySelector('[data-current]');
let firstNum;
let secNum;
// Addition function
function add(firstNum, secNum) {
    return firstNum + secNum;
}

// Subtraction function
function subtract(firstNum, secNum) {
    return firstNum - secNum;
}

// Multiplication function
function multiply(firstNum, secNum) {
    return firstNum * secNum;
}

// Division function
function divide(firstNum, secNum) {
    if (b !== 0) {
        return firstNum / secNum;
    } else {
        return "Error: Division by zero";
    }
}

// Function to perform arithmetic operation based on operator
function calculate(firstNum, operator, secNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secNum);
        case '-':
            return subtract(firstNum, secNum);
        case '*':
            return multiply(firstNum, secNum);
        case '/':
            return divide(firstNum, secNum);
        default:
            return "Invalid operator";
    }
}

NumberButton.forEach(function(NumberButton) {
    NumberButton.addEventListener("click", function() {
        // Append the button's value to the input field
        firstNum = NumberButton.textContent;
        Current.innerHTML += firstNum; 
    }
    )});

    OperationButton.forEach(function(OperationButton) {
        OperationButton.addEventListener('click', function() {
        secNum = NumberButton.textContent;
        Current.innerHTML += firstNum + secNum;
        })
    } );