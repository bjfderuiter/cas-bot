var conversation =  {
    compute : {
        compute: {
            algemeen: 'Binnen azure is het mogelijke om allerij verschillende processen en applicaties te laten draaien. Hiervoor bied Azure verschillende mogelijkheden. Onder deze mogelijkheden vallen onderanderen Virtual Machine, App Service en Azure functions',
            meerinfo: ['Binnen compute word er gewerkt met verschillende modellen IaaS, CaaS, PaaS, en FaaS. Kies een van de modellen voor meer informatie of zal ik je iets vertellen over welke comput opties er zijn?', 'IaaS', 'CaaS', 'PaaS', 'FaaS'],
            welkeopties: ['Er zijn een helleboel compute opties beschibaar. Ik kan je iets vertellen over de volgende compute mogelijkheden ', 'Virtual Machines', 'App Services', 'Service Fabric', 'Azrue Container Service', 'Azure functions', 'Azure Batch', 'Cloud Services']

        },
        modellen: {
            algemeen: "Binnen Azure zijn er verschillende modellen beschikbaar. IaaS, CaaS, PaaS, FaaS. Iedere model heeft zo zijn eigen voor en nadelen. Zo heb je bij IaaS zelf de controle over je infrastructuur en bij FaaS hoef je je alleen maar te bekommeren over je code en hoef je je hellemaal niet meer druk te maken over de onderliggende lagen. CaaS en Paas liggen hier tussen in. Zal ik je wat meer vertellen over een van de volgende onderwerpen?", // Foto van alle modellen en caroesel met model
            IaaS: "IaaS staat voor infrastructuur as a service. Met IaaS deploy je de VM die je nodig hebt samen met de daarbij gewenste netwerk en storage compnenenten. Op deze machine kan je vervolgens zelf de applicaties instaleren die je zelf wilt. Dit model komt het digtste bij het traditionle on-premises model behalve dan dat de infrastructuur door Microsoft word gemanaged.", //Afbeelding van model
            CaaS: "CaaS staat voor container ass a service. Waarin je met IaaS verantwoordelijk bent voor je eigen Virtual Machine word dit bij CaaS hellemaal voor je gergeld. Bij CaaS hoef je alleen je eigen container in te regelen en de rest word door Azure gemanaged.",
            PaaS: "PaaS staat voor Platform ass a service. PaaS service voorzien in een managed hosting environment. Hierin kan je zelf je applicatie deployen zonder dat je je VM of Netwerk resources moet managen. De service regelt dit allemaal voor je. Een voorbeeld van een PaaS service is de Azure App Service.",
            Faas: "FaaS staat voor functie ass a service. FaaS gaat een stapje verder in het hosten van de omgeving. Inplaats van het crearen van verschillende instances en het deployen van code naar deze instance kan je je code deployen en de FaaS service zorgt er voor dat de code word uitgevoerd. Je hoeft je dus totaal geen zorgen meer te maken over de compute resources. De service maakt gebruik van een serverless architectuur. Scaling gaat dus hellemaal automaties. Binnen Azure is FaaS verkrijgbaar onde Azure functions.  "
        },
        computeservice: {
            vm: "Virtuele Machines zijn een IaaS service welke het mogelijk maken om VMs in een vitueel netwerkt te deployen en te managen",
            appService: "App Service is een managed serive voor het hoosten van web aps, mobiele apps, backand apps, restful apis of het automatiseren van bedrijfsprocessen",
            containerservice: "Azure container service bied de mogelijkheid om een container cluster te configuren en te managen. ",
            functions: "Azure functions is een serverless solution. Met de Azure Functions plaats je je code in de cloud en deze wordt uitgevoerd zodra de opgegeven triggers worden getriggerd worden. Je hoeft je dus hellemaal geen zorgen te maken over de beschikbaarheid van je onderliggende resources",
            azureBatch: "Azure Batch is een managed service voor het runnen van grote en parallele workload. Ook wel (HPC) high-performance computing genoemd",
            cloudService: "cloud Services is een managed service voor het runnen van cloud applicaties. Het maakt gebruik van het PaaS hosting model."
        }
    },

    networking: {
        algemeen: "Networking of, een Computernetwerk is een systeem om verschillende computers of apparten met elkaar te laten communiceren. Binnen Azure zijn er veel verschillende mogelijkheden en toepassingen om netwerken te kunnen creeren en te onderhouden. Zal ik wat meer over de netwerk toepassingen vertellen binnen Microsoft Azure?",
        meerinfo: ['Leuk dat je wat meer informatie wilt over Azure Networking. Welke van de volgende opties zal ik je iets meer over vertellen?', "Virtuele Netwerken", "Routing", "Virtual Network Peering", "Network service endpoints", "Virtual network for Azure services", "Security", "IP Addressing", "DDos Protection", 'Express Route', 'Traffic Manager'],
        //https://docs.microsoft.com/nl-nl/azure/virtual-network/virtual-networks-overview
        network: "Azure Virtual Network biedt een geïsoleerde en uiterst veilige omgeving waarin je je virtuele machines en toepassingen kunt uitvoeren. Je kan je eigen privé-IP-adressen en subnets definieren, beleidsregels voor toegangsbeheer opstellen en nog meer. Met Azure Virtual Network kan ie op dezelfde manier werken als in je eigen datacenter.",
        routing: "",
        peering: "",
        serviceEndpoints: "",
        networkAzureServices: "",
        security: "",
        ipAddressen: "",
        ddosProtection: "",
        expressRoute: "",
        trafficManager: ""
    },

    storage: {
        algemeen: "crosoft Azure Storage is een door Microsoft beheerde cloudservice waarmee u toegang krijgt tot opslag met een zeer hoge beschikbaarheid die daarnaast veilig, duurzaam, schaalbaar en redundant is. Azure Storage bestaat uit Blob Storage, File Storage en Queue Storage. Ontdek met onze snelstartgidsen en zelfstudies hoe u Azure-opslag gebruikt in uw toepassingen.",
        meerinfo: ["Leuk om te zien dat je geintereseerd bent in Azure storage. Over welke van de volgende storage mogelijkheden zou je meer informatie willen hebben?", 'Blob Storage', 'File Storage', 'Queu Storage'],
        fileStorage: '',
        blobStorage: '',
        queuStorage: ''

    },

    data: {
        algemeen: "Azure bied een helleboel mogelijkheden voor het opslaan van data natuurlijk zijn hiervoor de verschillende storages types maar er zijn ook een helleboel database mogelijkheden zoals SQL Server, Cosmos DB en Table storage. Zal ik je iets meer vertellen over de verschillende data opties?",
        meerinfo: ['Laten we beginnen met de moglijke databases. Over welke zou je wat meer informatie willen hebben?', "SQL Database", 'PostgreSQL','SQL Data Warehouse', 'SQL Service Strech DataBase', 'Cosmos DB', 'Tabel Oplsag', 'Redis Cache', 'Data Factory' ],
        sqlDatabase: '',
        postgreSQL: '' ,
        sqlDataWarehous: '',
        sqlServiceStrech: '',
        cosmosDB: '',
        Tabelopslag: '',
        redisCache: '',
        dataFactory: ''
    },

    identity: {

    },

    devops: {

    },

    analytics: {
        algemeen: 'Een modern bedrijf in 2018 kan bijna niet meer zonder machine learning en analytics. Maar hoe begin je hiermee. Is dit ook iets voor mijn bedrijf?. Jazker. Microsoft Azure bied giganties veel tools en oplossingen om snel te beginnen en slimme dingen te doen met je data. Hiermee kan jij jouw applicaties en jouw busines een stuk slimmer en efficienter maken. Zal ik je hier wat meer over vertellen?',
        meerinfo: ['Als ik zou zo vrij zo mogen zijn zou ik als eerste een ondersheid willen maken in de machine learning tool en de cognitive services. Over welke zou je graag wat meer informatie willen hebben?', 'Machine Learning', 'Cognitive Services'],
        machineLearning:{
            algemeen: "Met machine learning kunnen computers leren van gegevens en ervaringen en reageren zonder expliciet geprogrammeerd te zijn. Klanten kunnen AI-toepassingen (Artificial Intelligence) bouwen die gegevens kunnen opsporen en verwerken en zo menselijke vaardigheden uitbreiden, de snelheid en efficiëntie verhogen en ervoor zorgen dat organisaties meer kunnen bereiken."
        } ,
        cognitiveServices: {
            algemeen: ["Met de cognitive services kan je apps en websites een stuk slimmer maken. Met deze services kan je Chatbots Bouwen. Overigens ben ik ook op deze service gebouwd. Zal ik je wat meer vertellen over een van de volgende services?", "Vision", "Spraak Herkenning", "Kennis", "Search", "taal"],
            bot:"Met de bot service kan je chatbots bouwen. Deze bots kunnen teks herkennen en weeten vervolgens wat de gebruiker bedoelt. De bot kan dankzij deze herkenning dus een gesprek voeren zonder dat daar extra iemand voor nodig is",
            vision: "De vision service bevatten Algoritmen voor de verwerking van afbeeldingen. Met deze service kan je je afbeeldingen op een slimme manier door de computer laten analyzeren. Je kan dingen als gezichten en objecten herkennen en clasificeren in afbeelding",
            spraakHerkenning: "Met de spraak services is het mogeelijk om gesproken tekst te herkennen. ",
            kennis: "Met de kennis services kan je kennis op een makkelijke mannier beschikbaar maken",
            taal: ""
        }
    },

    iot: {
        algemeen: "Azure bied een compleet platform voor IOT. Met dit platform kun je tot nu toe ongebruikte gegevens vastleggen en analyseer om de bedrijfsresultaten te verbeteren"

    },

    copaco:{
        algemeen: "Ik zie dat u wat meer informatie wilt over Copaco, Copaco is de value added IT distributeur actief in de Benelux en Frankrijk. Copaco levert naast hard- en software ook een breed scala aan cloud services via ons eigen 2tCloud platform. Voor meer informatie kun u terecht op http://www.copaco.com of neem contact op via info@copaco.com of 040 2 306 306"

    },

    totcloud:{
        algemeen: "2tCloud is een Cloud Services Delivery platform dat u binnen 48 uur een professionele cloud service provider maakt. Via een centraal portal beschikt u over een compleet cloud services portfolio zonder dat u daar zelf het kapitaal, de tijd, de technische kennis en ervaring voor nodig heeft. Voor meer informatie zie www.copaco.com/2tcloud"

    },

    csp:{
        algemeen: "CSP staat voor Cloud Service Provider. Als CSP partner verwerk je meerder Microsoft cloudsercice zoals (Azure, Office 365, Enterprise Mobility Suite en Dynamics CRM online) allemaal via één platform. CSP maakt het partners mogelijk om eigenaar te zijn van de klantlevenscyclus en de end to en klant relatie. Prijzen en voorwarden kunnen zelf worden bepaald en kunnen direct worden gefactureerd. Voor meer informatie kun je contact op nemen met onze sales afdeling"

    },

    contact:{
        algemeen: "Voor meer informatie kunt u contact opnemen via microsoft@copaco.com of 040 2 306 370."
    }
}

module.exports = conversation;


//https://azure.microsoft.com/nl-nl/overview/what-is-azure/
//https://azure.microsoft.com/nl-nl/services/virtual-network/