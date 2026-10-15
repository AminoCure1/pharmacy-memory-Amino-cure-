/* ==========================================
   PHARMACY MEMORY | AMINO CURE
   Service Worker v2.0.0
   Offline Cache
========================================== */

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


/* تثبيت التطبيق وتخزين الملفات الأساسية */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
      .catch(error => {
        console.error(
          "تعذّر تخزين بعض ملفات التطبيق:",
          error
        );
      })
  );
});


/* حذف ملفات التخزين القديمة */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name =>
              name.startsWith("pharmacy-memory-") &&
              name !== CACHE_NAME
            )
            .map(name => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});


/* تحميل الملفات من التخزين عند عدم توفر الإنترنت */
self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  /* لا نتدخل في المواقع الخارجية */
  if (url.origin !== self.location.origin) {
    return;
  }

  /* صفحات HTML: جرّب الشبكة أولًا */
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put("./index.html", copy);
            });
          }

          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match("./index.html");

          if (cachedPage) {
            return cachedPage;
          }

          return new Response(
            "التطبيق غير متاح حاليًا. افتحه مرة أخرى بعد الاتصال بالإنترنت.",
            {
              status: 503,
              headers: {
                "Content-Type": "text/plain; charset=utf-8"
              }
            }
          );
        })
    );

    return;
  }

  /* بقية الملفات: التخزين أولًا */
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then(response => {
        if (
          response &&
          response.ok &&
          response.type === "basic"
        ) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
        }

        return response;
      });
    })
  );
});
