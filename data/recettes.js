// Tes recettes. Modèle d'une entrée :
// {
//   id: "carottes-vichy",            // identifiant unique, sans espace ni accent
//   titre: "Carottes Vichy",
//   legumes: ["carotte"],            // ids des légumes concernés (lien depuis leur page)
//   personnes: 4,
//   preparation: 10,                 // minutes
//   cuisson: 25,                     // minutes
//   ingredients: ["600 g de carottes", "30 g de beurre"],
//   etapes: ["Éplucher les carottes…", "…"],
//   notes: "Facultatif",
//   photo: "images/mon-plat.jpg"   // facultatif, photo dans le dossier images/
// }
window.RECETTES = [
  {
    id: "houmous-maison",
    titre: "Houmous maison",
    legumes: [],
    personnes: 4,
    preparation: 10,
    ingredients: [
      "1 boîte de pois chiches (400 g, soit environ 250 g égouttés)",
      "3 à 4 c. à soupe d'aquafaba (le liquide de la boîte de pois chiches)",
      "1 gousse d'ail",
      "Le jus d'½ citron",
      "1 c. à café de cumin moulu",
      "Sel",
      "Pour finir : une pincée de cumin en grains et un filet d'huile d'olive",
    ],
    etapes: [
      "Égoutter les pois chiches au-dessus d'un bol pour garder l'aquafaba.",
      "Éplucher la gousse d'ail (la dégermer si besoin).",
      "Mixer les pois chiches avec l'ail, le jus de citron, le cumin moulu et une pincée de sel.",
      "Ajouter l'aquafaba cuillère par cuillère en mixant, jusqu'à obtenir une texture lisse et crémeuse.",
      "Goûter et rectifier en sel, citron ou cumin.",
      "Verser dans un bol, parsemer de cumin en grains et arroser d'un filet d'huile d'olive.",
    ],
    notes:
      "Le secret : le cumin moulu dans le houmous pour le goût, et un peu de cumin en grains sur le dessus avec l'huile d'olive pour que ce soit joli.",
  },
  {
    id: "rillettes-maquereau-tomate-basilic",
    titre: "Rillettes de maquereau, tomate et basilic",
    legumes: [],
    personnes: 4,
    preparation: 5,
    ingredients: [
      "2 boîtes de maquereau à la tomate et au basilic",
      "Facultatif : un peu de sauce sriracha ou d'une autre sauce pimentée",
      "Facultatif : quelques cornichons malossol ou à la paysanne",
      "Pour servir : du pain ou des gressins",
    ],
    etapes: [
      "Mixer le contenu des deux boîtes de maquereau, sauce comprise.",
      "Pour relever, ajouter un peu de sriracha ou d'une autre sauce pimentée et mélanger.",
      "Pour du croquant, couper les cornichons en petits morceaux et les incorporer à la cuillère.",
      "Servir sur du pain ou avec des gressins.",
    ],
    notes:
      "C'est déjà très bon nature ; la sauce pimentée et les cornichons sont des options pour varier.",
  },
  {
    id: "tarte-ricotta-courgette",
    titre: "Tarte salée ricotta courgette",
    photo: "images/tarte-aux-courgettes.jpg",
    legumes: ["courgette", "carotte"],
    personnes: 4,
    preparation: 20,
    cuisson: 45,
    ingredients: [
      "1 pâte feuilletée ou brisée, selon ce qu'on a",
      "250 g de ricotta",
      "2 courgettes",
      "Sel, poivre",
      "Version tomate : 1 à 2 c. à soupe de concentré de tomate",
      "Ou version carotte et champignons : 1 ou 2 carottes, quelques champignons et 1 gousse d'ail",
      "Facultatif, pour la décoration : quelques tomates séchées",
    ],
    etapes: [
      "Préchauffer le four à 180 °C. Étaler la pâte dans un moule à tarte.",
      "Préparer l'appareil en assaisonnant la ricotta, puis choisir une version :",
      "Version tomate : mélanger le concentré de tomate dans la ricotta.",
      "Version carotte et champignons : faire cuire les carottes (voir la page Carotte pour les temps) et les écraser ; couper les champignons en petits morceaux et les faire revenir à la poêle avec l'ail. Mélanger les carottes écrasées dans la ricotta, puis ajouter les champignons (en morceaux, pas écrasés).",
      "Étaler l'appareil sur la pâte.",
      "Trancher finement les courgettes et les disposer par-dessus.",
      "Facultatif : couper des tomates séchées en morceaux et les répartir sur le dessus pour décorer.",
      "Enfourner 45 minutes à 180 °C, puis il n'y a plus qu'à se régaler.",
    ],
    notes:
      "Deux versions au choix pour l'appareil : la version tomate (concentré de tomate dans la ricotta) ou la version carotte et champignons. On peut aussi la faire nature, avec juste la ricotta et les courgettes.",
  },
];
