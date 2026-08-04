# Portfolio Website

A simple, dependency-free portfolio site built with plain HTML, CSS, and JavaScript.
Layout inspired by [brittanychiang.com](https://brittanychiang.com): a sticky intro
panel on the left (name, title, nav, social links) and scrolling content on the
right (About, Experience, Projects).

## Structure

```
Portfolio/
├── index.html      # All page content — edit your name, bio, projects here
├── css/
│   └── styles.css  # Styling — change colors via the :root variables at the top
├── js/
│   └── script.js   # Mobile menu, active-nav highlighting, footer year
├── assets/         # Put your photo, project screenshots, and resume.pdf here
└── README.md
```

## Getting started

1. Open `index.html` and replace every "Your Name" / placeholder text with your own info.
2. Drop your photo and project screenshots into `assets/` and swap the placeholder
   `<div>`s for `<img>` tags (comments in the HTML show you where).
3. Update the email address and social links in the Contact section.
4. To preview, just double-click `index.html` — no server or build step needed.

## Customizing colors

All colors live in CSS variables at the top of `css/styles.css`:

```css
:root {
  --bg: #0f172a;      /* page background */
  --accent: #38bdf8;  /* links, buttons, highlights */
  ...
}
```

Change those few values and the whole site updates.

## Publishing (free options)

- **GitHub Pages** — push this folder to a repo, enable Pages in repo settings.
- **Netlify / Vercel** — drag-and-drop the folder on their dashboard.
