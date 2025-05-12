"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Balanceamento {
    constructor(text) {
        this.mathExpression = text;
    }
    positonString() {
        let text = this.mathExpression;
        text;
        console.log(text[0] === text[text.length - 1]);
        console.log(text);
    }
    // { [ ( ) ] }
    isBalanciated() {
        let arr = [];
        let text = this.mathExpression;
        let pares = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        // ARMAZENA OS ITENS
        for (let i = 0; i < text.length; i++) {
            let aberturas = ["{", "[", "("];
            const fechamentos = [')', ']', '}'];
            if (aberturas.includes(text[i])) {
            }
            arr.push(text[i]);
            console.log(arr);
            if (fechamentos.includes(text[i])) {
            }
        }
        return true;
    }
}
exports.default = Balanceamento;
let expressao = new Balanceamento("{a * [c – b * (e + f)]}");
console.log(expressao.isBalanciated());
