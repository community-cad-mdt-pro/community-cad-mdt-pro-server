# Community CAD/MDT Pro - Server
This is the `NodeJS` back-end server for [Community CAD/MDT Pro](https://github.com/community-cad-mdt-pro/community-cad-mdt-pro-client). The client is required for the UI.

## Requirements
Requires `Node >= 8`

## Installation

     $ npm ci

## Running Locally
This project is the `server` for the `Community CAD/MDT Pro`.

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
