const os = require("os");

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.totalmem() - os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.uptime());
console.log(os.release());
