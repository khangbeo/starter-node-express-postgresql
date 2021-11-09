exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('product_id').primary() // sets product_id as the primary key
    table.string('product_sku')
    table.string('product_name')
    table.text('product_description')
    table.integer('product_quantity_in_stock')
    table.decimal('product_weight_in_lbs')
    // unsigned chained to table.integer prevent negative values from being inserted
    // notNullable means supplier_id can't be null
    table.integer('supplier_id').unsigned().notNullable() // create a foreign key called supplier_id
    // onDelete means if a supplier is deleted, then all
    // products related to the supplier will be deleted
    // from the database
    table
      .foreign('supplier_id')
      .references('supplier_id')
      .inTable('suppliers')
      .onDelete('cascade')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
