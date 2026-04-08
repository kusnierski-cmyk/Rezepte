const CACHE_NAME = 'raw-recipe-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './Rezept.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
