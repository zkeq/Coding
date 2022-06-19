// offline config passed to workbox-build.
module.exports = {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/jsd\.onmicrosoft\.cn\/.*/,
        handler: "StaleWhileRevalidate"
      },
      {
        urlPattern: /^https:\/\/static\.onmicrosoft\.cn\/.*/,
        handler: "StaleWhileRevalidate"
      },
      {
        urlPattern: /^https:\/\/npm\.elemecdn\.com\/.*/,
        handler: "cacheFirst"
      },
      {
        urlPattern: /^https:\/\/cdn\.plyr\.io\/.*/,
        handler: "cacheFirst"
      },      
      {
        urlPattern: /^https:\/\/img\.onmicrosoft\.cn\/.*/,
        handler: "cacheFirst"
      },
      {
        urlPattern: /.*\.html/,
        handler: 'NetworkOnly'
      },
      {
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'cacheFirst', // 缓存优先
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