# Crypto Recovery Helpdesk

A modern, responsive **React + TypeScript** web application for cryptocurrency fraud recovery services. Built with esbuild, Tailwind CSS, and Radix UI components.

## 🎯 Overview

This helpdesk platform helps cryptocurrency fraud victims recover their lost or stolen digital assets. The application provides a user-friendly interface for case submission, status tracking, and communications with recovery specialists.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ or compatible runtime
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Rebirth3105/cryptorecovery.git
cd cryptorecovery

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start on an auto-detected port and print the URL to the console.

### Build for Production

```bash
npm run build
```

Output files are generated in the `dist/` directory:
- `dist/main.js` - Bundled application (IIFE format)
- `dist/main.css` - Processed Tailwind CSS
- `dist/index.html` - HTML entry point
- `dist/*.png` - Image assets

## 📁 Project Structure

```
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx              # Router setup (HashRouter)
│   ├── main.css             # Tailwind + CSS variables
│   ├── pages/
│   │   └── Home.tsx         # Landing page (600+ lines)
│   ├── components/ui/       # 47+ Radix UI wrapper components
│   ├── hooks/               # Custom React hooks
│   └── lib/utils.ts         # Utility functions (cn, etc.)
├── scripts/
│   └── build.mjs            # esbuild configuration & dev server
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── index.html              # HTML template
```

## 🛠️ Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with hot reload |
| `npm run dev` | Start dev server (auto-reload) |
| `npm run build` | Production build |
| `npm run type-check` | TypeScript validation |
| `npm run lint` | Run ESLint (if configured) |

## ✅ CI/CD Pipeline

This project includes automated **GitHub Actions** that:
- ✅ Builds on every push and pull request
- ✅ Runs TypeScript type checking
- ✅ Tests against Node.js 18.x and 20.x
- ✅ Automatically deploys to GitHub Pages on master branch

**Status**: Check the [Actions tab](https://github.com/Rebirth3105/cryptorecovery/actions) for build status

**Setup**: See `GITHUB_PAGES_SETUP.md` for one-time configuration

**Details**: See `.github/CI_CD_GUIDE.md` for comprehensive documentation

## 🎨 Tech Stack

- **Framework**: React 18 with TypeScript (strict mode)
- **Build Tool**: esbuild with PostCSS + Tailwind CSS
- **Router**: React Router (hash-based routing for static hosting)
- **UI Components**: Radix UI primitives wrapped with shadcn/ui patterns
- **Forms**: React Hook Form + Zod validation
- **Icons**: lucide-react
- **i18n**: i18next
- **CI/CD**: GitHub Actions (auto-build & deploy)

## 🔧 Development Workflow

### Adding a New UI Component

1. Check if Radix UI has a primitive in `package.json`
2. Create wrapper in `src/components/ui/component-name.tsx`
3. Use CVA for variants, `cn()` for class merging
4. Export with `forwardRef` for ref forwarding

**Example**: See `src/components/ui/button.tsx`

### Creating a New Page

1. Add `.tsx` file in `src/pages/`
2. Import in `App.tsx` and add route
3. Use existing UI components from `src/components/ui/`

**Note**: Hash-based routing (URLs use `#` prefix, e.g., `/#/services`)

### Styling

- Write inline Tailwind classes in JSX
- Use `cn()` utility for merging multiple className sources
- CSS variables in `src/main.css` drive the theme system
- Dark mode: Add `.dark` selector or use Tailwind `dark:` prefix

## 🌐 Deployment

The app uses hash-based routing (`#` prefix) for static hosting compatibility. Deploy the `dist/` directory to:

- **GitHub Pages** (automated via GitHub Actions)
- Vercel
- Netlify
- Any static hosting provider

### Automated GitHub Pages Deployment

This project includes GitHub Actions CI/CD that automatically builds and deploys to GitHub Pages on every push to `master`.

**Setup (one-time)**:
1. Go to repository **Settings** → **Pages**
2. Set **Source** to `GitHub Actions`
3. Done! Future pushes auto-deploy

See `GITHUB_PAGES_SETUP.md` for detailed instructions.

**Manual deployment**:
```bash
npm run build
# Deploy contents of dist/ to your hosting provider
```

## 📋 For AI Agents & Contributors

Refer to `.github/copilot-instructions.md` for detailed architectural guidance, including:
- Component library patterns (CVA + forwardRef)
- Styling system & CSS variables
- Build & development workflow specifics
- Common issues & solutions
- Best practices for this codebase

**Also see**: `CONTRIBUTING.md` for contribution guidelines

## 🧪 Testing & Debugging

- **TypeScript**: `npm run type-check` (strict mode enabled)
- **Browser DevTools**: Inspect React components with React Developer Tools extension
- **Hot Reload**: Changes to `src/` files auto-reload via esbuild EventSource
- **Build Issues**: Run `npm run build` to debug production output

## 📦 Dependencies

Key dependencies:
- `@radix-ui/*` - UI primitives (47+ components)
- `class-variance-authority` - Component variant management
- `react-hook-form` - Form state management
- `zod` - Schema validation
- `lucide-react` - Icon library
- `i18next` - Internationalization

## 🔐 Security & Maintenance

- Run `npm audit` regularly to check for vulnerabilities
- Update dependencies with care (pin versions in production)
- TypeScript strict mode enforced
- No test framework currently configured (contribute one!)

## 📝 License

This project is part of the Crypto Recovery Helpdesk initiative.

## 🤝 Contributing

See `CONTRIBUTING.md` for guidelines on:
- Branch naming conventions
- Commit message format
- Pull request process
- Code patterns & style

---

**Questions?** Check `CONTRIBUTING.md` and `.github/copilot-instructions.md` for detailed project information.
