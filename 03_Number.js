console.log("\n---Numeros/Number---");

let integer = 42; // Integer
let decimal = 3.14; // Decimal
let negative = -10; // Negative
let scientific = 2.5e6; // 2,500,000 (scientific notation)

console.log(integer, decimal, negative, scientific);

console.log("\n--- valores de numeros especiales");
console.log(1 / 0);
console.log(-1 / 0);
console.log("Hello" * 2);

console.log("\n--- el famoso problema de punto flotante---");
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false! Welcome to JavaScript!

console.log("\n--- No usar numero de coma flotante para trabajar con dinero usa mejor enteros");

let price = 0.1 + 0.2; // 0.30000000000000004
console.log(price);

// Good: calculate in cents, format for display
let priceInCents = 10 + 20; // 30 (calculation is accurate!)

// 30 (calculation is accurate!)
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(formatter.format(priceInCents / 100)); // "$0.30"

// Works for any locale and currency!
const euroFormater = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(euroFormater.format(1234.56)); // "1.234,56 €"

console.log("\n--- Rango de enteros seguros");
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Beyond this range, precision is lost
console.log(9007199254740992 === 900719925474099); //...2 // true! (wrong!)

console.log("\n--- BigInt para enteros mayores que MAX_SAFE_INTEGER --- ");

let big_ = 9007199254740993n;
let alsoBig = BigInt("9007199254740993");

console.log(big_ + 1n); // 9007199254740994n (correct!)
console.log(alsoBig); //

console.log("\n--- Reglas de BigInt ---");

// Cannot mix BigInt and Number
let big2 = 10n;
let regular = 5;
//console.log(big2 + regular); // TypeError!

// Must convert explicitly
console.log(big2 + BigInt(regular)); // 15n
console.log(Number(big2) + regular); //15

//Nota: Cuándo usar BigInt: Criptografía, marcas de tiempo precisas, identificadores de bases de datos, cualquier cálculo que requiera números enteros mayores de 9 cuatrillones.