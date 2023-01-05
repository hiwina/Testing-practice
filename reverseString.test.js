const reverseString = require('./reverseString.js');
test('check the reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });