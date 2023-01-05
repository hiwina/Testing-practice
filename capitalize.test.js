const capitalize = require('./capitalize.js');

test('capitalize the first character of the string', () => {
  expect(capitalize('hiwot')).toBe('Hiwot');
});

test('check for only string', () => {
  expect(capitalize(45)).toBe('It is not a string');
});