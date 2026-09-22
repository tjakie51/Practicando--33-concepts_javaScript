console.log("\n---Booleano---");

//valor booleano tine exactamente dos valores true y false.

// let isLoggedIn = true;
// let hasPermission = false;

// //from comparation
// let isAdult = age >= 18;
// let isEqual = name_ === "Alice";

//valores falsos
false;
0;
0n;
("");
null;
undefined;
NaN;

// todo lo demas es verdadero.
("hello", 42, [], {});

//convertir cualquier valor a boolean

let value = "hello";
console.log(value); //hello

let bool = Boolean(value);
console.log(bool); //true

let shortcut = !!value;
console.log(shortcut); // true (double negation trick)
