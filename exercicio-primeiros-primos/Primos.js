"use strict";
/*

class Primos {
  public arrayPrimos: number[] = [];

  public PrimeirosPrimos(num: number): string {
    let value = false;
    while (this.arrayPrimos.length <= num) {
      if (this.arrayPrimos.length === num) {
        value = true;
      }

      let multiplicador = 1;

      for (let i = 2; (value = false); i++) {
        let multiply = i * multiplicador;
        if (multiply % i !== 0) {
          this.arrayPrimos.push(multiply);
        }
      }
    }
    let text = this.arrayPrimos.reduce(function (valorAcumulado, numero) {
      return valorAcumulado + numero.toString() + ", ";
    }, "");
    return text;
  }
}
*/
function primeirosPrimos(num) {
    let arrayPrimos = [2];
    for (let numero = 3; arrayPrimos.length !== num; numero++) {
        if (numero % (numero - 1) !== 0) {
            arrayPrimos.push(numero);
        }
    }
    console.log(arrayPrimos.toString());
}
primeirosPrimos(5);
/*
function PrimeiroPrimo(num: number): string {
  let value = false;
  while (this.arrayPrimos.length <= num) {
    if (this.arrayPrimos.length === num) {
      value = true;
    }

    let multiplicador = 1;

    for (let i = 2; (value = false); i++) {
      let multiply = i * multiplicador;
      if (multiply % i !== 0) {
        this.arrayPrimos.push(multiply);
      }
    }
  }
  let text = this.arrayPrimos.reduce(function (valorAcumulado, numero) {
    return valorAcumulado + numero.toString() + ", ";
  }, "");
  return text;
}

PrimeiroPrimo(5);

*/
