const connect = require("./client");
const setupInput = require("./input");

// connects to the server via client.js, passes return val to setupInput
// initializes std input
console.log("Connecting ...");
setupInput(connect());