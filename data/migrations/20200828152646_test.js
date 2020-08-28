
exports.up = function(knex) {
    return knex.schema.createTable('menu', table => {
        table.increments('id').primary();
        table.text('items');
        table.text('price');
        table.text('howToOrder');
        table.text('pickUpPoints');
        table.text('other');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu');
};
