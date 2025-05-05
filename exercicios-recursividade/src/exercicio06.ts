export class Calculos {
  private n: number;

  constructor(n: number) {
    this.n = n;
  }

  public fatorial(): number {
    return this.factorialAux(this.n);
  }

  private factorialAux(x: number): number {
    if (x === 1) {
      return 1;
    }
    //retorne 4 * 3
    return x * this.factorialAux(x - 1);
  }
}

let fatorial = new Calculos(4);
console.log(fatorial.fatorial());

// !4 = ( 4 * !3 )
// !3 = ( 3 * !2 )
// !2 = 1

// !0 = 1
// !1 = 1
