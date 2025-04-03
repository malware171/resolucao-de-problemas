export default class Primo {
  public num: number;

  public constructor(num: number) {
    this.num = num;
  }

  public isPrimo() {
    if (this.num <= 1) return `Não é primo`;
    for (let i = 2; i < Math.sqrt(this.num); i++)
      if (this.num % i == 0) return `Não é primo`;

    return `É primo`;
  }
}
