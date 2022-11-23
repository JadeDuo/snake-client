const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // edit in constants.js
    port: PORT // edit in constants.js
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // prints a message once successfully connected
  // Names my snek JD
  conn.on("connect", () => {
    console.log("You're connected!");
    conn.write("Name: JD");
  });

  
  // console logs server responses for client
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;