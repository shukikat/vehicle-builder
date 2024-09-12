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
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        var _this = _super.call(this) || this;
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.wheels = wheels;
        _this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        return _this;
    }
    // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
    // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    // TODO: Implement the tow method from the AbleToTow interface
    Truck.prototype.tow = function (vehicle) {
        var truckMake = vehicle.make;
        var truckModel = vehicle.model;
        if (vehicle.weight <= this.towingCapacity) {
            console.log("This vehicle is being towed");
        }
        else {
            console.log("This vehicle is to heavy to be towed");
        }
        // TODO: Get the make an model of the vehicle if it exists
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        // TODO: If it is, log that the vehicle is being towed
        // TODO: If it is not, log that the vehicle is too heavy to be towed
    };
    Truck.prototype.printDetails = function () {
        // Call the printDetails method of the parent class, Vehicle
        _super.prototype.printDetails.call(this);
        // Print details of the Car class
        console.log("VIN: ".concat(this.vin));
        console.log("Color: ".concat(this.color));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight, " lbs"));
        console.log("Top Speed: ".concat(this.topSpeed, " mph"));
        console.log("Towing Capacity:".concat(this.towingCapacity, "lbs"));
        // Print details of the wheels
        console.log("Wheel 1: ".concat(this.wheels[0].getDiameter, " inch with a ").concat(this.wheels[0].getTireBrand, " tire"));
        console.log("Wheel 2: ".concat(this.wheels[1].getDiameter, " inch with a ").concat(this.wheels[1].getTireBrand, " tire"));
        console.log("Wheel 3: ".concat(this.wheels[2].getDiameter, " inch with a ").concat(this.wheels[2].getTireBrand, " tire"));
        console.log("Wheel 4: ".concat(this.wheels[3].getDiameter, " inch with a ").concat(this.wheels[3].getTireBrand, " tire"));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class as the default export
exports.default = Truck;
