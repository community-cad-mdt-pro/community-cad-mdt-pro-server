import '@babel/polyfill';
import * as Hapi from 'hapi';
import config from 'config';
import * as Users from './controllers/users';

const server = new Hapi.Server({
    port: 9998,
    host: config.host,
    'routes': {
        'cors': true
    }
});

const registerRoutes = () => {
    server.route({
        method: 'POST',
        path: '/user/validate',
        options: {
            handler: Users.validateLogin
        }
    });

};

const init = async() => {
    registerRoutes();

    await server.start();
    return server;

};

init().then(server => {
    console.log('Server running at: ', server.info.uri);
}).catch(err => {
    console.log(err);
});