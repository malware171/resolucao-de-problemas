export default class Lista {
   private n: number
   private list:  number[] = []

   public constructor(numberElements: number) {
      this.n = numberElements
      this.genereteList()
   }

   private genereteList(): void {
      let number = this.n - 1 

      while(number >= 0) {
         let randomNumber = Math.floor(Math.random() * 100)
         this.list.push(randomNumber)
         number--
      }  
   }

   public toString(): string {
      let listInString = ""

      for(let i = 0; i < this.list.length; i++) {
         if(i !== this.list.length-1){
            listInString += `${this.list[i]},`
         } else {
            listInString += `${this.list[i]}`
         }
      }
      return listInString
   }

   //EXERCICIO 03
   public valorDeCorte(n: number): number[] {
      let arr = [...this.list]
      console.log(arr);
      
      for(let i = 0; i < arr.length; i++) {
         if(arr[i] < n) {
            arr.splice(i, 1)
            i--
         }
      }
      return arr
   }
   // EXERCICIO 04
   public removeMultiplos(n: number): number[] {
      let arr = [...this.list]

      if(n !== 0) {
         for( let i = 1; n * i <= arr.length; i++) {
            let position = (n * i)
            arr.splice(position, 1)            
         }    
      }
      return arr
   }

   // EXERCICIO 05
   public maisProximoDaMedia() {
      let arr = [...this.list]
      let total = 0
      
      arr.forEach(function (value) {
         total += value
      })

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
      
      return arr[atualIndex]
   }

   //EXERCICIO 06
   public reduz(n: number) {
      let arr = [...this.list];
      if (n > arr.length)
         throw new Error("É maior! Huehuuheheueu");

      console.log(arr);
      
      arr.splice(n)
      console.log(arr);
      
   }

   //EXERCICIO 07
   public fatia(inicio: number, fim: number): number[] {
      let arr = [...this.list]
      let sliceado= [];

      for (let i = inicio; i < fim; i++){
         sliceado.push(arr[i])
      }
      return sliceado;
   }

   //EXERCICIO 08
   public inverte(): number[] {
      let arr = [...this.list];

      console.log(arr);

      for(let i = arr.length-1; i >= 0; i--) {
         arr.push(arr[i]);
         console.log(`arr`, arr);
         
         arr.splice(i, 1);
         console.log(`apos`, arr);

      }
      return arr;
   }

   //EXERCICIO 9 
   public amplitude(): void {
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

   //EXERCICIO 10
   //DESAFIO JOSEPHUS
   public lastSurvivor(n: number, k: number) {
      let arr = []

      for(let i = 1; n !== arr.length; i++) {
         arr.push(i)
      }
      
      let posRemove = k

      while(arr.length >= 1) {
         console.log(arr);
         if(posRemove > arr.length) {
            posRemove = (posRemove + k) - arr.length
            arr.splice(posRemove, 1)
         } 
         arr.splice(posRemove, 1)
         posRemove += k
      }

   }


}

let lista = new Lista(7)
//console.log(lista.toString());
// console.log(lista.valorDeCorte(55));
//console.log(lista.removeMultiplos(3));
//console.log(lista.maisProximoDaMedia());
//console.log(lista.reduz(3));
//console.log(lista.fatia(1, 5))
//console.log(lista.inverte())
//lista.amplitude();
lista.lastSurvivor(7, 2)