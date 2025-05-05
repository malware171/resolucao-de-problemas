"use strict";
//Diogo Nery de Abreu
//Mauro Henrique G.K.
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(str) {
        this.message = str;
        this.reverseWord = '';
    }
    //get() e set()
    reverse() {
        return this.reversor(this.message);
    }
    reversor(str) {
        if (str.length == 0)
            return this.reverseWord;
        this.reverseWord += str.slice(str.length - 1);
        return this.reversor(str.slice(0, str.length - 1));
    }
}
exports.default = Message;
//let revert = new Message('Subi no Ã´nibus em Marrocos');
//console.log(revert.reverse());
