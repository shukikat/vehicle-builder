"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Vehicle and Wheel classes
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// TODO: The Motorbike class should extend the Vehicle class
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(vin, color, make, model, year, weight, topSpeed, wheels) {
        var _this = _super.call(this) || this;
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        if (wheels.length !== 2) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        return _this;
    }
    Motorbike.prototype.Wheelie = function () {
        console.log("Motorbike ".concat(this.make).concat(this.model, " is doing a wheelie!"));
    };
    Motorbike.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        this.motorBikeInfo(); //records data for motorBike info
    };
    Motorbike.prototype.motorBikeInfo = function () {
        console.log("VIN: ".concat(this.vin));
        console.log("Color: ".concat(this.color));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight, " lbs"));
        console.log("Top Speed: ".concat(this.topSpeed, " mph"));
        console.log("Wheel 1: ".concat(this.wheels[0].getDiameter, " inch with a ").concat(this.wheels[0].getTireBrand, " tire"));
        console.log("Wheel 2: ".concat(this.wheels[1].getDiameter, " inch with a ").concat(this.wheels[1].getTireBrand, " tire"));
    };
    return Motorbike;
}(Vehicle_js_1.default));
// TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
// TODO: Create a constructor that accepts the properties of the Motorbike class
// TODO: The constructor should call the constructor of the parent class, Vehicle
// TODO: The constructor should initialize the properties of the Motorbike class
// TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
// TODO: Implement the wheelie method
// TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
// TODO: Override the printDetails method from the Vehicle class
// TODO: The method should call the printDetails method of the parent class
// Call the printDetails method of the parent class, Vehicle
// TODO: The method should log the details of the Motorbike
// TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
// Export the Motorbike class as the default export
exports.default = Motorbike;
