
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        { 
          id: 1,
          starterTitle: 'Take-away 20e',
          starter: 'Carmelised pork shoulder, Sourdough raisin bun, Confit onion dressing, Yellow pea humus, Coleslaw Salad', 
          mainTitle: 'Cheese and Crackers 8e',
          main: 'A generous portion of organic cheddar cheese, favorite of ours. Seeded sourdough crackers with a pot of red berry jelly.',
          dessertTitle: '',
          dessert: '',
          other: 'Vegetarian and vegan options are available. Please Contact Us about it.',
          price: '24',
          howToOrder: 'Email Us',
          pickUpPoints: 'Collect from Nuts N \' Grains in Mullingar at 5:30pm.'
        },
      ]);
    });
};