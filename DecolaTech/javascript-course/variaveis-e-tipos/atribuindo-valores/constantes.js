// Explicação
const FIRST_NAME = "Maria";
const FIRST_NAME = "Júlia"; // Não podem ser redeclaradas
FIRST_NAME = "Joana"; // Não podem ser reatribuídas

console.log(FIRST_NAME);

// O não funcionamento do hoisting, precisa ser declarada e inicializada antes de ser usada
LAST_NAME = "Souza";
console.log(LAST_NAME);

const LAST_NAME = "Silva";

// Sempre precisam ser inicializadas
const ADRESS = "Rua Leão 2";
console.log(ADRESS);