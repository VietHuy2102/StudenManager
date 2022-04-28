var Circle = /** @class */ (function () {
    function Circle(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    //Phương thức getArea và getPerimeter trả về diện tích và chu vi
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI; // S = r^2 * Pi
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI; // Chu vi = 2r*Pi
    };
    return Circle;
}());
var cicrle = new Circle("indigo", false, 3.5);
console.log(cicrle);
