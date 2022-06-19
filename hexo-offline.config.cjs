// offline config passed to workbox-build.
module.exports = {
    globPatterns: ["**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}"],
    globDirectory: "/path/to/hexo/public",
    swDest: "/path/to/hexo/service-worker.js",
  };
  // offline config passed to workbox-build.
module.exports = {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/s-gz-2220-icodeq\.oss\.dogecdn\.com\/.*/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /^https:\/\/npm\.elemecdn\.com\/.*/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /^https:\/\/cdn\.plyr\.io\/.*/,
        handler: "CacheFirst"
      },      
      {
        urlPattern: /^https:\/\/ik\.imagekit\.io\/.*/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /.*\.html/,
        handler: 'NetworkOnly'
      },
      {
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'CacheFirst', // 缓存优先
      },
      {
        urlPattern: /.*\.css/,
        handler: 'StaleWhileRevalidate', // 缓存优先同时后台更新
      },
      {
        urlPattern: /.*\.js/,
        handler: 'StaleWhileRevalidate', // 缓存优先同时后台更新
      }
    ]
  }