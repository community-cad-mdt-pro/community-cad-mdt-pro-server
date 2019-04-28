import * as mysql from 'mysql2/promise';
import config from 'config';

async function createConnection() {
    return await mysql.createConnection({
        host: config.dbHost,
        user: config.dbUser,
        database: config.db,
        password: config.dbPassword
    });
}

export async function processQuery(query, values) {
    const connection = await createConnection();

    const [rows] = await connection.execute(query, values);

    return rows;
}
