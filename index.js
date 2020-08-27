require('dotenv').config();

const express = require('express'); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

const PORT = process.env.PORT || 3333

// watch for connections on port 5000
server.listen(PORT, () =>
  console.log(`The server runs on Port #${PORT}`)
);
