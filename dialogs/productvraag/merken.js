var bot = require('../../bot').bot;
var builder = require("botbuilder");
var conversation = require('./text/text_merken')

bot.dialog('merken',
    function(session, args) {
        session.send(antwoordenMerken(args.resolution.values[0]));
        session.endDialog()
    });

var antwoordenMerken = function(compute){

    entity = compute.toLowerCase()


    if(entity === 'copaco'){
        return conversation.copaco;
    }
    else if (entity === 'microsoft'){
        return conversation.microsoft;
    }
    else if (entity === 'azure'){
        return conversation.azure;
    }
    else if (entity === 'azure pack'){
        return conversation.azure_pack;
    }
    else if (entity === 'csp'){
        return conversation.csp;
    }
    else if (entity === 'cloud'){
        return conversation.cloud;
    }
    else{
        return "Hellaas heb ik geen informatie over '" + entity + "'"
    }

}

