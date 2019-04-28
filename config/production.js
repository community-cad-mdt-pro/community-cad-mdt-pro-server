import {secrets} from './secrets';

module.exports = {
    db: secrets.development.db,
    dbHost: secrets.production.dbHost,
    dbUser: secrets.production.dbUser,
    dbPassword: secrets.production.dbPassword,
    host: secrets.production.host,
    port: secrets.production.port
};