
exports.up = function (knex, Promise) {
  return knex.schema.createTable('kanban_cards', table => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('body', 1024).notNullable();
    table.integer('priority_id').references('id').inTable('priorities').notNullable();
    table.integer('status_id').references('id').inTable('statuses').notNullable();
    table.integer('created_by').references('id').inTable('users').notNullable();
    table.integer('assigned_to').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('kanban');
};
