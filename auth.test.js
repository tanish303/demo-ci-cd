const login = require('./auth');

test('valid login', () => {
  expect(login("admin", "1234")).toBe("Login successful");
});

test('invalid login', () => {
  expect(login("user", "wrong")).toBe("Login failed");
});

test('empty input', () => {
  expect(login("", "")).toBe("Invalid input");
});