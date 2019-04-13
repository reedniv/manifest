self.addEventListener('install', function(e) {

 e.waitUntil(

   caches.open('video-store').then(function(cache) {

     return cache.addAll([

       '/manifest/a2hs/',
       
       '/manifest/a2hs/index.js',

       '/manifest/a2hs/style.css'

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
