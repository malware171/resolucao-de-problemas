"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Palindromo {
    constructor(text) {
        this.text = text;
    }
    isPalindromoAux(text) {
        this.text = text;
        return text;
    }
    invertWord() {
        if (this.isPalindromoAux(this.text).length <= 0) {
            return "";
        }
        else {
            this.isPalindromoAux(this.text).split;
            return;
        }
    }
    isPalindromo() {
        if (this.isPalindromoAux(this.text).length < 2) {
        }
    }
}
exports.default = Palindromo;
// acabate
