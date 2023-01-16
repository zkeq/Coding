---
title: 笔记 | 一些常用的 webpack 配置
tags: [笔记]
description: 本节课主要学习了<br>一些常用的 webpack 配置
date: 2022-08-02 18:06:15
categories: [A置顶文章, 前端]
cover: https://img.onmicrosoft.cn/2022-08-02/1.png
---

`webpack` 官网

- https://webpack.js.org/guides/

`示例代码` 官网

- https://github.com/zkeq/jirengu_learn_09

#### 初始化 `npm` 仓库

```bash
npm init -y
```

#### 安装 `webpack`

```bash
yarn add -D webpack
yarn add -D webpack-cli
yarn add -D webpack-dev-server
```

初始化 `webpack.config.js`

```JS
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

##### 安装必备 `loader`

```bash
yarn add -D html-webpack-plugin # HTML

yarn add -D css-loader # CSS
yarn add -D mini-css-extract-plugin
- yarn add -D style-loader
- yarn add -D css-minimizer-webpack-plugin
	- optimize-css-assets-webpack-plugin
	
yarn add -D file-loader # FILE

yarn add -D sass-loader sass webpack # SASS

yarn add -D stylus stylus-loader # STYLUS

yarn add -D less less-loader # LESS
```

##### `webpack.config.base.js`

```js
const path = require('path');
// 以下可选
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 以上可选

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "public"), // 要输出的目录
    filename: "[name].[contenthash].js", // 文件名
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
   // 以下可选
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'Webpack Demo',
      template: 'src/assets/index.html'
    })],
    // 以上可选
  module: {
      rules: [
      { // SASS Loader
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      { // LESS loader
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      { // STYLUS loader
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      { // FILE loader
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
};

```

#### 开发环境

```js
const base = require('./webpack.config.base.js');

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  mode: "development", // "production" | "development" | "none"
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};
```

#### 生产环境

- （官网方法）

```bash
yarn add -D mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const base = require('./webpack.config.base.js');

module.exports = {
  ...base,
  mode: "production", // "production" | "development" | "none"
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin(
      {
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
        ignoreOrder: false,
      }
    )
],
};
```
- css 压缩的 另一种方法

```bash
yarn add optimize-css-assets-webpack-plugin --dev
```

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const base = require('./webpack.config.base.js');

module.exports = {
  ...base,
  mode: "production", // "production" | "development" | "none"
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader, // 抽离 CSS
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: "../",
          },
        }, 
        "css-loader"], // 将 CSS 变成字符串
      },
    ],
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin( // 抽离 CSS
    {
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false,
    }),
    new OptimizeCSSAssetsPlugin({}) // 压缩 CSS
],
};
```

#### `package.json`

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --config webpack.config.prod.js",
    "start": "webpack serve --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^6.7.1",
    "css-minimizer-webpack-plugin": "^4.0.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "less": "^4.1.3",
    "less-loader": "^11.0.0",
    "mini-css-extract-plugin": "^2.6.1",
    "optimize-css-assets-webpack-plugin": "^6.0.1",
    "sass": "^1.54.0",
    "sass-loader": "^13.0.2",
    "style-loader": "^3.3.1",
    "stylus": "^0.58.1",
    "stylus-loader": "^7.0.0",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.3"
  }
}
```

