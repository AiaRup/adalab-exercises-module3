'use strict';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const Megan = new Person('Megan', 'Edwards');
const Aia = new Person('Aia', 'Rupsom');

console.log(Megan.fullName);
console.log(Aia.fullName);
