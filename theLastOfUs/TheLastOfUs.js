"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MAURO HENRIQUE GEBARA KACHUTSKI
class TheLastOfUs {
    constructor(team, taxCure) {
        this.team = team;
        this.taxCure = taxCure;
        this.counter = 0;
    }
    curar() {
        this.team = (this.team * this.taxCure) + this.team;
        this.counter++;
    }
    getNumberOfMissions(targetNumber) {
        if (targetNumber <= this.team)
            return 0;
        this.curar();
        this.getNumberOfMissions(targetNumber);
        return this.counter;
    }
}
exports.default = TheLastOfUs;
let game = new TheLastOfUs(20000, 2);
console.log(game.getNumberOfMissions(8000000000));
// IMUNIZADOS = NUMERO INICIAL
// 1 IMUNIZADO CURA UM NUMERO DE INFECTADOS = TAXA DE CURA 
// UM INFECTADO CURADO APOS OUTRA MISSÃO VIRA UM IMUNIZADO
// CONTINUA A CURARAR EQUANTO O NUMERO ALVO NÃO É ATINGIDO
