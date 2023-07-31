const { createLogger, format, transports } = require("winston");

const transportsArray = [
  new transports.Console(),
  new transports.File({
    dirname: __dirname, // Current directory/folder
    filename: "user.log",
  }),
];

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: transportsArray,
});

module.exports = logger;
