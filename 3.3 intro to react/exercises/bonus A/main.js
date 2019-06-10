'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.base * this.numberOfSides;
  }

  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }

  area() {
    return super.area() / 2;
  }
}

const MySquare = new Square(4);

console.log('square perimeter', MySquare.perimeter());
console.log('square area', MySquare.area());

const MyTriangle = new Triangle(4, 3);

console.log('triangle perimeter', MyTriangle.perimeter());
console.log('triangle area', MyTriangle.area());
