console.log("\n---Undefined---");

//significa que no se ha asignado ningun valor.

//1 declarado pero no asignado
let x = 0;
console.log(x); // undefined

//2 Faltan parámetros de la función
function greet(name) {
  console.log(name); // undefined if called without argument
}

greet();

function doNothing() {
  //no return
}

console.log(doNothing()); // undefined

//3 Acceso a una propiedad de objeto inexistente
let person = { name: "Alice" };
console.log(person.age); // undefined

//NOTA: No asigne valores explícitamente undefined a las variables. En su lugar, utilice null para indicar que están "intencionalmente vacías".
