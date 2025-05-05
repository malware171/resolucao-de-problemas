// caso base: n > 0
// caso recursivo: n - 1

export class Recursivo {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  //get() e set()
  public repeat(n: number): string {
    if (n < 1) return "";

    return this.message + "\n" + this.repeat(n - 1);
  }
}

let test = new Recursivo("Testando o recursivo");
console.log(test.repeat(5));
