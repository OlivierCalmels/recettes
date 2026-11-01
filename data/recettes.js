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
//   photo: "images/mon-plat.jpg",  // facultatif, photo dans le dossier images/
//   photos: [{ src: "images/etape.jpg", legende: "…" }]  // facultatif, photos en plus, en bas de la recette
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
  {
    id: "chips-maison-friteuse",
    titre: "Chips maison à la friteuse",
    photo: "images/chips-maison.jpg",
    photos: [
      { src: "images/chips-maison-egouttage.jpg", legende: "Les tranches rincées, égouttées dans la passoire : c'est comme ça qu'elles ont donné les chips les plus croustillantes." },
      { src: "images/chips-maison-torchon.jpg", legende: "Le premier essai, tranches séchées au torchon : finalement moins croustillantes." },
    ],
    legumes: ["pomme-de-terre"],
    personnes: 4,
    preparation: 30,
    cuisson: 30,
    ingredients: [
      "4 à 5 pommes de terre de consommation (environ 800 g)",
      "Huile de friture",
      "Sel fin",
    ],
    etapes: [
      "Éplucher les pommes de terre (facultatif) et les couper en tranches très fines, environ 2 mm, à la mandoline ou au couteau.",
      "Faire tremper les tranches dans l'eau froide, puis rincer plusieurs fois jusqu'à ce que l'eau reste claire, pour retirer l'amidon.",
      "Égoutter les tranches dans une passoire et les laisser s'égoutter un moment. Pas besoin de les sécher au torchon : encore un peu humides, elles ont donné des chips plus croustillantes.",
      "Chauffer l'huile de la friteuse à 165–170 °C réels (réglage 180 °C sur ma friteuse, vérifié au thermomètre). Une seule cuisson suffit, pas de double cuisson comme pour les frites.",
      "Plonger les tranches par petites quantités, en une seule couche, et remuer pour qu'elles ne collent pas.",
      "Cuire 8 minutes, jusqu'à ce qu'elles soient dorées et que les bulles se calment presque.",
      "Égoutter sur du papier absorbant et saler aussitôt. Elles finissent de croustiller en refroidissant.",
    ],
    notes:
      "Si les premières restent molles une fois refroidies, laisser les suivantes une minute de plus. Plus l'huile est chaude, plus elles brunissent vite sans croustiller ; plus elle est froide, plus elles boivent l'huile. Des tranches plus fines (1 à 1,5 mm) cuisent plus vite et donnent des chips plus légères. Mes essais (tranches de 2 mm, friteuse) : réglage 170 °C pendant 6 minutes, chips un peu molles même refroidies. Le bon résultat : réglage 180 °C, 8 minutes, tranches simplement égouttées à la passoire, plus croustillantes que celles séchées au torchon. Ma friteuse chauffe moins que ce qu'elle affiche : réglée sur 180 °C, l'huile mesurée au thermomètre est à 165 °C (et à 140 °C pour un réglage à 170 °C). Vérifier la température réelle au thermomètre, avant de plonger les chips.",
  },
  {
    id: "jarret-demi-sel-chou-poireaux-cocotte",
    titre: "Jarret de porc demi-sel, chou et poireaux à la cocotte-minute",
    legumes: ["carotte"],
    personnes: 3,
    preparation: 20,
    cuisson: 65,
    ingredients: [
      "1 jarret de porc demi-sel (environ 700 g)",
      "1 chou vert",
      "Des poireaux (le blanc et le vert)",
      "Quelques carottes",
      "1 c. à soupe d'huile",
      "1 cube de bouillon",
      "Facultatif : 1 oignon piqué d'un clou de girofle, thym, laurier, poivre en grains",
      "Pas de sel",
      "Pour servir : moutarde et cornichons",
    ],
    etapes: [
      "Dessaler : mettre le jarret dans la cocotte, couvrir d'eau froide, porter à ébullition et laisser bouillir une dizaine de minutes. Jeter l'eau (et la mousse grise qui s'est formée).",
      "Sécher le jarret avec du papier absorbant, puis le faire dorer dans l'huile bien chaude, quelques minutes sur chaque face.",
      "Déglacer avec un peu d'eau en grattant bien les sucs au fond de la cocotte.",
      "Couvrir le jarret d'eau (sans dépasser les 2/3 de la cocotte), ajouter le cube de bouillon et les aromates éventuels. Ne pas saler.",
      "Fermer la cocotte-minute et cuire 40 minutes à partir du sifflement.",
      "Pendant ce temps, préparer les légumes : couper le chou et retirer le trognon, laver soigneusement les poireaux, couper les blancs en tronçons et émincer finement le vert, éplucher les carottes.",
      "Décompresser, ouvrir, ajouter le chou, les poireaux (blancs et vert émincé) et les carottes.",
      "Refermer et cuire encore 8 à 10 minutes à partir du sifflement.",
      "Servir le jarret avec les légumes, de la moutarde et des cornichons.",
    ],
    notes:
      "Dessaler par une première ébullition évite que le chou et le bouillon soient trop salés ; goûter l'eau après ce premier bouillon pour juger. Le cube de bouillon apporte lui aussi du sel : goûter avant d'en ajouter un deuxième. Le vert des poireaux ne se jette pas : émincé finement, il cuit très bien sous pression et parfume le bouillon. Le chou cuit plus régulièrement en quartiers qu'en moitiés. Garder le bouillon : il fait une très bonne soupe le lendemain.",
  },
];
