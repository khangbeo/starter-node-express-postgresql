const knex = require("../db/connection");

// create() creates a Knex query that inserts a new supplier
// into the suppliers table while returning all columns from
// the newly inserted row
// insert() method of Knex can be used to insert more than one
// record, so it returns an array of the records inserted
// for this API, only one supplier will ever be inserted at a time
// so you chain then() onto the query to return only one inserted record
function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function read(supplier_id) {
    return knex("suppliers").select("*").where({ supplier_id }).first();
}
  
// update() can be used to update more than one record, it returns an array
// of the records updated. Only one supplier will be updated at a time for this API
// so you can chain then() onto the query to return only one record
function update(updatedSupplier) {
    return knex("suppliers")
      .select("*")
      .where({ supplier_id: updatedSupplier.supplier_id })
      .update(updatedSupplier, "*")
      .then((updatedRecords) => updatedRecords[0]);
}
  
function destroy(supplier_id) {
    return knex("suppliers").where({ supplier_id }).del();
}
  
module.exports = {
  create,
  read,
  update,
  delete: destroy
};
