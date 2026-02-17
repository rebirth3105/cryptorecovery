This repository now contains CI and GitHub Pages deploy workflows.

Notes for repository administrators:
- Review the workflows in .github/workflows/ci.yml and .github/workflows/deploy-pages.yml.
- The deploy workflow uploads the following directories (if they exist) as the Pages artifact: cryptorecovery.io-main, dist, build, out. If your build output is different, update the path in deploy-pages.yml.
- No external notification webhooks were configured. To add Slack/Teams notifications, add a GitHub Actions secret (e.g., SLACK_WEBHOOK) and update workflows to use it.
- To enable branch protection, go to Settings → Branches and add the rules you prefer (require PR review, status checks, etc.).
