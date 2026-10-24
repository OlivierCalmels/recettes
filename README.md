# Mes recettes

Site statique (HTML, CSS, JavaScript, sans dépendance) pour GitHub Pages :
temps de cuisson par légume selon le mode (cocotte-minute, vapeur, eau bouillante)
et recettes personnelles.

## Structure

- `index.html` : la page unique du site
- `data/legumes.js` : les légumes et leurs temps de cuisson
- `data/recettes.js` : les recettes
- `assets/` : style et logique (recherche, pages, minuteur)

## Ajouter un légume ou une recette

Ajouter une entrée dans `data/legumes.js` ou `data/recettes.js` en suivant
le modèle déjà présent. Une recette apparaît automatiquement sur la page des
légumes listés dans son champ `legumes`.

## Publier sur GitHub Pages

1. Pousser ces fichiers à la racine du dépôt (branche `main`).
2. Dans le dépôt : Settings → Pages → Source « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est en ligne quelques minutes plus tard sur `https://<pseudo>.github.io/<dépôt>/`.

Le site fonctionne aussi en ouvrant simplement `index.html` dans un navigateur.
