# 🚀 GitHub Pages Setup Instructions

To enable automatic deployment to GitHub Pages, follow these steps:

## 1️⃣ Enable GitHub Pages

1. Go to your repository on GitHub: **https://github.com/Rebirth3105/cryptorecovery**
2. Click **Settings** (gear icon)
3. In the left sidebar, scroll down and click **Pages**
4. Under "Build and deployment":
   - Set **Source** to `GitHub Actions`
   - Leave branch selector as-is (no branch selection needed for Actions)
5. Click **Save**

## 2️⃣ Verify Workflow is Active

1. Go to **Actions** tab
2. You should see "Build & Test" workflow listed on the left
3. The workflow is now active and will run on every push

## 3️⃣ Test the CI/CD Pipeline

Push a small change to trigger the workflow:

```bash
# Example: Create a commit
git commit --allow-empty -m "test: trigger CI/CD workflow"
git push origin master
```

1. Go to **Actions** tab
2. Click the latest workflow run
3. Watch it build and deploy
4. Once complete (green checkmark ✅), your site is live!

## 4️⃣ Access Your Deployed Site

After deployment completes:

```
https://Rebirth3105.github.io/cryptorecovery/
```

(Replace `Rebirth3105` with your GitHub username)

## 🔍 What Gets Deployed?

The CI/CD pipeline automatically:
- ✅ Installs dependencies
- ✅ Checks TypeScript types
- ✅ Builds production bundle (`npm run build`)
- ✅ Uploads `dist/` folder to GitHub Pages
- ✅ Makes it live at the URL above

## ⚙️ Customization

### Change Deployment Branch
Edit `.github/workflows/build.yml` to deploy on different branch:
```yaml
if: github.event_name == 'push' && github.ref == 'refs/heads/YOUR_BRANCH'
```

### Custom Domain
1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Follow DNS setup instructions

### Turn Off Auto-Deployment
Delete or disable the `deploy` job in `.github/workflows/build.yml`

## 📊 Monitor Deployments

### View Deployment History
1. Go to **Settings** → **Pages**
2. Scroll to "Deployments"
3. See all past deployments with timestamps

### View Workflow Runs
1. Go to **Actions** tab
2. Click "Build & Test" workflow
3. See all runs with status (✅ passed, ❌ failed)

## 🆘 Troubleshooting

### "No GitHub Pages configuration found"
- Go to **Settings** → **Pages**
- Ensure **Source** is set to `GitHub Actions`

### Deployment Failed
- Check **Actions** tab for error logs
- Common issues:
  - TypeScript errors → Fix locally, push again
  - Build errors → Run `npm run build` locally to debug

### Site Not Updating
- Changes take ~30 seconds to deploy after push
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check **Actions** tab to see if deploy job completed

### Custom Domain Not Working
- Check DNS records are correctly set
- Wait up to 24 hours for DNS propagation
- See GitHub Pages docs for specific DNS setup

## 📝 Next Steps

- ✅ CI/CD setup complete!
- ⏭️ Consider: ESLint + Prettier setup (Task #5)
- ⏭️ Consider: Security audit (Task #8)

---

**🎉 Your site is now automatically deployed on every push to master!**
