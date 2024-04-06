#!/usr/bin/node
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Custom behavior for casting to a number
  valueOf() {
    return this._size;
  }

  // Custom behavior for casting to a string
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
