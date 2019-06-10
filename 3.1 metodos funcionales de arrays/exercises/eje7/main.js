'use strict';

const times = [56, 9, 45, 28, 35];

const findTotal = (acc, time) => {
  return acc + time;
};
const sum = times.reduce(findTotal);
// const sum = times.reduce((acc, time) => acc + time);
const average = sum / times.length;

console.log(sum);
console.log(average);
