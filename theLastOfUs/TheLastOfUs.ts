// MAURO HENRIQUE GEBARA KACHUTSKI
export default class TheLastOfUs {
   private team: number
   private taxCure: number
   private counter: number

   public constructor(team: number, taxCure:number) {
      this.team = team
      this.taxCure = taxCure
      this.counter = 0
   }

   private curar() {
      this.team += (this.team * this.taxCure)
      this.counter++
   }

   public getNumberOfMissions(targetNumber: number): number {
      if(targetNumber <= this.team)
         return 0

      this.curar()
      this.getNumberOfMissions(targetNumber)
      return this.counter
   }
}

let game = new TheLastOfUs(20_000, 2)
console.log(game.getNumberOfMissions(8_000_000_000));


// IMUNIZADOS = NUMERO INICIAL
// 1 IMUNIZADO CURA UM NUMERO DE INFECTADOS = TAXA DE CURA 
// UM INFECTADO CURADO APOS OUTRA MISSÃO VIRA UM IMUNIZADO
// CONTINUA A CURARAR EQUANTO O NUMERO ALVO NÃO É ATINGIDO