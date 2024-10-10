// Muu... Aquí la vaca está buscando su lugar especial donde comer hierba, o en este caso, el lugar donde mostrar los números. 🐄
const display = document.getElementById('display');

/**
 * Este funcion añade al display la tecla presionada 🐄
 * @param {string | number} value 
 */
function appendToDisplay(value) {
    display.value += value; // Añade el elemento que se le pasa en el display
}

/**
 * Esta funcion limpia todo el display 🐄
 */
function clearDisplay() {
    display.value = '';     // Limpia todo el display
}

/**
 * Esta funcion limpia el ultimo display 🐄
 */
function deleteLast() {
    let displayCopyValue = display.value;               // Variable para guardar el display original (contenido)
    display.value = displayCopyValue.slice(0, -1);      // Insetar en el display sin el ultimo repositori
}

/**
 * Esta calcula el elemento en el display 🐄
 */
function calculateResult() {
    // Intenta y si no manda el error
    try {
        let result = eval(display.value);   // Calcula el display
        display.value = result;             // Inserta en el display el resultado
    } catch (error) {
        alert('Expresión Invalida')         // Manda alerta si esta mal la expresión
    }
}