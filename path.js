const path = require("path");
const a = path.extname("c:\\temp\\foldername\\myfile.txt ");
const b = path.basename("c:\\temp\\foldername\\myfile.txt ");
const c = path.basename("c:/temp/foldername/myfile.txt ");
console.log(a);
console.log(b);
console.log(c);
