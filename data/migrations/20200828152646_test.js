
exports.up = function(knex) {
    return knex.schema.createTable('menu', table => {
        table.increments('id').primary();
        table.text('starterTitle');
        table.text('starter');
        table.text('mainTitle');
        table.text('main');
        table.text('dessertTitle');
        table.text('dessert');
        table.text('otherTitle');
        table.text('other');
        table.text('additionalInformation');
        table.text('price');
        table.text('howToOrder');
        table.text('pickUpPoints');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu');
};
