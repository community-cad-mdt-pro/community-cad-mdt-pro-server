import * as upash from 'upash';
upash.install('pbkdf2', require('@phc/pbkdf2'));
import {processQuery} from '../database/mysql';

async function createPassword(password) {
    return await upash.use('pbkdf2').hash(password);
}

async function verifyPassword(hash, password) {
    if (!hash) {
        return false;
    }

    return await upash.verify(hash.password, password);
}

export async function validateCredentials(email, password) {
    const data = await processQuery('SELECT * FROM `users` WHERE `email` = ?', [email]);

    if (await verifyPassword(data[0], password)) {
        return data;
    }

    return false;
}
