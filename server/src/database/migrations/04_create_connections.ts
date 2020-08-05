import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').notNullable();

        table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        table.timestamp('created_at', { precision: 6 })
          .defaultTo(knex.fn.now(6))
          .notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}