---
title: '饥人谷前端 | 作业: CSS 自我知识总结'
tags: [CSS]
description: 本节课主要学习了<br>CSS 知识总结，渲染原理、动画做法、其他
date: 2022-06-20 09:19:30
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
### 浏览器的渲染原理

#### TL;DR

1. The DOM and CSSOM trees are combined to form the render tree.
   - 构建渲染 DOM 和 CSSOM 树
2. Render tree contains only the nodes required to render the page.
   - 渲染树仅包含渲染页面所需要的节点
3. Layout computes the exact position and size of each object.
   - 布局需要计算每个节点的位置和大小
4. The last step is paint, which takes in the final render tree and renders the pixels to the screen.
   - 最后一步是绘制，采用最终的渲染树，并将最终的渲染结果渲染到屏幕上面

#### 具体步骤

1. Process HTML markup and build the DOM tree.
   - 解析 `HTML` 并构建 `DOM` 树
2. Process CSS markup and build the CSSOM tree.
   - 解析 `CSS` 并构建 `CSSOM` 树
3. Combine the DOM and CSSOM into a render tree.
   - 解析 `DOM` 树和 `CSSOM` 树并构建渲染树
4. Run layout on the render tree to compute geometry of each node.
   - 解析渲染树并且计算出每个节点的大小和形状
5. Paint the individual nodes to the screen.
   - 上色，并绘制到屏幕上

### 动画的两种做法
#### transition

> transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

#### transform

> animation: 时长 | 过渡方式 | 延迟 | 次数 | 方向 |填充模式 |　是否暂停　｜　动画名;

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;
```

完整示例：即加 @keyframes

```css
#demo.start{
  animation:  1.5s ease 1s infinite alternate forwards xxx ;
}


@keyframes xxx {
  0% {
    transform: none;
  }
  66.66%{
    transform: translateX(200px);
  }
  100%{
    transform: translateX(200px) translateY(100px);
  }
}
```

### 其他List
- 感觉不大熟悉的是 float 里面那个 负margin
- 以及 清除浮动 感觉有点陌生，这几节的笔记要经常翻一下
  - 多做一些小项目吧，把学到的都复习一下 不大容易忘了就