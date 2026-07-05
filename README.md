# Guneet Singh — 2D Spine Animator Portfolio

Premium mobile-first portfolio for Guneet Singh, focused on 2D Spine animation for casino and slot games. The site showcases Spine rigs, character motion, UI motion, feature animations, and VFX with a fast thumbnail grid and modal-based live Spine playback.

## Run Locally

Install dependencies:

```bash
npm install
```

Regenerate portfolio data and copy Spine assets:

```bash
npm run generate:portfolio
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Portfolio Data

The source Spine export folder is:

```text
/Users/guneet/SpinePortfolioExports
```

Running `npm run generate:portfolio` scans that folder, copies supported assets into:

```text
public/spine-assets/
```

and regenerates:

```text
src/data/portfolioItems.generated.ts
```

The scanner expects each portfolio folder to contain Spine JSON, atlas, and texture files. It also reads animation names from the Spine JSON so the modal can expose animation tabs.

## Thumbnails

Grid cards use clean thumbnail assets only. The scanner looks for these names in each export folder, in this order:

```text
thumbnail.webp
thumbnail.png
cover.webp
cover.png
preview.webp
preview.png
```

Atlas/runtime textures are not used as card thumbnails. If a clean thumbnail is missing, the card shows a dark premium placeholder.

## Thumbnail Export Standard

Place a clean preview image inside each Spine export folder:

```text
thumbnail.webp
```

Recommended settings:

```text
1024 x 1024 px
transparent background
subject centered
10-20% padding
WebP quality 75-85
```

Example:

```text
/Users/guneet/SpinePortfolioExports/Dog/thumbnail.webp
```

After adding or replacing thumbnails, run:

```bash
npm run generate:portfolio
npm run build
```

Then hard refresh the browser.

## Spine Playback

For performance, the Selected Work grid is thumbnail/placeholder-only and does not mount Spine players. Clicking or tapping a card opens the modal, lazy-loads the official Esoteric Spine Player, and plays the selected animation there.

The Spine runtime is pinned in `package.json`:

```text
@esotericsoftware/spine-player@4.2.119
```

Modal playback uses `premultipliedAlpha: true`, mipmaps, and viewport padding to preserve glows, rays, and blend effects.

## Resume

The resume PDF lives at:

```text
public/guneet-singh-resume.pdf
```

The hero "Download Resume" button and the compact contact "Resume" button both link to that file.
