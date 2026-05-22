# Reverie — theme development notes

This file replaces the former `reverie.org` Emacs/org-babel workflow. **Shipped styles live in `theme.css`** at the repository root; edit that file for changes users actually receive.

## Palette (dark mode)

| Role | Hex |
|------|-----|
| Background | `#1A2023` |
| Accent | `#2ccab7` |
| Text | `#faf2d6` |

## Section map

The blocks below mirror the original org structure. After editing a section here, copy the CSS into `theme.css` (or edit `theme.css` only).

### Info

```css
/* This Theme is called "Reverie" and Obsidian Theme created by Santi Younger */
```

### Fonts

Prefer `body` for variables shared across light and dark ([Obsidian theme guide](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)):

```css
body {
  --font-monospace: "Source Code Pro", monospace;
}
```

### Theme dark

```css
.theme-dark {
  --background-primary: #1A2023;
  /* ... see theme.css for full variable set */
}
```

### Search highlight (dark)

For Ctrl+F match highlight:

```css
.theme-dark .cm-s-obsidian span.obsidian-search-match-highlight {
  color: var(--text-normal);
  background-color: #483699;
}
```

### Theme light

```css
.theme-light {
  --background-primary: #e7e7e7;
  /* ... see theme.css */
}
```

### Headings

Uniform 20px weight 500; preview selectors include both legacy `.markdown-preview-section` and `.markdown-preview-view`.

### Graph view

`--interactive-accent-rgb` must be comma-separated RGB (not hex). Graph nodes use `rgb(var(--interactive-accent-rgb))`.

### Vim block cursor

References:

- [How to change block cursor color](https://forum.obsidian.md/t/how-to-change-block-cursor-color-vim-mode/7429/6)
- [Modify cursor style](https://forum.obsidian.md/t/options-to-modify-cursor-style/1091/11?u=santi)
- [Remove blink in vim mode](https://forum.obsidian.md/t/options-to-modify-cursor-style/1091/4?u=santi)

```css
.cm-fat-cursor .CodeMirror-cursor,
.cm-animate-fat-cursor {
  background-color: #2ccab7 !important;
  opacity: 0.6 !important;
  width: 9px !important;
  visibility: visible !important;
}
```

## End of main theme

Everything after the “End of main theme” comment in `theme.css` is reserved for optional community snippets or experiments.
