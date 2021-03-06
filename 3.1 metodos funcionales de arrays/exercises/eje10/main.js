'use strict';

const pin = 5232;

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

//  a
const userFound = users.find(user => user.pin === pin);

console.log(userFound);

// b
const indexUser = users.findIndex(user => user.pin === pin);

users.splice(indexUser, 1);

console.log(users);
