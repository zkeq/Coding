---
title: 归档 | 前后端都基于 vercel 的每日早报项目
tags: [归档]
description: 每日早报项目：https://news.icodeq.com
date: 2022-07-09 17:35:20
categories: 归档
cover: https://img.onmicrosoft.cn/2022-07-09/1.png
sticky: 5
---

### TD;DR

- 官网地址：https://news.icodeq.com
- 源码地址：https://github.com/zkeq/news

### 前言
经常在各种地方看到 `每日60s读懂世界`

感觉很不错，就想着能不能自己做一个

于是就开始了前期的搜索阶段

### 准备节点

首先看到的是这个项目：

- https://github.com/smloli/todayNewsSpider

里面包含了一个 `网易新闻` 的 `API`

- https://www.163.com/dy/media/T1603594732083.html

有总比没有好，好久不写 `python` 了，先撸一个 API 试下，毕竟是轻量级爬虫，理所当然想到了使用`vercel`来做后端

正好练习了一下 `BeautifulSoup` 的用法，只能说是真香

```python
# 获取早报列表
soup = BeautifulSoup(data.text, 'lxml')
days_list = soup.find_all('a', attrs={"class": "title"})

# 获取早报内容
soup = BeautifulSoup(new_data.text, 'lxml')
day_news = soup.find('div', attrs={"class": "post_body"})
```

真就只用了 `4` 行业务逻辑就处理完了，于是开始撸前端

### 初版

具体代码也很少，初步实现了以下功能

1. 点击翻页的时候实现翻页功能（最多可回看100天）
2. 添加加载进度条（NProgress）
3. 在触发报错和成功请求时显示右上角弹窗提示（Notiflix）
4. 每次切换时随机图片也会切换
   - 随机图片为本人另一个 [bing 壁纸api](https://github.com/zkeq/Bing-Wallpaper-Action)

实现完成这个效果

![2](https://img.onmicrosoft.cn/2022-07-09/2.png)

### 再次准备阶段

完美吗？不完美，因为我的源信息好少啊，他们的源信息好多，好不爽

而且按钮也不好看，别人一看就是前端新人做出来的（难蚌）

这时候的 `API` 还是存于我的 [BPI(API) 仓库](https://github.com/zkeq/icodeq-bpi/blob/main/api/news_163/crawler.py)中

于是我开始了第二轮搜索，主要是想要获取到 `60s读懂世界` 的源码什么的

因为我看见网上有一堆人在用，所以肯定是有源码的...

好嘛，在这里

- https://wws.lanzouj.com/iO9KD0279acb

和 这里

- https://www.789dl.cn/109.html
- （大佬友链已加，原本想搞头图来着，后面用Bing壁纸替代了，待会说）

于是顺腾摸瓜，也找到了他们的微信公众号.....

- `公众号：每天60秒读懂世界，是官方唯一公众号！`
- 5555，原来这么容易的吗？麻了，找了半上午 =_=

### 优化阶段

那么信息收集完了，就开始整理啦，这个比 `网易新闻` 那个还要容易一些，直接处理了一些 `冗余标签` 什么的

格式就跟我的对上了，但是我有发现一个痛点...就是我的bing壁纸API太慢了

切换的时候没有丝滑的感觉，于是我索性直接把我的 `Bing API JSON` 文件加载到用户的 `localstorage` 里了...

- https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json

然后根据日期来进行更换图片，也算是 `每日早报` 和 `Bing` 联动了（哇酷哇酷

然后换了一个按钮样式，适配了移动端，最后的效果还是很满意的

最后折腾出了如下内容

- 每次进入网站时，不带缓存 请求一次 网易新闻源 和 知乎源，并将请求结果通知用户
- 若请求成功则将得到的日期信息存于用户浏览器
- 这样用户在会看时，带上这个日期信息，可以实现得到的数据为最新的效果
  - 因为 API 的 `cache-control` 为 `max-age=86400, immutable, stale-while-revalidate`
  - 所以需要进行多余的这一步来确保看到的新闻数据为最新的
- 然后用户在点击头图时查看该图片的最大尺寸（
- 支持了键盘方向键来翻页（亲测很爽
- 解决以上问题的时候学到了很多东西，具体看我的 `index.js` 吧，反正前端是透明的（
- 将函数直接放在 `API` 目录，不依托于 `bpi.icodeq.com` 域名
- 也就是说甚至可以加一个 `vercel 一键部署` 按钮（）
  - 有时间，看心情个写 `README` 吧（（（

### 项目上线

哦，对了，这是实测视频

<script src="https://dream-plan.cn/dplayer/dplayer.js"></script>

<div id='d1'>
<video id="p1" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2022-07-09/1.png">
  <source src="https://media.onmicrosoft.cn/news.mp4" type="video/mp4" />
</video>
</div>

<script>
(
function () {
const p_1 = new Plyr('#p1');
const dp1 = new DPlayer({
    container: document.getElementById('d1'),
    theme:'#00c4b6',
    preload:'none',
    video: {
        pic:'https://img.onmicrosoft.cn/2022-07-09/1.png',
        url: 'https://media.onmicrosoft.cn/news.mp4'
    },
});
}
)()
</script>

那么，这是项目地址：

- https://news.icodeq.com
- https://github.com/zkeq/news