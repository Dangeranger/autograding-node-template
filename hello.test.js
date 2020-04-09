const hello = require('./hello').hello;
const goodbye = require('./hello').goodbye;

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello world!");
});

test('outputs the correct string', () => {
  expect(goodbye()).toBe("Goodbye human!");
});
