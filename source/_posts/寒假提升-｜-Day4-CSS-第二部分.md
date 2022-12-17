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
      - `字体大小可以继承`(先略过)
  - 百分比
    -  ✓ 基于父元素的 `font-size` 计算，比如50%表示等于父元素font-size的一半

### 2.2. font-family(重要,不过一般仅设置一次)

- `font-family` 用于设置
  - 可以设置1个或者多个字体名称;
  - 浏览器会选择列表中第一个该计算机上有安装的字体;
  - 或者是通过 `@font-face` 指定的可以直接下载的字体。

![](https://img.onmicrosoft.cn/2022/12/15/a78093cb-0455-4e18-9dc9-bbf012c7e78f.png)

### 2.3. font-weight(重要)

- font-weight用于设置文字的粗细(重量)
- 常见的取值:
  - `100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900` :每一个数字表示一个重量 
  - `normal` :等于 `400`
  - `bold` :等于 `700`
- `strong`、`b`、`h1~h6`等标签的 `font-weight` 默认就是bold

### 2.4. font-style(一般)

- `font-style` 用于设置文字的常规、斜体显示
  - `normal`:常规显示
  - `italic`(斜体):用字体的斜体显示(通常会有专门的字体)
  - `oblique`(倾斜):文本倾斜显示(仅仅是让文字倾斜)
- `em`、`i`、`cite`、`address`、`var`、`dfn` 等元素的 `font-style` 默认就是 `italic`

![](https://img.onmicrosoft.cn/2022/12/15/198de840-22f8-4e86-86ca-48358e05efb1.png)

### 2.5. font-varient(了解)

* 小写字母以大写显示, 但是高度保持小写的高度

- `font-variant` 可以影响小写字母的显示形式
  - `variant` 是变形的意思;

- 可以设置的值如下
  - `normal` :常规显示
  - `small-caps` :将小写字母替换为缩小过的大写字母

### 2.6. line-height(常用)

* 两个 `基线(baseline)` 距离
* 一行文本 -> `line-height`
* 行高 - 文本高度  = 行距

- `line-height` 用于设置文本的行高
  - 行高可以先简单理解为一行文字所占据的高度

![](https://img.onmicrosoft.cn/2022/12/15/7c795914-69d5-4bbd-97d3-3ea786794c5e.png)

![](https://img.onmicrosoft.cn/2022/12/15/24e55536-5719-4f71-aaec-bbedc0ae1d4a.png)

- 行高的严格定义是: `两行文字基线(baseline)之间的间距`
- `基线(baseline)` : `与小写字母x最底部对齐的线`

![](https://img.onmicrosoft.cn/2022/12/15/03f9e55c-82f2-4e40-a5c9-cd1ae074113e.png)

- 注意区分 `height` 和 `line-height` 的区别
  - `height` :元素的整体高度
  - `line-height` :元素中每一行文字所占据的高度
- 应用实例: 假设 `div` 中只有一行文字，如何让这行文字在div内部垂直居中
  - 让 `line-height` 等同于 `height`

![](https://img.onmicrosoft.cn/2022/12/15/1b5c90b2-fb70-4e49-961f-a4a15a5bd14f.png)

### 2.7. font缩写属性

- `font` 是一个缩写属性
  - `font` 属性可以用来作为 `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height` 和 `font-family `属性的简写; 
  - `font-style` `font-variant` `font-weight` `font-size/line-height` `font-family`
- 规则
  - `font-style`、`font-variant`、`font-weight` 可以随意调换顺序，也可以省略
  - `/line-height` 可以省略，如果不省略，必须跟在 `font-size` 后面
  - `font-size`、`font-family`不可以调换顺序，不可以省略

![](https://img.onmicrosoft.cn/2022/12/15/faf1b76c-86d3-4ef7-a160-e85a308a4c9e.png)

## 三. CSS选择器

#### CSS选择器(selector)

- 开发中经常需要找到**特定的网页元素进行设置样式**
  - 思考:如何找到特定的那个元素?
- 什么是CSS选择器
  - 按照一定的规则 **选出符合条件的元素** ，为之添加CSS样式
- 选择器的种类繁多，大概可以这么归类
  - 通用选择器(`universal selector`) 
  - 元素选择器(`type selectors`) 
  - 类选择器(`class selectors`) 
  - id选择器(`id selectors`) 
  - 属性选择器(`attribute selectors`) 
  - 组合(`combinators`)
  - 伪类(`pseudo-classes`)
  - 伪元素(`pseudo-elements`)

### 3.1. 统配选择器

- 通用选择器( `universal selector` )
  - 所有的元素都会被选中;
- 一般用来给所有元素作一些通用性的设置
  - 比如内边距、外边距
  - 比如重置一些内容;
- `效率比较低，尽量不要使用`;

![](https://img.onmicrosoft.cn/2022/12/17/66f77eb3-a768-4b2a-8e6f-cfadf03002ea.png)


### 3.2. 简单选择器(重要)

- 简单选择器是开发中用的最多的选择器:
  - 元素选择器( `type selectors` ), 使用 `元素的名称`;  ` div`
  - 类选择器( `class selectors` ), 使用 `.类名` ; ` .class`
  - id选择器( `id selectors` ), 使用 `#id`;  `#id`

![](https://img.onmicrosoft.cn/2022/12/17/556283ea-802f-48c0-a9d2-16301534082f.png)

#### id注意事项

- 一个 HTML 文档里面的 `id值` 是 `唯一` 的，不能重复
  -  `id 值` 如果由多个单词组成，单词之间可以用 `中划线-`、`下划线_` 连接，也可以使用 `驼峰标识`
  -  最好 不要用标签名作为 `id` 值

◼ 中划线又叫 `连字符(hyphen)`

### 3.3. 属性选择器

- 拥有某一个属性 `[att]`

- 属性等于某个值 `[att=val]`


![](https://img.onmicrosoft.cn/2022/12/17/c8318922-c3e3-49c6-b88c-eb1e77f4f64e.png)

- 其他了解的(不用记)
  - `[attr*=val]`: 属性值包含某一个值val;

  - `[attr^=val]`: 属性值以val开头;

  - `[attr$=val]`: 属性值以val结尾;

  - `[attr|=val]`: 属性值等于val或者以val开头后面紧跟连接符-;

  - `[attr~=val]`: 属性值包含val, 如果有其他值必须以空格和val分割;


### 3.4. 后代选择器(重要)

* 后代选择器一: `所有的后代(直接/间接的后代)`
  - 选择器之间以空格分割

![](https://img.onmicrosoft.cn/2022/12/17/c7450730-d838-4933-a845-e76efe36c08d.png)

- 后代选择器二:直接子代选择器(必须是直接子代)
  - 选择器之间以 `>` 分割;

![](https://img.onmicrosoft.cn/2022/12/17/c4888dd4-17a2-493b-9083-fc0b3166c91a.png)

### 3.5. 兄弟选择器

- 兄弟选择器一:相邻兄弟选择器 `+`
  - 使用符号 `+ `连接

![](https://img.onmicrosoft.cn/2022/12/17/d6c40092-7a20-4db5-b0dd-8be7152917c4.png)

- 兄弟选择器二:普遍兄弟选择器 `~`（选的是后面的）
- 使用符号 `~` 连接

![](https://img.onmicrosoft.cn/2022/12/17/1c62ef8e-d410-4b48-98c5-a098d7839e70.png)

### 3.6. 选择器组(重要)

> 交集选择器
>
> * div.box
> * 既是一个div, 也必须有一个 `class` 为box
>
> 并集选择器
>
> * div, p, h1 {} 

- 交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)
  - 在开发中通常为了 `精准的选择某一个元素`;

![](https://img.onmicrosoft.cn/2022/12/17/91d25bfa-3364-42b2-b930-874999af07b9.png)

- 并集选择器: 符合一个选择器条件即可 (两个选择器以`,`号分割)
  - 在开发中通常为了`给多个元素设置相同的样式`;

![](https://img.onmicrosoft.cn/2022/12/17/d64994ff-bbff-4c93-b55f-57cf84877cab.png)

### 3.7. 伪类

> 伪类的由来(概念)
>
> 动态伪类
>
> * hover
> * 了解
>   * link
>   * visited
>   * focus
>   * hover
>   * active

- 什么是伪类呢?
  - `Pseudo-classes`: 翻译过来是伪类;
  - 伪类是 `选择器的一种`，它用于选择处于特定状态的元素;

◼ 比如我们经常会实现的: 当手指放在一个元素上时, 显示另外一个颜色;

![](https://img.onmicrosoft.cn/2022/12/17/584c2586-b19c-45c7-a88b-9d395383f055.png)

#### 伪类(pseudo-classes)

常见的伪类有

1. 动态伪类 (dynamic pseudo-classes) 
   - `:link`、`:visited`、`:hover`、`:active`、`:focus`

2. 目标伪类 (target pseudo-classes) 
   - `:target`
3. 语言伪类(language pseudo-classes) 
   - `:lang()`
4. 元素状态伪类(UI element states pseudo-classes) 
   - `:enabled`、`:disabled`、`:checked`

5. 结构伪类(structural pseudo-classes)(后续学习)
   - `:nth-child( )`、`:nth-last-child( )`、`:nth-of-type( )`、`:nth-last-of-type( )`
   - `:first-child`、`:last-child`、`:first-of-type`、`:last-of-type`
   - `:root`、`:only-child`、`:only-of-type`、`:empty`
6. 否定伪类(negation pseudo-classes)(后续学习) 
   - `:not()`
7. 所有的伪类: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes

#### 动态伪类(dynamic pseudo-classes)

使用举例

- `a:link` 未访问的链接
- `a:visited` 已访问的链接
- `a:hover` 鼠标挪动到链接上(重要)
- `a:active` 激活的链接(鼠标在链接上长按住未松开)

使用注意

- `:hover`必须放在 `:link` 和 `:visited` 后面才能完全生效
- `:active` 必须放在 `:hover` 后面才能完全生效
- 所以建议的编写顺序是 `:link`、`:visited`、`:hover`、`:active`

除了 a元素， `:hover` 、`:active` 也能用在其他元素上

##### **动态伪类** - `:focus`

- `:focus` 指当前**拥有输入焦点的元素**(能接收键盘输入)
  - 文本输入框一聚焦后，背景就会变红色
- 因为链接a元素可以被键盘的Tab键选中聚焦**，**所以 `:focus` 也适用于a元素
- 动态伪类编写顺序建议为
  - `:link`、`:visited`、`:focus`、`:hover`、`:active`

- 直接给 `a` 元素设置样式，相当于给 `a` 元素的所有动态伪类都设置了
  - 相当于`a:link`、`a:visited`、`a:hover`、`a:active`、`a:focus`的`color`都是`red`

#### 伪元素(pseudo-elements)

- 常用的伪元素有
  - `:first-line`、`::first-line`
  - `:first-letter`、`::first-letter`
  - `:before`、`::before` //重点
  - `:after`、`::after` //重点
- 为了区分伪元素和伪类，建议伪元素使用2个冒号，比如 `::first-line`

##### **伪元素** - `::first-line` - `::first-letter`(了解)

- `::first-line` 可以针对首行文本设置属性
- `::first-letter` 可以针对首字母设置属性

![](https://img.onmicrosoft.cn/2022/12/17/83d67e3b-d34a-49f6-b887-2b7e1227f221.png)

##### **伪元素** - `::before` 和 `::after` (常用)

- `::before` 和 `::after` 用来在一个元素的 **内容之前或之后插入** 其他内容(可以是文字、图片)
  - 常通过 `content 属性` 来为一个元素添加修饰性的内容。

![](https://img.onmicrosoft.cn/2022/12/17/fe7d4963-cca9-40df-b4a1-80e226cc9394.png)
