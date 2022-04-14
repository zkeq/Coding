---
title: 归档 | 自建 不蒜子 API
tags: [归档]
description: 本篇文章讲了自建的不蒜子计数平台<br>以及搭建方法，项目由 Replit 驱动。
date: 2022-04-12 19:13:11
categories: [归档] 
cover: https://ik.imagekit.io/zkeq/2022-04-12/1.png
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

#### 搭建步骤

> 这教程确实奇怪，不过我找不到其他不报错的方法

1. 注册 replit.com

2. 重要：创建一个新项目！

3. 重要：选择模板为 flask ！

4. 重要：点击运行，查看 demo 是否正常运行！(正常运行即可进行下一步)

5. 分别创建文件 `pv.py` `uv.py` `main.py` `get_before_data.py` `white_list.json` 和文件夹 `ips`

6. 复制本项目的文件到上一步创建的文件中

3. 在 white_list.json 中添加你的域名白名单

4. 点击 `RUN` 运行再次运行（即成功！）

5. 将 `不蒜子` 官网提供的 `js` 代码里面的网址，改成你的

```
https://busuanzi.ibruce.info/busuanzi
改成
你的域名，例如：
https://counter.busuanzi.icodeq.com
```

6. 将第五步替换后的 `js` 代码替换为你正在使用的即可

出现下图表示安装成功！

![1](http://pic.rmb.bdstatic.com/bjh/7fb1645befad5bbbff33a6578eef0a50.png)