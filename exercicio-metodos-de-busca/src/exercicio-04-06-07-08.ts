export default class VerificaCrescente{
   private arr: number[]

   public constructor(arr: number[]) {
      this.arr = arr
   }

   public Crescente() {
      let isCrescente = true
      
      for(let i = 0; i < this.arr.length; i++) {
         if(this.arr[i] > this.arr[i + 1]) {
            isCrescente = false; 
         }
         
         if(isCrescente === false) break
      }
      console.log(isCrescente);
   }

   public embaralhar() {
      for(let i = 0; i < this.arr.length; i++) {
         let randomIndice = Math.floor(Math.random() * this.arr.length-1);

         [this.arr[i], this.arr[randomIndice]] = [this.arr[randomIndice], this.arr[i]]
      }
      console.log(this.arr);
      
   }

   public gnomeSort() {
      let i = 1

      while(i < this.arr.length) {
         if(this.arr[i] >= this.arr[i - 1]) {
            i++
         } else {
            [this.arr[i], this.arr[i - 1]] = [this.arr[i - 1], this.arr[i]]
            i--
         } if(i === 0)
            i = 1
      }
      console.log(this.arr);
   }
}

//                               0, 1, 2, 3, 4, 5, 6, 7, 8
let arr = new VerificaCrescente([6, 2, 9, 4, 7, 1, 8, 5, 0])
//                               2, 6, 9, 4, 7, 1, 8, 5, 0
//                               2, 6, 9,      
//
arr.gnomeSort()