---
title: Replit | 白嫖进行指北 [转载]
tags: [笔记]
description: 使用Replit白嫖各种语言项目<br>本文转载于：https://pighog.vercel.app/p/aa4a.html
date: 2022-04-20 22:41:05
categories: [其他]
cover: https://ik.imagekit.io/zkeq/2022-04-20/02.png
sticky: 2
---

> 使用 Replit 白嫖各种语言项目
>
> 本文转载于：https://pighog.vercel.app/p/aa4a.html
>
> 已经过原作者授权，转载时有部分内容变动！

## 前言

害呀，家里也疫情刚封了一半了

最近正好在捣鼓 [Replit](https://replit.com/) ，这玩意主要是能白嫖

似乎应用没有时间，没有流量限制。

能挂很多东西，只是单个仓库的虚拟机配置比较蔡。

不过跑跑正经项目肯定是够用的。这里列给大家看一下我挂的项目

下面应该都会写教程。本文在 [Replit](https://hexo.pighog.repl.co/p/aa4a.html) 首发哈哈！

<img src="https://ik.imagekit.io/zkeq/2022-04-20/image-20220417093726604.png" alt="image-20220417093726604" style="zoom: 40%;" />

Vue3 博客，[Busuanzi](http://busuanzi.ibruce.info/) 计数，[Hexo](https://hexo.io/) 博客，[Kodbox](https://kodcloud.com/) 可道云，[OneManager-php](https://github.com/qkqpttgf/OneManager-php)，[Panindex](https://libsgh.github.io/PanIndex)，[Alist](https://alist-doc.nn.ci/) 等等。

### 准备工作

注册登录 [Replit](https://replit.com/) 并创建教育 Team（私有仓库）。

<img src="https://ik.imagekit.io/zkeq/2022-04-20/image-20220417100205289.png" alt="image-20220417100205289" style="zoom: 50%;" />

## 开始

### 使用 Bash 运行 Panindex

[Panindex](https://libsgh.github.io/PanIndex) 程序预览：https://pan.pighog.repl.co/

1. 在教育Team创建Bash语言项目

<img src="https://ik.imagekit.io/zkeq/2022-04-20/image-20220417100343779.png" alt="image-20220417100343779" style="zoom:50%;" />

2. 下载二进制程序`amd64`并解压至项目根目录

3. 编写 `.replit` 及 `main.sh` 文件

<img src="https://ik.imagekit.io/zkeq/2022-04-20/image-20220417102208102.png" alt="image-20220417102208102" style="zoom: 67%;" />

.replit需要点右上角三个点Show显示！检查文件并修改成以下内容！

检查`.replit`文件：

```bash
run = ["bash", "main.sh"]
entrypoint = "main.sh"
```

检查`main.sh`文件：

```bash
chmod  +x  PanIndex-linux-amd64
./PanIndex-linux-amd64
```

4. 编写完成后点顶上绿色 ▶ Run 按钮运行。

文章备份：https://allblog.vercel.app/article/01VC3T5Y5NY734QGFJDRE364YAMQD55JRF

### 使用 Bash 运行Alist

[Alist](https://alist-doc.nn.ci/) 程序预览：https://alist.pighog.repl.co/

0. [一键部署到Replit（不推荐）](https://github.com/alist-org/alist-replit)

1. 在教育Team创建Bash语言项目

2. 下载二进制程序`amd64`并解压至项目根目录

3. 编写 `.replit` 及 `main.sh` 文件

检查`.replit`文件：

```bash
run = ["bash", "main.sh"]
entrypoint = "main.sh"
```

检查`main.sh`文件：

```bash
chmod  +x  alist-linux-amd64
./alist-linux-amd64
```

4. 编写完成后点顶上绿色 ▶ Run 按钮运行。

文章备份：https://allblog.vercel.app/article/01VC3T5Y6CGJ5Q4JTZWZF23VT3VIOU6QYU

### 使用PHP Web Server部署OneManager

1. 在教育Team创建PHP Web Server语言项目

2. Clone [OneManager-php]([qkqpttgf/OneManager-php: An index & manager of Onedrive based on serverless. Can be deployed to Heroku/Glitch/Vercel/Replit/SCF/FG/FC/CFC/PHP web hosting/VPS. (github.com)](https://github.com/qkqpttgf/OneManager-php))仓库至项目根目录

3. 编写 `.replit` 及 `main.sh` 文件

检查`.replit`文件：

```bash
language = "php74"
run = "php -S 0.0.0.0:8000 index.php"
entrypoint = "index.php"
```
4. 编写完成后点顶上绿色 ▶ Run 按钮运行。

文章备份：https://allblog.vercel.app/article/01VC3T5YYMXAZXCIULMFD3P5B7MZUAJE5R

### 使用Nodejs部署Hexo

1. 在教育Team创建Nodejs 16语言项目

2. 如果有可以Clone自己Hexo项目的源码至根目录

3. 编写`.replit`文件：

```bash
# DO NOT CHANGE RUN COMMAND HERE
# To change the run command either:
# 1) change the run script in package.json
# 2) replace npm run-script run in run.nix with your command

run = "npm run dev"
entrypoint = "README.md"

language = "nodejs"

[nix]
channel="stable-21_11"

[packager]
language = "nodejs"

[packager.features]
packageSearch = true
guessImports = true

[languages.nodejs]
pattern = "**/*.js"
syntax = "nodejs"

[languages.nodejs.languageServer]
start = [ "typescript-language-server", "--stdio" ]
```

4. 编写完成后点顶上绿色 ▶ Run 按钮运行。

文章备份：https://allblog.vercel.app/article/01VC3T5Y22O2IEBABDG5GKG7AFNBCFIJL7

Replit的应用在一段时间不访问后会自动休眠减少资源消耗，如果大家想要保持运行可以用网站监控休眠设置5分钟定时访问保活。

出现各种问题可以在下面评论提问（Gitalk需要在Vercel域用，不能登录请使用Valine评论）

全文备份：https://allblog.vercel.app/article/01VC3T5Y7Z2JOMRAGM3BBZ5E7ZJDLYJLOR

-------------

---------------

-----------------

## 在Replit中配置Nix环境

#### 前言

[在Replit中白嫖](https://pighog.vercel.app/p/aa4a.html) 时，一定会遇到有不能一键部署的环境，那我们如何选择自己想要的环境呢？这里需要用到Replit环境中自带的 `replit.nix` 文件。[Nix](https://nixos.org/) 是什么，我们要怎么使用，下面的文章会解答凝的疑问（

#### 准备

其实没什么好准备的，在Replit准备一个Bash环境（理论上任意环境都行），打开仓库后，点文件最右边三个点，点显示隐藏文件，然后仓库根文件夹中会多出 `.replit` `replit.nix` 两个文件。我们要使用 `replit.nix` 配置环境。

![image-20220420121713553](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420121713553.png)

#### 开始

首先 [Nix](https://nixos.org/) 是一个包管理器，就像一个软件库，我们可以用 `replit.nix` 直接使用 Nix 中的软件包。这里用 [onedrive-vercel-index](https://github.com/spencerwooo/onedrive-vercel-index) 做演示。

onedrive-vercel-index 是一个部署在 [vercel](https://vercel.com/) 中的文件浏览程序，需要使用到 Next.js（属于vercel），我们可以在 Replit 直接创建 next.js 语言项目。

![image-20220420124304065](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420124304065.png)

onedrive-vercel-index 还需要用到 Redis 缓存以及 pnpm包管理器。

我们浏览原始的 `replit.nix` 文件，查看文件结构，发现他自带node.js16，tsserver，yarn，jest。现在我们需要给他添加 redis 以及 pnpm。

![image-20220420124801826](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420124801826.png)

打开 [Nix 搜索](https://search.nixos.org/packages) redis ，找到自己想要的redis包，点名字展开后，复制包名。

![image-20220420125550617](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420125550617.png)

返回到 Replit 的 `replit.nix` 文件。换行后输入包名 `pkgs.redis` 

![image-20220420130608399](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420130608399.png)

等待 ` Loading Nix environment... ` 加载完；

转到 Shell 中启动 Redis server，可以发现已经安装好了。

![image-20220420130750850](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420130750850.png)

同理的 pnpm 搜索，复制包名，粘贴：`pkgs.nodePackages.pnpm` 

![image-20220420131521120](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420131521120.png)

![image-20220420131640141](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420131640141.png)

如果是npm包，请不要漏掉 nodePackages 而且请最好写在 `pkgs.nodejs-16_x` 下方，并缩进。写好程序的运行脚本，运行后，可以看到onedrive-vercel-index已成功启动并运行了。

![image-20220420132204024](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420132204024.png)

```cmd
{ pkgs }: {
	deps = [
    pkgs.redis
		pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.nodePackages.pnpm
        pkgs.replitPackages.jest
	];
}
```

#### 进阶

以下有两个我自己写好的环境仓库，有兴趣可以参照看一下：

在 Replit 自动构建 Alist [alistbuildonreplit](https://github.com/valetzx/alist-build-on-replit)

用到的环境有：go1.18，gcc，vite，nodejs16等

在 Replit 白嫖3G MC 服务器 [mcserveronreplit ](https://github.com/valetzx/mcserveronreplit)

用到的环境有：jdk17，php80，python等

#### 注意

有部分网路类型的包，例如 ngrok，zerotier-one 需要用别的方式安装，这里暂时不讲。以及rclone，可以使用，但是不能挂载到本地。后面有空会写，如何使用AriaNg，白嫖replit的服务器网络下载。速度也是肥肠可观的。

![image-20220420133548528](https://ik.imagekit.io/zkeq/2022-04-20/image-20220420133548528.png)
