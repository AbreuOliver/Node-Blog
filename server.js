// IMPORT EXPRESS PACKAGE
const express = require('express');


// CREATE THE SERVER
const server = express();

// APPLY MIDDLEWARE
server.use(express.json());

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello, from Express!');
});

module.exports = server;
