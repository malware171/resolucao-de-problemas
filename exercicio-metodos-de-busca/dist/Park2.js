"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class park2 {
    constructor(arr) {
        this.line = [];
        this.line = arr;
    }
    getSorted() {
        for (let i = 0; i < this.line.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.line.length; j++) {
                if (this.line[j] !== -1) {
                    if (this.line[j] < this.line[minIndex]) {
                        minIndex = j;
                    }
                }
            }
            if (minIndex !== i) {
                [this.line[i], this.line[minIndex]] = [this.line[minIndex], this.line[i]];
            }
        }
        return this.line;
    }
}
exports.default = park2;
let arr = new park2([-1, 190, 150, 170, -1, -1, -1, 180, 160]);
console.log(arr.getSorted());
