'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3000';
var models = require('./models');
var cors = require('cors');

var search = require('./routes/search.route');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

//routes
app.use('/api', search);

//server
var server = app.listen(port, () => {
  console.log("Server listening on " + port)
});

module.exports = app;
