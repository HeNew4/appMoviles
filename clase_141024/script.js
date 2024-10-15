// /* =========== FUNCIONES EN JS =========== */


// function hello() {
//     console.log('Hola JS');
//     console.log('Hola HTML');
//     console.log('Hola CSS');
// }


// hello()

// /**
//  * Funcion 🐄
//  * @returns retorna una cadena que dice `Hola JS`
//  */
// function hello() {
//     return 'Hola JS';
// }

// // const result = hello();
// console.log(hello());

// function hello() {
//     return{};    
// }
//
// console.log(hello());

// function hello() {
//     return {
//         nombre: 'Roul'
//     }
// }

// console.log(hello());

// function hello() {
//     return function() {
//         return 'Hola JS';
//     }
// }

// console.log(hello()());

// /**
//  * 
//  * @param {string} name Nombre tuyo
//  * @returns cadena saludando tu nombre
//  */
// function hello(name) {
//     return 'Hola ' + name;
// }


// console.log(hello('Angel Maclovio 🐄'));

// /**
//  * Operación con dos numero
//  * @param {number} x primer numero
//  * @param {number} y segundo numero
//  * @returns returna el resultado
//  */
// function operacion(x, y) {
//     return x - y;
// }

// /**
//  * Operación con dos numero
//  * @param {number} x primer numero
//  * @param {number} y segundo numero
//  * @returns returna el resultado
//  */
// function operacion(x, y) {
//     return x + y;
// }

// /**
//  * Operación con dos numero
//  * @param {number} x primer numero
//  * @param {number} y segundo numero
//  * @returns returna el resultado
//  */
// function operacion(x, y) {
//     return x * y;
// }

// console.log(operacion(30, 10));

// /* =========== OBJETOS EN JS =========== */
const user = {
    nombre: 'Angel',
    apellidoM: 'Morales',
    edad: 17,
    estadoCivil: 'Soltero',
    domicilio: {
        ciudad: 'CDMX',
        calle: 'Cuahutemoc',
        numero: 52,
    },
    amigos: ['Isaac', 'Ramos', 'Oscar', 'Poncho', 'Ian', 'Yankel'],
    activo: false,
    sendMensaje: function () {
        return 'enviando mensaje';
    },
};

// alert ciudad calle numero...
// consola, los amigos
// alert (activo o dado de baja)
// consola, nombre, apellido, estado civil!!
// alert (estado del mensaje)

alert(`${user.domicilio.ciudad}, ${user.domicilio.calle} ${user.domicilio.numero}`)
console.log(user.amigos);
alert(user.activo)
console.log(`${user.nombre} ${user.apellidoM}, ${user.estadoCivil}`);
alert(user.sendMensaje())

