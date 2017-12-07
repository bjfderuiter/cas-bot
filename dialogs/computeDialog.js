var bot = require('../bot').bot;
var LuisModelUrl = require('../bot').LuisModelUrl;
var conversation = require("./data");
var builder = require("botbuilder");

bot.dialog('compute', [
    function (session, args) {
        console.log("zit in de compute dialog")
        console.log(args[0])
        if (args[0].entity === 'compute') {
            session.send(conversation.compute.compute.algemeen);
        }
        else if(args[0].entity === 'vm'){
            session.send(conversation.compute.compute.algemeen);
        }
        else if(args[0].entity === 'app service'){
            session.send(conversation.compute.computeservice.appService);
        }
        else if(args[0].entity === 'container service'){
            session.send(conversation.compute.computeservice.containerservice);
        }
        else if(args[0].entity === 'functions'){
            session.send(conversation.compute.computeservice.functions);
        }
        else if(args[0].entity === 'batch'){
            session.send(conversation.compute.computeservice.batch);
        }
        else if(args[0].entity === 'iaas'){
            session.send(conversation.compute.modellen.IaaS);
        }
        else if(args[0].entity === 'caas'){
            session.send(conversation.compute.modellen.CaaS);
        }
        else if(args[0].entity === 'paas'){
            session.send(conversation.compute.modellen.PaaS);
        }
        else if(args[0].entity === 'faas'){
            session.send(conversation.compute.modellen.Faas);
        }
    }
]);


