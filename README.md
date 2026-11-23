# Marie Joy — React Portfolio

Converted from the uploaded multi-page HTML/CSS/JS portfolio to **React + Vite + React Router**.

## Included
- Home, About, Work (Skills, Projects, Achievements), Contact
- Original content, photos and pink/purple CSS theme
- React-controlled Work dropdown (click outside / Escape to close)
- React Router navigation using **HashRouter**, compatible with GitHub Pages refreshes
- Source files in `src/`, images in `public/image/`

## Run in Visual Studio Code

Open the project folder in VS Code. In the terminal:

```bash
npm install
npm run dev
```

Open the **Local** link printed by Vite (usually `http://127.0.0.1:5173/`).

## Verify it is React

`src/main.jsx` uses `createRoot(...)`; `src/App.jsx` renders React routes and `src/Navbar.jsx` uses React state.

## GitHub Pages

1. Upload the project files to your `Marie-Joy.github.io` repository (not `node_modules`).
2. Run `npm install && npm run build` to generate `dist`.
3. For a user-site repo `Marie-Joy.github.io`, you can deploy with `npm run deploy` **after** setting up Git remote and GitHub authentication. That publishes built files on `gh-pages` branch; select that branch under repository Settings → Pages (root folder). Alternatively configure GitHub Actions to build and deploy the `dist` folder.
4. If using a repository **other than** `Marie-Joy.github.io`, change `base` in `vite.config.js` to `'/YOUR-REPO-NAME/'`.

Note: React HashRouter URLs look like `https://USERNAME.github.io/#/about`, so navigation works on static hosting.
