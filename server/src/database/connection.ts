import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'victor',
        password: 'victor123',
        database: 'proffy'
    },
    useNullAsDefault: true
});

export default db;