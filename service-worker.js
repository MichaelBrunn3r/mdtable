!function(){"use strict";const e=1607167824284,t=`cache${e}`,c=["/client/client.f86b0492.js","/client/inject_styles.5607aec6.js","/client/index.4c0812cb.js","/client/EditableTable.99964440.js","/client/EditableCell.4dfc325c.js","/client/about.71e11610.js"].concat(["/service-worker-index.html","/bootstrap.min.css","/favicon.png","/global.css"]),s=new Set(c);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url),n=c.protocol.startsWith("http"),a=c.hostname===self.location.hostname&&c.port!==self.location.port,i=c.host===self.location.host&&s.has(c.pathname),l="only-if-cached"===t.request.cache&&!i;!n||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const c=await caches.open(`offline${e}`);try{const e=await fetch(t);return c.put(t,e.clone()),e}catch(e){const s=await c.match(t);if(s)return s;throw e}}(t.request))())}))}();
