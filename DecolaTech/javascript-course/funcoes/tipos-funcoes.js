// Estrutura de uma função
function nome(parametros) {
  // corpo

  return parametros;
}

// Tipos de funções
  // Named function expression: funções com nome, corpo, parâmetro e retorno
  function soma(a, b) {
    return a + b;
  }
  let somaCalc = soma(5, 2);
  console.log(somaCalc);
  

  // Anonymous function: funções sem nome atribuídas à variáveis
  const subtracao = function (a, b) {
    return a - b;
  }
  let subtracaoCalc = subtracao(5, 6);
  console.log(subtracaoCalc);


  // Immediately Invoked Function Expression (IIFE): funções executadas ao código ser carregado
  let multiplicacaoCalc = ( 
    function(a, b) { 
      return 5 * 84 
    } 
  )(5, 84);
  console.log(multiplicacaoCalc);

  
  // Callbacks functions: funções que usam outras funções como parâmetros
  function calcular(operacao, num1, num2) {
    return operacao(num1, num2);
  }

  function operacaoSoma(num1, num2) {
    return num1 + num2;
  }

  function operacaoSubtracao(num1, num2) {
    return num1 - num2;
  }

  const resultadoSoma = calcular(operacaoSoma, 41, 90);
  const resultadoSubtracao = calcular(operacaoSubtracao, 81, 901);

  console.log(resultadoSoma, resultadoSubtracao);