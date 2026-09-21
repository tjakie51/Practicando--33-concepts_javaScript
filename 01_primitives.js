/**
 * Tipos primitivos
 */

/**
 * Los 7 tipos de datos primitivos en javascript son:
 * string
 * number
 * bigint
 * boolean
 * undefined
 * null
 * symbol
 */

const str = "Hellos";
const num = 42;
const big = 9007199254740993n;
const bool = true;
const undef = undefined;
const nul = null;
const sym = Symbol("id");

console.log(typeof str);
console.log(typeof num);
console.log(typeof big);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul); // object - espera, que? !
console.log(typeof sym);

//Nota: los tipos primitivos son inmutable, no se puede cambiar.
// como tambien son datos que no es un objeto y no tiene metodos

/*
 * Tres caracteristicas clave:
 * Todos los primitivos comparten estos rasgos fundamentales.
 */

// 1) immutable: los valores no se pueden cambiar.

console.log("\n---Inmutable---");

let namex = "Alice";
namex.toUpperCase(); // Crea ALICE pero no cambia el nombre.
console.log(namex); // Alice.

// 2) Cuando se compara dos tipos de datos primitivos, javascript compara sus valores reales, no donde estan almacenado en memoria.

console.log("\n---Comparar dos tipo de datos primitivos---");

let a = "hello";
let b = "hello";

console.log(a === b); // true - same value

let obj1 = { text: "hello" };
let obj2 = { text: "hello" };
console.log(obj1 === obj2); // false - different objects!

/**
 * 2) los tipos primitivos no tiene metodos, pero javascript los encapsula automaticamente en objetos
 * cuando se intenta llamar a metodos, esto se conoce como autoboxing
 */

console.log("\n---Sin metodo pero con magia autoBoxing---");

"Hello".toUpperCase(); //Works! JS wraps "hello" in a String object
console.log("Hello".toUpperCase());

console.log("\n");

/**LA ANALOGIA ENTRE MOLECULA
 *
 * PRIMITIVES: (ATOMS)
 * 5, "Hi", true
 * - Simple, indivisible
 * - Stored directly
 * - Compared by value
 * - Inmutable
 *
 *
 * OBJETCT (MOLECULES)
 * {name: "Alice", age: 25}
 * - Complex, contains values
 * - Stored as reference
 * - Compared by reference
 * - Mutable
 */

/**
 * LOS 7 TIPOS PRIMITIVOS: UN ANALISIS EN PROFUNDIDAD.
 */

console.log("\n---Cadenas/String---");

// tres formas de crear una cadena.

let single = "Hello"; //single quotes
let double = "World"; // doble quotes
let backtick = `Hello World`; //Temple literal (ES6)

console.log(single, double, backtick);

console.log("\n---Literales de plantilla---");
//siguen sindo solo texto
let names = "Alice";
let age = 25;

//String interpolation - embed expressions

let greeting = `Hello ${names}! You are ${age} years old.`;
console.log(greeting); // "Hello, Alice! You are 25 years old."
console.log(typeof greeting); // "string" — it's just a string!

//Multi-line strings
let multiLine = `
    This is line 1
    THis is line 2
`;
 console.log(typeof(multiLine));

 console.log("\n---Las cadenas son inmutables---");
 //No se pueden modificar caracteres individuales en una cadena.

 let str2 = "hello";
 str2[0] = "H"; // Does nothing! No error, but no change
 console.log(str2); // Still "hello"

 // para cambiar una cadena, crea una nueva.

 str2 = "H" + str2.slice(1);
 console.log(str2);

 //Nota: Los métodos de cadena como toUpperCase(), slice(), replace() siempre devuelven cadenas nuevas. Nunca modifican la original.


 console.log("\n---Numeros/Number---");