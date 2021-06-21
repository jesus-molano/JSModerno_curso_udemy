const cacheName = "apv-v1";
const archivos = [
  "./",
  "./index.html",
  "./error.html",
  "./css/bootstrap.css",
  "./css/styles.css",
  "./js/app.js",
  "./js/apv.js",
];

// Cuando se instala el sw
self.addEventListener("install", (event) => {
  console.log("Instalado el service worker");

  // Carga los archivos indicados en la cache
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Cacheando");
        cache.addAll(archivos); // add 1 , addAll multiples
      })
      .catch((error) => {
        console.log(error.getMessage());
      })
  );
});

// Activar el sw
self.addEventListener("activate", (event) => {
  console.log("Service worker activado");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key != cacheName).map((key) => catches.delete(key)) //borra las caches antiguas
      );
    })
  );
});

// Evento Fetch para descargar archivos estatico
self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);
  // Recoge los parametros de la cache
  e.respondWith(
    caches
      .match(e.request)
      .then((respuestaCache) => respuestaCache)
      .catch(() => caches.match("./error.html"))
  );
});
