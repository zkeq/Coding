---
title: 寒假提升 ｜ Day10 CSS 第八部分
tags:
  - 寒假提升
categories:
  - 寒假提升
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
date: 2022-12-28 16:24:40
---

<script data-pjax async src="https://npm.onmicrosoft.cn/mini-sandbox@0.3.11"></script>

{% tabs homework %}

<!-- tab 今日打卡任务 -->

### 打卡作业

```
# Day10 作业布置

## 一. 完成课堂所有的代码
  * 边框可以不做

## 二. 说出为什么需要清除浮动以及如何清除浮动

## 三. 利用浮动完成如下布局结构（完成结构即可）(选做)
![image-20220408012538662](https://img.onmicrosoft.cn/2022-12-28/9_6XuwkNR.jpg)

## 四. 总结flex布局container和item的属性以及作用（重要）

## 五. 自己找3个案例练习
  * 案例一：其中用到元素定位
  * 案例二：其中用到浮动布局
  * 案例三：其中用到flex布局

```

![image-20220408012538662](https://img.onmicrosoft.cn/2022-12-28/7rK4qwKpt.jpg)

<!-- endtab -->

<!-- tab Day9参考答案 -->
### Day09 作业布置

#### 一. 完成课堂所有的代码

#### 二. 总结绝对定位的相对元素以及常见的解决方案

* 子绝父相
  * 子元素绝对定位、
  * 父元素相对定位

* 子绝父绝

  * 子元素绝对定位

  * 父元素绝对定位

* 子绝父固
  * 子元素绝对定位
  * 父元素固定定位

#### 三. 总结浮动常见的规则内容

- 元素一旦浮动后, 脱离标准流
  - 朝着向左或向右方向移动，直到自己的边界紧贴着包含块（一般是父元素）或者其他浮动元素的边界为止
  - 定位元素会层叠在浮动元素上面

- 如果元素是向左（右）浮动，浮动元素的左（右）边界不能超出包含块的左（右）边界
- 浮动元素之间不能层叠
  - 如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）
  - 如果水平方向剩余的空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止

- 浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出
  - 比如行内级元素、inline-block元素、块级元素的文字内容
  - 行内级元素、inline-block元素浮动后，其顶部将与所在行的顶部对齐

#### 四. 通过浮动练习页面布局方案

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./reset.css">
  <style>
    .content {
      width: 1211px;
      margin: 0 auto;
      /* background-color: #f00; */
      height: 1000px;
    }

    .wrapper {
      margin-right: -10px;
    }

    .item {
      float: left;
      width: 234px;
      margin-bottom: 10px;
      margin-right: 10px;
    }

    .item.left {
      height: 614px;
      background-image: url(../images/小米01.webp);
    }

    .item.right {
      height: 302px;
    }

    /*  */
    .items {
      background-color: #fff;
      display: block;
      width: 234px;
      height: 302px;
      /* margin: 0 10px; */
      text-align: center;
      box-sizing: border-box;
    }

    .items:hover {
      box-shadow: 0 2px 20px 5px rgba(0, 0, 0, .1)
    }

    .items img {
      width: 160px;
      height: 160px;
    }

    .items .title {
      margin-top: 14px;
      color: #333;
    }

    .items .desc {
      color: rgb(105, 97, 97);
      margin-top: 8px;

      /* 单行显示省略号 */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .items .price {
      margin-top: 14px;
      font-size: 14px;
    }

    .items .new-price {
      color: #ff6700;
    }

    .items .old-price {
      color: #999;
      text-decoration: line-through;
      margin-left: 5px;
    }
  </style>
</head>

<body>

  <div class="content">
    <div class="wrapper">
      <div class="item left"></div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>
      <div class="item right">
        <a class="items" href="https://www.mi.com/xiaomipad5pro" target="_blank">
          <img src="../images/xiaomi01.webp" alt="">
          <h3 class="title">小米平板5 Pro</h3>
          <p class="desc">
            全新12代英特尔处理器，CNC一体精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡
          </p>
          <div class="price">
            <span class="new-price">2399元起</span>
            <span class="old-price">2499元</span>
          </div>
        </a>
      </div>


    </div>
  </div>

</body>

</html>
~~~

#### 五. 完成下面的案例练习

![image-20220406230906517](https://img.onmicrosoft.cn/2022-12-28/vxNCMFHAP.jpg)

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="icon " href="../icon/iconfont.ttf">
  <link rel="stylesheet" href="../icon/iconfont.css">
  <style>
    /* 重置样式 */
    a,
    i {
      text-decoration: none;
      color: #333;
    }

    .content {
      width: 275px;
      margin: 0 auto;
    }

    .content .item {
      display: block;
      position: relative;
      border-radius: 6px;
      overflow: hidden;
    }

    .content .item img {
      width: 275px;
      height: 154px;
      vertical-align: top;
    }

    .item .bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 27px;
      line-height: 27px;
      font-size: 12px;
      color: #fff;
    }

    .bottom .icons {
      position: relative;
      top: 1px;
      padding-left: 8px;
      color: #fff;
    }

    .bottom .icon_middle {
      padding-left: 10px;
      color: #fff;
    }

    .bottom .icon_right {
      position: absolute;
      right: 10px;
    }

    .text_bottom {
      display: block;
      margin: 8px 0;
      font-weight: 700;

    }

    .up {
      color: rgb(172, 163, 163);

    }

    .icon_up {
      position: relative;
      top: 1px;
      font-size: 16px;
      color: rgb(172, 163, 163);
    }

    .up>span {
      font-size: 14px;
    }
  </style>
</head>

<body>
  <div class="content">
    <a class="item" href="">
      <img src="../images/bilibili.webp" alt="">
      <div class="bottom">
        <i class="iconfont icons">&#xe671;
        </i>
        <span class="icon_left">33.6万</span>
        <i class="iconfont icon_middle">&#xf01b8;</i>
        <span class="icon_midle">3.4万</span>
        <span class="icon_right">01:50:38</span>
      </div>
    </a>
    <span class="text_bottom">三个视频看懂汉武帝的一生：汉匈决战来临</span>
    <div class="up">
      <i class="iconfont icon_up">&#xe665;</i>
      <span>唠点历史</span>
      <span>3-30</span>
    </div>
  </div>
</body>

</html>
~~~

<!-- endtab -->
{% endtabs %}


>务必下载！！
>
>今日的代码和讲义 以及思维导图：[【点击此链接下载 Day10.zip】](https://share.onmicrosoft.cn/5fa9z3zqt)


<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-16#/7182209795125215287"></iframe>
<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-17"></iframe>

## 大纲

![](https://img.onmicrosoft.cn/2022/12/28/c6dceafe-a562-4819-b7b0-be3ae19432de.png)

## 一. 浮动float

### 1.1. 两个案例

```css
* 自己做一下
* 第二个边框不要现在必须学会
```

#### 浮动练习三

- 浮动布局方案:
  - 实现京东页面下面的布局

![](https://img.onmicrosoft.cn/2022/12/28/c2d2072b-3547-42d5-a750-f0f6b158ddb0.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .content {
      width: 1190px;
      margin: 0 auto;
      background-color: #f00;
      height: 1000px;
    }

    .wrapper {
      margin-right: -10px;
    }

    .item {
      width: 290px;
      background-color: purple;
      margin-bottom: 10px;

      float: left;
      margin-right: 10px;
    }

    .item.left {
      height: 370px;
    }

    .item.right {
      height: 180px;
    }
  </style>
</head>
<body>
  
  <div class="content">
    <div class="wrapper">
      <div class="item left"></div>
      <div class="item left"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
    </div>
  </div>

</body>
</html>
```


{% raw %}

<div id="code-1"></div>
<script>
  new MiniSandbox({
    el: '#code-1',
    defaultConfig: {
      height: '500px',
      autoRun: true,
      autoRunInterval: 300,
      editorRange: '55%',
      draggable: true,
      direction: 'column'
    },
    files: {
      'index.html': {
        defaultValue: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .content {
      width: 1190px;
      margin: 0 auto;
      background-color: #f00;
      height: 1000px;
    }

    .wrapper {
      margin-right: -10px;
    }
    
    .item {
      width: 290px;
      background-color: purple;
      margin-bottom: 10px;
    
      float: left;
      margin-right: 10px;
    }
    
    .item.left {
      height: 370px;
    }
    
    .item.right {
      height: 180px;
    }
  </style>
</head>
<body>

  <div class="content">
    <div class="wrapper">
      <div class="item left"></div>
      <div class="item left"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
    </div>
  </div>
  
  </body >
</html>`,
      }
    },
  })
</script>
{% endraw %}


#### 浮动练习四

- 浮动布局方案:
  - 实现考拉页面下面的布局

![](https://img.onmicrosoft.cn/2022/12/28/bfe1ad95-1445-4662-99d9-70e2177100ef.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .content {
      width: 1100px;
      margin: 0 auto;
      height: 800px;
      background: #ccc;
    }

    .box {
      /* margin-left: 1px; */
    }

    .item {
      width: 221px;
      height: 168px;
      background: orange;
      color: #fff;

      float: left;

      border: 1px solid #000;
      margin-right: -1px;

      box-sizing: border-box;
    }

    .item.first {
      width: 220px;
    }
  </style>
</head>
<body>
  
  <div class="content">
    <div class="box">
      <div class="item first">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </div>

</body>
</html>
```


{% raw %}

<div id="code-2"></div>
<script>
  new MiniSandbox({
    el: '#code-2',
    defaultConfig: {
      height: '500px',
      autoRun: true,
      autoRunInterval: 300,
      editorRange: '55%',
      draggable: true,
      direction: 'column'
    },
    files: {
      'index.html': {
        defaultValue: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .content {
      width: 1100px;
      margin: 0 auto;
      height: 800px;
      background: #ccc;
    }

    .box {
      /* margin-left: 1px; */
    }
    
    .item {
      width: 221px;
      height: 168px;
      background: orange;
      color: #fff;
    
      float: left;
    
      border: 1px solid #000;
      margin-right: -1px;
    
      box-sizing: border-box;
    }
    
    .item.first {
      width: 220px;
    }
  </style>
</head>
<body>

  <div class="content">
    <div class="box">
      <div class="item first">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </div>
  
  </body >
</html>`,
      }
    },
  })
</script>
{% endraw %}

### 1.2. 清除浮动

```css
伪元素:after
```

#### 浮动的问题 – 高度塌陷

- 由于浮动元素脱离了标准流，变成了脱标元素，所以`不再向父元素汇报高度`
  - 父元素`计算总高度`时，就`不会计算浮动子元素的高度`，导致了`高度坍塌`的问题
- 解决父元素高度坍塌问题的过程，一般叫做清浮动(清理浮动、清除浮动)
- 清浮动的目的是
  - 让`父元素计算总高度的时候`，把`浮动子元素的高度算进去`
- 如何清除浮动呢? 使用`clear`属性

#### CSS属性 - clear

- `clear`属性是做什么的呢?
  - `clear` 属性可以指定一个元素是`否必须移动`(清除浮动后)`到在它之前的浮动元素`下面;
- `clear`的常用取值
  - `left`:要求元素的顶部低于之前生成的所有左浮动元素的底部
  - `right`:要求元素的顶部低于之前生成的所有右浮动元素的底部
  - `both`:要求元素的顶部低于之前生成的所有浮动元素的底部
  - `none`:默认值，无特殊要求
- 那么我们可以利用这个特性来清除浮动.

#### 清除浮动的方法

- 事实上我们有很多方法可以清除浮动
- **方法一**: 给父元素设置固定高度
  - 扩展性不好(不推荐)
- **方法二**: 在父元素最后增加一个空的块级子元素，并且让它设置`clear: both`
  - 会`增加很多无意义的空标签`，维护麻烦
  - 违反了结构与样式分离的原则(不推荐)
- **方法三**: 给父元素添加一个伪元素
  - `推荐`;
  - 编写好后可以轻松实现清除浮动;

#### 方法三 – 伪元素清除浮动

- 给父元素增加`::after伪元素`
  - 纯CSS样式解决，结构与样式分离(推荐)

```css
/* 父级元素 */
.clearfix:after{
  content: '';
  display: block;
  clear: both;
  /* 浏览器兼容问题 */
  visibility: hidden;
  height: 0;
}
```

![](https://img.onmicrosoft.cn/2022/12/28/ff720e8c-7eec-4e5d-9059-4d4e3b669d04.png)

### 1.3. 多种布局对比

* 标准流
* 定位
* 浮动

![](https://img.onmicrosoft.cn/2022/12/28/94cabcb2-d702-4b5b-a394-8e969721b7ce.png)

## 二. flex布局

### 2.1. 认识flex布局

#### 认识flexbox

- Flexbox翻译为弹性盒子:
  - `弹性盒子`是一种用于`按行或按列布局元素`的`一维布局方法` ;
  - 元素可以`膨胀以填充额外的空间`,` 收缩以适应更小的空间`;
  - 通常我们使用Flexbox来进行布局的方案称之为`flex布局`(flex layout);
- flex布局是目前web开发中使用最多的布局方案:
  - flex 布局(Flexible 布局，弹性布局);
  - 目前特别在`移动端`可以说已经完全普及;
  - 在`PC端`也几乎已经完全普及和使用, 只有`非常少数的网站依然在用浮动来布局`;
- 为什么需要flex布局呢?
  - 长久以来，CSS 布局中唯一可靠且跨浏览器兼容的`布局工具只有 floats 和 positioning`。
  - 但是这两种方法本身`存在很大的局限性`, 并且他们用于布局实在是无奈之举;

#### 原先的布局存在的痛点

- 原来的布局存在哪些痛点呢? 举例说明:

  - 比如在父内容里面`垂直居中一个块内容`。

    ![](https://img.onmicrosoft.cn/2022/12/28/674d4e1e-7841-490c-9cdb-de1051540895.png)

  - 比如使容器的`所有子项等分可用宽度/高度`，而`不管有多少宽度/高度可用`。

  - 比如使`多列布局中的所有列采用相同的高度`，即使`它们包含的内容量不同`。

#### flex布局的出现

- 所以长久以来, 大家非常期待一种真正可以用于对元素布局的方案: 于是flex布局出现了;
  - Nature and nature's laws lay hid in night; God said "Let `Newton` be" and all was light.
  - 自然与自然的法则在黑夜隐藏，于是上帝说，让`牛顿`出现吧!于是世界就明亮了起来.
- flexbox在使用时, 我们最担心的是它的兼容性问题:
  - 我们可以在`caniuse`上查询到具体的兼容性

![](https://img.onmicrosoft.cn/2022/12/28/f0879d7f-123e-4af7-a0ac-c6ce9e20f3ce.png)

### 2.2. flex布局重要的概念

```css
* flex container
* flex item
* main axis/cross axios
* main start/main end/cross start / cross end
```

- 两个重要的概念:
  - 开启了 flex 布局的元素叫 `flex container`
  - flex container 里面的直接子元素叫做 `flex item`
- 当flex container中的子元素变成了flex item时, 具备一下特点:
  - flex item的布局将`受flex container属性的设置来进行控制和布局`;
  - flex item`不再严格区分块级元素和行内级元素`;
  - flex item `默认情况下是包裹内容的`, `但是可以设置宽度和高度`;
- 设置 display 属性为 flex 或者 inline-flex 可以成为 flex container
  - `flex`: flex container 以 block-level 形式存在
  - `inline-flex`: flex container 以 inline-level 形式存在

![](https://img.onmicrosoft.cn/2022/12/28/3b1f4c0c-656f-4dbd-a87c-fa08ada69cfb.png)

#### flex布局的模型

![](https://img.onmicrosoft.cn/2022/12/28/8b3fa2c8-4de5-4481-b7fd-5744aa3ce4bb.png)

### 2.3. flex container中的属性

```CSS
◼ 应用在 flex container 上的 CSS 属性
* flex-flow       * flex-direction
* flex-wrap       * flex-flow
* justify-content * align-items
* align-content
◼ 应用在 flex items 上的 CSS 属性 
* flex-grow       * flex-basis
* flex-shrink     * order
* align-self 			* flex
```

#### `flex-direction`

- flex items 默认都是沿着 main axis(主轴)从 main start 开始往 main end 方向排布
  - `flex-direction` 决定了 `main axis` 的方向，有 4 个取值
  - `row`(默认值)、`row-reverse`、`column`、`column-reverse`

![](https://img.onmicrosoft.cn/2022/12/28/af3cb77e-e613-42af-8f48-39e07dd5f533.png)

#### `flex-wrap`

- flex-wrap 决定了 flex container 是单行还是多行
  - `nowrap`(默认):单行
  - `wrap`:多行
  - `wrap-reverse`:多行(对比 wrap，cross start 与 cross end 相反)

![](https://img.onmicrosoft.cn/2022/12/28/f0b4e324-be6a-4a52-be53-152d25c68865.png)

#### `flex-flow`

- `flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 的简写。
  - 顺序任何, 并且都可以省略;

![](https://img.onmicrosoft.cn/2022/12/28/3dbb8139-d2bf-48c3-8d2d-ba68351139d2.png)

#### `justify-content`

- justify-content 决定了 flex items 在 main axis 上的对齐方式
  - `flex-start`(默认值):与 main start 对齐
  - `flex-end`:与 main end 对齐
  - `center`:居中对齐
  - `space-between`:
    ✓ flex items 之间的距离相等
    ✓ 与 main start、main end两端对齐
  - `space-around`:
    ✓ flex items 之间的距离相等
    ✓ flex items 与 main start、main end 之间的距离是 flex items 之间距离的一半
  - `space-evenly`:
    ✓ flex items 之间的距离相等
    ✓ flex items 与 main start、main end 之间的距离 等于 flex items 之间的距离

![](https://img.onmicrosoft.cn/2022/12/28/7d8bec7c-2aa3-49c0-a01b-9ea20ab03221.png)

#### `align-item`

- align-items 决定了 flex items 在 cross axis 上的对齐方式
  - `normal`:在弹性布局中，效果和stretch一样
  - `stretch`:当 flex items 在 cross axis 方向的 size 为 auto 时，会 自动拉伸至填充 flex container
  - `flex-start`:与 cross start 对齐
  - `flex-end`:与 cross end 对齐 
  - `center`:居中对齐
  - `baseline`:与基准线对齐

![](https://img.onmicrosoft.cn/2022/12/28/9630c86a-1402-4ce9-aae8-ebb419b4b4b9.png)

#### `align-content`

- align-content 决定了多行 flex items 在 cross axis 上的对齐方式，用法与 justify-content 类似
  - `stretch`(默认值):与 align-items 的 stretch 类似
  - `flex-start`:与 cross start 对齐
  - `flex-end`:与 cross end 对齐
  - `center`:居中对齐
  - `space-between`:
    ✓ flex items 之间的距离相等
    ✓ 与 cross start、cross end两端对齐
  - `space-around`:
    ✓ flex items 之间的距离相等
    ✓ flex items 与 cross start、cross end 之间的距离是 flex items 之间距离的一半
  - `space-evenly`:
    ✓ flex items 之间的距离相等
    ✓ flex items 与 cross start、cross end 之间的距离 等于 flex items 之间的距离

![](https://img.onmicrosoft.cn/2022/12/28/ea5491df-146d-4f77-9fb7-31570b3d725c.png)

### 2.4. flex item中的属性

```CSS
* order        * align-self
* flex-grow    * flex-shrink
* flex-basis   * flex
```

#### flex-item属性 - `order`

- order 决定了 flex items 的排布顺序
  - 可以设置`任意整数`(正整数、负整数、0)，`值越小就越排在前面`
  - 默认值是 0

![](https://img.onmicrosoft.cn/2022/12/28/3e0bebfd-1879-4a68-9bca-bf567f90a97a.png)

#### flex-item属性 - `flex items`

- flex items 可以通过 align-self 覆盖 flex container 设置的 align-items
  - `auto`(默认值):遵从 flex container 的 align-items 设置
  - `stretch`、`flex-start`、`flex-end`、`center`、`baseline`，效果跟 `align-items` 一致

![](https://img.onmicrosoft.cn/2022/12/28/a8d04dff-2a00-4178-bce7-c2ae69c4d62c.png)

#### flex-item属性 - `flex-grow`

- flex-grow 决定了 flex items 如何扩展(拉伸/成长)
  - 可以设置`任意非负数字(正小数、正整数、0)，默认值是 0`
  - 当 flex container 在 main axis 方向上`有剩余 size 时`，`flex-grow 属性才会有效`
- 如果所有 flex items 的 flex-grow `总和 sum 超过 1`，每个 flex item 扩展的 size 为
  - flex container 的剩余 size * flex-grow / sum

-  flex items 扩展后的最终 size 不能超过 max-width\max-height

![](https://img.onmicrosoft.cn/2022/12/28/c4917b43-2e1e-4d56-aeb3-3eaeb91b374b.png)

#### flex-item属性 - `flex-shrink`

- flex-shrink 决定了 flex items 如何收缩(缩小)
  - 可以设置`任意非负数字(正小数、正整数、0)，默认值是 1`
  - 当 flex items 在 main axis 方向上`超过了 flex container 的 size，flex-shrink 属性才会有效`
- 如果所有 flex items 的 flex-shrink 总和超过 1，每个 flex item 收缩的 size为
  - flex items 超出 flex container 的 size * 收缩比例 / 所有 flex items 的收缩比例之和
- flex items 收缩后的最终 `size` 不能小于` min-width\min-height`

#### flex-item属性 - `flex-basis`

- flex-basis 用来设置 flex items 在 main axis 方向上的 base size
  - `auto`(默认值)、`具体的宽度数值`(100px)
- 决定 flex items 最终 base size 的因素，从优先级高到低
  - max-width\max-height\min-width\min-height
  - flex-basis
  - width\height
  - 内容本身的 size

#### flex-item属性 - `flex属性`

- flex 是 flex-grow || flex-shrink || flex-basis 的简写,flex 属性可以指定1个，2个或3个值。

![](https://img.onmicrosoft.cn/2022/12/28/d99da1dc-19a8-42e4-aa2c-c5d35cc715ec.png)

- 单值语法: 值必须为以下其中之一:

  - 一个无单位数(`<number>`): 它会被当作`<flex-grow>`的值。
  - 一个有效的宽度(width)值: 它会被当作 `<flex-basis>`的值。
  - 关键字none，auto或initial.

- 双值语法: 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值。 

  - 第二个值必须为以下之一:

    ✓ 一个无单位数:它会被当作` <flex-shrink> `的值。

    ✓ 一个有效的宽度值: 它会被当作 `<flex-basis> `的值。

- 三值语法:

  - 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow> `的值。
  - 第二个值必须为一个无单位数，并且它会被当作` <flex-shrink>`的值。
  - 第三个值必须为一个有效的宽度值， 并且它会被当作` <flex-basis> `的值。

### 2.5. flex布局中justify-content最后一行布局问题

![](https://img.onmicrosoft.cn/2022/12/28/0fe30d0a-bd79-4a63-8fb1-a34289b85856.png)
