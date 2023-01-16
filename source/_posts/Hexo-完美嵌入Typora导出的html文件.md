---
title: Hexo 完美嵌入Typora导出的html文件
tags: [笔记]
description: 在编写文档的时候摸索出来的技巧
date: 2021-12-14 01:00:50
categories: [A置顶文章, CMD] 
cover: https://img.onmicrosoft.cn/2021-12-13/4.png
---

### 步骤如下

1. 首先新建一个`.md`文件
2. 像平时一样填写标头
3. 内容填入如下

```html
<iframe
name="web"
width="100%" 
frameborder=0height="100%" 
src="\html\Hexo-搭建博客保姆式教程.html" 
id="web"
onload="this.height=web.document.body.scrollHeight+20">
</iframe>

<script
language="javascript">if(window.parent.length>0){window.parent.document.all.newtest.style.height=document.body.scrollHeight;}
</script>
```

3. 将html文件放在`/source/html`文件夹中

4. 并`填写Html文件的标头`
```yaml
---
layout: false
---
```

5. 预览或部署即可.

### 其他笔记

1. 使用手机开启热点的时候,此手机的局域网ip可以在连接此热点的设备上查看 DNS 服务器.其地址即为宿主机局域网ip地址
2. 在写笔记的时候,记得要在敏感标签前加 转义字符`\`
3. 可以在md文件正文添加css引入标签...会被渲染出来..但是不推荐..感觉好乱,不过在某个页面需要黑白的时候,可以试下哦
4. 记得尽快完成`docsify`笔记!!
5. 永远保持理性.
