/**
 * Butterfly
 * 1. Merge CDN
 * 2. Capitalize the first letter of comment name
 */

'use strict'

hexo.extend.filter.register('before_generate', () => {
  const themeConfig = hexo.theme.config

  /**
   * Merge CDN
   */

   const defaultCDN = {
    main_css: '/css/index.css',
    main: '/js/main.js',
    utils: '/js/utils.js',

    // pjax
    pjax: 'https://cdn.timeletters.cn/zkeq/pjax.min.js',

    // comments
    gitalk: 'https://cdn.timeletters.cn/zkeq/gitalk.min.js',
    gitalk_css: 'https://cdn.timeletters.cn/zkeq/gitalk.min.css',
    blueimp_md5: 'https://cdn.timeletters.cn/zkeq/md5.min.js',
    valine: 'https://cdn.timeletters.cn/zkeq/Valine.min.js',
    disqusjs: 'https://cdn.timeletters.cn/zkeq/disqus.js',
    disqusjs_css: 'https://cdn.timeletters.cn/zkeq/disqusjs.css',
    utterances: 'https://cdn.timeletters.cn/zkeq/utteranc_client.js',
    twikoo: 'https://cdn.timeletters.cn/zkeq/twikoo.all.min.js',
    waline: 'https://cdn.timeletters.cn/zkeq/Waline.min.js',
    giscus: 'https://giscus.app/client.js',

    // share
    addtoany: 'https://cdn.timeletters.cn/zkeq/page.js',
    sharejs: 'https://cdn.timeletters.cn/zkeq/social-share.min.js',
    sharejs_css: 'https://cdn.timeletters.cn/zkeq/share.min.css',

    // search
    local_search: '/js/search/local-search.js',
    algolia_js: '/js/search/algolia.js',
    algolia_search_v4: 'https://cdn.timeletters.cn/zkeq/algoliasearch-lite.umd.js',
    instantsearch_v4: 'https://cdn.timeletters.cn/zkeq/instantsearch.production.min.js',

    // math
    mathjax: 'https://cdn.timeletters.cn/zkeq/tex-mml-chtml.js',
    katex: 'https://cdn.timeletters.cn/zkeq/katex.min.css',
    katex_copytex: 'https://cdn.timeletters.cn/zkeq/copy-tex.min.js',
    katex_copytex_css: 'https://cdn.timeletters.cn/zkeq/copy-tex.css',
    mermaid: 'https://cdn.timeletters.cn/zkeq/mermaid.min.js',

    // count
    busuanzi: 'https://busuanzi.icodeq.com/busuanzi.pure.mini.js',

    // background effect
    canvas_ribbon: 'https://cdn.timeletters.cn/zkeq/canvas-ribbon.min.js',
    canvas_fluttering_ribbon: 'https://cdn.timeletters.cn/zkeq/canvas-fluttering-ribbon.min.js',
    canvas_nest: 'https://cdn.timeletters.cn/zkeq/canvas-nest.min.js',

    lazyload: 'https://cdn.timeletters.cn/zkeq/lazyload.iife.min.js',
    instantpage: 'https://cdn.timeletters.cn/zkeq/instantpage.min.js',
    typed: 'https://cdn.timeletters.cn/zkeq/typed.min.js',
    pangu: 'https://cdn.timeletters.cn/zkeq/pangu.min.js',

    // photo
    fancybox_css_v4: 'https://cdn.timeletters.cn/zkeq/fancybox.css',
    fancybox_v4: 'https://cdn.timeletters.cn/zkeq/fancybox.umd.js',
    medium_zoom: 'https://cdn.timeletters.cn/zkeq/medium-zoom.min.js',

    // snackbar
    snackbar_css: 'https://cdn.timeletters.cn/zkeq/snackbar.min.css',
    snackbar: 'https://cdn.timeletters.cn/zkeq/snackbar.min.js',

    // effect
    activate_power_mode: 'https://cdn.timeletters.cn/zkeq/activate-power-mode.min.js',
    fireworks: 'https://cdn.timeletters.cn/zkeq/fireworks.min.js',
    click_heart: 'https://cdn.timeletters.cn/zkeq/click-heart.min.js',
    ClickShowText: 'https://cdn.timeletters.cn/zkeq/click-show-text.min.js',

    // fontawesome
    fontawesomeV6: 'https://npm.elemecdn.com/font6pro@6.0.1/css/all.min.css',

    // Conversion between Traditional and Simplified Chinese
    translate: '/js/tw_cn.js',

    // flickr-justified-gallery
    flickr_justified_gallery_js: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fjGallery.min.js',
    flickr_justified_gallery_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fjGallery.min.css',

    // aplayer (不晓得这里用的是哪个版本...换了好几个都会报错)
    aplayer_css: 'https://cdn.timeletters.cn/zkeq/APlayer.min.css',
    aplayer_js: 'https://cdn.timeletters.cn/zkeq/APlayer.min.js',
    meting_js: 'https://cdn.timeletters.cn/zkeq/Meting.min.js',

    // Prism.js
    prismjs_js: 'https://cdn.timeletters.cn/zkeq/prism.min.js',
    prismjs_lineNumber_js: 'https://cdn.timeletters.cn/zkeq/prism-line-numbers.min.js',
    prismjs_autoloader: 'https://cdn.timeletters.cn/zkeq/prism-autoloader.min.js'
  }

  // delete null value
  const deleteNullValue = obj => {
    for (const i in obj) {
      obj[i] === null && delete obj[i]
    }
    return obj
  }

  themeConfig.CDN = Object.assign(defaultCDN, deleteNullValue(themeConfig.CDN))

  /**
   * Capitalize the first letter of comment name
   */

  let { use } = themeConfig.comments

  if (!use) return

  if (typeof use === 'string') {
    use = use.split(',')
  }

  const newArray = use.map(item => item.toLowerCase().replace(/\b[a-z]/g, s => s.toUpperCase()))

  themeConfig.comments.use = newArray
})
