// handle the proactive initiated dialog
var bot = require('../bot').bot;
var builder = require("botbuilder");


bot.on('conversationUpdate', function(message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function(identity) {
            if (identity.id === message.address.bot.id) {
                bot.beginDialog(message.address, '/begin');
            }
        });
    }
});

bot.dialog('/begin',
    function(session, args) {
        session.send("Hallo, mijn naam is CASbot.");
        session.send("Waarmee kan ik u van dienst zijn?");
        session.endDialog();
    });