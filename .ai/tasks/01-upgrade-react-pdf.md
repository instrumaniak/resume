# Resume Project: Migrate to Vite + Upgrade React & react-pdf

## Context
This is an existing React app (`create-react-app`) that uses `@react-pdf/renderer` v1.5.6
to render a resume as a PDF in the browser. The goal is to:
- Migrate from CRA (`react-scripts`) to Vite
- Upgrade React to latest (v19)
- Upgrade `@react-pdf/renderer` to latest (v4.x)
- Replace Yarn with npm
- Update Node.js engine constraint in `package.json`

## Current File/Folder Structure

```
.
├── package.json
├── public
│   ├── fonts
│   │   ├── Lato
│   │   │   ├── Lato-BlackItalic.ttf
│   │   │   ├── Lato-Black.ttf
│   │   │   ├── Lato-BoldItalic.ttf
│   │   │   ├── Lato-Bold.ttf
│   │   │   ├── Lato-HairlineItalic.ttf
│   │   │   ├── Lato-Hairline.ttf
│   │   │   ├── Lato-Italic.ttf
│   │   │   ├── Lato-LightItalic.ttf
│   │   │   ├── Lato-Light.ttf
│   │   │   ├── Lato-Regular.ttf
│   │   │   └── OFL.txt
│   │   ├── Open_Sans
│   │   │   ├── LICENSE.txt
│   │   │   ├── OpenSans-BoldItalic.ttf
│   │   │   ├── OpenSans-Bold.ttf
│   │   │   ├── OpenSans-ExtraBoldItalic.ttf
│   │   │   ├── OpenSans-ExtraBold.ttf
│   │   │   ├── OpenSans-Italic.ttf
│   │   │   ├── OpenSans-LightItalic.ttf
│   │   │   ├── OpenSans-Light.ttf
│   │   │   ├── OpenSans-Regular.ttf
│   │   │   ├── OpenSans-SemiBoldItalic.ttf
│   │   │   └── OpenSans-SemiBold.ttf
│   │   └── serve.json
│   └── index.html
├── README.md
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── Doc.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Header.js
│   │   ├── List.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   └── Title.js
│   ├── data.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
└── yarn.lock

6 directories, 41 files

```

**Do NOT touch layout, design, or component logic. No layout changes in this task.**

---

## Rules for This Task
- Prefer CLI commands (`npm`, `rm`, `mv`, file creation via `echo`/`cat`) over direct file edits
- Only directly edit files when there is no CLI alternative
- Run one step at a time and verify before proceeding
- Do not install unnecessary packages

---

## Step 1 — Clean Up Old Tooling

```bash
# Remove Yarn lockfile
rm yarn.lock

# Remove node_modules (fresh install later)
rm -rf node_modules

# Remove CRA service worker (no longer needed with Vite)
rm src/serviceWorker.js
```

---

## Step 2 — Update `package.json` via CLI

Use `npm pkg` commands — do NOT manually edit `package.json` for these:

```bash
# Set Node.js engine constraint
npm pkg set engines.node=">=20.0.0"

# Update npm engine constraint
npm pkg set engines.npm=">=10.0.0"

# Remove CRA dependency
npm pkg delete dependencies.react-scripts

# Update scripts to Vite equivalents
npm pkg set scripts.dev="vite"
npm pkg set scripts.build="vite build"
npm pkg set scripts.preview="vite preview"

# Remove CRA-specific scripts
npm pkg delete scripts.eject
npm pkg delete scripts.test

# Remove CRA browserslist config (Vite handles this differently)
npm pkg delete browserslist
```

---

## Step 3 — Install Dependencies

```bash
# Install latest React
npm install react@latest react-dom@latest

# Install latest react-pdf renderer
npm install @react-pdf/renderer@latest

# Install Vite and React plugin as dev dependencies
npm install --save-dev vite @vitejs/plugin-react
```

---

## Step 4 — Create `vite.config.js`

Create this file in the project root:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

## Step 5 — Update `index.html`

Vite requires the JS entry point to be declared in `index.html` as a module script.
The file is already in the project root (CRA put it in `public/`, move it if needed).

**If `index.html` is inside `public/`, move it to project root first:**
```bash
mv public/index.html index.html
```

Then make the minimal edit to `index.html`:
- Remove any `%PUBLIC_URL%` references in asset paths (just use `/` prefix or no prefix)
- Add the following script tag just before `</body>`:

```html
<script type="module" src="/src/index.js"></script>
```

---

## Step 6 — Update `src/index.js` (React 18+ API)

React 19 removes the legacy `ReactDOM.render`. Replace the file content:

```js
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const App = React.lazy(() => import('./App'))

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div className="loading">Loading...</div>}>
    <App />
  </Suspense>
)
```

---

## Step 7 — Fix Font Registration in `src/components/Doc.js`

`@react-pdf/renderer` v4 changed the `Font.register()` API.
Multiple weights/styles must now be declared under a single family using the `fonts` array.
The old multi-call pattern from v1 will silently produce broken font output.

Replace all `Font.register()` calls with:

```js
Font.register({
  family: 'Lato',
  fonts: [
    { src: '/fonts/Lato/Lato-Regular.ttf' },
    { src: '/fonts/Lato/Lato-Bold.ttf',    fontWeight: 'bold' },
    { src: '/fonts/Lato/Lato-Italic.ttf',  fontStyle: 'italic' },
    { src: '/fonts/Lato/Lato-Light.ttf',   fontWeight: 300 },
  ],
})

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: '/fonts/Open_Sans/OpenSans-Regular.ttf' },
  ],
})
```

Then update all `StyleSheet` objects across ALL components:
replace named font families like `'Lato Bold'` and `'Lato Italic'` and `'Lato Light'`
with the base family + weight/style property:

| Old `fontFamily`   | New `fontFamily` | Add property        |
|--------------------|------------------|---------------------|
| `'Lato'`           | `'Lato'`         | _(none)_            |
| `'Lato Bold'`      | `'Lato'`         | `fontWeight: 'bold'`|
| `'Lato Italic'`    | `'Lato'`         | `fontStyle: 'italic'`|
| `'Lato Light'`     | `'Lato'`         | `fontWeight: 300`   |

Affected files: `Doc.js`, `Title.js`, `Header.js`, `Experience.js`,
`Education.js`, `Skills.js`, `List.js`, `Projects.js`

---

## Step 8 — Add `netlify.toml`

Create this file in the project root (Vite outputs to `dist/`, not `build/`):

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

## Step 9 — Verify

```bash
# Run dev server — should open in browser with PDF rendering correctly
npm run dev

# Then test production build
npm run build
npm run preview
```

**Mandatory manual verification after dev server starts:**
1. Open the PDF in browser
2. Select all text in the PDF viewer (Ctrl+A)
3. Copy and paste into a plain text editor
4. Confirm the pasted text is readable (not garbled)
   - If garbled → font registration in Step 7 was not applied correctly
   - If clean → migration successful

---

## Summary of Files Changed

| File                        | Method              | Reason                          |
|-----------------------------|---------------------|---------------------------------|
| `yarn.lock`                 | CLI `rm`            | Switching to npm                |
| `src/serviceWorker.js`      | CLI `rm`            | CRA artifact, not used in Vite  |
| `package.json`              | CLI `npm pkg`       | Deps, scripts, engines          |
| `vite.config.js`            | Create new file     | Vite config                     |
| `index.html`                | Minimal edit        | Add module script tag           |
| `src/index.js`              | Edit                | React 19 createRoot API         |
| `src/components/Doc.js`     | Edit                | Font.register v4 API            |
| All components (fontFamily) | Edit                | Font weight/style props         |
| `netlify.toml`              | Create new file     | Fix publish directory for Vite  |

