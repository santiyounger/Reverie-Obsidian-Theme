# Reverie — Obsidian Theme

This theme is mainly designed for dark mode, but light mode works well too.

## Dark mode

![Reverie dark mode](img/reverie-2020-09-14-dark.png)

## Light mode

![Reverie light mode](img/reverie-2020-09-14-light.png)

If you like this theme, leave a comment on the [Obsidian forum post](https://forum.obsidian.md/t/theme-reverie-dark-light/6770).

## Theme name

**Reverie** — *rev•er•ie* (*rĕv′ə-rē*)

> A state of abstracted musing; daydreaming. A daydream. A state of mental abstraction in which more or less aimless fancy predominates over the reasoning faculty; dreamy meditation; fanciful musing.

## Install

Reverie is available in **Obsidian Community Themes**.

1. Open **Settings → Appearance → Themes → Manage**.
2. Search for **Reverie** by Santi Younger.
3. Select **Use** (and **Overwrite** if prompted).

### Manual install (development)

Clone this repository into your vault’s themes folder. The folder name must match `name` in `manifest.json` (**Reverie**):

```bash
cd path/to/vault/.obsidian/themes
git clone https://github.com/santiyounger/Reverie-Obsidian-Theme.git Reverie
```

Restart Obsidian after changing `manifest.json`.

## Repository layout

| File | Purpose |
|------|---------|
| `theme.css` | Theme styles (installed by Obsidian) |
| `manifest.json` | Theme metadata for the community directory |
| `versions.json` | Maps theme versions to minimum Obsidian versions |
| `.github/workflows/release-version.yml` | Publishes a release when you push a version tag |
| `version-bump.mjs` | Keeps `manifest.json` and `versions.json` in sync with `package.json` |

See [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme) and [Submit your theme](https://docs.obsidian.md/Themes/App+themes/Submit+your+theme) in the Obsidian developer docs.

## Publishing a release

Community installs download `manifest.json` and `theme.css` from a **GitHub release** whose tag matches `version` in `manifest.json` (semver `x.y.z`, no `v` prefix).

### Automated (recommended)

When you **push to `master` with a changed `manifest.json`**, GitHub Actions creates a **draft** release tagged with that `version`, with `manifest.json` and `theme.css` attached. No manual tag push needed.

1. Bump `version` in `manifest.json` (e.g. `1.0.1` → `1.0.2`).

2. Add the same version to `versions.json` (value = `minAppVersion`):

   ```json
   {
     "1.0.1": "1.0.0",
     "1.0.2": "1.0.0"
   }
   ```

   Or run `npm version patch` to update `package.json`, `manifest.json`, and `versions.json` together.

3. Commit and push:

   ```bash
   git add manifest.json versions.json theme.css
   git commit -m "Release 1.0.2"
   git push origin master
   ```

4. On GitHub: **Actions** → **Publish new theme version** → then **Releases** → open the new **Draft** and verify assets.

5. When ready: [community.obsidian.md](https://community.obsidian.md) (if needed) → then **Publish release** on GitHub so users can install.

Until step 5, the release stays a draft.

**Note:** Each release needs a **new** `version` number. Re-pushing the same version without changing `manifest.json` will not run the workflow.

### Manual

1. Bump `version` in `manifest.json` and add an entry to `versions.json`.
2. Create a GitHub release with a tag equal to that version.
3. Attach `manifest.json` and `theme.css` to the release.

## Development

Edit `theme.css` at the repository root. Everything after the “End of main theme” comment is reserved for optional snippets or experiments.

### Dark palette

| Role | Hex |
|------|-----|
| Background | `#1A2023` |
| Accent | `#2ccab7` |
| Text | `#faf2d6` |

Use `body` for variables shared across light and dark. Use `.theme-dark` and `.theme-light` only when a value should change with the base color scheme. For graph view, set `--interactive-accent-rgb` as comma-separated RGB (not hex) and use `rgb(var(--interactive-accent-rgb))` on graph nodes.

Vim block cursor styling references:

- [Change block cursor color](https://forum.obsidian.md/t/how-to-change-block-cursor-color-vim-mode/7429/6)
- [Modify cursor style](https://forum.obsidian.md/t/options-to-modify-cursor-style/1091/11?u=santi)
- [Remove blink in vim mode](https://forum.obsidian.md/t/options-to-modify-cursor-style/1091/4?u=santi)

## Feedback

Hope you enjoy it. Share feedback on the [forum thread](https://forum.obsidian.md/t/theme-reverie-dark-light/6770).

## License

MIT — see [LICENSE](LICENSE).
