'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "00f2d367cb5aefd53ac856327755c42c",
".git/config": "0038c3531e80fdff763c40966481a8c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e34ab5246ff8d092a20f14dd77cb28b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a92ab341b1776199567ec39d1008e04",
".git/logs/refs/heads/master": "3a92ab341b1776199567ec39d1008e04",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/00efeaee07c229bb5f8bbb43d83496e1031eaf": "92e89359a8ce425e8708020f8decf775",
".git/objects/17/1cdee812c76ec21019d6bcdc59152e4665b98b": "d56593fba7d27c1b2634d67755886d16",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/ef7be914fb1c3a5c1cf7ec3f40f1d7155ad0f1": "2934bbf3a9b78f2d016a0d7061d479ba",
".git/objects/28/49d28333dae7484c253c8308181cf0d281b95b": "ddae107579ae399c49b355f5d821469b",
".git/objects/28/fee66cfba14c23db68abf7702d3947c47332ac": "98f269bc92e2ef890fb416620d7a9d83",
".git/objects/34/a52da7f250a5455b17e72dced629a64714c2f3": "ffab12d770d7f5d1cdb2ffdec8fd0949",
".git/objects/37/f564aaa99ca0aa7ba1f10db9d5c56de8558b8e": "2801851b29f270acedb97359a123e2c8",
".git/objects/3d/9bccb1e695bb1915dc70cf306f170072273df8": "837b9d6523840143b39c977fa6c8c281",
".git/objects/3f/373450443dab489b63ec3071f7064e7727b934": "cd0bac97ba5465eaaa4c23a2f74a3d31",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/c5e14c50db38b2995870491c209858b2dc2a4c": "6502782afc103bac5ccf88d6cdf0a51e",
".git/objects/4f/28a800b6578aeaa1ab95a908679fd2dd97221b": "07d4568dc67d4b81db53bda73d67e9f2",
".git/objects/50/97044c7b44bcb390fc8cadbf275c287143ba7e": "b5443bdf7bee98085ae4f83045b87d0c",
".git/objects/51/355de0a538da9f5739f5065fa0011e3b17bc24": "4d53dee660b4ae7db254945b4c4364cd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/2ddbe7969dc2c92159ca6ca7447250121b268b": "06f9e5fd1aa467ec99f067870d225a06",
".git/objects/6b/534019c4c3da2d1967f00fef76649fc6ca86d7": "8f68f4c0228dab3f80b3cae312a5888d",
".git/objects/6d/3a909e6f0e0a6bbda1ee64127645075110d64c": "6ec4f90007d9d923ef6dfddace57eaf0",
".git/objects/78/ed9fe62a76610ccb0d12a628d924e8ed22a2da": "d7fb52742565c4bcc829e042245c913a",
".git/objects/7c/06b707b8d2dba64de8f7bf109d3e9750671e66": "c3223f8cb49e69ecd759c2ceaa1e1861",
".git/objects/7d/23834eac74a89dec1e9f00121896b9b2e1de74": "ae6a0de95e9508d9cbc18574618cd37d",
".git/objects/7f/094e4654d629021a526fe6b71d7e7c7ea31560": "20a14561c8714d9c94c521b524c70b0d",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/84/25a3a73a4fea6bab95bdb0a3f4e7e3845d9396": "e4fd6bf0db42405548532a2e7afff6d7",
".git/objects/84/90cca8b2f1f5cf27d12a08b88ecc29da3e8cb9": "d62d51d442cd96ef24108b76b9cb7034",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/88/a7f5577760717acf912cff8cc73ae38f0d72c0": "bbd28c94f60a0a58f1cf463966b0cc58",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/eabedcc1e9f66136f722d736432f7571e7766a": "c9c0b6723cdf40d4f87f03595e19a540",
".git/objects/94/8ee105699a4313464a885aa5c3d2f7a4f028d9": "9b2963366a55da849b4f40db4c107cae",
".git/objects/96/1b69c688f9bc9c481df6db817286f98b0a9cc4": "49bdb25cf6b356ce8b39c5ffae091c92",
".git/objects/98/2ef5cc395e2c5335bb2163038e83a803b22c59": "c058c9868c7f4b0eab06a945db18b8ef",
".git/objects/98/ddc55422f96da127823da4cec1eb6e3a01c414": "889825bcfedfb39a084f5b79aaaf2dfa",
".git/objects/a0/a9b6d99944b9ef53e40e5968b8ab959d44aa49": "7e8c46252466882bfb0442800a44f4ce",
".git/objects/ac/0e9fc33363c3560ababcdb5c7c63f8684b0e0c": "2bbd795ad23eb975950ac94054862beb",
".git/objects/b3/cb6044af42cb5e852a3128c682c7e0fd9d74bf": "236f8a5e3cdfb8f5ff75241908d17f65",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b0ccca5def698913d5a5d5eda84a089a0637ae": "d3ccbfb71d16b77f51b3a0d14db92364",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/db4eec44694c90a6a3edece3e08591015341e2": "13518a23e94f601cf770b25ea564ada9",
".git/objects/bc/64203479542fcce4e697b6fcd1ee1398bcd86a": "98c4c125f3ab45e69dc3ab7a9b43b9eb",
".git/objects/bd/68e181b24942602aaa077f93a613750ce62e25": "79a46d2caf51cdb886e2fe7044f9fa93",
".git/objects/c2/2ba052bc1ebbdbf03001453df5583ee3f7c82a": "6fbdae2ec9ee9243df495893398c3a36",
".git/objects/cd/84fb5de7ab41e84a9f72ea55110e43aba014b5": "22a57524a74f733068c360832caac12a",
".git/objects/cf/2ca63dec9ffc1402b82f2a40af1289b8760050": "497af4e4b2127fd73594e46840c35b1d",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/d3/de3bed5e92f01e36803bdb17443646dc5bad3d": "86307e41e867d76868fc7d8cd2e1fa9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/c506258b46d7fbd456c0e0dc443e6fbd854116": "c7bd66117b0a822698592ee2bd665648",
".git/objects/ea/f418e35c7dda1591ef441427befddadfc2a476": "0511404c0fd2ccda7878ef5de26ef42f",
".git/objects/eb/6af621906d164d105e27bacf39a7420b98c75a": "57170ad5b6ab15c429b205386aa819af",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/d09a662f0360e4a1c6b2b8ea7ed66a469767db": "7ef08c19fd89e188067420f105f6cfbc",
".git/objects/f8/7496378f1b7788ff38d8d4f596a35e98a02566": "036cc488f9f8602bb48b77ce70a38588",
".git/objects/f9/d7f92fa0203e79d1ac9dda107ad507f3599d3e": "8fd48e5a3f14c7a7f98bee9be97dc282",
".git/objects/fa/7237f62dfbbbf4af1fa5b01488da48afb88dff": "7f8828715be3f91d8f0eff5ef2aabbd0",
".git/objects/fb/ac1edac9d5e1dca4a97b327b676214be467805": "996a6d12130434d4c1eac641a02568a8",
".git/refs/heads/master": "64d91a8037a55742dc2d0d3a502838b4",
"assets/AssetManifest.bin": "f5f5ba61cefeda52684bba4ddbcc4276",
"assets/AssetManifest.bin.json": "0f2a8be4d981cb78e2da7d0cfdf1f385",
"assets/AssetManifest.json": "9ac758795be5b0f19ab43a696515698b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bbc491a6c1084043f201e053babff193",
"assets/images/img_bancos.jpg": "dc0be0f54f9071695e7cb64f1e630818",
"assets/images/img_bancos.png": "86c60005183d801530b34bbbd37a2b79",
"assets/images/img_emergencial.jpg": "310180f57985608a628bf156de56e6e9",
"assets/images/img_emergencial.png": "a17e7df8e44b53f50492a134d0b1f37a",
"assets/images/img_estabelecimento.jpg": "e5ebd55b574135094177fc93b4c90edb",
"assets/images/img_logo.jpeg": "66f646f4dfbb7f708b3910633339a0b6",
"assets/images/img_mensalidades.jpeg": "b50dc3213054f0cd976417e33572ce0d",
"assets/images/img_mensalidades.jpg": "0f77970d4e86157e59716680f916daac",
"assets/images/img_motorista2.jpg": "9030c5c6027785d69e02c4a8d3511013",
"assets/images/img_motortista.jpg": "fc0a2f8c3756b7b687c0aafcb651fcbd",
"assets/images/img_passageiro.jpg": "05dbb6bd20da965cca9e4e11e78969f9",
"assets/images/img_permissoes.jpg": "0f462309fd17963d1c7b2a44eb3ab30b",
"assets/images/img_precificacao.png": "6782b34df4420d4999bef39e2961ff3d",
"assets/images/img_preco.jpg": "8d4241d2c540606ea466a95d386e63b9",
"assets/images/img_privilegios.jpg": "c91e9c8e194c6afbedb2f63fd58c36a1",
"assets/images/img_privilegios.png": "81e87aefa790119efeb8a43fe3e50a30",
"assets/images/img_suporte.jpg": "c459f8dc32a0562a2dc8bcc4e7358ee2",
"assets/images/img_suporte.png": "9271294aa373c9b9c2e0121d38de69a5",
"assets/images/img_usuarios.jpg": "83338c4f0babb3c60606bfb67950bc88",
"assets/images/img_viagem.jpg": "36252f73b1f6676cab1729812a46a3e5",
"assets/images/img_viagem.png": "449b722e4216cc32ada8c4f416a0819e",
"assets/NOTICES": "08ae738b136d54893550e1966e799c3d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "34eb740000df15c03210028f34bc9cf5",
"canvaskit/canvaskit.wasm": "2778fe4a13eac805b37df04590085ba3",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "afe994e4d3d6d23db1d643573c9839ce",
"canvaskit/chromium/canvaskit.wasm": "1ec8ac7ed8ea5906c2e03fc14cb2c22a",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "36607a151127e3736083d241f6e7356b",
"canvaskit/skwasm.wasm": "045364c77c9eedecbd12d2c77fe8fa0a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5aee128657b91f4e3e1eeec85c7ee066",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07a15ef87faee671d775cbb7f5289ef1",
"/": "07a15ef87faee671d775cbb7f5289ef1",
"index.php": "bcdc67822c1f3ad157993913f38ba4ea",
"main.dart.js": "73e41cee70a272a95859164239eb0034",
"manifest.json": "cd24cc2ed9f46baacd0982c87d424021",
"version.json": "4effa6da8d848993492e0efe073bb298"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
