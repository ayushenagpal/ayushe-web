# Astro Starter Kit: Minimal
# ayushe — personal site

minimal, elegant, fast. built with astro + tailwind. deployed on vercel.

## dev

```bash
npm install
npm run dev
```

## structure

- homepage: hero, intro, quick links
- about: longer bio, resume link
- building: featured projects
- writing: substack embed (or markdown later)
- gallery: art / photography toggle
- contact: email + socials

## design system

- headers: serif (`eb garamond`), body: sans (`inter`)
- lots of white space, subtle gray, accent green `#0b5c4a`
- lowercase everywhere

## deploy (vercel)

1. push to github
2. import repo in vercel, framework: astro
3. build command: `astro build` (default), output: `dist`
4. set custom domain when ready

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
