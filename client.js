const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.68", // IP address here, in string
    port: "50541" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // prints a message once successfully connected
  // Names my snek JD
  conn.on("connect", () => {
    console.log("You're connected!");
    conn.write("Name: JD");
    //setInterval(() => conn.write("Move: up"), 50)
  });

  
  // console logs server responses for client
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect