# opencad-react-server
OpenCAD React Server

## Installation

     $ npm ci

## Running Locally
This project is the `server` for the OpenCAD React Client.

* `npm run start`
* This will start the server on `localhost:9998`
* Your `OpenCAD React Client` should be configured to make requests to this url.

## Configuring for Production
Create a `secrets.js` file in `/config`. The server will not function without this.
```js
export const secrets = {
    development: {
        db: '<dbname>',
        dbHost: '<dbHost>',
        dbUser: '<dbUsername>',
        dbPassword: '<dbPassword>',
        host: '<serverHost>',
        port: 9999
    },
    production: {
        db: '<dbname>',
        dbHost: '<dbHost>',
        dbUser: '<dbUsername>',
        dbPassword: '<dbPassword>',
        host: '<serverHost>',
        port: 9998
    }
};
```


* `npm run build`
* `npm run serve` will start the server against the configuration provided
