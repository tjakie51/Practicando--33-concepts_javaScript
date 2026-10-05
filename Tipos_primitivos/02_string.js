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
console.log(typeof multiLine);

console.log("\n---Las cadenas son inmutables---");
//No se pueden modificar caracteres individuales en una cadena.

let str2 = "hello";
str2[0] = "H"; // Does nothing! No error, but no change
console.log(str2); // Still "hello"

// para cambiar una cadena, crea una nueva.

str2 = "H" + str2.slice(1);
console.log(str2);

//Nota: Los métodos de cadena como toUpperCase(), slice(), replace() siempre devuelven cadenas nuevas. Nunca modifican la original.