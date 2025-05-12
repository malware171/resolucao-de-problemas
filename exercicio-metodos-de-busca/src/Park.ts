export default class Park {
   private line : number[] = []

   constructor(arr: number[]) {
       this.line = arr
   }

   public getSorted(): number[] {
       for(let i = 0; i < this.line.length; i++) {
           let j = i + 1

           let indice = i // -1
           let counter = this.line.length-1
           while(counter >= 0) {
               while(this.line[j] === -1) {
                  j++
               }
               if ( this.line[j] < this.line[indice]) {
                  indice = j
               }

               if(indice !== i) {
                  [this.line[j], this.line[indice]] = [this.line[indice], this.line[j]]
               }
               counter--
            }
        }
        return this.line
   }
/*
       for(let i = 1; i < this.line.length; i++) {
           let j = i - 1
           let valorAtual = this.line[i]

           if(valorAtual !== -1) {
               while(j >= 0 && this.line[j] > valorAtual) {
                   this.line[j + 1] = this.line[j]
                   j--
                }
                this.line[j + 1] = valorAtual
           }
        }
        return this.line
   }
*/
   public getSortedOk(): number[] {
      for(let i = 0; i < this.line.length; i++) {
         let minValue = i

         for(let j = i + 1; j < this.line.length; j++) {
            
               if(this.line[j] < this.line[minValue]) {
                  minValue = j
               
            }
            
         }
         if(i !== minValue) {
            [this.line[i], this.line[minValue]] = [this.line[minValue], this.line[i]]
         }
      }
      return this.line
   }

}

let fila = new Park([-1, 150, 190, 170, -1, 180, 160 ])


console.log(fila.getSorted());