# kua-demo-template-vite

Template **Vite + React + TypeScript + Tailwind v3** utilisé par [Küa harness](https://github.com/Wrivard/kua-agent) via Replit MCP.

## Comment c'est utilisé

Quand un projet est généré depuis ce template, Küa harness :

1. Crée un repo dérivé via GitHub `/repos/.../generate` API → `bonjour-kua/kua-demo-<slug>-<rand>`
2. Push un dossier `_inputs/` à la racine contenant :
   - `INVENTORY.md` — index de ce qui est disponible
   - `INSTRUCTIONS.md` — disciplines de build (identité, 3 directions, anti-générique, WCAG AA, etc.)
   - `lead.json` — palette + brand fields extraits de Facebook
   - `skill.md` — skill de design (layout/typo/motion)
   - `photos/` — photos clientes classifiées
3. Appelle Replit MCP `create_app_from_prompt` qui crée un Repl, clone ce repo, et fait construire le site par le Replit Agent

Replit Agent lit `_inputs/INSTRUCTIONS.md`, applique les disciplines, et push le résultat sur `main`.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind v3** avec design tokens en CSS vars (`src/index.css`) → mappés dans `tailwind.config.js`
- **`@/...` alias** vers `src/`
- **shadcn-friendly** — `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react` préinstallés

## Structure attendue après build

```
src/
├── App.tsx                          # composition root, ≤50 lignes
├── main.tsx                         # entry, ne pas toucher
├── index.css                        # tokens CSS vars + Tailwind directives
├── lib/
│   └── utils.ts                     # cn() helper
└── components/
    └── sections/                    # 1 fichier par section (Hero, About, Services, …)
```

## Pourquoi Vite et pas Next.js

- Replit Agent est natively React-first (training + sandboxes optimisés)
- Next.js SWC compiler crash (SIGBUS) dans le sandbox Replit
- Sites marketing PME n'ont pas besoin d'app router / RSC / server actions
- SEO en SPA bien fait (meta tags + sitemap + structured data) ≈ SSR pour ce type de pages
