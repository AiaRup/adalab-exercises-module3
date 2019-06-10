'use strict';
//  exercise 1
class Square {
  perimeter(side) {
    return 4 * side;
  }

  area(side) {
    return side * side;
  }
}

const MySquare = new Square();
console.log(MySquare.perimeter(9));
console.log(MySquare.area(9));

 exercise 2
