// requires the Knex instance
const knex = require('../db/connection')

// declares list function, builds a query that selects all columns
function list() {
    return knex('categories').select('*')
}

module.exports = {
    list,
}