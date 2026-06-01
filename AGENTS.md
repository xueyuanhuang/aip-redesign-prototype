# AGENTS.md

## Project

This directory is the website repository for the AIP redesign prototype.

Repository:
- GitHub: `https://github.com/xueyuanhuang/aip-redesign-prototype`
- Default branch: `main`
- GitHub Pages URL: `https://xueyuanhuang.github.io/aip-redesign-prototype/`
- Pages source: `main` branch, repository root

## Site Type

This is a static exported site. There is currently no build command in this repository.

Most page content, metadata, and browser tab titles are edited directly in generated files:
- `index.html`
- nested `*/index.html` pages
- `manifest.json`
- SVG/PNG assets
- minified CSS and JavaScript assets when absolutely necessary

Because the site is static, keep edits precise and avoid broad rewrites.

## Important Files

- `index.html`: home page and home page metadata.
- `manifest.json`: app name, short name, icons, and PWA metadata.
- `logo.svg`: site logo shown in navigation/footer.
- `home-logo.svg`: home page logo asset.
- `ab-favicon.svg` and `ab-favicon-*.png`: browser favicon assets.
- `.nojekyll`: required so GitHub Pages serves static assets as-is.
- `README.md`: short repository description.

## Editing Rules

- Check `git status --short --branch` before editing.
- Do not overwrite unrelated user changes.
- Keep changes scoped to the requested page or behavior.
- Preserve existing URLs and folder structure unless explicitly asked to change them.
- Do not remove `.nojekyll`.
- Do not introduce a build system unless explicitly asked.
- Do not edit minified CSS or JavaScript unless the requested change cannot be made in HTML or assets.

## Naming and Metadata

When changing site naming, titles, or branding, update all relevant places consistently:
- `<title>`
- `<meta property="og:title">`
- `<meta property="og:site_name">`
- visible nav/footer/logo text
- `manifest.json` `name` and `short_name`
- RSS XML titles if the change affects feeds

Browser tab hover cards mainly use the page `<title>`. The domain line is controlled by the deployed URL, not by site HTML.

## Publish Workflow

Every website change should be pushed to GitHub so GitHub Pages can update.

Standard flow:

```bash
git status --short --branch
git add <changed files>
git commit -m "docs: update collaboration instructions"
git push
```

Use a commit message that matches the actual change, for example:
- `docs: add agent collaboration guide`
- `fix: update home page title`
- `chore: refresh favicon assets`

After push, GitHub Pages publishes from `main` branch root. Wait briefly for the online page to update before final verification.

## Verification

For HTML or metadata changes:
- Open the affected local HTML file when practical.
- Check the browser tab title.
- Check visible page content, navigation, and footer.
- Check relevant metadata in the HTML source.

For live-site verification:
- Use Chrome via `@chrome` when available.
- Open `https://xueyuanhuang.github.io/aip-redesign-prototype/`.
- Hard refresh if the page appears stale.
- Confirm the changed content is visible on the published site.

For layout changes:
- Check desktop width.
- Check a mobile-sized viewport.
- Ensure text does not overlap or overflow.

## Multi-Agent Handoff

When handing off or finishing work, report:
- Files changed.
- Commit hash if committed.
- Whether `git push` succeeded.
- Local verification performed.
- GitHub Pages verification result or whether it is still pending.

If another window is already editing the same page, coordinate before changing that file.
