'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "4be43edee5a78b294c1e5c166d0b9803",
"/.git/config": "83c9df488238005a05aeda9bcd7e0120",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
"/.git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "89f00565f8ad03f4e35a07291a8da4a4",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "704b7b15d4f059378af07edf9beb2dcb",
"/.git/logs/refs/heads/master": "704b7b15d4f059378af07edf9beb2dcb",
"/.git/logs/refs/remotes/origin/HEAD": "c44438c8596f950afb2c85325cd6363b",
"/.git/logs/refs/remotes/origin/master": "a887006ff7c7a1e9b4097909f657e5e9",
"/.git/objects/00/44cd9fc418d4265ab5748294e3642795b2a9a3": "310b4a04e4f12ff004a0a35e03e742db",
"/.git/objects/01/976d61a0ad24eb9451cda936cb2517ae7dc63b": "1fcbe61f37089457b6f05689a6a5ed6a",
"/.git/objects/02/6d384bb329c78a8bc5bd2c5bf2bbe25abbf92e": "26b1bc2ece9069e12d1218199a7a7db3",
"/.git/objects/06/7231de8ea16b23dd29161e5abec8d7959e3ae6": "5c523a1f670f1b04c252e5ddec2e35c3",
"/.git/objects/08/c9036934ab7996706f10c59de4f462e8206816": "a93d786085aecc56ae53b17494abd697",
"/.git/objects/0b/2ad6d0272444b99acd702ff7ae7a5959238b19": "a6f09cfca339b8daf7d95e6838e3b691",
"/.git/objects/0c/a3b7c3aad66291c198b251c5b07acf431ae710": "8ccacdc46076fa22ee334c73540aac38",
"/.git/objects/11/41e3b40046068a4b9c012f87e10f6df7260a2b": "173a7326cc7d53dd83709d62a49fa5e0",
"/.git/objects/13/697b569baad9de3d52a215b607f62fe7dfaa39": "5d867e02a56215ba5e70576b0283ecef",
"/.git/objects/16/770feeee82306a8ea98dfbec51210cd534afd2": "510214959dedbc93d60929a3072aed3d",
"/.git/objects/18/c8c174a747184cb336414d31739490969c47f8": "8b4ce4f31dae40ac67e5afb5bb74a712",
"/.git/objects/1a/c42537eb2c04a0d6eb530e4ff83a9de6f73f6a": "cdddd2bf7f3ebe1876905c2c4fffe78d",
"/.git/objects/1b/38f18cdbb9b41fe76ed24009d5fd9030b247dd": "2a2481b946530db54d367ea40f05a96b",
"/.git/objects/1b/3bce21dc804ccfc753f35f0f6c7f3c93c0d75f": "48068a7b9326263da9cc2ca42e6c31c2",
"/.git/objects/1c/532d2e748e3a4a55f7d0975cec79832bf2380c": "d97448d61d213996155df460a4948263",
"/.git/objects/1d/2f52fc74f795be4be42d0bdde4f0719d8450f3": "4a06c044aed98fa590f5b024f22408fc",
"/.git/objects/1e/cd21c45f422dc1f1411970e99c967654268730": "3f3d981702e7959f9d6a7324f7c87430",
"/.git/objects/21/968ca4245170adcc2285ebd7b5828861b83391": "43e4f25c02343ffe03ba192f4cc96928",
"/.git/objects/21/dcc5a2b2abc32e7ad611795ea48ab47f5cf920": "43cdc333cb7958352ecc660b6c42dbea",
"/.git/objects/21/eab21930801749491274068a06a941dab4cda5": "647c95aa6485b72f13c19c0e11622705",
"/.git/objects/22/096ee3d3fad6c3a3ee9daf8f8ae045d7787e8f": "1f35d75807a141c771273f58cae4734a",
"/.git/objects/26/21420919c933ebb39c5dc926f284d29aa9918a": "733afc6a4692584be85e53fefe418a6a",
"/.git/objects/26/86ac5cb948d2442b932aaaea3212b92b05b903": "347245e9da077b75c0b49b47935829df",
"/.git/objects/28/e676a2bbb4fb2cda6443fc4c7b10270f861cf5": "b805fb44fe3d7d6d7373c9abf6092ae9",
"/.git/objects/29/52e76acc3aed2c9c68bf1e636795330f40de7b": "8327f506bbbd1ab3c5237c0ebb8c4f8c",
"/.git/objects/2a/e05a2bdc91b1d0c2997b82f1b6f3e7593ffe83": "9f7f8e94018b9b3b37f4e7f829cd42e4",
"/.git/objects/2e/3897f5987c89e0537d09af8028fe173f970203": "d5d8c6f2a0f1b270edc5caab67f4be03",
"/.git/objects/2f/169e50154f64db8cbd7fc54beb730bde24a976": "47e987007b5f1fea6b0c9c9242c6677d",
"/.git/objects/31/a3ad877dd58bfbe31a0f19a6c9353e805e7582": "3a6add84e947222095586904c0851549",
"/.git/objects/31/c331fa5593ed3b5b80bc2a663c835655500ec0": "11347fb6e2ac7696b2be771a12c0ba56",
"/.git/objects/32/c597bd1449282a425339a81941f01dfe06cfb8": "16a74e94b575faf7abbe6a05fc1b055c",
"/.git/objects/32/f98c5153b650b4fa281b337c4dcfc6418f1126": "524a7291e5fb896464c37d09248aa449",
"/.git/objects/36/648dc44e45ddd11d1582c626e18d226fbde0cd": "24acd96d941ccbf769d07fa0b9b31d21",
"/.git/objects/37/18ba6390387b4f6d0a27b43868e21581e28353": "6594692b8729f0d524b1aaef6837f02b",
"/.git/objects/38/7bc67a357463cbe0cc5e881320c5f2e90d12d8": "2f819e1f154bd64583b22773c8110b9d",
"/.git/objects/38/b28c9722d2aa24154111be3483a37371b8113f": "98ed2d25e64fbb6e2d164c4051cd9861",
"/.git/objects/39/a9af75985dec448b3b397f9beca0948467b66e": "3ad5796562d2f548b934287979060f01",
"/.git/objects/3a/376bfdce20878ca2ae9bb46bfc67846b2dc8b9": "73c49b271ddb0969997825631a357803",
"/.git/objects/3c/143fe8a3436dacb96f34a521288768ccbf2305": "d4e17c50bc8f4f8fd34226b5f81d57ee",
"/.git/objects/3e/f91458c899394289618f5a5871299c758d0c25": "36db8a2d123f2ffbc838c14287ef2a94",
"/.git/objects/3f/7837874faa6786c78684ac0891c19dc175b933": "e4309aac302604b353e68cf02768b335",
"/.git/objects/40/efc52bd3156a095cd585a325f80c6cc27fa886": "8a11c250e97230bab9a3be241543ba68",
"/.git/objects/43/b6770fbae6ae01898e8f6df63a7b5d2fc1b9ee": "21551666d9622ac8e6b7baab0fc53ef7",
"/.git/objects/44/44211c5665ecfa8f461450fd49f71fad53cd99": "f12220fbb8303759f8bfd7e5342e7717",
"/.git/objects/44/4b8d7aee5cfb46d0c4df4f925bfd07864b72d5": "4c92a0c2188438539ca2b92c0039de74",
"/.git/objects/44/fb5c8ba5984349b9746571f29d83ef3a50931b": "1c5a0977d2c78965e7c722c6e80670d9",
"/.git/objects/48/c0a0f33ee51bad9dd950eea607841ed2ab496b": "7408256ed3607e9f82153049387d6fa4",
"/.git/objects/50/7f41336c34cc55f8e4cefd992834cabec3ada6": "bc47ec4d19c37f42d767d8901aa6214d",
"/.git/objects/51/f0cbec77f7b3af448c5f84a1695369a4a5178f": "e90bd1aae0d3b2d74904a080e71e4759",
"/.git/objects/5e/8edac9136642f31c6d9d0fbe63e616cb7045db": "0b33ebe29f81aaec256360a90c962840",
"/.git/objects/5f/363b4c3b62314fd75f9c1908b35df8e4da0dcc": "b436904200785046bfe8bca040097b55",
"/.git/objects/64/cdb1c584c44af3da59c0db6fc11467aa153be2": "31398238439c6a2136f2b4dd5fcba48e",
"/.git/objects/65/eb4ec401d8d8f40fc20de6e853915ba12ee575": "d276cf02cc5d920c6b0e3d72a7a0d9c7",
"/.git/objects/6d/eabf1b314f22b822555aa3807dbd9c0f28d086": "574cf791358e15d154beb88d24df2d79",
"/.git/objects/6d/f2f49b433ba12469e2652e003539b3a892f15f": "18e50d2f3aef84a26453a2e5ba5cd7ee",
"/.git/objects/70/2599866d2e8dc7814446f72e71a5557bfb8272": "6c36ae3e0460c1423a5a0a76d3b37e1f",
"/.git/objects/73/68020996fe5bd56bc24be4d81f2bf4a55d5469": "59a964ae4e79e4ddc981329e43900bbe",
"/.git/objects/76/b8570ea594492975a69e9630a0e315d57e3ef2": "a53cd6e3cdebb32d409fd70f41fc48cb",
"/.git/objects/7b/cc522a2ca3edf6c252e37c6154a532ddd94bed": "36859525dec5cdef4dc10000620c24d3",
"/.git/objects/7f/477fc231b43ec7ce0fd05de313421aba1e3cb4": "2fe44be64e397cc60523434af2d8f9a1",
"/.git/objects/81/9031b7c41683cd7286f556b8faf3db7bae1983": "39d09dc82539d1cc472c71454f838543",
"/.git/objects/82/087755fedfac33d1b2d8f9268758217c9b795a": "e04f1391ab058479939b189e3212aa81",
"/.git/objects/83/75d778a3e37787658b97bcff148ca426d4dba0": "3b62033176b6a562b51a9eebc8943620",
"/.git/objects/83/afb3706c1c525dba97b56d790bb4ea8449e601": "4d3ed9411f3d043961c998b0eea39306",
"/.git/objects/83/d16d003e7b4f690512e4174f9fcb992cd8150a": "dce058e3b393f378087d1b7865e8dd51",
"/.git/objects/8a/32de41a857a3c9d915f2a7be832d35f1c60a67": "9f1878535f717dda65611f4dd18a8328",
"/.git/objects/8c/4a9cd3716124423de0d21994333c83118122b5": "c393c22bb5e42ad46e3cfad69db4edd1",
"/.git/objects/8d/ae4e5b83d404bf240ea69d014cad915f96a29c": "8d4fb31483efe9c7d76507e79f06c170",
"/.git/objects/8f/26e2bd1733d04766d3e1190b09757c874aafa6": "02f68a6a3d5fcb9aba43b1e9519f566b",
"/.git/objects/93/50de145f898220fe4ce083d1c46896ccb40f4f": "092fb16506c4585c2b061738915bb304",
"/.git/objects/98/2cb7404ba0a9f89dba8aa56295b8af5d66b9cf": "ddcb0a766bbe77bfbe523168c323e0cf",
"/.git/objects/99/80a90f160078b8da6bedf295c102a435704b07": "c39bc41f36567a555c1d107ff172fda6",
"/.git/objects/9a/75f8863d8d5644d661bb56dc33c83dceb3d114": "1bfddc9107a6277dec500c4ade0817d0",
"/.git/objects/9c/0f4db523c2ff783db516db66187869d8a8e925": "570696de3240c29f4c3de2433e9ea5a0",
"/.git/objects/9c/19fd4bee96ef9e6df18fc57a19343edbd2bb3d": "3828afda6e853ba120c27db0680a9c80",
"/.git/objects/9f/0e7e31d03abe03b5c90ce5007f870121f55818": "77e45d4c8bb8cc3845dd1a8f680d5d30",
"/.git/objects/a2/2f10f21d460689e236cca6ff51820e0164dde8": "32a3bf25002d5c771b7a3ecf607bb4aa",
"/.git/objects/a2/7e47f0a6d54accf4e504320b6f655901a67c16": "bb365617185be859cee562be7d012631",
"/.git/objects/a3/0431043c5dffac7ce6877cb7d62cb277a71464": "7dbf5750f9e67362ce61173a8fd3815e",
"/.git/objects/a6/dc8870b3173e7f2b243eb359fcf96f76799ec1": "9218e444ea3270204c812aacb50b90fb",
"/.git/objects/a8/d62404e8ede9fbb7dbe37a22a22d236ad35b6f": "0b8a05de3b3eb033a354754bfdc6f2bb",
"/.git/objects/ac/409c4e6a641cc054785fcfa2068ca16596155c": "335a9d379d578af6decc2dcb335aeeb6",
"/.git/objects/ae/a60d78e41705d8767594b737851acdf33e790a": "b5f82d06e8ba43f7498c60c5b2ca1892",
"/.git/objects/b1/d3bf9ca1c63f31feb4cc649f0ef5f46b2f7999": "496a2cf5f75ea4d974671ef822486007",
"/.git/objects/b6/4ec5fd53e0e690c62cbaa10080fbc5a799677e": "904edeeef5ebde875dd793fec154dce1",
"/.git/objects/be/179832345be4bccaa6ef8bfea2d3d5c399f497": "b4b8f8f8597221ada1b5734dcacf73a5",
"/.git/objects/bf/33ca3e30e7a615df47c93f2208b7c512d11898": "7b77252340ff0e845c0a1d98993d3be5",
"/.git/objects/c1/05cb45500c89967fb6f289b046e6b5a9d696c6": "5c465295e5cc35a9b82dec4147b2c960",
"/.git/objects/c6/0e379f29ec0b214c0e7482f006a71142164b39": "1c20b0630ba887829437a063e3967ba7",
"/.git/objects/c9/10a43bb064342e550069ebd46c8773f14ee2b3": "2b2f0423300a5832dd7bc8ea39e3a6f1",
"/.git/objects/c9/7962712b1ffdef16c3b3a796612aeb28466cae": "6376860f3d15fed59445a3208939b4f4",
"/.git/objects/c9/8c81e257f5ef642f1bc3803349f51c8762e817": "e6f59a309ed40c5245a495f811c69425",
"/.git/objects/cb/46683ffcc7a843e90976dd0ee31a1757e5c5f7": "22147b5219ff0e6dd2269f9da3333680",
"/.git/objects/cb/981f6427018358ae7361bbd797bcc443e72399": "ba5944de6557c70d07a8ceb9c68ef589",
"/.git/objects/cb/e97127f3407f321e3dd30a95b35fb533fd0966": "81a1230f4c673706b371ad28500f3c69",
"/.git/objects/cc/3996bba5f4edcb5375464c64898caa3e02cd92": "5a0b1b28135955d0115328c46da70254",
"/.git/objects/cc/c165dcf13c0241ee5324fd906d816ac0021113": "2c6618c8c36949c40a41953d51d17ad4",
"/.git/objects/cd/c6c13d68789275ebaa76d982864c0daba9ce92": "d247750e34d2f9b57a24f813097f50df",
"/.git/objects/d0/cddb5f1c39b90fac30f45e01f862831f1247ce": "029a5d8236ac47070f7ba61fd3890187",
"/.git/objects/d5/2985364778b665a6b4662506dbd50cc2069ff7": "60b63d046983c2056ccd4d3fc83a6924",
"/.git/objects/d8/a7ad500b2f838fda66f28601b5ec6d878dfc69": "856553f51c1880554e99d34b247cb807",
"/.git/objects/d8/ec341129c12e4dd3bf92cfffce1a32a7dde163": "d75bde881961456444546a350efd5605",
"/.git/objects/db/39e6febc39785dc2934a5cdd3458efdb5a95e7": "f73fc30d4a7bb2cd0530e49fe601a314",
"/.git/objects/db/631d4ae2ea11111897c5f4bce44960437c6725": "54b393820d79f9cc343e2763cd07e9b0",
"/.git/objects/db/6f86ea4cef6e55d309bdd7c1e5d8b1402b57f6": "a45e597b11a3e70a35cb7441f6099bd2",
"/.git/objects/dc/328ad9dc0a4d6d712d337aa6a42a62d391598a": "38a652c67c9aedc45ef03f897319cea0",
"/.git/objects/dd/3748fa59f53028fa45a00ac3dbdb2013e2b0a1": "8a2e885b0390439003b6ae72b31ffcda",
"/.git/objects/dd/43698bbb75f23b212ab55cc0281ed81e4e36db": "ebf158d84708a07d6cb555028df0a1fb",
"/.git/objects/e2/b6eaeb06f4684a62ac9013a00c7145705de296": "561a823f222a31901e823344f8c29de3",
"/.git/objects/e7/4d5b5e14bceeb5164008413a1b09a15b10f882": "cdfe781b43d154f62303f76a50eec14e",
"/.git/objects/e7/c97a551f95ab85efab2ebf9c90632dcdbbad03": "49fb92b6541941fb92dd34430a8b01b3",
"/.git/objects/f0/b0623db17b900cf5595082c71932b69627d386": "06d5a99fb9e050d0e8f0066b6f102f0d",
"/.git/objects/f1/12666179f1e992216a22e67728a504bc509a92": "c1a6cedda24f469cdabdf4f83118cd65",
"/.git/objects/f2/a524cef241280c373d7a49b122fcb0fba938b4": "6388567e26a8e0cbdd28e41d55143f64",
"/.git/objects/f4/24b60f9f84cfaf43173bfc6e0964342b7a17ce": "06d07a178bd75695a2f6035f57c57f1c",
"/.git/objects/f6/0fd26766bd2e59000a8202893f93fe5e06f237": "4950298ef598b3aabaa15418a40db8ae",
"/.git/objects/f6/5f10c6161e8fe7b5780f7be54397dc3f5133a7": "6528b7f404fcdabd89cc8997ff5e9890",
"/.git/objects/f7/5a35532464a78362f9bcac71b46e648a1996c4": "0c8f7d523a32b014ce678df34a31d255",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.idx": "f6f79ef5d09d12a621c4902dde7eedfe",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.pack": "740e2acc6f9da795fd8b46e7d342d20a",
"/.git/packed-refs": "a1aa4de22c0720240b557aa12225ed55",
"/.git/refs/heads/master": "eac4d93c94daadb785500c730dbfda94",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "eac4d93c94daadb785500c730dbfda94",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3c48ff0b5c17767ad01d74fe6022688b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "2c81c44839d33b1f119bd3ab97e64906",
"/icons/Icon-192.png": "71884fc53c409e9e426859c702c1abf3",
"/icons/Icon-512.png": "b1459c1fc264d26acb8532f222cdf1e7",
"/index.html": "d12f08958c25ae765833217a386139b2",
"/main.dart.js": "8f3c28f368b982400bec10a9df853a5b",
"/manifest.json": "22c181ed0d2bf81ae568c6806cb1dacd"
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
