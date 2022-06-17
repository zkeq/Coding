---
title: 饥人谷前端 | CSS flex 实践
tags: [CSS]
description: 本节课主要学习了<br>CSS flex 实践
date: 2022-06-17 14:57:50
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

#### 实践

##### 不同布局

- 用 `flex` 做两栏布局
- 用 `flex` 做三栏布局
- 用 `flex` 做四栏布局
- 用 `flex` 做平均布局
- 用 `flex` 组合使用，做更复杂的布局

##### 经验

- 永远不要把 width 和 height 写死，除非特殊说明
- 用 `min-width` / `max-width` / `min-height` / `max-height`
- `flex` 可以基本满足所有需求
- `flex` 和 `margin-xxx: auto` 配合 有意外的效果

#### 什么叫写死

##### 写死

- `width: 100px`

##### 不写死

- `width: 50%`
- `max-width: 100px`
- `width: 30vw`
- `min-width: 80%`
- 特点：不使用 `px`, 或者加 `min max` 前缀
