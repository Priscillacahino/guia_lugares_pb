const CACHE="guia-venus-v11";

const ASSETS=[
  "./",
  "index.html",
  "style.css",
  "ux-venus.css",
  "dados.js",
  "app.js",
  "ux-venus.js",
  "manifest.webmanifest",
  "icon-localizacao-192.png",
  "icon-localizacao-512.png",
  "icon-192.png",
  "icon-512.png",
  "guia-venus-turista.jpg"
];

self.addEventListener("install",e=>e.waitUntil(
  caches.open(CACHE)
    .then(c=>c.addAll(ASSETS))
    .then(()=>self.skipWaiting())
));

self.addEventListener("activate",e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    ))
    .then(()=>self.clients.claim())
));

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;

  const url=new URL(e.request.url);

  // Links e recursos externos continuam sendo buscados diretamente na internet.
  if(url.origin!==self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached) return cached;

      return fetch(e.request)
        .then(resp=>{
          if(resp && resp.ok){
            const copy=resp.clone();
            caches.open(CACHE).then(c=>c.put(e.request,copy));
          }
          return resp;
        })
        .catch(()=>{
          // O index funciona como fallback apenas para navegaÃ§Ã£o.
          if(e.request.mode==="navigate"){
            return caches.match("index.html");
          }
          return Response.error();
        });
    })
  );
});
