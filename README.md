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
- No build step, framework, or API key required

## Run locally

Open index.html in a browser, or serve this directory with any static file server.

## Deployment

This repository contains the static frontend source. It does not currently include a Wrangler configuration or an automated deployment workflow. Pushing to main updates the GitHub source; it does not by itself prove that an existing Cloudflare Worker has been redeployed. Publish the updated files through the deployment configuration attached to the target hosting project. For a separate Cloudflare Pages project, use the repository root as the build output directory and leave the build command blank.

## Catalogue and artwork

The current catalogue is a curated demonstration dataset in app.js; search and filters run locally in the browser. Poster and backdrop artwork is referenced from TMDB's image CDN, with an additional Interstellar poster reference. KINOSERA is not endorsed or certified by TMDB. Before a public launch, review the applicable image and metadata terms, keep the required attribution visible, and move to an approved metadata integration for reliable and maintainable title data.

A future TMDB integration can supply live metadata, regional watch-provider availability, and official trailer references. Watch-provider information is powered by JustWatch through TMDB and requires its own attribution. Full-length video hosting is intentionally out of scope for this version.
