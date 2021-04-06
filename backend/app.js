var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
//app.use(express.json());

//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/work', workRouter);
app.use('/contact', contactRouter);

module.exports = app;
