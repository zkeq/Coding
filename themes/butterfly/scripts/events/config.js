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
    pjax: 'https://s-gz-2220-icodeq.oss.dogecdn.com/pjax.min.js',

    // comments
    gitalk: 'https://s-gz-2220-icodeq.oss.dogecdn.com/gitalk.min.js',
    gitalk_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/gitalk.min.css',
    blueimp_md5: 'https://s-gz-2220-icodeq.oss.dogecdn.com/md5.min.js',
    valine: 'https://s-gz-2220-icodeq.oss.dogecdn.com/Valine.min.js',
    disqusjs: 'https://s-gz-2220-icodeq.oss.dogecdn.com/disqus.js',
    disqusjs_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/disqusjs.css',
    utterances: 'https://s-gz-2220-icodeq.oss.dogecdn.com/utteranc_client.js',
    twikoo: 'https://s-gz-2220-icodeq.oss.dogecdn.com/twikoo.all.min.js',
    waline: 'https://s-gz-2220-icodeq.oss.dogecdn.com/Waline.min.js',
    giscus: 'https://s-gz-2220-icodeq.oss.dogecdn.com/giscus_client.js',

    // share
    addtoany: 'https://s-gz-2220-icodeq.oss.dogecdn.com/page.js',
    sharejs: 'https://s-gz-2220-icodeq.oss.dogecdn.com/social-share.min.js',
    sharejs_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/share.min.css',

    // search
    local_search: '/js/search/local-search.js',
    algolia_js: 'https://ccknbc.vercel.app/js/search/algolia.js',
    algolia_search_v4: 'https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js',
    instantsearch_v4: 'https://s-gz-2220-icodeq.oss.dogecdn.com/instantsearch.production.min.js',

    // math
    mathjax: 'https://s-gz-2220-icodeq.oss.dogecdn.com/tex-mml-chtml.js',
    katex: 'https://s-gz-2220-icodeq.oss.dogecdn.com/katex.min.css',
    katex_copytex: 'https://s-gz-2220-icodeq.oss.dogecdn.com/copy-tex.min.js',
    katex_copytex_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/copy-tex.css',
    mermaid: 'https://s-gz-2220-icodeq.oss.dogecdn.com/mermaid.min.js',

    // count
    busuanzi: 'https://s-gz-2220-icodeq.oss.dogecdn.com/busuanzi.pure.mini.js',

    // background effect
    canvas_ribbon: 'https://s-gz-2220-icodeq.oss.dogecdn.com/canvas-ribbon.min.js',
    canvas_fluttering_ribbon: 'https://s-gz-2220-icodeq.oss.dogecdn.com/canvas-fluttering-ribbon.min.js',
    canvas_nest: 'https://s-gz-2220-icodeq.oss.dogecdn.com/canvas-nest.min.js',

    lazyload: 'https://s-gz-2220-icodeq.oss.dogecdn.com/lazyload.iife.min.js',
    instantpage: 'https://s-gz-2220-icodeq.oss.dogecdn.com/instantpage.min.js',
    typed: 'https://s-gz-2220-icodeq.oss.dogecdn.com/typed.min.js',
    pangu: 'https://s-gz-2220-icodeq.oss.dogecdn.com/pangu.min.js',

    // photo
    fancybox_css_v4: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fancybox.css',
    fancybox_v4: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fancybox.umd.js',
    medium_zoom: 'https://s-gz-2220-icodeq.oss.dogecdn.com/medium-zoom.min.js',

    // snackbar
    snackbar_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/snackbar.min.css',
    snackbar: 'https://s-gz-2220-icodeq.oss.dogecdn.com/snackbar.min.js',

    // effect
    activate_power_mode: 'https://s-gz-2220-icodeq.oss.dogecdn.com/activate-power-mode.min.js',
    fireworks: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fireworks.min.js',
    click_heart: 'https://s-gz-2220-icodeq.oss.dogecdn.com/click-heart.min.js',
    ClickShowText: 'https://s-gz-2220-icodeq.oss.dogecdn.com/click-show-text.min.js',

    // fontawesome
    fontawesomeV6: 'https://s-gz-2220-icodeq.oss.dogecdn.com/all.min.css',

    // Conversion between Traditional and Simplified Chinese
    translate: '/js/tw_cn.js',

    // flickr-justified-gallery
    flickr_justified_gallery_js: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fjGallery.min.js',
    flickr_justified_gallery_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/fjGallery.min.css',

    // aplayer (不晓得这里用的是哪个版本...换了好几个都会报错)
    aplayer_css: 'https://s-gz-2220-icodeq.oss.dogecdn.com/APlayer.min.css',
    aplayer_js: 'https://s-gz-2220-icodeq.oss.dogecdn.com/APlayer.min.js',
    meting_js: 'https://s-gz-2220-icodeq.oss.dogecdn.com/Meting.min.js',

    // Prism.js
    prismjs_js: 'https://s-gz-2220-icodeq.oss.dogecdn.com/prism.min.js',
    prismjs_lineNumber_js: 'https://s-gz-2220-icodeq.oss.dogecdn.com/prism-line-numbers.min.js',
    prismjs_autoloader: 'https://s-gz-2220-icodeq.oss.dogecdn.com/prism-autoloader.min.js'
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
