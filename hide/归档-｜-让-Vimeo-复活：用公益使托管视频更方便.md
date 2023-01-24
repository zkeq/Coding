---
title: 归档 ｜ 让 Vimeo 复活：用公益使托管视频更方便
tags:
  - 归档
categories:
  - 归档
description: 我希望找到的一种方法，来优雅的嵌入视频到网站上。
cover: https://tucdn.wpon.cn/2023/01/24/e11885cb2fd4c.png
date: 2023-01-24 22:21:10
---

###  前言&起因

在上篇文章中，我探讨了许多国内视频网站的接口，但是慢慢的，我在问自己，我做的事情真正是什么？

我只是想要白嫖大厂的那些流量吗？ 很显然，不是这样的，我希望找到的一种方法，来优雅的嵌入视频到网站上。

当然，国内的多吉云 提供视频托管服务，我自己也在用，但是总感觉这种按流量计费的方式不总是适合所有人。

于是...我将目光投向了国外的服务。

###  选择

- `Youtube` 肯定是选不了了，在国内被封的死死的，肯定救不活。反代的话因为近期 `Youtube` 改版，已知策略均失效，并且违反相关流量提供商 TOS .

就在我四处乱翻时，`plyr` 官网的演示引起了我的注意

![](https://tucdn.wpon.cn/2023/01/24/a58d696ba67ce.png)

这个演示的视频是来自 `Vimeo` 的，Vimeo 不正是我在找的视频托管平台么...

可惜在国内无法访问，难得的是播放地址是使用的 ` akamaized.net` ，此地址在大陆可正常访问，所以只需要将控件加载成功即可实现播放功能。

<div class="plyr__video-embed" id="player">
  <iframe
    src="https://vimeo.onmicrosoft.cn/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div>

<script>
(
function () {
const player = new Plyr('#player');
}
)()
</script>

### 如何使用？

首先，若需要以上的效果，您需要引入播放器：

```html
<!-- 也可在最后引入 -->
<script src="https://plyr.onmicrosoft.cn/3.6.12/plyr.js"></script>
```

然后，可选用以下方式使用：

```html
<div class="plyr__video-embed" id="player">
  <iframe
    src="https://vimeo.onmicrosoft.cn/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div>
<!-- 和官网代码一样，只不过替换域名为 onmicrosoft.cn -->
```

![](https://tucdn.wpon.cn/2023/01/24/c1bc335eb5cb0.png)

最后，初始化即可：

```html
<!-- 若上文引过次数就不用引了 -->
<script src="https://plyr.onmicrosoft.cn/3.6.12/plyr.js"></script>
<script>
  const player = new Plyr('#player');
</script>

<!-- 若 使用了 pjax 则使用立即执行代码包裹： -->
<div id="player" data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div>

<script>
(
  function () {
    const player = new Plyr('#player');
  }
)()
</script>
```