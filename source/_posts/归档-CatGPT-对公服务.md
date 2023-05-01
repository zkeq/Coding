---
title: 归档 | CatGPT 对公服务
tags:
  - 归档
categories:
  - 归档
description: CatGPT是一个提供对话生成API的项目，提供了多个应用网站布局和API开发者布局。
cover: https://img.onmicrosoft.cn/k8s/202305012036398.png
date: 2023-05-01 20:12:29
---

- 官网: https://catgpt.miaorun.dev [有演示 Demo]


## CatGPT 对公服务

> [Haorwen](https://github.com/Haorwen) 提供本项目的所有接口(Interface)

### 应用网站布局(成品可直接使用):

1. https://chat.miaorun.dev

   本网站为本次布局的主网站, 提供完整的GPT支持 模型为 3.5 

   支持喜闻乐见的连续对话以及流式相应的相关功能 无广告 但是也不保证 SLA 可用性

   本项目 无变现 / 盈利 想法 大家可以放心使用 :)  [其实是没那个能力hhh]

2. https://gpt.miaorun.dev

   本网站为备用站点, 其使用的 API Key 不大稳定 但是速度相对第一个来说略快

### API开发者布局:

1. https://hub.onmicrosoft.cn/docs#/default/chat_chat_get

   普通 GET 请求调用接口 返回 JSON 响应 速度略慢 首版, 体验中等

2. https://hub.onmicrosoft.cn/docs#/default/events_chat_stream_get

   升级版接口, 支持流式返回 下面提供一个简单的 demo 代码供演示


---


<!-- iframe iframe.html -->
<iframe width="100%" id="catGPT_iframe" frameborder=0 height="0" marginwidth=0  src="/html/catgpt_iframe.html"></iframe>
<script>
function resizeIframe() {
  const iframe = document.getElementById('catGPT_iframe');
  iframe.style.height = ( iframe.contentWindow.document.body.offsetHeight + 16)+ 'px';
  // iframe.contentWindow.document.body.scrollHeight 和
}
setInterval(() => {
  resizeIframe();
}, 200);
</script>



---



```html
<script src="https://jsd.onmicrosoft.cn/npm/marked/marked.min.js"></script>
<link rel="stylesheet" href="https://jsd.onmicrosoft.cn/npm/highlight.js@11.7.0/styles/night-owl.css">
<script src="https://cdnjs.onmicrosoft.cn/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

<input type="text" id="CatGPT_input">
<button onclick="CatGPT_GetSteam()">Get_Steam</button>
<div id="CatGPT_markdown">CatGPT内容展示区域</div>

<script>
function CatGPT_GetSteam(){
    var q = document.getElementById("CatGPT_input").value;
    document.getElementById('CatGPT_markdown').innerHTML = "Loading..."
    const eventSource = new EventSource('https://hub.onmicrosoft.cn/chat/stream?q=' + q);

    eventSource.addEventListener('message',  (event) => {
        if ("[DONE]" == event.data) {
            eventSource.close();
            return;
        }
        this.Steam = JSON.parse(event.data).message.content.parts[0]
        document.getElementById('CatGPT_markdown').innerHTML = marked.parse(this.Steam)
        hljs.highlightAll();
        // 在此处将接收到的数据分段渲染到浏览器中
    });

    eventSource.addEventListener('error', function(event) {
        // 停止接收数据
        eventSource.close();
    });
}
</script>
```

