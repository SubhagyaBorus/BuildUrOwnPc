'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84ce4a30614466e6565a23d83dd4f463",
"assets/AssetManifest.bin.json": "7f52d3143e0c5c0b1fb1256a63e8c0ae",
"assets/AssetManifest.json": "370d5cd59347d59815f5f12f7c6943c6",
"assets/assets/Icons/computer.png": "34988bf3088c2e7f75ecf15515d2ed24",
"assets/assets/Icons/computer2.png": "653e9e14f081f8e331c74bb5958b1269",
"assets/assets/Icons/computer3.png": "73186c6310fb584e19318c1ba518e337",
"assets/assets/Icons/gaming-monitor-icon.svg": "66dceee98cf87052a27da7749f3e5612",
"assets/assets/Icons/gaming-pc-icon.svg": "e5b68f40aab7079b72c0df1418332d74",
"assets/assets/Icons/keyboard-and-mouse.png": "2a3b30c8fa670969538c964f5cfd2eac",
"assets/assets/Icons/laptop.png": "4c29667869a128bb02f646b206f8870c",
"assets/assets/Icons/tower-pc.png": "c10f0e195c4c8a65b121dd7375f2f18c",
"assets/assets/Images/backgroundImage/1.jpg": "6c391579cb9f0acfcd89ef6fd53f59a0",
"assets/assets/Images/backgroundImage/2.jpg": "453ea07eb4878675ddbc505a9032f73a",
"assets/assets/Images/backgroundImage/3.jpg": "8c4e36d4095173f167ed540c92414681",
"assets/assets/Images/backgroundImage/4.jpg": "29b1a89b2fbfcc4ed079b98966c59f99",
"assets/assets/Images/backgroundImage/5.jpg": "1e8313a4ad2b11f4c48be1d0c52e3646",
"assets/assets/Images/backgroundImage/6.jpg": "19f16445912df449962bdb4536d9e6b5",
"assets/assets/Images/Drawer/1.jpg": "7ab91c5e82dc1cf9e39dca8b517c33db",
"assets/assets/Images/Drawer/2.jpg": "4f74444705ae302661d49d8a786a1d86",
"assets/assets/Images/Drawer/3.jpg": "52c4a7f7274bc4c4b4d6697806577930",
"assets/assets/Images/Drawer/4.jpg": "29fe4627878a1152dd17266180fa6c1c",
"assets/assets/Images/Drawer/5.jpg": "2ff88007b83b0882ca97cc702af2abb4",
"assets/assets/Images/GamingLaptops/1.jpg": "691bb2edabda94e1d5714d9a7324e6fc",
"assets/assets/Images/GamingLaptops/1.png": "4611802a3f5e53a823b845a06131b758",
"assets/assets/Images/GamingLaptops/2.png": "f2cccc388c961bc6a0ac79d1faec58e8",
"assets/assets/Images/GamingLaptops/3.png": "7ee79a2fef588c91c07edffedaef2baf",
"assets/assets/Images/GamingLaptops/4.png": "3b843a67cd7ffc4854ea6300affa16ea",
"assets/assets/Images/GamingLaptops/5.png": "2fa23f7dd3ad66831e20d7a829bd6bea",
"assets/assets/Images/GamingPC'S/1.png": "8eafe62029fd26ddb1c484478bf8d7ee",
"assets/assets/Images/GamingPC'S/2.png": "5ce94d389a90e543c2141daf32aebdaa",
"assets/assets/Images/GamingPC'S/3.png": "eafc4409676d2b9bf2d295ba5fdbc0e4",
"assets/assets/Images/GamingPC'S/4.png": "3c4833fdd8eecfea47283b8ca027333b",
"assets/assets/Images/GamingPC'S/5.png": "a918b3b0c703820c5baa1e2002704de9",
"assets/assets/Images/GamingPC'S/6.png": "c1d1267bea18bbbaf5cfc89dc9f3c9b3",
"assets/assets/Images/GamingPC'S/7.png": "5ce94d389a90e543c2141daf32aebdaa",
"assets/assets/Images/HomePage/Gaming%2520pc.png": "f3bdf55a52da55f92314eb7b2d39fb27",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b085ab35f08efd8b29e691c135aedf0f",
"assets/NOTICES": "903f5d2395d987af84f2bc1580591982",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6fc322bfa85032bb092ab859e2339680",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "40596a5db9426e60baac333aa4d9d52d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "06989b3c33d583ee1c3c369d56fa66fc",
"/": "06989b3c33d583ee1c3c369d56fa66fc",
"main.dart.js": "2f4785793529726d137e9b7b5008f213",
"manifest.json": "8be44e56296069f0989b8d96a2da90e0",
"version.json": "e714e0ccd9c733e78442993197dff1b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
