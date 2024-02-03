const http = require('node:http');

let hitCount = 0;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  hitCount++;    
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: `${hitCount} goat${hitCount === 1 ? "" : "s"} ${hitCount === 1 ? "has" : "have"} visited this page.`,
  }));
  console.log(`hitCount is currently ${hitCount}.`);
});

server.listen(1414);
