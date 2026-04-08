const CACHE_NAME = 'rezept-raw-unique-v1'; // Name geändert für Eindeutigkeit
const ASSETS = [
  'index.html',
  'manifest.json',
  'Rezept.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
