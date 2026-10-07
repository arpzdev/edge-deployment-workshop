# Lab 04 — DNS & HTTPS detective (15 min)

### 1. Resolve your site
```bash
nslookup <your-project>.pages.dev
# macOS/Linux alternative:
dig <your-project>.pages.dev +short
dig <your-project>.pages.dev CNAME
```
The IPs you get are **anycast** — the same IPs are announced from 300+ cities.

### 2. Look at the HTTPS certificate
```bash
curl -vI https://<your-project>.pages.dev 2>&1 | grep -iE "subject|issuer|expire|SSL connection"
```
Or click the 🔒 padlock in your browser → *Certificate*. Who issued it? When does it expire?

### 3. HTTP → HTTPS redirect
```bash
curl -I http://<your-project>.pages.dev
```
Look for `301`/`308` and `location: https://…`.

### 4. DNS record cheat sheet (for when you buy a domain later)
| Record | Points to | Example |
|---|---|---|
| A | IPv4 address | `@ → 104.21.x.x` |
| AAAA | IPv6 address | `@ → 2606:4700::…` |
| CNAME | another name | `www → sita-portfolio.pages.dev` |
| TXT | text / verification | `_cf-custom-hostname → …` |
| MX | mail server | `@ → mx.mail.com` |

Custom domain (not done in class): Pages project → *Custom domains* → *Set up a domain* → add the CNAME it shows → Cloudflare issues the HTTPS certificate automatically.
