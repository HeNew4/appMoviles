const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    let displayCopyValue = display.value;
    display.value = displayCopyValue.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert('Expresión Invalida')
    }
}