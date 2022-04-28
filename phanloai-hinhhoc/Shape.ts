class Shape{
    color : string;
    filled : boolean

    constructor(color: string,
                filled : boolean) {
        this.color = color;
        this.filled = filled;

    }

}
let shape = new Shape(`red`, false)
console.log(shape)

