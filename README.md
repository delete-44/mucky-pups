# mucky-pups

Marketing site for Mucky Pups.

## Getting set up

### Recommended

Start a local development server using `npx http-server`, & open the resulting server (usually @ localhost:8080).

### Lo-tech

Open this folder in Finder/File Explorer/etc, and double-click `index.html` to open it.

> ⚠️ Navigation links will not work in this mode; it is suitable for quick changes, but for more involved dev work I recommend using a server

## Tech

This site is as vanilla as they come; HTML/CSS/JS. No frameworks, no dependencies.

## WebComponents

We use WebComponents to share HTML across pages in the website. See these under components/.

We do not use the shadow DOM, as we aren't trying to create isolated components - if anything we WANT these to be affected by the global CSS.

Be cautious when adding to this collection of components; anything rendered here will not be rendered to users without JS enabled. Raw text content especially should be kept in the main HTML body.
