# Carpe Diem Optic Landing Page

This folder is the local working copy for the Carpe Diem Optic landing page.

## Key files

- `index.html`: live website source
- `design-style-spec.md`: visual direction and reference notes
- `design-tokens.json`: color, spacing, and design token reference

## Publishing target

The live site is deployed from the GitHub repository:

- `https://github.com/dolphinnunu/carpediemoptical-landing`

Vercel is connected to that repository and will redeploy automatically after each push.

## Recommended update flow

1. Edit `index.html` in this folder.
2. Review the page locally in the browser.
3. Run `scripts/publish-site.ps1`.
4. Wait for GitHub push and Vercel redeploy.
5. Check `https://www.carpediemoptic.com`.

## Local structure note

This folder keeps the original source files in place for stability.
New maintenance docs, helper scripts, and the local publishing clone live in:

- `docs/`
- `scripts/`
- `publish/carpediemoptical-landing/`
