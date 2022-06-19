---
title: 饥人谷前端 | CSS Grid 布局
tags: [CSS]
description: 本节课主要学习了<br>CSS Grid 布局
date: 2022-06-17 15:39:17
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### 二维布局用 Grid

以下内容来自 CSS Tricks

Grid 也分 container 和 items
分别记忆

成为 container

![11](https://img.onmicrosoft.cn/2022-06-19/11.png)

```CSS
.container {
    display: grid | inline-grid;
}
```

行和列
![12](https://img.onmicrosoft.cn/2022-06-19/12.png)
```CSS
.container {
    grid-template-columns: 40px 50px auto 50px 40px;
    grid-template-rows: 25% 100px auto;
}
```

给每条线起名字，方便后续选择

![13](https://img.onmicrosoft.cn/2022-06-19/13.png)
![14](https://img.onmicrosoft.cn/2022-06-19/14.png)

起名有啥用

- item 可以设置范围

![15](https://img.onmicrosoft.cn/2022-06-19/15.png)

```CSS

.item-a {
grid-column-start: 2;
grid-column-end: five;
grid-row-start: row1-start;
grid-row-end: 3;
}
```

fr - free space 巧记：份

![16](https://img.onmicrosoft.cn/2022-06-19/16.png)

```css
.container {
    grid-template-columns: 1fr 1fr 1fr;
}
```

```css
.container {
    grid-template-columns: 1fr 50px 1fr 1fr;
}
```

分区 grid-template-areas 

![17](https://img.onmicrosoft.cn/2022-06-19/17.png)
![18](https://img.onmicrosoft.cn/2022-06-19/18.png)

```css
.item-a {
    grid-area: header;
}
.item-b {
    grid-area: main;
}
.item-c {
    grid-area: sidebar;
}
.item-d {
    grid-area: footer;
}
.container {
    display: grid;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: auto;
    grid-template-areas: 
        "header header header header"
        "main main . sidebar"
        "footer footer footer footer";
}
```

空隙 gap

![19](https://img.onmicrosoft.cn/2022-06-19/19.png)

```css
.container {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
}
```

### 实践
#### 布局
- Grid 尤其适合不规则布局
#### 经验
- 等到 Grid 普及了，前端对 CSS 的要求会进一步降低
- 目前你简单尝试一下 Grid 就可以了

![12](https://img.onmicrosoft.cn/2022-06-17/12.png)

http://js.jirengu.com/tijuk/edit

淘宝电商页面布局模仿
- http://js.jirengu.com/kabok/edit?html,css,output
