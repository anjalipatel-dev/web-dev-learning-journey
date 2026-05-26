fs = require("fs");
os = require("os");
path = require("path");
eventEmitter = require("events");

class Logger extends eventEmitter {
  log(message) {
    const logMessage = `${new Date().toISOString()} - ${message}`;
    console.log(logMessage);
    this.emit("message", logMessage);
  }
}

const logger = new Logger();
logFile = './logs.txt';
const logToFile = (event) => {
  fs.appendFile(logFile, event + os.EOL, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};
logger.on("message", logToFile);

let freeMemory = "The free memory is " + (os.freemem()/os.totalmem()*100).toFixed(2) + "%";
setInterval(() => {
  logger.log(freeMemory);
}, 5000);
