# Carte blanche — direction picker

> Read this skill when the project has NO `design_skill_id` tagged.
> You are NOT bound to a specific named design skill, but you are
> NOT in pure-freestyle either — you pick from a curated set of
> 5 directions documented in `agent-skills/directions/`. The user-
> facing experience is "carte blanche" (the user didn't pick a
> direction); the agent-internal experience is "anchored to one
> of 5 directions chosen from the brief + sector signals".

This rewrite (Wave H6) replaces the prior 31-line "explore freely,
no prescriptions" prose. Replit's Q&A round 3 confirmed that
unconstrained creative freedom + a brief produces the LLM's
training-data median (beige sans-serif three-column). The fix is
**structured creative freedom**: directions provide hard floors
(no generic moves) and ceilings (no off-direction moves), but the
room in between stays large enough that the brief drives the
actual outcome.

---

# How to use this skill

You read this dispatcher to:

1. Understand the 5 available directions (one paragraph each
   below).
2. Pick the right direction for THIS project based on the brief's
   sector + identity sentence + voice samples.
3. Read the picked direction's full body from
   `agent-skills/directions/<name>.md`.
4. Apply that direction's HARD constraints + ANTI-PATTERNS as
   absolute rules, SOFT preferences as defaults, VARIATION axes
   as range-based choices driven by brief inputs.
5. Pick one of the direction's 3-5 composition signatures based on
   content density and identity.

**Do NOT mix directions.** Pick one. The whole site executes in
that direction's language. Mixing fragments tokens across the
build (Replit's failure mode for split-context multi-direction
generation).

---

# The 5 directions (overview)

Each direction is distinct in 3+ of 5 axes (typography, color,
layout, motion, imagery). The full body of each lives in
`agent-skills/directions/<name>.md` — read it after picking.

## 1. Editorial Brutalist
*Type-led, asymmetric, anti-decorative, single bold accent. The
serif-led editorial voice + asymmetric composition + bold accent
matches "boutique craft / contemporary" positioning. Best fit:
high-end artisanal food, contemporary boutiques, agencies,
editorial-leaning creative practices, premium media.*
→ `agent-skills/directions/editorial-brutalist.md`

## 2. Soft Warm Artisanal
*Material palette derived from real materials (oak, brass, paper,
tile), serif body with hand-painted signage typography influence,
process imagery, generous narrative space. Best fit: food
artisanal (boucher, boulanger, fromager, traiteur), boutique
retail with craft positioning, small-craft trades, warm
boutique services.*
→ `agent-skills/directions/soft-warm-artisanal.md`

## 3. Industrial Precision
*Cold neutrals, monospace accents, grid-locked layouts,
technical-drawing aesthetic, hard geometric edges. Best fit:
construction trades (general contractor, électricien, plombier,
HVAC), technical services, B2B logistics, technical creative
(industrial designers, modernist architects).*
→ `agent-skills/directions/industrial-precision.md`

## 4. Tech Minimal
*High contrast, system fonts (Inter / IBM Plex Sans / Söhne),
generous whitespace, minimal palette with one strong accent,
motion accents, product-screenshot-led layouts. Best fit:
SaaS, developer tools, platforms, mobile apps, modern services-
professional firms with tech positioning.*
→ `agent-skills/directions/tech-minimal.md`

## 5. Boutique Refined
*Soft luxe palette (off-whites, dusty pastels, warm metallics),
serif display, refined motion, editorial photography, generous
spacing. Best fit: high-end personal services (premium spa,
boutique salon, refined fitness), boutique retail with luxe
positioning, fine dining, premium health (boutique aesthetic
medicine, premium dental), boutique services-professional.*
→ `agent-skills/directions/boutique-refined.md`

(Slots 6 and 7 reserved for the next round of sector audit. Per
Replit: "Add a new direction when you've seen ≥3 projects in
production where none of your existing directions fit without
active distortion." We don't add directions speculatively.)

---

# How to pick (decision flow)

The picker is a function of (sector, identity sentence, voice
register). Use this decision tree:

## Step 1 — Consult the sector entry's `direction_compatibility`

When the harness inlines a sector entry (Wave H4), it lists which
directions rate **excellent fit / acceptable fit / poor fit** for
this sector. Filter: pick from "excellent fit" first, "acceptable
fit" only if the brief's identity sentence justifies, NEVER from
"poor fit" without explicit user override.

Example sector → direction pre-filtering (illustrative — the
authoritative list is in each sector entry):

- `food-artisanal` → excellent: Soft Warm Artisanal, Editorial
  Brutalist (high-end), Boutique Refined (high-end specialty)
- `food-restaurant` → excellent: Boutique Refined (fine dining),
  Soft Warm Artisanal (warm casual), Editorial Brutalist
  (contemporary)
- `construction-trades` → excellent: Industrial Precision;
  acceptable: Editorial Brutalist (high-end residential reno)
- `retail-boutique` → excellent: Boutique Refined, Editorial
  Brutalist (contemporary/contrarian), Soft Warm Artisanal
  (maker-overlap)
- `services-professional` → excellent: Editorial Brutalist
  (restrained), Boutique Refined (high-end advisory)
- `services-personal` → excellent: Boutique Refined, Soft Warm
  Artisanal
- `health` → excellent: Boutique Refined; acceptable: Editorial
  Brutalist (restrained)
- `creative` → excellent: Editorial Brutalist, Boutique Refined,
  Tech Minimal (digital studios)
- `tech-saas` → excellent: Tech Minimal; acceptable: Editorial
  Brutalist, Industrial Precision (technical products)

When NO sector matches: read the identity sentence and voice
register, pick the direction whose identity description
(in this dispatcher's "5 directions overview" section, plus
the direction file's `## Identity` block) most resonates.

## Step 2 — Cross-check with identity sentence

The identity sentence (Rule 1 of `kua-brief.md`) anchors the
specific tone. Read it and the picked direction's `## Identity`
section side-by-side:

- Does the direction's character match the brand's character?
  (A "third-generation boucher with smoke-room smell" matches
  Soft Warm Artisanal natively; forcing Tech Minimal here
  would be off-register.)
- Does the direction's typography lean align with the voice
  register? (Sharp / contemporary voice → Editorial Brutalist;
  warm / craft voice → Soft Warm Artisanal; technical /
  utilitarian voice → Industrial Precision.)

If the identity sentence and the sector's "excellent fit"
direction don't align, prefer the one the identity sentence
matches. Sector compatibility is a strong prior; identity
alignment trumps it when they conflict.

## Step 3 — When in doubt: log + pick

Don't agonize. The directions are designed so each has a
non-trivial range of variation (palette, typography, composition
signatures), so different briefs in the same direction produce
visibly different sites. If the call is genuinely 50/50 between
two directions, log a brief note in `decisions.md` (which one,
why, what the alternative would have been) and pick. The
critique pass (Wave H7) compares the output against the sector's
reference set; if the pick was wrong, the critique flags it
and you can swap on the fix-loop.

---

# Variation discipline

Replit's warning, captured verbatim because it's load-bearing:

> "Directions can over-constrain into being effectively single
> templates. The signal that you've gone too far is when all
> sites in a direction start looking like the same site with
> different content. When that happens, expand a variation axis,
> not contract it. The healthy pattern: direction sets the floor
> (no generic moves) and the ceiling (no off-direction moves),
> but the room in between stays large enough that the brief
> drives the actual outcome. If the brief barely matters because
> the direction has decided everything, the direction is too
> concrete. If the direction barely matters because the brief is
> doing all the work, the direction is too abstract."

Each direction has VARIATION axes (palette range, type pair set,
asymmetry pattern, motion timing, etc.) that the agent picks
from based on brief inputs:

- **Brand palette anchor** — if the lead's `brand.colors_extracted`
  has a strong primary, anchor the accent within the direction's
  range to it. Two electricians both in Industrial Precision
  shouldn't pick the same yellow; one matches their existing red,
  the other matches their existing green.
- **Identity-sentence emotional register** — calmer identity
  → lower chroma in the picked palette; energetic identity →
  higher chroma. Within the direction's range.
- **Sector specificity** — within Soft Warm Artisanal, a boucher
  picks deeper warm browns + burgundy accent; a fromager picks
  lighter creams + brass accent. Same direction, sector-specific
  variation.

Per-build determinism comes from the brief inputs driving the
variation pick, not from randomness. Two identical briefs would
produce similar (not identical) sites in the same direction;
two different briefs produce visibly different sites.

---

# Anti-prior anchors (apply regardless of direction)

Replit's literal strings (Rule 3 of `kua-brief.md`) apply on top
of every direction's specifics:

> Reject mediocrity. No safe choices.
> Derive palette from the product's domain, not from generic defaults.

If your output looks like a Wix template with the picked
direction's surface tweaks, you've under-applied the direction.
The directions exist precisely to refuse the median; if you
catch yourself producing a centered-hero with three-CTA-stack
in any direction, stop and re-pick a composition signature.

---

# What changed in this rewrite (Wave H6, 2026-04-29)

- Replaced 31 lines of "explore freely, no prescriptions" with a
  dispatcher that picks from 5 named directions
- Each direction lives in `agent-skills/directions/<name>.md`
  with HARD / SOFT / VARIATION / ANTI structure (per Replit's
  Q4 spec in round 3)
- Sector → direction routing pre-filtering documented (matches
  each sector entry's `direction_compatibility`)
- Variation discipline added (Replit's "directions can
  over-constrain" warning verbatim)
- Carte blanche output now matches named-skill output quality
  for the same sector — the user's choice between "tag a
  named skill" vs. "leave it carte blanche" is no longer a
  quality cliff, just a cross-project consistency decision
