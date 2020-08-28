const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    res.send("Hello from server.js");
});

module.exports = server;