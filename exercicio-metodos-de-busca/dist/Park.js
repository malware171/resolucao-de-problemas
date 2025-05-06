"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Park {
    constructor(arr) {
        this.line = [];
        this.line = arr;
    }
    getSorted() {
        for (let i = 0; i < this.line.length; i++) {
            let j = i + 1;
            let indice = i; // -1
            let counter = this.line.length - 1;
            while (counter >= 0) {
                while (this.line[j] === -1) {
                    j++;
                }
                if (this.line[j] < this.line[indice]) {
                    indice = j;
                }
                if (indice !== i) {
                    [this.line[j], this.line[indice]] = [this.line[indice], this.line[j]];
                }
                counter--;
            }
        }
        return this.line;
    }
}
exports.default = Park;
let fila = new Park([-1, 150, 190, 170, -1, 180, 160]);
console.log(fila.getSorted());
