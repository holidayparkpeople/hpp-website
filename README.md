# The Holiday Park People — website

The rebranded homepage for [holidayparkpeople.co.uk](https://www.holidayparkpeople.co.uk), built as a plain static site (HTML, CSS and a little JavaScript). No build step and nothing to install.

## Preview it on GitHub Pages

1. Create a new repository on GitHub (for example `hpp-website`).
2. Upload everything in this folder to the repository (drag and drop on the repository page works), keeping the folder structure.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two the site is live at `https://<your-username>.github.io/hpp-website/`.

To use your own domain later, add it under **Settings → Pages → Custom domain** and point your DNS at GitHub Pages.

## Preview it on your computer

Open `index.html` in a browser. (The podcast player and fonts need an internet connection.)

## What's where

```
index.html               The homepage
assets/css/styles.css    All styling. Brand colours, fonts and spacing are set at the top.
assets/js/main.js        Mobile menu and partner-logo fallback
assets/img/logo/         Logo and monogram (SVG)
assets/img/icons/        Doodle service icons
images/                  Photos and partner logos (see images/README.md)
favicon.*, *.png         Favicons and app icons
site.webmanifest         App icon settings
```

## Still to do

- **Photos and partner logos:** add them to `images/` (see `images/README.md`).
- **Newsletter form:** connect it to your newsletter provider. Look for the `TODO` comment in `index.html`.
- **Inner pages:** Our Services, Our Story, Our Network, Our Blog and Contact. For now the menu links go to the pages on the current website.
- **Small copy check:** the blog card's small label says "Our story" (as on the current site). It may have been meant to say "Our blog".

## Brand

Colours: Navy `#111844`, Rose red `#AA1945`, Soft coral `#F2B8A6`, Cream `#F7EFE6`, Blush `#FBE7DF`, Sage mist `#DCE5D7`, Carafe `#69524B`, Peach `#DBB396`.
Fonts (Google Fonts): Bricolage Grotesque (headlines), DM Sans (body), Instrument Serif Italic (tagline).
