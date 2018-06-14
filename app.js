var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var lineReader = require('line-reader');
var index = require('./app_server/routes/index');
var app = express();

//View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');


app.use(session( {secret: "String for encrypting cookies.",
	cookie: {secure : false},
duration: 30 * 60 * 1000,
 } ));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;
app.listen(3000);