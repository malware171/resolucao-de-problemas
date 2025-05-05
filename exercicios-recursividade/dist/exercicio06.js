"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculos = void 0;
class Calculos {
    constructor(n) {
        this.n = n;
    }
    fatorial() {
        return this.factorialAux(this.n);
    }
    factorialAux(x) {
        if (x === 1) {
            return 1;
        }
        //retorne 4 * 3
        return x * this.factorialAux(x - 1);
    }
}
exports.Calculos = Calculos;
let fatorial = new Calculos(4);
console.log(fatorial.fatorial());
// !4 = ( 4 * !3 )
// !3 = ( 3 * !2 )
// !2 = 1
// !0 = 1
// !1 = 1
