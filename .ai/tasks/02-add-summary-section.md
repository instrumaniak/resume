# Resume: Add Summary + Content Improvements

## Context
React + @react-pdf/renderer v4 resume project. All resume content lives in
`src/data.js`. Components render from that data. Layout is NOT changing in
this task — only `src/data.js` is touched, plus one new component.

**Only modify `src/data.js` and create one new component file.
Do NOT touch layout, styles, or any other component.**

---

## Task 1 — Add Summary to `src/data.js`

Add this export at the top of the file, just below `headerData`:

```js
export const summaryText = `Senior Software Engineer with 7+ years building
production backend systems in Node.js and TypeScript. Specialized in
microservice architecture, event-driven systems and real-time
applications across e-commerce, food delivery and other domains.
Experienced with AWS, automated testing and full-stack
development with a strong backend focus.`
```

---

## Task 2 — Create `src/components/Summary.jsx`

New component, modelled after the simplicity of `Title.jsx`:

```jsx
import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { summaryText } from '../data'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 10,
    lineHeight: 1.5,
    color: '#333',
  },
})

const Summary = () => (
  <View style={styles.container}>
    <Text style={styles.text}>{summaryText}</Text>
  </View>
)

export default Summary
```

---

## Task 3 — Wire Summary into `src/components/Doc.jsx`

Add the import and place `<Summary />` between `<Header />` and the
two-column container `<View>`. This is a minimal two-line change:

```jsx
// Add import at top with other imports
import Summary from './Summary'

// In the Resume component, insert between Header and the container View:
<Header />
<Summary />           {/* ← add this line */}
<View style={styles.container}>
  ...
</View>
```

---

## Verify

```bash
npm run dev
```

Check in browser:
1. Summary text appears between name/header and the sidebar
2. Content in all four companies reads correctly
3. Skills list shows AWS and Jest entries
4. No typos remain
5. Resume still fits on one page — if it overflows, reduce
   `summaryText` to two sentences and check again