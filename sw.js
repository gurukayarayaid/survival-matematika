// Service Worker for Math Survival PWA
const CACHE_NAME = 'math-survival-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js'
];

// Install event - cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching app assets...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .catch(err => {
                console.warn('Cache addAll failed (some assets may not be available):', err);
            })
    );
    self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip Firebase API calls (these should always be fresh)
    if (event.request.url.includes('firebasedatabase.googleapis.com') ||
        event.request.url.includes('googleapis.com/identitytoolkit')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    // Return cached version
                    return response;
                }
                // Fetch from network
                return fetch(event.request).then(networkResponse => {
                    // Cache the new response
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                }).catch(() => {
                    // Offline fallback - serve the cached index.html
                    if (event.request.destination === 'document') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

// Handle push notifications (optional)
self.addEventListener('push', event => {
    const title = 'Math Survival';
    const options = {
        body: event.data ? event.data.text() : 'Ada tantangan baru menunggumu!',
        icon: './icons/icon-192.png',
        badge: './icons/icon-192.png'
    };
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
