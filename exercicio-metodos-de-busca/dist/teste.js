"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
class Park {
    constructor(arr) {
        this.line = [];
        this.line = arr;
    }
    getSorted() {
        for (let i = 1; i < this.line.length; i++) {
            let j = i + 1;
            let valorAtual = this.line[i];
            if (valorAtual !== -1) {
                while (j >= 0 && this.line[j] > valorAtual) {
                    this.line[j] = this.line[j];
                    j--;
                }
                this.line[j + 1] = valorAtual;
            }
        }
        return this.line;
    }
}
exports.default = Park;
let fila = new Park([-1, 150, 190, 170, -1, 180, 160]);
console.log(fila.getSorted());
=======
var fruit = ["cherries", "apples", "bananas"];
fruit.sort();
>>>>>>> 692c144ffc3a56675cf6b9f759e5ea51e4d6b4d7
