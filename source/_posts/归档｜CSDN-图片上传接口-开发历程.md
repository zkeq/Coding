---
title: 归档｜CSDN 图片上传接口 & 开发历程
tags: [归档]
categories: [A置顶文章, 归档]
description: 本文主要记录了 CSDN 图片上传接口 的 开发历程，以及如何绕过 阿里云 OSS 的 origin 白名单策略 的一种思路
cover: https://img-blog.csdnimg.cn/05bb03d0b65742e68d0f854f9547698a.png
date: 2023-01-27 21:05:59
---

### TL;DR

- 👀 https://pic.onmicrosoft.cn/

### 起因

因为我写博客，经常有上传图片的需求，当然，我是买了杜老师的图床的（

但是因为那个要登陆才能用，而且我自己也有 OSS 于是我自己也搭过一个图床 来供平时使用 

![](https://img-blog.csdnimg.cn/6b4af1b740af407b95143aaa170d177d.png)

但是因为服务器在国外（美国），再加上阿里云的节点在国内，所以来来回回 造成了我的使用体验极差

### 于是..

有没有不用服务器中转的图床呢？也就是直接传OSS的？当然，传我自己的桶肯定我不愿意，于是 好巧不巧

也趁着过年没什么事情，我把目光再次投向了 CSDN 的图床（之前搞过一次，但是因为某些原因，搁置了）但是这次我决定在此攻克一下！

### 难点

因为之前有 `使用 element upload 控件上传文件至 OSS` 的开发经验，所以“很熟练”的写好了一个后端，然后就尝试对接一下，此时，难点出现了

![](https://img-blog.csdnimg.cn/de51122770b54ed4aaf4e25a612dcbff.png)

啊这，难绷 他们居然有 `Access-Control-Allow-Origin` 白名单...我直接请求的话 连 `options` 请求 都过不了

伴随着的 还有这个 报错提示

```
CORSResponse: This CORS request is not allowed. 
This is usually because the evalution of Origin, 
request method / Access-Control-Request-Method or 
Access-Control-Requet-Headers are not whitelisted by the resource's CORS spec.
```

果然，是阿里云设置了白名单 Origin 么..

于是....我开始低落了 

### 解决

于是，我便开始想，哎 是不是只有服务器中转这一条路了啊，但是如果自己写脚本的话 必须是完整的图片全部接收完毕 那边才能开始发..

这样一来，速度又变慢了，于是...我开始将这段请求开始抽象

我们发的请求不就是一个请求头和一个请求体，那么有没有什么方法可以在我们请求中修改东西并转发呢？？

于是...我想到了  `CDN` ，嗯？！嗯，CDN 其实就是一个高性能转发服务器，并且也可以在转发时修改内容。

于是...经过了一圈尝试，终于 `字节火山引擎` 支持修改回源 `Origin`。。于是..

CDN 平时都是转发源站的请求，那么可不可以尝试一下把他变成转发用户请求的工具？

![](https://img-blog.csdnimg.cn/c68b7d2925644f339b843f5e88a34d90.png)

我就套了一层自己的域名，然后我直接往我的域名传东西，到字节 修改请求头 同时实时转发到 阿里服务器

绕过 `Access-Control-Allow-Origin` 白名单，终于成功了(CDN不愧是是高性能的转发服务器hhhh)

![](https://img-blog.csdnimg.cn/8a75ac2e3ef343098d95d65c2a9fad70.png)

太激动了，高兴了一个下午没碰代码

到晚上了 随手搓了个前端，完善了点功能（粘贴上传、复制链接、什么的）

于是 就上线啦！希望可以活的久一点，接口是 CSDN 的写文章接口。无 `Referer` 等限制

![](https://img-blog.csdnimg.cn/05bb03d0b65742e68d0f854f9547698a.png)

我太高兴了，兴奋了一下午 好棒（本项目与其他图床不一样，其他图床都是服务器中转，~~有 Python 什么玩意不能传啊~~，本项目为直接传到 CSDN 的 `阿里云 OSS bucket` 里面！

{% gallery %}
![](https://img-blog.csdnimg.cn/791d2e9695d74a09a4add0f13c490cbf.jpg)
![](https://img-blog.csdnimg.cn/6df96b6ae32748999e10e4573909fc81.png)
![](https://img-blog.csdnimg.cn/68c69d16d8e841eebb573b1000824c1e.png)
{% endgallery %}

- 记录一个粘贴图片上传代码
- https://gist.github.com/zkeq/f87ed4d10d38babfa45f0b4cb14a69eb

### 项目地址

- https://pic.onmicrosoft.cn/
- 直接把 html 复制走就可以自部署域名，后端太简单了就不开源了，还有就是我感觉公共后端应该也还够用。