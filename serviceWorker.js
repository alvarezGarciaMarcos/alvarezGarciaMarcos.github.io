const cacheName = "v1";
const cacheAssets = [
  "index.html",
  "about.html",
  "js/main.js",
  "serviceWorker.js",
  "css/style.css"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => cache.addAll(cacheAssets))
      .catch(error => console.log(error))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) return response;
      return fetch(e.request);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(names =>
        Promise.all(
          names.map(name => {
            if (name != cacheName) return caches.delete(name);
          })
        )
      )
      .then(() => self.skipWaiting())
  );
});
