// IMPORT EXPRESS PACKAGE
const express = require("express");
const logger = require("morgan")

// DEFINE VARIABLES
const server = express(); // SERVER
const parser = express.json(); // BUILT-IN MIDDLEWARE FUNCTION; PARSES INCOMING REQUESTS WITH JSON PAYLOADS


// APPLY GLOBAL MIDDLEWARE
server.use(parser, logger("dev"));

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello, from Express!');
});

module.exports = server;
