#!/usr/bin/node
const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define cloneCar method using symbol
    this[cloneCarSymbol] = () =>
      return new this.constructor(this._brand, this._motor, this._color);
  };

  cloneCar() {
    // Call cloneCar method using symbol
    return this[cloneCarSymbol]();
  }
}

export default Car;
