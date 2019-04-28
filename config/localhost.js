import {secrets} from './secrets';

module.exports = {
    db: secrets.development.db,
    dbHost: secrets.development.dbHost,
    dbUser: secrets.development.dbUser,
    dbPassword: secrets.development.dbPassword,
    host: secrets.development.host,
    port: secrets.development.port
};
