/* == FUNCION FLECHA */

// FUNCION NORMAL
/**
 * Funcion que suma dos numeros
 * @param {number} a Primer numero
 * @param {number} b Segundo numero
 * @returns suma
 */
function normal(a, b) {
  return a + b;
}

// FUNCION FLECHA

const estructura = () => {};

/**
 * Funcion de ejemplo
 * @returns Retorna 'Flecha'
 */
const suma = () => {
  return "Flecha";
};

/**
 * Funcion que saluda
 * @param {string} nombre nombre a saludar
 * @returns saludo
 */
const saludos = (nombre) => {
  return `Hola ${nombre} 🐄`;
};

// FUNCION FLECHA CONTRAIDO
/**
 * Funcion que saluda
 * @param {string} nombre nombre a saludar
 * @returns saludo
 */
const saludar = (nombre) => `Hola ${nombre} 🐄`;

// PASAR PARAMETROS
/**
 * Funcion que suma dos numeros
 * @param {number} a Primer numero
 * @param {number} b Segundo numero
 * @returns suma
 */
const sumar = (a, b) => a + b;

// CREAR OBJETO EN FUNCION FLECHA
/**
 * Funcion que tiene un objeto
 * @returns objeto de una persona
 */
const objeto = () => ({ nombre: "Roberto", edad: 20 });

/* ARREGLOS */
/**
 * Funcion con un arreglo
 * @returns Arreglos del 1 al 5
 */
const arregloFuncion = () => [1, 2, 3, 4, 5];

/* == SECCION "CONSOLE LOGS" == */
console.warn("SECCION DE EJEMPLOS ECHOS POR EL PROFESOR");

console.log(suma());
console.log(normal(1, 2));
console.log(saludos("Juan"));
console.log(saludar("Juan"));
console.log(sumar(1, 2));
console.log(objeto().nombre);
console.log(
  `PROPIEDADES DEL OBJETO nombre: ${objeto().nombre} edad: ${objeto().edad}`
);
console.log(arregloFuncion());
console.log(arregloFuncion()[4]);

// CONSOLE TABLE
console.table(objeto());
console.table(arregloFuncion());
