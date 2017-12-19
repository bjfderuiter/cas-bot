/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var cognitiveservices = require('botbuilder-cognitiveservices');

var bot = require('./bot').bot;
var connector = require('./bot').connector;
var recognizer = require('./bot').recognizer


// Dialog inlcudes
require('./dialogs/welkomtekst');
require('./dialogs/computeDialog');
require('./dialogs/cloudkans');

var algemene_hulp = require('./dialogs/algemenehulp')
var product_vraag = require('./dialogs/productVraag')
var bedankt = require('./dialogs/bedankt');
var hoegaathet = require('./dialogs/hoegaathet')


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
var qnarecognizer = new cognitiveservices.QnAMakerRecognizer({
    knowledgeBaseId: '2543a0bf-db9e-471d-8a9a-b53c5304536f',
    subscriptionKey: ' 56523e8df6ac4c0093c4d4d35d1dada4',
    top: 4
});

var intents = new builder.IntentDialog({ recognizers: [recognizer, qnarecognizer] })
/*
.matches('<yourIntent>')... See details at http://docs.botframework.com/builder/node/guides/understanding-natural-language/
*/
        .matches('hulp_vraag', [algemene_hulp] )
        .matches('Bedankt', [bedankt])
        .matches('product_vraag', product_vraag)
        .matches('meer_vraag', product_vraag)
        .matches('cloudkans_vraag', [ function(session, args){
            session.send("De cloud biedt een groot aantal interessante kansen. Zowel voor u als voor uw klanten. Dit zijn de belangrijkste redenen om de cloud in uw business model op te nemen:")
            session.send("Klantbehoud: door de maandelijks terugkerende cloud omzet kunt u zich richten op het leveren van service en toegevoegde waarde aan uw klanten ")
            session.send("Acquisitie van nieuwe klanten: U kunt eenvoudig cloud diensten aan- en uitzetten, zodat u potentiële klanten kennis kunt laten maken met specifieke cloud oplossingen ");
            session.send('Grootzakelijke marktoplossingen’ voor MKB klanten ');
            session.send('Minder infra, meer functionaliteit en meer focus op de core business van uw klant en de klanten van uw klant.');
            session.send('Van projecten naar een continu proces van innovatie.');
            session.send('Geen grote investeringen maar operationele kosten ');
            session.send('Hoogwaardige beveiliging en databescherming');
            session.send('Centralisatie van beheer en beveiliging');

        }])
        .matches('HoeGaatHet', hoegaathet)
        .matches('klant_identificeren'[function(session, args){
            session.send('Hoewel de overstap naar de cloud voor vrijwel iedereen mogelijk is, zijn er bepaalde klanten waarvoor Microsoft Azure of Copaco Hyper-V Cloud extra relevant zijn. Denk hierbij aan klanten: ');
            session.send("Met seizoenwerk of een piekbelasting zoals videostreams, een webwinkel of een RDS (Denk aan webshops rond de feestdagen of ticketverkoop rondom evenementen) ");
            session.send("Die de bestaande servers willen vervangen of uitbreiden");
            session.send("Met voornamelijk kortlopende projecten");
            session.send("Die niet kunnen of willen investeren maar wel capaciteit nodig hebben");
            session.send("Met een BYOD omgeving ");
            session.send("Met behoefte aan een back-up en/of disaster recovery scenario");
        }])
        .onDefault((session) => {
    session.send('Op dit moment begrijp ik al heel veel. Hellaas weet ik niet wat je bedoelt met \'%s\'.', session.message.text)
})


bot.dialog('/', intents);


