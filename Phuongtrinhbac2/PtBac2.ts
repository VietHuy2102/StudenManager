class QuadraticEquation {
    a: number;
    b: number;
    c: number;

    constructor(a: number,
                b: number,
                c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getA(): number {
        return this.a;
    }

    getB(): number {
        return this.b;
    }

    getC(): number {
        return this.c;
    }

    getDiscriminant(): number {
        if (this.a !== 0) {
            return this.b * this.b - 4 * this.a * this.c;
        } else {
            return -1
        }
    }

    getRoot(): any {
        if (this.getDiscriminant() >= 0) {
            let x1 = (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
            let x2 =(-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a) ;

            return {
                message: "2 nghiem",
                x1: x1,
                x2: x2
            };
        } else {
            return {
            }
        }
    }

}

let quadraticEquation = new QuadraticEquation(2, -6, 4);

console.log(quadraticEquation.getDiscriminant())
console.log(quadraticEquation.getRoot())

