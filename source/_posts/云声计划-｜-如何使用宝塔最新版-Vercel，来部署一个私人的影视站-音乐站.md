---
title: 云声计划 ｜ 如何使用宝塔最新版 + Vercel，来部署一个私人的影视站+音乐站
date: 2025-08-21 14:12:53
tags: [宝塔, Vercel, 个人媒体, 建站]
categories: [技术分享]
description: 一篇关于如何使用宝塔和 Vercel 部署私人影视站和音乐站的详细教程。
cover: https://media.onmicrosoft.cn/%E6%88%AA%E5%B1%8F2025-08-21%2014.16.48.png
---

## 0.0 如何使用宝塔最新版 + Vercel，来部署一个私人的影视站+音乐站

首先，还是先放图片

### 0.1 影视站

![微信图片_20250730200910_886](https://img.onmicrosoft.cn/zkeq/20250821113525900.webp)

![image-20250818114836819](https://img.onmicrosoft.cn/zkeq/20250821113758201.webp)

### 0.2 音乐站（支持批量搜刮网易云音乐元数据）

![屏幕截图(616)](https://img.onmicrosoft.cn/zkeq/20250821113630911.webp)

![屏幕截图(617)](https://img.onmicrosoft.cn/zkeq/20250821113652394.webp)

![屏幕截图(618)](https://img.onmicrosoft.cn/zkeq/20250821113659135.webp)

![屏幕截图(619)](https://img.onmicrosoft.cn/zkeq/20250821113703722.webp)

![屏幕截图(621)](https://img.onmicrosoft.cn/zkeq/20250821113816788.webp)

![屏幕截图(624)](https://img.onmicrosoft.cn/zkeq/20250821113821596.webp)

![屏幕截图(623)](https://img.onmicrosoft.cn/zkeq/20250821113903005.webp)

怎么样，UI是不是特别好看呢，那么下面就跟着我一起，从 0 开始一点一点部署这两个项目吧。

好的，朋友们，那么继上次文章 [Coding | 分别用2天半和9天，我用 ClaudeCode 写出了自己的影视站和音乐站](https://icodeq.com/2025/26be40bd7e38/) 和 [Coding ｜ 记一次使用 Claude Code 开发影视站&音乐站的开发历程](https://icodeq.com/2025/23fec5ee98fa/) 之后呢，来到本月的第三篇文章。

也就是本篇文章是教大家如何进行部署的。

两个项目的的架构其实是类似，这里演示使用音乐站来进行部署。

## 1.0 那么就开始吧，首先是需要购买一个服务器。

这里，如果是腾讯云的新用户呢，那么之前就是没有买过服务器的朋友，可以从下面这个链接来进行购买：

- 需要注意的是，如购买的是国内的服务器，那么域名需要进行备案才可以使用。

- https://cloud.tencent.com/act/pro/lhsale?from=27746

![image-20250821114255906](https://img.onmicrosoft.cn/zkeq/20250821114256096.png)

我购买的就是这一款，79块钱 一年 4H4G，非常划算的一个服务器，买了之后，有什么API的小项目，都可以跑在上面，然后我的话，还有一个备案域名，这样再使用腾讯CDN加速下，全国访问的速度都是非常的快。

- 或者这里：同价续费：https://cloud.tencent.com/act/pro/warmup202506

![image-20250821121907150](https://img.onmicrosoft.cn/zkeq/20250821121907288.png)

点击购买之后，弹出购买框

![image-20250821114733801](https://img.onmicrosoft.cn/zkeq/20250821114733909.png)

- 地域的话，选择一个离自己比较近的区域即可，如果有备案域名，那么可以使用CDN进行加速，如果CDN加速后的话，访问速度区别不大，速度都很快
- 镜像的话，可以根据自己的喜好选择，当然，新手的话，可以直接选择预装 宝塔面板的镜像，在这里，因为我比较喜欢 CentOS 系统，所以选择 CentOS，然后稍后去自行安装最新版宝塔。
- 关于价格：因为我已经购买过上文提到过的服务器，所以这里使用一个同是国内地域的服务器来进行演示。

![image-20250821115057115](https://img.onmicrosoft.cn/zkeq/20250821115057221.png)

点击购买，进行支付即可。

- 在这里，因为我已经有过一台服务器，不再进行购买，大家进行购买即可。

## 1.1 安装宝塔面板最新版

购买完成后呢，在腾讯轻量应用服务器这个控制台，可以看到刚才购买的服务器了。

- 网址：服务器 - 轻量云 - 控制台：https://console.cloud.tencent.com/lighthouse/instance/index

![image-20250821115507275](https://img.onmicrosoft.cn/zkeq/20250821115507354.png)

然后呢，点击右边的登录按钮，可以打开一个 网页端 Web 端的 Shell 

![image-20250821115959486](https://img.onmicrosoft.cn/zkeq/20250821115959588.png)

![image-20250821120315219](https://img.onmicrosoft.cn/zkeq/20250821120315319.png)

然后呢，去安装最新版的宝塔。

- 最新版宝塔 11.0 : https://mp.weixin.qq.com/s/j1rz6OGIWbp2Ovy9z89NKQ

安装脚本：

```bash
curl -sSO https://download.bt.cn/install/install_latest.sh || wget -O install_latest.sh https://download.bt.cn/install/install_latest.sh
bash install_latest.sh ed8484bec
```

![image-20250821120815115](https://img.onmicrosoft.cn/zkeq/20250821120815168.png)

按 y 回车即可。

然后运行完毕之后 即可看到这样的一串字符串

```
【云服务器】请在安全组放行 36680 端口
 外网面板地址: https://x.x.x.x:xxxx/xxxxxx
 内网面板地址: https://x.x.x.x:xxxx/xxxxxx
 username: xxxxxxxx
 password: xxxxxxxx
```

接着，我们需要去服务器安装组放行端口。

![image-20250821121115425](https://img.onmicrosoft.cn/zkeq/20250821121115542.png)

添加安全组

![image-20250821121217856](https://img.onmicrosoft.cn/zkeq/20250821121217962.png)

- 36680 为刚才宝塔提示的安全组端口，然后 `8000 - 9000`  是我比较喜欢的后端业务端口，完成放行后

复制 外网面板地址 到浏览器，即可进行访问

![image-20250821121346416](https://img.onmicrosoft.cn/zkeq/20250821121346526.png)

首次进入会提示绑定账号和安装环境，这里选择 LNMP 即可。即为 （Linux、Nginx、MySQL和PHP）。

安装完毕后看到面板。

![image-20250821121516632](https://img.onmicrosoft.cn/zkeq/20250821121516749.png)

接着，就开始部署我们的项目。

## 2.1 开始部署项目啦。

音乐站 Github 地址： zkeq/Self-Music: https://github.com/zkeq/Self-Music

影视站 Github 地址：zkeq/Self-Cinema：https://github.com/zkeq/Self-Cinema

首先要用别人的项目的话，出于礼貌的话，就是可以给别人点一点 star 哈哈哈哈，就是这样子也会让仓库的维护者非常开心。

那么点击去这个链接呢，看到的就是这样子的一个页面：

![image-20250821122252388](https://img.onmicrosoft.cn/zkeq/20250821122252501.png)

那个star呢，就是一个小爱心的意思，star越多呢，就代表这个项目越受人欢迎，那个 fork 呢，就代表要把这个项目拷贝一个副本 到自己的账户下面。

在这里部署呢，我们先部署的是后端，所以我们这两个按钮都不用，哈哈哈哈，我们用的是这个按钮。

![image-20250821122455674](https://img.onmicrosoft.cn/zkeq/20250821122455779.png)

点击之后即可下载。

![image-20250821122634916](https://img.onmicrosoft.cn/zkeq/20250821122634988.png)

然后呢，打开宝塔面板 `->` 文件 `/root` 根目录，将压缩包拖动到网页上即可上传。

![image-20250821122822830](https://img.onmicrosoft.cn/zkeq/20250821122822927.png)

右键压缩包，选择解压。

![image-20250821122904049](https://img.onmicrosoft.cn/zkeq/20250821122904153.png)

解压之后，我们进入 `/root/Self-Music/backend` 这个文件夹，即可看到刚解压出来的后端。

![image-20250821123017633](https://img.onmicrosoft.cn/zkeq/20250821123017731.png)

然后呢，根据仓库的提示

- 音乐站仓库提示：[zkeq/Self-Music](https://github.com/zkeq/Self-Music#-快速开始)
- 影视站仓库提示：[zkeq/Self-Cinema](https://github.com/zkeq/Self-Cinema#-快速开始)

修改文件即可。

#### 音乐站需修改的文件：

![image-20250821123237244](https://img.onmicrosoft.cn/zkeq/20250821123237336.png)

![image-20250821123248226](https://img.onmicrosoft.cn/zkeq/20250821123248295.png)

#### 影视站需修改的文件：

![image-20250821131647456](https://img.onmicrosoft.cn/zkeq/20250821131647564.png)

![image-20250821131659286](https://img.onmicrosoft.cn/zkeq/20250821131659370.png)

- 然后 打开宝塔 网站 -> `Ptython项目` -> `新建站点`
  - 新建一个虚拟环境

![image-20250731101721616](https://img.onmicrosoft.cn/zkeq/20250821123315683.webp)

- 表单按如下填写

![image-20250731101757603](https://img.onmicrosoft.cn/zkeq/20250821123342674.webp)

- 点击确定后项目会进行创建虚拟环境和安装，等待安装完毕 即可

- 点击设置可查看项目日志

![image-20250731101900749](https://img.onmicrosoft.cn/zkeq/20250821123400159.webp)

- 在这一步如果提示找不到某个依赖，点击 `操作` 中的 `终端`，自行输入 `pip install xxx(包名)` 即可，若提示端口被占用 （更改一个没有被占用的端口即可 `main.py`）

![image-20250731102037862](https://img.onmicrosoft.cn/zkeq/20250821123420884.webp)

- 请求服务端口，查看运行情况 （看到这个字符串，说明服务正常运行）

![image-20250731102123918](https://img.onmicrosoft.cn/zkeq/20250821123432339.webp)

- 至此 后端部署已完成，可在cdn测绑定反代域名即可上线

#### 在这里讲解一个绑定 https 的教程。

进入 `网站` `->` `反向代理` `->` `添加反代` ，填入一个你自己的域名，如果没有域名的话，可以去购买一个

- https://cloud.tencent.com/product/domain
- 选一个自己喜欢的域名，在这里使用我的演示域名 `icodeq.com`
- 购买域名后，如绑定国内服务器，需先备案
- 备案地址：https://cloud.tencent.com/product/ba

然后在这里填入你要绑定的API 域名，在这里使用 `music-api.icodeq.com`

![image-20250821130728213](https://img.onmicrosoft.cn/zkeq/20250821130728341.png)

然后去 DNSPod 上面，添加 `A` 解析记录即可。

在这里我使用的 CloudFlare 演示的，其实都一样

![image-20250821130012440](https://img.onmicrosoft.cn/zkeq/20250821130012523.png)

然后点开 `SSL`，申请一个免费证书

![image-20250821130859455](https://img.onmicrosoft.cn/zkeq/20250821130859605.png)

申请完毕后点击保存即可。

![](https://img.onmicrosoft.cn/zkeq/20250821130908181.webp)

- 然后再访问域名进行测试即可

![image-20250821130932812](https://img.onmicrosoft.cn/zkeq/20250821130932893.png)

## 2.2 Vercel 部署前端项目。

#### Vercel 是什么？

- Vercel 是一个专注于前端开发和静态网站托管的云平台，特别适合用于部署现代 Web 应用（如 React、Next.js、Vue.js、Svelte 等框架构建的项目）。它为开发者提供了快速、高效的部署体验，并集成了许多现代化的开发工具和功能。

就是这是一个静态托管平台，可以将我们的前端项目进行一个网站托管，我们可以很方便的将自己的前端代码部署上去，并且个人免费的额度完全够用。

每月免费 100GB 流量。

![image-20250821123701096](https://img.onmicrosoft.cn/zkeq/20250821123701226.png)

在下面的网址点进去，注册一个账号就行啦：

- [Vercel](https://vercel.com/zkeqs-projects)：https://vercel.com/zkeqs-projects

之后呢，就开始我们的前端部署，在这里，本项目提供一键部署按钮，可以点击按钮进行一键部署，但是缺点就是后续项目更新了，没办法点击按钮一键同步，又或者可以点击 Fork 功能（对的，就是上文提到的那个 Fork），点击这个按钮可以创建一个上下游分支的功能，我们可以有按钮可以一键更新前端代码，在这里两种方式都提供下。

音乐站一键部署：

- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzkeq%2FSelf-Music%2Ftree%2Fmain%2Ffrontend&env=NEXT_PUBLIC_API_URL&envDescription=%E5%90%8E%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%9C%B0%E5%9D%80%EF%BC%88%E7%A4%BA%E4%BE%8B%3A%20https%3A%2F%2Fmusic-api.onmicrosoft.cn%2Fapi%EF%BC%89%EF%BC%9A&project-name=self-music&repository-name=self-music)

影视站一键部署：

- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzkeq%2FSelf-Cinema%2Ftree%2Fmain%2Ffrontend&env=NEXT_PUBLIC_API_URL&envDescription=%E5%90%8E%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%9C%B0%E5%9D%80%EF%BC%88%E7%A4%BA%E4%BE%8B%3A%20https%3A%2F%2Fmovie-api.onmicrosoft.cn%EF%BC%89%EF%BC%9A&project-name=self-ciname&repository-name=self-ciname)

点击这个按钮之后，会看到这样的页面

![image-20250821124113717](https://img.onmicrosoft.cn/zkeq/20250821124113844.png)

我们点击 `Create` 按钮即可。

![image-20250821124146939](https://img.onmicrosoft.cn/zkeq/20250821124147068.png)

然后填入后端API地址，也就是刚才我们构建好的（需要注意的是，这里需要使用 https 链接）

![image-20250821130954454](https://img.onmicrosoft.cn/zkeq/20250821130954583.png)

点击 `Deploy` 进行部署。

![image-20250821131101797](https://img.onmicrosoft.cn/zkeq/20250821131101937.png)

![image-20250821131120989](https://img.onmicrosoft.cn/zkeq/20250821131121170.png)

再点击 `Domains` , 即可绑定一个自己的域名

![image-20250821131140583](https://img.onmicrosoft.cn/zkeq/20250821131140728.png)![image-20250821131205631](https://img.onmicrosoft.cn/zkeq/20250821131205758.png)

![image-20250821131223682](https://img.onmicrosoft.cn/zkeq/20250821131223869.png)

![image-20250821131231252](https://img.onmicrosoft.cn/zkeq/20250821131231382.png)

接着去添加 CNAME 解析，在这里使用一个大佬的 国内优选解析地址 `cname-vc.9420.ltd` 会快很多，解决很多网络问题。

![image-20250821131303559](https://img.onmicrosoft.cn/zkeq/20250821131303635.png)

添加完毕后，返回 `vercel`, 看到 蓝色对勾就代表已经部署完成。

![image-20250821131422313](https://img.onmicrosoft.cn/zkeq/20250821131422399.png)

进行访问测试, 即可部署完成。

![image-20250821131517934](https://img.onmicrosoft.cn/zkeq/20250821131518122.png)

![image-20250821131538506](https://img.onmicrosoft.cn/zkeq/20250821131538646.png)

### 2.3 使用 Fork 导入仓库

- 点击 fork 按钮后，会将仓库导入你的名下，在Vercle首页点开，然后点击新建即可。
- ![image-20250821133923409](https://img.onmicrosoft.cn/zkeq/20250821133923511.png)

![image-20250821133913662](https://img.onmicrosoft.cn/zkeq/20250821133913728.png)

![image-20250821133756136](https://img.onmicrosoft.cn/zkeq/20250821133756267.png)

记得点开设置环境变量 `NEXT_PUBLIC_API_URL`

![image-20250821133813002](https://img.onmicrosoft.cn/zkeq/20250821133813128.png)

## 3.0 开始享用吧。

好的朋友们，那么这就是本期为大家带来的部署影视站和音乐站的教程，希望大家玩的愉快，再次给大家放一下项目的地址，希望大家点点 star 哈哈哈哈，感谢感谢大家。

- 音乐站：https://github.com/zkeq/Self-Music

- 影视站：https://github.com/zkeq/Self-Cinema

对了，这两次项目的提示词我也开源出来了，大家有兴趣可以在这里看下~

- 音乐站 Claude Code 提示词：https://music.icodeq.com/claude-code-prompt
- 影视站 Cluade Code 提示词：https://movie.onmicrosoft.cn/claude-code-prompt

## 4.0 产品建议

- 宝塔⾯板：在本文编写过程中，发现宝塔面板自带的 Python 项目 自带的 SSL 功能似乎是坏掉的，不能正常绑定域名使用，希望可以优化下这个功能，改进下。