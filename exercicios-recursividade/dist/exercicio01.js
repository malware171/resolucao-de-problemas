"use strict";
// caso base: n > 0
// caso recursivo: n - 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recursivo = void 0;
class Recursivo {
    constructor(message) {
        this.message = message;
    }
    //get() e set()
    repeat(n) {
        if (n < 1)
            return "";
        return this.message + "\n" + this.repeat(n - 1);
    }
}
exports.Recursivo = Recursivo;
let test = new Recursivo("Testando o recursivo");
console.log(test.repeat(5));
