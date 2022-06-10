// Tem sintaxe diminuida quando não são usado parâmetros e o corpo ( {} ), tendo seu retorno implícito
function hello1() {
  return console.log("Hello");
}
hello1();

const hello2 = () => {
  return console.log("Hello");
}
hello2();

const hello3 = () => console.log("Hello");
hello3();


// Os parâmetros podem ou não conter parênteses, quanto há parâmetro
const write = a => console.log(a);
write("26s5d");

const sum = (a, b) => console.log(a + b);
sum(12, 34);


// Não realizam hoisting
sub(233, 45);
const sub = (a, b) => console.log(b - a);
sub(233, 45);

// Restrições
  // O this sempre fará referência ao objeto global, ou seja, call, apply e bind não podem ser usados

  // Não existe o objeto "arguments"

  // O constructor (new, por exemplo), não podem ser usados