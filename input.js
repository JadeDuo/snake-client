let connection;
// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  // exits the program with control + c
  if (data === '\u0003') {
    process.exit();
  }
  //moves snake up
  if (data === "\033[A" || data === "w") {
    connection.write("Move: up");
  }
  //moves snake left
  if (data === "\033[D" || data === "a") {
    connection.write("Move: left");
  }
  //moves snake down
  if (data === "\033[B" || data === "s") {
    connection.write("Move: down");
  }
  //moves snake right
  if (data === "\033[C" || data === "d") {
    connection.write("Move: right");
  }
  //says "I'm coming for that grub!"
  if (data === "h") {
    connection.write("Say: am hungry snek!");
  }
  //says "fite me!"
  if (data === "f") {
    connection.write("Say: fite me!");
  }
};

module.exports = setupInput;