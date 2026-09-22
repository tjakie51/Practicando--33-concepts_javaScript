console.log("\n---TypeOf---");

//El operador typeof devuelve una cadena que indica el tipo de valor.

console.log(typeof "hello"); //string
console.log(typeof 42); //number
console.log(typeof 42n); // bigInt
console.log(typeof true); //bool
console.log(typeof undefined); //undefined
console.log(typeof Symbol()); //symbol
console.log(typeof null); // object (!Bug) -> ¡Error histórico!
console.log(typeof {}); // objeto
console.log(typeof []);
console.log(typeof function () {});

console.log("\n");

/**
 * Mejor comprobación de tipos
 * Dado que typeoftiene sus peculiaridades, aquí hay alternativas más fiables:
 */
let value = null;

if (value === null) {
  console.log("It's null");
}

//revisar para los arrays

Array.isArray([1, 2, 3]); // true
Array.isArray("hello"); // false3

//Obtén el tipo preciso con Object.prototype.toString

let nuleable = Object.prototype.toString.call(null);
console.log(nuleable);

let arr = Object.prototype.toString.call([]);
console.log(arr);

let date = Object.prototype.toString.call(new Date());
console.log(date);

/**
 * Array.isArray()es la forma confiable de comprobar los arrays, ya que typeof []devuelve "object".
 * Para una comprobación de tipos más compleja, Object.prototype.toString() proporciona información de tipo precisa.
 *
 */
