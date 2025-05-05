export default class Ordena {
   private x: number
   private y: number
   private z: number

   public constructor(x: number, y: number, z: number) {
      this.x = x
      this.y = y
      this.z = z
   }
   public ordenaTres(): void {
      //ordem x y z
      if(this.x > this.y) {
         let aux = 0
         aux = this.x
         this.x = this.y
         this.y = aux
      }
      if(this.x > this.z) {
         let aux = 0
         aux = this.x
         this.x = this.z
         this.z = aux
      }
      if(this.y > this.z) {
         let aux = 0
         aux = this.y
         this.y = this.z
         this.z = aux
      }
   }

   public maiorDeTres(): number {
      let maior = this.x

      if(this.y > maior)
         maior = this.y
      if(this.z > maior)
         maior = this.y

      return maior
   }

   // exercicios extras

   public menorDeTres(): number {
      let menor = this.x
      if(this.y < menor)
         menor = this.y
      if(this.z < menor) 
         menor = this.z
      return menor
   }
   public exibe() {
      //this.ordenaTres()
      console.log(this.maiorDeTres())
      console.log(this.menorDeTres())
      console.log(this.x, this.y, this.z);
   }
}

let test = new Ordena(60, 50, 40)
test.exibe();