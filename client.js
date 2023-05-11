const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT,
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JAM");
    conn.write("Move: up");
    conn.write("Move: right");
    conn.write("Move: right");
  });
  conn.on("incoming data", (data) => {
    console.log("incoming data: ", data)
  });
  // conn.on("Move: up", (data) => {
  //   console.log("Move: up", data)
  // });
  // conn.on("Move: down", (data) => {
  //   setInterval((console.log("Move: down", data)),500);
  // });
  return conn;
};

  module.exports = {connect: connect,};