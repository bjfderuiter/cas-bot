var builder = require("botbuilder");

var hoegaathet = function (session, ars) {

    if (!session.conversationData['RegardKey']) {
        session.conversationData['RegardKey'] = true;
        session.send("Met mij gaat het heel goed vandaag. Ik ben helemaal met mijn hoofd in de Cloud.");
    }
    else {
        session.send("Ik zit te denken, hoe zou de wereld van Cloud er in de toekomst uitzien.");
    }

}

module.exports = hoegaathet;