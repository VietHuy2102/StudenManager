var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.getA = function () {
        return this.a;
    };
    QuadraticEquation.prototype.getB = function () {
        return this.b;
    };
    QuadraticEquation.prototype.getC = function () {
        return this.c;
    };
    QuadraticEquation.prototype.getDiscriminant = function () {
        if (this.a !== 0) {
            return this.b * this.b - 4 * this.a * this.c;
        }
        else {
            return -1;
        }
    };
    QuadraticEquation.prototype.getRoot = function () {
        if (this.getDiscriminant() >= 0) {
            var x1 = (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
            var x2 = (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
            return {
                message: "2 nghiem",
                x1: x1,
                x2: x2
            };
        }
        else {
            return {};
        }
    };
    return QuadraticEquation;
}());
var quadraticEquation = new QuadraticEquation(2, -6, 4);
console.log(quadraticEquation.getDiscriminant());
console.log(quadraticEquation.getRoot());
