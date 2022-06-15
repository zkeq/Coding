---
title: 饥人谷前端 | HTML 默认样式 & CSS reset
tags: [HTML]
description: 本节课主要学习了<br> HTML的默认样式以及重置方法
date: 2022-06-15 17:36:29
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### 默认样式

- 为什么有默认样式
  - 因为 HTML 被发明的时候，CSS 还没出生
- 怎么看默认样式
  - Chrome 开发者工具
  - `Elements `->` Styles` -> `user angent stylesheet`

- `User Agent`
  - 就是浏览器
- `CSS reset`
  - 默认样式已经不符合我们的需求

### 常见的 CSS reset

- 我个人经常用的代码
  - https://gist.github.com/FrankFang/df5e57a0799823ed89a960a642b3a1e2

- 你还可以抄
  - 进入大厂首页
  - Chrome 开发者工具，找到类似代码
  - 复制到自己的项目
  - 命名为 `reset.css`
- 其他
  - 一样大小可以用 ` font-size : 100%`
  - `ol, ul {list-style: none}`
  - a 标签下划线去掉` a {text-decoration: none}`
  - `a:hover {text-decoration: underline}`
  - table 要加两个属性来让间隔去掉` table {border-collapse: collapse; border-spacing: 0}`