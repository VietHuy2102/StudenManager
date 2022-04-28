var Rectangle = /** @class */ (function () {
    function Rectangle(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    return Rectangle;
}());
var rectangle = new Rectangle("orange", true, 2.5, 3.8);
console.log(rectangle);
