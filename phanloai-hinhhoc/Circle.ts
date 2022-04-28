class Circle{
    color : string;
    filled : boolean;
    radius: number;

    constructor(color : string,
                filled : boolean,
                radius : number) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    //Phương thức getArea và getPerimeter trả về diện tích và chu vi
    getArea (): number{
        return this.radius * this.radius * Math.PI // S = r^2 * Pi
    }
    getPerimeter(): number{
        return 2 * this.radius * Math.PI// Chu vi = 2r*Pi
    }
}

let cicrle = new Circle(`indigo`, false,3.5);
console.log(cicrle)
