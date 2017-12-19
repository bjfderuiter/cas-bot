var builder = require("botbuilder");

function algemene_hulp (session, args) {

    session.send("Je kan mij van alles vragen over Azure, Microsoft en Copaco. Hoewel ik nog steeds aan het leren ben kan ik je al best wel veel informatie geven. Ik kan je ook iets vertellen over de volgende onderwerpen,");

    var msg = new builder.Message(session);
    msg.attachmentLayout(builder.AttachmentLayout.list)
    msg.attachments([
        new builder.HeroCard(session)
            .buttons([
                builder.CardAction.imBack(session, "Wat is Microsoft?", "Microsoft"),
                builder.CardAction.imBack(session, "Wat is Azure?", "Azure"),
                builder.CardAction.imBack(session, "Wat is Copaco?", "Copaco"),
            ])
    ]);

    session.send(msg);
    session.endDialog();
}

module.exports = algemene_hulp;