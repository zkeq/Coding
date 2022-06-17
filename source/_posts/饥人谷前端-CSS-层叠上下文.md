---
title: 饥人谷前端 | CSS 层叠上下文
tags: [CSS]
description: 本节课主要学习了<br>CSS 层叠上下文
date: 2022-06-17 19:08:47
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
一个 div 的分层
![16](https://img.onmicrosoft.cn/2022-06-17/16.png)

- 只要定位不是 `static` 那么就会跑到所有元素的上面
- 如果是 `-1` 那么比 `background` 还要低

### 层叠上下文
- 也叫堆叠上下文

#### 比喻

－　每个层叠上下文都是一个小世界（作用域）
－　这个小世界里面的 `z-index` 跟外面的无关
－　处在同一个小世界的 `z-index` 才能比较

> 为什么 5 可以盖过 10？ 
> - 因为 10 在一个 0 里面。

- 需要看的：http://js.jirengu.com/gewob/edit

> `opacity` 影响所有东西
> 也就是为什么它可以创建一个层叠上下文，因为它要包住所有东西，不为 1 则创建
> `background` 只影响背景色

#### 哪个不正交的属性可以创建它？
- `MDN` [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) 有写
- 需要记忆的有 `z-index` / `flex` / `opacity` / `transform`
- 忘了就搜 [ 层叠上下文 MDN]
- 你说 CSS 为什么不单独创建一个属性做这个事？

负 `z-index` 与层叠上下文
- 记住 `负 z-index`  逃不出 小世界
  - `-1` 不一定能逃出一个 `div`，触发这个 `div` **不是** 一个层叠上下文
- http://js.jirengu.com/modez/1/edit?html,css,output