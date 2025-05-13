"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lista {
    constructor(numberElements) {
        this.list = [];
        this.n = numberElements;
        this.genereteList();
    }
    genereteList() {
        let number = this.n - 1;
        while (number >= 0) {
            let randomNumber = Math.floor(Math.random() * 100);
            this.list.push(randomNumber);
            number--;
        }
    }
    toString() {
        let listInString = "";
        for (let i = 0; i < this.list.length; i++) {
            if (i !== this.list.length - 1) {
                listInString += `${this.list[i]},`;
            }
            else {
                listInString += `${this.list[i]}`;
            }
        }
        return listInString;
    }
    //EXERCICIO 03
    valorDeCorte(n) {
        let arr = [...this.list];
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < n) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    }
    // EXERCICIO 04
    removeMultiplos(n) {
        let arr = [...this.list];
        if (n !== 0) {
            for (let i = 1; n * i <= arr.length; i++) {
                let position = (n * i);
                arr.splice(position, 1);
            }
        }
        return arr;
    }
    // EXERCICIO 05
    maisProximoDaMedia() {
        let arr = [...this.list];
        let total = 0;
        arr.forEach(function (value) {
            total += value;
        });
        let media = Math.floor(total / arr.length);
        let atualIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            let subtracao = Math.abs(arr[i] - media);
            let proximaSubtracao = Math.abs(arr[i + 1] - media);
            console.log(subtracao);
            if (subtracao < proximaSubtracao)
                atualIndex = i;
        }
        console.log(`media: `, media);
        console.log(arr);
        return arr[atualIndex];
    }
    //EXERCICIO 06
    reduz(n) {
        let arr = [...this.list];
        if (n > arr.length)
            throw new Error("É maior! Huehuuheheueu");
        console.log(arr);
        arr.splice(n);
        console.log(arr);
    }
    //EXERCICIO 07
    fatia(inicio, fim) {
        let arr = [...this.list];
        let sliceado = [];
        for (let i = inicio; i < fim; i++) {
            sliceado.push(arr[i]);
        }
        return sliceado;
    }
    //EXERCICIO 08
    inverte() {
        let arr = [...this.list];
        console.log(arr);
        for (let i = arr.length - 1; i >= 0; i--) {
            arr.push(arr[i]);
            console.log(`arr`, arr);
            arr.splice(i, 1);
            console.log(`apos`, arr);
        }
        return arr;
    }
    //EXERCICIO 9 
    amplitude() {
        let arr = [...this.list];
        //calcular a diferença entre o maior e menor numeros do array
        for (let i = 0; i < arr.length; i++) {
        }
        return 0;
    }
    amplitude2() {
        let arr = [...this.list];
        //calcular a diferença entre o maior e menor numeros do array
        let maior = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maior)
                maior = arr[i];
        }
        let menor = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < menor)
                menor = arr[i];
        }
        let dif = maior - menor;
        console.log(arr);
        console.log("Menor: ", menor, "Maior: ", maior);
        console.log(dif);
    }
}
exports.default = Lista;
let lista = new Lista(5);
//console.log(lista.toString());
// console.log(lista.valorDeCorte(55));
//console.log(lista.removeMultiplos(3));
//console.log(lista.maisProximoDaMedia());
//console.log(lista.reduz(3));
//console.log(lista.fatia(1, 5))
//console.log(lista.inverte())
lista.amplitude2();
