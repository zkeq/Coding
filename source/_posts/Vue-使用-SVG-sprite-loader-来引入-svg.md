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
// 注意你的 svg 相关依赖的版本需要跟我保持一致，否则会报错

//     "svg-sprite-loader": "^4.1.6",
//     "svg-sprite-loader-mod": "^4.1.6-mod1",
//     "svgo-loader": "^2.2.1",

好像并不会报错hhh，我用的最新的版本

        "svg-sprite-loader": "^6.0.11",

笑死我了，能用就行
```

#### 在 `shims-vue.d.ts` 中添加 

这一步是为了解决 `ts` 报错

```ts
declare module '*.svg' {
  const content: string;
  export default content;
}

```

#### 接着在 `TS` 里面引入

```vue
<script lang="ts">
// 笑死我了，这是菜鸡写法
    import x from '@/assets/icons/Labels.svg'
    import y from '@/assets/icons/Money.svg'
    console.log(x)
    console.log(y)
</script>
```

这一步的作用就是在 `html` 的 `head` 部分嵌入一个 `symbol` ，接着我们在 `template` 里面用 `<use />` 标签就可以使用啦

```vue
<template>
    <div class="nav">
      <router-link to="/money">
        <svg>
            <use xlink:href="#Money" />
        </svg>
      </router-link>
    </div>
</template>
```

想必看出来了，这样引入真的 **很麻烦**，如果我们有几十个 `svg` ，难道要一个一个的引入？？

而且每次都要写 `<svg><use /></svg>` 好麻烦，我们可不可以把它封装成一个组件呢？

#### 引入整个 `svg` 目录？

```ts
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  // 这玩意是搜的全网搜到的？
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  // 如果不加 try，在单元测试的时候可能会遇到问题

// 牛逼，好用
```  

#### 将 `icon` 封装成组件

`@/components/Icon.vue`

```vue
<template>
    <svg class="icon">
        <use :xlink:href="'#' + name" />
    </svg>
</template>

<script lang="ts">
    let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    // 这玩意是搜的全网搜到的？
    try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
    // 如果不加 try，在单元测试的时候可能会遇到问题

    export default {
        name: 'Icon',
        props: ['name']
        // 以下代码是自动生成的
        // props: {
        //     name: {
        //         type: String,
        //         required: true
        //     }
        // }
        
    }
</script>

<style lang="scss" scoped>
// 这个样式代码是阿里矢量字体库里面给的css
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
```

`@/main.ts` 全局注册

```ts
import Icon from "@/components/Icon.vue";
Vue.component("Icon", Icon)
```

然后直接在 `view` 里面使用 `<Icon />`即可

```vue
<template>
    <div class="nav">
      <router-link to="/money">
        <Icon name="Money"/>
      </router-link>
      |
      <router-link to="/lables">
        <Icon name="Labels"/>
      </router-link>
      |
      <router-link to="/statistics">
        <Icon name="Statistics"/>
      </router-link>
    </div>
</template>
```