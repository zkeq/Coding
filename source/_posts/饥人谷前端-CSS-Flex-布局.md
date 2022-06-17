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

容器 container 的样式

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
    /*  默认是 row  */
}
```

改变折行

```CSS
.container {
    flex-wrap: nowarp | warp | wrap-reverse;
    /*  默认是 nowarp  */
}
```

主轴对齐方式

默认主轴是横轴
除非你改变了 flex-direction 方向
```CSS
.container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

次轴对齐

默认次轴是横轴

```CSS
.container {
    align-items: stretch | flex-start | flex-end | center | baseline;
}
```

> `flex: 1` 为设置首个属性为 `0`
>
> `flex: auto` 为将原本的宽度设置为首个属性


- 把教程过一遍，然后忘掉
- 完成 Flex 青蛙游戏
- 开始使用 flex！