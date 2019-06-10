'use strict';

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

  get base() {
    return super.base;
  }

  set base(newBase) {
    super.base = newBase;
  }

  set height(newHeight) {
    super.height = newHeight;
  }
}

const MySquare = new Square(7);
const inicialArea = MySquare.area();

MySquare.base = 47;
MySquare.height = 47;
const changedArea = MySquare.area();

console.log('inicialArea', inicialArea);
console.log('changedArea', changedArea);
