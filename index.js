require('dotenv').config();

const app = require('./api/server')

const PORT = process.env.PORT || 3333

// console.log(process.env.DATABASE_URL);

// watch for connections on port 5000
app.listen(PORT, () =>
  console.log(`The server runs on Port #${PORT}`)
);
