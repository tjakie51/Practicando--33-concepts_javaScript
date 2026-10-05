console.log("\n---Peculiaridades y problemas comunes de JavaScript---");

/**
 * JavaScript tiene algunas "partes extrañas" famosas que todo desarrollador
 * debería conocer. La mayoría están relacionadas con los tipos primitivos y la
 * conversión de tipos.
 */


console.log("\n---Ejemplos---");

console.log(typeof null); // "object"

//solucion propuesta.
let value = "";
if(value !== null && typeof value === "object"){
    //Es un objeto real

}

// NaN
/**
 * ¿Por qué? Según la especificación IEEE 754, NaN significa "No es u
 * número", un resultado indefinido o irrepresentable. Al no ser un
 * número específico, no puede ser igual a nada, ni siquiera a sí mismo.
 */


//como comprobar si hay NaN

 // if(value === NaN){} // Never true!

// En vez haz esto.
//if(Number.isNaN(value)){} // ES6, recommended

//if (isNaN(value)) { }         // Older, has quirks


// 3. 0,1 + 0,2 !== 0,3

/**
 * ¿Por qué? Las computadoras almacenan los números en binario. Así
 * como 1/3 no se puede representar perfectamente en decimal
 * (0.333…), 0.1 no se puede representar perfectamente en binario.
 */


//Soluciones:

// 1. Work in integers (cents, not dollars) — RECOMMENDED

let totalCents = 10 + 20;  // 30 (accurate!)
let dollars = totalCents / 100;  // 0.3
console.log(dollars);

// 2. Use Intl.NumberFormat for display
new Intl.NumberFormat('en-US', { 
  style: 'currency', 
  currency: 'USD' 
}).format(0.30);  // "$0.30"

// 3. Compare with tolerance for equality checks
let myNumber = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;  // true (Number.EPSILON is the smallest difference)
console.log(myNumber);

// 4. Use toFixed() for simple rounding
(0.1 + 0.2).toFixed(2);  // "0.30"


// Una cadena vacía es falsa, pero...

console.log(Boolean(""));      // false (empty string is falsy)
console.log(Boolean(" "));     // true (space is truthy!)
console.log(Boolean("0"));     // true (string "0" is truthy!)
console.log(Boolean(0));       // false (number 0 is falsy)

//console.log("" == false);      // true (coercion)
//console.log("" === false);     // false (different types)

// Check for empty or whitespace-only string

let str = ""; //no tener encuenta esta linea
if (str.trim() === "") {
  console.log("String is empty or whitespace");
}



// + Operador de concatenación de cadenas

console.log(1 + 2);        // 3 (number addition)
console.log("1" + "2");    // "12" (string concatenation)
console.log(1 + "2");      // "12" (number converted to string!)
console.log("1" + 2);      // "12" (number converted to string!)
console.log(1 + 2 + "3");  // "33" (left to right: 1+2=3, then 3+"3"="33")
console.log("1" + 2 + 3);  // "123" (left to right: "1"+2="12", "12"+3="123")

/**
 * ¿Por qué? El + operador realiza sumas para números, pero
 * concatena para cadenas. Cuando se mezclan, JavaScript convierte
 * los números en cadenas.
 */

//Sea explícito:

// Force number addition
Number("1") + Number("2");  // 3
parseInt("1") + parseInt("2");  // 3

// Force string concatenation
String(1) + String(2);  // "12"
`${1}${2}`;  // "12"