//Diogo Nery de Abreu
//Mauro Henrique G.K.

export default class Message {
   private message: string;
   private reverseWord: string;

   public constructor(str: string) {
       this.message = str;
       this.reverseWord = '';
   }

   //get() e set()

   public reverse(): string {
       return this.reversor(this.message);
   }

   private reversor(str: string): string {
       if (str.length == 0)
           return this.reverseWord;
       
       this.reverseWord += str.slice(str.length -1);
       return this.reversor(str.slice(0, str.length - 1));
   }
}

//let revert = new Message('Subi no Ã´nibus em Marrocos');
//console.log(revert.reverse());

