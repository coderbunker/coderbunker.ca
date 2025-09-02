# coderbunker.ca
Coderbunker Canada landing page

Brief: https://docs.google.com/document/d/1xpbedH1DP_uP1s9IhstSerLtQEcD-CYtuRYbqVcE-C8/edit#

Production: [coderbunker.ca](https://coderbunker.ca/)

Staging: [coderbunker-staging.netlify.app](https://coderbunker-staging.netlify.app/)



## Framework

* [Gatsby](https://www.gatsbyjs.com/)
* [i18next](https://github.com/microapps/gatsby-plugin-react-i18next)
* [Tailwind CSS](https://tailwindcss.com/)
* [styled-components](https://styled-components.com/)
* [Netlify](https://www.netlify.com/)



## Asset Attribution

* [DrawKit](https://www.drawkit.io)

## What was completed?

* Wireframe (Phase 1): [figma](https://www.figma.com/proto/v1GDDcPMpdDOgRBmwTnDQo/CoderBunker?node-id=419%3A47&scaling=min-zoom&page-id=201%3A1183)
* One-pager (Phase 1): [Pull Request](https://github.com/coderbunker/coderbunker.ca/pull/2)

## What still needs to be done?

* Refer to this [issue](https://github.com/coderbunker/coderbunker.ca/issues/1)
* Phase 2: To be envisioned



## How to deploy?

### Production (Netlify)

Continuous Deployment on Netlify of the main branch of this repo (i.e. everytime code got merged onto the **main** branch, it will trigger a rebuild on Netlify.

Changes can be seen 👉 [coderbunker.ca](https://coderbunker.ca/)



### Staging

You can refer to Netlify deploy preview on the pull request.

You can use gh-pages as an alternative 👉 [coderbunker.github.io/coderbunker.ca](https://coderbunker.github.io/coderbunker.ca/)

```bash
gatsby clean
npm run deploy
```
or
```bash
gatsby clean
gatsby build --prefix-paths && gh-pages -d public -r git@github.com:coderbunker/coderbunker.ca.git
```

### Build
```bash
npm run build
```
or
```bash
gatsby build
```



## Structure of code

```
coderbunker
├── locales
├── src
│   ├── assets
│   │   ├── content
│   │   │   ├── members  👈 Where team member info is stored
│   │   │   └── partners 👈 Where partners (& clients) info is stored
│   │   ├── fonts
│   │   └── images
│   ├── components       👈 reusable components
│   ├── pages
│   │   ├── 404.js
│   │   └── index.js
│   └── styles
├── gatsby-browser.js
├── gatsvy-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── postcss.config.js
└── tailwind.config.js

```

## Team Content

### Add a team member

#### Folder Structure

```
├── src
    ├── assets
        └── content
            ├── members
            │       ├── 01_ricky_ng_adam.jpg  👈 team member portrait
            │       └── 01_ricky_ng_adam.json 👈 team member info
            └── partners


```
#### JSON File Example

```
{
  "en": {
    "name": "Ricky Ng-Adam",
    "title": "Founder, Coderbunker",
    "linkedin": "https://www.linkedin.com/in/rngadam/",
    "github": "https://github.com/rngadam",
    "image": "01_ricky_ng_adam.jpg",
    "highlights": [
      "25 years experience in software development",
      "Architecture, design, R&D",
      "Team recruitment, building and coaching",
      "Javascript, Python, C/C++, bash, plpgsql",
      "API: REST, Websockets, GraphQL",
      "Deployment (Linux, Ansible, Cloud, Docker)",
      "Database (PostgreSQL)"
    ]
  },
  "fr": {
    "name": "Ricky Ng-Adam",
    "title": "Fondateur, chez Coderbunker",
    "linkedin": "https://www.linkedin.com/in/rngadam/",
    "github": "https://github.com/rngadam",
    "image": "01_ricky_ng_adam.jpg",
    "highlights": [
      "25 ans d'expérience dans le développement de logiciels",
      "Architecture, design, R&D",
      "Recrutement d'équipe, constitution et coaching",
      "Javascript, Python, C/C++, bash, plpgsql",
      "API: REST, Websockets, GraphQL",
      "Déploiement (Linux, Ansible, Cloud, Docker)",
      "Base de données (PostgreSQL)"
    ]
  }
}

```


1. Copy an existing JSON file in the `/content/members` folder, and rename it following the naming convention i.e. `01_ricky_ng_adam`

2. Add an image to the same folder `/content/members`, make sure the image file name matched what was specified in the json file.

Please keep the highlights short and sweet, max 7 bullet points.




## Partner (& Client) Content

### Add a partner

#### Folder Structure

```
├── src
    ├── assets
        └── content
            ├── members
            └── partners
                    ├── 01_drave.json 👈 partner info
                    └── 01_drave.png  👈 partner logo

```
#### JSON File Example

```
{
  "name": "Drave développement",
  "website": "https://drave.quebec/",
  "logo": "01_drave.png"
}

```


1. Copy an existing JSON file in the `/content/partners` folder, and rename it following the naming convention i.e. `01_drave`

2. Add an image to the same folder `/content/partners`, make sure the image file name matched what was specified in the json file.


## Translation

### add/remove translation strings

```
├── locales
    └── fr
        └── index.json // 👈 non team-member related translation string goes here
```
