const CACHE_NAME = 'epa-navigator-cache-v1';
// Add the paths to your files here. 
// The path must be relative to the root of your website.
// For GitHub pages, if your repo is "epa-navigator", the paths will be "/epa-navigator/", "/epa-navigator/index.html", etc.
// You will need to update this list after you know your repository name.
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(epa-navigator/index.html);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Serve from cache
                }
                return fetch(event.request); // Fetch from network
            })
    );
});
