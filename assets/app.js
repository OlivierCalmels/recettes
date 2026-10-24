(function () {
  const app = document.getElementById("app");
  const LEGUMES = window.LEGUMES || [];
  const RECETTES = window.RECETTES || [];
  const MODES = window.MODES || {};

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const duree = (t) => (t.min === t.max ? `${t.min} min` : `${t.min}–${t.max} min`);

  // ---------- Pages ----------
  function accueil() {
    app.innerHTML = `
      <input class="search" id="q" type="search" placeholder="Chercher un légume ou une recette…" autocomplete="off">
      <h2>Temps de cuisson par légume</h2>
      <div class="grid" id="legumes"></div>
      <h2>Recettes</h2>
      <div class="list" id="recettes"></div>`;
    const q = document.getElementById("q");
    const draw = () => {
      const f = norm(q.value.trim());
      const ls = LEGUMES.filter((l) => norm(l.nom).includes(f));
      const rs = RECETTES.filter((r) => norm(r.titre).includes(f));
      document.getElementById("legumes").innerHTML =
        ls.map((l) => `<a class="card" href="#/legume/${l.id}"><span class="icone">${l.icone || "🥬"}</span><strong>${esc(l.nom)}</strong></a>`).join("") ||
        `<p class="muted">Aucun légume trouvé.</p>`;
      document.getElementById("recettes").innerHTML =
        rs.map(carteRecette).join("") ||
        `<p class="muted">${RECETTES.length ? "Aucune recette trouvée." : "Pas encore de recette."}</p>`;
    };
    q.addEventListener("input", draw);
    draw();
  }

  function carteRecette(r) {
    const t = [r.preparation && `prép. ${r.preparation} min`, r.cuisson && `cuisson ${r.cuisson} min`].filter(Boolean).join(" · ");
    return `<a class="card" href="#/recette/${r.id}"><strong>${esc(r.titre)}</strong><span class="muted">${esc(t)}</span></a>`;
  }

  function pageLegume(id, modeChoisi) {
    const l = LEGUMES.find((x) => x.id === id);
    if (!l) return introuvable();
    const modes = Object.keys(l.cuissons || {}).filter((m) => MODES[m]);
    const mode = modes.includes(modeChoisi) ? modeChoisi : modes[0];
    const liees = RECETTES.filter((r) => (r.legumes || []).includes(l.id));

    app.innerHTML = `
      <a class="back" href="#/">← Accueil</a>
      <h1>${l.icone || ""} ${esc(l.nom)}</h1>
      ${l.saison ? `<p class="muted">Saison : ${esc(l.saison)}</p>` : ""}
      ${l.preparation ? `<p>${esc(l.preparation)}</p>` : ""}

      <div class="tabs" role="tablist">
        ${modes.map((m) => `<button class="tab" role="tab" aria-selected="${m === mode}" data-mode="${m}">${MODES[m].icone} ${esc(MODES[m].nom)}</button>`).join("")}
      </div>
      <p class="depart">${esc((l.departs && l.departs[mode]) || MODES[mode].depart)}</p>
      <ul class="times">
        ${l.cuissons[mode].map((t) => `
          <li>
            <span>${esc(t.decoupe)}<br><span class="duree">${duree(t)}</span></span>
            <button class="go" data-min="${t.max}" data-label="${esc(l.nom)} · ${esc(t.decoupe)}">⏱ ${t.max} min</button>
          </li>`).join("")}
      </ul>
      ${l.test ? `<p class="muted">✔︎ ${esc(l.test)}</p>` : ""}

      ${l.conseils?.length ? `<h2>Conseils</h2><ul class="plain">${l.conseils.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
      <h2>Recettes avec ${esc(l.nom.toLowerCase())}</h2>
      <div class="list">${liees.map(carteRecette).join("") || `<p class="muted">Pas encore de recette.</p>`}</div>`;

    app.querySelectorAll(".tab").forEach((b) =>
      b.addEventListener("click", () => aller(`#/legume/${l.id}/${b.dataset.mode}`, true))
    );
    app.querySelectorAll(".go").forEach((b) =>
      b.addEventListener("click", () => lancerMinuteur(+b.dataset.min, b.dataset.label))
    );
  }

  function pageRecette(id) {
    const r = RECETTES.find((x) => x.id === id);
    if (!r) return introuvable();
    const infos = [r.personnes && `${r.personnes} pers.`, r.preparation && `prép. ${r.preparation} min`, r.cuisson && `cuisson ${r.cuisson} min`].filter(Boolean).join(" · ");
    app.innerHTML = `
      <a class="back" href="#/">← Accueil</a>
      <h1>${esc(r.titre)}</h1>
      <p class="muted">${esc(infos)}</p>
      <h2>Ingrédients</h2>
      <ul class="plain">${(r.ingredients || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      <h2>Étapes</h2>
      <ol>${(r.etapes || []).map((e) => `<li>${esc(e)}</li>`).join("")}</ol>
      ${r.notes ? `<h2>Notes</h2><p>${esc(r.notes)}</p>` : ""}`;
  }

  function introuvable() {
    app.innerHTML = `<a class="back" href="#/">← Accueil</a><p>Page introuvable.</p>`;
  }

  // ---------- Routage ----------
  // La page courante est gardée en mémoire : la navigation marche même là où
  // l'adresse ne peut pas changer (aperçu intégré, cadre protégé).
  let courant = "#/";
  try { courant = location.hash || "#/"; } catch (e) {}

  function afficher(chemin) {
    courant = chemin || "#/";
    const [, type, id, extra] = courant.split("/");
    if (type === "legume") pageLegume(decodeURIComponent(id || ""), extra);
    else if (type === "recette") pageRecette(decodeURIComponent(id || ""));
    else accueil();
  }

  function aller(chemin, remplacer) {
    const memePage = chemin.split("/").slice(0, 3).join("/") === courant.split("/").slice(0, 3).join("/");
    afficher(chemin);
    try {
      if (remplacer) history.replaceState(null, "", chemin);
      else history.pushState(null, "", chemin);
    } catch (e) {}
    if (!memePage) window.scrollTo(0, 0);
  }

  // Intercepte tous les liens internes (#/…) au lieu de laisser le navigateur naviguer.
  document.addEventListener("click", (ev) => {
    const a = ev.target.closest && ev.target.closest('a[href^="#/"]');
    if (!a) return;
    ev.preventDefault();
    aller(a.getAttribute("href"));
  });
  window.addEventListener("popstate", () => {
    try { afficher(location.hash || "#/"); } catch (e) {}
  });
  afficher(courant);

  // ---------- Minuteur ----------
  const box = document.getElementById("minuteur");
  const lbl = document.getElementById("minuteur-label");
  const aff = document.getElementById("minuteur-temps");
  let fin = 0, tick = null;

  function lancerMinuteur(minutes, label) {
    clearInterval(tick);
    fin = Date.now() + minutes * 60000;
    lbl.textContent = label;
    box.classList.remove("fini");
    box.hidden = false;
    maj();
    tick = setInterval(maj, 250);
  }
  function maj() {
    const reste = Math.max(0, Math.round((fin - Date.now()) / 1000));
    aff.textContent = `${String(Math.floor(reste / 60)).padStart(2, "0")}:${String(reste % 60).padStart(2, "0")}`;
    if (reste === 0) { clearInterval(tick); box.classList.add("fini"); sonner(); }
  }
  function sonner() {
    try { navigator.vibrate?.([300, 150, 300, 150, 300]); } catch (e) {}
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.5, 1].forEach((t) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 880; o.connect(g); g.connect(ctx.destination);
        g.gain.setValueAtTime(0.25, ctx.currentTime + t);
        o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.3);
      });
    } catch (e) {}
  }
  document.getElementById("minuteur-stop").addEventListener("click", () => {
    clearInterval(tick); box.hidden = true;
  });
})();
