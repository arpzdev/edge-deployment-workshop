# Day 07 — Edge Deployment 🌍

> Take the project you containerized on Day 6 and put it on the internet — on a global edge network, without managing a server.

**Level:** Intermediate · **Tag:** `#EDGE_DEPLOY` · **Goal:** a live public URL for your portfolio + a serverless API at the edge, ready for the closing showcase.

| What you learn | Free tool | Why |
|---|---|---|
| Git + repository | GitHub | Free repositories and collaboration |
| Containerization | Docker | Run containers locally (Day 6 recap) |
| Edge/static deployment | Cloudflare Pages | Shows edge/CDN concepts |
| Edge/serverless functions | Cloudflare Workers | Deploy real code at the edge |
| DNS + HTTPS | Cloudflare | Same platform, less setup |
| Custom domain | *Skipped in class* | Use free `*.pages.dev` / `*.workers.dev` |
| Editor | VS Code | Free |

---

## 📁 What's in this repo

```
edge-deployment-workshop/
├── portfolio/                 ← Module 2: static site on Cloudflare Pages
│   ├── public/                ← everything here is uploaded to the edge
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── data.js            ← ✏️ EDIT THIS to make the portfolio yours
│   │   ├── script.js
│   │   ├── 404.html
│   │   └── _headers           ← custom HTTP headers set at the edge
│   ├── functions/api/edge.js  ← Module 3: Pages Function → /api/edge
│   ├── wrangler.toml
│   ├── Dockerfile + nginx.conf← Day 6 recap: same site in a container
├── edge-worker/               ← Module 3: standalone Cloudflare Worker (API)
│   ├── src/index.js
│   ├── wrangler.toml
│   └── package.json
└── labs/                      ← step-by-step lab sheets for each module
    ├── 00-setup.md
    ├── 01-edge-networks.md
    ├── 02-deploy-pages.md
    ├── 03-workers.md
    ├── 04-dns-https.md
    └── 05-showcase.md
```

## ✅ Before class (10 min)

1. Install **Node.js 18+** → <https://nodejs.org> (check: `node -v`)
2. Install **Git** and **VS Code**
3. Create free accounts: **GitHub** and **Cloudflare** (<https://dash.cloudflare.com/sign-up>)
4. *(Optional)* **Docker Desktop** for the Day-6 recap

## 🚀 Quick start (the whole day in 6 commands)

```bash
# 1. Get the code
git clone https://github.com/<you>/edge-deployment-workshop.git
cd edge-deployment-workshop

# 2. Log in to Cloudflare (opens your browser once)
npx wrangler login

# 3. Deploy the portfolio (static site + /api/edge function) to Cloudflare Pages
cd portfolio
npx wrangler pages deploy        # first time: say "yes" to create the project
#   → https://my-portfolio.pages.dev   (change "name" in wrangler.toml first!)

# 4. Deploy the Worker API
cd ../edge-worker
npx wrangler deploy
#   → https://edge-hello.<your-subdomain>.workers.dev
```

Preview locally before deploying:

```bash
cd portfolio   && npx wrangler pages dev     # http://localhost:8788
cd edge-worker && npx wrangler dev           # http://localhost:8787
```

Day-6 recap — the same site in Docker:

```bash
cd portfolio
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio     # http://localhost:8080
```

## 🔁 Git-connected deploys (optional, “real-world” way)

Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick your repo →
*Build command:* (leave empty) · *Build output directory:* `portfolio/public` · *Root directory:* `portfolio`.
Now every `git push` redeploys automatically and every branch/PR gets its own preview URL.

## 🧯 Troubleshooting

| Problem | Fix |
|---|---|
| `wrangler: command not found` | Use `npx wrangler …` (no global install needed) |
| Login window doesn't open | `npx wrangler login --browser=false` and paste the URL |
| Project name taken | Change `name` in `wrangler.toml` (must be unique on pages.dev) |
| Edge badge says “running locally” | Normal on `file://` — use `wrangler pages dev` or deploy |
| Old version still showing | Hard refresh (Ctrl+Shift+R); each deploy also gets its own unique URL |

## 🏁 Showcase checklist

- [ ] Portfolio live on `*.pages.dev` with **your** details in `data.js`
- [ ] Footer edge badge shows a real data-centre code
- [ ] Worker live on `*.workers.dev` — `/api/whereami` works
- [ ] `curl -I` shows HTTPS + `cf-ray` header
- [ ] Code pushed to GitHub; URL submitted for the showcase
