var cacheName = 'Lessons';
var cacheFiles = [
    'index.html',
    'lessons.js',
    'lesson.webmanifest',
    'images/app.png',
    'images/icon-192.png',
    'images/art.jpg',
    'images/biology.jpg',
    'images/icon-512.png',
    'images/english.jpg',
    'images/geography.jpg',
    'images/maths.jpg',
    'images/mobiledev.jpeg',
    'images/music.jpg',
    'images/science.jpg',
    'images/ux.png',
    'images/web.jpg'
];

self.addEventListener('install', (e) => {
    console.log('[service worker] install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[service worker] caching files.');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (e)  {
            return r
        })
    )
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
    // check if the cache has the file
    caches.match(e.request).then(function (r) {
        console.log('[Service Worker] Fetching resource: ' + e.request.url);
    // 'r' is the matching file if it exists in the cache
    return r
        })
    );
});


self.addEventListener('fetch', function (e) {
    e.respondWith(
    caches.match(e.request).then(function (r) {
    // Download the file if it is not in the cache,
        return r || fetch(e.request).then(function (response) {
    // add the new file to cache
        return caches.open(cacheName).then(function (cache) {
        cache.put(e.request, response.clone());
        return response;
            });
        });
    })
);
});