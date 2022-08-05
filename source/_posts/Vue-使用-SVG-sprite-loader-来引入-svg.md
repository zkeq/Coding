---
title: Vue | 使用 SVG sprite loader 来引入 svg
tags: [Vue]
description: 本节课主要学习了<br>使用 SVG sprite loader 来引入 svg
date: 2022-08-05 02:22:14
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-08-05/6.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
sticky: 2
---

#### 首先安装

```bash
yarn add svg-sprite-loader -D
```

#### 把 `webpack.config.js` 翻译成 `Vue.config.js`

这个库给的示例代码是 `webpack.config.js` 但是我们现在在用的是 `Vue`

官方的代码是这样的

```js
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

- https://cli.vuejs.org/zh/guide/webpack.html
- https://github.com/mozilla-neutrino/webpack-chain

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
      // 下文会解决一个 svg 填充问题，也就是下面被注释掉的代码
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

#### 遇到的一个小 `bug`: `fill` 颜色

尝试实现切换标签页的时候自动更改填充颜色来达到突出显示的效果

但是并不是所有的 svg 都会自动变色, 只有一些标签会起作用... 于是我直接干脆调成了这样

![2](https://img.onmicrosoft.cn/2022-08-05/4.png)

和这样

![3](https://img.onmicrosoft.cn/2022-08-05/5.png)

笑死我了，直接逃避这个问题

经过排查发现是 `svg` 代码里面的 `fill` 属性来控制了颜色，从而 `css` 不能从外部更改颜色

如图：

![1](https://img.onmicrosoft.cn/2022-08-05/2.png)

手动删掉此属性即可正常用css指定颜色，但是如果有很多svg.这样的话未必太过麻烦

我们可以使用一个叫做 `svgo-loader` 的插件来解决此问题

不知道是什么原因，高版本的这个插件会导致加载不出 svg 的 bug，我使用的是以下版本，是正常使用的

```json
{
    "devDependencies": {
        "svg-sprite-loader": "^6.0.11", 
        //已知 svg-sprite-loader 的 4.1.6 版本会有 bug
        // 故推荐使用高版本的，最新版已经修复了 bug，推荐使用 ^6.0.11
        "svgo-loader": "^2.2.1",
    }
}
```

我的完整的版本号（可以正常使用的，就第一个 `loader` 版本号比以上高一些）
```json
{
  "name": "morney-3",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "3.15.2",
    "register-service-worker": "1.7.2",
    "vue": "2.6.14",
    "vue-class-component": "7.2.6",
    "vue-property-decorator": "9.1.2",
    "vue-router": "3.5.2",
    "vuex": "3.6.2"
  },
  "devDependencies": {
    "@types/jest": "24.0.25",
    "@typescript-eslint/eslint-plugin": "4.28.4",
    "@typescript-eslint/parser": "4.28.4",
    "@vue/cli-plugin-babel": "4.5.13",
    "@vue/cli-plugin-eslint": "4.5.13",
    "@vue/cli-plugin-pwa": "4.5.13",
    "@vue/cli-plugin-router": "4.5.13",
    "@vue/cli-plugin-typescript": "4.5.13",
    "@vue/cli-plugin-unit-jest": "4.5.13",
    "@vue/cli-plugin-vuex": "4.5.13",
    "@vue/cli-service": "4.5.13",
    "@vue/eslint-config-typescript": "7.0.0",
    "@vue/test-utils": "1.2.2",
    "eslint": "6.8.0",
    "eslint-plugin-vue": "6.2.2",
    "sass": "1.36.0",
    "sass-loader": "8.0.2",
    "svg-sprite-loader": "^6.0.11",
    "svgo-loader": "^2.2.1",
    "typescript": "4.1.6",
    "vue-template-compiler": "2.6.14"
  }
}
```

安装完之后，我们需要配置 `vue.config.js` 文件

```js
+      .use('svgo-loader').loader('svgo-loader')
+      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
+      .end()
```

完整的 `vue.config.js`

```js
module.exports = {
  lintOnSave: false
}
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
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录

  }
}
```

收工，效果如下

![1](https://img.onmicrosoft.cn/2022-08-05/1.png)

PS: `vue.config.js` 报 `eslint` 错误怎么办？

![1](https://static.xiedaimala.com/xdml/image/3ac7c224-c23d-491f-84b5-4fabfbeab9b8/2020-8-6-17-40-56.png)

```js
/* eslint-disable */ 
```
把这句话添加到 `vue.config.js` 的第一行即可