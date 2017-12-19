var conversation =  {
    compute : {
        compute: {
            algemeen: 'Binnen Microsoft Azure is het mogelijk om allerlei verschillende processen en applicaties te laten draaien. Hiervoor biedt Microsoft Azure verschillende mogelijkheden. Onder deze mogelijkheden vallen onder andere Virtual Machine, App Service en Azure functions',
            meerinfo: ['Binnen compute wordt er gewerkt met verschillende modellen IaaS, CaaS, PaaS, en FaaS. Kies een van de modellen voor meer informatie, of zal ik u iets vertellen over welke compute opties er zijn?', 'IaaS', 'CaaS', 'PaaS', 'FaaS'],
            welkeopties: ['Er zijn een helleboel compute opties beschikbaar. Ik kan u iets vertellen over de volgende compute mogelijkheden ', 'Virtual Machines', 'App Services', 'Service Fabric', 'Azure Container Service', 'Azure functions', 'Azure Batch', 'Cloud Services']

        },
        modellen: {
            algemeen: "Binnen Microsoft Azure zijn er verschillende modellen beschikbaar. IaaS, CaaS, PaaS, FaaS. Iedere model heeft zo zijn eigen voor en nadelen. Zo heeft u bij IaaS zelf de controle over uw infrastructuur en bij FaaS hoeft u zich alleen maar te bekommeren over uw code en hoeft u zich helemaal niet meer druk te maken over de onderliggende lagen. CaaS en Paas liggen hier tussenin. Zal ik u wat meer vertellen over een van de volgende onderwerpen?", // Foto van alle modellen en carrousel met model
            IaaS: "IaaS staat voor Infrastructuur as a Service. Met IaaS deployt u de VM die u nodig heeft samen met de daarbij gewenste netwerk en storage componenten. Op deze machine kunt u vervolgens zelf de applicaties instaleren die u zelf wilt. Dit model komt het dichtste bij het traditionele on-premises model behalve dan dat de infrastructuur door Microsoft wordt gemanaged.", //Afbeelding van model
            CaaS: "CaaS staat voor Container as a Service. Waarin u met IaaS verantwoordelijk bent voor uw eigen Virtual Machine, wordt dit bij CaaS helemaal voor u geregeld. Bij CaaS hoeft u alleen uw eigen container in te regelen en de rest word door Microsoft Azure gemanaged.",
            PaaS: "PaaS staat voor Platform as a Service. PaaS services voorzien in een managed hosting environment. Hierin kunt u zelf uw applicatie deployen zonder dat u uw VM of Netwerk resources moet managen. De service regelt dit allemaal voor u. Een voorbeeld van een PaaS service is de Azure App Service.",
            Faas: "FaaS staat voor Functie as a Service. FaaS gaat een stapje verder in het hosten van de omgeving. In plaats van het creëren van verschillende instances en het deployen van code naar deze instance kunt u uw code deployen en de FaaS service zorgt er voor dat de code word uitgevoerd. U hoeft zich dus totaal geen zorgen meer te maken over de compute resources. De service maakt gebruik van een serverloze architectuur. Scaling gaat dus helemaal automatisch. Binnen Microsoft Azure is FaaS verkrijgbaar onder Azure functions.  "
        },
        computeservice: {
            vm: "Virtuele Machines zijn een IaaS service die het mogelijk maken om VMs in een virtueel netwerk te deployen en te managen",
            appService: "App Service is een managed service voor het hosten van web apps, mobiele apps, backend apps, restful apis of het automatiseren van bedrijfsprocessen",
            containerservice: "Azure container service biedt de mogelijkheid om een container cluster te configuren en te managen. ",
            functions: "Azure functions is een serverloze oplossing. Met de Azure Functions plaatst u uw code in de cloud en deze wordt uitgevoerd zodra de opgegeven triggers worden getriggerd worden. U hoeft zich dus helemaal geen zorgen te maken over de beschikbaarheid van uw onderliggende resources",
            azureBatch: "Azure Batch is een managed service voor het runnen van grote en parallelle workload. Ook wel (HPC) high-performance computing genoemd",
            cloudService: "Cloud Services is een managed service voor het runnen van cloud applicaties. Het maakt gebruik van het PaaS hosting model.",
            serviceFabric: "Service Fabric is de basistechnologie voor zowel de Azure-kerninfrastructuur als andere Microsoft-services, zoals Skype voor Bedrijven, Intune, Azure Event Hubs, Azure Data Factory, Azure Cosmos DB, Azure SQL Database, Dynamics 365 en Cortana. Azure Service Fabric is ontworpen voor het leveren van hoge beschikbaarheid en duurzame services op de schaal van de cloud. "
        }
    },

    networking: {
        algemeen: "Networking (ook wel een computernetwerk) is een systeem om verschillende computers of apparaten met elkaar te laten communiceren. Binnen Microsoft Azure zijn er veel verschillende mogelijkheden en toepassingen om netwerken te kunnen creëren en te onderhouden. Zal ik u wat meer over de netwerktoepassingen vertellen binnen Microsoft Azure?",
        meerinfo: ['Leuk dat u wat meer informatie wilt over Azure Networking. Over welke van de volgende opties zal ik u iets meer vertellen?', "Virtuele Netwerken", "Routing", "Virtual Network Peering", "Network service endpoints", "Virtual network for Azure services", "Security", "IP Addressing", "DDos Protection", 'Express Route', 'Traffic Manager'],
        //https://docs.microsoft.com/nl-nl/azure/virtual-network/virtual-networks-overview
        network: "Azure Virtual Network biedt een geïsoleerde en uiterst veilige omgeving waarin u uw virtuele machines en toepassingen kunt uitvoeren. U kunt uw eigen privé-IP-adressen en subnets definiëren, beleidsregels voor toegangsbeheer opstellen en nog meer. Met Azure Virtual Network kan deze op dezelfde manier werken als in uw eigen datacenter.",
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
        algemeen: "Microsoft Azure Storage is een door Microsoft beheerde Cloud service waarmee u toegang krijgt tot opslag met een zeer hoge beschikbaarheid die daarnaast veilig, duurzaam, schaalbaar en redundant is. Azure Storage bestaat uit Blob Storage, File Storage en Queue Storage. Ontdek met onze snelstartgidsen en zelfstudies hoe u Azure-opslag gebruikt in uw toepassingen.",
        meerinfo: ["Leuk om te zien dat u geïnteresseerd bent in Azure storage. Over welke van de volgende storage mogelijkheden zou u meer informatie willen?", 'Blob Storage', 'File Storage', 'Queue Storage'],
        fileStorage: '',
        blobStorage: '',
        queueStorage: ''

    },

    data: {
        algemeen: "Microsoft Azure biedt een heleboel mogelijkheden voor het opslaan van data. Natuurlijk zijn hiervoor de verschillende storages types, maar er zijn ook een heleboel database mogelijkheden zoals SQL Server, Cosmos DB en Table storage. Zal ik u iets meer vertellen over de verschillende data opties?",
        meerinfo: ['Laten we beginnen met de mogelijke databases. Over welke zou u wat meer informatie willen hebben?', "SQL Database", 'PostgreSQL','SQL Data Warehouse', 'SQL Service Strech DataBase', 'Cosmos DB', 'Tabel Opslag', 'Redis Cache', 'Data Factory' ],
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
        algemeen: 'Een modern bedrijf kan in 2018 bijna niet meer zonder machine learning en analytics. Maar hoe begint u hiermee? Is dit ook iets voor uw bedrijf? Jazeker! Microsoft Azure biedt gigantisch veel tools en oplossingen om snel te beginnen en slimme dingen te doen met uw data. Hiermee kunt u uw applicaties en uw business een stuk slimmer en efficiënter maken. Zal ik u hier wat meer over vertellen?',
        meerinfo: ['Als ik zo vrij mag zijn: ik zou graag als eerste een onderscheid willen maken in de machine learning tool en de cognitieve services. Over welke zou u graag wat meer informatie willen?', 'Machine Learning', 'Cognitive Services'],
        machineLearning:{
            algemeen: "Met machine learning kunnen computers leren van gegevens en ervaringen en reageren zonder expliciet geprogrammeerd te zijn. Klanten kunnen AI-toepassingen (Artificial Intelligence) bouwen die gegevens kunnen opsporen en verwerken en zo menselijke vaardigheden uitbreiden, de snelheid en efficiëntie verhogen en ervoor zorgen dat organisaties meer kunnen bereiken."
        } ,
        cognitiveServices: {
            algemeen: ["Met de cognitive services kunt u apps en websites een stuk slimmer maken. Met deze services kunt u chatbots Bouwen. Overigens ben ik ook op deze service gebouwd. Zal ik u wat meer vertellen over een van de volgende services?", "Vision", "Spraak Herkenning", "Kennis", "Search", "taal"],
            bot:"Met de bot service kunt u chatbots bouwen. Deze bots kunnen tekst herkennen en weten vervolgens wat de gebruiker bedoelt. De bot kan dankzij deze herkenning dus een gesprek voeren, zonder dat daar extra iemand voor nodig is",
            vision: "De vision service bevatten algoritmen voor de verwerking van afbeeldingen. Met deze service kunt u uw afbeeldingen op een slimme manier door de computer laten analyseren. U kunt dingen als gezichten en objecten herkennen en classificeren in afbeelding",
            spraakHerkenning: "Met de spraak services is het mogelijk om gesproken tekst te herkennen. ",
            kennis: "Met de kennis services kunt u kennis op een makkelijke manier beschikbaar maken",
            taal: ""
        }
    },

    iot: {
        algemeen: "Microsoft Azure biedt een compleet platform voor IOT. Met dit platform kunt u tot nu toe ongebruikte gegevens vastleggen en analyseren om de bedrijfsresultaten te verbeteren"

    },

    copaco:{
        algemeen: "Ik zie dat u wat meer informatie wilt over Copaco, Copaco is de value added IT distributeur actief in de Benelux en Frankrijk. Copaco levert naast hard- en software ook een breed scala aan cloud services via ons eigen 2tCloud platform. Voor meer informatie kun u terecht op http://www.copaco.com of neem contact op via info@copaco.com of 040 2 306 306"

    },

    totcloud:{
        algemeen: "2tCloud is een Cloud Services Delivery platform dat u binnen 48 uur een professionele cloud service provider maakt. Via een centraal portal beschikt u over een compleet cloud services portfolio zonder dat u daar zelf het kapitaal, de tijd, de technische kennis en ervaring voor nodig heeft. Voor meer informatie: www.copaco.com/2tcloud"

    },

    csp:{
        algemeen: "CSP staat voor Cloud Service Provider. Als CSP partner verwerk je meerder Microsoft cloud service zoals (Azure, Office 365, Enterprise Mobility Suite en Dynamics CRM online) allemaal via één platform. CSP maakt het partners mogelijk om eigenaar te zijn van de klantlevenscyclus en de end to en klant relatie. Prijzen en voorwaarden kunnen zelf worden bepaald en kunnen direct worden gefactureerd. Voor meer informatie kun je contact op nemen met onze sales afdeling"

    },

    contact:{
        algemeen: "Voor meer informatie kunt u contact opnemen via microsoft@copaco.com of 040 2 306 370."
    }
}

module.exports = conversation;


//https://azure.microsoft.com/nl-nl/overview/what-is-azure/
//https://azure.microsoft.com/nl-nl/services/virtual-network/
