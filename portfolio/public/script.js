// Renders data.js into the page and asks the edge "where am I being served from?"
(function () {
  const data = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  $("year").textContent = new Date().getFullYear();

  function item(x, i) {
    return `
      <article class="item">
        <span class="check">[x]</span>
        <div>
          <h3>${esc(x.role)}</h3>
          <p class="meta">${esc(x.org)}${x.type ? " · " + esc(x.type) : ""} — <span>${esc(x.dates)}</span></p>
          <p>${esc(x.desc)}</p>
          <div class="mini">${(x.skills || []).map((s) => `<span>${esc(s)}</span>`).join("")}</div>
        </div>
      </article>`;
  }

  $("experience-list").innerHTML = data.experience.map(item).join("");
  $("education-list").innerHTML = data.education.map(item).join("");
  $("exp-count").textContent = data.experience.length + " ROLES";
  $("edu-count").textContent = data.education.length + " SCHOOLS";
  $("skills-list").innerHTML = data.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("");

  // Serverless function at the edge (see /functions/api/edge.js)
  fetch("/api/edge")
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((d) => {
      $("edge-badge").textContent =
        `⚡ Served from edge "${d.colo}" · you are in ${d.city || "?"}, ${d.country || "?"} · ${d.ms} ms at the edge`;
    })
    .catch(() => {
      $("edge-badge").textContent = "⚡ Running locally — deploy to see the edge badge";
    });
})();
