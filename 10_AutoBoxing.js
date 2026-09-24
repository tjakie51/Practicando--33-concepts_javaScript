console.log("\n---AutoBoxing---");

// si las primitivas no tienen metodos, ¿Como funciona?

"hello".toUpperCase();

// La magia detras de excena.

/**
 * Cuando accedes a una propiedad o método de un tipo primitivo,
 * JavaScript lo envuelve temporalmente en un objeto:
 */

//1 ) se llama un metodo en una primitiva

"hello".toUpperCase();

// 2) javascript crea un objeto contenedor, detras de escena javascript hace

new String("hello").toUpperCase;

// 3) el metodo se ejecuta y devuelve

// El método toUpperCase() se ejecuta y devuelve "HELLO".

// 4) El objeto contenedor se descarta.

// El objeto temporal Stringse desecha. El objeto primitivo original "hello"permanece sin cambios.

/**Objetos contenedores */

// Cada tipo primitivo (excepto nully undefined) tiene un objeto contenedor correspondiente:

/*
    Primitivo	Objeto contenedor
    string	    String
    number	    Number
    boolean	    Boolean
    bigint	    BigInt
    symbol	    Symbol
*/

// No utilice new String(), etc.
// Puedes crear objetos contenedores manualmente, pero no lo hagas:

let strObje = new String("hello");
console.log(typeof strObje); // "object" (not "string"!)
console.log(strObje === "hello"); // false (object vs primitive)

// Do this instead
let str = "hello";
console.log(typeof str); // "string"
