---
title: 饥人谷前端 | CSS 盒模型
tags: [CSS]
description: 本节课主要学习了<br>CSS 盒模型
date: 2022-06-16 17:39:32
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### 两种盒模型

#### 分别是

- `content-box` 内容盒 - 内容就是盒子的边界
- `border-box` 边框盒 - 边框才是盒子的边界

#### 公式

- `content-box width = 内容宽度`
- `border-box width = 内容宽度 + padding + border`

#### 哪个好用

- `border-box` 好用
- 同时指定 `padding`、`width`、`border` 就知道为什么了

![4](https://img.onmicrosoft.cn/2022-06-16/4.png)

详情见代码：[两种盒模型(jirengu.com)](http://js.jirengu.com/jukom/5/edit)

![5](https://img.onmicrosoft.cn/2022-06-16/5.png)

----------------

### margin 合并

#### 哪些情况会合并

- `父子 margin` 合并
- `兄弟 margin` 合并
- 只有上下会重叠 左右从来不重叠。
- 左右如果是子元素也不会合并。

#### 如何阻止合并

- 父子合并用 `padding / border` 挡住（只要有东西隔住就行了）
- （合并的前提是什么都没有，如果保持合并的情况下还加一个东西 做不到 所以倒推出来的这个）
- 父子合并用 `overflow: hidden` 挡住
- （不知道为什么 所见即所得）
- （还有很多种取消合并的方式，现在先不说，有个印象即可）
- 父子合并用 `display: flex` ，不知道为什么
- 兄弟合并是**符合预期**的
- 兄弟合并可以用 `inline-block` 消除
- 总之要一条一条死记
- 而且 `CSS` 的属性逐年增多，每年都可能有新的、

> `CSS` 不成交
>
> 容易出错的不写，最后留下来的就是不容易出错的

![4](https://img.onmicrosoft.cn/2022-06-16/7.png)

![4](https://img.onmicrosoft.cn/2022-06-16/6.png)

### 基本单位

#### 长度单位

- `px` 像素
- `em` 相对于自身 `font-size` 的倍数
  - [em 是 font-size 乘于的倍数](http://js.jirengu.com/ZAPUG/edit)
- 百分数
- 整数
- `rem` : 等你把 `em` 滚瓜烂熟了再问 `rem`
- `vw` 和 `vh`
- 其他长度单位都用得很少，不用了解

#### 颜色

- 十六进制 `#FF6600` 或者 `#F60`
  - 相同的可以缩写一下
  - 最后也支持加一层 `α 通道` ，兼容性不确定（
- `RGBA` 颜色 `rgb(0,0,0)` 或者 `rgba(0,0,0,1)`
  - 全透明：`transparent`
- `hsl` 颜色 `hsl(360, 100%, 100%)`
  - 色相（赤橙黄绿青蓝紫）
  - 饱和度（鲜艳程度）
  - 亮度
  - 最后也支持加一层 `α 通道` ，兼容性不确定（
- 浏览器会自动填充背景色

简单的单位练习：http://js.jirengu.com/ZAPUG/edit