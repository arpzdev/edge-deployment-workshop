// Cloudflare Pages Function → runs at the edge on every request to /api/edge
// File path = route:  functions/api/edge.js  ->  https://<project>.pages.dev/api/edge
export async function onRequestGet({ request }) {
  const start = Date.now();
  const cf = request.cf || {}; // geo + network info added by Cloudflare's edge

  const body = {
    colo: cf.colo || "local",        // IATA code of the data centre, e.g. "KTM", "DEL", "SIN"
    city: cf.city || null,
    country: cf.country || null,
    timezone: cf.timezone || null,
    httpProtocol: cf.httpProtocol || null, // HTTP/2, HTTP/3 …
    tlsVersion: cf.tlsVersion || null,     // proves HTTPS is on
    ms: Date.now() - start,
  };

  return Response.json(body, {
    headers: { "cache-control": "no-store" },
  });
}
