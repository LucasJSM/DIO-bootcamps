const firstName = "Maria";
const lastName = "Souza";

// Concatenáveis
const fullName = `${firstName} ${lastName}`
const fullNameLength = fullName.length;
console.log(fullName, typeof fullName);
console.log(fullNameLength);

// Iteráveis
let letter = fullName[3];
console.log(letter);

// String como objeto
const adress = new String("Rua Leão, 22");
console.log(adress);

// Criação de uma string vazia
const vazia = "";
console.log(vazia, typeof vazia);

// Métodos
const completeWord = "Olá, tudo bem?"
let letters = completeWord.split("");
console.log(letters);

const words = completeWord.split(" ");
console.log(words);

const wordsIncludes = words.includes("bem?");
console.log(`A frase contém "bem?": ${wordsIncludes}`);

const completeWordStartsWith = completeWord.startsWith("O");
console.log(`A frase começa com "O": ${completeWordStartsWith}`);

const completeWordEndsWith = completeWord.endsWith("a");
console.log(`A frase termina com "a": ${completeWordEndsWith}`);

const completeWordModified = completeWord.replace("?", "!");
console.log(completeWordModified);

const completeWordUpperCase = completeWord.toUpperCase();
console.log(completeWordUpperCase);