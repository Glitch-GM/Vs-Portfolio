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

// Accepts a reel ID ("DNdOHaANIpt") or a full Instagram link and returns the embed path ("reel/DNdOHaANIpt").
function igPath(v) {
  v = String(v || "").trim();
  const m = v.match(/instagram\.com\/(reel|reels|p|tv)\/([\w-]+)/i);
  if (m) return (m[1].toLowerCase() === "reels" ? "reel" : m[1].toLowerCase()) + "/" + m[2];
  return /^[\w-]{5,30}$/.test(v) ? "reel/" + v : "";
}

function tiles(group, gridId, titleId, countId, vertical) {
  $(titleId).textContent = group.title;
  const items = group.items.filter(it => it.youtube || it.instagram || it.url);   // empty slots stay hidden until filled
  $(countId).textContent = items.length + (items.length === 1 ? " project" : " projects");
  items.forEach(it => {
    if (it.instagram && igPath(it.instagram)) {
      const path = igPath(it.instagram);
      const w = el("div", "work");
      const box = el("div", "ig-embed");
      const mount = () => {
        box.textContent = "";
        const f = document.createElement("iframe");
        f.src = "https://www.instagram.com/" + path + "/embed";
        f.title = it.title;
        f.setAttribute("scrolling", "no");
        f.allow = "encrypted-media; picture-in-picture; clipboard-write";
        f.allowFullscreen = true;
        box.append(f);
      };
      if (it.thumbnail) {
        // Custom thumbnail: one click opens the reel on Instagram in a new tab.
        const b = el("a", "ig-facade"); b.href = "https://www.instagram.com/" + path + "/"; b.target = "_blank"; b.rel = "noopener"; b.setAttribute("aria-label", "Watch " + it.title + " on Instagram");
        const img = el("img"); img.src = it.thumbnail; img.alt = ""; img.loading = "lazy";
        img.onerror = mount;   // thumbnail file missing: fall back to the Instagram player
        b.append(img, el("span", "ig-play"));
        box.append(b);
      } else {
        mount();
      }
      const vl = el("a", "watch", "View on Instagram ↗"); vl.href = "https://www.instagram.com/" + path + "/"; vl.target = "_blank"; vl.rel = "noopener";
      w.append(box, el("h3", "", it.title), el("p", "", it.type), vl);
      $(gridId).append(w);
      return;
    }
    if (it.youtube && /^[\w-]{11}$/.test(it.youtube)) {
      const w = el("div", "work");
      const box = el("div", "embed");
      const watchUrl = "https://www.youtube.com/watch?v=" + it.youtube;
      const onFile = location.protocol === "file:";
      if (it.thumbnail) {
        // Custom thumbnail: one click opens the video on YouTube in a new tab.
        const b = el("a", "ig-facade"); b.href = watchUrl; b.target = "_blank"; b.rel = "noopener"; b.setAttribute("aria-label", "Watch " + it.title + " on YouTube");
        const img = el("img"); img.src = it.thumbnail; img.alt = ""; img.loading = "lazy";
        b.append(img, el("span", "ig-play"));
        box.append(b);
      } else if (onFile) {
        // YouTube will not play inside a page opened straight from a computer (error 153), so link out instead.
        const l = el("a", "embed-link", "Watch on YouTube"); l.href = watchUrl; l.target = "_blank"; l.rel = "noopener";
        box.append(l);
      } else {
        const f = document.createElement("iframe");
        f.src = "https://www.youtube.com/embed/" + it.youtube + "?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1";
        f.title = it.title;
        f.loading = "lazy";
        f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        f.referrerPolicy = "strict-origin-when-cross-origin";
        f.allowFullscreen = true;
        box.append(f);
      }
      w.append(box, el("h3", "", it.title), el("p", "", it.type));
      if (!onFile && !it.thumbnail) { const wl = el("a", "watch", "Watch on YouTube \u2197"); wl.href = watchUrl; wl.target = "_blank"; wl.rel = "noopener"; w.append(wl); }
      $(gridId).append(w);
      return;
    }
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

if (SITE.showTestimonials && SITE.testimonials.length) {
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
