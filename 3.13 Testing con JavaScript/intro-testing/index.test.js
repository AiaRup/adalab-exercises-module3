// const sum = require('./index');
const paddingLeft = require('./index');

// // ej1
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// // ej2
// describe('Sum App', () => {
//   test('returns 2 when the input is -1 and 3', () => {
//     expect(sum(-1, 3)).toBe(2);
//   });

//   test('returns 1.8 when the input is 0.2 and 1.6', () => {
//     expect(sum(0.2, 1.6)).toBe(1.8);
//   });
// });

// ej3
describe('paddingLeft App', () => {
  test('returns xxhola when the inputs is hola, the length is 6 and the letter to add is x', () => {
    expect(paddingLeft('hola', 6, 'x')).toBe('xxhola');
  });

  test('returns aahola when the inputs is hola, the length is 6 and the letter to add is a', () => {
    expect(paddingLeft('hola', 6, 'a')).toBe('aahola');
  });

  test('returns aaee when the inputs is ee, the length is 4 and the letters to add is aa', () => {
    expect(paddingLeft('ee', 4, 'aa')).toBe('aaee');
  });

  test('returns xxxxxx when the inputs is xxxx, the length is 6 and the letters to add is x', () => {
    expect(paddingLeft('xxxx', 6, 'x')).toBe('xxxxxx');
  });

  test('returns xxxxxx when the inputs is "", the length is 6 and the letter to add is x', () => {
    expect(paddingLeft('', 6, 'x')).toBe('xxxxxx');
  });

  test('returns xxxx when the inputs is xxxx, the length is 0 and the letter to add is x', () => {
    expect(paddingLeft('xxxx', 0, 'x')).toBe('xxxx');
  });
});
