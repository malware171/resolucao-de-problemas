/*
class Primos {
  public arrayPrimos: number[] = [];

  public PrimeiroPrimo(num: number): string {
    let value = false;
    while (this.arrayPrimos.length <= num) {
      if (this.arrayPrimos.length === num) {
        value = true;
      }

      let multiplicador = 1

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
