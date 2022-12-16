---
title: 寒假提升 ｜ Day4 CSS 第二部分
tags:
  - 寒假提升
categories:
  - 寒假提升
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
date: 2022-12-16 00:15:16
---


{% tabs homework %}

<!-- tab 今日打卡任务 -->

#### 今日作业
```js
- 一. 完成课堂所有代码（总结、整理）
- 二. 具体说明text-align居中的条件
- 三. line-height为什么可以让文字居中？
- 四. 总结目前所学过的所有选择器？思考它们的应用场景。
- 五. 预习结构伪类的使用方法。
- 六. 使用所学的HTML、CSS知识查找一个案例练习
```
<!-- endtab -->

<!-- tab Day3参考答案 -->
#### Day3参考答案

##### 一. 说说你对元素语义化的理解

元素语义化就是用正确的元素做正确的事情。虽然在理论上，所以的html元素都可以通过css样式实现相同的事情，但是这么做会使事情复杂化，所以我们需要元素语义化来降低复杂度。

元素语义化在我们实际的开发中有很多好处，比如：

* 提高代码的阅读性和可维护性;
* 减少coder之间的沟通成本;
* 能让语音合成工具正确识别网页元素的用途，以便做出正确的反应
* 有利于SEO(Search Engine Optimization)



##### 二. 说说你对SEO的理解

SEO就是搜索引擎优化(Search Engine Optimization)，SEO通过了解搜索引擎的运行规则来调整网站，以提高网站的曝光度,以及网站的排名。



Google 搜索引擎的工作流程主要分为三个阶段：

**抓取**：Google 会使用名为“抓取工具”的自动程序搜索网络，以查找新网页或更新后的网页。Google 会将这些网页的地址（即网址）存储在一个大型列表中，以便日后查看。我们会通过许多不同的方法查找网页，但主要方法是跟踪我们已知的网页中的链接。

**编入索引**：Google 会访问它通过抓取得知的网页，并会尝试分析每个网页的主题。Google 会分析网页中的内容、图片和视频文件，尝试了解网页的主题。这些信息存储在 Google 索引中，而 Google 索引是一个存储在海量计算机中的巨大数据库。

**呈现搜索结果**：当用户在 Google 上进行搜索时，Google 会尝试确定最优质的搜索结果。“最佳”结果取决于许多因素，包括用户的位置、语言、设备（桌面设备或手机）以及先前用过的搜索查询。例如，在用户搜索“自行车维修店”后，Google 向巴黎用户显示的答案与向香港用户显示的答案有所不同。支付费用不能提高网页在 Google 搜索结果中的排名，网页排名是完全依靠算法完成的。



##### 三. 什么是字符编码？

计算机只认识0和1，但我们各个国家的人都需要在计算机上使用各自的文字，为了在计算机上也能表示、存储和处理像文字、符号等等之类的字符，就必须将这些字符转换成二进制。

于是就出现了字符编码，字符编码将我们的自然语言编码成二进制给计算机看，然后再把这些二进制解码为自然语言给我们看。



##### 四. CSS编写样式的方式以及应用场景

css有三种常用的编写方式，分别是内联样式、内部样式表和外部样式表

* 内联样式的应用场景：在Vue的template中某些动态的样式会使用内联样式
* 内部样式表的应用场景：Vue开发中，每个组件都有一个style元素，使用的是内部样式表的方式，不过原理并不相同
* 外部样式表的应用场景：外部样式表是开发中最常用的方式，将所有css文件放在一个独立的文件夹中，然后通过link元素引入到需要的文件中.

* 也可以在index.css文件中通过 @import url(路径) 引入其他css样式



##### 五. 最常见的CSS样式以及作用

最常见的css样式有：

* font-size：设置文字大小
* color：设置前景色(颜色)
* background-color：设置背景色
* width：设置宽度
* height：设置高度



##### 六. 自行查找2个案例练习

根据之前学习的HTML元素和CSS样式找2个案例练习

* 案例一：登录案例

```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
    
        .content {
          background-color: lightblue;
          position: absolute;
          top: 50%;
          /* left: 0; */
          width: 100%;
          height: 400px;
          margin-top: -200px;
          /* overflow: hidden; */
        }
    
        .main {
          text-align: center;
          max-width: 600px;
          height: 400px;
          padding: 100px 0;
          margin: 0 auto;
        }
    
        .main h1 {
          font-size: 80px;
          font-weight: 2px;
        }
    
        form {
          padding: 20px 0;
        }
    
        form input {
          border: 1px solid white;
          display: block;
          margin: 0px auto 10px auto;
          padding: 10px;
          width: 220px;
          border-radius: 30px;
          font-size: 20px;
          font-weight: 300;
          text-align: center;
        }
    
        form input:hover {
          background-color: lightcyan;
        }
    
        form button {
          background-color: lightgreen;
          border-radius: 10px;
          border: 0;
          width: 100px;
          height: 50px;
          padding: 5px 10px
        }
    
        form button:hover {
          background-color: lightcoral;
        }
      </style>
    </head>
    
    <body>
      <div class="content">
        <div class="main">
          <h1>Welcome</h1>
          <form>
            <input type="text" name="" id="" placeholder="请输入账号">
            <input type="password" name="" id="" placeholder="请输入密码">
            <button type="submit">登&nbsp;&nbsp;录</button>
          </form>
        </div>
      </div>
    </body>
    
    </html>
```

* 案例二：网页布局案例

```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
    
        .header {
          width: 100%;
          height: 100px;
          text-align: center;
          background-color: lightblue;
        }
    
        .main {
          width: 100%;
          height: 600px;
          text-align: center;
          background-color: lightgreen;
        }
    
        .footer {
          width: 100%;
          height: 100px;
          background-color: lightcoral;
        }
      </style>
    </head>
    
    <body>
      <div class="header">
        网页头部信息
      </div>
      <div class="main">
        网页内容信息
      </div>
      <div class="footer">
        网页底部信息
      </div>
    </body>
    
    </html>
```



##### 七.颜色的表示方式

**1.颜色关键字:**,  例如,  red, yellow 等



**2.RGB有三种表示方式：**

所有颜色都是由三原色R(red)G(green)B(blue)组成，也就是通过调整这三个颜色不同的比例组合成其他的颜色，RGB各个原色的取值是0~255。

- RGB颜色可以通过以#为前缀的十六进制字符和函数（rgb()、rgba()）标记表示。

- **方式一：十六进制符号：**#RRGGBB[AA]

- - R（红）、G（绿）、B （蓝）和A （alpha）是十六进制字符（0–9、A–F）；A是可选的。

  - - 比如，#ff0000等价于#ff0000ff；

- **方式二：十六进制符号：**#RGB[A]

- - R（红）、G（绿）、B （蓝）和A （alpha）是十六进制字符（0–9、A–F）；

  - 三位数符号（#RGB）是六位数形式（#RRGGBB）的减缩版。

  - - 比如，#f09和#ff0099表示同一颜色。

  - 四位数符号（#RGBA）是八位数形式（#RRGGBBAA）的减缩版。

  - - 比如，#0f38和#00ff3388表示相同颜色。

- **方式三：函数符：** rgb[a](R, G, B[, A])

- - R（红）、G（绿）、B （蓝）可以是<number>（数字），或者<percentage>（百分比），255相当于100%。
  - A（alpha）可以是0到1之间的数字，或者百分比，数字1相当于100%（完全不透明）。


<!-- endtab -->
{% endtabs %}

>务必下载！！
>
>今日的代码和讲义 以及思维导图：[【点击此链接下载 Day04.zip】](https://share.onmicrosoft.cn/dnvslrhxu)


## 大纲


![](https://img.onmicrosoft.cn/2022/12/15/b9b7ef15-7cdb-4016-be3b-dbd31f3882a5.png)

## 一. CSS属性 - 文本

### 1.1. text-decoration (常用)

- `text-decoration` 用于设置文字的装饰线
  - `decoration` 是装饰/装饰品的意思;

- `text-decoration` 有如下常见取值: 
  - `none` :无任何装饰线
    - ✓ 可以去除 `a元素` 默认的下划线
  - `underline` :下划线
  - `overline` :上划线
  - `line-through` :中划线(删除线)

◼ a元素有下划线的本质是被添加了 `text-decoration` 属性

### 1.2. text-transform(了解)

- `text-transform` 用于设置文字的大小写转换
  - `Transform` 单词是使变形/变换(形变);
- `text-transform` 有几个常见的值:
  - `capitalize` :(使...首字母大写, 资本化的意思)将每个单词的首字符变为大写
  - `uppercase` :(大写字母)将每个单词的所有字符变为大写
  - ` lowercase` :(小写字母)将每个单词的所有字符变为小写
  - `none` :没有任何影响

◼ 实际开发中用 JavaScript代码转化的更多.

### 1.3. text-indent(一般)

- `text-indent`用于设置第一行内容的缩进
  - `text-indent: 2em;` 刚好是缩进2个文字

![](https://img.onmicrosoft.cn/2022/12/15/fb745ed3-7dce-4980-ad4a-675d00c9f03e.png)

### 1.4. text-align(重要)

* 案例: 文字的居中(字面理解)
* 案例: 图片的居中(MDN)
* 案例: div元素的居中(W3C inline-level)
  * 特性
  * 或者其他方法

> 也就是说 `text-align` 只能把行内元素居中
>
> 如果是块级别元素可以用 `margin: 0 auto;` 来对齐
>
> 或者使用 `inline-block` 来使用  `text-align`

- `text-align`: 直接翻译过来设置文本的对齐方式 ;
- `MDN`: 定义行内内容(例如文字)如何相对它的块父元素对齐;
- 常用的值
  - `left` :左对齐
  - `right` :右对齐
  - `center` :正中间显示
  - `justify` :两端对齐

![](https://img.onmicrosoft.cn/2022/12/15/fd646e51-731e-43e2-86f5-7b421e6b87da.png)

`text-align-last` ：`justify` 最后一行文字的排布

### 1.5. letter-word-spacing(一般)

- `letter-spacing`、`word-spacing`分别用于设置字母、单词之间的间距
  - 默认是0，可以设置为负数

## 二. CSS属性 - 字体

### 2.1. font-size(高度)

* `20px`; `2em`; `200%`

- `font-size` 决定文字的大小

- 常用的设置
  - 具体数值+单位
    - ✓ 比如 `100px`
    - ✓  也可以使用 ` 单位` (不推荐):1em代表100%，2em代表200%，0.5em代表50%
  - 百分比
    -  ✓ 基于父元素的 `font-siz e计算，比如50%表示等于父元素font-size的一半

### 2.2. font-family(重要,不过一般仅设置一次)

- `font-family` 用于设置
  - 可以设置1个或者多个字体名称;
  - 浏览器会选择列表中第一个该计算机上有安装的字体;
  - 或者是通过 `@font-face` 指定的可以直接下载的字体。

![](https://img.onmicrosoft.cn/2022/12/15/a78093cb-0455-4e18-9dc9-bbf012c7e78f.png)

#### font-weight(重要)

- font-weight用于设置文字的粗细(重量)
- 常见的取值:
  - `100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900` :每一个数字表示一个重量 
  - `normal :等于 `400`
  - `bold :等于 `700`
- `strong`、`b`、`h1~h6`等标签的 `font-weight` 默认就是bold

### 2.3. font-style(一般)

- `font-style` 用于设置文字的常规、斜体显示
  - `normal`:常规显示
  - `italic`(斜体):用字体的斜体显示(通常会有专门的字体)
  - `oblique`(倾斜):文本倾斜显示(仅仅是让文字倾斜)
- `em`、`i`、`cite`、`address`、`var`、`dfn` 等元素的 `font-style` 默认就是 `italic`

![](https://img.onmicrosoft.cn/2022/12/15/198de840-22f8-4e86-86ca-48358e05efb1.png)

### 2.4. font-varient(了解)

* 小写字母以大写显示, 但是高度保持小写的高度

- `font-variant` 可以影响小写字母的显示形式
  - `variant` 是变形的意思;

- 可以设置的值如下
  - `normal` :常规显示
  - `small-caps` :将小写字母替换为缩小过的大写字母

### 2.5. line-height(常用)

* 两个基线(baseline)距离
* 一行文本 -> line-height
* 行高 - 文本高度  = 行距

- `line-height` 用于设置文本的行高
  - 行高可以先简单理解为一行文字所占据的高度

![](https://img.onmicrosoft.cn/2022/12/15/7c795914-69d5-4bbd-97d3-3ea786794c5e.png)

![](https://img.onmicrosoft.cn/2022/12/15/24e55536-5719-4f71-aaec-bbedc0ae1d4a.png)

- 行高的严格定义是: `两行文字基线(baseline)之间的间距`
- 基线(baseline): `与小写字母x最底部对齐的线`

![](https://img.onmicrosoft.cn/2022/12/15/03f9e55c-82f2-4e40-a5c9-cd1ae074113e.png)

- 注意区分 `height` 和 `line-height` 的区别
  - `height` :元素的整体高度
  - `line-height` :元素中每一行文字所占据的高度
- 应用实例: 假设 `div` 中只有一行文字，如何让这行文字在div内部垂直居中
  - 让 `line-height` 等同于 `height`

![](https://img.onmicrosoft.cn/2022/12/15/1b5c90b2-fb70-4e49-961f-a4a15a5bd14f.png)

### 2.6. font缩写属性

- `font` 是一个缩写属性
  - `font` 属性可以用来作为 `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height` 和 `font-family `属性的简写; 
  - `font-style` `font-variant` `font-weight` `font-size/line-height` `font-family`
- 规则
  - `font-style`、`font-variant`、`font-weight` 可以随意调换顺序，也可以省略
  - `line-height` 可以省略，如果不省略，必须跟在 `font-size` 后面
  - `font-size`、`font-family`不可以调换顺序，不可以省略

![](https://img.onmicrosoft.cn/2022/12/15/faf1b76c-86d3-4ef7-a160-e85a308a4c9e.png)

## 三. CSS选择器

### 3.1. 统配选择器

* *

// 选择器部分上午我听完再更新 太困了


### 3.2. 简单选择器(重要)

* 元素 div
* 类 .class
* id #id



### 3.3. 属性选择器

* [att]
* [att=val]



### 3.4. 后代选择器(重要)

* 全后代选择器
  * 直接/间接
  * 以空格分隔
* 直接后台选择器
  * 必须直接
  * `>`符号



### 3.5. 兄弟选择器

* 相邻兄弟
  * +
* 普遍兄弟(后面)
  * ~



### 3.6. 选择器组(重要)

* 交集选择器
  * div.box
  * 既是一个div, 也必须有一个class为box
* 并集选择器
  * div, p, h1 {} 



### 3.7. 伪类

* 伪类的由来(概念)
* 动态伪类
  * hover
  * 了解
    * link
    * visited
    * focus
    * hover
    * active













