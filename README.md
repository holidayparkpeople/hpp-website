# The Holiday Park People — website

The rebranded website for [holidayparkpeople.co.uk](https://www.holidayparkpeople.co.uk), built as a plain static site (HTML, CSS and a little JavaScript). No build step and nothing to install.

Live preview: https://holidayparkpeople.github.io/hpp-website/

## Preview it on GitHub Pages

1. Create a new repository on GitHub (for example `hpp-website`).
2. Upload everything in this folder to the repository (drag and drop on the repository page works), keeping the folder structure.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two the site is live at `https://<your-username>.github.io/hpp-website/`.

To use your own domain later, add it under **Settings → Pages → Custom domain** and point your DNS at GitHub Pages.

## Preview it on your computer

Each page lives in its own folder (for example `our-services/index.html`) so the web addresses stay tidy, like `/our-services/`. Browsers don't follow folder links when you open files directly, so run a small local server from this folder instead:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000. (The podcast player and fonts need an internet connection.)

## What's where

```
index.html                       Home
our-services/                    Our Services, plus one folder per service
  holiday-home-sales/ holiday-sales/ marketing/ training/ events/ pitch-yield/
our-story/                       Our Story
our-team/                        Meet the team, plus one folder per person
our-network/                     Our Network (partner profiles)
our-blog/                        Our Blog, plus one folder per post
contact/                         Contact Us
privacy-policy/  terms-and-conditions/
sitemap.xml                      List of every page, for search engines
assets/css/styles.css            All styling. Brand colours, fonts and spacing are set at the top.
assets/js/main.js                Mobile menu and partner-logo fallback
assets/img/logo/                 Logo and monogram (SVG)
assets/img/icons/                Doodle service icons
images/                          Photos, team headshots, partner logos and blog images
favicon.*, *.png                 Favicons and app icons
site.webmanifest                 App icon settings
```

The wording, photos and partner details on every page come from the current website.

## Still to do

- **Newsletter form:** connect it to your newsletter provider. Look for the `TODO` comment near the bottom of each page.
- **Outdoor Living's link** on Our Network goes to thecaravanclub.co.uk, the same as on the current website. It probably needs Outdoor Living's own address.
- **Privacy Policy address:** the "Contact Us" section of the Privacy Policy still shows the old address (2/4 Coastal Road, Hest Bank, LA2 6HN). The footer uses Askam House, Hampson, LA2 0HY.
- **Gary Smith's photo** is a placeholder silhouette on the current website too.

## Brand

Colours: Navy `#111844`, Rose red `#AA1945`, Soft coral `#F2B8A6`, Cream `#F7EFE6`, Blush `#FBE7DF`, Sage mist `#DCE5D7`, Carafe `#69524B`, Peach `#DBB396`.
Fonts (Google Fonts): Bricolage Grotesque (headlines), DM Sans (body), Instrument Serif Italic (tagline).
