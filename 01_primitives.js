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
