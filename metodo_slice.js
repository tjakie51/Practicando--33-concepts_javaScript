/**
 * Aprendindo sobre el metodo slice
 *
 * El método slice() de las instancias de Array devuelve una copia superficial de una parte de un array en un nuevo objeto array,
 * seleccionada desde el inicio hasta el final (sin incluir el final), donde el inicio y el final representan los índices de los elementos de dicho array.
 * El array original no se modificará.
 */

console.log("\n Primer ejemplo del metodo slice");

const animals = ["ant", "bison", "camel", "duck", "elephant"];

//Se espera que el nuevo array contenga solo el indice [0], [1], [2]
console.log(animals.slice(2));

//Se espera que el nuevo array contenga solo el indice [2], [3]
console.log(animals.slice(2, 4));

//Se esoera qye el nuevo array contenga solo el indice [1]...[4]
console.log(animals.slice(1, 5));

//Se espera que el nuevo array contenga solo el indice [3] y [4]
console.log(animals.slice(-2));

//Se espera que el nuevo array contenga solo el indice [2] y [3]
console.log(animals.slice(2, -1));

//como los dice la descripcion se espera que el array original no sea mutado.
console.log(animals.slice());

/**Syntax
 * slice()  --> opcional
 * slice(start)
 * slice(start, end)
 */

console.log("\n Segundo ejemplo del metodo slice");
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

// Omitiendo el parametro final

const tropical = fruits.slice(2);
console.log(tropical);

// Utilizando indices negativos

const lastTwo = fruits.slice(-3);
console.log(lastTwo);

//Ejemplo grafico
/**
 *
 *  |     |     |     |     |     |
 *  |  S  |  L  |  I  |  C  |  E  |
 *  |     |     |     |     |     |
 *    -5    -4    -3    -2    -1
 *
 *   <--- read from reverse
 *
 */

// Utilizando indices positivos y un indice final negativo

const fruits_ = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const sliceExample = fruits_.slice(1, -1);
console.log(sliceExample);

//Ejemplo grafico
/**
 *  read from start --->
 *
 *      0     1     2     3     4
 *   |     |     |     |     |     |
 *   |  S  |  L  |  I  |  C  |  E  |
 *   |     |     |     |     |     |
 *     -5    -4    -3    -2    -1
 *
 *   <--- read from reverse
 *
 *  Nota: El método slice siempre excluye el elemento en el último índice especificado, independientemente de si es positivo o negativo.
 */

console.log("\n Tercer ejemplo del metodo slice");

//Uso de slice con matrices de objetos

//Using slice, create newCar from myCar

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

// esto es una matrix de objeto
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
console.log("\n");

myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Llamar a slice() en objetos que no son arrays
console.log("\n Cuarto ejemplo del metodo slice");

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};

console.log(Array.prototype.slice.call(arrayLike, 1, 3));

// Utilizar slice() para convertir objetos similares a arrays en arrays.
console.log("\n Quinto ejemplo del metodo slice");

const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const listResult = list(1, 2, 3);
console.log(listResult);

// Uso de slice() en matrices dispersas
console.log("\n Sexto ejemplo del metodo slice");
//borrar el 5
console.log([1, 2, 5, 4, 5].slice(1, 4));
