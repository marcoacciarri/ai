---
name: deploy-to-cloudflare-pages
description: Deploy a static website to Cloudflare Pages with DDoS protection and edge caching. Use when user wants Cloudflare deployment, mentions Cloudflare, has a Cloudflare account, or needs global edge network.
---

# Deploy to Cloudflare Pages

## Quick Start (Git Integration)

1. **Create Cloudflare account**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign up with email or GitHub

2. **Deploy from Git**
   - In Cloudflare Dashboard: **Workers & Pages → Create application → Pages → Connect to Git**
   - Select your GitHub repo
   - Set **Build output directory** to `site`
   - Leave **Build command** empty (static site)
   - Click **Save and Deploy**
   - Live at `https://<project-name>.pages.dev`

3. **Auto-deploy on push**
   - Every push to `main` auto-deploys
   - PRs get preview links

## Manual Deploy with Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Log in to Cloudflare
wrangler login

# Deploy the site/ folder
wrangler pages deploy site/
```

The first deploy asks for a project name. Future deploys use the same project.

## Environment Variables

If your site needs env vars:

1. In Cloudflare Dashboard: **Workers & Pages → your project → Settings → Environment variables**
2. Add your variables
3. Save and re-deploy

## Custom Domain

### Option A: Cloudflare-hosted domain

1. In Cloudflare Dashboard: **Pages → your project → Custom domains**
2. Click **Add custom domain**
3. Enter your domain
4. Cloudflare auto-updates DNS records
5. Domain live within minutes

### Option B: Domain at another registrar

1. Buy domain (GoDaddy, Namecheap, etc.)
2. In Cloudflare Dashboard: **Pages → your project → Custom domains**
3. Add your domain
4. Cloudflare shows nameservers to add to your registrar
5. Update registrar and wait for DNS propagation (24 hours)

## Wrangler Config (Optional)

Create `wrangler.toml` in repo root:

```toml
name = "my-site"
main = "site/index.html"
compatibility_date = "2024-01-01"
```

## .gitignore Note

The `.wrangler/` folder (created by Wrangler) contains local credentials. It should be `.gitignored` — don't commit it.

## Troubleshooting

**Pages shows "No builds yet"**

- Check Cloudflare dashboard for build errors
- Verify **Build output directory** is set to `site`
- Ensure `site/index.html` exists

**Site 404s after deploy**

- Verify `site/` folder has your HTML files
- Check build logs in Pages dashboard
- Try manual deploy: `wrangler pages deploy site/`

**Custom domain not working**

- Verify DNS records (use `dig your-domain.com`)
- Wait 24 hours for DNS propagation
- Check Cloudflare's domain verification page

**Wrangler login fails**

- Clear Wrangler cache: `rm -rf ~/.wrangler`
- Try `wrangler login` again
- Ensure 2FA is enabled on Cloudflare account
