let number1 = 673, number2 = 51;

console.log(number1 + number2);
console.log(number2 - 134);
console.log(number2 * number2);
console.log(number1 / number2);
console.log(number2 ** 3);
console.log(`O número ${number1} dividido por 2, tem resto ${number1 % 2} e, portanto, é ${number1 % 2 == 0 ? "par" : "ímpar"}`);

// Objeto Math
const area = raio => Math.PI * Math.pow(raio, 2);
console.log(area(5));

let fiveByTwo = 5 / 2;
console.log(Math.floor(fiveByTwo));
console.log(Math.ceil(fiveByTwo));

const delta = (a, b, c) => ( Math.pow(b, 2) ) - 4 * a * c;

const positiveOperation = (a, b, c) => {
  const superiorOperation = -b + Math.sqrt( delta(a, b, c) )
  const inferiorOperation = 2 * a;
  
  return superiorOperation / inferiorOperation;
}

const negativeOperation = (a, b, c) => {
  const superiorOperation = -b - Math.sqrt( delta(a, b, c) );
  const inferiorOperation = 2 * a;
  
  return superiorOperation / inferiorOperation;
}

console.log(`A: 1\nB: -5\nC: 6\n${ Math.ceil(positiveOperation(1, -5, 6)) } e ${ Math.ceil(negativeOperation(1, -5, 6)) }`);

// Concatenação de tipos
const promotion = 81;
console.log(typeof promotion, typeof promotion.toString())
const percent = promotion + "%";
console.log(percent, typeof percent);