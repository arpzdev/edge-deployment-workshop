# Lab 03 — Serverless functions at the edge (25 min)

### Part A — Pages Function (already in your portfolio)
`portfolio/functions/api/edge.js` → served at `/api/edge`. Visit
`https://<your-project>.pages.dev/api/edge`. The footer badge of your portfolio uses it.

### Part B — Standalone Worker
```bash
cd edge-worker
npx wrangler dev          # http://localhost:8787
npx wrangler deploy
```
Try every route:
```
/                      HTML page
/api/whereami          where are you / which edge
/api/time              Kathmandu vs UTC
/api/hello?name=YOU    query parameters
/api/views             edge cache: MISS then HIT
```

### Part C — Make it yours (pick one)
1. Add a route `/api/quote` that returns a random quote from an array.
2. Change `OWNER` in `wrangler.toml` and redeploy.
3. Watch live logs: `npx wrangler tail` then refresh your Worker URL.
4. Call your Worker from your portfolio with `fetch("https://edge-hello.<sub>.workers.dev/api/hello?name=visitor")`.

### When to use (and NOT use) edge functions
✅ auth checks, redirects, A/B tests, personalisation by country, small APIs, header rewrites
❌ long CPU jobs, video encoding, heavy DB transactions far from the database
