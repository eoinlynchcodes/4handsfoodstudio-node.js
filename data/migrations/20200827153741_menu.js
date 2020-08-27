
exports.up = function(knex) {
  knex.schema.createTable("menu", table => {
      table.increments("id").primary();
      table.text("description");
      table.text("price");
      table.text("menuItems");
      table.text("collectionDetails");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu');
};
