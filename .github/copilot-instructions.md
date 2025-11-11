# AI Copilot Instructions for Crypto Recovery Helpdesk

## Project Overview
This is a **React + TypeScript helpdesk web application** for cryptocurrency fraud recovery services, built with modern tooling and component libraries. The app uses **esbuild** for bundling and **Tailwind CSS** for styling.

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript (strict mode)
- **Build Tool**: esbuild (custom `scripts/build.mjs`) with hot reload in dev
- **Styling**: Tailwind CSS + PostCSS with CSS-in-JS support via `esbuild-style-plugin`
- **Router**: React Router with hash-based routing (`HashRouter`)
- **UI Components**: Radix UI primitives (accordion, dialog, tabs, etc.) wrapped with shadcn/ui patterns
- **Forms**: React Hook Form + Zod validation
- **Icons**: lucide-react
- **i18n**: i18next

### Directory Structure
```
src/
├── main.tsx              # React entrypoint
├── App.tsx              # Router setup (HashRouter)
├── main.css             # Tailwind + CSS variables
├── pages/Home.tsx       # Single landing page
├── components/ui/       # Radix UI wrappers (47+ components)
├── hooks/              # use-toast.ts, use-mobile.tsx
└── lib/utils.ts        # cn() utility for merging classnames
```

## Key Patterns & Conventions

### Component Library Approach (Shadow CN)
The UI components follow **shadcn/ui patterns**—thin wrappers around Radix UI primitives that expose `variant` and `size` props via `class-variance-authority` (CVA).

**Pattern**: `components/ui/*.tsx`
```tsx
// Uses: Radix UI + CVA + cn() utility for class merging
const buttonVariants = cva("base-classes", { variants: {...} })
export const Button = forwardRef((props, ref) => ...)
```

When adding UI components:
- Wrap Radix UI primitives in styled components
- Use CVA for variant management
- Export with `forwardRef` for DOM access
- Apply Tailwind classes via `className` prop

### Styling System
- **CSS Variables**: `main.css` defines HSL variables (`--primary`, `--destructive`, etc.) for theming
- **Dark Mode**: Built-in via `.dark` class selector
- **Theme Colors**: Semantic tokens (primary, secondary, destructive, muted, etc.)

**Use case**: Extend tailwind config in `tailwind.config.js` to reference HSL variables:
```js
primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' }
```

### Utility Functions
- **`cn()`** in `src/lib/utils.ts`: Merges Tailwind classes + CSS modules intelligently using `clsx` + `twMerge`
  - Use this for all dynamic className combinations
  - Prevents Tailwind conflicts when merging multiple class strings

### Build & Development Workflow

**Commands**:
- `npm run dev`: Watch mode with hot reload (esbuild context + live server on auto-detected port)
- `npm run build`: Production build (minified, tree-shaken, sourcemaps disabled)

**Build Details**:
- Entry points: `src/main.tsx` + `index.html`
- Output: `dist/` (IIFE format, fully bundled)
- CSS processing: Tailwind + Autoprefixer via PostCSS
- Asset handling: PNG files copied; HTML copied as-is

## Common Development Tasks

### Adding a New UI Component
1. Check if Radix UI has a primitive for it (see `package.json` dependencies)
2. Create wrapper in `src/components/ui/component-name.tsx`
3. Use CVA for variants, `cn()` for class merging, `forwardRef` for ref forwarding
4. Export as named export and import in pages

### Creating a New Page
1. Add `.tsx` file in `src/pages/`
2. Import in `App.tsx` and add `<Route>` in React Router
3. Use existing UI components from `src/components/ui/`
4. Pages are HashRouter-based (URLs use `#` prefix)

### Styling Custom Content
1. Write inline Tailwind classes in JSX
2. For complex styles, use `main.css` and reference Tailwind vars
3. Always use `cn()` for merging multiple className sources
4. Dark mode: Add `.dark` selector in CSS or use Tailwind dark: prefix

### Form Handling
- Use **React Hook Form** for state management (see imports in Home.tsx)
- Pair with Zod for validation (installed in dependencies)
- Pattern: `useForm()` hook + form components + `handleSubmit()`

## Testing & Debugging
- No test framework currently configured
- Development server: Run `npm run dev` and open browser to printed URL
- Live reload: Changes to `src/` files auto-reload via esbuild EventSource
- TypeScript errors: Check in editor; tsconfig uses `strict: true`
- Browser DevTools: Inspect React components using React Developer Tools extension

## Deployment & Output
- **Production build**: `npm run build` generates `dist/` with fully bundled IIFE
- **Output structure**: 
  - `dist/main.js` - bundled application (single IIFE)
  - `dist/main.css` - processed Tailwind output
  - `dist/index.html` - copied HTML
  - `dist/*.png` - copied image assets
- **Hash-based routing**: All routes use `#` prefix (e.g., `/#/services`) for static hosting compatibility

## Critical Paths to Understand
- **Router**: `App.tsx` — all routes defined here
- **Styling tokens**: `main.css` — CSS variables drive entire color system
- **Build process**: `scripts/build.mjs` — esbuild config and dev server logic
- **Component registry**: `src/components/ui/` — comprehensive Radix UI wrappers
- **Landing page**: `src/pages/Home.tsx` — main app content (600+ lines)

## Common Issues & Solutions

### Missing Components
- If a Radix UI component is needed, check `package.json` for the dependency
- Component wrappers exist in `src/components/ui/` for 47+ pre-built components
- Create new wrappers following the Button pattern (CVA + forwardRef)

### Build Issues
- **Tailwind not applying**: Verify CSS import in `main.tsx`
- **Type errors**: Run `npx tsc --noEmit` to check full TypeScript compilation
- **Hot reload not working**: Check that esbuild context is running (should print URL on `npm run dev`)

### Styling Conflicts
- Always use `cn()` when combining multiple Tailwind class strings
- Dark mode vars defined in `:root` and `.dark` selector in `main.css`
- HSL variables ensure theme consistency across entire app

## Notes for AI Agents
- **Do not** modify esbuild config unless handling bundling issues
- **Do** use TypeScript strict mode discipline; avoid `any` types
- **Do** test Tailwind class merging with `cn()` for complex scenarios
- **Do** refer to existing component patterns before creating new components
- Radix UI accessibility features are pre-configured; preserve data attributes
- **Do** verify changes with `npm run build` before considering work complete
- **Prefer** immutable patterns with React hooks (useState, useForm) over direct DOM manipulation
