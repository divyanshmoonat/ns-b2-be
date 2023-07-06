const os = require("node:os"); // CJS
const fs = require("node:fs");
const events = require("node:events");
const http = require("node:http");

const functions = require("./module.js");

// const functions = require("divtestcalc");

const sum = functions.add(5, 7);
console.log(sum);

const difference = functions.subtract(20, 2);
console.log(difference);

// console.log(os.arch());
// console.log("A", os.EOL, "B");
// console.log("CORES AVAILALBE IN THIS CPU", os.cpus()[1].speed);

// const cpus = os.cpus();
// for (let i = 0; i < cpus.length - 1; i++) {
//   const core = cpus[i];
//   console.log("SPEED OF CORE ", i + 1, " = ", core.speed);
// }
//
// console.clear();
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());

// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.uptime() / 3600);
// console.log(os.userInfo());
// console.log(os.constants);
// console.clear();

const fileName = "sample.txt";
// CREATE OPERATION
const writeFile = () => {
  // fs.writeFile(filePath,fileContent,callbackFn);
  fs.writeFile(fileName, "Hi There!", (error) => {
    if (error) {
      console.log(error);
    }
  });
};

const updateFile = () => {
  // UPDATE/EDIT OPERATION
  const msg = new Date().toLocaleString() + " User changed settings \n";
  // fs.appendFile("sample.txt", msg, (error) => {
  //   if (error) {
  //     console.log(error);
  //   }
  // });
  fs.appendFileSync(fileName, msg);
};

// updateFile();

const readFile = () => {
  fs.readFile(fileName, (error, data) => {
    if (error) {
      console.log("ERROR WHILE READING THE FILE", error);
      return;
    }
    console.log("FILE_CONTENT", data.toString());
  });
};

// readFile();

const deleteFile = () => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log("ERROR WHILE DELETING FILE", err);
      return;
    }
    console.log("FILE", fileName, "DELETED SUCCESSFULLY");
  });
};

// deleteFile();

const createFolder = () => {
  fs.mkdir("logs", (err) => {
    if (err) {
      console.log("ERROR CREATING FOLDER");
      return;
    }
    console.log("FOLDER CREATED SUCCESSFULLY");
  });
};

// createFolder();

const folderExists = () => {
  const exists = fs.existsSync("abcd");
  console.log(exists);
};

// folderExists();

// Events Module
const myEmitter = new events.EventEmitter();
const SIGNAL_CHANGE = "SIGNAL_CHANGE";

// Listen to the event (Event Listener)
myEmitter.on(SIGNAL_CHANGE, (signalColor) => {
  const msg =
    new Date().toLocaleString() + ": SIGNAL CHANGED TO " + signalColor + os.EOL;
  fs.appendFile("signal.log", msg, (err) => {
    if (err) {
      console.log("ERROR WHILE WRITING LOG", err);
      return;
    }
  });
});

const signalColors = ["GREEN", "YELLOW", "RED"];

let counter = 0;
// Emit an event (Event Emitter)
// setInterval(() => {
//   const index = counter % 3;
//   counter++;
//   //   console.log(signalColors[index]);
//   myEmitter.emit(SIGNAL_CHANGE, signalColors[index]);
// }, 30_000);

// Sample JSON data
const todos = [
  { id: 1, title: "lomre ipsum", completed: true },
  { id: 2, title: "lomre ipsum1", completed: true },
  { id: 3, title: "lomre ipsum2", completed: false },
  { id: 4, title: "lomre ipsum3", completed: false },
  { id: 5, title: "lomre ipsum4", completed: true },
  { id: 6, title: "lomre ipsum5", completed: true },
  { id: 7, title: "lomre ipsum6", completed: false },
];

const todosString = JSON.stringify(todos);

// API ROUTE
const server = (req, res) => {
  console.log("URL", req.method);
  if (req.url === "/todos") {
    // Endpoint
    if (req.method === "GET") {
      // res.write("To do list will appear here, this is a GET request");
      res.end(todosString);
    } else if (req.method === "POST") {
      res.write("This route will be used to create a new ToDo");
    }
  } else if (req.url === "/posts") {
    res.write("Posts list will appear here");
  } else {
    res.write(`Error 404, request route ${req.url} not found`);
  }
  res.end(); // Server sends the response back to the client
};

const onServerUp = () => {
  console.log("Server is up and running on port 8080");
};

// HTTP Module
// http.createServer(server).listen(8080, onServerUp);
