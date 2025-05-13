"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lista {
    constructor(numberElements) {
        this.list = [];
        this.n = numberElements;
        this.genereteList();
    }
    genereteList() {
        let number = this.n - 1;
        while (number >= 0) {
            let randomNumber = Math.floor(Math.random() * 100);
            this.list.push(randomNumber);
            number--;
        }
    }
    toString() {
        let listInString = "";
        for (let i = 0; i < this.list.length; i++) {
            if (i !== this.list.length - 1) {
                listInString += `${this.list[i]},`;
            }
            else {
                listInString += `${this.list[i]}`;
            }
        }
        return listInString;
    }
}
exports.default = Lista;
let lista = new Lista(5);
console.log(lista.toString());
