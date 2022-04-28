class Rectangle{
    color : string;
    filled : boolean;
    width: number;
    length: number

    constructor(color : string,
                filled : boolean,
                width : number,
                length : number) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea ():number{
        return this.width * this.length;
    }
    getPerimeter ():number{
        return 2* (this.width+this.length)
    }
}
let rectangle = new Rectangle(`orange`, true, 2.5,3.8)
console.log(rectangle)