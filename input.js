// Stores the active TCP connection object.
let connection;
const { message } = require("./constants");

const handleUserInput = function (event) {
  if (event === "\u0003") {
    process.exit();
  }
  else if (event === "w") {
    connection.write("Move: up");
  }
  else if (event === "s") {
    connection.write("Move: down");
  }
  else if (event === "a") {
    connection.write("Move: left");
  }
  else if (event === "d") {
    connection.write("Move: right");
  }
  else if (message[event]) {
    connection.write(message);
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput: setupInput };
