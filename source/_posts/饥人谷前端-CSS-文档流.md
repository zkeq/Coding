---
title: 饥人谷前端 | CSS 文档流
tags: [CSS]
description: 本节课主要学习了<br>CSS 文档流
date: 2022-06-16 17:37:54
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

## 文档流

- Normal Flow

#### 基本概念

- 要理解几个重要的概念
  - 文档流 Normal Flow
  - 块、内联、内联块
  - margin 合并
  - 两种盒模型（border-box 更符合人类思维）

![1](https://img.onmicrosoft.cn/2022-06-16/1.png)

- 从左到右：内联元素
- 从上到下：`block` 元素
- 元素不要分为内联元素和块级元素，这些是由元素的属性决定的（也就是说可以 `inline` `block` 随时指定）

#### 文档流的详细属性

##### 流动方向

- `inline` 元素从左到右，到达最右边才会换行
- `block` 元素从上到下，每一个都另起一行
- `inline-block` 也是从左到右，但是到达最后的时候 `不会把自己分成两块`

##### 宽度

- `inline` 宽度为内部 `inline` 元素的和，不能用 `width` 指定
- `block` 默认自动计算宽度，可用 `width` 指定
- `inline-block` 结合前两者特点，可用 `width`

##### 高度

- `inline` 高度由 `line-height` 间接确定，跟 `height` 无关
- `block` 高度由 `内部文档流元素` 决定，可以设 `height`
- `inline-block` 跟 `block` 类似，可以设置 `height`

> `inline` 和 `inline-block` 相似但又不同的特点
>
> - `inline-block` 不会出现元素断开的情况
>
> ![2](https://img.onmicrosoft.cn/2022-06-16/2.png)

> `span` 的宽度是由其中的所有内联元素的宽度总和决定的
> `span` 元素不接受宽度

> `span` 的宽度是由其中的所有内联元素的宽度总和决定的
> `span` 元素不接受宽度

> 不要在 `display` 为 `inline` 里面加 `display` 为 `block` 的元素

> `div` 的宽度为占满全行 但不是 `100%`
> 可以指定 `div` 的宽度
> 如果不写的话 宽度为 `auto` 而不是 `100%`
>
> 永远不要写 宽度 100%，border 会撑大....


![3](https://img.onmicrosoft.cn/2022-06-16/3.png)

 相关代码：

- [ inline 和 block-inline (jirengu.com)](http://js.jirengu.com/hoxujukezu/8/edit)

- [span的高度确定依据 (jirengu.com)](http://js.jirengu.com/zogawidite/10/edit)
- [改一下字体 就多一像素？(jirengu.com)](http://js.jirengu.com/hayowarapi/3/edit)
  - [深入理解 CSS：字体度量、line-height 和 vertical-align - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/25808995)
  - 可以固定 div 的高度就没事了
  - 相关概念：行盒

- [脱离文档流 (jirengu.com)](http://js.jirengu.com/vibuwidomu/8/edit)

> 如果 div 里面什么都没有 那么 div 的高度为 0
>
> 相关代码 ：[溢出相关](http://js.jirengu.com/sigev/11/edit)
>
> - 如果有滚动条，那么内联元素只在横向第一屏显示 后面的留空，不会跑到滚动条右边

### overflow 溢出

#### 当内容大于容器时

- 等内容的宽度或高度大于容器的，会溢出
- 可用 `overflow` 来设置是否显示滚动条
- `auto` 是灵活设置
- `scroll` 是永远显示
- `hidden` 是直接隐藏溢出部分
- `visible` 是直接显示溢出部分
- `overflow` 可以分为 `overflow-x` 和 `overflow-y`

### 脱离文档流

#### 回忆一下

- block 高度是由内部文档流元素决定，可以设置 height 
- 这句话的意思是不是说，有些元素可以不在文档流中

#### 哪些元素可以脱离文档流

- `float`
- `postion: absolute / fixed`

#### 怎么让元素不脱离文档流

- 不要用上面属性不就不脱离了

[相关代码](http://js.jirengu.com/daviv/1/edit)
<a class="jsbin-embed" href="http://js.jirengu.com/daviv/1/embed">JS Bin</a><script src="http://js.jirengu.com/js/embed.js"></script>