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

console.log("\n---Numeros/Number---");

let integer = 42; // Integer
let decimal = 3.14; // Decimal
let negative = -10; // Negative
let scientific = 2.5e6; // 2,500,000 (scientific notation)

console.log(integer, decimal, negative, scientific);

console.log("\n--- valores de numeros especiales");
console.log(1 / 0);
console.log(-1 / 0);
console.log("Hello" * 2);

console.log("\n--- el famoso problema de punto flotante---");
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false! Welcome to JavaScript!

console.log("\n--- No usar numero de coma flotante para trabajar con dinero usa mejor enteros");

let price = 0.1 + 0.2; // 0.30000000000000004
console.log(price);

// Good: calculate in cents, format for display
let priceInCents = 10 + 20; // 30 (calculation is accurate!)

// 30 (calculation is accurate!)
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(formatter.format(priceInCents / 100)); // "$0.30"

// Works for any locale and currency!
const euroFormater = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(euroFormater.format(1234.56)); // "1.234,56 €"

console.log("\n--- Rango de enteros seguros");
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Beyond this range, precision is lost
console.log(9007199254740992 === 900719925474099); //...2 // true! (wrong!)

console.log("\n--- BigInt para enteros mayores que MAX_SAFE_INTEGER --- ");

let big_ = 9007199254740993n;
let alsoBig = BigInt("9007199254740993");

console.log(big_ + 1n); // 9007199254740994n (correct!)
console.log(alsoBig); //

console.log("\n--- Reglas de BigInt ---");

// Cannot mix BigInt and Number
let big2 = 10n;
let regular = 5;
//console.log(big2 + regular); // TypeError!

// Must convert explicitly
console.log(big2 + BigInt(regular)); // 15n
console.log(Number(big2) + regular); //15

//Nota: Cuándo usar BigInt: Criptografía, marcas de tiempo precisas, identificadores de bases de datos, cualquier cálculo que requiera números enteros mayores de 9 cuatrillones.


console.log("\n---Booleano---");