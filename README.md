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

The portfolio Spine asset root is:

```text
public/spine-assets/
```

Running `npm run generate:portfolio` scans the six display folders in that asset root and regenerates:

```text
src/data/portfolioItems.generated.ts
```

The scanner reads nested item folders, root-level loose bundles, atlas texture pages, and animation names. Generated items include their display folder and a folder-qualified ID. It does not copy, rename, or delete Spine assets.

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

Atlas/runtime textures are not used as card thumbnails. If a clean thumbnail is missing or fails to load, the card uses the shared `/default-spine-thumbnail.webp` asset. If that shared asset also fails, the existing CSS placeholder remains as the final fallback.

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
public/spine-assets/Symbols/Dog/thumbnail.webp
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
