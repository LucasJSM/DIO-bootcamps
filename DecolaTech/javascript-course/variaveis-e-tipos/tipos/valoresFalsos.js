// Empty: valor vazio
const number = 0;
const word = "";
const stack = [];
const dataOfUsers = {};

// Null: quando o valor é propositalmente nulo
const name = null;

// Undefined: quando o valor é indefinido
let abacaxi;

console.log(abacaxi); // abacaxi is not defined
console.log(typeof abacaxi); // abacaxi is not deifned

abacaxi = null;
console.log(abacaxi === true); // -> false
console.log(abacaxi === false); // -> false

console.log(!abacaxi); // -> true, baseado em falsy values (tratados como falses, mas não os do booleano)