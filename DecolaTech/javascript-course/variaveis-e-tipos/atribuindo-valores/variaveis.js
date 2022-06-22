// Diferenças entre var e let
var firstName = "Maria";
var lastName = "Souza";

if(firstName === "Maria") {
	var firstName = "Pedro"; // global scope
	let lastName = "Silva"; // if-block scope
  // let lastName = "Barcelos"; // erro pois não é possível redeclarar
  lastName = "Barcelos";

	console.log(firstName); // -> Pedro
	console.log(lastName); // -> Barcelos
}

console.log(firstName); // -> Pedro
console.log(lastName); // -> Souza