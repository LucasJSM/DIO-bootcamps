// Atribuição: armazenar valores em variáveis
var x = 2;
console.log(x);
  // Atribuição aditiva
  x += 10;
  console.log(x);
  // Atribuição diminutiva
  x -= 2;
  console.log(x);
  // Atribuição multiplicativa
  x *= 2;
  console.log(x);
  // Atribuição do resultado da divisão
  x /= 2;
  console.log(x);
  // Atribuição do módulo (resto da divisão)
  x %= 2;
  console.log(x);

// Aritmética
var y = 10;
  // Soma
  console.log(y + y);
  // Subtração
  console.log(y - 5);
  // Multiplicação
  console.log(20 - y);
  // Divisão
  console.log(y / 2);
  // Exponenciação
  console.log(y ** y, Math.pow(y, y));
  // Módulo
  console.log(y % 3);
  // Incremento
  console.log(y = y + 1, y += 1, y++, ++y);
  // Decremento
  console.log(y = y - 1, y-= 1, y--, --y);

// Comparação
console.log(2 == "2"); // true, valores iguais ignorando tipos
console.log(2 === "2"); // false, valores iguais e tipos diferentes
console.log(2 != "2"); // false, inversão lógica
console.log(2 !== "2"); // true, inversão lógica
console.log(2 > 10, 5 < 10, 5 >= "5", "10" <= 1);

// Lógica
console.log(10 == "10" && "S" === "S"); // "e" lógico
console.log(10 == "10" || "z" === "Z"); // "ou" lógico
console.log(`0: ${!0}, 1: ${!1}`); // Inversão lógica

// Condicional (if ternário)
var nome1 = "Maria", nome2 = "maria";
console.log(`Nome: ${nome1 == "joão" ? "Nomes iguais" : "Nomes diferentes"} \t Nome: ${nome2 == "maria" ? "Nomes iguais" : "Nomes diferentes" }`);