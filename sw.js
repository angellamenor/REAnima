/* REAnima · service worker
   Cambia CACHE en cada versión publicada: así la app instalada se actualiza sola. */
const CACHE = "reanima-v16";
const ARCHIVOS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ARCHIVOS.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Páginas: primero la red (para recibir la última versión) y, sin conexión, la copia guardada.
// Resto de archivos: primero la copia guardada.
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(
      fetch(r).then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put("index.html", copia));
        return res;
      }).catch(() => caches.match("index.html").then(x => x || caches.match("./")))
    );
    return;
  }
  e.respondWith(
    caches.match(r).then(x => x || fetch(r).then(res => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
      return res;
    }))
  );
});
