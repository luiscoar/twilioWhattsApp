'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

/*routes importaciones*/
var message_routes = require('./api/message-struct/message-route');


/*core settings*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

/*routing*/
app.use('/api/message/', message_routes);

module.exports = app;