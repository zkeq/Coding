---
title: 饥人谷前端 | HTML 语法
tags: [HTML]
description: 本节课主要学习了<br>基础的HTML知识以及学习的框架
date: 2022-06-15 14:34:37
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
---

#### 如何制作出网页

- 需要的知识
  - 域名知识
  - `HTTP` 服务器知识
  - `HTML` 知识
  - 其他
- 为什么没有 CSS 和 JS？
  - 万维网初期就是没有 css 和 JS
  - 1996 年底 `CSS` 才发布第一个版本
  - 1995 年底 `JavaScript` 才出现
  - 也就是说最开始的网页就是 HTML 在裸奔

> 万维网是基于互联网实现的输入网址看到网页的工具

#### 如何实现页面的美化？

- Markdown 标记语言可以实现表示文章逻辑
- HTML 标记语言

#### 最原始的 HTML

- 很简陋
  - 一共18个元素
  - 除了a标签外，其他设计都深受 SGMLguid 影响
  - 这些元素如今还有11个健在

> 最新版的 HTML 有多少标签？
> 
> - 大约110个

> Google 搜索 MDN HTML5 
> 
> 得到 HTML 权威资料

#### HTML 5 技术集

- HTML5 有两个含义
  - 最新版的HTML语言，含旧标签和32个新标签
  - HTML5 和它的朋友们（包含CSS3等）

- HTML5 技术集合
  - 新标签、新属性
  - 新的通信技术: `WebSockets`、`WebRTC` 等
  - 离线缓存技术: `LocalStorage`、`断网检测`
  - 多媒体技术: 视频、音频
  - 图像技术: `Canvas`、`SVG`、`WebGL`
  - `Web`增强技术: `History API`、全屏
  - 设备相关技术: `CSS3新的Flex`，`Grid`布局方式

> H5 != HTML5
> 
> H5 叫做手机页面。
> 在手机上能见的页面。

#### 优先学习 HTML 5

##### 开发工具
- vsCode
- WebStorm
- Chrome
- MDN 文档

##### 语法
- 注释
- DOCTYPE
- 有内容标签
- 无内容标签
- 属性

##### 标签
- 元数据
  - title
  - base
  - link
  - `meta`
  - style
- 章节
  - `section`
  - `nav`
  - `artical`
  - `aside`
  - h1~h6
  - `header`
  - `footer`
  - address
  - `main`
- 内容层次
  - p
  - hr
  - pre
  - blockquote
  - `ol + li`
  - `ul + li`
  - `dl + dt + dd`
  - figure + figcaption
- 文字
  - `a`
  - em
  - strong
  - q
  - time
  - code 
  - kdb
  - sub / sup
  - mark 
  - br / wbr 
  - ins / del
- 嵌入内容
  - `img`
  - iframe
  - `video`
  - audio
  - `canvas`
  - `svg`
- 表格
  - `table`
  - `tbody`
  - `thead`
  - `tfood`
  - `tr`
  - `td`
  - `th`
- 表单
  - `from`
  - `label`
  - `input`
  - `button`
  - `select`
  - `option`
  - `textarea`
  - progress
- 可交互元素
  - summary + details
  - menu + menuitem

##### SVG

#### 正确学习方法

步骤
- 把所有标签用嘴巴读一遍，了解其内容
- 全部忘掉，只记住 div 和 span
- 开始学习css
- 找一个页面，仿写
- 发现有更合适的标签，就改用更合适的
- 继续写页面

> 缺乏安全感
> - 这是这种快速学习方法的缺点

体系化学习

- 学一门语言必须学会什么？
  - 语法（怎么写代码）
  - 如何调试（怎么知道自己代码写错了）
  - 在哪查资料（其实就是为了抄代码）
  - 标准制定者是谁 `W3C`

- 如何学？
  - `Copy` - 抄文档、抄老师
  - `Run` - 放在自己的机器上运行成功
  - `Modify` - 加入一点自己的想法、然后重新运行
  - 我的 CRM 学习法已经用了十年了

HTML 的语法是怎样的
- 标签
  - `<!DOCTYPE html>`
  - `<tag attr=value>内容</tag>`
  - `<tag attr>内容</tag>`
  - `<tag attr=value >` // 自闭合的 / 尽量不写
- 细节
  - 大小写有区别吗？
  - 要加引号吗？ 和命令行一样
  - 如何注释？`<!-- -->`
  - 如何组合？

HTML 排错

- 如何知道 HTML 是否正确
  - 看` VSCode `的颜色提示
  - 看 `WebStrom `的颜色提示
  - 使用 HTML5 验证器（在线 / npm 工具）