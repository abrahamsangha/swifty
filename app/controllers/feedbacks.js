var FeedbacksController = {};

FeedbacksController.create = function (req, res) {
  var pairPartner = req.body.text.split("@")[1].split(" ")[0];
  var pairInitiater = req.body.user_name;
  var feedback = req.body.text;
  bot.postMessageToUser(pairPartner,  pairInitiater + " left you this feedback: " + feedback);
  res.send({
    status: "ok",
    text: "your feedback to " + pairPartner + "has been sent"
  });
}

module.exports = FeedbacksController;
