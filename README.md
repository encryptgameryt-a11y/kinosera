# KINOSERA

A cinematic, mobile-first discovery experience for films and television. KINOSERA is an independent catalogue and discovery concept; it does not host or stream films.

## Current experience

- Full-bleed featured title experience with cinematic artwork
- Responsive desktop and mobile navigation
- Horizontal title rails with poster artwork and hover states
- Browse by films, series, and genre/mood
- Search across titles, formats, and genres
- Accessible title-detail dialog with synopsis and title-source link
- Personal My List saved in browser local storage
- Recently explored titles saved locally
- Keyboard shortcut / to focus search; Escape clears it
- No build step, framework, or metadata API key required for the current demo catalogue

## Run locally

Open index.html in a browser, or serve this directory with any static file server.

## Cloudflare Workers deployment

The deployable static frontend is in public/ and is served by the Worker in src/index.js. The Wrangler configuration is wrangler.jsonc. The Worker applies security headers to static responses.

GitHub Actions deploys the Worker on pushes to main that change public/, src/, wrangler.jsonc, or the workflow. Before deployment, add these repository Actions secrets:

- CLOUDFLARE_API_TOKEN — a Cloudflare API token with Editor access to the existing kinosera Worker (or equivalent Workers Scripts edit permission).
- CLOUDFLARE_ACCOUNT_ID — the Cloudflare account ID that owns the Worker.

Add them at GitHub repository Settings → Secrets and variables → Actions. Do not commit the token or paste it into chat. Once the secrets exist, rerun the failed deployment in Actions or push a change to one of the watched paths.

## Catalogue and artwork

The current catalogue is a curated demonstration dataset in app.js and public/app.js; search and filters run locally in the browser. Poster and backdrop artwork is referenced from TMDB's image CDN, with an additional Interstellar poster reference. KINOSERA is not endorsed or certified by TMDB. Before a public launch, review the applicable image and metadata terms, keep the required attribution visible, and move to an approved metadata integration for reliable and maintainable title data.

A future TMDB integration can supply live metadata, regional watch-provider availability, and official trailer references. Watch-provider information is powered by JustWatch through TMDB and requires its own attribution. Full-length video hosting is intentionally out of scope for this version.
