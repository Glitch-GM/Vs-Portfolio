# Gulshan | Video Editor Portfolio

A static portfolio website. No build step, no dependencies. Open `index.html` in a browser to preview it.

## Folder structure

```
gulson-portfolio/
├── index.html        Page structure (HTML)
├── css/
│   └── styles.css    All styling, colors and layout (CSS)
├── png/              Icons and images (icon-instagram.png, icon-x.png, icon-gmail.png)
├── js/
│   ├── data.js       Your content: name, links, projects, testimonials (edit this)
│   └── main.js       Builds the page from data.js (rarely needs editing)
└── README.md
```

## How to edit

| I want to change...                      | Edit this file        |
| ---------------------------------------- | --------------------- |
| Name, email, Instagram, X links          | `js/data.js`          |
| Project titles, video links, runtimes    | `js/data.js`          |
| Client names and testimonials            | `js/data.js`          |
| Colors, fonts, spacing                   | `css/styles.css`      |
| Reel thumbnails                          | `png/thumbnails/` (replace reel-1.png, reel-2.png, long-1.png, same names) |
| Icons and images                         | `png/` folder (keep the same file names) |
| Page sections or their order             | `index.html`          |

Leave a list empty (`[]`) in `data.js` to hide that section.

## Deploy to Netlify

1. Go to https://app.netlify.com/drop
2. Drag this whole folder (or the zip) onto the page.
3. Your site goes live at a `.netlify.app` address.

To update the live site later, open your site's Deploys page and drag the folder again.
