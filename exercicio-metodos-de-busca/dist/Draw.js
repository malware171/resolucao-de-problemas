"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MAURO HENRIQUE G. K
// DIOGO NERY DE ABREU
class Draw {
    constructor(arr) {
        this.inscricoes = [];
        this.inscricoes = arr;
    }
    getInvalid() {
        let invalidUser = [];
        for (let i = 0; i < this.inscricoes.length; i++) {
            let count = 0;
            for (let j = i + 1; j < this.inscricoes.length; j++) {
                if (this.inscricoes[i] === this.inscricoes[j]) {
                    count++;
                }
            }
            if (count > 0) { // SE TIVER MAIS QUE 1 ELE ARMAZENA, MAS ELE TAMBEM PRECISA VERIFICAR SE JA FOI ARMAZENADO
                if (!invalidUser.includes(this.inscricoes[i]))
                    invalidUser.push(this.inscricoes[i]);
            }
        }
        for (let i = 0; i < invalidUser.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < invalidUser.length; j++) {
                if (invalidUser[j] < invalidUser[minIndex])
                    minIndex = j;
            }
            [invalidUser[i], invalidUser[minIndex]] = [invalidUser[minIndex], invalidUser[i]];
        }
        return invalidUser;
    }
    getValid() {
        let validUsers = [];
        for (let i = 0; i < this.inscricoes.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.inscricoes.length; j++) {
                if (this.inscricoes[j] < this.inscricoes[minIndex])
                    minIndex = j;
            }
            [this.inscricoes[i], this.inscricoes[minIndex]] = [this.inscricoes[minIndex], this.inscricoes[i]];
        }
        for (let i = 0; i < this.inscricoes.length; i++) {
            if (this.inscricoes[i] !== this.inscricoes[i - 1] && this.inscricoes[i] !== this.inscricoes[i + 1])
                validUsers.push(this.inscricoes[i]);
        }
        return validUsers;
    }
    getWinner() {
        let validUsers = this.getValid();
        let randomIndex = Math.floor(Math.random() * validUsers.length);
        return validUsers[randomIndex];
    }
}
exports.default = Draw;
let teste = new Draw(["howard", "leonard", "penny", "howard", "amy", "penny"]);
//console.log(`Inscriçoes:`, teste.inscritos());
console.log(`getValid():`, teste.getValid());
console.log(`getInvalid():`, teste.getInvalid());
console.log(`getWinner():`, teste.getWinner());
