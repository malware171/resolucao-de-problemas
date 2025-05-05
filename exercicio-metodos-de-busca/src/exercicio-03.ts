export default class Baralho {
   private cartas: number[]

   constructor(cartas: number[]) {
      this.cartas = cartas
   }

   public bubbleSort(): void {
      let swap: boolean

      do {
         swap = false
         for(let i = 0; i < this.cartas.length; i++) {
            if(this.cartas[i] > this.cartas[i + 1]){

               let aux = this.cartas[i]
               this.cartas[i] = this.cartas[i+1]
               this.cartas[i+1] = aux
               swap = true
            }
         }
      } while (swap)  
      console.log(this.cartas)
   }

   private swap(count: number, positionMenor: number): void {
      let aux = this.cartas[count]
      this.cartas[count] = this.cartas[positionMenor]
      this.cartas[positionMenor] = aux
   }

   public selectionSort() {
      let count = 0
      do {
         let positionMenor = count
         let menor  = this.cartas[count]
         
         for(let i = count + 1; i < this.cartas.length; i++) {         
            if(this.cartas[i] < menor){
               menor = this.cartas[i]
               positionMenor = i     
            }            
         }

         let aux = this.cartas[count]
         this.cartas[count] = this.cartas[positionMenor]
         this.cartas[positionMenor] = aux

         count++

      } while(count < this.cartas.length)
      console.log(this.cartas)
   }

   public insertionSort() {
      for(let i = 1; i < this.cartas.length; i++) {
         let j = i - 1
         let valorAtual = this.cartas[i]
   
         while(j >= 0 && this.cartas[j] > valorAtual) {
            this.cartas[j + 1] = this.cartas[j]
            j--
         }
         this.cartas[j + 1] = valorAtual
      }
      console.log(this.cartas)
   }
}

let baralho = new Baralho([4, 5, 6, 1, 2, 3, 7, 8, 9, 10])

//baralho.bubbleSort();
//baralho.selectionSort();
baralho.insertionSort()




