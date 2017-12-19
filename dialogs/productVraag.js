var builder = require("botbuilder");

var product_vraag = [

    function (session, args) {

        if (args.entities.length !== 0) {

            var compute = builder.EntityRecognizer.findAllEntities(args.entities, 'compute');

            if(compute.length !== 0)
            {
                session.replaceDialog('compute', compute);
            }
        }
    },
    function (session, results) {
    }
]


module.exports = product_vraag;


