const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();
const router = require('express').Router();

const MenuHelpers = require('../routes/menuHelpers');

server.use(express.json());
server.use(helmet());
server.use(cors());


server.get('/menu', (req, res) => {
    MenuHelpers.getMenu()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

server.get('/', (req, res) => {
    res.send("Hello from server.js");
});

module.exports = server;