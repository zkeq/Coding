---
title: 归档 | 自建 不蒜子 API
tags: [归档]
description: 本篇文章讲了自建的不蒜子计数平台<br>以及搭建方法，项目由 Replit 驱动。
date: 2022-04-12 19:13:11
categories: [归档] 
cover: https://ik.imagekit.io/zkeq/2022-04-12/1.png
sticky: 3
---

![1](https://ik.imagekit.io/zkeq/2022-04-12/2.png)

## 直接用版本

https://busuanzi.icodeq.com/


#### 前言：

1. 不蒜子是一款很好用的前端计数工具，但是因为流量日渐变多，经常会出现 `502` 的情况
2. 所以我尝试对其后端进行了仿造，达到了相同的效果
3. 虽然速度有些慢（大概2秒内），但是保证不会出现一直无法显示计数的情况
4. 防止本项目出现和不蒜子官网相同的情况，本项目采用授权制，并且最多容纳 `1000` 个站点
5. 以此来保证服务的可用性（本项目托管于 replit.com ），开源地址： [zkeq/Busuanzi_backend_self](https://github.com/zkeq/Busuanzi_backend_self)

#### 使用：

1. 首先请在评论区申请域名，我会将其加入到白名单中
2. 将官网的 `//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js` 文件改为
3. `https://busuanzi.icodeq.com/busuanzi.pure.mini.js` （本项目暂不支持 `http` 协议的网站）
4. 即可使用，首次加载网站会较慢（后台同步卜算子的 `Site_uv` 和 `Site_pv` ）
5. 之后会保持在 `2` 秒左右加载出数据


## 自建API后端

https://github.com/zkeq/Busuanzi_backend_self

### 安装

##### 个人版

- 点击一键部署：[![Run on Replit](https://replit.com/badge/github/zkeq/Busuanzi_backend_self)](https://replit.com/github/zkeq/Busuanzi_backend_self)

  本项目仅占用 50MB 内存，个人版完全够用

- 成功导入后点击 🏃 `RUN` 按钮，即可完成安装！

##### 教育版 or 专业版

> 【资源额度更高，但好像无法一键导入】

1. 创建新项目

2. 复制本项目的文件到上一步创建的项目中

3. 点击 🏃 `RUN` 按钮，即可完成安装！

出现下图表示安装成功！~（首次会同步 busuanzi 的数据，多次尝试属于正常状态）~ :

![Snipaste_2022-04-21_17-06-47](https://user-images.githubusercontent.com/62864752/164420880-919d6e6b-68b5-4d1a-b6d5-61404c8b704a.png)


### 使用

1. 在 `white_list.json` 中添加你的域名白名单

2. 将 `不蒜子` 官网提供的 `js` 代码里面的网址，改成你的 **即可**



```javascript
//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js

var bszCaller,bszTag;!function(){var c,d,e,a=!1,b=[];ready=function(c){return a||"interactive"===document.readyState||"complete"===document.readyState?c.call(document):b.push(function(){return c.call(this)}),this},d=function(){for(var a=0,c=b.length;c>a;a++)b[a].apply(document);b=[]},e=function(){a||(a=!0,d.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",e,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",e),window==window.top&&(clearInterval(c),c=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",e,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){/loaded|complete/.test(document.readyState)&&e()}),window==window.top&&(c=setInterval(function(){try{a||document.documentElement.doScroll("left")}catch(b){return}e()},5)))}(),bszCaller={fetch:function(a,b){var c="BusuanziCallback_"+Math.floor(1099511627776*Math.random());window[c]=this.evalCall(b),a=a.replace("=BusuanziCallback","="+c),scriptTag=document.createElement("SCRIPT"),scriptTag.type="text/javascript",scriptTag.defer=!0,scriptTag.src=a,scriptTag.referrerPolicy="no-referrer-when-downgrade",document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)},evalCall:function(a){return function(b){ready(function(){try{a(b),scriptTag.parentElement.removeChild(scriptTag)}catch(c){bszTag.hides()}})}}},bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",function(a){bszTag.texts(a),bszTag.shows()}),bszTag={bszs:["site_pv","page_pv","site_uv"],texts:function(a){this.bszs.map(function(b){var c=document.getElementById("busuanzi_value_"+b);c&&(c.innerHTML=a[b])})},hides:function(){this.bszs.map(function(a){var b=document.getElementById("busuanzi_container_"+a);b&&(b.style.display="none")})},shows:function(){this.bszs.map(function(a){var b=document.getElementById("busuanzi_container_"+a);b&&(b.style.display="inline")})}};
```

```
把里面的这个链接
//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback
改成
你的域名，例如：
https://counter.busuanzi.icodeq.com/?jsonpCallback=BusuanziCallback
```

3. 把你网站引入的 `busuanzi.pure.mini.js` 地址替换为上一步改好的即可 ✨
