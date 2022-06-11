/* 
ECMAScript Error
Erros que ocorrem em tempo de execução, como declaração de variáveis.

Composição:
  * Mensagem
  * Nome
  * Linha
  * Call Stack
*/

function consoleReturn(string) {
  return console.log(string);
}

let nome = 'Maria';
consoleReturn(nome);

/* 
DOMException
Erros relacionados ao Document Object Model (DOM), como inserção inadequada
de nós, caracteres inválidos na string e afins. Resumindo, erros referentes
à estrutura da árvore de elementos.
*/