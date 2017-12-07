
var builder = require('botbuilder');

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata
});

// Create your bot with a function to receive messages from the user
var Bot = new builder.UniversalBot(connector);

// Make sure you add code to validate these fields
var luisAppId = process.env.LuisAppId;
var luisAPIKey = process.env.LuisAPIKey;
var luisAPIHostName = process.env.LuisAPIHostName || 'westeurope.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey + "&verbose=true&timezoneOffset=0";

// Main dialog with LUIS
var recognizer = new builder.LuisRecognizer(LuisModelUrl);

module.exports = {
    bot: Bot,
    connector: connector,
    recognizer: recognizer,
    LuisModelUrl: LuisModelUrl
}