export default class Balanceamento {
   private mathExpression: string;

   public constructor(text: string) {
      this.mathExpression = text
   }

   public positonString(): void {
      
      let text = this.mathExpression
      text
      console.log(text[0] === text[text.length-1]);
      console.log(text);

        
   }

   // { [ ( ) ] }
   public isBalanciated(): boolean {
      let arr: string[]= []
      let text = this.mathExpression
      
      let pares: {[ key: string] : string } = {
            ')': '(',
            ']': '[',
            '}': '{'
      }

      // ARMAZENA OS ITENS
      for(let i = 0; i < text.length; i++) {
         let aberturas = ["{", "[", "("]
         const fechamentos = [')', ']', '}']
       
         if(aberturas.includes(text[i])) {
            
         } 
            arr.push(text[i])
         console.log(arr);
         

         if(fechamentos.includes(text[i])) {
            
            
         }
      } 
      return true     
   }
}

let expressao = new Balanceamento("{a * [c – b * (e + f)]}")
console.log(expressao.isBalanciated());
 