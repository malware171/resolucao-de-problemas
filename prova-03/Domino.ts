export default class Domino {
    private startGame: number[] = [];
    private table: any[] = [];

    public constructor(startGame: number[]) {

        if ( this.isValid(startGame))
            this.startGame = startGame;
    }

    private isValid(arr: number[]): boolean {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 6) 
                return false;
        }

        return true;
    }

    public getTable(): void {
        console.log(this.table);
    }

    public addFirst(arr: number[]) {
        if ( this.isValid(arr)) {
            this.table.push(arr)
        }

    }

    public addLast(arr: number[]): void {
        if ( this.isValid(arr)) {
            if (arr[0] == this.table[1])
                this.table.push(arr);
        }
    }
}

let teste = new Domino([6,6]);
//teste.addFirst([4,5])
teste.addLast([6,5])
teste.getTable();