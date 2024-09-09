// src/client/sw.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  // يمكن تنفيذ عمليات التخزين المؤقت هنا إذا لزم الأمر
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  // يمكن تنظيف الكاش هنا إذا لزم الأمر
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
