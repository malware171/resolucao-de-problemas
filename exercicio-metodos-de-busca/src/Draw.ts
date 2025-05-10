// MAURO HENRIQUE G. K
// DIOGO NERY DE ABREU
export default class Draw {
   private inscricoes: string[] = [];

   public constructor(arr: string[]) {
      this.inscricoes = arr
   }

   public getInvalid(): string[] {
      let invalidUser: string[] = []

      for(let i = 0; i < this.inscricoes.length; i++) {
         let count = 0
         for(let j = i+1; j < this.inscricoes.length; j++) {
            if(this.inscricoes[i] === this.inscricoes[j]) {
               count++
            }
         }
         if(count > 0) { // SE TIVER MAIS QUE 1 ELE ARMAZENA, MAS ELE TAMBEM PRECISA VERIFICAR SE JA FOI ARMAZENADO
            if (!invalidUser.includes(this.inscricoes[i]))
               invalidUser.push(this.inscricoes[i]);
         }
      }

      for (let i = 0; i < invalidUser.length - 1; i++) {
         let minIndex = i;

         for (let j = i + 1; j < invalidUser.length; j++) {
            if (invalidUser[j] < invalidUser[minIndex])
               minIndex = j;
         }

         [invalidUser[i], invalidUser[minIndex]] = [invalidUser[minIndex], invalidUser[i]]
      }
      return invalidUser
   }

   public getValid(): string[] {
      let lista: string[] = [...this.inscricoes];
      
      let validUsers: string[] = []
      
      for (let i = 0; i < lista.length - 1; i++) {
         let minIndex = i;

         for (let j = i + 1; j < lista.length; j++) {
            if (lista[j] < lista[minIndex])
               minIndex = j;
         }

         [lista[i], lista[minIndex]] = [lista[minIndex], lista[i]]
      }
      
      for (let i = 0; i < lista.length; i++) {
         if (lista[i] !== lista[i - 1] && lista[i] !== lista[i + 1])
            validUsers.push(lista[i]);
      }
      return validUsers
   }

   public getWinner(): string {
      let validUsers = this.getValid()
      let randomIndex = Math.floor(Math.random() * validUsers.length)
      
      return validUsers[randomIndex]; 
   }

}

let teste = new Draw(["amy", "howard", "leonard", "sheldon","penny", "howard", "amy", "penny", "sheldon"])
//console.log(`Inscriçoes:`, teste.inscritos());
console.log(`getValid():`, teste.getValid());
console.log(`getInvalid():`, teste.getInvalid());
console.log(`getWinner():`, teste.getWinner());