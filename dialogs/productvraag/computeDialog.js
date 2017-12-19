var bot = require('../../bot').bot;
var LuisModelUrl = require('../../bot').LuisModelUrl;
var recognizer = require('../../bot').recognizer;
var conversation = require("./text/text_azure_producten");
var builder = require("botbuilder");


// Main dialog with LUIS
var recognizerMeerComPute = new builder.LuisRecognizer(LuisModelUrl);

var meerCompute = new builder.IntentDialog({ recognizers: [recognizer] })
    .matches('meer_vraag', [
        function (session, args){
            controleerComputeOptie(session, args);
        }
    ])
    .matches('product_vraag', [
        function (session, args){
            controleerComputeOptie(session, args);
        }
    ])
    .matches('Bedankt', [
        function (session, args) {
            session.send("Leuk dat je meer informatie over Azure hebt gevraagd. Als je verder nog ergens mee kan helpen dan hoor ik het graag.")
            session.endDialog()
        }
    ])
    .matches('hulp_vraag',[
        function (session, args) {
            session.send("Je zit nu in de Azure Compute dialog. Vertel me over welke compute optie je meer informatie wilt of typ bedankt om terug naar het begin van dit gesprek te gaan.")
        }])
    .onBegin( function (session, args, next) {
            if (args.entity === 'compute') {

                session.send(conversation.compute.compute.algemeen);
                vraagNaarComputeOpties(session)
            }
            else {
                session.conversationData['computeOption'] = args.entity;
                session.send(antwoordenCompute(args.resolution.values[0]));
            }
        })

bot.dialog('compute',meerCompute);

var antwoordenCompute = function(compute){

    entity = compute.toLowerCase()

    if(entity === 'vm'){
        return conversation.compute.compute.algemeen;
    }
    else if(entity === 'app service'){
        return conversation.compute.computeservice.appService;
    }
    else if(entity === 'container service'){
        return conversation.compute.computeservice.containerservice;
    }
    else if(entity === 'functions'){
        return conversation.compute.computeservice.functions;
    }
    else if(entity === 'batch'){
       return conversation.compute.computeservice.azureBatch;
    }
    else if(entity === 'service fabric'){
        return conversation.compute.computeservice.serviceFabric;
    }
    else if(entity === 'cloud service'){
        return conversation.compute.computeservice.cloudService;
    }
    else if(entity === 'iaas'){
        return conversation.compute.modellen.IaaS;
    }
    else if(entity === 'caas'){
        return conversation.compute.modellen.CaaS;
    }
    else if(entity === 'paas'){
        return conversation.compute.modellen.PaaS;
    }
    else if(entity === 'faas'){
        return conversation.compute.modellen.Faas;
    }
    else{
        return "Hellaas heb ik geen informatie over '" + entity + "'"
    }
}

var controleerComputeOptie = function(session, args){

    if (args.entities.length !== 0) {

        var compute = builder.EntityRecognizer.findEntity(args.entities, 'compute');

        if(compute !== undefined)
        {
            if (compute.entity === 'compute') {

                session.send(conversation.compute.compute.algemeen);
                vraagNaarComputeOpties(session)
            }
            else {
                session.send(antwoordenCompute(compute.resolution.values[0]));
            }
        }
    }
}

var vraagNaarComputeOpties = function(session){
        session.send(conversation.compute.compute.welkeopties[0]);

        var cardComputeOptions = new builder.Message(session);
        cardComputeOptions.attachmentLayout(builder.AttachmentLayout.list)
        cardComputeOptions.attachments([
            new builder.HeroCard(session)
                .buttons([
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[1], conversation.compute.compute.welkeopties[1]),
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[2], conversation.compute.compute.welkeopties[2]),
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[3], conversation.compute.compute.welkeopties[3]),
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[4], conversation.compute.compute.welkeopties[4]),
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[5], conversation.compute.compute.welkeopties[5]),
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[6], conversation.compute.compute.welkeopties[6]),
                    builder.CardAction.imBack(session, "Vertel me meer over " + conversation.compute.compute.welkeopties[7], conversation.compute.compute.welkeopties[7]),
                ])
        ]);

        session.send(cardComputeOptions);
}
