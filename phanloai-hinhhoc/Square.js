var Square = /** @class */ (function () {
    function Square(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    return Square;
}());
var square = new Square("yellow", true, 5.8);
console.log(square);
