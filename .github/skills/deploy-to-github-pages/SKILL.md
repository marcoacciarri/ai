---
name: deploy-to-github-pages
description: Deploy a static website to GitHub Pages with automatic CI/CD. Use when user wants GitHub Pages deployment, mentions GitHub Pages, or needs automated deployments on push.
---

# Deploy to GitHub Pages

## Quick Start

1. **Ensure GitHub Actions workflow exists**
   - Check `.github/workflows/deploy-pages.yml` is in the repo

2. **Enable GitHub Pages**
   - Go to repo **Settings → Pages → Source**
   - Select **GitHub Actions**
   - Save

3. **Deploy**
   - Push your website files to the `pages/` folder
   - Commit and push to `main`
   - Workflow auto-deploys on push
   - View live at `https://<username>.github.io/<repo-name>`

## Customizing the Workflow

The default workflow watches for changes in `pages/**` and deploys them.

**To deploy from a different folder**, edit `.github/workflows/deploy-pages.yml`:

```yaml
- name: Stage website
  run: cp -r your-folder _site

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: "./_site"
```

## Adding a Custom Domain

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. Go to repo **Settings → Pages → Custom domain**
3. Enter your domain name
4. GitHub will show DNS records to add to your registrar
5. Add the DNS records and wait for verification (can take 24 hours)

See [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) for more details.

## Manual Deploy

To deploy without pushing to `main`:

1. Go to **Actions** tab
2. Select **Deploy Website** workflow
3. Click **Run workflow**
4. Select your branch and click **Run workflow**

## Troubleshooting

**Pages says "Source not configured"**

- Go back to Pages settings and re-select "GitHub Actions"

**Workflow failed**

- Check the **Actions** tab for error logs
- Ensure `pages/` folder has valid HTML files
- Verify `deploy-pages.yml` has correct path settings

**Site not updating after push**

- Wait a few minutes for the workflow to run
- Check the Actions tab to see if workflow completed
- Hard refresh your browser (Cmd+Shift+R on Mac)
