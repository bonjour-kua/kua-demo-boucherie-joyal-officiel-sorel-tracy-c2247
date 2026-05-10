# Instructions de build — Boucherie Joyal Officiel Sorel-Tracy

## Objectif

Construire un home page marketing pour **Boucherie Joyal Officiel Sorel-Tracy** (Boucherie, Sorel-Tracy).

**Tu es capable de travail créatif extraordinaire. N'aie pas peur — Boucherie Joyal Officiel Sorel-Tracy mérite un site qui lui ressemble, pas un template.**

Direction de design : voir `_inputs/skill.md` pour les **HARD constraints**, **SOFT preferences**, **VARIATION axes**, **ANTI-PATTERNS**, et **Composition signatures**. Le skill **ne contient PAS de couleur** — la couleur vient de `lead.json.palette` (voir plus bas).

## Discipline qualité — à lire AVANT de coder

Le harness Küa expose ce projet à Replit Agent en un seul pass autonome. Aucune review humaine ne suit. Si tu ne respectes pas la discipline ci-dessous, le site régressera vers le « warm-and-friendly par défaut » qui rend les sites de PME interchangeables. Les 7 sections suivantes sont obligatoires — chacune produit un artefact concret sur disque.

### 1. Identité d'abord — `decisions.md` AVANT toute section

Avant d'écrire la moindre ligne de code dans `src/components/sections/*`, écris `decisions.md` à la racine du repo. Ce fichier contient trois blocs courts et spécifiques à **Boucherie Joyal Officiel Sorel-Tracy** :

1. **Phrase d'identité (2-3 phrases)** — au format « {Nom} est le {quoi} pour {qui spécifique}. ». Le test : si tu remplaces le nom par celui d'un concurrent du même secteur dans la même ville, la phrase doit devenir fausse ou maladroite. Source : `lead.json.description` + `lead.json.facebook_url` + voice-samples si présents.
2. **Vibe (une phrase, 3-5 adjectifs sensoriels)** — exemples : « artisanal et chaleureux », « industriel direct sans bullshit », « précis, calme, rassurant comme une salle d'urgence propre », « cuir patiné, bois huilé, fierté tranquille ». **INTERDIT** : noms de styles design (« minimal », « modern », « clean », « tech », « editorial »). Ce sont des labels, pas des feelings.
3. **Charge émotionnelle (une phrase)** — l'émotion que le visiteur doit ressentir en 5 secondes + l'action qui doit suivre. Format : « {Émotion} → {action concrète attendue} ». Exemple : « Confiance qu'ils savent ce qu'ils font → décrocher le téléphone. »

**Phrasings INTERDITS partout dans le site** (red flags génériques) :
- « votre partenaire de confiance », « partenaire fiable », « notre engagement envers vous »
- « qualité reconnue », « qualité supérieure », « excellence à votre service »
- « depuis X années à votre service » (sans chiffre vérifié dans `lead.json`)
- « one-stop shop », « your local experts », « vos experts locaux »
- « professionnels dévoués », « équipe dévouée », « entreprise familiale fière »
- Tout Lorem ipsum, tout `{{placeholder}}`, tout nom d'entreprise inventé

Chaque ligne de copy du site doit pouvoir se justifier par un artefact concret de `lead.json` (description, phone, city, palette, sector, voice samples). Pas de fabrication. Si `lead.json` est mince, écris moins de copy plutôt que de combler avec du générique.

### 2. Exploration de thème — `theme-variants.md` AVANT le CSS

Avant de figer la palette / typo / vibe dans `src/index.css` ou `tailwind.config.js`, écris `theme-variants.md` à la racine du repo. Ce fichier expose **3 directions distinctes** que tu as considérées :

```md
# Directions de thème explorées

## Direction A — {label court, ex: « Industriel direct »}
**Palette** : utilise quels hex de `lead.json.palette` et comment.
**Typographie** : paire Google Fonts (display + body) + 1 ligne de pourquoi.
**Vibe** : 3-5 mots sensoriels.
**Ce qui NE rendra PAS bien avec cette direction** : 1 ligne honnête, pour CE projet précis.

## Direction B — {label délibérément différent}
(même structure)

## Direction C — {troisième angle, encore différent}
(même structure)

## Direction retenue : {A | B | C}
**Pourquoi** (3-5 lignes) : citer la phrase d'identité de `decisions.md`, le vibe, la charge émotionnelle. Pointer un artefact concret du lead. PAS « c'est plus moderne ». PAS « ça correspond mieux ».
```

**Règles strictes** :
- Les 3 directions doivent occuper des zones réellement différentes de l'espace de design (pas 3 nuances de la même palette). Test : si tu peux échanger les labels et que chacun reste crédible, recommence.
- Aucune direction ne peut être « safe / corporate / minimal » seule — c'est un défaut, pas une direction.
- La ligne « ne rendra PAS bien » est obligatoire pour les 3, et doit être un risque crédible POUR CE PROJET.
- Les 2 directions non-retenues vivent uniquement dans `theme-variants.md`. Elles ne génèrent aucun code.

### 3. Notes de design par section — `content/section-designs/*.design.md` AVANT chaque .tsx

Pour chaque section listée plus bas, écris UN court fichier `content/section-designs/<Component>.design.md` AVANT le `.tsx` correspondant. Format strict (5 blocs courts) :

```md
# {Section} — design notes

## Composition
{1-2 lignes : layout (full-bleed / split / grid / liste), proportions, hiérarchie visuelle.}

## Hiérarchie
{1-2 lignes : eyebrow → H2 → subtitle → body. Quoi est dominant, quoi est secondaire.}

## Motion / interaction
{1 ligne : reveal au scroll ? hover sur cards ? rien ? Justifier par la vibe.}

## Expression de marque
{1-2 lignes : comment cette section incarne la phrase d'identité + le vibe de `decisions.md`. Pointer UN détail spécifique à ce business.}

## Tokens utilisés
{Liste : --primary, --accent_on_dark, --foreground, --background, etc. Le .tsx ne peut utiliser QUE ces tokens — aucun hex inventé, aucun "#ffffff" hardcodé.}

## DO NOTs (pour CE projet)
- {1-3 puces : choses à éviter dérivées de l'identité, ex: "pas d'icônes flat identiques pour les services — chaque service a une photo réelle dans `_inputs/photos/`".}
```

Le `.design.md` est ton plan ; le `.tsx` est l'implémentation. **Le `.tsx` ne peut PAS introduire de tokens / patterns absents du `.design.md`.** Si en codant tu réalises que ton plan était incomplet, mets à jour le `.design.md` d'abord, puis le `.tsx`.

### 4. Anti-générique checklist — verify AVANT le build

Avant de commit, parcours le repo et vérifie qu'AUCUN des patterns suivants n'est présent :

- [ ] **Aucun `@ts-nocheck`** dans le code source. Interdit. Si TypeScript râle, fix la vraie erreur (vérifie les imports, les types React 18 — pas besoin de `'use client'`, on est en SPA Vite, pas Next).
- [ ] **Aucun « Lorem ipsum »**, aucun `{{placeholder}}`, aucun « TODO », aucun « XXX », aucun nom d'entreprise factice.
- [ ] **Aucune URL d'image stock** (Unsplash, Pexels, Lorem Picsum, placeholder.com). Toutes les `<img src>` pointent vers `/images/<role>/<filename>` copié depuis `_inputs/photos/`. Si une section veut une photo absente, utilise un fallback bloc-couleur dérivé de la palette (cf. discipline 5), pas une stock photo.
- [ ] **Toutes les photos `usable:true` du manifest sont utilisées**. `_inputs/photos/manifest.json` liste les photos que le harness a jugées exploitables ; CHACUNE doit apparaître au minimum une fois dans le site rendu (Hero, About, Gallery, Services, Team, etc. — la section dépend du `role` du manifest). Les photos qui ne trouvent pas leur place sont un signal qu'une section manque ou que la composition d'une section gagnerait à être enrichie. Documente le mapping `photo → section` dans `decisions.md` (un bloc par photo, à la fin du fichier sous un titre `## Photos utilisées`). Si une photo est délibérément écartée (qualité douteuse, redondance), liste-la dans `follow-ups.md` avec `[low]` et la raison.
- [ ] **Aucune valeur de couleur inventée**. Toute valeur CSS de couleur (oklch, hex, rgb, hsl) doit tracer à `lead.json.palette` ou aux tokens dérivés (`--primary`, `--accent_on_dark`, `--accent_on_light`, neutres slate/zinc explicitement listés dans `theme-variants.md`). Aucune couleur d'accent ne sort du chapeau.
- [ ] **Aucune des phrases interdites** de la section 1 (« partenaire de confiance », « qualité reconnue », « one-stop shop », « your local experts », « professionnels dévoués », etc.).
- [ ] **Aucune section ne pourrait être ctrl-C'd à un concurrent du même secteur** sans modification. Test : prends la section Hero, remplace mentalement le nom de l'entreprise par celui d'un concurrent — la copy doit devenir fausse ou maladroite. Idem Services, About, CTA.

Si une case échoue, **fix avant de commit**. Pas de « presque bon ».

#### Logo — règle stricte

Le logo extrait pour ce projet n'a PAS de fond transparent (`_inputs/photos/logo-clean.jpg` est l'image brute, le bg-removal a échoué ou été skippé). Si tu l'utilises sur un navbar foncé, le rectangle blanc/coloré du fond sera visible — c'est un bug de qualité.

- **Default** : utilise-le sur un fond clair compatible avec son arrière-plan natif (`<img src="/images/logo-clean.jpg" alt="..."/>`).
- **Sur fond foncé** : préfère le wordmark typographié plutôt que l'image. Ajoute un item `[med]` dans `follow-ups.md` pour noter le souci.


### 5. Contraste WCAG AA — vérification mécanique

`lead.json.palette` expose deux variantes pré-vérifiées par le harness Küa :
- `palette.accent_on_dark` — **garantie WCAG AA** contre `#0F172A` (slate-900). Utilise-la pour tout accent posé sur fond sombre (CTA sur dark hero, badge sur footer foncé, etc.).
- `palette.accent_on_light` — **garantie WCAG AA** contre `#FFFFFF`. Utilise-la pour tout accent posé sur fond clair (CTA sur background blanc, lien sur card blanche, etc.).

Règles de contraste à vérifier mentalement avant le build :
- Body text sur background : ≥ **4.5:1**.
- Large text (≥ 18.66px bold ou ≥ 24px regular) + composants UI (boutons, focus rings, icônes signifiantes) : ≥ **3:1**.
- Si tu poses `palette.dominant[0]` directement sur un fond sans passer par les variantes `accent_on_*`, tu prends le risque que le contraste fail. Préfère les variantes quand elles existent.

### 6. Trace de décisions — `decisions.md` + `follow-ups.md` (append-only)

Au-delà du bloc d'identité (section 1), tu utilises `decisions.md` comme **journal append-only des décisions notables** prises pendant le build. Et `follow-ups.md` comme **dette technique non-fixée**.

**`decisions.md`** — chaque décision substantielle (palette retenue, ordre des sections, ton de copy choisi, fallback design quand une photo manquait) reçoit un bloc :

```md
---
## {YYYY-MM-DD HH:mm} · {label court, ex: "palette pick"}

**Décision** : ce qui a été choisi (1 phrase).
**Pourquoi** : artefact concret de `lead.json` ou d'une discipline ci-dessus qui justifie. Pas « c'est plus moderne ».
**Trade-off accepté** : ce qu'on sacrifie en figeant ce choix (1 phrase).
```

Append-only. Chaque bloc commence par `---`. Ne jamais réécrire les blocs précédents.

**`follow-ups.md`** — items observés mais pas fixés cette passe (typo à valider, photo manquante remplacée par fallback, copy un peu fade dans une section secondaire). Format :

```md
---
## {YYYY-MM-DD HH:mm} · build

- [{high|med|low}] {fichier ou zone} — {description 1 ligne, actionnable}
```

Un fichier vide est valide. Ne mets pas de filler « RAS ».

### 7. Self-review final — AVANT `git commit`

Dernier passage. Coche mentalement chaque case. Si une seule échoue, fix avant de pousser :

- [ ] `decisions.md` existe et contient le bloc d'identité (phrase d'identité + vibe + charge émotionnelle).
- [ ] `theme-variants.md` existe et expose 3 directions distinctes + une retenue justifiée.
- [ ] Pour CHAQUE section listée plus bas, le `.design.md` correspondant existe sous `content/section-designs/` (`content/section-designs/Hero.design.md`, `content/section-designs/About.design.md`, `content/section-designs/Menu.design.md`, `content/section-designs/Hours.design.md`, `content/section-designs/Gallery.design.md`, `content/section-designs/Testimonials.design.md`, `content/section-designs/Faq.design.md`, `content/section-designs/Contact.design.md`, `content/section-designs/Footer.design.md`).
- [ ] Pour CHAQUE section listée plus bas, le composant `src/components/sections/<Component>.tsx` existe ET contient au minimum **30 lignes** de JSX réel. Vérification mécanique : `wc -l src/components/sections/*.tsx` — aucune section ne doit être en-dessous de 30. Si une section a été délibérément réduite (peu de données dans `lead.json`), livre-la quand même avec un placeholder honnête type « Détails à venir » + lien vers le contact, et ajoute un item `[high]` dans `follow-ups.md`. **Une section squelette qui rend un `<div>` vide = bug visuel inacceptable** (l'utilisateur voit un grand bloc blanc à la place du contenu).
- [ ] Anti-générique checklist (section 4) : toutes les cases vertes — incluant l'utilisation de chaque photo `usable:true` du manifest.
- [ ] Contraste WCAG AA (section 5) : tous les couples couleur du site validés mentalement.
- [ ] `npx tsc --noEmit` (ou `npm run typecheck` si exposé) passe sans erreur. **C'EST LE GATE QUI COMPTE.**
- [ ] Aucun `@ts-nocheck` dans le code (`grep -r "@ts-nocheck" .` retourne vide).
- [ ] `npm run build` (Vite) doit passer. Vite est rapide et fiable dans le sandbox Replit (pas le SIGBUS qu'on avait avec Next.js SWC). Si exceptionnellement ça crash pour cause environnementale, tsc clean reste le gate de fond — push avec note dans le commit message.

---

## Ordre de build

1. `Read _inputs/INVENTORY.md`
2. Lis chaque fichier listé dans l'ordre de priorité (lead.json, skill.md, manifest.json, voice-samples.md si présent, reference-image si présent).
3. **Écris `decisions.md`** (bloc d'identité — discipline 1) AVANT toute section.
4. **Écris `theme-variants.md`** (3 directions + retenue — discipline 2).
5. Implémente les tokens du thème dans `src/index.css` (CSS vars dans `@layer base`) et `tailwind.config.js` selon la direction retenue. Utilise EXCLUSIVEMENT les couleurs de `lead.json.palette` + neutres slate/zinc documentés.
6. Pour CHAQUE section listée plus bas : d'abord `content/section-designs/<Component>.design.md` (discipline 3), ensuite `src/components/sections/<Component>.tsx`.
7. Wire `src/App.tsx` comme une composition root mince (≤50 lignes), important les sections depuis `src/components/sections/`.
8. **Photo wiring** — pour CHAQUE photo `usable:true` du manifest :
   a. Copie le binaire depuis `_inputs/photos/<filename>` vers `public/images/<role>/<filename>` (Vite serve `public/` à la racine, donc `<img src="/images/<role>/<filename>"/>` résout).
   b. Décide quelle section l'utilise (le `role` du manifest est le hint principal — `hero`/`about`/`team`/`equipment`/`location`/`gallery` — mais tu peux le surcharger si une autre section bénéficie davantage de cette photo).
   c. Append un bloc dans `decisions.md` sous `## Photos utilisées` : `<filename> → <Section> (raison: 1 ligne pointant le `reason` du manifest)`.
   d. Si une photo n'a pas d'emplacement naturel, c'est un signal qu'une section devrait être créée ou enrichie — n'écarte pas silencieusement. Documente l'écart dans `follow-ups.md` avec `[low]` si vraiment hors-sujet.
9. Anti-générique checklist (discipline 4) — verify chaque case.
10. `npx tsc --noEmit` doit être propre (gate obligatoire). `npm run build` est best-effort (peut crasher SIGBUS dans Replit sandbox — ce n'est pas bloquant).
11. Self-review final (discipline 7).
12. Commit + push to `main` avec les commandes ci-dessous.

## Sections à inclure

- `Hero` — composant à créer dans `src/components/sections/Hero.tsx`
- `About` — composant à créer dans `src/components/sections/About.tsx`
- `Menu` — composant à créer dans `src/components/sections/Menu.tsx`
- `Hours` — composant à créer dans `src/components/sections/Hours.tsx`
- `Gallery` — composant à créer dans `src/components/sections/Gallery.tsx`
- `Testimonials` — composant à créer dans `src/components/sections/Testimonials.tsx`
- `FAQ` — composant à créer dans `src/components/sections/Faq.tsx`
- `Contact` — composant à créer dans `src/components/sections/Contact.tsx`
- `Footer` — composant à créer dans `src/components/sections/Footer.tsx`

Adapte la composition à chaque section selon le skill. Si une section semble redondante ou hors-sujet pour ce client précis, **omet-la** (ne pas créer une section vide « par défaut »). Documente l'omission dans `decisions.md`.

## Source de vérité couleur

**Couleur EXCLUSIVEMENT depuis `lead.json.palette`** :
- `palette.dominant` : palette principale (hex, ordonnée par dominance) — utilise au moins le `[0]` comme accent principal et le `[1]` comme accent secondaire.
- `palette.vibrant` / `palette.dark_vibrant` : variantes accentuées (utiles pour CTA / labels).
- `palette.accent_on_dark` / `palette.accent_on_light` : variantes vérifiées WCAG AA (cf. discipline 5) — utilise-les directement pour tout accent posé sur fond foncé/clair.

**JAMAIS** d'OKLCH / hex / palette inventés ou pris du skill. Si le skill évoque une couleur, lis-la comme une **règle de contraste** et applique-la avec la palette du lead.

## Hard requirements (non-négociable)

- **WCAG AA contrast** (cf. discipline 5) — vérifie chaque paire couleur.
- **Mobile responsive** — teste mentalement 375px, 768px, 1280px.
- **Pas de `<img>` sans alt** — utilise les `alt` du manifest, ou enrichis-les si nécessaire.
- **Site marketing à la racine `/` du dev server** — quand l'utilisateur visite `http://localhost:<port>/`, il DOIT voir le site marketing complet (Hero, About, etc.). Si le template comporte des routes pré-existantes type `/__mockup/preview/<slug>/Page`, `/preview/...`, ou un router avec plusieurs vues — supprime-les ou rends-les inertes. Le site marketing N'EST PAS un sous-route. Vérification mécanique : ouvre `src/App.tsx` après ton wiring et confirme qu'il rend directement les sections (pas un `<Routes>` qui les expose à un sous-chemin).
- **HARD constraints du skill RESPECTÉES** — voir `_inputs/skill.md`.
- **ANTI-PATTERNS du skill ÉVITÉS** — voir `_inputs/skill.md`.
- **Couleur EXCLUSIVEMENT depuis `lead.json.palette`** — JAMAIS d'OKLCH/hex/palette du skill.
- **Aucune directive `'use client'`** — on est en SPA Vite, pas Next.js. Tous les fichiers sont client-side par défaut.
- **Pas de `@ts-nocheck`** — corrige la vraie erreur (souvent : import manquant ou type incompatible avec React 18).

## Voice

- Utilise `_inputs/voice-samples.md` comme référence de ton (n'imite pas verbatim — adapte par section).
- Langue : **français canadien (fr-CA)** par défaut. Si `lead.json.industry` ou `description` suggère un public anglophone, bascule en anglais.

## Final commit + push

```bash
git add .
git commit -m "Initial build for Boucherie Joyal Officiel Sorel-Tracy via Replit Agent"
git push origin main
```

Si le build échoue, documente l'erreur dans le commit message et pousse quand même — le harness côté Küa pollera ce commit pour reprendre.
