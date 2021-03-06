var SlackBot = require('slackbots');

var bot = new SlackBot({
    token: process.env.SWIFTY_BOT_TOKEN,
    name: process.env.SWIFTY_BOT_NAME
});

var Swifty = {
  postToChannel: function(channelName, message) {
    bot.postMessageToChannel(channelName, message);
  },
  postToUser: function(userName, message) {
    bot.postMessageToUser(userName, message, {link_names: '1'});
  }
};

module.exports = Swifty;
