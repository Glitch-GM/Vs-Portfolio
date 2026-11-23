/* Builds the page from the SITE object in data.js. You normally do not need to edit this file. */
const $ = id => document.getElementById(id);
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
const safeUrl = u => /^https?:\/\//i.test(u) ? u : "#";

document.title = SITE.name + " | Video Editor";
$("navName").textContent = SITE.name;
$("footName").textContent = SITE.name + " · Video editor";
$("year").textContent = new Date().getFullYear();
$("headline").textContent = SITE.headline;
$("subline").textContent = SITE.subline;
$("emailText").textContent = SITE.email;
if (!SITE.email) $("emailRow").hidden = true;

const cta = $("cta");
const main = el("a", "btn", SITE.primaryButton.label); main.href = safeUrl(SITE.primaryButton.url); main.target = "_blank"; main.rel = "noopener";
const see = el("a", "btn ghost", "See my work"); see.href = "#long";
cta.append(main, see);

const row = $("contactRow");
function withIcon(a, src) {
  if (!src) return;
  const i = el("img"); i.src = src; i.alt = ""; i.width = 18; i.height = 18;
  a.prepend(i);
}
SITE.socials.forEach(s => {
  const a = el("a", "btn ghost", s.label); a.href = safeUrl(s.url); a.target = "_blank"; a.rel = "noopener";
  withIcon(a, s.icon); row.append(a);
});

if (SITE.clients.length) {
  $("clients").hidden = false;
  SITE.clients.forEach(c => $("clientList").append(el("span", "", c)));
}

function tiles(group, gridId, titleId, countId, vertical) {
  $(titleId).textContent = group.title;
  $(countId).textContent = group.items.length + (group.items.length === 1 ? " project" : " projects");
  group.items.forEach(it => {
    const a = el("a", "work"); a.href = safeUrl(it.url); a.target = "_blank"; a.rel = "noopener";
    const t = el("div", "thumb" + (vertical ? " v" : "")); t.style.background = `var(--${it.color === "c1" ? "clip1" : it.color === "c2" ? "clip2" : it.color === "c3" ? "clip3" : "clip4"})`;
    const p = el("div", "play"); p.append(el("i"));
    t.append(p, el("span", "tc", "00:00 / " + it.runtime));
    a.append(t, el("h3", "", it.title), el("p", "", it.type));
    $(gridId).append(a);
  });
}
tiles(SITE.longForm, "longGrid", "longTitle", "longCount", false);
tiles(SITE.shortForm, "shortGrid", "shortTitle", "shortCount", true);

if (SITE.testimonials.length) {
  $("proof").hidden = false;
  SITE.testimonials.forEach(q => {
    const d = el("div", "quote");
    const who = el("div"); who.append(el("div", "", q.name), el("span", "mono", q.role));
    if (q.sample) d.append(el("span", "mono", "Sample, replace with a real quote"));
    d.append(el("p", "", q.quote), who);
    $("quoteGrid").append(d);
  });
}

$("whyTitle").textContent = SITE.why.title;
SITE.why.items.forEach(w => {
  const d = el("div"); d.append(el("h3", "", w.title), el("p", "", w.text)); $("whyList").append(d);
});

$("copyBtn").addEventListener("click", async () => {
  const b = $("copyBtn");
  try { await navigator.clipboard.writeText(SITE.email); b.textContent = "Copied"; }
  catch (e) { const r = document.createRange(); r.selectNodeContents($("emailText")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selected, press copy"; }
  setTimeout(() => b.textContent = "Copy email", 2000);
});
