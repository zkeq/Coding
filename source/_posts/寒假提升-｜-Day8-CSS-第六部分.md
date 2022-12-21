---
title: 寒假提升 ｜ Day8 CSS 第六部分
tags:
  - 寒假提升
categories:
  - 寒假提升
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
date: 2022-12-20 16:09:54
---

{% tabs homework %}

<!-- tab 今日打卡任务 -->

### 打卡作业

```js
# Day08 作业布置

## 一. 完成课堂所有的代码

## 二. 说出结构伪类的 nth-child 和 nth-of-type 的区别，并且写出案例练习

## 三. 自己练习使用字体图标
	* 从 ·iconfont· 中下载图标练习

## 四. 自己找精灵图进行练习

## 五. 结合CSS元素定位，并且找出对应的练习案例（2个）

```

<!-- endtab -->

<!-- tab Day7参考答案 -->
### Day07 作业布置

#### 一. 完成课堂所有的代码

已完成

#### 二. 自己查一个列表并且完成

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table {
        text-align: center;
        border-collapse: collapse;
      }

      table tr:first-child {
        font-weight: 700;
        font-size: 24px;
      }
      table tr:first-child td {
        padding: 20px 0;
      }

      td {
        width: 140px;
        height: 30px;
      }
      table tr:nth-child(n + 3) {
        background-color: rgb(222, 225, 226);
      }
      table tr:nth-child(2n) {
        background-color: rgb(141, 155, 165);
      }

      table tr:nth-child(2) {
        color: #fff;
        background-color: rgb(38, 145, 221);
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <td colspan="6">场内股票ETF涨幅榜</td>
      </tr>
      <tr>
        <td>序</td>
        <td>代码</td>
        <td>基金场内简称</td>
        <td>涨跌幅(%)</td>
        <td>场内申赎份额</td>
        <td>成交额(万元)</td>
      </tr>
      <tr>
        <td>1</td>
        <td>517960.SH</td>
        <td>AHETF</td>
        <td>5.81</td>
        <td>0</td>
        <td>680</td>
      </tr>

      <tr>
        <td>2</td>
        <td>517960.SH</td>
        <td>AHETF</td>
        <td>5.81</td>
        <td>0</td>
        <td>680</td>
      </tr>
      <tr>
        <td>3</td>
        <td>517960.SH</td>
        <td>AHETF</td>
        <td>5.81</td>
        <td>0</td>
        <td>680</td>
      </tr>
      <tr>
        <td>4</td>
        <td>517960.SH</td>
        <td>AHETF</td>
        <td>5.81</td>
        <td>0</td>
        <td>680</td>
      </tr>
      <tr>
        <td>5</td>
        <td>517960.SH</td>
        <td>AHETF</td>
        <td>5.81</td>
        <td>0</td>
        <td>680</td>
      </tr>
    </table>
  </body>
</html>

```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-homework#/7179297768626716728"></iframe>

#### 三. 完成table的作业内容

![作业](https://tva1.sinaimg.cn/large/e6c9d24egy1h0vps9hqn6j21cb0j0di4.jpg)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      p {
        margin: 0;
        padding: 0;
      }
      table {
        text-align: center;
        border-collapse: collapse;
      }

      table tr:nth-child(1) td {
        padding: 10px 0;
        font-size: 24px;
        font-weight: 700;
      }

      table tr:nth-of-type(2n + 2) {
        background-color: rgb(239, 219, 223);
      }

      table tr:nth-of-type(2n + 3) {
        background-color: rgb(235, 183, 193);
      }

      table tr:nth-child(2) {
        font-weight: 700;
      }

      table tr:nth-child(n + 3) td:nth-of-type(4) {
        color: red;
      }

      table td > input {
        padding: 10px;
        font-size: 14px;
        color: #fff;
        background-color: rgb(240, 72, 72);
        border-radius: 13px;
        border: 0;
      }
      td {
        width: 140px;
        height: 60px;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <td colspan="5">影院电影放映列表</td>
      </tr>
      <tr>
        <td>放映时间</td>
        <td>语言版本</td>
        <td>放映厅</td>
        <td>售价(元)</td>
        <td>选座购票</td>
      </tr>
      <tr>
        <td>
          <p>13:15</p>
          <p>15:00散场</p>
        </td>
        <td>国语三D</td>
        <td>2号厅</td>
        <td class="price">￥48.5</td>
        <td>
          <input type="button" value="选座购票" />
        </td>
      </tr>
      <tr>
        <td>
          <p>13:15</p>
          <p>15:00散场</p>
        </td>
        <td>国语三D</td>
        <td>2号厅</td>
        <td>￥48.5</td>
        <td>
          <input type="button" value="选座购票" />
        </td>
      </tr>
      <tr>
        <td>
          <p>13:15</p>
          <p>15:00散场</p>
        </td>
        <td>国语三D</td>
        <td>2号厅</td>
        <td>￥48.5</td>
        <td>
          <input type="button" value="选座购票" />
        </td>
      </tr>
      <tr>
        <td>
          <p>13:15</p>
          <p>15:00散场</p>
        </td>
        <td>国语三D</td>
        <td>2号厅</td>
        <td>￥48.5</td>
        <td>
          <input type="button" value="选座购票" />
        </td>
      </tr>
      <tr>
        <td>
          <p>13:15</p>
          <p>15:00散场</p>
        </td>
        <td>国语三D</td>
        <td>2号厅</td>
        <td>￥48.5</td>
        <td>
          <input type="button" value="选座购票" />
        </td>
      </tr>
    </table>
  </body>
</html>

```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-homework#/7179296309629845519"></iframe>

#### 四. 说出表单元素什么情况下使用name和value？

- name元素的作用是后台接收数据时使用的键值对中的键(key) 随着表单的提交而一起提交 表单中不可或缺的元素 一个form表单中该元素的名称对应不同类型的input是不同的
- value是 后台接收数据时使用的键值对中的值(value) value可以有默认值

#### 五. 说出form提交时的属性作用

* action
  * 处理表单提交的URL 一般项目中填写的是用于表单提交时对应的文件路径名 
* method
  * 用于提交方法是get(默认方法)还是post或是其他方法
* target
  * 在当前页面跳转 还是新开页面进行跳转链接有四个值
    * _blank 新开页面
    * _self 当前页面跳转
    * _parent 当前父级页面跳转
    * _top 当前顶层页面跳转

<!-- endtab -->
{% endtabs %}


>务必下载！！
>
>今日的代码和讲义 以及思维导图：[【点击此链接下载 Day08.zip】](https://share.onmicrosoft.cn/nbnmo7tab)


<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-13#/7179288328225685562"></iframe>
<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-14"></iframe>
<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-15"></iframe>

## 大纲

![](https://img.onmicrosoft.cn/2022/12/20/16eaedb5-8dd1-4a1a-aad0-1f1e7ce31af8.png)

## 一. 结构伪类

### 1.1. nth-child

```css
- `nth-child(2)`
- `nth-child(2n+1)`
- `nth-child(-n+5)`
```

#### **结构伪类** - `:nth-child`

- `:nth-child(1)`
  - 是`父元素`中的第`1`个`子元素`
- `:nth-child(2n)`
  - `n`代表任意`正整数`和`0`
  - 是父元素中的第偶数个子元素(第`2`、`4`、`6`、`8`......个)
  - 跟`:nth-child(even)`同义
- `:nth-child(2n + 1)`
  - `n`代表任意`正整数`和`0`
  - 是父元素中的第奇数个子元素(第`1`、`3`、`5`、`7`......个)
  - 跟`:nth-child(odd)`同义
- `nth-child(-n + 2)`
  - 代表前2个子元素

### 1.2. nth-last-child/nth-of-type/nth-last-of-type

#### 结构伪类 - `:nth-last-child( )`

- `:nth-last-child()`的语法跟`:nth-child()`类似，不同点是`:nth-last-child()`从最后一个子元素开始往前计数
  - `:nth-last-child(1)`，代表`倒数第一`个子元素
  - `:nth-last-child(-n + 2)`，代表最后`2`个子元素
- `:nth-of-type()`用法跟`:nth-child()`类似
  - 不同点是`:nth-of-type()`计数时只计算同种类型的元素
- `:nth-last-of-type()`用法跟 `:nth-of-type()` 类似
  - 不同点是`:nth-last-of-type()`从**最后一个**这种类型的子元素开始往前计数

#### 结构伪类 - `:nth-of-type( )`、`:nth-last-of-type( )`

- 其他常见的伪类(了解):
  - `:first-child`，等同于`:nth-child(1)`
  - `:last-child`，等同于`:nth-last-child(1)`
  - `:first-of-type`，等同于`:nth-of-type(1)`
  - `:last-of-type`，等同于`:nth-last-of-type(1)`
  - `:only-child`，是父元素中**唯一**的**子元素**
  - `:only-of-type`，是父元素中**唯一**的**这种类型的子元素**

### 1.3. 其他结构伪类

````css
`first-child`

相对比较重要的两个伪类:
```css
:root => html
:empty => 小程序
```
````

- 下面的伪类偶尔会使用:
  - `:root`，根元素，就是HTML元素
  - `:empty` 代表里面完全空白的元素

### 1.4. 否定伪类

```css
:not(简单选择器)
```

#### 否定伪类(negation pseudo-class)

- `:not()`的格式是`:not(x)`
  - `x`是一个 **简单选择器**
  - `元素选择器`、`通用选择器`、`属性选择器`、`类选择器`、`id选择器`、`伪类(除否定伪类)`
- `:not(x)`表示 **除x以外的元素**


## 二. 额外知识补充

### 2.1. border的图形

```js
三角形
旋转(后续)
```

- 假如我们将`border`宽度设置成`50`会是什么效果呢?
  - 如果我们进一步, **将另外三边的颜色去除**呢?
  - 如果我们将这个盒子`旋转`呢?
- 所以利用`border`或者`CSS的特性`我们可以**做出很多图形**:
  - https://css-tricks.com/the-shapes-of-css/#top-of-site

![](https://img.onmicrosoft.cn/2022/12/20/23fd9be0-7c56-4946-b45c-bb957bb0e2ed.png)

### 2.2. 网络字体

```css
* 拿到字体
* @font-face
* 使用它
* 兼容性
```

- 在之前我们有设置过页面使用的字体: `font-family`
  - 我们需要提供`一个或多个字体种类名称`，浏览器会`在列表中搜寻`，直到找到它`所运行的系统上可用的字体`。
  - 这样的方式完全没有问题，但是对于传统的web开发人员来说，`字体选择是有限的`;
  - 这就是所谓的 `Web-safe` 字体;
  - 并且这种默认可选的字体`并不能进行一些定制化的需求`;

![](https://img.onmicrosoft.cn/2022/12/20/80233043-a6ce-480c-8b73-4205b5831177.png)

#### Web fonts的工作原理

- 首先, 我们需要通过一些渠道`获取到希望使用的字体`(不是开发来做的事情):
  - 对于`某些收费的字体`, 我们需要获取到`对应的授权`;
  - 对于某些`公司定制的字体`, 需要`设计人员来设计`;
  - 对于某些`免费的字体`, 我们需要`获取到对应的字体文件`;
- 其次, 在我们的 `CSS代码` 当中使用该字体(重要):
  - 具体的过程看后面的操作流程;
- 最后, 在`部署静态资源`时, 将`HTML/CSS/JavaScript/Font一起部署在静态服务器中`;
- 用户的角度:
  - 浏览器一个网页时, 因为代码中有引入字体文件, `字体文件会被一起下载下来`;
  - 浏览器会根据使用的字体在`下载的字体文件中查找、解析、使用对应的字体`;
  - `在浏览器中使用对应的字体显示内容`;

#### 使用Web Fonts

- 课堂上为了给大家演示，通过如下的方式获取到了字体文件:
- `第一步`:在字体天下网站下载一个字体
  - https://www.fonts.net.cn/fonts-zh-1.html
  - 默认下载下来的是ttf文件;
- `第二步`:使用字体;

- 使用过程如下:
  - 1.将字体放到对应的目录中
  - 2.通过`@font-face`来引入字体, 并且设置格式
  - 3.使用字体
- 注意: `@font-face` 用于加载一个自定义的字体;

![](https://img.onmicrosoft.cn/2022/12/20/d557d275-6e90-4b4f-b58c-42a0350e9815.png)

#### web-fonts的兼容性

- **我们刚才使用的字体文件是 .ttf, 它是TrueType字体.**
  - 在开发中某些浏览器可能不支持该字体, 所以为了浏 览器的兼容性问题, 我们需要有对应其他格式的字体;
- **TrueType字体:拓展名是 .ttf**
  - `OpenType/TrueType字体`:拓展名是 .ttf、.otf，
    建立在TrueType字体之上
  - `Embedded OpenType字体`:拓展名是 .eot， OpenType字体的压缩版
  - `SVG字体`:拓展名是 .svg、 .svgz
  - `WOFF表示Web Open Font Format web开放字体`:
    拓展名是 .woff，建立在TrueType字体之上
- 这里我们提供一个网站来生产对应的字体文件:
  - `https://font.qqe2.com/#` 暂时可用

![](https://img.onmicrosoft.cn/2022/12/20/484925b0-91ea-4ae0-881e-8502fcf78617.png)

![](https://img.onmicrosoft.cn/2022/12/20/2cc20151-d461-4f24-8f33-1aac05809960.png)

- 这被称为"`bulletproof @font-face syntax`(刀枪不入的@font-face语法)“:
  - 这是 `Paul Irish` 早期的一篇文章提及后@font-face开始流行起来 ([Bulletproof @font-face Syntax](https://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/))。
- `src`用于指定字体资源
  - `url`指定资源的路径
  - `format`用于帮助浏览器快速识别字体的格式;

### 2.3. 字体图标

````js
* 选择图标
* 下载代码
* 在项目中使用

```html
<i>字符实体</i>
<i class="iconfont icon-video"></i>
```

补充: 如果有新的图标

* 使用最新下载的字体
````

- 思考:字体可以`设计成各式各样的形状`，那么`能不能把字体直接设计成图标的样子呢`?
  - `当然可以`，这个就叫做`字体图标`。
- 字体图标的好处:
  - 放大不会失真
  - 可以任意切换颜色
  - 用到很多个图标时，文件相对图片较小
- 字体图标的使用:
  - 登录`阿里icons` (https://www.iconfont.cn/)
  - 下载代码，并且拷贝到项目中
- 将字体文件和默认的css文件**导入**到项目中

#### 字体图标的使用

- 字体图标的使用步骤:
  - 第一步: 通过`link`引入`iconfont.css`文件
  - 第二步: 使用字体图标
- 使用字体图标常见的有两种方式:
  - 方式一: 通过对应字体图标的`Unicode`来显示代码;
  - 方式二: 利用已经编写好的`class` , 直接使用即可;

![](https://img.onmicrosoft.cn/2022/12/20/50ff0cae-df53-4ff5-be9d-e39819f28bf1.png)

### 2.4. CSS Sprite

```js
将多个图标放到一张图片

使用图片
* width/height
* background-position
```

- 什么是CSS Sprite
  - 是一种`CSS图像合成技术`，将`各种小图片合并到一张图片上`，然后`利用CSS的背景定位来显示对应的图片部分`
  - 有人翻译为:`CSS雪碧`、`CSS精灵`
- 使用CSS Sprite的好处
  - `减少网页的http请求数量`，`加快网页响应速度`，`减轻服务器压力`
  - 减小`图片总大小`
  - 解决了`图片命名的困扰`，只需要针对一张集合的图片命名
- Sprite图片制作(雪碧图、精灵图)
  - 方法1: `Photoshop`, 设计人员提供
  - 方法2: https://www.toptal.com/developers/css/sprite-generator

#### 精灵图的使用

- 精灵图如何使用呢?
  - 精灵图的原理是通过只显示图片的很小一部分来展示的;
  - 通常使用背景:
    - ✓ 1.设置对应元素的宽度和高度 
    - ✓ 2.设置精灵图作为背景图片 
    - ✓ 3.调整背景图片的位置来展示
- 如何获取精灵图的位置
  - http://www.spritecow.com/

![](https://img.onmicrosoft.cn/2022/12/20/dce824c8-4627-40fa-b0db-3c405840f3a5.png)

### 2.5. cursor

```css
cursor: pointer
```

- `cursor`可以**设置鼠标指针(光标)在元素上面时的显示样式**
- `cursor`**常见的设值**有
  - `auto`:浏览器根据上下文决定指针的显示样式，比如根据文本和非文本切换指针样式
  - `default`:由操作系统决定，一般就是一个小箭头
  - `pointer`:一只小手，鼠标指针挪动到链接上面默认就是这个样式
  - `text`:一条竖线，鼠标指针挪动到文本输入框上面默认就是这个样式
  - `none`:没有任何指针显示在元素上面

## 三. 元素定位(布局)

### 3.1. 对标准流的理解

#### 标准流(Normal Flow)

- 默认情况下，元素都是按照`normal flow`( **标准流**、**常规流**、**正常流**、**文档流**【`document flow`】)进行排布
  - **从左到右**、**从上到下**按顺序摆放好
  - 默认情况下，**互相之间不存在层叠现象**

![](https://img.onmicrosoft.cn/2022/12/20/86d08729-c35a-4f95-9aa2-71e3eb2b4dfa.png)

#### `margin-padding`位置调整

- 在标准流中，可以使用`margin`、`padding`对元素进行定位
  - 其中`margin`还可以设置**负数**
- 比较明显的缺点是
  - 设置一个元素的`margin`或者`padding`，通常会`影响到标准流中其他元素`的定位效果
  - **不便于实现元素层叠的效果**
- **如果我们希望一个元素可以跳出标准量,单独的对某个元素进行定位呢?**
  - 我们可以通过position属性来进行设置;

### 3.2. 元素的定位

```js
常见的值:

* static
* relative
* absolute
* fixed
* sticky
```

- 定位允许您从`正常的文档流布局中取出元素`，并使它们具有不同的行为:
- 例如`放在另一个元素的上面`;
- 或者`始终保持在浏览器视窗内的同一位置`;

![](https://img.onmicrosoft.cn/2022/12/20/5fc49a00-2c00-400a-bc67-660e6aded66c.png)

#### 认识`position`属性

![](https://img.onmicrosoft.cn/2022/12/20/b0a05c8e-7f92-44c1-a56a-38415708e2d6.png)

- 默认值:
  - `static`:默认值, 静态定位
- 使用下面的值, 可以让元素变成 定位元素(positioned element) 
  - `relative`:相对定位
  - `absolute`:绝对定位
  - `fixed`:固定定位
  - `sticky`:粘性定位

#### 静态定位 - static

- `position属性`的默认值
  - 元素按照`normal flow`布局
  - `left `、`right`、`top`、`bottom`没有任何作用

### 3.3. 相对定位

```js
* relative
  * 相对自己原来的位置(标准流中的位置)
  * left/right/top/bottom
* 小案例
  * 3 + 2 = 5
* img居中显示(了解)
  * 背景完成
```

- 元素按照`normal flow`布局
- 可以通过`left`、`right`、`top`、`bottom`进行定位
  - 定位`参照对象`是元素`自己原来的位置`
- 相对定位的应用场景
  - `在不影响其他元素位置的前提`下，对`当前元素位置进行微调`

![](https://img.onmicrosoft.cn/2022/12/20/98d8d3f1-9b1d-4e56-abdc-4edf064674a8.png)

![](https://img.onmicrosoft.cn/2022/12/20/bd07861f-437e-4486-9328-f204d3ca5e44.png)

### 3.4. 固定定位

```js
* fixed
  * 相对视口(可视区域viewport)
  * 不会随着内容的滚动而滚动
* 练习:
  * 顶部/反馈
```

- 元素`脱离normal flow`(脱离标准流、脱标)
- 可以通过`left`、`right`、`top`、`bottom`进行定位
- 定位参照对象是视口(`viewport`)
- 当画布滚动时，固定不动

#### 画布 和 视口

- 视口(Viewport)  文档的可视区域
  - 如右图`红框`所示
- 画布(Canvas)
  - 用于渲染文档的区域
  - 文档内容超出视口范围，可以通过滚动查看
  - 如右图`黑框`所示
- 宽高对比
  - `画布 >= 视口`

![](https://img.onmicrosoft.cn/2022/12/20/03fa81fa-3ba4-4a27-952f-66abc57f1ee2.png)

#### 定位元素的特点

- **可以随意设置宽高**
- **宽高默认由内容决定**
- **不再受标准流的约束**
  - 不再`严格按照从上到下`、`从左到右`排布
  - 不再`严格区分块级`、`行内级`，`块级`、`行内级的很多特性`都会消失
- **不再给父元素汇报宽高数据**
- **脱标元素内部默认还是按照标准流布局**

![](https://img.onmicrosoft.cn/2022/12/20/068f83c3-663b-4c57-82ca-2daa7b7f7b70.png)
