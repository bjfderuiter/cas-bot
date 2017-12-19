var builder = require("botbuilder");

function bedankt (session, args) {
    session.send("Graag gedaan. Als je nog meer vragen hebt dan hoor ik het graag.")
    session.endDialog();
}

module.exports = bedankt;