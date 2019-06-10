class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return 4 * this.side;
  }

  area() {
    return this.side * this.side;
  }
}

const SquareOne = new Square(1);
const SquareSeven = new Square(7);
const SquareThree = new Square(3);

console.log(SquareOne.perimeter());
console.log(SquareOne.area());

console.log(SquareThree.perimeter());
console.log(SquareThree.area());

console.log(SquareSeven.perimeter());
console.log(SquareSeven.area());
