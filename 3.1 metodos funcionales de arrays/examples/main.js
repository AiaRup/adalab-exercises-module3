'use strict';

//  Map
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames = names.map(name => name.toUpperCase());

console.log(capitalNames);

//  filter
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter(name => name.length > 5);

console.log(longNames);

//  reduce
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

const result = scores.reduce((acc, number) => acc + number, 0);

console.log(result);

// few in one line
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names
  .filter(name => name.length > 5)
  .map(name => name.toUpperCase());

console.log(longNames);

// find
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longName = names.find(name => name.length > 5);

console.log(longName);

//  find Index
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const index = names.findIndex(name => name.length > 5);

console.log(index);

// sort
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

names.sort();
console.log(names);

const times = [56, 9, 45, 28, 35];

times.sort((a, b) => a - b);
console.log(times);
