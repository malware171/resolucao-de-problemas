"use strict";
// caso base: n > 0
// caso recursivo: n - 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recursivo = void 0;
class Recursivo {
    mensagem(n) {
        if (n < 1) {
            return "";
        }
        else {
            return "Ola mundo ! \n" + n + this.mensagem(n - 1);
        }
    }
}
exports.Recursivo = Recursivo;
let test = new Recursivo();
console.log(test.mensagem(5));
