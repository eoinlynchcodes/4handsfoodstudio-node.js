const db = require('../data/db');

module.exports = {
    getMenu,
} 

function getMenu(){
    return db('menu');
}