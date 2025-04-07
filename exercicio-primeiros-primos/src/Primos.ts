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
function primeirosPrimos(n: number) {
  let arrayPrimos = [2];
  let noPrimo;

  for (let num = 3; arrayPrimos.length !== n; num++) {
    console.log("Passe aqui: ", num - 2);

    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        noPrimo = num;
      }
    }
    if (num !== noPrimo) arrayPrimos.push(num);
  }
  console.log(arrayPrimos.toString());
}
primeirosPrimos(25);
