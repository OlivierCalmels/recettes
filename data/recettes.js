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
//   notes: "Facultatif"
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
    legumes: ["courgette", "carotte"],
    personnes: 4,
    preparation: 20,
    cuisson: 45,
    ingredients: [
      "1 pâte feuilletée ou brisée, selon ce qu'on a",
      "250 g de ricotta",
      "1 à 2 courgettes",
      "Sel, poivre",
      "Facultatif : 1 à 2 c. à soupe de concentré de tomate (ou une autre alternative, comme du pesto)",
      "Facultatif : quelques champignons et 1 gousse d'ail",
      "Facultatif : 1 ou 2 carottes",
    ],
    etapes: [
      "Préchauffer le four à 180 °C. Étaler la pâte dans un moule à tarte.",
      "Facultatif : faire cuire les carottes (voir la page Carotte pour les temps), puis les écraser.",
      "Facultatif : couper finement les champignons et les faire revenir à la poêle avec l'ail.",
      "Préparer l'appareil : assaisonner la ricotta, puis y mélanger, selon les envies, le concentré de tomate, les carottes écrasées et les champignons (coupés fins, pas écrasés).",
      "Étaler l'appareil sur la pâte.",
      "Trancher finement les courgettes et les disposer par-dessus.",
      "Enfourner 45 minutes à 180 °C, puis il n'y a plus qu'à se régaler.",
    ],
    notes:
      "La base, c'est juste la pâte, la ricotta et les courgettes. Le concentré de tomate, les carottes écrasées et les champignons à l'ail sont des options pour l'enrichir.",
  },
];
