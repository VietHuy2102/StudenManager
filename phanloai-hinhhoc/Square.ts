class Square {
    color: string;
    filled: boolean;
    side: number;

    constructor(color: string,
                filled: boolean,
                side: number) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}

let square = new Square("yellow", true, 5.8);

console.log(square);