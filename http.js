// const http = require("http");

// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     res.end("<h1>Hello </h1>");
//   })
//   .listen(3200);

//part2
const http = require("http");
port = 3200;
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("<h1>Home Page </h1>");
  } else if (req.url == "/demofile") {
    fs.readFile("demo.html", "utf-8", (err, data) => {
      res.end(data);
    });
  } else {
    res.end("<h1>No Page Found</h1>");
  }
});
server.listen(port, () => {
  console.log(`serve is listen on port ${port}`);
});
