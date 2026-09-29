console.log("\n---Null frente a undefined---");

/*
Estos dos valores “vacíos” confunden a muchos desarrolladores. 
A continuación, se explica en qué se diferencian:*/

/**
 * Aspecto	                       undefined	                                null
 * Significado	                "Aún no se ha asignado ningún valor"	     "Vacío intencionalmente"
 * Ahorrar	                    JavaScript automáticamente	                  Desarrollador explícitamente
 * tipo de	                    "undefined"	                                 "object"(bicho)
 * En JSON	                    Omitido de la salida	                      Conservado como null
 * Parámetros predeterminados	Activadores predeterminados	                  No activa la configuración predeterminada
 * Igualdad laxa	            null == undefined es true
 * Igualdad estricta	        null === undefined es false
 */

//Cuando javascript utiliza undefined

// 1. Uninitialized variables
let x;
x = 0;
console.log(x); // undefined

// 2. Missing function arguments
function greet(name) {
  console.log(name);
}
greet(); // undefined

// 3. No return statement
function noReturn() {}
console.log(noReturn()); // undefined

// 4. Non-existent properties
let obj = {};
console.log(obj.missing); // undefined

// 5. Array holes
let arr = [1, 0, 3]; // en el cero va nada, vacio
console.log(arr[1]); // undefined

//cuando usar null

/*
// 1. Explicitly "clearing" a value
let user = { name: "Alice" };
user = null;  // User logged out

// 2. Function returning "no result"
function findUser(id) {
  // Search logic...
  return null;  // Not found
}

// 3. Optional object properties
let config = {
  cache: true,
  timeout: null  // Explicitly no timeout
};

// 4. Resetting references
let timer = setTimeout(callback, 1000);
clearTimeout(timer);
timer = null;  // Clear reference

*/

//Mejores practicas

// Check for either null or undefined (loose equality)
let value = ""; // eso no va, es para evitar el error de sintaxis. omitir esta linea.
if (value == null) {
  console.log("Value is null or undefined");
}

// Check for specifically undefined
if (value === undefined) {
  console.log("Value is undefined");
}

// Check for specifically null
if (value === null) {
  console.log("Value is null");
}

// Check for "has a value" (not null/undefined)
if (value != null) {
  console.log("Value exists");
}
