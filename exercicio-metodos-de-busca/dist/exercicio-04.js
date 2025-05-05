"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerificaCrescente {
    constructor(arr) {
        this.arr = arr;
    }
    Crescente() {
        let isCrescente = true;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > this.arr[i + 1]) {
                isCrescente = false;
            }
            console.log(i);
            if (isCrescente === false)
                break;
        }
        console.log(isCrescente);
    }
}
exports.default = VerificaCrescente;
let arr = new VerificaCrescente([1, 4, 3, 4]);
arr.Crescente();
