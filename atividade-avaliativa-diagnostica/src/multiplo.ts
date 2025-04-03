export default class Multiplo {
    public a: number;
    public b: number;
    private multiplo!: number;

    public constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public verifica(): number {
        this.multiplo = this.b + (this.a - (this.b % this.a));
        return this.multiplo;
    }
}


