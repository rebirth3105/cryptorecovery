# GitHub Actions CI/CD Configuration

This document explains the automated GitHub Actions workflow for Crypto Recovery Helpdesk.

## 📋 Workflow Overview

The `.github/workflows/build.yml` file defines two jobs:

### 1. **Build & Test Job** (Runs on every push and PR)
- ✅ Runs on `master`, `main`, and `develop` branches
- ✅ Tests against Node.js 18.x and 20.x
- ✅ Installs dependencies with npm cache
- ✅ Runs TypeScript type checking
- ✅ Builds production bundle
- ✅ Verifies all build artifacts exist

### 2. **Deploy Job** (Runs only on master branch pushes)
- ✅ Depends on successful build
- ✅ Builds production bundle
- ✅ Deploys to GitHub Pages automatically
- ✅ Uses GitHub Pages deployment permissions

## 🔄 Workflow Triggers

The workflow runs:

| Trigger | Branches | Jobs |
|---------|----------|------|
| **Push** | `master`, `main`, `develop` | Build → Deploy (if master) |
| **Pull Request** | `master`, `main`, `develop` | Build only |

## 📊 Build Checklist

Each build job performs:

1. **Checkout** - Clone the repository code
2. **Setup Node.js** - Install specified version (18.x or 20.x)
3. **Cache Dependencies** - Speed up builds with npm cache
4. **npm ci** - Clean install (production-grade)
5. **type-check** - Run TypeScript validation
6. **build** - Create production bundle
7. **Artifact Verification** - Ensure all files exist:
   - `dist/main.js`
   - `dist/main.css`
   - `dist/index.html`

## 🚀 GitHub Pages Deployment

### Prerequisites

Enable GitHub Pages in your repository:

1. Go to **Settings** → **Pages**
2. Set **Source** to `GitHub Actions`
3. Save

### Deployment Flow

When you push to `master`:
1. Build job completes successfully
2. Deploy job automatically starts
3. Uploads `dist/` folder to GitHub Pages
4. Website is available at: `https://YOUR_USERNAME.github.io/cryptorecovery/`

**Note:** Due to hash-based routing (`/#/`), the site works correctly on any deployment path!

## 🔍 Viewing Results

### In GitHub UI
1. Go to **Actions** tab in repository
2. Click on a workflow run to see details
3. View logs for each job/step

### Build Failures
If a build fails:
- Check the job logs for specific error
- Common issues:
  - **Type errors**: Fix TypeScript issues locally, push again
  - **Build errors**: Check `npm run build` output locally
  - **Missing dependencies**: Run `npm install` locally

### Rerunning Jobs
- Click **Re-run jobs** to retry failed workflows
- Useful for flaky network issues

## 🛠️ Local Testing

Before pushing, test locally:

```bash
# Install & build (same as CI)
npm ci
npm run type-check
npm run build

# Verify artifacts
ls -la dist/
```

## 📝 Customization

### Change Node.js Versions
Edit `.github/workflows/build.yml`:
```yaml
matrix:
  node-version: [18.x, 20.x, 21.x]  # Add more versions
```

### Add Additional Check Steps
Example: Add linting (after setting up ESLint):
```yaml
- name: Run ESLint
  run: npm run lint
```

### Skip Deployment
To prevent deployment to GitHub Pages:
1. Remove the `deploy` job section, OR
2. Disable GitHub Pages in repository settings

### Deploy to Vercel/Netlify Instead
Replace the deploy job with their CI/CD integration:
- **Vercel**: Connect repo in Vercel dashboard
- **Netlify**: Connect repo in Netlify dashboard

## 🔐 Secrets & Environment Variables

If needed in future (for API keys, etc.):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add secret name and value
4. Use in workflow: `${{ secrets.SECRET_NAME }}`

Example:
```yaml
- name: Deploy with API key
  env:
    API_KEY: ${{ secrets.MY_API_KEY }}
  run: some-deploy-command
```

## 📊 Status Badge

Add this to your README to display build status:

```markdown
[![Build & Test](https://github.com/Rebirth3105/cryptorecovery/actions/workflows/build.yml/badge.svg)](https://github.com/Rebirth3105/cryptorecovery/actions/workflows/build.yml)
```

Renders as: [![Build & Test](https://github.com/actions/toolkit/actions/workflows/build.yml/badge.svg)](https://github.com/actions/toolkit/actions/workflows/build.yml)

## 🆘 Troubleshooting

### Deployment Not Working
- Check "GitHub Pages" is set to deploy from `GitHub Actions`
- Verify workflow permissions (Settings → Actions → General)
- Check deploy job logs for errors

### Build Fails on TypeScript
```
error TS1234: Some types are not compatible
```
→ Run `npm run type-check` locally to debug

### Build Fails on Production Build
```
Error: esbuild failed with exit code 1
```
→ Run `npm run build` locally to debug

### Timeout Errors
- Increase timeout in workflow (currently uses default 6 hours)
- Check for infinite loops in build script

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Node.js Setup Action](https://github.com/actions/setup-node)
- [GitHub Pages Deployment](https://github.com/actions/deploy-pages)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

**✅ CI/CD is now configured! Every push to master automatically deploys to GitHub Pages.**
