export default class Primos {
  private n: number;
  private primos: number[] = [2];

  public constructor(n: number) {
    this.n = n;
    this.primosAntes();
  }

  //método get pra poder capturar o valor no console.log
  public getPrimos(): number[] {
    return this.primos;
  }

  //método pra ir ierando de 3 até n, passando só pelos impares
  //a cada nova iteração eu faço uma chamada da função que verifica se o contador(j) é primo, ele é passado como parâmetro
  public primosAntes(): number[] {
    let primoAntesFor = 0;
    for (let j = 3; j < this.n; j += 2) {
      primoAntesFor++;
      if (this.isPrimo(j)) this.primos.push(j);
    }
    console.log("Passei no primo antes: ", primoAntesFor);
    return this.primos;
  }

  //Aqui eu faço a verificação pra validar se numero x é primo ou não
  //recebo o j como parâmetro
  public isPrimo(j: number): boolean {
    let raiz = Math.sqrt(j);
    let primo = 0;
    if (j <= 1) {
      return false;
    }

    for (let i = 2; i <= raiz; i++) {
      primo++;
      if (j % i == 0) return false;
    }

    console.log("Passei aqui para verificar se é primo: ", primo);
    return true;
  }
}

//testes
let teste = new Primos(100);
console.log(teste.getPrimos());
