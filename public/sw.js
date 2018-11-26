self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/',
          '/sw.js',
          '/js/main.js',
          '/css/master.css',
          '/images/icon.png'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });