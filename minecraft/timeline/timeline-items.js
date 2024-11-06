const items = [
  {
    year: 2009,
    title: "Minecraft Classic",
    description:
      "<b>Classic</b> was de eerste fase in de ontwikkelingscyclus van Minecraft (Java Edition), na pre-Classic en voorafgaand aan Indev, en was de eerste Minecraft-ontwikkelingsfase met openbaar uitgebrachte versies. Deze fase werd tijdens de ontwikkeling “alpha” genoemd door Notch (vandaar de “a” in het versienummer) tot 28 juni 2010, toen een blogbericht het met terugwerkende kracht bestempelde als “Minecraft Classic”. De spelmodi Creative en later Survival werden in deze fase geïntroduceerd.",
  },
  {
    year: 2009,
    title: "Minecraft Indev",
    description:
      "<b>Indev</b> (kort voor in ontwikkeling) werd uitgebracht op 23 december 2009, nadat Notch verzoeken had ontvangen om de community nieuwe functies te laten uitproberen die hij aan het implementeren was in Survival Test. Indev versie 0.31 werd uitgebracht op minecraft.net/indev en was alleen beschikbaar voor mensen die het spel hadden gekocht. Wanneer een nieuw spel werd gestart, spawnde de speler in een geprefabriceerd houten huis.",
  },
  {
    year: 2010,
    title: "Minecraft Infdev",
    description:
      "<b>Infdev</b> (kort voor infinite development) werd uitgebracht op 27 februari 2010 en werd de 3e fase in de ontwikkeling van Minecraft. Het bevatte de belangrijke toevoeging van kaarten die oneindig gegenereerd kunnen worden, wat de gameplaymogelijkheden nog verder uitbreidde, evenals andere upgrades waaronder nieuwe craftingrecepten, 3D-wolken, een nieuwe terreingenerator, een realistischer vloeistofsysteem en complexere grotten. Infdev schrapte echter andere functies van Indev, zoals wereldthema's. Dit betekende op zijn beurt het einde van Indev. Dit betekende op zijn beurt de ondergang van functies als 'zwevende eilanden' en 'permaday'. Deze schrappingen zijn begrijpelijk, aangezien het hoofddoel van Infdev de ontwikkeling van oneindige kaarten was. Er werden echter wel extra gameplayfuncties en items toegevoegd, zoals minecarts, dungeons met mob spawners en de mogelijkheid om te respawnen.",
  },
  {
    year: 2010,
    title: "Minecraft Alpha",
    description:
      "<b>Alpha</b> werd uitgebracht op 30 juni 2010, maar alleen technisch, want de eerste versie die als Alpha werd aangeduid was Alpha v1.0.1. Toen deze update werd uitgebracht, besloot Notch om Infdev (30 juni 2010) te hernoemen naar Alpha v1.0.0. In deze fase van het spel werden veel belangrijke functies toegevoegd aan Minecraft. Multiplayer voor Survival werd gemaakt, en functies zoals redstone circuits, boten, nieuwe muziek en nieuwe mobs, vaak zonder aankondiging in “Secret Friday Updates”.",
  },
  {
    year: 2010,
    title: "Minecraft Beta",
    description:
      "<b>Beta</b> was de vijfde en laatste ontwikkelingsfase die Alpha opvolgde en voorafging aan de volledige release van Java Edition, en was de vijfde en laatste ontwikkelingsfase van Minecraft waarvan sommige versies werden vrijgegeven aan het publiek. Het werd aangekondigd op de blog van Notch op 11 december 2010 en negen dagen later uitgebracht op 20 december 2010. Naast enkele kleine updates zorgde de overgang van Alpha voor een prijsverhoging van 50% (waardoor de kosten 25% van de volledige prijs werden), een verandering in de disclaimer (Notch verwijderde de regel die zei “alle toekomstige updates worden gratis aangeboden”, hoewel de verklaring nog steeds geldt voor gebruikers die Minecraft kochten voordat Beta werd uitgebracht. Zowel Alpha als Beta kopers kregen het volledige spel gratis) en kleine updates aan de website.",
  },
  {
    year: 2011,
    title: "Officiële release van Minecraft",
    description:
      "<b>1.0</b>, de eerste volledige versie van het spel, werd uitgebracht op 18 november 2011 tijdens MINECON 2011, waarmee het spel officieel werd uitgebracht na tweeënhalf jaar (916 dagen) ontwikkeling. Deze versie voegt brouwen, betoveren, het Einde, de Hardcore-modus, fokken en meer toe. Het is de laatste versie van Minecraft die Notch ontwikkelde voordat hij de creatieve ontwikkelpositie aan Jens Bergensten gaf.",
  },
  {
    year: 2014,
    title: "Minecraft Bountiful Update",
    description:
      "<b>1.8</b>, de eerste release van de Bountiful Update, is een grote update voor Minecraft. Het heeft veel aspecten van Java Edition toegevoegd en veranderd. De update maakte het onder andere makkelijker voor mapmakers om adventure maps te maken, terwijl de nieuw toegevoegde Spectator modus werd gebruikt. Er werden veel blokken, mobs en een structuur voor Survival toegevoegd. Veel commando's werden toegevoegd of uitgebreid, de wereldgrens werd een aanpasbaar onderdeel, veel Survival-mechanieken werden veranderd en de update maakte plaats voor veel meer aanpassingsopties voor de wereld.",
  },
  {
    year: 2014,
    title: "Microsoft koopt Mojang",
    description:
      "In november 2014 werd heel Mojang overgenomen door Microsoft voor 2,5 miljard dollar. Minecraft hoorde daar natuurlijk ook bij.",
  },
  {
    year: 2016,
    title: "Minecraft Combat Update",
    description:
      "<b>1.9</b>, de eerste release van de Combat Update, is een grote update voor Java Edition die werd uitgebracht op 29 februari 2016. Deze update heeft de gevechten volledig vernieuwd door een getimed aanvalssysteem, tweehandig vechten, spectrale en getipte pijlen en schilden toe te voegen. The End werd vernieuwd met een bijgewerkte ender dragon boss fight sequence, een expansie van extra eilanden met chorus planten, end cities, end ships, purpur blocks, shulkers, evenals elytra, die een speler kan dragen om door de lucht te zweven. Dit is de eerste versie die in 2016 wordt uitgebracht.",
  },
  {
    year: 2016,
    title: "Minecraft Frostburn Update",
    description:
      "<b>1.10</b>, de eerste release van de Frostburn Update, is een grote update voor Java Edition die op 8 juni 2016 werd uitgebracht. Deze update geeft spelers de mogelijkheid om structuurblokken te gebruiken en voegt magmablokken, nether wart blocks, red nether brick, fossielen gemaakt van botblokken, strays en husks (dit zijn varianten van respectievelijk skeletten en zombies) en ijsberen toe.",
  },
  {
    year: 2016,
    title: "Minecraft Exploration Update",
    description:
      "<b>1.11</b>, de eerste release van de Exploration Update, is een grote update voor Java Edition die op 14 november 2016 is uitgebracht. Deze update bracht grote veranderingen aan in entiteit-ID's, en voegde illagers (vindicators en evokers), vexes, totems of undying, verkenningskaarten, waarnemers, shulker boxen, woodland mansions en lama's toe. Er is ook een waarschuwing toegevoegd voor spelers die binnenkort niet-ondersteunde Java-versies gebruikten (Java 6 en Java 7).",
  },
  {
    year: 2017,
    title: "Minecraft World of Color Update",
    description:
      "<b>1.12</b>, de eerste release van de World of Color Update, is een grote update voor Java Edition die op 7 juni 2017 is uitgebracht. Deze update introduceerde een levendiger kleurenpalet, een nieuw knutselsysteem, hints voor beginners, geglazuurd terracotta, beton, gekleurde bedden, illusionisten en papegaaien. Het verving ook prestaties door een aanpasbaar en krachtiger systeem van verbeteringen, en introduceerde een nieuw systeem voor het werken met verzamelingen commando's, genaamd functies.",
  },
  {
    year: 2018,
    title: "Minecraft Update Aquatic",
    description:
      "<b>1.13</b>, de eerste release van de Update Aquatic, is een grote update voor Java Edition die op 18 juli 2018 is uitgebracht. Het richtte zich voornamelijk op oceaaninhoud en technische functies. Specifiek werden nieuwe blokken, zoals blauw ijs, koraal, leidingen, kelp, zee augurken, gestripte logs, hout en schildpad eieren toegevoegd, evenals nieuwe items zoals begraven schat verkenner kaarten, debug sticks, emmers vissen, harten van de zee, fantoom membranen, drietanden, en nog veel meer. Water is ook transparanter dan voorheen en de kleur is aangepast aan specifieke biomes, terwijl het voor 1.13 alleen donkerblauw was. Daarnaast zijn er dolfijnen, verdronkenen, vismobiels, fantomen en schildpadden toegevoegd, evenals nieuwe biomen, een nieuw wereldtype buffet (een tijdelijke vervanging voor het aangepaste wereldtype) en nieuwe gegenereerde structuren. Deze update voegde ook veel commando's toe en veranderde het formaat van bestaande commando's, en voegde veel nieuwe technische aspecten toe, zoals datapakketten en tags.",
  },
  {
    year: 2019,
    title: "Minecraft Village & Pillage Update",
    description:
      "<b>1.14</b>, de eerste release van Village & Pillage, is een grote update voor Java Edition die op 23 april 2019 is uitgebracht. Het richt zich voornamelijk op dorpen, voegt een nieuw type illagers toe, bekend als pillagers, en herontwerpt de dorpsarchitectuur om te passen bij de biome waarin het zich bevindt. Deze update introduceert ook veel nieuwe blokken en mobs, vernieuwt het crafting-systeem door sommige functionaliteiten naar andere blokken te verplaatsen, werkt de taigabioscoop bij met vossen en zoete bessen, en voegt een nieuwe bamboejungle-bioscoop toe met bamboe en panda's. Het is ook de eerste grote release met de nieuwe texturen van de Texture Update.",
  },
  {
    year: 2019,
    title: "Minecraft Buzzy Bees Update",
    description:
      "<b>1.15</b>, de eerste release van Buzzy Bees, is een grote update voor Java Edition uitgebracht op 10 december 2019. Het voegde bijen en bij-gerelateerde items toe, zoals bijenkorven, honingflessen en honingraten. Naast het toevoegen van bijen, was deze update gericht op het oplossen van bugs en het verbeteren van de prestaties, evenals het toevoegen van tal van functies die oorspronkelijk Bedrock Edition exclusives waren.",
  },
  {
    year: 2020,
    title: "Minecraft Nether Update",
    description:
      "<b>1.16</b>, de eerste release van de Nether Update, is een grote update voor Java Edition die werd aangekondigd op MINECON Live 2019 en werd uitgebracht op 23 juni 2020. Deze update vernieuwt de Nether door vier nieuwe biomes, vier nieuwe mobs (de piglin, hoglin, zoglin en strider) en een groot aantal nieuwe blokken toe te voegen, waaronder veel varianten van blackstone en het respawnanker dat wordt gebruikt om het spawnpunt van de speler in de Nether in te stellen. Het voegt ook een nieuwe netherite-uitrusting toe, die je verkrijgt via oude brokstukken die je zelden in de Nether vindt.",
  },
  {
    year: 2021,
    title: "Minecraft Caves & Cliffs Update (Deel I)",
    description:
      "<b>1.17</b>, de eerste release van Caves & Cliffs: Part I, is een grote update voor Java Edition aangekondigd op Minecraft Live 2020 en uitgebracht op 8 juni 2021. Op 14 april 2021 kondigde Mojang Studios aan dat de update zou worden opgesplitst in twee updates vanwege de hoeveelheid en complexiteit van de inhoud, evenals de gezondheid van het team. Meerdere functies, zoals de vernieuwde berg- en grotgeneratie, de weelderige grotten en druipsteengrottenbiomen, en de toegenomen hoogte van de wereld werden verwijderd in 21w15a, en werden vervolgens uitgebracht in 1.18. In het Minecraft.net-artikel voor 21w15a was een gegevenspakket opgenomen dat de verwijderde functies weer inschakelde.",
  },
  {
    year: 2021,
    title: "Minecraft Caves & Cliffs Update (Deel II)",
    description:
      "<b>1.18</b>, de eerste release van Caves & Cliffs: Part II, is een grote update voor Java Edition die op 30 november 2021 is uitgebracht. De Overworld-generatie wordt volledig herzien, met grotere grotten, hogere bergen, nieuwe bergbiomen, nieuwe grotbiomen en ondergelopen grotten. Het werd voor het eerst aangekondigd samen met de release van 1.17 snapshot 21w15a, toen Mojang Studios verklaarde dat de Caves & Cliffs-update in tweeën zou worden gesplitst. Sommige functies voor 1.18 werden aanvankelijk geïmplementeerd tijdens de ontwikkelingscyclus van 1.17, voordat ze werden uitgesteld en verplaatst naar officiële gegevenspakketten die werden gebruikt met een bijbehorende snapshot van 1.17.",
  },
  {
    year: 2022,
    title: "Minecraft Wild Update",
    description:
      "<b>1.19</b>, de eerste release van The Wild Update, is een grote update voor Java Edition, uitgebracht op 7 juni 2022. De update werd voor het eerst aangekondigd op 16 oktober 2021, tijdens Minecraft Live 2021. Het introduceert gloednieuwe materialen, blokken en locaties, zoals de deep dark en mangrove swamp biomes; oude steden; mobs zoals de warden, de kikker, het kikkervisje en de allay, evenals nieuwe items die alleen in deze nieuwe biomes te verkrijgen zijn.",
  },
  {
    year: 2023,
    title: "Minecraft Trails & Tales Update",
    description:
      "<b>1.20</b>, de eerste release van Trails & Tales, is een grote update voor Java Edition uitgebracht op 7 juni 2023. Oorspronkelijk aangekondigd tijdens Minecraft Live 2022 op 15 oktober 2022, werd de naam van de update onthuld tijdens Minecraft Monthly op 2 maart 2023. Trails & Tales richt zich op het laten uiten van spelers door middel van nieuwe bouwstenen en storytelling. Het introduceert trail ruïnes, de kameel en sniffer mobs, het archeologie systeem, de cherry grove biome, en andere functies.",
  },
  {
    year: 2024,
    title: "Minecraft Tricky Trails Update",
    description:
      "<b>1.21</b>, de eerste release van Tricky Trials, is een grote update voor Java Edition uitgebracht op 13 juni 2024. Oorspronkelijk aangekondigd tijdens Minecraft Live 2023 op 15 oktober 2023, werd de naam van de update onthuld in een Minecraft Monthly op 26 april 2024. De update zou zich richten op “gevechtsavonturen en knutselen” en introduceert verschillende koperblokvarianten en een nieuwe structuur genaamd trial chambers, evenals de nieuwe crafter, nieuwe tufsteenvarianten, het nieuwe mace wapen, twintig nieuwe schilderijen en nieuwe vijandige mobs die onder andere spawnen in de trial chambers. De game bevat ook enkele wijzigingen aan het Bad Omen-effect en veel bugfixes.",
  },
];
items.forEach((item) => {
  document.write(`
      <div class="timeline-item">
        <div class="timeline-date">${item.year}</div>
        <div class="timeline-content">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      </div>
    `);
});
