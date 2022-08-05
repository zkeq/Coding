---
title: Vue | 使用 SVG sprite loader 来引入 svg
tags: [Vue]
description: 本节课主要学习了<br>使用 SVG sprite loader 来引入 svg
date: 2022-08-05 02:22:14
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

#### 首先安装

```bash
yarn add svg-sprite-loader -D
```

#### 把 `webpack.config.js` 翻译成 `Vue.config.js`

这个库给的示例代码是 `webpack.config.js` 但是我们现在在用的是 `Vue`

官方的代码是这样的

```js
// webpack 1
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader',
  query: { ... }
}

// webpack 1 multiple loaders
{
  test: /\.svg$/,
  loaders: [
    `svg-sprite-loader?${JSON.stringify({ ... })}`,
    'svg-transform-loader',
    'svgo-loader'
  ]
}

// webpack >= 2
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader',
  options: { ... }
}

// webpack >= 2 multiple loaders
{
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: { ... } },
    'svg-transform-loader',
    'svgo-loader'
  ]
}
```

翻译成 `Vue.config.js`，用到的 `chainWebpack`

```js
const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录


    // config.module
    //   .rule('svg-sprite')
    //   .test(/\.(svg)(\?.*)?$/)
    //   .include.add(dir).end()
    //   .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
    //   .use('svgo-loader').loader('svgo-loader')
    //   .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
    //   .end()
    // config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    // config.module.rule('svg').exclude.add(dir)

  }
}
```

其他备注

```json
注意你的 svg 相关依赖的版本需要跟我保持一致，否则会报错

    "svg-sprite-loader": "^4.1.6",
    "svg-sprite-loader-mod": "^4.1.6-mod1",
    "svgo-loader": "^2.2.1",
```