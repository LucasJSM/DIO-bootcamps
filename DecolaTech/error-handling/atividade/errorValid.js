function errorValid(array, number) {

  try {
    if(!array && !number) throw new ReferenceError("Parâmetros vazios");

    if(typeof array !== "object") throw new TypeError("Tipo do array inválido");

    if(typeof number !== "number") throw new TypeError("Tipo do número inválido");

    if(array.length !== number) throw new RangeError("O tamanho do array é diferente do número");

    return array;
  } catch (e) {
    if(e instanceof ReferenceError) {
      console.log("Reference Error");
      console.log(e.name);
      console.log(e.stack);
    } else if(e instanceof TypeError) {
      console.log("Type Error");
      console.log(e.name);
      console.log(e.stack);
    } else if(e instanceof RangeError) {
      console.log("Range Error");
      console.log(e.name);
      console.log(e.stack);
    } else {
      console.log(`Erro não esperado ${e}`);
    }
  }
}

// console.log(errorValid());
// console.log(errorValid([1, 2], 3));
// console.log(errorValid(5, 3));
// console.log(errorValid([1, 2], "3"));
console.log(errorValid([1, 2, 3], 3));