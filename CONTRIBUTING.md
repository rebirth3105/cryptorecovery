# Contributing to Crypto Recovery Helpdesk

Thank you for your interest in contributing! This document provides guidelines for participating in this project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cryptorecovery.git
   cd cryptorecovery
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development**:
   ```bash
   npm run dev
   ```

## 📋 Branch Naming Conventions

Use descriptive branch names following this pattern:

```
feature/short-description    # New features
fix/short-description        # Bug fixes
docs/short-description       # Documentation updates
refactor/short-description   # Code refactoring
chore/short-description      # Build, dependencies, etc.
```

**Examples:**
- `feature/add-case-submission-form`
- `fix/email-validation-bug`
- `docs/update-deployment-guide`

## 📝 Commit Message Format

Write clear, descriptive commit messages:

```
Type: Brief description (50 chars max)

More detailed explanation if needed (wrap at 72 chars).
Explain what changed and why, not how.

Fixes #123
Related to #456
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, semicolons, etc.)
- `refactor:` - Code refactoring without changing functionality
- `test:` - Adding or updating tests
- `chore:` - Build, dependencies, tooling

**Examples:**
- `feat: add dark mode toggle to settings`
- `fix: correct email validation regex`
- `docs: update TypeScript setup guide`

## 🔍 Code Style & Quality

### TypeScript & Linting

- **Use TypeScript strict mode** - No `any` types unless absolutely necessary
- **Follow existing patterns** - See `.github/copilot-instructions.md` for architectural patterns
- **Type your components** - Use proper React component typing with `forwardRef` when needed

Check types before committing:
```bash
npm run type-check
```

### Component Patterns

When adding UI components:

1. **Wrap Radix UI primitives** in styled components
2. **Use CVA** for variant management (see `src/components/ui/button.tsx`)
3. **Export with `forwardRef`** for DOM access
4. **Use `cn()` utility** for all className merging
5. **Document prop interfaces** clearly

**Example structure** (`src/components/ui/my-component.tsx`):
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const myComponentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { default: "...", lg: "..." },
  },
})

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(myComponentVariants({ variant, size, className }))}
      {...props}
    />
  )
)
MyComponent.displayName = "MyComponent"
export { MyComponent }
```

### Styling Guidelines

- **Write inline Tailwind classes** in JSX components
- **Use CSS variables** from `src/main.css` for theming
- **Use `cn()` for merging** multiple className sources
- **Dark mode**: Add `.dark` selector in CSS or use `dark:` prefix in Tailwind
- **Theme colors**: Use semantic tokens (primary, secondary, destructive, muted, etc.)

### Form Handling

- Use **React Hook Form** for state management
- Pair with **Zod** for validation
- Keep form logic organized and reusable

## 🧪 Testing

Currently, no automated test framework is configured. Please:

1. **Manually test** your changes thoroughly
2. **Run `npm run build`** to ensure production build works
3. **Check in multiple browsers** if UI changes
4. **Consider contributing a test framework** setup!

## 📤 Submitting Changes

### Before Creating a Pull Request

1. **Update your branch** with latest main:
   ```bash
   git fetch origin
   git rebase origin/master
   ```

2. **Type-check your code**:
   ```bash
   npm run type-check
   ```

3. **Build and test**:
   ```bash
   npm run build
   ```

4. **Create meaningful commits** - One logical change per commit

### Pull Request Process

1. **Push your feature branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what was changed and why
   - Reference to any related issues (`Fixes #123`)
   - Screenshots for UI changes

3. **PR Template**:
   ```markdown
   ## Description
   Brief description of the change.

   ## Type of Change
   - [ ] New feature
   - [ ] Bug fix
   - [ ] Documentation update
   - [ ] Other

   ## How Has This Been Tested?
   Describe how you tested the changes.

   ## Related Issues
   Fixes #123

   ## Screenshots (if applicable)
   Add screenshots for UI changes.
   ```

4. **Address review feedback** - Be responsive to code review suggestions

## 🏗️ Project Architecture

For detailed architectural guidance, see:
- **`.github/copilot-instructions.md`** - AI agent reference guide
- **`README.md`** - Project overview and setup
- **`src/`** - Source code organized by concern

Key patterns:
- **shadcn/ui component wrapping** - See `src/components/ui/`
- **CSS variable theming** - See `src/main.css`
- **Hash-based routing** - See `src/App.tsx`

## 🐛 Reporting Issues

1. **Check existing issues** to avoid duplicates
2. **Use descriptive titles** - "Form validation broken" not "Bug"
3. **Include steps to reproduce** - Specific, detailed steps
4. **Include expected vs actual behavior**
5. **Add screenshots/recordings** if relevant

## 💬 Communication

- **Issues** - Use for bug reports and feature requests
- **Discussions** - Use for questions and proposals
- **Pull Requests** - Use for code contributions

## 📚 Resources

- **TypeScript Handbook** - https://www.typescriptlang.org/docs/
- **React Documentation** - https://react.dev
- **Radix UI Docs** - https://radix-ui.com
- **Tailwind CSS Docs** - https://tailwindcss.com
- **esbuild Docs** - https://esbuild.github.io

## ✅ Checklist Before Submitting

- [ ] Branch created from latest `master`
- [ ] Changes follow project code style
- [ ] TypeScript strict mode - no `any` types
- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds
- [ ] Tested in dev with `npm run dev`
- [ ] Commit messages follow format
- [ ] PR description is clear and complete
- [ ] Related issues are referenced

## 🙏 Thank You!

Your contributions help make this project better. We appreciate your effort and patience through the review process!

---

**Questions?** Open an issue with the `question` label or start a discussion.
