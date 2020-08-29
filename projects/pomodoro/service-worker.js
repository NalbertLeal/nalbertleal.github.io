const cacheName = 'pomodoro-nalbert-leal-v1'

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then(cachesNames => {
        cachesNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache)
          }
        })
      })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(res => {
        const resClone = res.clone()
        caches
          .open(cacheName)
          .then(cache => {
            cache.put(event.request, resClone)
          })
        return res
      })
      .catch(err => caches.match(event.request)
        .then(res => res))
  )
})