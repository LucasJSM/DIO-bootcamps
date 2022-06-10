// Valores padrões de parâmetros 
  // Antes do ECMAScript 2015
  function exponencial1(nums, expoente) {
    if(expoente === undefined)
      expoente = 1;

    let result = [];

    for(let i = 0; i < nums.length; i++) {
      result.push(nums[i] ** expoente);
    }

    return result;
  }

  console.log( exponencial1([1, 2, 3, 4, 5]) );
  console.log( exponencial1([1, 2, 3, 4, 5], 2) );
  
  // Após do ECMAScript 2015
  function exponencial2(nums, expoente = 1) {
    let result = [];

    for(let i = 0; i < nums.length; i++) {
      result.push(nums[i] ** expoente);
    }

    return result;
  }
  console.log( exponencial1([1, 2, 3, 4, 5]) );
  console.log( exponencial1([1, 2, 3, 4, 5], 2) );

// Objeto arguments
function findMaxValue() {

  if(arguments.length === 0)
    return console.log(`Array vazio`);

  // Garatia de números positivos e negativos
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i];
    }
  }

  return console.log(max);
}

findMaxValue(5, 133, 12, 54, 76, 87, 41, 12, 4, 64, 7, 6);
findMaxValue();

function showArgs() {
  return console.log(arguments);
}

showArgs([1, 45, 12], 12, 'wasqd', { orientationString: 'Nort', mobile: true }, false);

// Tratando arrays como parâmetros
  // Spread: espalha os elementos do array
  function somarNums(c, d, a) {
    return c + d + a;
  }

  const values = [4, 12, 54];
  console.log(somarNums(...values));


  // Rest: une os argumentos em um array
  function subtrairNums(...nums) {
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
      result -= nums[i];
    }
    
    return result;
  }
  console.log(subtrairNums(41, 12, 46, 765, 41, 1));

// Tratando objetos como parâmetros
  // Destructuring: desestruturar um objeto e armazenar em variáveis
  const user = {
    id: 12,
    userName: 'JohnX_',
    fullName: {
      firstName: 'John',
      lastName: 'Doe',
    }
  }

  function getID( {id} ) {
    return `ID: ${id}`;
  }

  function getFullName( { fullName: {firstName: first, lastName: last} } ) {
    return `${first} ${last}`
  }

  console.log( getID(user) );
  console.log( getFullName(user) );