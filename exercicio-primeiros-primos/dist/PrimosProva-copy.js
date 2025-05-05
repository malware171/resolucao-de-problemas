"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DIOGO NERY DE ABREU - RA:2561948
// MAURO HENRIQUE GEBARA KACHUTSKI RA: 2504685
class PrimeirosPrimos {
    constructor(n) {
        this.n = n;
    }
    firstPrimos() {
        let arrayPrimos = [2];
        let noPrimo;
        let num = 3;
        let test = 0;
        let loopFor = 0;
        let divide = num / 2;
        let raiz = Math.sqrt(num) / 2;
        while (num < this.n) {
            test++;
            for (let j = 2; j <= Math.sqrt(num); j++) {
                loopFor++;
                if (num % j === 0) {
                    noPrimo = num;
                    break;
                }
            }
            if (num !== noPrimo)
                arrayPrimos.push(num);
            num += 2;
        }
        console.log("Passei aqui no while ", test);
        console.log("Passei aqui no FOR ", loopFor);
        return arrayPrimos;
    }
    isPrimo(num, j) {
        if (num % j) {
            return false;
        }
        return true;
    }
}
exports.default = PrimeirosPrimos;
let primos = new PrimeirosPrimos(100);
console.log(primos.firstPrimos());
