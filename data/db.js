const knex = require('knex');

const knexfile = require('../knexfile');

//  THIS WAS THE ORIGINAL WAY
// const env = process.env.NODE_ENV || 'development';
// const configOptions = knexfile[env];

// module.exports = knex(configOptions);


const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexfile[dbEnv]);