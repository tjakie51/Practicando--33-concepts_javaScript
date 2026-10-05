console.log("\n---Errores primitivos---");

/**
 * El error más común que cometen los desarrolladores con las primitivas es
 * usar new String(), new Number(), o new Boolean()en lugar de valores literales.
 *
 */

// forma errada
new String("hello");
new Number(42);
new Boolean(true);

typeof new String("hi"); //"object"
//new String("hi") === "hi"// → false

//forma correcta

("Hello");
42;
true;

typeof "hi"; // "string"
"hi" === "hi"; // true

/**ejemplo */

// ❌ WRONG - Creates an object, not a primitive
const str = new String("hello");
console.log(typeof str); // "object" (not "string"!)
console.log(str === "hello"); // false (object vs primitive)

// ✓ CORRECT - Use primitive literals
const str2 = "hello";
console.log(typeof str2); // "string"
console.log(str2 === "hello"); // true
