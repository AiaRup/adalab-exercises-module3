'use strict';

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log('Woof, woof!');
  }
  reactToCall(shout) {
    if (shout.includes(this.name)) {
      console.log(`${this.name} wags its tail, happily.`);
    } else {
      this.bark();
    }
  }
}

const laika = new Dog('Laika');
const hachiko = new Dog('hachiko');

laika.bark(); // Woof, woof!
hachiko.bark(); // Woof, woof!

hachiko.waitForOwner = () => {
  console.log('Hachiko is waiting.');
};

hachiko.waitForOwner(); // Hachiko is waiting.
laika.waitForOwner(); // TypeError: laika.waitForOwner no es una función

laika.reactToCall('Hey, Laika!'); // 'Laika wags its tail, happily.'
laika.reactToCall('Hey, Hachiko!'); // 'Woof, woof!'

// declare a method with the same name only for 1 instance
hachiko.bark = () => {
  console.log('Wan, wan!'); // Hachiko barks in Japanese
};

// extends

class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 4);
    this.owner = owner;
  }

  bark() {
    console.log('Woof, woof!');
  }
}

const hachiko = new Dog('Hachiko', 'Eisaburō Ueno');

hachiko.bark(); // 'Woof, woof!'
console.log(`${hachiko.name} has ${hachiko.legs} legs.`); // 'Hachiko has 4 legs.'
console.log(hachiko.owner);

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof, woof!');
  }
}

class JapaneseDog extends Dog {
  bark() {
    console.log('Wan, wan!');
  }
}

class RussianDog extends Dog {
  bark() {
    console.log('Gav, gav!');
  }
}

const laika = new RussianDog('Laika');
const hachiko = new JapaneseDog('Hachiko');

// Every dog barks in its own language
hachiko.bark(); // Wan, wan!
laika.bark(); // 'Gav, gav!'

// Regular dogs bark as usual in English
const leo = new Dog('Leo');
leo.bark(); // 'Woof, woof!'

/**********  Modules ********//
export const aConstant = 'constant';

export function aFunction() {
  /* function body */
}
const aConstant = 'constant';

function aFunction() {
  /* function body */
}

export { aConstant, aFunction };
export default function() {
  /* function body */
}
export default aFunction;

import { aConstant } from './module.js';

console.log(aConstant); // 'constant'
import { aConstant, aFunction } from './module.js';

aFunction(); // do things as declared in module.js
console.log(aConstant); // 'constant'

import { aFunction as functionFromModule } from './module.js';

functionFromModule(); // do things as declared in module.js

import { aConstant, aFunction as functionFromModule } from './module.js';

functionFromModule(); // do things as declared in module.js
console.log(aConstant); // 'constant'

import {
  aConstant as constantFromModule,
  aFunction as functionFromModule,
} from './module.js';

functionFromModule(); // do things as declared in module.js
console.log(constantFromModule); // 'constant'

import * as module from './module.js';

module.aFunction(); // do things as declared in module.js
console.log(module.aConstant); // 'constant'

<script type="module" src="route/to/module.js"></script>


// BONUS: getters y setters
class Dog {
  constructor(name) {
    this.name = name;
    this.barkingSound = 'Woof';
  }

  get barking() {
    return `${this.barkingSound}, ${this.barkingSound.toLowerCase()}!`;
  }

  bark() {
    console.log(this.barking); // accedemos como si fuera un atributo
  }
}

const leo = new Dog('Leo');
leo.bark(); // 'Woof, woof!'

class Dog {
  constructor(name) {
    this._name = name; // Atributo interno
    this.happiness = 100;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.lowerHappinessBy(75);
  }

  lowerHappinessBy(quantity) {
    if (this.happiness > quantity) {
      this.happiness -= quantity;
    } else {
      this.happiness = 0;
    }
  }

  printHappiness() {
    console.log(`${this.name} is ${this.happiness}% happy.`);
  }
}

const hachiko = new Dog('Hachiko');
hachiko.printHappiness(); // 'Hachiko is 100% happy.'

hachiko.name = 'Little Paws';
hachiko.printHappiness(); // 'Little Paws is 25% happy.'