"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ordena {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    ordenaTres() {
        //ordem x y z
        if (this.x > this.y) {
            let aux = 0;
            aux = this.x;
            this.x = this.y;
            this.y = aux;
        }
        if (this.x > this.z) {
            let aux = 0;
            aux = this.x;
            this.x = this.z;
            this.z = aux;
        }
        if (this.y > this.z) {
            let aux = 0;
            aux = this.y;
            this.y = this.z;
            this.z = aux;
        }
    }
    maiorDeTres() {
        let maior = this.x;
        if (this.y > maior)
            maior = this.y;
        if (this.z > maior)
            maior = this.y;
        return maior;
    }
    // exercicios extras
    menorDeTres() {
        let menor = this.x;
        if (this.y < menor)
            menor = this.y;
        if (this.z < menor)
            menor = this.z;
        return menor;
    }
    exibe() {
        //this.ordenaTres()
        console.log(this.maiorDeTres());
        console.log(this.menorDeTres());
        console.log(this.x, this.y, this.z);
    }
}
exports.default = Ordena;
let test = new Ordena(60, 50, 40);
test.exibe();
