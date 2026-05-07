---
name: deploy-to-vercel
description: Deploy a static website to Vercel with automatic previews and custom domains. Use when user wants Vercel deployment, mentions Vercel, needs staging previews, or prefers Vercel's platform.
---

# Deploy to Vercel

## Quick Start

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy from Git**
   - In Vercel Dashboard: **Add New → Project**
   - Import your GitHub repo
   - Set **Root Directory** to `pages`
   - Leave other settings default
   - Click **Deploy**
   - Live at `https://<project-name>.vercel.app`

3. **Auto-deploy on push**
   - Every push to `main` auto-deploys (enabled by default)
   - Pull requests get staging preview links

## Manual Deploy with CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (interactive setup first time)
vercel

# Deploy to production (skips confirmation)
vercel --prod
```

## Environment Variables

If your site needs env vars (API keys, etc):

1. Go to Vercel Project **Settings → Environment Variables**
2. Add your variables
3. Click **Save**
4. Re-deploy to pick up new variables

## Custom Domain

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. In Vercel Project **Settings → Domains**
3. Click **Add Domain**
4. Enter your domain name
5. Add DNS records shown by Vercel to your registrar
6. Wait for verification (usually instant to 24 hours)

## Vercel Config (Optional)

Create `vercel.json` in repo root for advanced config:

```json
{
  "buildCommand": "echo 'Static site - no build needed'",
  "installCommand": "echo 'No dependencies to install'",
  "outputDirectory": "pages"
}
```

## Troubleshooting

**Blank page after deploy**

- Check that `pages/index.html` exists
- Verify `Root Directory` is set to `pages` in project settings
- Check build logs in Vercel Dashboard

**Custom domain not resolving**

- Verify DNS records are added to your registrar
- Wait 24 hours for DNS propagation
- Run `dig your-domain.com` to check DNS records

**Environment variables not loading**

- Re-deploy after adding env vars
- Use `process.env.VARIABLE_NAME` in JavaScript files
