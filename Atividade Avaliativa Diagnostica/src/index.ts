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

function isNumberPrimo(num: number) {
  if (num <= 1) {
    console.log("Nao é primo");
  } else if (num === 2) {
    return console.log("É primo");
  } else if (num % 2 === 0 && num > 2) {
    console.log("Nao é primo");
  } else {
    for (let i = 2; i < num - 1; i++) {
      if (num % i === 0) {
        return console.log("Nao é primo");
      }
    }
    return console.log("É primo");
  }
}
// SE ENCONTRAR ALGUM DIVISOR QUE ESTEJA NO INTERVALO DE (2 e n-1) E O RESTO FOR = 0.
// O NUMERO NÃO É PRIMO.
/// SE NÃO TIVER NENHUM DIVISOR ENTRE O NUMERO - 1 QUE NÃO SEJA 1 OU ELE MESMO O NUMERO É PRIMO

//isNumberPrimo(161);

function isPrimo2(num: number) {
  if (num <= 1 || (num % 2 === 0 && num > 2)) {
    return console.log(num + " - Não é primo");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return console.log(num + " - Não é primo");
      }
    }
    return console.log(num + " - É primo");
  }
}
//isPrimo2(10);

function PrimeiroPrimo(num: number): string {
  let arrayPrimos: number[] = [];

  let value = false;
  while (arrayPrimos.length <= num) {
    if (arrayPrimos.length === num) {
      value = true;
    }

    let multiplicador = 1;

    for (let i = 2; (value = false); i++) {
      let multiply = i * multiplicador;
      if (multiply % i !== 0) {
        arrayPrimos.push(multiply);
      }
    }
  }
  let text = arrayPrimos.reduce(function (valorAcumulado, numero) {
    return valorAcumulado + numero.toString() + ", ";
  }, "");
  return text;
}

PrimeiroPrimo(5);
