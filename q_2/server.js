const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === "/gethello" && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello NodeJS!!");
  } else if (req.url === "/hello.html" && req.method === 'GET') {
    fs.readFile("hello.html", (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Error reading the file");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 Page1 Not Found");
  }
});

const port = 9000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
