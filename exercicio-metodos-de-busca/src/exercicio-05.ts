export default class Baralho {
   private arr: number[]

   constructor(arr: number[]) {
      this.arr = arr
   }

   // BUBBLE SORT COMPARA DE 2 EM 2
   // PERCORRER O ARRAY
   // VERIFICAR SE O NUMERO NA POS A FRENTE DELE É MENOR DO QUE ELE
   public bubbleSortBest() {
      for(let i = this.arr.length-1; i >= 0; i--) {
         let trocas = 0
         for(let j = 0; j < this.arr.length; j++) {
            if(this.arr[j] > this.arr[j + 1]) {
               [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]]
               trocas++
            }
         }
         if(trocas === 0 ) break
      }
      console.log(this.arr);
   }
   
}

let baralho = new Baralho([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

baralho.bubbleSortBest()
//baralho.bubbleSort();
//baralho.selectionSort();





