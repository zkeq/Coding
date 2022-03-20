---
title: 使用 Hexo 搭建博客 保姆式教程
tags: [笔记]
description: 这篇文章是自己使用Hexo这几个月自己总结出来的教程
date: 2021-12-13 22:32:07
categories: CMD
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-12-13/3.png
sticky: 7
---

> 本文记录Hexo博客搭建全流程.保姆式教学(仅凭记忆,无图请自行脑补)
>
> 我认为hexo搭建的话,就是没有任何编程基础的人就可以入手.
>
> 可以说,本篇教程用到的一切工具,都是大佬们已经封装好的,我们大部分时间都可以直接拿过来用...
>
> 不要对命令行窗口产生一种厌烦的情绪,其实图形化界面的背后也是集合了一个一个命令行
>
> 而且图形界面只能实现很小的一部分内容...

## 说明

大多数同学的电脑应该都是Windows的电脑,能用上linux的话相信也不用看这篇教程.

那么本文就按我自己的电脑搭建环境来进行讲解

- 自己已经搭建了差不多十个hexo博客了,从翻阅各种文档到博客成型,可以说浪费了很多时间.
- 期间遇到大佬们的博客给了我很大的帮助,当然也遇到了一些比较小众的问题,也通过搜索各种笔记解决了.
- 可以说我认为搭建一个博客很适合新手入门
  - 其一是有利于培养对于编程的兴趣和感觉
  - 再来就是方便自己初学的时候记录各种笔记,方便日后翻阅.

**Windows电脑的环境配置问题请查看此视频!:** [一个视频 搞懂Windows电脑 环境变量 的知识点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Q3411s7mY/)

## No.01 写作环境(本地环境)

### 小节1:环境搭建

**这里引用Hexo官网的一段话**

> **安装前提**
>
> 安装 Hexo 相当简单，只需要先安装下列应用程序即可：
>
> - [Node.js](http://nodejs.org/) (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
> - [Git](http://git-scm.com/)
>
> 如果您的电脑中已经安装上述必备程序，那么恭喜您！你可以直接前往 [安装 Hexo](https://hexo.io/zh-cn/docs/#安装-Hexo) 步骤。
>
> 如果您的电脑中尚未安装所需要的程序，请根据以下安装指示完成安装。

##### 安装Node.js

1. 进入官网: [Download | Node.js (nodejs.org)](https://nodejs.org/en/download/)

2. 点击下图所示位置

   <img src="https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-12-13/1.png" alt="1" style="zoom:50%;">

3. 点击下载好的文件进行安装 `node.js`

4. **注意:** `使用 Node.js 官方安装程序时，请确保勾选 **Add to PATH** 选项（默认已勾选）`

##### 安装Git

1. 进入Git淘宝镜像:[git-for-windows Mirror (taobao.org)](https://npm.taobao.org/mirrors/git-for-windows/)

2. 滑到底部点击最后一个(可能因为时间原因,看到本文时已经出现新版本,请选择最新版本)

   <img src="https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-12-13/2.png" alt="2" style="zoom:80%;" >

3. 打开下载好的文件进行`安装`

4. 直接点击下一步安装就可以.

### 小节2: 初始化站点

> 所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。
>
> ```
> $ npm install -g hexo-cli
> ```

**以上是官方给的文档,第一次接触者方面的时候,我感到很疑惑,那个美元的符号是什么?.**

其实那个是Liunx系统的提示符,我们刚刚安装的Git其实就相当于一个小型的linux系统,甚至可以执行一些简单的指令,例如`ls` `dir` `vim`之类的

**其实这句话翻译一下就是**

> 1. 在你的电脑上面打开PowerShell
>    - 或者在任意一个文件夹点击右键,选择Git Bash Here.
> 2. 然后把那行命令复制到窗口中,等待一会就可以安装成功了.
> 3. 一般来说这里应该不会报错...

**到这里,Hexo就已经完全安装成功了!我们来测试一下hexo.**

1. 不出意外的话,你现在的电脑在任意一个文件夹,选择右键,可以看到一个Git Bash Here.

2. 点击它!

3. 然后在弹出来的框框里面输入 `hexo -version` ,即为安装成功

   ```cmd
   # 这里我因为已经装了很多东西.大家只要看见hexo-cli,就表示已经安装成功了!
   $ hexo -version
   hexo-cli: 4.3.0
   os: win32 10.0.22000
   node: 14.17.3
   v8: 8.4.371.23-node.67
   uv: 1.41.0
   zlib: 1.2.11
   brotli: 1.0.9
   ares: 1.17.1
   modules: 83
   nghttp2: 1.42.0
   napi: 8
   llhttp: 2.1.3
   openssl: 1.1.1k
   cldr: 39.0
   icu: 69.1
   tz: 2021a
   ```

### 小节3: 建站

> 安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。
>
> ```cmd
> $ hexo init <folder>
> $ cd <folder>
> $ npm install
> ```

我们来做一下阅读理解

1. 首先新建一个空文件夹

2. 在空白处点击右键,选择`Git Bash Here` 

3. 依次输入以下命令

   1. `hexo init .`     # 此条命令即为初始化Hexo,此条命令执行后,可以看到很多文件夹.说明安装成功 

      *注释: '.'表示在根目录下安装`hexo`,因为我们已经创建好了一个文件夹,所以在此根目录安装即可,即为 '.'*

   2. `npm install`     # 此条命令即为安装上一步缺少的库,大家在上一个命令执行之后 直接执行即可

> **source**
>
> 资源文件夹是存放用户资源的地方。除 `_posts` 文件夹之外，开头命名为 `_` (下划线)的文件 / 文件夹和隐藏的文件将会被忽略。Markdown 和 HTML 文件会被解析并放到 `public` 文件夹，而其他文件会被拷贝过去。
>
> **themes**
>
> [主题](https://hexo.io/zh-cn/docs/themes) 文件夹。Hexo 会根据主题来生成静态页面。
>
> **_config.yml**
>
> 网站的 [配置](https://hexo.io/zh-cn/docs/configuration) 信息，您可以在此配置大部分的参数。
>
> **package.json**
>
> 应用程序的信息。[EJS](https://ejs.co/), [Stylus](http://learnboost.github.io/stylus/) 和 [Markdown](http://daringfireball.net/projects/markdown/) renderer 已默认安装，您可以自由移除。

**其中比较重要的是 `_config.yml`,** 

网站的 [配置](https://hexo.io/zh-cn/docs/configuration) 信息，您可以在此配置大部分的参数。

- 需要注意的是,这里的_config.yml是`Hexo站点配置文件`,之后会创建一个 `主题配置文件`, **注意区分**

**接下来 修改网站的配置文件(当然,你也可以先去执行一下小节4里面的内容,看看网站最初的样子)**

> **配置**
>
> 您可以在 `_config.yml` 中修改大部分的配置。
>
> **网站**
>
> | 参数          | 描述                                                         |
> | :------------ | :----------------------------------------------------------- |
> | `title`       | 网站标题                                                     |
> | `subtitle`    | 网站副标题                                                   |
> | `description` | 网站描述                                                     |
> | `keywords`    | 网站的关键词。支持多个关键词。                               |
> | `author`      | 您的名字,即昵称                                              |
> | `language`    | 网站使用的语言。对于简体中文用户来说，使用不同的主题可能需要设置成不同的值，请参考你的主题的文档自行设置，常见的有 `zh-Hans`和 `zh-CN`。(根据自己的主题选择) |
> | `timezone`    | 网站时区。Hexo 默认使用您电脑的时区。请参考 [时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 进行设置，如 `America/New_York`, `Japan`, 和 `UTC` 。一般的，对于中国大陆地区可以使用 `Asia/Shanghai`。 |
>
> 其中，`description`主要用于SEO，告诉搜索引擎一个关于您站点的简单描述，通常建议在其中包含您网站的关键词。`author`参数用于主题显示文章的作者。

> **网址**
>
> | 参数                         | 描述                                                         | 默认值                      |
> | :--------------------------- | :----------------------------------------------------------- | :-------------------------- |
> | `url`                        | 网址, 必须以 `http://` 或 `https://` 开头                    |                             |
> | `root`                       | 网站根目录                                                   | `url's pathname`            |
> | `permalink`                  | 文章的 [永久链接](https://hexo.io/zh-cn/docs/permalinks) 格式 | `:year/:month/:day/:title/` |
> | `permalink_defaults`         | 永久链接中各部分的默认值                                     |                             |
> | `pretty_urls`                | 改写 [`permalink`](https://hexo.io/zh-cn/docs/variables) 的值来美化 URL |                             |
> | `pretty_urls.trailing_index` | 是否在永久链接中保留尾部的 `index.html`，设置为 `false` 时去除 | `true`                      |
> | `pretty_urls.trailing_html`  | 是否在永久链接中保留尾部的 `.html`, 设置为 `false` 时去除 (*对尾部的 `index.html`无效*) | `true`                      |
>
> 网站存放在子目录
>
> 如果您的网站存放在子目录中，例如 `http://example.com/blog`，则请将您的 `url` 设为 `http://example.com/blog` 并把 `root` 设为 `/blog/`。
>
> 例如：
>
> ```
> # 比如，一个页面的永久链接是 http://example.com/foo/bar/index.html
> pretty_urls:
> trailing_index: false
> # 此时页面的永久链接会变为 http://example.com/foo/bar/
> ```

**需要注意的是,为了之后的维护方便,这里建议设置网站的永久链接为子目录+文件名的格式**

`但是默认的格式是 :year/:month/:day/:title/`,这样的链接未免太长,对于之后的SEO优化不友好以及生成的链接样式非常不美观

**而且推荐建站的时候就把这个链接究竟是什么想好,避免日后修改时网站的访问统计和评论系统数据丢失以及迁移问题!!!**

本站采用用的是`年份`＋`.md文件哈希值`的方式

写法:  `:year/:hash/`

其他样式参见: [永久链接（Permalinks） | Hexo](https://hexo.io/zh-cn/docs/permalinks)  由于内容较多,本文不再张贴.学会用法自行翻阅即可



> 采用Gitee页面托管的网站,创建的仓库与本人用户名不同的话
>
> 本文件的url那一栏务必填写子链,
>
> 这会影响到之后文件的生成
>
> 例如请填写 https://zkeq.gitee.io/code/ 而不是 https://zkeq.gitee.io/
>
> `(由于gitee免费版无法绑定域名)`
>
> > **网站存放在子目录**
> > 
> > 如果您的网站存放在子目录中，例如 `http://example.com/blog`，则请将您的 `url` 设为 `http://example.com/blog` 并把 `root` 设为 `/blog/`。

**另一个重要配置,为了日后升级主题方便,请创建`独立的主题配置文件`(本节在第5节配置主题时操作...仅在此提及)**

- 主题配置文件,安装主题后,会存在于`\themes\[theme]`此路径下的 `_config.yml`  即为`\themes\butterfly\_config.yml`
- 我们要做的就是在根目录创建一个`_config.[theme].yml`文件,此文件存在时,主题目录下的`\themes\butterfly\_config.yml`所填写的内容会被覆盖
- 所以我们配置主题文件的时候,只需要修改`_config.[theme].yml`文件即可

官方说明:


> **独立的 `_config.[theme].yml` 文件**
>
> > 该特性自 Hexo 5.0.0 起提供
>
> 独立的主题配置文件应放置于站点根目录下，支持 `yml` 或 `json` 格式。需要配置站点 `_config.yml` 文件中的 `theme` 以供 Hexo 寻找 `_config.[theme].yml` 文件。
>
> ```yaml
> # _config.yml
> theme: "my-theme"
> # _config.my-theme.yml
> bio: "My awesome bio"
> foo:
>   bar: 'a'
> # themes/my-theme/_config.yml
> bio: "Some generic bio"
> logo: "a-cool-image.png"
>   foo:
>     baz: 'b'
> ```
>
> 最终主题配置的输出是：
>
> ```yaml
> {
>   bio: "My awesome bio",
>   logo: "a-cool-image.png",
>   foo: {
>     bar: "a",
>     baz: "b"
>   }
> }
> ```
>
> > 我们强烈建议你将所有的主题配置集中在一处。如果你不得不在多处配置你的主题，那么这些信息对你将会非常有用：Hexo 在合并主题配置时，Hexo 配置文件中的 `theme_config` 的优先级最高，其次是 `_config.[theme].yml` 文件，最后是位于主题目录下的 `_config.yml` 文件。

`其余高阶选项请参阅:` [配置 | Hexo](https://hexo.io/zh-cn/docs/configuration)

### 小节4: 解锁预览功能

**已经完成基本的功能了,虽然主题还是默认的`landscape`主题,但此时我们已经可以预览网站文件了!**

请在`Git Bash Here`中输入以下内容

1. `$ hexo cl`   # 即为删除hexo的缓存,(建议每次都要执行,以免引起不必要的麻烦) (`$ hexo clean`的简写)

   ​				清除缓存文件 (`db.json`) 和已生成的静态文件 (`public`)。

2. `$ hexo g`    # 创建缓存文件 (即为`$ hexo generate` 的简写,当有相同缩写插件时,建议输入全拼!)

3. `$ hexo s`    # 启动服务器。默认情况下，访问网址为： `http://localhost:4000/`。(`$ hexo server`的简写)

**不出意外的话,现在你已经可以访问http://localhost:4000/ 看到刚刚创建的网站了.**

**上述命令还可以连起来写 `hexo cl&&hexo g&&hexo s`  ,作为之后预览网站的快捷指令**

**还有一个常用的命令是`$ hexo deploy`, 即为生成静态网页文件,此命令执行后会生成public文件夹,其中的文件就是网站所产生的静态网页文件,部署即可访问.**

**命令也可简写为 `$ hexo d`,但是经过测试,此简写在安装豆瓣插件后,会失效(重名原因),需要写`$ hexo dep`才可以!**

> **deploy**
>
> ```cmd
> $ hexo deploy
> ```
>
> 部署网站。

**此命令也可连起来写  `hexo cl&&hexo g&&hexo d`,但是装了豆瓣插件之后,我只能这样写 `hexo cl&&hexo g&&hexo dep` .因为豆瓣插件的简写也是d!!**

**如何编写文章呢?**

- 命令: `hexo new'这个引号里面填写文章的标题'`
- 然后全部的文章文件将位于 `\source\posts`文件夹下
- 请使用md文件编辑器进行编辑
- Typora付费前的最后一个版本参见此帖: [[多平台\] Typora 0.11.18吾爱破解|安卓破解|病毒分析|www.52pojie.cn](https://www.52pojie.cn/thread-1552190-1-1.html)

​	下载链接: [阿里云盘分享 (aliyundrive.com)](https://www.aliyundrive.com/s/BYXmGd9U9QL)

- 然后就可以写文章啦!!
- 当然也可以采用在线编辑器 例如 [Markdown Editor在线编辑器 | MarkDown](https://markdowneditor.cn/)
- **这里需要注意的是: 请确认写tags的时候的大小写,若一个单词,则不可出现两种写法** 

 		即 要么 `Java`  要么 `JAVA` ,不可 **一篇文章写的是`Java`** 而 **另一篇是`JAVA`** 这样会出现不可预料的错误

- 

下面我们来讲一下如何安装主题...

### 小节5: 选择并部署主题

1. 首先去hexo主题页面选择一个主题 [Themes | Hexo](https://hexo.io/themes/)
2. 接着按主题给的文档进行配置...
3. 例如本站主题为 [Butterfly - A Simple and Card UI Design theme for Hexo](https://butterfly.js.org/) 
4. 本站主题的文档为 [Butterfly 安裝文檔(一) 快速開始 | Butterfly](https://butterfly.js.org/posts/21cfbf15/)
5. 这个文档已经写的非常详细了,这里仅对稍微有一些可能遇到的问题进行说明.

> 1. 此主题引用的字体图标为 [Font Awesome]([Font Awesome](https://fontawesome.com/v5.15/icons?from=io))  `Font Awesome Free 5.15.4 版本`
> 2. 修改时注意格式 
> 3. 若发现修改后无法加载
> 4. 请确认字体图标代码可在 https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css 中找到

> 1. 插入 `inject:`的  `head:` 或者  `bottom:` 即为在网站中插入文件时.
> 2. 请在 `主题配置文件`中插入代码 例如  - \<link rel="stylesheet" href="/css/black-white.css"\>
> 3. 然后在`source`文件夹中创建`/css/black-white.css`即可(即为新建一个css文件夹,再新建一个`black-white.css`文件)
> 4. 这个示例代码为将网站变为黑白,本文写于2021-11-13, 请铭记历史!
> 5. `black-white.css`文件: https://coding.maylove.pub/css/black-white.css

> 默认的文章排序为按时间排序,故不要将两个md文件的创建时间选择一样的!!

> 注意网站的语言配置文件,`要按主题给出的配置`,否则会出现无法正常显示中文的情况 例如`zh-CN` 不要写成 `ZH-CN `或者 `zh` (此条未经测试,反正你按规矩来就行....严谨一点还是好的~)

> 如果你认为每次都要修改.md文件的头部分感觉好麻烦.可以去 `scaffolds\post.md`文件中设置模板!

> 在此部分遇到的问题,需要提问时,请先阅读 [提问的智慧(中文版) (zkeq.xyz)](https://questions.zkeq.xyz/#/) 中的内容  再提出问题!

> 使用`Butterfly`主题 **添加全局播放器** 请参阅[Butterfly添加全局吸底Aplayer教程 | Butterfly](https://butterfly.js.org/posts/507c070f/)
>
> 需要注意的是,经过本人测试,**网易云的兼容性最好**,请**尽量使用网易云**!
>
> 代码插入的部分为`主题配置文件 847-852`行!!!
>
> 示例:
>
> inject:
>
>  head:
>
>    \- \<link rel="stylesheet" href="/css/black-white.css"\>
>
>  bottom:
>
>    \- \<div class="aplayer no-destroy" data-id="2116" data-server="netease" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted\>\</div\>
>
>   *# - \<script src="xxxx"\>\</script\>*

> 安装豆瓣电影页面插件请参阅
>
> [mythsman/hexo-douban: A simple plugin for hexo that helps us generate pages for douban books ,movies and games. (github.com)](https://github.com/mythsman/hexo-douban)
>
> 若为`Butterfly`主题 请参阅文档
>
> [butterfly-plugins/hexo-butterfly-douban at main · jerryc127/butterfly-plugins (github.com)](https://github.com/jerryc127/butterfly-plugins/tree/main/hexo-butterfly-douban)
>
> **hexo-butterfly-douba为**butterfly适配的豆瓣插件!若为本主题 则推荐使用
>
> > 电影
> > 电影界面使用了插件 hexo-butterfly-douban
> > 使用方法请参考插件的文档。
> >
> > 注意：
> >
> > hexo-butterfly-douban 会主动生成页面，所以不需要自己创建。
> > 如遇到无法抓取问题，显示 INFO 0 movies have been loaded in xxx ms, because you are offline or your network is bad
> > 请过段时间再试试，这我也无能为力。

> 主题官方进阶教程 [Butterfly 安裝文檔(六) 進階教程 | Butterfly](https://butterfly.js.org/posts/4073eda/)

> 请配置`独立的主题配置文件`!!上文提及的那个!!!

**到现在为止,你应该已经学会如何使用hexo生成静态资源了.即执行 `hexo cl&&hexo g&&hexo d`后**

**在`public文件夹`中生成的文件,即为`需要进行部署`的`全部网站资源`,下面讲解如何部署**

### 小节6: 安装外部插件

(这里以 `hexo-github-calendar` 插件为例)

**插件地址:** [Zfour/hexo-github-calendar: 基于hexo的github calendar贡献插件](https://github.com/Zfour/hexo-github-calendar)

**说明:**此插件的作用是生成主页图下方的GitHub日历(可选择GitHub或者Gitee)

**安装**:然后去找这个插件的文档,去跟这个文档就好啦!...

例如此插件的官方安装文档教程为:[教程：hexo-githubcalendar 插件 1.0 | 小冰博客 (zfe.space)](https://zfe.space/post/hexo-githubcalendar.html)

其实在GitHub项目的Readme文件也有写步骤: [Zfour/hexo-github-calendar: 基于hexo的github calendar贡献插件](https://github.com/Zfour/hexo-github-calendar)

**Hexo**是一个很强大的框架,我认为最方便的就是可以自己安装插件,这带给我们的自由性是巨大的.我们可以定制自己的博客页面,自己改写.甚至为这个社区做出贡献!

**注意**: 请注意的是要**明确** `主题配置文件` 和 `站点配置文件` 的 **区别**! 

这里分享一套自己配的`蓝色到紫色 配色`:

```yacas
  color: "['#e5e3ee', '#c7dcfb', '#87cfff', '#97b3ff', '#a59cff', '#b67dff', '#c85eff', '#d845ff', '#e52eff', '#f316ff', '#6a46e6']"   # IU紫色 (拿吸管工具吸出来的..)
```

## No.02 部署环境(服务器环境)

hexo为纯静态博客,也就是不需要后台的,我们只需要一个站点来存放我们生成的纯静态Html就可以了,所以推荐采用无服务器(即`Github Page` + `Gitee Page` + `Vercel` 部署).

- 有服务器(`宝塔面板 bt.cn`)
- 无服务器(`Github Page` + `Gitee Page` + `Vercel`)

### 服务器版本部署环境

服务器版本较为简单,本文不再讲解,自行百度即可,即为如下步骤...

1. 安装宝塔 [宝塔面板 - 简单好用的Linux/Windows服务器运维管理面板 (bt.cn)](https://www.bt.cn/)
   - Linux命令: [宝塔Linux面板安装教程 - 2021年8月18日更新 - 7.7.0正式版 - Linux面板 - 宝塔面板论坛 (bt.cn)](https://www.bt.cn/bbs/thread-19376-1-1.html)
2. 登录图形化控制台
3. 创建站点
4. 上传文件夹
5. 部署证书之类的操作
6. 完成!

### 无服务器版本部署环境

#### 小节1: Github部署主要文件

[GitHub](https://github.com/)

1. 注册Github仓库
2. 使用 [GitHub Desktop | Simple collaboration from your desktop](https://desktop.github.com/)
3. 完成创建仓库,上传仓库的操作.
4. 简单易懂.
5. 使用教程 [0基础的git教程，傻瓜都会用的Github Desktop - 简书 (jianshu.com)](https://www.jianshu.com/p/06a960d991aa)

#### 小节2: vercel引入Github仓库,生成主站

**(不用Github做主站的原因是Github.io国内解析不大稳定..)**

[Dashboard – Vercel](https://vercel.com/dashboard)

1. 注册一个Vercel账户
2. 点击导入自己名下的仓库
3. 之后会让你选择试用团队,**这里要点击 `Skip` `跳过`!!!, 否则两个星期之后,你要付费或者重新搞一遍,很搞心态的...**
4. 之后Vercel会自动部署代码文件,并且免费版每天有40次自动部署机会...完全够用
5. 然后就是配置域名啦,可以选择`vercel.app` 或者转到自己的域名
6. 详情参见  [Create a New Project – Vercel Docs](https://vercel.com/docs/get-started)

#### 小节3: Gitee创建国内镜像网站

[Gitee - 基于 Git 的代码托管和研发协作平台](https://gitee.com/)

此节参见下面的教程...

**带很多#号的是大多是时候仅需要执行一次的命令...**

> Git本地代码上传到远程仓库
> 1、进入项目地址，通过命令git init将项目初始化成git本地仓库
> ################`git init(仅需要首次执行)`
> 2、将项目内所有文件都添加到暂存区
> `git add .`
> 3、该命令会将git add .存入暂存区修改内容提交至本地仓库中，若文件未添加至暂存区，则提交时不会提交任何修改。
> `git commit -m 'update'`   //xxx是备注名
> 4、在github上新建一个仓库，复制仓库地址，然后使用命令将本地仓库与远程仓库建立连接
> ################（4.1）`git remote add origin  xxx (仅需要首次执行)`      //xxx是git仓库的地址
> ################（4.2）4.1这个步骤可能出现错误 提示fatal: remote origin already exists
> ################ 		执行：git remote rm origin (仅需要首次执行) **命令**
> ################（4.3）再执行（4.1）的命令
> 5、把暂存区的代码推到远程仓库
> `git push -u origin master`
>
> 
>
> // 若Github不通 ,可设置代理.如下所示
>
> //首先，设置默认代理，也可以理解为清除代理
> git config --global --unset http.proxy
> git config --global --unset https.proxy
>
> //设置代理
> git config --global http.proxy "192.168.10.4:7890"
> git config --global https.proxy "192.168.10.4:7890"

日常用到的仅有3行 即

```bash
$ git add .
$ git commit -m 'update'   
$ git push -u origin master
```

**记得每次上传之后,需要自行去Gitee重新部署Page页面...** (`Github和Vercel则不需要,自动部署的!`)

# 总结以及备忘

> **肯定会用到的功能**
>
> **创建文章及发布**
>
> **创建**
>
> 1. 使用git在hexo目录打开命令行模式
>
> 2. 输入代码 `hexo new '这里是文章的标题'`   #单引号内部的文字可以随意改动
>
> 3. 之后 会看到`\source\_posts`目录下多了一个刚才的标题文件(md格式的)
>
> 4. 打开这个md文件,进行相关修改
>
>    - Front-matter 为文件最上方的 那一块 : `'---'和 '---'中间的内容`
>
>    - **Front-matter 选项详解**
>
>      `Front-matter` 选项中的所有内容均为**非必填**的。但我仍然建议至少填写 `title` 和 `date` 的值。
>
>      | 配置选项      | 默认值                         | 描述                                                         |
>      | ------------- | ------------------------------ | ------------------------------------------------------------ |
>      | title         | `Markdown` 的文件标题          | 文章标题，强烈建议填写此选项                                 |
>      | date          | 文件创建时的日期时间           | 发布时间，强烈建议填写此选项，且最好保证全局唯一             |
>      | author        | 根 `_config.yml` 中的 `author` | 文章作者                                                     |
>      | img           | `featureImages` 中的某个值     | 文章特征图，推荐使用图床(腾讯云、七牛云、又拍云等)来做图片的路径.如: `http://xxx.com/xxx.jpg` |
>      | top           | `true`                         | 推荐文章（文章是否置顶），如果 `top` 值为 `true`，则会作为首页推荐文章 |
>      | hide          | `false`                        | 隐藏文章，如果`hide`值为`true`，则文章不会在首页显示         |
>      | cover         | `false`                        | `v1.0.2`版本新增，表示该文章是否需要加入到首页轮播封面中     |
>      | coverImg      | 无                             | `v1.0.2`版本新增，表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片 |
>      | password      | 无                             | 文章阅读密码，如果要对文章设置阅读验证密码的话，就可以设置 `password` 的值，该值必须是用 `SHA256` 加密后的密码，防止被他人识破。前提是在主题的 `config.yml` 中激活了 `verifyPassword` 选项 |
>      | toc           | `true`                         | 是否开启 TOC，可以针对某篇文章单独关闭 TOC 的功能。前提是在主题的 `config.yml` 中激活了 `toc` 选项 |
>      | mathjax       | `false`                        | 是否开启数学公式支持 ，本文章是否开启 `mathjax`，且需要在主题的 `_config.yml` 文件中也需要开启才行 |
>      | summary       | 无                             | 文章摘要，自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要 |
>      | categories    | 无                             | 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类 |
>      | tags          | 无                             | 文章标签，一篇文章可以多个标签                               |
>      | keywords      | 文章标题                       | 文章关键字，SEO 时需要                                       |
>      | reprintPolicy | cc_by                          | 文章转载规则， 可以是 cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint 或 pay 中的一个 |
>
>      > **注意**:
>      >
>      > 1. 如果 `img` 属性不填写的话，文章特色图会根据文章标题的 `hashcode` 的值取余，然后选取主题中对应的特色图片，从而达到让所有文章的特色图**各有特色**。
>      > 2. `date` 的值尽量保证每篇文章是唯一的，因为本主题中 `Gitalk` 和 `Gitment` 识别 `id` 是通过 `date` 的值来作为唯一标识的。
>      > 3. 如果要对文章设置阅读验证密码的功能，不仅要在 Front-matter 中设置采用了 SHA256 加密的 password 的值，还需要在主题的 `_config.yml` 中激活了配置。有些在线的 SHA256 加密的地址，可供你使用：[开源中国在线工具](http://tool.oschina.net/encrypt?type=2)、[chahuo](http://encode.chahuo.com/)、[站长工具](http://tool.chinaz.com/tools/hash.aspx)。
>      > 4. 您可以在文章md文件的 front-matter 中指定 reprintPolicy 来给单个文章配置转载规则
>
>      以下为文章的 `Front-matter` 示例。
>
>      **最简示例**
>
>      ```yaml
>      ---
>      title: typora-vue-theme主题介绍
>      date: 2018-09-07 09:25:00
>      ---
>      ```
>
>      **最全示例**
>
>      ```yaml
>      ---
>      title: typora-vue-theme主题介绍
>      date: 2018-09-07 09:25:00
>      author: 赵奇
>      img: /source/images/xxx.jpg
>      top: true
>      hide: false
>      cover: true
>      coverImg: /images/1.jpg
>      password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
>      toc: false
>      mathjax: false
>      summary: 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
>      categories: Markdown
>      tags:
>        - Typora
>        - Markdown
>      ---
>      ```
>
> **正文**
>
> - 修改文章的内容部分:即为 '---'下方的所有部分
> - 具体markdown语法参考
>   - https://www.typora.io/ 电脑端本地编辑器(可快捷键  本文档即为typora制作)
>   - https://markdowneditor.cn/ 在线编辑器
> - 可用 `\<center\>   \</center\>`命令中间包裹字符进行居中(不支持标题居中)
> - 可以用`\<br\>`单个标签进行换行
> - 插入图片可前往 https://pic.onji.cn/tencent.html 上传文件
>
> **发布**
>
> 1. 使用git打开hexo根目录
>
> 2. 输入命令
>
> 3. ```bash
>    hexo cl  # 清理缓存
>    hexo g   # 生成缓存
>    hexo d   # 生成本地文件
>    ```
>
>    另, 使用 `hexo s` 命令可生成**本地站预览**
>
>    另, 命令直接可使用`&&符号`进行一次性输入
>
> 4. 输入上述命令后 如无报错 则说明生成成功
>
> 5. 将public上传至github即可访问
>
>    
>
> **GitHub`和`gitee`以及`vercel`的相关配置**
>
> - GitHub建议使用GitHub Desktop 下载地址: https://desktop.github.com/
>
> **使用git命令推送文件到GitHub或gitee**
>
> > Git本地代码上传到远程仓库
> > 1、进入项目地址，通过命令git init将项目初始化成git本地仓库
> > `git init`  (此命令仅初始化仓库时使用,只使用一次即可..)
> > 2、将项目内所有文件都添加到暂存区
> > `git add .`  **(日常执行操作)**
> > 3、该命令会将git add .存入暂存区修改内容提交至本地仓库中，若文件未添加至暂存区，则提交时不会提交任何修改。
> > `git commit -m 'update'`   //xxx是备注名  **(日常执行操作)**
> > 4、在github上新建一个仓库，复制仓库地址，然后使用命令将本地仓库与远程仓库建立连接
> > （4.1）`git remote add origin  xxx`       //xxx是git仓库的地址   (此命令仅第一次或报错时重置使用)
> > （4.2）4.1这个步骤可能出现错误 提示fatal: remote origin already exists
> > 执行：`git remote rm origin`命令  (此命令仅第一次或报错时重置使用)
> > （4.3）再执行（4.1）的命令
> > 5、把暂存区的代码推到远程仓库
> > `git push -u origin master`  **(日常执行操作)**
>
> - **即 日常提交时 只需要三行代码!!!!!**
>
> -------------------
>
> **GitHub相关配置**
>
> **设置github page**
>
> - 在设置页启用GitHub Page
> - 若无域名可使用默认分配的域名 即为:`用户名.github.io/仓库名`(若仓库名和用户名相同则不需要加后缀仓库名也可访问)
> - 若有域名则填写自己的域名 再去域名提供商将域名解析为`CANME` 并把地址改为 `用户名.github.io`(示例:zkeq.github.io)
>
> **`vercel`的相关配置**
>
> - 去vercel官网按步骤一步一步来,,,不要创建团队就不会收费
> - 然后去域名那里创建自己的域名
> - 可选域名为 `自定义字符.vercel.app`(需要无人占用时才可正常设置)
> - 自定义域名流程同githubpage
> - 注意:第一次部署之后 每次Github仓库更新后 vercl会自动进行更新
> - 免费版每天最多自动更新40次(够用了我感觉...)
>
> **Gitee相关配置**
>
> - `github`上传代码后会自动更新`github page`
> - Gitee则不会, 需要进入官网gitee.com自行更新页面
>
> **可能会用到的功能**
>
> **哔哩哔哩视频插入链接**
>
> ```html
> \<div style="position: relative; padding: 30% 45%;"\>
> \<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?aid=64141610&bvid=BV134411f7xX&cid=111338369&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"\>\</iframe\>
> \</div\>
> ```
>
> 其中src字段的内容自行替换为哔哩哔哩的内嵌字符
>
> 例如官方给的是
>
> ```html
> <iframe src="//player.bilibili.com/player.html?aid=244350329&bvid=BV1rv411y71Q&cid=225785161&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
> ```
>
> 此时我们就只需
>
> `//player.bilibili.com/player.html?aid=244350329&bvid=BV1rv411y71Q&cid=225785161&page=1`
>
> 这一段内容 将它复制到上文div中即为
>
> ```html
> <div style="position: relative; padding: 30% 45%;"\>
> <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=244350329&bvid=BV1rv411y71Q&cid=225785161&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"\>\</iframe\>
> </div\>
> ```
>
> 配置完成
>
> 
>
> **赞赏码配置**
>
> (此配置请查看主题文档...)
>
> - 自行去`_config.matery.yml`第171到176行修改相关代码
>
>   ```yaml
>   # 是否激活文章末尾的打赏功能，默认激活（你替换为的你自己的微信、支付宝二维码图片、或者使用网络图片也可以）.
>   reward:
>     enable: false
>     title: 你的赏识是我前进的动力
>     wechat: /medias/reward/wechat.png
>     alipay: /medias/reward/alipay.jpg
>   ```
>   
>
>
> **小图标设置**
>
> - 去https://fa5.dashgame.com/#/这个网站找到新图标对应的值
> - 更改(请注意:  `请保留 fas fa-字符`!!!!!   只需要更改后面的字符)
>   - 有些对应不上..不知道什么原因,
>   - 可自行前往`\themes\matery\source\libs\awesome`文件夹修改相关文件
>
> 
>
> 更多配置文件请前往`_config.matery.yml`文件和 `_config`文件修改
>
> > 网易云的音乐引用直链(付费不可用) http://music.163.com/song/media/outer/url?id=这里填歌曲id.mp3
>
> > 若文件使用禁止盗链的话,可以解析一个DNS地址为127.0.0.1,这样就可以`在本地预览时不触发防盗链`啦
>
> > 视频插入代码
> >
> > ```html
> > \<video width="100%" height="100%" controls=""\>
> >     \<source src="url.mp4" type="video/mp4" /\>
> > \</video\>
> > ```