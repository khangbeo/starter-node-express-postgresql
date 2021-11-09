// requires the suppliers seed data and stores it
const suppliers = require('../fixtures/suppliers')
exports.seed = function(knex) {
  // knex.raw() uses SQL statement RESTART IDENTITY to reset primary key values
  // CASCADE delete any references to the entries in suppliers table
    // when the entries are deleted
  // truncate() method is preferable to writing raw SQL
    // but it doesn't have a way to reset the primary key values
    // after entries are deleted from the table
  return knex
    .raw('TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE')
    .then(function () {
      // this line will only run when knex.raw() is complete
      return knex('suppliers').insert(suppliers)
    })
};
