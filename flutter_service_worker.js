'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1cf47b48fb39bcd7afa390c6c5b6111c",
"assets/assets/fonts/Arvo-Bold.ttf": "2d1d6d49d66dd64706844e9a4cbb2197",
"assets/assets/fonts/Arvo-Regular.ttf": "31c017da02c964a448a7025ad0edf45f",
"assets/assets/fonts/Lato-Black.ttf": "1233fdf19c04333c7f58af4eb8698452",
"assets/assets/fonts/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/assets/fonts/Lato-Heavy.ttf": "093466c99afdd5e38cfe3062dbcbba6b",
"assets/assets/fonts/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/assets/fonts/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/assets/fonts/Lato-Semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/fonts/SF-Compact-Text-Regular.otf": "56cbf1e7f57eb6a77cc77317d05d51fa",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "3abde616ea2c2652c9c1130181e1aa93",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "9b1cbed4f1e6a2ef9822e944e0332b26",
"assets/assets/fonts/SFNS.ttf": "0a76c58c3e4d327ba6def12433cd733e",
"assets/assets/fonts/SourceSansPro-Semibold.otf": "78667e5e4b54fea9bb8552482b39cf2e",
"assets/assets/images/active-icon-1.png": "06afb43ff285f39e6e3bb19f14242aaa",
"assets/assets/images/background-8.png": "a27f52b7c474d47a646ae65c41359659",
"assets/assets/images/bg-2.png": "ca8af9b33b96e8f885b612eadba1f045",
"assets/assets/images/bgark.png": "7afbc2c1cfbd29c14f8b7fc8e46c72c6",
"assets/assets/images/bgs-2.png": "fc307580e375653987cb03d3dd6ba68b",
"assets/assets/images/bookmark.png": "cf386ac68fc10a95038aeae2a861c060",
"assets/assets/images/button-menuuser.png": "261000299290be1db891f816508ba47e",
"assets/assets/images/ceboola.png": "f7d4e135822c7bce3f85b96d66d151ad",
"assets/assets/images/corte.png": "094de404d91b7f691864d2856dec63a9",
"assets/assets/images/icon---f.png": "cbcdb35ea31c468c095a5524686a1f12",
"assets/assets/images/icon---g.png": "2a61c4de607a05123d83dd8fe726608b",
"assets/assets/images/icon---m.png": "0dc0c0bc83b34c2c2b4a4efe43a6794d",
"assets/assets/images/icon-18.png": "e74841335a9dd1a6c5d12c897df27e5e",
"assets/assets/images/icon-25.png": "aa452623b4ce73001f624b9dd1c4512a",
"assets/assets/images/icon-4.png": "cff52eac9d7c06e3937a5fa7531ed9e8",
"assets/assets/images/icon-5.png": "2e2f604370576d90ea8445bb696363f0",
"assets/assets/images/icon-8.png": "a1d0444c1b655776cb2da5c88e367e9d",
"assets/assets/images/icon-cart-3.png": "1258108674824974e129ae37ba66b86b",
"assets/assets/images/iconmenu1-2.png": "5bd094de55cd1a6192301687eb742d8c",
"assets/assets/images/iconmenu2-2.png": "7d21ddbff53eaca8dc229a3537657233",
"assets/assets/images/iconmenu2-5.png": "a846289ae95a9df6c3cefb0a51c43052",
"assets/assets/images/iconmenu2.png": "f15e345b97cd2db1dfdf9fcda8fb5bad",
"assets/assets/images/icons-light-house-3.png": "5420526965c3083738dca5c3d5df6727",
"assets/assets/images/image.png": "f6dd75cd88c2169a0c96a394d8c98dfb",
"assets/assets/images/imagen202background.png": "6cac521f434db6ae1494a7560151e632",
"assets/assets/images/imported-layers.png": "6589e8805f71a7217390187781193c11",
"assets/assets/images/inicio2020tronko.png": "9c8f259ad48ab089fd5e3e4c69627dc6",
"assets/assets/images/linediv-2.png": "1a79e386ad45492e9ce90085c40e0f65",
"assets/assets/images/logo2x.png": "fa63078c1a184df3ec705949b013d9bd",
"assets/assets/images/logominoni.png": "4259dbc23195add6fda93941124af13d",
"assets/assets/images/master-card-3.png": "092c972ed06815f65a1dac58bbc6e9ef",
"assets/assets/images/minoni-min-logo.png": "6c8a054ec0c60c52c87aeaf75cb06085",
"assets/assets/images/navite1-shape.png": "e3e5bd441578a88b3ee79f9e77d65b58",
"assets/assets/images/navite2-shape-2.png": "a5060291b8994949c5c0e5cb632f52a8",
"assets/assets/images/navite3-shape.png": "78061fc42956d6e761acb3f6790f7949",
"assets/assets/images/navite4-shape-2.png": "90dc3cf9b6af255fad0b2c10c020146c",
"assets/assets/images/paypal-5.png": "2d2b05db83dc1a0fda39f52245a80b28",
"assets/assets/images/regis---image----6.png": "53610e20287078a894cb332f6f7526a0",
"assets/assets/images/regis---shapepath----4.png": "aa37a5accd1184b05327d38096143c92",
"assets/assets/images/shapebill.png": "5bc2e524b2cc50322ad6af662066133d",
"assets/assets/images/tomate.png": "166a75b94b8e51d98682ad30ba06b08c",
"assets/assets/images/visa-3.png": "b54b9515fc4cf1b5aeebfcc1da8bbe50",
"assets/FontManifest.json": "a978e8d038547bba518adb7d2a62ec8a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "0af6f8509fcc42de4acace757c93120c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d5387f34c2d86478f62fef7a41605a9a",
"/": "d5387f34c2d86478f62fef7a41605a9a",
"main.dart.js": "6a56ef195376ed4949eabe0c5110a386",
"manifest.json": "08d05a14d2bc0b8d40278d41817071f3",
"version.json": "a80c1fa43d77c0321b7fc6b5eef4f67f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
