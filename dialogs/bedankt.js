var builder = require("botbuilder");

function bedankt (session, args) {
    var msg = new builder.Message(session);
    msg.attachmentLayout(builder.AttachmentLayout.list)
    msg.attachments([
        new builder.HeroCard(session)
            .buttons([
                builder.CardAction.imBack(session, "ja", "ja"),
                builder.CardAction.imBack(session, "jadsfa", "jdsf"),
            ])
    ]);

    session.send(msg);
    session.endDialog();
}

module.exports = bedankt;