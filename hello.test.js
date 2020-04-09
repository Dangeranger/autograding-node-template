const hello = require('./hello').hello;
const goodbye = require('./hello').goodbye;

test('function hello - outputs "Hello world!"', () => {
  expect(hello()).toBe("Hello world!");
});

test('function goodbye - outputs "Goodbye human!"', () => {
  expect(goodbye()).toBe("Goodbye human!");
});
