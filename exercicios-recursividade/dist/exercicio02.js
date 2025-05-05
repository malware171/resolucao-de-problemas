"use strict";
// caso base: n < 1
// caso recursivo: n - 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contagem = void 0;
//counter: 0
//
class Contagem {
    constructor(n) {
        this.n = n;
    }
    progressivo() {
        return this.progressivoAux(this.n);
    }
    progressivoAux(number) {
        if (number === 0)
            return 0;
        this.progressivoAux(number - 1);
        return number;
    }
}
exports.Contagem = Contagem;
let test = new Contagem(10);
console.log(test.progressivo());
