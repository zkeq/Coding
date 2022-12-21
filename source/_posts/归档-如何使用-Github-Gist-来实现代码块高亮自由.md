---
title: 归档 | 如何使用 Github Gist 来实现代码块高亮自由
tags: [归档]
categories: [A置顶文章, 工具]
description: 利用 Hexo 是先构建再发布的模式，首先推送代码块到 Github Gist 并且生成 iframe 框架 并嵌入文章。
cover: https://img.onmicrosoft.cn/2022-12-21/1.jpg
date: 2022-12-21 11:45:44
---

首先看效果


<div id="player_c14f813b8fd5c6a3"></div>
<script type="text/javascript">
    (
function () {
var player = new DogePlayer({
    container: document.getElementById('player_c14f813b8fd5c6a3'),
    userId: 2220,
    vcode: 'c14f813b8fd5c6a3',
    autoPlay: false
});
}
)()
</script>


## 起因

在编码区博主的博客里，最重要的东西，莫过于 `代码块的高亮` 了（至少我这么认为

在 Hexo 的主题里，代码块的高亮是有很多的，但是，有些主题的代码块高亮，可能并不是你想要的，或者说，你想要的代码块高亮，可能并不在这个主题里。

利用 highlight.js 的话，可以实现代码块的高亮，但是，Highlight.js 的代码块高亮，也是有限的，而且，Highlight.js 的代码块高亮，也不是很好看，因为大家不是设计师，手动调也很难如愿。

当然我尝试过手调一版：

![2](https://img.onmicrosoft.cn/2022-12-21/2.png)

我发现很多关键词是这个高亮所不支持的，相较于隔壁的 `Github` ，这么多人在上面看代码，做的高亮是极好的？

我能不能把 `Github` 的代码块高亮，拿来用呢？

## 探索&制造

经过一番摸索之后，发现了 `Github Gist` ，这个是一个类似代码片段的东西，可以用来粘贴代码分享到类似于 `twitter` 的社交平台，而且令我兴奋的是它支持 `Embed`，这不正我想要的吗？

![3](https://img.onmicrosoft.cn/2022-12-21/3.png)

于是就开始了我的探索之旅。

## 1. 创建 Github Gist

首先，我们需要创建一个 Github Gist，这个很简单，直接在 Github 上创建一个 Gist 就行了。

但是我们总不能把每篇文章写的代码都手动的创建吧，这太笨了，而且我博客有 `900+` 代码块，这太费人了

## 2. 使用 Github API

Github 有一个 API，可以用来创建 Gist，我们可以利用这个 API 来创建 Gist。

- https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28#create-a-gist

有了API，这就好办了（但是其实Github官方有一个 `js` 的sdk，可惜是异步的

但是我如果想要把代码提交上去的话，必须在 `Hexo` 的构建阶段进行，所以只能用 同步，阻塞的 库。（因为这个是工具刚学js的时候写的，所以不大懂很高深的知识点，只能用自己的方法实现）

于是便去搜，发现了一个 `"xmlhttprequest": "^1.8.0"`，这个库可以用来发送同步请求，只需要 `open` 的时候用第三个参数 `false` 即可：

```js
    request.open("GET", "/", false);
    request.send(null);
```

用同步的库有什么好处呢，好处就是我们发完请求之后可以直接在下面读取数据，而不用再封装一个函数之类的（看了 `hexo-douban` 的源码，发现他们也是用的同步阻塞～～）

于是就来创建 `Gist` 了，这里有一点就是，我们总不能每次构建都把所有的代码块全部构建一遍吧，所以我们要把代码块做一个唯一标识，这里我用的是 `md5` 也就是算出来当前代码块的 `md5` 值，然后将这个值作为 `Gist` 的 `description`，这样就可以保证每次构建的时候，只会创建新的 `Gist`，而不会重复创建。

正则匹配出文章的 `代码块`：
```js
// scripts/plantuml.js
const rBacktick = /^((?:[^\S\r\n]*>){0,3}[^\S\r\n]*)(`{3,}|~{3,})[^\S\r\n]*((?:.*?[^`\s])?)[^\S\r\n]*\n((?:[\s\S]*?\n)?)(?:(?:[^\S\r\n]*>){0,3}[^\S\r\n]*)\2[^\S\r\n]?(\n+|$)/gm;
// 另一种正则：```(\w+?\n)([\s\S]+?)``

// 抱歉因为时间过的太久，出处忘记了
```

算出来 `md5`：
```js
        let lang = _args ? _args : 'js';
        lang_list = {
            "javascript": "js",
            "python": "py",
            "SQL": "sql",
            "Python": "py",
            "JavaScript": "js",
            "Javascript": "js",
            "html": "html",
            "HTML": "html",
            "JS": "js",
            "Js": "js"
        }
        lang = lang_list[lang] ? lang_list[lang] : lang;
        const hash = crypto.createHash('md5');
        hash.update(lang, 'utf8');
        hash.update(gh_content, 'utf8');
        const md5 = hash.digest('hex');
```

创建 `Gist`：
```js
function createGist (md5, gh_content, lang){
    let response = ''
    let requestData = {
        "description": md5,
        "public": false,
        "files": {
            [md5 + "." + lang]: {
                "content": gh_content
            }
        }
    };
    var request = new XMLHttpRequest();
    // POST
    request.open("POST", "https://api.github.com/gists", false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "token " + github_token);
    request.send(JSON.stringify(requestData));
    response = request.responseText;
    // 如果状态码不是200就报错
    if (request.status != 201) {
        return createGist(md5, gh_content, lang);
    }
    return JSON.parse(response)["id"];
}
```

就这样，我们就可以在 `Hexo` 的构建阶段，将代码块上传到 `Gist` 上了。

## 3. 代码块的渲染

既然将代码上传的部分我们都已经实现了，所以只需要读取就可以了，很简单直接上代码呢：

```js
// for 循环找出所有gist
while (!is_end) {                
    // 首先获取到全部的gist
    var request = new XMLHttpRequest();
    log.info(`GIST: 正在查找第${pages}页`)
    request.open("GET", "https://api.github.com/gists?per_page=100" + `&page=${pages}`, false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "token " + github_token);
    request.send(null);
    data_json = JSON.parse(request.responseText);
    // 如果没有gist就结束
    if (data_json.length == 0) {
        is_end = true;
        break;
    } else {
        // 如果有gist就把gist加入到page_list
        data_json.forEach(element => {
            page_list.push(element["description"]);
            id_list.push(element["id"]);
        });
        pages = pages + 1;
    }
}
```

这里是因为 `Github` 是 `REST` API，所以我们判断获取到最后一页的依据这里我使用了判断返回的数据为 0 个时就结束

然后获取到代码的列表之后，我们只需要比一下 `description` 和 `md5` 是否相同，如果相同就获取到 `id`，然后拼接 `iframe` 就可以了。

为什么要用 iframe 呢？是因为如果每次都遍历 Gist 列表一次，那么肯定会造成极大的浪费，所以这里采用的 iframe 的方式，就是在构建的时候，将代码块上传到 Gist 上，然后在渲染的时候，直接将 iframe 嵌入到页面中，这样就可以避免每次都遍历 Gist 列表的问题。

还有就是，我第一版写的代码，在 `Safari` 浏览器上会出现缩进失效的问题，经过一番探索，偶然在这个博客上见到了完美的代码:

- https://betterprogramming.pub/how-to-use-event-bus-in-react-architecture-f90485477647

![4](https://img.onmicrosoft.cn/2022-12-21/4.png)

很爽，之后我就直接拿来用了，这里就不多说了，直接上代码：

```js
        let line_num = gh_content.split('\n').length;
        return `

<iframe 
style="border:none;width:100%;;max-height:66vh;"
onload="javascript:this.style.height=\`\${${line_num * 22 + 36}+5}px\`;this.contentWindow.document.getElementsByClassName('gist-data')[0].style.height=\`\${this.clientHeight-40}px\`;"
srcdoc='<meta name="description" content="Instantly share code, notes, and snippets. You can&#39;t perform that action at this time. You signed in with another tab or window. You signed out in another tab or window. Reload to refresh your session. Reload to refresh your session."><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="twitter:widgets:csp" content="on"><meta name="robots" content="noindex"><base target="_blank"><style>body {text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-family: "ff-tisa-web-pro", Georgia, Cambria, "Times New Roman", Times, serif; font-weight: 400; color: #333332; font-size: 18px; line-height: 1.4; margin: 0; background-color: white; overflow: hidden;}iframe {max-width: 100%;}</style></head><body><style>.gist .gist-file { margin-bottom: 0 !important; }.gist { text-rendering: auto; }.gist-meta a:nth-child(2) {display: none;} html {overflow: hidden;text-overflow: ellipsis;display: inline-block;} * {margin: 0} .gist-data { max-height: 90vh; } ::-webkit-scrollbar {display: none;}</style><script src="https://gist.onmicrosoft.cn/zkeq/${id}.js" charset="utf-8"></script><script>var height = -1; var delayMs = 200; if (document) {document.domain = document.domain;}function notifyResize(height) {height = height ? height : document.documentElement.offsetHeight; var resized = false; if (window.donkey && donkey.resize) {donkey.resize(height);var elements = document.getElementsByClassName("gist-data"); for (var i = 0; i < elements.length; i++) {elements[i].style.overflow = "visible"}resized = true;}if (parent && parent._resizeIframe) {var obj = {iframe: window.frameElement, height: height}; parent._resizeIframe(obj); resized = true;}if (window.location && window.location.hash === "#amp=1" && window.parent && window.parent.postMessage) {window.parent.postMessage({sentinel: "amp", type: "embed-size", height: height}, "*");}if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.resize) {window.webkit.messageHandlers.resize.postMessage(height); resized = true;}return resized;}function maybeResize() {try {if (document.documentElement.offsetHeight != height && notifyResize()) {height = document.documentElement.offsetHeight;}delayMs = Math.min(delayMs * 2, 1000000); setTimeout(maybeResize, delayMs);} catch(error) {console.log("maybeResize error: ", error)}}maybeResize();</script>'
>
</iframe>

`;
```

完美解决了缩进失效的问题，而且最大高度为 `66vh` ，非常棒。

效果就是本博客所用的，也是你目前看到的代码块。

那么如何使用呢？

## 使用

这里是给大家写的部署教程，可以直接使用我的 `iframe` 域名哦，使用国内 `CDN` 加速，速度很快。

- `https://gist.onmicrosoft.cn/` (不支持直接浏览器访问，只支持跨域引用)

1. 首先，你需要有一个 `GitHub` 账号，然后在 `GitHub` 上创建一个 `Token`, 用于访问 `GitHub API`，具体操作可以参考这篇文章：
   -  https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
   -  这里只勾选 `gist` 权限即可
  
2. 然后，在环境变量中添加 `GITHUB_TOKEN`，值为你刚刚创建的 `Token`，这里我使用的是 `vercel`，所以是在 `vercel` 的环境变量中添加，其他平台也是一样的。

![4](https://img.onmicrosoft.cn/2022-12-21/4.png)

3. 然后，你需要在 `Hexo` 根目录，创建一个文件夹 `scripts`，里面创建一个 `gist.js` 文件（名字随意，扩展名要js），内容如下：

- `注意！！！：请将 105 行的 zkeq 替换为你的 GitHub 用户名`
- 示例：https://github.com/zkeq/Coding/blob/main/scripts/tools.js
- 值得注意的是，`Github API` 有限制，似乎短时间最多创建 `400` 个 `Gist` ，如果代码块太多，只需要隔一段时间再来跑一遍即可，比如我的就是 `1200` 个，跑了三次左右跑完了，而且这个只是第一次需要跑，后续每次更新文章最多就十几个代码块，所以就第一次慢，以后还是很快的
- 创建太多不会提示报错，只是会卡住，手动暂停部署即可

```js
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const crypto = require('crypto');
const { exit } = require('process');
const log = require('hexo-log')({
    debug: false,
    silent: false
  })
// 从环境变量里面拿到github token
const github_token = process.env.GITHUB_TOKEN;

// 找出来所有的描述
var pages = 1;
var is_end = false;
var page_list = [];
var id_list = [];
// for 循环找出所有gist
while (!is_end) {                
    // 首先获取到全部的gist
    var request = new XMLHttpRequest();
    log.info(`GIST: 正在查找第${pages}页`)
    request.open("GET", "https://api.github.com/gists?per_page=100" + `&page=${pages}`, false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "token " + github_token);
    request.send(null);
    data_json = JSON.parse(request.responseText);
    // 如果没有gist就结束
    if (data_json.length == 0) {
        is_end = true;
        break;
    } else {
        // 如果有gist就把gist加入到page_list
        data_json.forEach(element => {
            page_list.push(element["description"]);
            id_list.push(element["id"]);
        });
        pages = pages + 1;
    }
}

// scripts/plantuml.js
const rBacktick = /^((?:[^\S\r\n]*>){0,3}[^\S\r\n]*)(`{3,}|~{3,})[^\S\r\n]*((?:.*?[^`\s])?)[^\S\r\n]*\n((?:[\s\S]*?\n)?)(?:(?:[^\S\r\n]*>){0,3}[^\S\r\n]*)\2[^\S\r\n]?(\n+|$)/gm;
// 另一种正则：```(\w+?\n)([\s\S]+?)```

hexo.extend.filter.register('before_post_render', function (data) {
    const dataContent = data.content;
    if ((!dataContent.includes('```') && !dataContent.includes('~~~'))) return;

    data.content = dataContent.replace(rBacktick, (match, start, $2, _args, _content, end) => {
        let gh_content = _content
            .replace(/\n$/, '')
            .replace(/^>\s/mg, '');
        // 如果有 _args 就用 _args 如果没有就默认为js
        let lang = _args ? _args : 'js';
        lang_list = {
            "javascript": "js",
            "python": "py",
            "SQL": "sql",
            "Python": "py",
            "JavaScript": "js",
            "Javascript": "js",
            "html": "html",
            "HTML": "html",
            "JS": "js",
            "Js": "js"
        }
        lang = lang_list[lang] ? lang_list[lang] : lang;
        const hash = crypto.createHash('md5');
        hash.update(lang, 'utf8');
        hash.update(gh_content, 'utf8');
        const md5 = hash.digest('hex');
        process.stdout.write("INFO  |--MD5--|" + md5 + "|----|");
        if (page_list.includes(md5)) {
            // 找到是第几个元素
            let index = page_list.indexOf(md5);
            // 找到对应的id
            var id = id_list[index];
        }else{
            // 如果没有找到就新建一个gist
            console.log("该gist不存在，新建一个gist");
            console.log(gh_content);
            console.log('-------------')
            var id = createGist(md5, gh_content, lang);
            console.log("新建gist，id：" + id);
        }
        console.log('\x1B[32m', "|--ID--|" + id + "|----|")
        // // 查看这个gist的嵌入代码
        // var request = new XMLHttpRequest();
        // let gist_url = "https://gist.github.com/zkeq/" + id + ".js"
        // console.log(gist_url);
        // request.open("GET", gist_url, false);
        // request.send();
        // let gist_code = request.responseText;
        // str = "<script>" + gist_code + "</script>";
            // iframe_ele = document.createElement('iframe');
            // iframe_ele.style = "border:none;width:100%;max-height:50vh";
            // iframe_ele.setAttribute("onload", "javascript:this.style.height=`${this.contentWindow.document.body.offsetHeight}px`;this.contentWindow.document.getElementsByClassName('gist-data')[0].style.height=`${this.clientHeight-65}px`;")
            // iframe_ele.setAttribute("srcdoc", `<head><base target='_blank'/></head><body><script src='https://gist.onmicrosoft.cn/zkeq/${id}.js'></script></body>`)
        // 输出该代码片段一共有几行
        let line_num = gh_content.split('\n').length;
        return `

<iframe 
style="border:none;width:100%;;max-height:66vh;"
onload="javascript:this.style.height=\`\${${line_num * 22 + 36}+5}px\`;this.contentWindow.document.getElementsByClassName('gist-data')[0].style.height=\`\${this.clientHeight-40}px\`;"
srcdoc='<meta name="description" content="Instantly share code, notes, and snippets. You can&#39;t perform that action at this time. You signed in with another tab or window. You signed out in another tab or window. Reload to refresh your session. Reload to refresh your session."><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="twitter:widgets:csp" content="on"><meta name="robots" content="noindex"><base target="_blank"><style>body {text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-family: "ff-tisa-web-pro", Georgia, Cambria, "Times New Roman", Times, serif; font-weight: 400; color: #333332; font-size: 18px; line-height: 1.4; margin: 0; background-color: white; overflow: hidden;}iframe {max-width: 100%;}</style></head><body><style>.gist .gist-file { margin-bottom: 0 !important; }.gist { text-rendering: auto; }.gist-meta a:nth-child(2) {display: none;} html {overflow: hidden;text-overflow: ellipsis;display: inline-block;} * {margin: 0} .gist-data { max-height: 90vh; } ::-webkit-scrollbar {display: none;}</style><script src="https://gist.onmicrosoft.cn/zkeq/${id}.js" charset="utf-8"></script><script>var height = -1; var delayMs = 200; if (document) {document.domain = document.domain;}function notifyResize(height) {height = height ? height : document.documentElement.offsetHeight; var resized = false; if (window.donkey && donkey.resize) {donkey.resize(height);var elements = document.getElementsByClassName("gist-data"); for (var i = 0; i < elements.length; i++) {elements[i].style.overflow = "visible"}resized = true;}if (parent && parent._resizeIframe) {var obj = {iframe: window.frameElement, height: height}; parent._resizeIframe(obj); resized = true;}if (window.location && window.location.hash === "#amp=1" && window.parent && window.parent.postMessage) {window.parent.postMessage({sentinel: "amp", type: "embed-size", height: height}, "*");}if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.resize) {window.webkit.messageHandlers.resize.postMessage(height); resized = true;}return resized;}function maybeResize() {try {if (document.documentElement.offsetHeight != height && notifyResize()) {height = document.documentElement.offsetHeight;}delayMs = Math.min(delayMs * 2, 1000000); setTimeout(maybeResize, delayMs);} catch(error) {console.log("maybeResize error: ", error)}}maybeResize();</script>'
>
</iframe>

`;
    });
}, 9);

function createGist (md5, gh_content, lang){
    let response = ''
    let requestData = {
        "description": md5,
        "public": false,
        "files": {
            [md5 + "." + lang]: {
                "content": gh_content
            }
        }
    };
    var request = new XMLHttpRequest();
    // POST
    request.open("POST", "https://api.github.com/gists", false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "token " + github_token);
    request.send(JSON.stringify(requestData));
    response = request.responseText;
    // 如果状态码不是200就报错
    if (request.status != 201) {
        return createGist(md5, gh_content, lang);
    }
    return JSON.parse(response)["id"];
}
```

这里使用的是 `before_post_render`
```js
hexo.extend.filter.register('before_post_render', function (data) {
```
这个函数会在每篇文章渲染之前执行，这里我们可以对文章的内容进行修改，比如添加代码高亮，添加图片懒加载等等。

详情见 `Hexo` 官方文档

- https://hexo.io/zh-cn/api/filter#before-post-render


4. 然后点击部署就可以啦，会出现文章开头视频的效果，如果后续发布文章，就会是这样：

<div style="position: relative; padding: 28% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" allowfullscreen="true" src="https://player.icodeq.com/mp4/?url=https://media.onmicrosoft.cn/hellohnjm/%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B62022-09-09%2015.49.00.mov&pic=https://img.onmicrosoft.cn/2022-12-21/1.jpg" frameborder="no" scrolling="no"></iframe>
</div>

有问题评论区提出哦