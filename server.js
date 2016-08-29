require('dotenv').config();
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var SlackBot = require('slackbots');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var bot = new SlackBot({
    token: process.env.SWIFTY_BOT_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: process.env.SWIFTY_BOT_NAME
});

app.post('/', function(req,res) {
  console.log(req.body.text) //keyword, initiator, partner
  bot.postMessageToChannel('swiftly', "hello!")
  res.send({status: "ok"});
})

app.post('/feedback', function(req,res) {
  console.log(req.query);
  // this is admittedly gross, but...
  var pairPartner = req.query.text.split("@")[1].split(" ")[0];
  var pairInitiater = req.query.user_name;
  console.log(pairPartner, pairInitiater);
  bot.postMessageToUser(pairPartner,  pairInitiater + " said they were pairing with you! Have fun!");
  bot.postMessageToUser(pairInitiater, "your pairing session has been logged. Be cool to " + pairPartner);
});

var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
});
