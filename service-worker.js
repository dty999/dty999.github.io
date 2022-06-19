/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f540494dd649e0feac689ed1b408dd09"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.b1897e4d.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.8daec512.js",
    "revision": "abef476360cee8a93e81ce167e48015d"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.cd595959.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.e12a056f.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.cc7d6058.js",
    "revision": "f18fd80e5f56592edbe12939cb258275"
  },
  {
    "url": "assets/js/7.d51dfeed.js",
    "revision": "0c87ed99af5b16be211472c8f40f98cd"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.e3ab4b27.js",
    "revision": "191efa8a41a08a4cb0bcebed53f83171"
  },
  {
    "url": "assets/js/app.de08462a.js",
    "revision": "160d8f2ec7a67d1fdd7cb6e0a6d5ebbe"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c17c1a0903d34442ff7532c3ca8a7d51"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1b3fedd0892e58a1dc0d252a2c1ab626"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9c3f8c5d0c1035f2f2fd53ebb0d332c4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "45eec3bf62c384acfa412a9c3609533b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d7bdd811da6f4645d9335116aaa92e5a"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "8e0af91efc682b21f55ed57e0a44ed30"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a3fa73e735340fe12d8b61711c2598da"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "b4d1f58b1b4a4e5f29f9713353babfc4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6446511baf47377a338c9c6391748c77"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8845b21be615f9998d87d948b2760112"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6b0da19904feac224ee1e88ae899f7ab"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "228cd8d1ff73dc57570e793cb9b20d7e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a265a3d027e3f9abe340e427727e4fb8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "81a7743e181bdc8a082212e0c19cfa70"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c3d78c2c7c9e401997983dd63f404296"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "00582341863b41f7b8a629afe4df79d6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c0eff1088b4e82132f64d99533f8376e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "57cb1aa520ba02263fb2df6bf4f512b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b95bf51d0c08e0e23f437c2ecfb7a88"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c9d52d82c0d3deabb60ca2bb53f65b11"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c9ee1fd0edb357a3ebf6df1b01350e6b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2ccad1387ae32d6114241565ad6898d2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0faee2ab52a6b0ac590f7459d3e27969"
  },
  {
    "url": "生活分享/life.html",
    "revision": "809fb81f82d665b2bf8ad95f0c38e431"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
