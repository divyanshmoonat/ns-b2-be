const os = require("node:os");
const fs = require("node:fs");

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

// CREATE OPERATION
// fs.writeFile(filePath,fileContent,callbackFn);
// fs.writeFile(
//   "sample.txt",
//   "Hi There!",
//   (error) => {
//     if (error) {
//       console.log(error);
//     }
//   }
// );


const updateFile = () => {
    // UPDATE/EDIT OPERATION
    const msg = new Date().toLocaleString() + " User changed settings \n";
    // fs.appendFile("sample.txt", msg, (error) => {
    //   if (error) {
    //     console.log(error);
    //   }
    // });
    fs.appendFileSync("sample.txt",msg);
}

// updateFile();
