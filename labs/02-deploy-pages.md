# Lab 02 — Deploy your portfolio to Cloudflare Pages (25 min)

1. Open `portfolio/public/data.js` and replace the details with **yours**.
2. Open `portfolio/wrangler.toml` and change `name = "my-portfolio"` to something unique, e.g. `sita-portfolio`.
3. Preview locally:
   ```bash
   cd portfolio
   npx wrangler pages dev      # http://localhost:8788
   ```
4. Deploy:
   ```bash
   npx wrangler pages deploy
   ```
5. Open the URL printed at the end. 🎉 Post it in the class chat.
6. Change something in `data.js`, deploy again — notice the *new unique preview URL* for every deployment.
7. Check the custom headers from `_headers`:
   ```bash
   curl -I https://<your-project>.pages.dev
   ```
   Look for `x-served-by`, `cf-ray`, `cf-cache-status`, `server: cloudflare`.

**Stretch:** Dashboard → Pages project → *Deployments* → roll back to an older deployment with one click.
