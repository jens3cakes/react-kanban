
exports.up = function(knex, Promise) {
  return knex.schema.createTable('statuses', table =>{
    table.increment('id');
    table.string('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('statuses');
};
