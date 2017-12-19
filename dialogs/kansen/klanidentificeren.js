var builder = require("botbuilder");
var conversation = require('./text/klantidentificeren')

var klant_identificeren = [

    function (session, args) {
        session.send(conversation.wie_is_de_klant);
        builder.Prompts.text(session, conversation.meer_info.vraag_meer_info);
    },
    function (session, results){
        if(results.response.startsWith("ja")){
            session.send(conversation.meer_info.ja.antwoord)
            TypeKlanten(session)
        }
        else if (results.response.startsWith('nee')){
            session.send(conversation.meer_info.nee)
            session.endDialog()
        }
    },
    function (session, results){

        if (results.response === conversation.meer_info.ja.wisselend_workload){
            session.send(conversation.meer_info.ja.wisselend_workload_meer_1)
            session.send(conversation.meer_info.ja.wisselend_workload_meer_2)
        }
        else if (results.response === conversation.meer_info.ja.uitbreiden){
            session.send(conversation.meer_info.ja.uitbreiden_meer)
        }
        else if (results.response === conversation.meer_info.ja.korte_project){
            session.send(conversation.meer_info.ja.korte_project_meer)
        }
        else if (results.response === conversation.meer_info.ja.investeren){
            session.send(conversation.meer_info.ja.investeren_meer)
        }
        else if (results.response === conversation.meer_info.ja.byod_omgeving){
            session.send(conversation.meer_info.ja.byod_omgeving_meer)
        }
        else if (results.response === conversation.meer_info.ja.backup_behoefte){
            session.send(conversation.meer_info.ja.backup_behoefte_meer)
        }
        else{
            session.send('Ik heb u niet begrepen');
        }

        session.endDialog()
    }
]

var TypeKlanten = function(session){

    var cardComputeOptions = new builder.Message(session);
    cardComputeOptions.attachmentLayout(builder.AttachmentLayout.list)
    cardComputeOptions.attachments([
        new builder.HeroCard(session)
            .buttons([
                builder.CardAction.imBack(session, conversation.meer_info.ja.wisselend_workload ,conversation.meer_info.ja.wisselend_workload),
                builder.CardAction.imBack(session, conversation.meer_info.ja.uitbreiden,conversation.meer_info.ja.uitbreiden),
                builder.CardAction.imBack(session, conversation.meer_info.ja.korte_project,conversation.meer_info.ja.korte_project),
                builder.CardAction.imBack(session, conversation.meer_info.ja.investeren,conversation.meer_info.ja.investeren),
                builder.CardAction.imBack(session, conversation.meer_info.ja.byod_omgeving,conversation.meer_info.ja.byod_omgeving),
                builder.CardAction.imBack(session, conversation.meer_info.ja.backup_behoefte,conversation.meer_info.ja.backup_behoefte)
            ])
    ]);

    builder.Prompts.text(session,cardComputeOptions);
}

module.exports = klant_identificeren;


