---
title: 饥人谷前端 | CSS float 布局
tags: [CSS]
description: 本节课主要学习了<br>CSS float 布局
date: 2022-06-16 20:56:55
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### float 布局

#### 步骤

- 子元素上加 `float: left 或 width`
- 在父元素 上 加 `.clearfix` **（忘了加被我看到你就完了）**
  - 加这个的原因是因为 如果 float 布局的话，就没有东西把父级元素撑大了，至于为什么这么写 不知道

```css
/* 父级元素 */
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
```

![10](https://img.onmicrosoft.cn/2022-06-16/10.png)

#### 经验

- 有经验者会留一些空间或者最后一个不设 `width`
- 不需要做响应式，因为手机上没有 `IE`，而这个布局是专门给 `IE` 准备的
- IE 6/7 存在双倍 `margin bug`，解决办法有两个
  - 一是将错就错，针对 IE 6/7 把 `margin` 减半
    - `_margin-left: 5px;` // 只有 IE 会认得 加 `_` 或者 `*` 号
  - 二是神来一笔，再加一个 `display: inline-block`
  - 为什么可以这样？你问我，我问谁？

```html
http://js.jirengu.com/zakad/edit
```

#### 实践

##### 不同布局

- 用 `float` 做两栏布局（如顶部条）[DONE]
- 用 `float` 做三栏布局（如内容区） [DONE]
- 用 `float` 做四栏布局（如导航）[DONE]
- 用 `float` 做平均布局（如产品展示区）[DONE]
  - 如果要做平均布局 那么只要在 布局中间加一个 x 图层 多余的右边距是一个每个 y 的负值
- 曾经淘宝的前端发明了双飞翼布局，不要学，已过时

##### 经验

- 加上头尾，即可满足所有 `PC` 页面需求
- 手机页面傻子才用 `float`
- `float` 要程序员自己计算宽度，不灵活
- `float` 用来应付 `IE` 足矣

> 有时候在做项目的时候 `border` 会干扰你的像素
>
> 那么就换用 `outline` （不会干扰，但是这个是在外面的，所以有时候看不见）

> 如果发现图片下面有多余的东西 
> 
> 那么就用 `vertical-align: top / middle`; 来去除多余的东西

> 如果你是个 块级元素 他们的宽度都是固定的，那么左边右边 margin auto 就会让你居中
