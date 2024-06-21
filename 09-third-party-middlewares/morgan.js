const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();

app.use(morgan('short'));

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world');
});

http.createServer(app).listen(3000);
