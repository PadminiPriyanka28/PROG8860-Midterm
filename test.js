// Example test file (test.js) -  using Jest as an example, adapt as needed

const sum = require('./your-app-file'); // Path to your application code

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

// test('This test should fail', () => {
//   expect(sum(2, 2)).toBe(5); // Intentionally failing test
// });

test('adds large numbers', () => {
  expect(sum(1000, 2000)).toBe(3000);
});