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
| `reverie.md` | Optional development notes (section breakdown) |

See [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme) and [Submit your theme](https://docs.obsidian.md/Themes/App+themes/Submit+your+theme) in the Obsidian developer docs.

## Publishing a release

Community installs download `manifest.json` and `theme.css` from a **GitHub release** whose tag matches `version` in `manifest.json`.

1. Bump `version` in `manifest.json` (semver `x.y.z`).
2. Update `versions.json` if needed.
3. Create a GitHub release with tag equal to that version (e.g. `1.0.1`).
4. Attach `manifest.json` and `theme.css` to the release.

## Development

Edit `theme.css` directly. Use `reverie.md` for a section-by-section reference if you prefer working from notes.

## Feedback

Hope you enjoy it. Share feedback on the [forum thread](https://forum.obsidian.md/t/theme-reverie-dark-light/6770).

## License

MIT — see [LICENSE](LICENSE).
