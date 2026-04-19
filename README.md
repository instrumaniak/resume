# Resume Project

Simple react-pdf based resume generator.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build to dist/
npm run preview # Preview production build
```

## Tech Stack

- Vite + @vitejs/plugin-react
- React 19 + react-dom 19
- @react-pdf/renderer v4

## Important Notes

- All source files are `.jsx` (not `.js`) - Vite requires this for JSX support
- Font registration uses v4 API: `Font.register({ family: 'Name', fonts: [{ src: '...', fontWeight: 'bold' }] })`
- Build outputs to `dist/` (not `build/`)
- Requires Node.js 22+ (use `nvm` to switch nodejs version if needed)

## File Structure

```
src/
├── App.jsx          # PDFViewer entry
├── index.jsx        # createRoot render
├── index.css        # Global styles
├── components/      # react-pdf components
│   ├── Doc.jsx     # Font.register lives here
│   └── ...
└── data.js        # Resume content
```

## Development

Fonts are in `public/fonts/` and registered in `src/components/Doc.jsx`. Changes there require app reload.