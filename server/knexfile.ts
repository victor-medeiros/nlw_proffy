import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'victor',
        password: 'victor123',
        database: 'proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};