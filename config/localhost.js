import {secrets} from './secrets';

module.exports = {
    db: secrets.development.db,
    dbHost: 'localhost',
    dbUser: secrets.development.dbUser,
    dbPassword: secrets.development.dbPassword,
    host: 'localhost'
};
