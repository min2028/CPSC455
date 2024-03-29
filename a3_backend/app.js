var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser')

// Don't forget to require the database config file YOU POTATO.
//----------------------------------------//
require('./config/database');

var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');

var app = express();

// create application/json parser
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', itemsRouter);

module.exports = app;
