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
            if (isCrescente === false)
                break;
        }
        console.log(isCrescente);
    }
    // Arr = [1, 2, 3, 4, 5, 6]
    // indice[0, 1, 2, 3, 4, 5]
    embaralhar() {
        for (let i = 0; i < this.arr.length; i++) {
            let num1 = Math.floor(Math.random() * this.arr.length - 1);
            [this.arr[i], this.arr[num1]] = [this.arr[num1], this.arr[i]];
        }
        console.log(this.arr);
    }
}
exports.default = VerificaCrescente;
let arr = new VerificaCrescente([1, 2, 3, 4, 5, 6]);
arr.embaralhar();
