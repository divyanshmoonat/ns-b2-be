const os = require("node:os");
const fs = require("node:fs");
const events = require("node:events");
const http = require("node:http");

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

// HTTP Module
http
  .createServer(() => {
    console.log("SERVER IS UP AND RUNNING", os.cpus()[0].model);
  })
  .listen(8080);
