const connect = require("./client");
const setupInput = require("./input");

// connects to the server via client.js
// initializes std input
console.log("Connecting ...");
connect();
setupInput();