# Shan Benson Studio — Website

The marketing site for Shan Benson Studio. It's a plain static site: HTML, one CSS file and one JS file. There's no build step and nothing to install.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `contact.html` | Contact (the form opens the visitor's email app, addressed to `hello@shanbensonstudio.com`) |

Shared files:

- `css/style.css` holds all styles. Colors, fonts and the max width are CSS variables at the top of the file under `:root`.
- `js/main.js` toggles the mobile nav menu.

## Preview locally

Open `index.html` in a browser, or run a local server from the repo root:

```sh
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Making changes

- The header, nav and footer are copied into each page. If you change one, change all four.
- On each page, mark that page's nav link with `aria-current="page"`.
- To add a page, copy an existing one, update its `<title>` and meta description, and add it to the nav on every page.

## Deploying

Any static host works (GitHub Pages, Netlify, Cloudflare Pages and others). Publish the repo root as-is.
