/* eslint-disable */

const CACHE_NAME = 'marketplace';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/1.chunk.js',
  '/static/js/main.chunk.js',
];

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }),
  );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

// Update a service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['marketplace'];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});


export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
