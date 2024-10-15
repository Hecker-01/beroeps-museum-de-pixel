const items = [
  {
    year: 2009,
    title: "Eerste release van Minecraft",
    description:
      "Markus 'Notch' Persson brengt de eerste alpha-versie van Minecraft uit op 17 mei 2009. Het spel krijgt meteen veel aandacht vanwege zijn open wereld en sandbox-ontwerp.",
  },
  {
    year: 2010,
    title: "Minecraft Beta",
    description:
      "Op 20 december 2010 wordt de beta-versie van Minecraft uitgebracht. Nieuwe functies zoals multiplayer en survival-modus trekken een groeiende community aan.",
  },
  {
    year: 2011,
    title: "Officiële release van Minecraft",
    description:
      "Op 18 november 2011 wordt de volledige versie van Minecraft uitgebracht tijdens MineCon. Het spel is beschikbaar voor pc, en wordt geprezen om zijn creatieve vrijheid.",
  },
  {
    year: 2014,
    title: "Microsoft koopt Mojang",
    description:
      "In November 2014 koopt Microsoft de ontwikkelaar Mojang en de rechten op Minecraft voor $2,5 miljard. Dit markeert een belangrijke mijlpaal in de commercialisering van het spel.",
  },
  {
    year: 2018,
    title: "Minecraft Update Aquatic",
    description:
      "De Update Aquatic, uitgebracht in juli 2018, voegt nieuwe onderwatercontent toe aan Minecraft, waaronder zeedieren, planten en een nieuwe vijand genaamd de Drowned.",
  },
  {
    year: 2019,
    title: "Minecraft Village & Pillage Update",
    description:
      "De Village & Pillage Update, uitgebracht in april 2019, voegt nieuwe dorpsbewoners, blokken en vijanden toe aan Minecraft. Het is een van de grootste updates tot nu toe.",
  },
  {
    year: 2019,
    title: "Minecraft Buzzy Bees Update",
    description:
      "De Buzzy Bees Update, uitgebracht in december 2019, voegt bijen en bijenkorven toe aan Minecraft. Het introduceert ook nieuwe blokken en items die verband houden met bijenteelt.",
  },
  {
    year: 2020,
    title: "Minecraft Nether Update",
    description:
      "De Nether Update, uitgebracht in juni 2020, voegt nieuwe biomen, blokken en vijanden toe aan de Nether-dimensie van Minecraft. Het is een van de meest verwachte updates van het spel.",
  },
  {
    year: 2021,
    title: "Minecraft Caves & Cliffs Update (Deel 1)",
    description:
      "De Caves & Cliffs Update, uitgebracht in juni 2021, voegt nieuwe grotten, bergen en wezens toe aan Minecraft. Het is een van de grootste updates in de geschiedenis van het spel.",
  },
  {
    year: 2021,
    title: "Minecraft Caves & Cliffs Update (Deel 2)",
    description:
      "Het tweede deel van de Caves & Cliffs Update wordt uitgebracht in november 2021. Het voegt nieuwe functies en verbeteringen toe aan het spel, waaronder nieuwe blokken en wezens.",
  },
  {
    year: 2022,
    title: "Minecraft Wild Update",
    description:
      "De Wild Update, uitgebracht in juni 2022, voegt nieuwe dieren, planten en biomen toe aan Minecraft. Het breidt de natuurlijke wereld van het spel uit en biedt nieuwe mogelijkheden voor avontuur.",
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
