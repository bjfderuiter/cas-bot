/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var bot = require('./bot').bot;
var connector = require('./bot').connector;
var recognizer = require('./bot').recognizer

// Dialog inlcudes
require('./dialogs/welkomtekst');
require('./dialogs/computeDialog');

var algemene_hulp = require('./dialogs/algemenehulp')
var product_vraag = require('./dialogs/productVraag')
var bedankt = require('./dialogs/bedankt');


// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});


// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var intents = new builder.IntentDialog({ recognizers: [recognizer] })
/*
.matches('<yourIntent>')... See details at http://docs.botframework.com/builder/node/guides/understanding-natural-language/
*/
.matches('hulp_vraag', [algemene_hulp] )
.matches('Bedankt', [bedankt])
.matches('product_vraag', product_vraag)
.onDefault((session) => {
    session.send('Op dit moment begrijp ik al heel veel. Hellaas weet ik niet wat je bedoelt met \'%s\'.', session.message.text)
})


bot.dialog('/', intents);


