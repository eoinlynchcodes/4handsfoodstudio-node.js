const db = require('../data/db');

module.exports = {
    getMenu,
    addMenu
} 

function getMenu(){
    return db('menu');
}

async function addMenu(menuItem){
    await db('menu')
    .insert(menuItem, 'id')
    return db('menu');
}