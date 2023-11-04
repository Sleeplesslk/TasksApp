const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/src/index.html',
    '/src/app.js',
    '/docs/screenshot.png'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
    );
});