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

function validity() {
  const dateToday = {
    dayToday: 2,
    monthToday: 4,
    yearToday: 2025,
  };

  let productValidity = {
    product: "Chocolate",
    day: 1,
    month: 4,
    year: 2025,
  };

  if (productValidity.year < dateToday.yearToday) {
    console.log("Expired product");
  } else if (productValidity.month < dateToday.monthToday) {
    console.log("Expired product");
  } else if (productValidity.day < dateToday.dayToday) {
    console.log("Expired product");
  } else {
    console.log("Product is not Experied");
  }
}
validity();

function isNumberPrimo(num: number) {
  if (num <= 1) {
    console.log("Nao é primo");
  } else {
    for (let i = 2; i <= num - 1; i++) {
      if ((i * num) % 2 === 0) {
      }
      return console.log("Nao é primo");
    }
    return console.log("É primo");
  }

  // SE ENCONTRAR ALGUM DIVISOR QUE ESTEJA NO INTERVALO DE (2 e n-1) E O RESTO FOR = 0.
  // O NUMERO NÃO É PRIMO.
  /// SE NÃO TIVER NENHUM DIVISOR ENTRE O NUMERO - 1 QUE NÃO SEJA 1 OU ELE MESMO O NUMERO É PRIMO
}
//isNumberPrimo(3);
