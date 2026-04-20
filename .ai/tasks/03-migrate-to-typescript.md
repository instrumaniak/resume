# Resume Project: Migrate to TypeScript

## Context
React + Vite + `@react-pdf/renderer` v4 resume project. All source files are
currently `.jsx`/`.js`. The goal is to migrate to TypeScript with a relaxed
config (`strict: false`) and full type coverage including data shapes.

All interfaces live in a dedicated `src/types.ts` file so that component names,
prop signatures, and internal logic remain completely untouched.

**Do NOT rename components, change props, or modify any internal logic.
No behavioral changes in this task.**

---

## Rules for This Task
- Prefer CLI commands (`npm`, `mv`, `npx`) over direct file edits
- Only directly edit files when there is no CLI alternative
- Run one step at a time and verify before proceeding
- Do not install unnecessary packages

---

## Step 1 — Install TypeScript & Type Dependencies

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

> `@react-pdf/renderer` v4 ships its own types — no `@types` package needed.

---

## Step 2 — Create `tsconfig.json`

```bash
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "allowJs": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "outDir": "dist",
    "strict": false,
    "noEmit": true
  },
  "include": ["src"]
}
EOF
```

> `allowJs: true` keeps the app runnable at every step during migration.
> `noEmit: true` means `tsc` is used only for type checking; Vite handles the build.

---

## Step 3 — Rename Source Files

```bash
# Entry points
mv src/index.jsx src/index.tsx
mv src/App.jsx src/App.tsx

# Data
mv src/data.js src/data.ts

# Components
mv src/components/Doc.jsx src/components/Doc.tsx
mv src/components/Header.jsx src/components/Header.tsx
mv src/components/Summary.jsx src/components/Summary.tsx
mv src/components/Title.jsx src/components/Title.tsx
mv src/components/List.jsx src/components/List.tsx
mv src/components/Experience.jsx src/components/Experience.tsx
mv src/components/Education.jsx src/components/Education.tsx
mv src/components/Skills.jsx src/components/Skills.tsx
mv src/components/Projects.jsx src/components/Projects.tsx
```

Update the script src in `index.html`:

```bash
sed -i 's|/src/index.jsx|/src/index.tsx|' index.html
```

> On macOS use `sed -i '' '...'` instead.

---

## Step 4 — Create `src/types.ts`

Create a new file with all data-shape interfaces. Interfaces are named to avoid
any collision with existing component names (`ExperienceEntry`, `ProjectEntry`).

```bash
cat > src/types.ts << 'EOF'
export interface HeaderData {
  name: string
  tagLine: string
  links: string[]
  socialLinks: string[]
}

export interface TechSkillCategory {
  category: string
  skills: string[]
}

export interface EducationItem {
  degree: string
  school: string
  duration: string
}

export interface ExperiencePosition {
  title: string
  date: string
  details: string[]
}

export interface ExperienceItem {
  company: string
  location: string
  totalDuration: string
  positions: ExperiencePosition[]
}

export interface ExperienceEntryProps extends ExperiencePosition {
  company: string
  location: string
  isLast: boolean
}

export interface ProjectItem {
  title: string
  url: string
  tech: string
  details: string[]
}
EOF
```

> `ExperienceItem` and `ProjectItem` are deliberately distinct from the
> component names `ExperienceEntry` and `ProjectEntry` — no clash, no renaming.
> `ExperienceEntryProps` is defined here (not inside the component file) for
> the same reason.

---

## Step 5 — Annotate `src/data.ts`

Add the import line at the very top of `src/data.ts`, then annotate each
exported constant. Do not change any values.

Import to add at top:

```ts
import type {
  HeaderData,
  TechSkillCategory,
  EducationItem,
  ExperienceItem,
  ProjectItem,
} from './types'
```

Type annotations to apply to each constant:

| Constant          | Type annotation       |
|-------------------|-----------------------|
| `headerData`      | `HeaderData`          |
| `summaryText`     | `string`              |
| `techSkillsData`  | `TechSkillCategory[]` |
| `educationData`   | `EducationItem[]`     |
| `experienceTitle` | `string`              |
| `experienceData`  | `ExperienceItem[]`    |
| `projectsData`    | `ProjectItem[]`       |

Example pattern — apply to all:

```ts
export const headerData: HeaderData = {
  // ...existing content unchanged
}
```

---

## Step 6 — Add Prop Types to Components

Only files that accept props need edits. Components with no external props
(`Header`, `Summary`, `Skills`, `Education`, `Doc`, `App`) need no changes
beyond the rename in Step 3.

### `src/components/Title.tsx`

Add the interface above the component. Component body unchanged:

```tsx
import type React from 'react'

interface TitleProps {
  children: React.ReactNode
  style?: object
}

const Title = ({ children, style }: TitleProps) => (
  // ...unchanged
)
```

### `src/components/List.tsx`

Add interfaces above the components. Component bodies unchanged:

```tsx
import type React from 'react'

interface ListProps {
  children: React.ReactNode
}

interface ItemProps {
  children: React.ReactNode
  style?: object
}

const List = ({ children }: ListProps) => children

export const Item = ({ children }: ItemProps) => (
  // ...unchanged
)
```

### `src/components/Experience.tsx`

Add imports alongside existing imports at the top of the file:

```tsx
import type { ExperienceItem, ExperienceEntryProps } from '../types'
```

Annotate `CompanyEntry` — name and body unchanged:

```tsx
const CompanyEntry = ({
  company,
  location,
  totalDuration,
  positions,
}: ExperienceItem) => (
  // ...unchanged
)
```

Annotate `ExperienceEntry` — name and body unchanged:

```tsx
const ExperienceEntry = ({
  company,
  location,
  details,
  title: position,
  date,
  isLast,
}: ExperienceEntryProps) => (
  // ...unchanged
)
```

### `src/components/Projects.tsx`

Add import alongside existing imports:

```tsx
import type { ProjectItem } from '../types'
```

Annotate `ProjectEntry` — name and body unchanged:

```tsx
const ProjectEntry = ({ title, tech, details, url }: ProjectItem) => (
  // ...unchanged
)
```

---

## Step 7 — Verify

```bash
# Type check — should produce zero errors
npx tsc

# Confirm the app still runs and PDF renders correctly
npm run dev
```

**If `tsc` reports errors**, common causes and fixes:

| Error | Fix |
|---|---|
| `children` implicit `any` | Use `React.ReactNode` |
| `style` prop rejected | Use `object` or `Style` from `@react-pdf/renderer` |
| Implicit `any` on `.map()` callback | Inferred automatically once data constants are annotated in Step 5 — no manual fix needed |

---

## Summary of Files Changed

| File                           | Method          | Reason                                      |
|--------------------------------|-----------------|---------------------------------------------|
| `package.json`                 | CLI `npm`       | Add `typescript`, `@types/*` dev deps       |
| `tsconfig.json`                | CLI `cat`       | TypeScript config                           |
| `index.html`                   | CLI `sed`       | Update script src extension                 |
| `src/index.jsx` → `index.tsx`  | CLI `mv`        | Enable TSX                                  |
| `src/App.jsx` → `App.tsx`      | CLI `mv`        | Enable TSX                                  |
| `src/data.js` → `data.ts`      | CLI `mv` + edit | Import types, annotate constants            |
| `src/types.ts`                 | CLI `cat`       | All data-shape and prop interfaces          |
| All `src/components/*.jsx`     | CLI `mv`        | Rename to `.tsx`                            |
| `Title.tsx`, `List.tsx`        | Edit            | Add local prop interfaces                   |
| `Experience.tsx`               | Edit            | Import + annotate props (no rename)         |
| `Projects.tsx`                 | Edit            | Import + annotate props (no rename)         |
