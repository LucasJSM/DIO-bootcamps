function isPalindrome(string) {
  if(!string) return console.log("String inválida!");

  return console.log(`${string === string.split("").reverse().join("")}\n${string} : ${string.split("").reverse().join("")}`);
}


// Try / catch
// O return traz somente a string, sem propriedades do erro
function tryCatch(string) {
  try {
    isPalindrome(string);
  } catch (e) {
    return console.log(`\n${e}`);
  }
}

tryCatch("Lucas");
tryCatch("");
tryCatch("ama");

console.log("");

// Try / catch / throw
// O bloco throw lança como um objeto error
function tryCatchThrow(string) {
  try {
    isPalindrome(string);
  } catch (e) {
    throw e;
  }
}

tryCatchThrow("roda");
tryCatchThrow("ovo");

console.log("");

// Try / catch / throw / finally
// O bloco finally sempre será executado, pois independe do erro
function tryCatchThrowFinally(string) {
  try {
    isPalindrome(string);
  } catch (e) {
    throw e;
  } finally {
    return console.log(`String : ${string}`);
  }
}

tryCatchThrowFinally("gato");
tryCatchThrowFinally("amar");