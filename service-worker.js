const CACHE_NAME = 'ege-prosto-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://sites.google.com/view/ege-6/главная-страница', // Кэшируем главную
  'https://www.googleapis.com/...' // Здесь могут быть ресурсы Google Sites, но их сложно кэшировать все. Этот базовый service worker просто установится.
];

// Упрощенный service worker для обертки. Он регистрируется, но для сложных сайтов Google Sites полное кэширование сложно.
// Этот service worker позволит установить PWA.
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});