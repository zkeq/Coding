---
title: Coding ｜ 记一次使用 Claude Code 开发影视站&音乐站的开发历程
date: 2025-08-17 16:39:43
tags:
  - Claude Code
  - 前端开发
  - 项目开发
  - React
  - FastAPI
  - 影视站
  - 音乐站
  - AI编程
categories:
  - 开发历程
  - 项目实战
description: 记录使用 Claude Code 开发影视流媒体站和音乐流媒体站的完整开发历程，包括前端界面设计、播放器实现、后端API开发、管理后台等功能的实现过程和开发心得。
cover: https://media.onmicrosoft.cn/coding-for-music-and-movie.png
---

又有一段时间没有写博客了，是应该写一点什么东西的，哈哈哈哈哈。然后最近呢，开发的项目还是挺多的，可以给大家看的有两个项目，一个是影视站，一个是音乐站。那么，他们分别长以下的样子。

影视站线上预览地址：https://movie.onmicrosoft.cn/watch/688fc2ae37afc71b?episode=1

![微信图片_20250730200910_886](https://img.onmicrosoft.cn/zkeq/20250817135046442.webp)

音乐站线上预览地址：https://music.icodeq.com/play

![屏幕截图(616)](https://img.onmicrosoft.cn/zkeq/20250817135143449.png)

这两个项目的工期都不是很长，那么就是通过 Git 的版本管理来查看一下这两个项目的开发历程

### 首先看影视站

第一步，肯定是新建一个项目 用了一些提示词之后，写了第一个炫酷的首页，作为这个项目的开端

![image-20250817141424987](https://img.onmicrosoft.cn/zkeq/20250817141425160.png)

给了一点提示词，做了第一版播放链接页面，感觉效果还不错

![image-20250817150243961](https://img.onmicrosoft.cn/zkeq/20250817150244072.png)

虽然UI有点乱 布局页有问题，但是仍然是个不错的开始

然后接着，调整了下布局

![image-20250817150551213](https://img.onmicrosoft.cn/zkeq/20250817150551323.png)

播放器重构了下，引入了 plyr 

![image-20250817150627338](https://img.onmicrosoft.cn/zkeq/20250817150627447.png)

可以开始播放第一个视频了

![image-20250817150703350](https://img.onmicrosoft.cn/zkeq/20250817150703606.png)

看到移动端布局还是乱的

![image-20250817150822300](https://img.onmicrosoft.cn/zkeq/20250817150822369.png)

又适配了下移动端

![image-20250817150848980](https://img.onmicrosoft.cn/zkeq/20250817150849035.png)

![image-20250817150901704](https://img.onmicrosoft.cn/zkeq/20250817150901754.png)

移动端状态栏按钮变少了一点

![image-20250817150936929](https://img.onmicrosoft.cn/zkeq/20250817150937031.png)

然后又给这个网站添加了剧集播放和进度条管理功能（无图）

然后修复了下这个封面 作为首字来作为logo

![](https://img.onmicrosoft.cn/zkeq/20250817151416787.jpeg)

然后生成了下管理端的登录页面

![image-20250817151857109](https://img.onmicrosoft.cn/zkeq/20250817151857273.png)

然后让AI将所有用到的API写到一个api.ts文件中，将接口整合一下，也就是从mock数据接入到 真实的API 地址里面去

![image-20250817152009770](https://img.onmicrosoft.cn/zkeq/20250817152009884.png)

将前端用到的API文档输出为markdown文件

![image-20250817151522924](https://img.onmicrosoft.cn/zkeq/20250817151523013.png)

![image-20250817151532712](https://img.onmicrosoft.cn/zkeq/20250817151532785.png)

接着让AI根据文档生成后端 FastAPI 的 CURD 文件

![image-20250817151709326](https://img.onmicrosoft.cn/zkeq/20250817151709446.png)

至此 后端功能已经写好

以为已经有了API文档 后台也一起写好了

![image-20250817152120239](https://img.onmicrosoft.cn/zkeq/20250817152120335.png)

![image-20250817152341181](https://img.onmicrosoft.cn/zkeq/20250817152341276.png)

![image-20250817152452783](https://img.onmicrosoft.cn/zkeq/20250817152452885.png)

给网站的一些异常状态添加了报错提示

![c5b697fb43753a4c82b877549d0f7692](https://img.onmicrosoft.cn/zkeq/20250817153010832.png)

生成一份 README.md ，项目开源 至此 项目开发完成，耗时两天（业余时间开发）。

![image-20250817153303238](https://img.onmicrosoft.cn/zkeq/20250817153303402.png)

影视站就是比较简单，非常愉快的一次开发体验。

### 接着开发音乐站

音乐站首先给了一版提示词 是这样的

![image-20250817154601005](https://img.onmicrosoft.cn/zkeq/20250817154601103.png)

效果不太好 和自己想象中的差太远了，但是给我了一个开始，接着就是想办法一点一点优化了，我在纸上简单的画了下网站的布局

![f511fada5a1b207dc19f6a69def236e1](https://img.onmicrosoft.cn/zkeq/20250817154825255.jpg)

出来了一个大概的样子

![image-20250817154923460](https://img.onmicrosoft.cn/zkeq/20250817154923565.png)

歌词两个字删掉

![image-20250817155157613](https://img.onmicrosoft.cn/zkeq/20250817155157722.png)

让歌词正在播放的始终在中间，并且加了滚动逻辑，已经可以正常的可以点击跳转滚动

![image-20250817155238562](https://img.onmicrosoft.cn/zkeq/20250817155238674.png)

加了点氛围灯效

![image-20250817155342719](https://img.onmicrosoft.cn/zkeq/20250817155342879.png)

增加了全屏播放歌词功能

![image-20250817155429664](https://img.onmicrosoft.cn/zkeq/20250817155429770.png)

侧边栏增加折叠功能

![image-20250817155507187](https://img.onmicrosoft.cn/zkeq/20250817155507275.png)

给这个页面的组件增加了一些入场动画效果

![image-20250817155550964](https://img.onmicrosoft.cn/zkeq/20250817155551117.png)

让歌词支持手动滚动

![image-20250817155748812](https://img.onmicrosoft.cn/zkeq/20250817155748917.png)

升级了下背景效果的展示函数，更高性能和更高级

![image-20250817155842182](https://img.onmicrosoft.cn/zkeq/20250817155842318.png)

同时也初步跑了下其余的页面

![image-20250817155912177](https://img.onmicrosoft.cn/zkeq/20250817155912418.png)

![image-20250817155918538](https://img.onmicrosoft.cn/zkeq/20250817155918650.png)

![image-20250817155924736](https://img.onmicrosoft.cn/zkeq/20250817155924943.png)

![image-20250817155929591](https://img.onmicrosoft.cn/zkeq/20250817155929692.png)

然后就是重构这几个AI直接写出来的页面

变成两行一排的歌曲页面

![image-20250817160011216](https://img.onmicrosoft.cn/zkeq/20250817160011323.png)

继续重构

![image-20250817160144585](https://img.onmicrosoft.cn/zkeq/20250817160144721.png)

重构搜索结果页面

![image-20250817160211446](https://img.onmicrosoft.cn/zkeq/20250817160211554.png)

所有歌曲增加分页

![image-20250817160230769](https://img.onmicrosoft.cn/zkeq/20250817160230950.png)

初步效果

![image-20250817160308563](https://img.onmicrosoft.cn/zkeq/20250817160308762.png)

发现页面增加入场动画

![image-20250817160354421](https://img.onmicrosoft.cn/zkeq/20250817160354551.png)

重构第二个 歌单页面

![image-20250817160443264](https://img.onmicrosoft.cn/zkeq/20250817160443454.png)

歌单内页

![image-20250817160456126](https://img.onmicrosoft.cn/zkeq/20250817160456258.png)

然后实现艺术家页面

![image-20250817160526689](https://img.onmicrosoft.cn/zkeq/20250817160526810.png)

艺术家内页

![image-20250817160538665](https://img.onmicrosoft.cn/zkeq/20250817160538797.png)

实现一个播放器的播放列表功能

![image-20250817160641582](https://img.onmicrosoft.cn/zkeq/20250817160641742.png)

接着 着重实现了下播放器的真实播放功能（随机播放，列表播放等实现）

然后又实现了心情

![image-20250817160839424](https://img.onmicrosoft.cn/zkeq/20250817160839580.png)

![image-20250817160848099](https://img.onmicrosoft.cn/zkeq/20250817160848212.png)

然后让AI将所有用到的接口都做成API的形式，放在一个API函数里面

![image-20250817161048419](https://img.onmicrosoft.cn/zkeq/20250817161048517.png)

还有前端的接口文档

![image-20250817161103765](https://img.onmicrosoft.cn/zkeq/20250817161103873.png)

然后，初步生成了后端 CURD 和管理端

![image-20250817161131056](https://img.onmicrosoft.cn/zkeq/20250817161131155.png)

管理端页面初步实现

![image-20250817161143250](https://img.onmicrosoft.cn/zkeq/20250817161143376.png)

然后发现一个音乐只能关联一个艺术家，又实现了多表联表 实现一个音乐关联多个艺术家

![image-20250817161607418](https://img.onmicrosoft.cn/zkeq/20250817161607532.png)

![image-20250817161614807](https://img.onmicrosoft.cn/zkeq/20250817161614929.png)

然后，因为导入音乐太麻烦了，跟朋友研究了下，做了个网易云搜索元信息数据的API

![image-20250817162432037](https://img.onmicrosoft.cn/zkeq/20250817162432145.png)

![image-20250817162445261](https://img.onmicrosoft.cn/zkeq/20250817162445344.png)

然后尝试画了一版批量导入

![fd8193fcd493644104c0bc63cf86eba4](https://img.onmicrosoft.cn/zkeq/20250817162655226.jpg)

做出来的页面的效果

![image-20250817162556520](https://img.onmicrosoft.cn/zkeq/20250817162556699.png)

又支持了并发数设置（由 大佬 [xcsoft](https://github.com/soxft) 开发）

![image-20250817162807206](https://img.onmicrosoft.cn/zkeq/20250817162807353.png)

在这个项目中已经解决 or 未解决的产生的 issues

![image-20250817163347443](https://img.onmicrosoft.cn/zkeq/20250817163347542.png)

至此，音乐站全部开发完成，线上预览地址：[Self-Music - 音乐流媒体平台](https://music.icodeq.com/play)


![屏幕截图(616)](https://img.onmicrosoft.cn/zkeq/20250817125324565.png)

![屏幕截图(617)](https://img.onmicrosoft.cn/zkeq/20250817125724096.png)

![屏幕截图(618)](https://img.onmicrosoft.cn/zkeq/20250817125723943.png)

![屏幕截图(619)](https://img.onmicrosoft.cn/zkeq/20250817125723887.png)

![屏幕截图(621)](https://img.onmicrosoft.cn/zkeq/20250817125729741.png)

![屏幕截图(620)](https://img.onmicrosoft.cn/zkeq/20250817125727225.png)

![屏幕截图(624)](https://img.onmicrosoft.cn/zkeq/20250817125723840.png)

![屏幕截图(623)](https://img.onmicrosoft.cn/zkeq/20250817125723806.png)