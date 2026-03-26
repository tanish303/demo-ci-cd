function login(username, password) {
  if (!username || !password) {
    return "Invalid input";
  }

  if (username === "admin" && password === "1234") {
    return "Login successful";
  }

  return "Login failed";
}

module.exports = login;