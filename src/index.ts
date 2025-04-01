function multiply() {
  let a = 2;
  let b = 1000;

  let soma = a + b;
  let result;

  for (let i = b; i <= soma; i++) {
    if (i % a === 0) {
      result = i;
    }
  }
  console.log("O Próximo Múltiplo de " + b + " é: " + result);
}
//multiply();

// dia - mes - ano
// 1 - 3 - 25

function validade() {
  const dia = 1;
  const mes = 3;
  const ano = 2025;
}

function isNumberPrimo() {
  let num = 3;

  if (num <= 1) {
    return console.log("O numero " + num + " não é primo");
  } else if (num === 2) {
    return console.log("O numero " + num + " é primo");
  } else {
    for (let i = 2; i <= num - 1; i++) {
      if (num % i === 0) {
        return console.log("O numero " + num + " é primo");
      } else {
        return console.log("O numero " + num + " não é primo");
      }
    }
  }

  /* 
  else if (num === 2) {
    isPrimo = true;
  } else if (num > 2 && num % 2 === 0) {
    for (let i = 2; i <= num - 1; i++) {
      if (num % i === 0) {
        isPrimo = true;
        break;
      } else {
        isPrimo = false;
        break;
      }
    }
  }*/

  /*
  else if (num === 2) {
    return console.log(console.log("O numero " + num + " é primo"));
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if ((i * num) % 2 === 0) {
        return console.log("O numero " + num + " é primo");
      }
    }
    return console.log("O numero " + num + " não é primo");
  }*/
}
isNumberPrimo();
