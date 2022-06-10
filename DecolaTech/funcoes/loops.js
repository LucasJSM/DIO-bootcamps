// Estruturas condicionais
  // IfElse
  function getNumberType(num) {

    if(num !== undefined) {

      let rest = num % 2;
      
      if(rest === 0) {
        return `Número par`;
      } else {
        return `Número ímpar`;
      }

    } else {
      return `Argumento inválido`;
    }
  }
  console.log(getNumberType(12));
  console.log(getNumberType(81));
  console.log(getNumberType());

  // Switch case: compara tipo && valor
  function getAnimal(animalID) {
    let animal = '';
    switch(animalID) {
      case 0:
        animal = 'Cat';
        break;

      case 1:
        animal = 'Dog';
        break;

      case 2:
        animal = 'Bird';
        break;

      default:
        animal = 'Fish';
        break; // optional

    }

    return animal;
  }
  console.log(getAnimal(3));
  console.log(getAnimal(0));
  console.log(getAnimal("1"));

// Estruturas de repetição
  // For: loop em iteráveis (array e objetos)
  function multiplicarPor2(arr) {
    let arrayMultiplicado = [];

    for(let i = 0; i < arr.length; i++) {
      arrayMultiplicado.push(arr[i] * 2);
    }

    return arrayMultiplicado;
  }
  let nums = [2, 4, 6, 8, 10];
  let numsMultiplicado1 = multiplicarPor2(nums);
  console.log(numsMultiplicado1);

    // Sintaxe com o método map
    let numsMultiplicado2 = nums.map(element => element * 2);
    console.log(numsMultiplicado2);

  // For In: loop em propriedades enumeráveis de um objeto
  const mariaData = {
    name: 'Maria',
    lastName: 'Joana',
    age: 19,
  }

  // Loop nas propriedades
  function printObjectProperty(obj) {
    for(property in obj) {
      console.log(property);
    }
  }

  // Loop nos valores
  function printObjectValue(obj) {
    for(property in obj) {
      console.log(obj[property]);
    }
  }

  printObjectProperty(mariaData);
  printObjectValue(mariaData);

  // For Of: loop em estruturas iteráveis (arrays e strings)
  function printLetters(word) {
    for(letter of word) {
      console.log(letter);
    }
  }

  function printNums(array) {
    for(number of array) {
      console.log(number);
    }
  }

  printLetters('Lucas');
  printNums(nums);

  // While: executa até a condição ser falsa
  function printNumbersInWhile() {
    let i = 0;
    while(i < 5) {
      console.log(`I: ${i+1}`);
      i++;
    }
  }
  printNumbersInWhile();

  /* Do While: executa até a condição ser falsa, 
  porém a verificação condicional é no final, 
  ou seja, executa pelo menos uma vez*/
  function printNumbersInDoWhile() {
    let j = 10;

    do {
      console.log(`J: ${j}`);
      j++;
    } while(j <= 10);
  }
  printNumbersInDoWhile();