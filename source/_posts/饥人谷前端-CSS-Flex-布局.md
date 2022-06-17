---
title: 饥人谷前端 | CSS Flex 布局
tags: [CSS]
description: 本节课主要学习了<br>CSS Flex 布局
date: 2022-06-17 09:52:26
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
### flex 布局

#### 教程（来自 CSS Tricks）

##### 容器 container 的样式

让一个元素变成 flex 容器

```CSS
.container {
    display: flex; /* 会另起一行的感觉）
    /* or 
    display: inline-flex （行内的弹性盒）
    */
}
```

改变 items 流动方向（主轴）

```CSS
.container {
    flex-direction: row | row-reverse | column | colum-reverse;
    /* 从左到右 从右到做 从上往下 从下往上 */
    /*  默认是 row  */
}
```

改变折行

```CSS
.container {
    flex-wrap: nowarp | warp | wrap-reverse;
    /* 不换行 换行 最后一个基本没什么用处 */
    /*  默认是 nowarp  */
}
```

主轴对齐方式

默认主轴是横轴
除非你改变了 flex-direction 方向
```CSS
.container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    /*  让内容往前  往后 居中  */
}
```

次轴对齐

默认次轴是横轴

```CSS
.container {
    align-items: stretch | flex-start | flex-end | center | baseline;
    /* 怎么在上下方向上安排他们的对齐方式 */
    /*  stretch 拉到最长的一样高 */
}
```

多行内容
如何分布

```CSS
.container {
    align-content: flex-start | flex-end | center | stretch | space-between | space-around;
    /*  基本不用 用到的时候再说  */
}
```

##### flex item 有哪些属性

item 上加 order

- 数值越大 表示优先级越低
- 如果不写的话 默认的 `order` 为 `0`
- 从小到大排列 可以是负数

item 上面加 flex-grow

- 控制自己如何长胖
- 如果是 `0` 的话就是不长胖
- 做导航一般是 `0 1 0`
  - 但是 `0` 可以不写，也就是说多余的给 `2` 号

flex-shrink 控制如何变瘦

- 一般写 `flex-shrink: 0` 防止变瘦，默认是 `1`
- 要加原始宽度 只有不够的时候才会按照这个规则来缩
- 一般来说只让内容区域缩小 `logo` 和 `头像` 一般不缩小

flex-basis 控制基准宽度

- 默认是 auto

flex: flex-grow flex-shrink flex-basis

- 缩写用空格隔开
- flex: 1 0 1
  - 要么写一个 要么写 3 个
  - 详情见 MDN

align-self 定制 align-items

- 针对单个子元素 可以和其他元素不一样

##### 重点

记住这些代码

- display: flex
- flex-direction: row / column
- flex-warp: warp
- just-content: center / space-between
- align-items: center
- 工作中基本只用这些

> 补充　CSS 选择器
> `.item.first-child` 第一个
> `.item.nth-child(2)` 第 n 个
> `.item.last-child` 最后一个

> `flex: 1` 为设置首个属性为 `0`
>
> `flex: auto` 为将原本的宽度设置为首个属性

> `justify-content: space-between;`
> `margin-left: auto;`
> 这两种方法都可以让元素靠右


- 把教程过一遍，然后忘掉
- 完成 Flex 青蛙游戏
- 开始使用 flex！