const NumberButton = document.querySelectorAll('[data-number]');
const OperationButton = document.querySelectorAll('[data-operation]');
const DeleteButton = document.querySelector('[data-delete]');
const AllClearButton = document.querySelector('[data-all-clear]');
const EqualsButton = document.querySelector('[data-equals]');
const Previous = document.querySelector('[data-previous]');
const Current = document.querySelector('[data-current]');

// Addition function
function add(Previous, Current) {
    return Previous + Current;
}

// Subtraction function
function subtract(Previous, Current) {
    return Previous - Current;
}

// Multiplication function
function multiply(Previous, Current) {
    return Previous * Current;
}

// Division function
function divide(Previous, Current) {
    if (b !== 0) {
        return Previous / Current;
    } else {
        return "Error: Division by zero";
    }
}

// Function to perform arithmetic operation based on operator
function calculate(Previous, operator, Current) {
    switch(operator) {
        case '+':
            return add(Previous, Current);
        case '-':
            return subtract(Previous, Current);
        case '*':
            return multiply(Previous, Current);
        case '/':
            return divide(Previous, Current);
        default:
            return "Invalid operator";
    }
}

NumberButton.forEach(function(button) {
    button.addEventListener("click", function() {
        // Append the button's value to the input field
        Current.innerHTML += button.textContent;
    }
    )});