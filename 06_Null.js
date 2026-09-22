console.log("\n---Null---");
// null significa “intencionalmente vacío”. Estás diciendo explícitamente “esto no tiene valor”.

// intencionalmente limpiando una variable

let user = { name_: "Alice" };
user.name_ = null;
console.log(user);

//Indica que no hay resultado
function findUser(id) {
  id; // esto no va es lo para evitar el error de asignacion.
  //-- serch logic..
  return null;
}

findUser();

// El famoso tipo bug

console.log(typeof null); //object

//Cómo comprobar correctamente si un valor es nulo
let value = null;
console.log(value === null); // true (use strict equality)
