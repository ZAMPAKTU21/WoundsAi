const CACHE_NAME = 'WoundAi';

// Add every file your app needs here
// Note: Ensure these paths match your actual folder structure!
const ASSETS = [
  './',
  './index.html',
  './mode_files/model.json',
  './mode_files/weights.bin',
  './mode_files/metadata.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
