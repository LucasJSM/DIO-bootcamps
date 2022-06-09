// Minha resolução
function compararNumeros(num1, num2) {

  if(num1 != null && num2 != null && num1 != undefined && num2 != undefined) {
    let numerosIguais;
    if(num1 == num2) {
      numerosIguais = "são iguais";
    } else {
      numerosIguais = "não são iguais";
    }

    let soma = num1 + num2, compara10, compara20;
    if(soma > 10) {
      compara10 = "maior que 10";
    } else {
      compara10 = "menor que 10";
    }

    if(soma > 20) {
      compara20 = "maior que 20";
    } else {
      compara20 = "menor que 20";
    }
    
    return `Os números ${num1} e ${num2} ${numerosIguais}. Sua soma é ${soma}, que é ${compara10} e ${compara20}.`;
  
  } else if(num1 == undefined || num2 == undefined) {
    return `Insira valores na chamada da função`;
  } else if(!Number(num1) || !Number(num2)) {
    return `Os valores inseridos não são números`;
  }
}

console.log(compararNumeros(10, 10));
console.log(compararNumeros(1, 2));
console.log(compararNumeros(9, 38));
console.log(compararNumeros());
console.log(compararNumeros(0, 0));