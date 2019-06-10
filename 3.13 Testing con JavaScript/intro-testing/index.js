// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

//  ej3

function paddingLeft(initial, lengthFinal, padding = '') {
  if (initial.length >= lengthFinal) {
    return initial;
  } else {
    let newString = '';
    for (let i = 0; i < lengthFinal - initial.length; i++) {
      newString += padding.charAt(0);
    }
    return `${newString}${initial}`;
  }
}

module.exports = paddingLeft;

console.log(paddingLeft('hola', 10, 'x'));
