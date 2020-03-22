'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "d3cf1fbdc934a60cfdafb21639ca7f72",
"/main.dart.js": "e1085f8cb9161411c852e8b822d50f4d",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "3f2ef6e5fb3ee4d4dd8f7d27d16111d8",
"/.git/config": "c0abe0162c7e55db8b578433bcb35c92",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/66/bf42752292e3887479c6f3481116a312cc58cf": "c6b68f5feaf0ef7aa7a5ce0b49ff016f",
"/.git/objects/60/9b2c4b21827cd4099902e028db20ef4a97e74a": "0ebf3ed866f5addae4514308fc0a5486",
"/.git/objects/be/910b33b8c3ffb4ec1c4a63e2b1a50ccfa5309c": "864df1b00f4c7da358393fdae2124d4f",
"/.git/objects/e3/40f9651861b3e86fe21d36cc4606045fc5f836": "aeaad6a76cbf1c3934afd33ed765440e",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/6b/eb9be0f8ae45cdd1892e803f859a1c88faa99f": "d4c459d8627c71bb959d4efe32786250",
"/.git/objects/99/b4e827e41e7a40414a8367203c4779fc26f78f": "812634eb08f85318029d7c9c00913dc5",
"/.git/objects/bf/9fcde5b2b925b0dc7d7c225eeb9ad584df3a90": "eb7879d5a78d83860c3f80ef90ef9a89",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/e6/8f5a45ed362630babd1111d34575d01b243edf": "19a2802ead6174a9a52239bf52b7fc6f",
"/.git/objects/e6/b6462078a1ef6dafe72ddcd93d335f8b47777a": "9779ed0457bd7095d710b263dc82f3b0",
"/.git/objects/e8/789807ee4e24eec066d3306fd0e7cfc97f7de5": "ea6d4cefeebb9b04dd16347daad6a1af",
"/.git/objects/77/35607e57d5d412d64674eb9d8918a9e6942af7": "be0fe2dfc1fe2190e79d8e3256f0c396",
"/.git/objects/23/5c396bf45280fc64d17d22bb32949c100cbb53": "1a756b0dc70dbaa664422af6aaa1f442",
"/.git/objects/12/3db79ad5724b21ce7436b7ac833336b4dbcf9f": "d9442f56bb4a9bf4bff370c9103a54b8",
"/.git/objects/2b/6d297c4452cdaac425fda2d230c8e65d85ceae": "c88a7ef427c828b7b62f51295f19f347",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/25/5dcfa012a4501e00574318db833de23a9b0b7e": "a49e4d425f480eae4f0dbf4464838c17",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "11aaf80b5af8abcd1a02286ad9159291",
"/.git/logs/refs/heads/master": "11aaf80b5af8abcd1a02286ad9159291",
"/.git/logs/refs/remotes/origin/master": "9d5d15d4f3172fe70367fb35a1e167d2",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "d96979b9d542ec753cebc308d5a3945f",
"/.git/refs/remotes/origin/master": "03cdbcf8b82434bf45ddfffd4b9ebd70",
"/.git/index": "a776b9c0b1e258715de4e6fa21ef71fb",
"/.git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"/.git/FETCH_HEAD": "dabc5242cecbd1f8ed66e224fe5ec597",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/images/notice.png": "b182f6797d93e4d64600f68464dd14a5",
"/assets/AssetManifest.json": "56db5ffcfd943f5b2fb66b5dd46ff509",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
