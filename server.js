require('dotenv').config();
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var controllers = require('./app/controllers/index');
var Swifty = require('./app/services/swifty');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.post('/pairs/', controllers.pairs.index)

app.post('/pairs/create', controllers.pairs.create);

app.post('/feedback', controllers.feedbacks.create);

var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
});
