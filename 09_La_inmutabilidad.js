console.log("\n---Inmutabilidad---");
// Explicacion de la inmutabilidad,

/**
 *
 * Inmutable significa “no se puede cambiar”.
 * Los valores primitivos son inmutables. No se puede alterar el valor en sí.
 */

let str = "hello";

str.toUpperCase(); // Returns "HELLO"

console.log(str); // Still "hello"!

// para capturar el nuevo valor, debes reasignarlo
str = str.toUpperCase();

console.log(str);

/**
 * Conceptos erroneos comun: constante frente a inmutabilidad
 * const Previene la reasignación , no la mutación. ¡Son conceptos diferentes!
 */

const name_ = "ALice";
console.log(name_);

// name = "Bob";  // Error! Cannot reassign const

// Pero `const` no hace que los objetos sean inmutables.
const person = {
  name: "Alice",
};

person.name = "Bob"; // ¡Funciona! Modificando el objeto
person.age = 25; // ¡Funciona! Añadiendo una propiedad
// person = {};  // ¡Error! No se puede reasignar una constante

// Las primitivas son inmutables independientemente de const / let
let str_ = "hello";
str_[0] = "H"; // Silently fails — can't mutate primitive
console.log(str_);

/**
 *  Nota: Piénsalo de esta manera: constprotege la variable (el contenedor).
 *  La inmutabilidad protege el valor (el contenido).
 */
