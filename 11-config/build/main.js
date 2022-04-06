"use strict";
var Car = /** @class */ (function () {
    function Car() {
        this.engine = 1;
    }
    Car.prototype.printEngine = function () {
        this.engine++;
        console.log('Engine !!');
    };
    return Car;
}());
var car = new Car();
car.printEngine();
//# sourceMappingURL=main.js.map