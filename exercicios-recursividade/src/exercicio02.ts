// caso base: n < 1
// caso recursivo: n - 1

//counter: 0
//

export class Contagem {
 private n: number;

 constructor(n: number) {
  this.n = n;
 }

 public progressivo(): number {
  return this.progressivoAux(this.n);
 }

 private progressivoAux(number: number): number {
  if (number === 0) return 0;

  this.progressivoAux(number - 1);
  return number;
 }
}

let test = new Contagem(10);
console.log(test.progressivo());
