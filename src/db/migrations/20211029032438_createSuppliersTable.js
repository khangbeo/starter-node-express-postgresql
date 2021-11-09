// you can specify the Knex methods for making desired
// database changes, like creating tables, add/remove column
// from a table, changing indexes
// exports.up and exports.down always return a promise
exports.up = function(knex) {
    // calling knex.schema.createTable(), suppliers is passed in as the name
    // a callback function takes an argument table
        // this gives you a reference to the table
    // inside of the callback function, you specified the columns
        // that the table should have
        // calling table.string('supplier_name') creates a column
        // on the suppliers table called supplier_name
        // that accepts string values
    return knex.schema.createTable("suppliers", (table) => {
        table.increments("supplier_id").primary(); // sets supplier_id as the primary key
        table.string("supplier_name");
        table.string("supplier_address_line_1");
        table.string("supplier_address_line_2");
        table.string("supplier_city");
        table.string("supplier_state");
        table.string("supplier_zip");
        table.string("supplier_phone");
        table.string("supplier_email");
        table.text("supplier_notes");
        table.string("supplier_type_of_goods");
        // adds created_at and updated_at columns; 
        // passing true as the first argument 
        // sets the columns to be a timestamp type 
        // while passing true as the second argument 
        // sets those columns to be non-nullable 
        // and to use the current timestamp by default
        table.timestamps(true, true);
  })
};
// undo a migration as needed
// if exports.up create a table, exports.down remove a table
// it does the opposite of exports.up
exports.down = function(knex) {
    return knex.schema.dropTable("suppliers");
};