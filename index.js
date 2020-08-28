require('dotenv').config();

const app = require('./api/server')

const PORT = process.env.PORT || 3333

// watch for connections on port 5000
app.listen(PORT, () =>
  console.log(`The server runs on Port #${PORT}`)
);
