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
        if (this.n === 0) {
            return 0;
        }
        else
            this.progressivo();
        return this.n;
    }
}
exports.Contagem = Contagem;
let test = new Contagem();
test.progressivo(10);
