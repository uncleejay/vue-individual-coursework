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

