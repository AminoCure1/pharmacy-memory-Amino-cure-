"use strict";

const CACHE_NAME = "pharmacy-memory-v2";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./data.js",
  "./app.js",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        APP_FILES.map(file => cache.add(file).catch(() => null))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names
          .filter(n => n.startsWith("pharmacy-memory-") && n !== CACHE_NAME)
          .map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

/* الشبكة أولًا (عشان التحديثات توصل)، والتخزين عند انقطاع النت */
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") {
          const page = await caches.match("./index.html");
          if (page) return page;
        }
        return new Response("غير متاح حاليًا.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      })
  );
});
