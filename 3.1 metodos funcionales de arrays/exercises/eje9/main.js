'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const filterStudents = runner => runner.student === true;

const findWinner = (winner, runner) => {
  if (winner.time > runner.time) {
    return runner;
  } else {
    return winner;
  }
};

const winner = runners.filter(filterStudents).reduce(findWinner);

console.log(winner.name);
