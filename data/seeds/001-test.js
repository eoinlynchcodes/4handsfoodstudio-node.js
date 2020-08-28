
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        { 
          id: 1,
          items: 'Apples, Oats, Kombucha', 
          price: '24',
          howToOrder: 'Email Us',
          pickUpPoints: 'Collect from Nuts N \' Grains in Mullingar at 5:30pm.'
        },
      ]);
    });
};