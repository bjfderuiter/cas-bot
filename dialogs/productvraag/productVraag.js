var builder = require("botbuilder");

var product_vraag = [

    function (session, args) {
        if (args.entities.length !== 0) {

            var compute = builder.EntityRecognizer.findEntity(args.entities, 'compute');
            var merken = builder.EntityRecognizer.findEntity(args.entities, 'Merken');
            if(compute !== null)
            {
                session.replaceDialog('compute', compute);
            }
            else if(merken !== null)
            {
                session.replaceDialog('merken', merken);
            }
        }
    },
    function (session, results) {
    }
]


module.exports = product_vraag;


