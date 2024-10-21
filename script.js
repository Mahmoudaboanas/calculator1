const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            if (operator && previousInput) {
                currentInput = eval(previousInput + operator + currentInput);
                display.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
