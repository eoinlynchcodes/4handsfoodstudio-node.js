require('dotenv').config();
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_CHARCOAL_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
  },
};
