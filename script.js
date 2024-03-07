const add = (a, b, ...args) => {
    return a + b;
};
const subtract = (a, b, ...args) => {
    return a - b;
};
const multiply = (a, b, ...args) => {
    return a * b;
};
const divide = (a, b, ...args) => {
    if (a !== 0 && b !== 0) {
    return a / b;
    } else {
        return 'Error: Can\'t divide by Zero'
    }
};