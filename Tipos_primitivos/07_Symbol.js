console.log("\n---Symbol---");

//El tipo Symbol (ES6) crea identificadores únicos.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false — always unique!
console.log(id1.description); // "id" (the description)

//Caso de uso: Claves de objetos únicas
const ID = Symbol("id");

const user = {
  name: "Alice",
  [ID]: 12345,
};

console.log(user.name); // "Alice"
console.log(user[ID]); // 12345

// Las claves de tipo símbolo no aparecen en la iteración normal

console.log(Object.keys(user));

//Símbolos conocidos

// Symbol.iterator - make an object iterable
// Symbol.toStringTag - customize Object.prototype.toString
// Symbol.toPrimitive - customize type conversion

/**
 * Los símbolos son una función avanzada. Si eres principiante,
 * concéntrate en comprender que existen y que crean valores únicos.
 * Los encontrarás al profundizar en patrones avanzados y código de bibliotecas.
 */
