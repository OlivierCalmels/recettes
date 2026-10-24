// Modes de cuisson. Le "depart" précise à partir de quand on compte le temps.
window.MODES = {
  cocotte: {
    nom: "Cocotte-minute",
    icone: "♨️",
    depart: "Compter à partir de la mise en pression (quand la soupape chuchote).",
  },
  vapeur: {
    nom: "Vapeur",
    icone: "💨",
    depart: "Panier au-dessus de l'eau frémissante, couvercle fermé.",
  },
  eau: {
    nom: "Eau bouillante",
    icone: "🫕",
    depart: "Eau salée, compter à partir de la reprise de l'ébullition.",
  },
  four: {
    nom: "Rôti au four",
    icone: "🔥",
    depart: "Four préchauffé à 200 °C (180 °C en chaleur tournante). Légumes huilés et salés, en une seule couche, retournés à mi-cuisson.",
  },
};

// Un légume par entrée. Les temps sont en minutes (min–max) :
// "min" = encore un peu croquant, "max" = fondant.
window.LEGUMES = [
  {
    id: "carotte",
    nom: "Carotte",
    icone: "🥕",
    saison: "Toute l'année (carottes nouvelles : avril à juin)",
    preparation:
      "Éplucher (ou simplement gratter et brosser les carottes nouvelles), rincer, puis couper.",
    test: "Cuite quand la pointe d'un couteau s'enfonce sans résistance.",
    cuissons: {
      cocotte: [
        { decoupe: "Rondelles fines (3–5 mm)", min: 3, max: 4 },
        { decoupe: "Rondelles épaisses (1 cm)", min: 5, max: 6 },
        { decoupe: "Bâtonnets", min: 4, max: 5 },
        { decoupe: "Cubes (1 cm)", min: 3, max: 4 },
        { decoupe: "Entières moyennes", min: 8, max: 10 },
        { decoupe: "Carottes nouvelles entières", min: 5, max: 6 },
      ],
      vapeur: [
        { decoupe: "Rondelles fines (3–5 mm)", min: 12, max: 15 },
        { decoupe: "Rondelles épaisses (1 cm)", min: 18, max: 20 },
        { decoupe: "Bâtonnets", min: 15, max: 18 },
        { decoupe: "Cubes (1 cm)", min: 12, max: 15 },
        { decoupe: "Entières moyennes", min: 25, max: 30 },
        { decoupe: "Carottes nouvelles entières", min: 15, max: 20 },
      ],
      eau: [
        { decoupe: "Rondelles fines (3–5 mm)", min: 8, max: 10 },
        { decoupe: "Rondelles épaisses (1 cm)", min: 12, max: 15 },
        { decoupe: "Bâtonnets", min: 10, max: 12 },
        { decoupe: "Cubes (1 cm)", min: 8, max: 10 },
        { decoupe: "Entières moyennes", min: 20, max: 25 },
        { decoupe: "Carottes nouvelles entières", min: 10, max: 15 },
      ],
      four: [
        { decoupe: "Rondelles épaisses ou en biseau (1 cm)", min: 25, max: 30 },
        { decoupe: "Bâtonnets", min: 25, max: 30 },
        { decoupe: "Coupées en deux dans la longueur", min: 30, max: 35 },
        { decoupe: "Entières moyennes", min: 35, max: 45 },
        { decoupe: "Carottes nouvelles entières", min: 25, max: 30 },
      ],
    },
    conseils: [
      "En cocotte-minute, utiliser le panier vapeur avec environ 20 cl d'eau au fond.",
      "La vapeur garde mieux le goût sucré et la couleur que l'eau.",
      "Pour une purée, viser le temps maximum.",
      "Au four, un filet de miel ou du cumin en fin de cuisson les caramélise.",
    ],
  },
  {
    id: "chou-fleur",
    nom: "Chou-fleur",
    icone: "🥦",
    saison: "Septembre à avril",
    preparation:
      "Retirer les feuilles, rincer. Pour les bouquets, détacher les fleurettes ; pour un demi-chou, couper dans la hauteur en passant par le trognon.",
    test: "Cuit quand la pointe d'un couteau entre facilement dans le trognon.",
    cuissons: {
      cocotte: [
        { decoupe: "Bouquets (fleurettes)", min: 3, max: 5 },
        { decoupe: "Demi-chou-fleur", min: 6, max: 8 },
        { decoupe: "Chou-fleur entier", min: 8, max: 10 },
      ],
      vapeur: [
        { decoupe: "Bouquets (fleurettes)", min: 10, max: 15 },
        { decoupe: "Demi-chou-fleur", min: 20, max: 25 },
        { decoupe: "Chou-fleur entier", min: 25, max: 30 },
      ],
      eau: [
        { decoupe: "Bouquets (fleurettes)", min: 8, max: 10 },
        { decoupe: "Demi-chou-fleur", min: 15, max: 20 },
        { decoupe: "Chou-fleur entier", min: 20, max: 25 },
      ],
      four: [
        { decoupe: "Bouquets (fleurettes)", min: 25, max: 30 },
        { decoupe: "Tranches épaisses (2 cm)", min: 25, max: 30 },
        { decoupe: "Demi-chou-fleur", min: 35, max: 45 },
        { decoupe: "Chou-fleur entier", min: 50, max: 60 },
      ],
    },
    conseils: [
      "Entier ou en moitiés, le poser trognon vers le bas pour une cuisson régulière.",
      "Un trait de lait ou de jus de citron dans l'eau de cuisson le garde bien blanc.",
      "Bien égoutter : il retient beaucoup d'eau.",
      "Au four entier ou en demi, le blanchir 5 min à l'eau bouillante avant raccourcit la cuisson d'environ 15 min ; le couvrir d'aluminium la première moitié du temps.",
    ],
  },
  {
    id: "courgette",
    nom: "Courgette",
    icone: "🥒",
    saison: "Juin à septembre",
    preparation: "Laver, couper les extrémités. Inutile de l'éplucher.",
    test: "Cuite quand la chair devient translucide et tendre, sans s'écraser.",
    cuissons: {
      cocotte: [
        { decoupe: "Rondelles (1 cm)", min: 2, max: 3 },
        { decoupe: "Cubes", min: 2, max: 3 },
        { decoupe: "Bâtonnets", min: 2, max: 3 },
        { decoupe: "Coupée en deux dans la longueur", min: 4, max: 5 },
      ],
      vapeur: [
        { decoupe: "Rondelles (1 cm)", min: 8, max: 10 },
        { decoupe: "Cubes", min: 7, max: 9 },
        { decoupe: "Bâtonnets", min: 8, max: 10 },
        { decoupe: "Coupée en deux dans la longueur", min: 12, max: 15 },
      ],
      eau: [
        { decoupe: "Rondelles (1 cm)", min: 5, max: 7 },
        { decoupe: "Cubes", min: 4, max: 6 },
        { decoupe: "Bâtonnets", min: 5, max: 7 },
        { decoupe: "Coupée en deux dans la longueur", min: 8, max: 10 },
      ],
      four: [
        { decoupe: "Rondelles épaisses (1,5 cm)", min: 15, max: 20 },
        { decoupe: "Cubes", min: 15, max: 20 },
        { decoupe: "Bâtonnets", min: 15, max: 20 },
        { decoupe: "Coupée en deux dans la longueur", min: 20, max: 25 },
      ],
    },
    conseils: [
      "La courgette cuit très vite et devient vite aqueuse : surveiller dès le temps minimum.",
      "La vapeur est le mode qui la garde le mieux.",
      "Au four, ne pas surcharger la plaque, sinon elle rend son eau au lieu de dorer.",
    ],
  },
  {
    id: "pomme-de-terre",
    nom: "Pomme de terre",
    icone: "🥔",
    saison: "Toute l'année (primeurs : mai à juillet)",
    preparation:
      "Brosser et laver. Éplucher ou garder la peau selon l'usage ; couper en morceaux de taille égale.",
    test: "Cuite quand la pointe d'un couteau s'enfonce et ressort sans accrocher.",
    departs: {
      eau: "Mettre dans l'eau salée froide, compter à partir de l'ébullition.",
    },
    cuissons: {
      cocotte: [
        { decoupe: "Entières moyennes", min: 10, max: 12 },
        { decoupe: "Petites (grenailles)", min: 7, max: 8 },
        { decoupe: "Coupées en deux", min: 7, max: 8 },
        { decoupe: "Cubes ou quartiers (3 cm)", min: 5, max: 6 },
        { decoupe: "Rondelles (5 mm)", min: 4, max: 5 },
      ],
      vapeur: [
        { decoupe: "Entières moyennes", min: 25, max: 30 },
        { decoupe: "Petites (grenailles)", min: 20, max: 25 },
        { decoupe: "Coupées en deux", min: 20, max: 22 },
        { decoupe: "Cubes ou quartiers (3 cm)", min: 15, max: 18 },
        { decoupe: "Rondelles (5 mm)", min: 12, max: 15 },
      ],
      eau: [
        { decoupe: "Entières moyennes", min: 20, max: 25 },
        { decoupe: "Petites (grenailles)", min: 15, max: 20 },
        { decoupe: "Coupées en deux", min: 15, max: 18 },
        { decoupe: "Cubes ou quartiers (3 cm)", min: 10, max: 12 },
        { decoupe: "Rondelles (5 mm)", min: 8, max: 10 },
      ],
      four: [
        { decoupe: "Entières moyennes, avec la peau", min: 50, max: 60 },
        { decoupe: "Petites (grenailles) entières", min: 35, max: 40 },
        { decoupe: "Coupées en deux", min: 35, max: 45 },
        { decoupe: "Quartiers", min: 35, max: 45 },
        { decoupe: "Cubes (3 cm)", min: 30, max: 35 },
        { decoupe: "Rondelles (5 mm)", min: 25, max: 30 },
      ],
    },
    conseils: [
      "À l'eau, toujours partir d'eau froide : l'extérieur ne se défait pas avant que le cœur soit cuit.",
      "Pour une purée, choisir une variété farineuse (bintje, agria) et viser le temps maximum.",
      "Pour une salade, une variété à chair ferme (charlotte, ratte) et le temps minimum.",
      "Au four, bien les sécher après lavage pour qu'elles soient croustillantes.",
    ],
  },
];
