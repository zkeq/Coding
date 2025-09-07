---
title: Hexo 博客搭建：一份写给新手的完全指南
date: 2025-09-07 12:40:56
tags:
  - Hexo
  - 博客
  - GitHub
  - Vercel
categories:
  - 技术教程
description: 这是一份写给新手的 Hexo 博客搭建完全指南，从本地环境配置到云端自动化部署，带你走过从零到一的全过程。
cover: https://source.imyaigc.com/image/s8mjd0sh.png
---

# Hexo 博客搭建：一份写给新手的完全指南

编程，学习编程的过程是最容易建立正反馈的一个学习过程。把自己的想法变成代码之后，在瞬间就可以看到执行结果，这难道不是一个值得兴奋的事情吗？而且它的结果是可以随着思考的深入而朝着好的方向转变的，并不像其他有挑战性的事情一样，努力之后给你一个结果，面对结果无能为力的感觉，我相信大家都体会到过。可是在编程这个方向，遇到的所有问题都是可以用努力解决的。你在这个过程中思考的总和，累加成一个最终的结果，将自己思考的结果变成代码，一步一步的将自己的想法变成现实，一步一步的验证，一步一步的肯定。解决问题的过程其实就是一个正反馈的过程。我其实也没有特别的喜欢编程，我只是享受把想法变成现实的感觉而已。这就是驱动我学习编程的原因。

大部分人学习编程，其实只是卡在了最初的环境问题上，我第1次建博客的时候，经历了20多天，大概是我到现在还记得，16次失败的经历。可是最终还是做到了，当那个命令行应用，第1次成功的运行起来的时候。在那个时候建立正反馈，激励着我在后面一次次遇到挫折的时候。然后在那之后的两个月，我尝试用不同的方法，构建了十几个博客，我只知道那个时候的愉悦感，是我从来都没有经历过的。也就是从那个时候开始，我有了我的博客网站，然后，就在博客上面更新自己的学习编码的历程，最开始学习的语言是Python，那个时候每天大概更新1 200字，每天一个小知识点，可能就是 懵懵懂懂的坚持了好几个月，学编程的门槛之一就在这里，培养编程语言的思想，像代码一样思考问题，我可能又用了三四个月吧，终于可以用自己的思路写一些小脚本了，做过最尽情的一件事是从晚上8点开始写（那个时候也没有AI）写到第二天早上的5点，终于跑通了代码，然后成果就是，我整理出来的题库被23万人用油猴脚本运行，这应该是我第1次正反馈。

下面这篇文章，会尝试用通俗易懂的方式，带你搭建第一个博客网站，希望可以带你建立第一次编程的正反馈。

这篇指南，将以一个“过来人”的视角，带你走过从零到一的全过程。我不仅会告诉你“怎么做”，更会解释“为什么这么做”，并把我踩过的坑、总结的经验都分享给你，希望能帮你绕过一些常见的弯路，更平滑地开启你的创作之旅。

文章原文：https://blog.csdn.net/Zkeq_/article/details/121921150

---

## No.01 写作环境 (本地环境)

在本地搭建的环境，我们称之为“写作环境”。在这里，你可以安心地写作、调试、预览，直到满意为止。

### 小节1: 环境搭建

**核心工具：Node.js 与 Git**

*   **Node.js**: 它为 Hexo 提供了运行环境。你可以把它理解成一片土壤，Hexo 这颗种子需要在这片土壤上才能生根发芽。
*   **Git**: 这是一个强大的版本控制工具。在建站初期，它主要帮助我们安装主题和部署网站。未来，你会发现它是所有开发者的必备神器。

**操作步骤：**

1.  **安装 Node.js**
    *   **官网**: [Download | Node.js (nodejs.org)](https://nodejs.org/)
    *   **版本建议**: Hexo 要求 Node.js 版本不低于 10.13，建议使用 12.0 及以上版本的 **LTS (长期支持)** 版，它最稳定。
    *   **安装注意**: 使用官方安装程序时，请确保勾选 **Add to PATH** 选项（默认已勾选），这会让系统能随时在命令行中找到 Node.js。

2.  **安装 Git**
    *   **下载地址**: [Git for Windows 国内镜像 (taobao.org)](https://npm.taobao.org/mirrors/git-for-windows/)
    *   请选择列表底部的最新版本进行下载。
    *   **安装过程**: 直接一路点击“下一步”即可。
    *   **验证**: 安装完成后，在桌面或任意文件夹点击鼠标右键，如果能看到 “Git Bash Here” 选项，就代表安装成功了。**“Git Bash”** 是一个模拟 Linux 环境的命令行窗口，功能比 Windows 自带的 CMD 或 PowerShell 更强大，强烈推荐使用。

### 小节2: 初始化站点

所有工具安装完毕后，我们来安装 Hexo 的核心程序。

1.  **安装 Hexo 脚手架 (`hexo-cli`)**
    打开你的命令行工具 (推荐在任意位置右键 -> Git Bash Here)，输入以下命令：
```bash
npm install -g hexo-cli
```
- `npm` 是 Node.js 自带的包管理器，用来安装各种工具。
- `-g` 代表“全局安装”，这样你在任何地方都可以使用 `hexo` 命令。
-  **关于 `$` 符号**: 你在很多教程里看到的 `$`，其实是 Linux/macOS 命令行里的提示符，**你复制命令时不需要复制它**。

2.  **验证安装**
    安装成功后，输入 `hexo -version` 来检查一下。如果能看到类似下面的版本信息，就说明 Hexo 已经成功安装在你的电脑上了。
```bash
$ hexo -version
hexo-cli: 4.3.0
os: win32 10.0.22000
node: 14.17.3
...
```

### 小节3: 建站

现在，我们来创建博客项目。

1.  **创建项目文件夹**
    - 在你喜欢的位置（例如 `D:\Blogs`），创建一个新的**空文件夹**，比如 `my-blog`。
    - 进入这个 `my-blog` 文件夹，在空白处右键，选择 “Git Bash Here” 打开命令行。

2.  **执行初始化**
    依次输入以下命令：
    ```bash
    hexo init .
    npm install
    ```
- `hexo init .` 会将 Hexo 的所有必要文件下载到**当前文件夹**（`.` 代表当前目录）。
- `npm install` 会根据项目定义，安装所有依赖的模块。

3.  **项目文件结构解析**
    - `_config.yml`: **站点配置文件**，博客的“总开关”，大部分全局配置都在这里。
    - `themes/`: **主题文件夹**，决定了你的博客长什么样。
    - `source/`: **资源文件夹**，你写的文章 (`_posts` 目录)、创建的独立页面、存放的图片等都在这里。
    - `scaffolds/`: **模板文件夹**，当你用 `hexo new` 创建新文章时，会以这里的 `post.md` 为模板。
    - `package.json`: 应用程序信息，记录了项目依赖。

4.  **核心配置 (`_config.yml`)**
    这是最重要的地方，我们来详细看看。用文本编辑器打开它。
    - **网站信息 (Site)**
```yaml
title: 网站标题
subtitle: 网站副标题
description: 网站描述 (用于SEO，告诉搜索引擎你的网站是关于什么的)
keywords: 网站关键词,用逗号隔开
author: 你的名字
language: zh-CN # 简体中文，根据主题要求可能为 zh-Hans
timezone: Asia/Shanghai # 时区
```
-  **网址 (URL)**
```yaml
url: https://your-domain.com # 你的最终域名
root: / # 网站根目录。如果你的网站在子目录，如 example.com/blog，则 url 为 http://example.com/blog，root 为 /blog/
permalink: :year/:month/:day/:title/ # 文章的永久链接格式
```
-  **关于永久链接 `permalink` 的重要建议**：
    默认格式太长，不利于SEO且不美观。强烈建议在建站之初就确定好格式，避免日后修改导致链接失效、访问统计丢失。
    一个更简洁且独一无二的推荐格式是 **年份 + 文件名哈希值**:
```yaml
permalink: :year/:hash/
```
更多格式请参考 [Hexo 官方文档](https://hexo.io/docs/permalinks)。

5.  **最佳实践：独立的主题配置文件**
    为了方便日后平滑升级主题，强烈建议不要直接修改 `themes/[主题名]/_config.yml`。正确的做法是：
- 在**站点根目录**（和 `_config.yml` 同级）下，创建一个名为 `_config.[主题名].yml` 的文件。例如，如果你使用 `butterfly` 主题，就创建 `_config.butterfly.yml`。 （在后文）
-  将 `themes/butterfly/_config.yml` 的所有内容复制过来。
-   之后，所有关于主题的配置，都在这个新的 `_config.butterfly.yml` 文件里修改。Hexo 会智能地合~并这两个配置，并优先使用你的配置。

### 小节4: 解锁预览功能 (常用命令)

现在，我们已经可以预览网站的初始模样了。以下是 Hexo 最常用的几个命令：

-   `hexo clean` (简写 `hexo cl`): 清除缓存文件 (`db.json`) 和已生成的静态文件 (`public` 目录)。**建议每次生成或部署前都执行一次，可以避免很多不必要的麻烦。**
-   `hexo generate` (简写 `hexo g`): 生成静态文件。当有插件的简写命令冲突时，建议使用全拼。
-   `hexo server` (简写 `hexo s`): 启动本地预览服务器。默认地址是 `http://localhost:4000/`。
-   `hexo deploy` (简写 `hexo d`): 部署网站。

**组合使用:**
为了方便，可以把命令用 `&&` 连接起来一次性执行。

-  **本地预览**:
```bash
hexo clean && hexo generate && hexo server
# 或者简写
hexo cl && hexo g && hexo s
```
执行后，打开浏览器访问 `http://localhost:4000`，就能看到你的网站了。

-  **生成待部署文件**:
```bash
hexo clean && hexo generate && hexo deploy
# 或者简写
hexo cl && hexo g && hexo d
```
**注意**: `hexo d` 这个简写在安装了某些插件后（例如豆瓣插件）可能会因为命令重名而失效。届时需要改用 `hexo dep` 或者全称 `hexo deploy`。所以更稳妥的写法是 `hexo cl && hexo g && hexo dep`。

### 如何编写文章呢?

1.  **创建文章**:
    ```bash
    hexo new "你的文章标题"
    ```
这条命令会在 `source/_posts` 目录下创建一个名为 `你的文章标题.md` 的文件。
2.  **编辑文章**:
    请使用 Markdown 编辑器进行编辑。推荐：

- **Typora**: 一个非常优秀的 Markdown 编辑器，我就在用，可以搭配图床插件 Pic Go 上传图片到自己的图床中，并自动生成图片链接。
- **VS Code**: 配合插件也是极佳的选择。
- **在线编辑器**: [Markdown Editor](https://markdowneditor.cn/)

3.  **注意事项**:

- 文章顶部的 Front-matter (被 `---` 包围的部分) 非常重要，用于配置文章信息。
- `tags` (标签) 请注意大小写统一，例如，不要在一篇文章里用 `Java`，另一篇用 `JAVA`，这会被识别为两个不同的标签。
- **文章加密**: 如果需要，可以使用插件 [hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt) 对特定文章加密。

### 小节5: 选择并部署主题 (个性化你的博客)

1.  **挑选主题**: 前往 [Hexo 官网主题页](https://hexo.io/themes/) 挑选你喜欢的主题。

2.  **安装与配置 (以 Butterfly 主题为例)**:
    每个主题都有自己的安装和配置文档，请务必仔细阅读。这里以热门的 **Butterfly** 主题为例，分享一些具体的配置经验。

-  **官方文档**: [Butterfly 安装文档](https://butterfly.js.org/posts/21cfbf15/)
-  **安装**: 在你的博客根目录执行 Git 命令来下载主题。
```bash
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
-  **启用**: 修改**站点配置文件** `_config.yml`，将 `theme` 字段改为：
```yaml
theme: butterfly
```
- **配置**: 强烈建议使用上文提到的 **“独立的主题配置文件”** 方法，在根目录创建 `_config.butterfly.yml` 并在这里进行所有主题相关的修改。

### 小节6: 安装外部插件

Hexo 强大的生态系统体现在丰富的插件上。以 `hexo-github-calendar` 为例：

-   **插件地址**: [Zfour/hexo-github-calendar](https://github.com/Zfour/hexo-github-calendar)
-   **作用**: 在页面上生成一个 GitHub/Gitee 的贡献日历图。
-   **安装**: 通常插件的安装和使用方法都会在它的 `README.md` 文件或文档中详细说明。一般遵循 `npm install [插件名] --save` 然后在站点或主题配置文件中添加相应配置即可。

> **再次强调**: 操作时，请一定分清 **站点配置文件 (`_config.yml`)** 和 **主题配置文件 (`_config.butterfly.yml`)**！

### 小节7: Windows 环境变量配置问题

如果对 Windows 的环境变量感到困惑，推荐观看此视频: [一个视频 搞懂Windows电脑 环境变量 的知识点 [B站]](https://www.bilibili.com/video/BV15k4y1b7ef/)，能帮你彻底理解其原理。

---

## No.02 部署环境 (服务器环境)

本地网站只有你自己能看，部署后才能分享给世界。Hexo 是纯静态博客，部署非常灵活。

### 方案一: 使用自己的服务器 (如 宝塔面板)

如果你有自己的云服务器，流程相对简单：
1.  安装宝塔面板。
2.  在面板中新建一个网站。
3.  在本地执行 `hexo clean && hexo g` 生成 `public` 文件夹。
4.  将 `public` 文件夹内的**所有内容**上传到服务器网站的根目录。
5.  完成！

### 方案二: 无服务器部署 (GitHub + Vercel，强烈推荐)

这是目前最流行、免费且强大的方案，支持自动化部署。

**小节1: 在 GitHub 托管项目**

-  **目的**: 我们使用 GitHub 来存放你的整个 Hexo 项目**源代码**，而不是生成的 `public` 文件。这相当于云端备份和版本控制。
-  **操作**:
    1.  注册并登录 [GitHub](https://github.com/)。
    2.  创建一个新的**公开 (Public)** 仓库，例如 `my-hexo-blog`。
    3.  将本地项目与远程仓库关联并推送。推荐使用 [GitHub Desktop](https://desktop.github.com/) 图形化工具，对新手非常友好。如果使用命令行：
```bash
# (仅在项目首次推送时执行)
git init
git remote add origin https://github.com/你的用户名/你的仓库名.git

# (每次更新后执行)
git add .
git commit -m "更新说明，例如：新增文章'Hello World'"
git push -u origin master
```

**小节2: 使用 Vercel 自动部署**

-   **目的**: Vercel 会关联你的 GitHub 仓库，每当你推送新的代码时，它会自动帮你执行 `hexo g` 并将网站部署到全球 CDN 网络。
-   **操作**:
    1.  访问 [Vercel 官网](https://vercel.com/)，使用你的 GitHub 账号注册登录。
    2.  选择 “Import Project”，找到并选择你刚刚创建的 `my-hexo-blog` 仓库。
    3.  Vercel 会自动识别出是 Hexo 项目，你无需任何额外配置，直接点击 “Deploy”。
    4.  **重要**: 如果提示选择团队 (Team)，请点击 **Skip** 跳过，否则试用期后可能会收费。
    5.  稍等片刻，部署成功后 Vercel 会提供一个 `.vercel.app` 后缀的免费域名。之后你也可以绑定自己的域名。

**小节3: (可选) Gitee 创建国内镜像**

如果你希望在国内有更快的访问速度，可以同样的方法在 [Gitee](https://gitee.com/) 上创建一个镜像。流程与 GitHub 类似，但 Gitee Page 需要每次推送后**手动**去页面点击“更新”。

---

## 总结以及备忘

### 日常发布流程

1.  `hexo new "文章标题"` -> 写作。
2.  `hexo clean && hexo g && hexo s` -> 本地预览，检查效果。
3.  确认无误后，将代码推送到 GitHub:
```bash
git add .
git commit -m "更新日志"
git push
```
4.  Vercel 会自动完成线上部署。

### Front-matter 详解

文章文件最上方 `---` 之间的部分，是文章的配置项，非常重要。

| 配置选项 | 描述 |
| :--- | :--- |
| `title` | **文章标题 (建议必填)** |
| `date` | **发布时间 (建议必填，且全局唯一)** |
| `author` | 文章作者 |
| `img` | 文章封面图/特色图 URL |
| `top` | `true` 时文章置顶 |
| `hide` | `true` 时文章不在首页列表显示 |
| `password` | 文章阅读密码 (需要主题支持) |
| `toc` | `true`/`false` 控制是否显示文章目录 |
| `summary` | 自定义文章摘要 |
| `categories` | 文章分类 (建议一篇文章只属于一个分类) |
| `tags` | 文章标签 (一个文章可以有多个标签) |

**示例:**
```yaml
---
title: Typora-Vue-Theme主题介绍
date: 2018-09-07 09:25:00
author: 赵奇
img: /images/cover.jpg
top: true
categories: Markdown
tags:
  - Typora
  - Markdown
summary: 这是你自定义的文章摘要内容...
---
(这里开始是你的正文)
```

---

## 可能会用到的功能代码片段

- **内嵌Bilibili视频 (自适应)**
```html
<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=64141610&bvid=BV134411f7xX&cid=111338369&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"></iframe>
</div>
```
只需将 `src` 中的链接替换为B站分享的嵌入代码中的链接即可。

- **内嵌视频**
```html
<video width="100%" height="100%" controls>
    <source src="你的视频url.mp4" type="video/mp4" />
</video>
```

-  **内嵌网易云音乐**
    *   **直链格式**: `http://music.163.com/song/media/outer/url?id=歌曲ID.mp3` (付费歌曲不可用)
    *   **HTML 代码**:

```html
<audio src="http://music.163.com/song/media/outer/url?id=歌曲ID.mp3" controls loop preload="auto">
</audio>
```

---

## 参考链接

*   [Hexo 官方文档](https://hexo.io/)
*   [Butterfly 主题文档](https://butterfly.js.org/)
*   [Git本地代码上传到远程仓库 - DearDing - 博客园](https://www.cnblogs.com/dearding/p/9539395.html)
*   [提问的智慧(中文版)](http://www.zkeq.xyz/posts/39766.html)
*   [mythsman/hexo-douban](https://github.com/mythsman/hexo-douban)
*   [Zfour/hexo-github-calendar](https://github.com/Zfour/hexo-github-calendar)
*   [不蒜子 - 极简网页计数器](https://ibruce.info/)
*   [hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)
