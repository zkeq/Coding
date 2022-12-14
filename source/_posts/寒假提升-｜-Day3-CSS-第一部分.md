---
title: 寒假提升 ｜ Day3 CSS 第一部分
tags:
  - 寒假提升
categories:
  - 寒假提升
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
date: 2022-12-14 18:51:56
---

{% tabs homework %}

<!-- tab 今日作业 -->
#### 今日作业：

```js
- 一. 说说你对元素语义化的理解
- 二. 说说你对SEO的理解
- 三. 什么是字符编码？
- 四. CSS编写样式的方式以及应用场景
- 五. 最常见的CSS样式以及作用
- 六. 自行查找2个案例练习
	根据之前学习的HTML元素和CSS样式找2个案例练习
- 七. 颜色的表示方式
	每个同学自己总结;
```
<!-- endtab -->
<!-- tab 点击收起 -->
此 Tag 只是为了方便收起，无内容
<!-- endtab -->
{% endtabs %}
{% tabs homework %}
<!-- tab Day1参考答案 -->

##### 一. 说出软件和应用程序的区别？（自己整理）

软件包括操作系统及虚拟机、编程（语言）、算法、应用程序等，软件是应用程序的超集。应用程序是一种直接面向用户的软件。


##### 二. 说出一个完善的应用系统包含哪些环节？

包括服务器端、IOS端、Android端、IPad端、网页端、PC端（主要是win端和IOS端）等。



##### 三. 整理出网页从编写到浏览器显示的整个过程（重要）。

前端工程师编写HTML/CSS/JS代码 -> 打包发布到服务器作为静态资源 -> 用户在浏览器输入域名 -> 浏览器发出静态资源请求 -> DNS将域名转换为IP地址 ->  浏览器找到服务器的IP地址，服务器返回静态资源给浏览器 -> 浏览器解析和渲染静态资源，显示网页



##### 四. 服务器是什么？说出你的理解

服务器本质上是一台主机，存储着巨量信息。其具有以下特点：

* 24h不关机（稳定运行）
* 没有显示器
* 一般装载Linux系统（如centos）

##### 五. 网页的三大组成部分是哪些？分别说出他们的作用。

html：网页的骨骼，负责网页的内容结构

css：网页的外表，负责网页的视觉体验和网页的美化

JavaScript：网页的灵魂，负责网页的交互处理



##### 六. 浏览器内核是什么？有哪些常见的浏览器内核？

浏览器内核又称浏览器渲染引擎，是浏览器的最核心部分。负责解析网页语法并渲染网页。

常见的浏览器内核有：

* trident（三叉戟）---- IE浏览器、360安全浏览器、UC浏览器、搜狗高速浏览器、百度浏览器
* gecko（壁虎）      ---- Mozilla、Firefox
* pestro -> Blink      ---- Opera
* Webkit                   ---- Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器
* Webkit  -> Blink    ----Chrome、Edge
* 

##### 七. 手动编写出HTML页面的结构（不利用开发工具提示）

``` html
<html>
  <head>
    <title>
    </title>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
```


##### 八. 元素的结构是什么？有哪些单标签元素、双标签元素？

元素的结构包括开始标签、结束标签、属性、内容。

``` html
单标签元素： <br> <img> <input> <meta> <hr>
双标签元素： <html> <head> <body> <title> <p> <i> <div> <a> <h1>
```


##### 九. 元素之间有哪些关系？写出一个例子，并且说明他们的关系。

父子关系和兄弟关系

``` html
如 
  <ul>
    <li></li>
    <li></li>  
  </ul>
两个<li>标签为兄弟关系，任意一个<li>与<ul>为父子关系
```

##### 十. 注释的作用，HTML的注释如何编写。

作用：  

* 帮助自己记忆代码思路
* 便于和他人协同开发
* 临时注释代码，方便调试
* 自己开发框架时，便于他人理解和学习 

快捷键： ctrl + /


<!-- endtab -->
<!-- tab 点击收起 -->
此 Tag 只是为了方便收起，无内容
<!-- endtab -->
{% endtabs %}
{% tabs homework %}
<!-- tab Day2参考答案 -->

##### 一. 完成课堂所有的代码练习（必须全部自己实现）

01.文档类型声明

```html
<!DOCTYPE html>     01.文档类型声明
```

02.HTML元素的属性

```html
<html lang="en">
    <head></head>
    <body>内容</body>
</html>   
<html lang="zh-CN">
    <head></head>
    <body>内容</body>
</html>             02.HTML元素的属性,lang：1.帮助语言合成工具确定要使用的发音2.帮助翻译工具确定使用翻译规则
```

03.head元素的属性

```html
<html>
    <head>
        <meta charest="utf-8">
        <title>我是标题</title>
    </head>
    <body></body>
</html>             03.head元素的属性，两个元素一个title设置网页的标题，一个meta设置网页的编码形式
```

04.h元素的用法

```html
<html>
    <head></head>
    <body>
        <h1>标题1</h1>
        <h2>标题2</h2>
        <h3>标题3</h3>
        <h4>标题4</h4>
        <h5>标题5</h5>
        <h6>标题6</h6>
    </body>
</html>             04.h元素的用法,通常用作标题,h1最大,h6最小
```

05.p元素的用法


```html
<html>
    <head></head>
    <body>
        <p>
            昨天一个朋友问我，怎么才能让房价迅速降下来？
        </p>
        <p>
            有人说，这还用问，当然是调控。
        </p>
        <p>
            的确，2021年，二手房指导价出台，成为众多城市楼市的梦魇，就连不可一世的炒房第一城深圳，也被立斩于马下，学区房一夜掉价几百万，至今缓不过来。
        </p>
    </body>
</html>             05.p元素的用法,作用是段落,分段
```

06.h元素和p元素的案例


```html
<html>
    <head>
        <h1>这些城市，房子真的太多了</h1>
    </head>
    <body>
        <p>
            昨天一个朋友问我，怎么才能让房价迅速降下来？
        </p>
        <p>
            有人说，这还用问，当然是调控。
        </p>
        <p>
            的确，2021年，二手房指导价出台，成为众多城市楼市的梦魇，就连不可一世的炒房第一城深圳，也被立斩于马下，学区房一夜掉价几百万，至今缓不过来。
        </p>
    </body>
</html>             06.h元素和p元素的案例
```

07.img元素的基本使用


```html
<html>
    <head>
    </head>
    <body>
       <img src="https://p6.toutiagin/tos-cn-i-qvj2lq49k0/ec7d03634695464cab47abfe2a00efb0?from=pc" alt="小王子">
    </body>
</html>             07.img元素的基本使用,src填写目标图片的文件路径,有相对路径跟绝对路径,alt图片加载不成功显示文本,屏幕阅读器可将图片信息传达给需要的人听
```

08.相对路径跟绝对路径


```html
<html>
    <head>
    </head>
    <body>
        <img src="../images/gouwujie01.jpg" alt=""><!--相对路径-->
        <img src="C:\Users\Administrator\Desktop\新建文件夹\Day02\Learn_HTML_CSS\images\gouwujie01.jpg" alt="图片"><!--绝对路径-->
    </body>
</html>             08.相对路径跟绝对路径
```

09.a元素的使用


```html
<html>
    <head>
    </head>
    <body>
        <a  href="https://www.toutiao.com/?wid=1648208779618" target="_blank">今日头条</a>
        <a  href="./08.相对路径跟绝对路径.html" target="_self">本地</a>
        <a  href="https://www.toutiao.com/?wid=1648208779618" target="_self">头条</a>
    </body>
</html>             09.a元素的使用
```

10.a元素的在本页面的锚点链接


```html
<html>
    <head>
    </head>
    <body>
        <a  href="#table1" >跳转到第一个</a>
        <a  href="#table2" >跳转到第二个</a>
        <a  href="#table3" >跳转到第三个</a>
        <h3 id="table1">
            第一个标题
        </h3>
        <p>
            66666
        </p>
        <h3 id="table2">
            第二个标题
        </h3>
        <p>
            66666
        </p>
        <h3 id="table3">
            第三个标题
        </h3>
        <p>
            66666
        </p>
    </body>
</html>             10.a元素的在本页面的锚点链接
```

11.a元素跟img元素的结合使用

```html
<html>
    <head>
    </head>
    <body>
        <a href="https://www.toutiao.com/article/7078655559993508352/?log_from=fd63341789015_1648211460637">
            <img src="https://p6.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/b84a189a99204c269221fdfccf9d6998?from=pc">
        </a>
    </body>
</html>             11.a元素跟img元素的结合使用
```

12.a元素跟其他元素的链接

```html
<html>
    <head>
    </head>
    <body>
        <a href="https://github.com/coderwhy/HYMiniMall/archive/master.zip">下载</a>
        <a href="mailto:12345@qq.com">发送邮件到12345qq邮箱</a>
    </body>
</html>             12.a元素跟其他元素的链接
```

13.iframe元素的使用

```html
<html>
    <head>
    </head>
    <body>
        <iframe src="https://www.toutiao.com/?wid=1648208779618" frameborder="1"></iframe>
    </body>
</html>             13.iframe元素的使用
```

14.iframe元素和a元素的结合使用

```html
<html>
    <head>
    </head>
    <body>
        <iframe src="./others/a元素的网页.html" frameborder="1"></iframe>
    </body>
</html>             14.iframe元素和a元素的结合使用
```

15.div元素和span元素的调用

```html
<html>
    <head>
    </head>
    <body>
        <h1>学习前端</h1>
        <div>
            <h2>学习前端</h2>
            <p>学习html</p>
        </div>
        <div>
            <h2>学习前端</h2>
            <p>学习<span>css</span></p>
        </div>
        <div>
            <h2>学习前端</h2>
            <p>学习js</p>
        </div>
    </body>
</html>             15.div元素和span元素的调用
```

16.不太常用的元素演练

```html
<html>
    <head>
    </head>
    <body>
        <p>
           hello<strong>你好</strong>,真的<i>好的</i> 
        </p>
    </body>
</html>             16.不太常用的元素演练
```

17.全局属性-title属性

```html
<html>
    <head>
    </head>
    <body>
        <p title="你好,世界">helloworld</p>
    </body>
</html>             17.全局属性-title属性
```

18.字符实体-额外补充

```html
<html>
    <head>
    </head>
    <body>
        <span>&nbsp;你好你好&nbsp;</span>
        <span>&lt;你好你好&lt;</span>
        <span>&gt;你好你好&gt;</span>
    </body>
</html>             18.字符实体-额外补充
```



##### 二. 寻找h元素和p元素的案例，并且实现

```html
<html>
    <head>
        <h1>这些城市，房子真的太多了</h1>
    </head>
    <body>
        <p>
            昨天一个朋友问我，怎么才能让房价迅速降下来？
        </p>
        <p>
            有人说，这还用问，当然是调控。
        </p>
        <p>
            的确，2021年，二手房指导价出台，成为众多城市楼市的梦魇，就连不可一世的炒房第一城深圳，也被立斩于马下，学区房一夜掉价几百万，至今缓不过来。
        </p>
    </body>
</html>  
```



##### 三. 寻找a元素结合img元素的案例（3个）

```html
<html>
    <head> </head>
    <body>
        <a href="https://shouji.jd.com/?skuId=100025047302_100004325476&groupId=03312682&productId=09173749"><img src="https://img20.360buyimg.com/img/s100x100_jfs/t1/193030/20/17827/75476/6110f9eeE3b3eec9f/6e32be8839b5a110.jpg!cc_100x100.webp"></a>
    </body>
</html>
```

```html
<html>
    <head> </head>
    <body>
        <a href="https://www.vivo.com.cn/brand/news/detail?id=956&type=0"><img src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/brand/20210719/1e632d569ea1da9b277254fc8e6d0356.jpg"></a>
    </body>
</html>
```

```html
<html>
    <head> </head>
    <body>
        <a href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pcs"><img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"></a>
    </body>
</html>
```

##### 四. 说出div元素和span元素的作用和区别

div元素跟span元素都是纯粹的容器,也可以称作"盒子",都是用来包裹内容的

div元素包裹的内容会显示在不同的行,可以把网页分成多个独立的部分,一般作为其他的元素的父容器

span元素包裹的内容会显示在同一行,默认情况下是跟普通的文本没有区别,可以用来凸显一些关键字


##### 五. HTML全局属性有哪些？分别是什么作用。

- id:唯一的标识符,在文档内必须要是唯一的
- class:一个以空格分割的元素的类名列表,它允许css,js通过类选择器(或者dom方法)选择和访问特定的元素
- title:包含表示与其所属元素相关信息的文本,可以呈现给用户看,不是必须
- style:是给元素添加样式

##### 六.预习CSS（按照MDN文档）

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps


<!-- endtab -->
<!-- tab 点击收起 -->
此 Tag 只是为了方便收起，无内容
<!-- endtab -->
{% endtabs %}


>务必下载！！
>
>今日的代码和讲义 以及思维导图：[【点击此链接下载 Day03.zip】](https://share.onmicrosoft.cn/tfeaw69ry)


## 大纲

![](https://img.onmicrosoft.cn/2022/12/14/b9dbc4e5-dcd6-4d78-b0da-49017cb101eb.png)

## 一. 知识点补充

### 3.2. URL

> (以下内容好像视频里没有，我再找找)

* URL的格式:
  * 协议://主机:端口/路径/文件名?查询#片段id
* 和URI的区别:
  * URI:标志符
  * URL: 定位符(网络地址)

#### 认识URL

- **URL** **代表着是统一资源定位符(**Uniform Resource Locator**)**

- **通俗点说:**URL 无非就是一个给定的独特资源在 Web 上的地址。 
  - 理论上说，每个有效的 URL 都指向一个唯一的资源; 
  - 这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等;

![](https://img.onmicrosoft.cn/2022/12/13/8cbe0199-b099-4fb4-a38b-6c947be88173.png)

#### URL的格式

- URL的标准格式如下:
  - `[协议类型]://[服务器地址]:[端口号]/[文件路径][文件名]?[查询]#[片段ID]`

![](https://img.onmicrosoft.cn/2022/12/13/8055ec13-638d-4fab-b210-783517426c29.png)

#### 和URI的区别

- 和URI的区别:
  - `URI` = `Uniform Resource Identifier` 统一资源**标志符，**用于标识 Web 技术使用的逻辑或物理资源。**;** 
  - `URL` = `Uniform Resource Locator` 统一资源**定位符，**俗称网络地址，相当于网络中的门牌号**;**

- `URI` 在某一个规则下能把一个资源独一无二的识别出来。
  - `URL` 作为一个网络Web资源的地址，可以唯一将一个资源识别出来，所以 `URL` 是一个 `URI`; 
  - 所以 `URL` 是 `URI` 的一个子集;
  - 但是 `URI` 并不一定是 `URL`

- **locators are also identifiers**, so every URL is also a URI, but there are URIs which are not URLs.

### 3.3元素的语义化

- 元素的语义化:用正确的元素做正确的事情。
- 理论上来说，所有的HTML元素，我们都能实现相同的事情:

![](https://img.onmicrosoft.cn/2022/12/13/166a1378-7b94-4bf3-9297-6e125c2331a5.png)

- 标签语义化的好处

  - 方便代码维护;

  - 减少让开发者之间的沟通成本;

  - 能让语音合成工具正确识别网页元素的用途，以便作出正确的反应;  有利于SEO;

  - ......

### 3.4 什么是SEO?

- 搜索引擎优化(英语:search engine optimization，缩写为SEO)是通过了解搜索引擎的运作规则来调整网站，以及提高网站 在有关搜索引擎内排名的方式。

- 在后续我们还会讲解SPA以及SSR相关的概念
  - 它们也有SEO、首屏渲染速度有关;
  - 到时候会具体补充;

![](https://img.onmicrosoft.cn/2022/12/13/f1894225-2f29-49ed-8199-62c6b0f9546a.png)

### 3.5 认识字符编码

- 计算机是干什么的?
  - 计算机一开始发明出来时是用来解决数字计算问题的，后来人们发现，计算机还可以做更多的事，例如文本处理。 
  - 但计算机其实挺笨的，它只 “认识” 010110111000...这样由 0 和 1 两个数字组成的二进制数字;
  - 这是因为计算机的底层硬件实现就是用电路的开和闭两种状态来表示 0 和 1 两个数字的。
  - 因此，计算机只可以直接存储和处理二进制数字。

- 为了在计算机上也**能表示、存储和处理像文字、符号等等之类的字符**，就必须将这些**字符转换成二进制**数字。
  - 当然，肯定不是我们想怎么转换就怎么转换，否则就会造成同一段二进制数字在不同计算机上显示出来的字符不一样的情况，因此必须得定一个统一的、标准的转换规则

- 字符编码的发展历史可以阅读我的简书一篇文章:https://www.jianshu.com/p/899e749be47c

![](https://img.onmicrosoft.cn/2022/12/13/b78e0f0e-74cb-4503-9b54-7e4319ec038f.png)

## 二. 邂逅CSS

### 2.1. 认识CSS

- CSS表示层叠样式表(**C**ascading **S**tyle **S**heet，简称:CSS，又称为又称**串样式列表**、**级联样式表**、**串接样式表**、**阶层式样式表**)， 是为网页添加样式的代码。

- CSS是一种语言吗?(知道即可)
  - MDN解释:CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言; 
  - 维基百科解释:是一种计算机语言，但是不算是一种编程语言;

![](https://img.onmicrosoft.cn/2022/12/14/0d7c7695-3c0d-4426-a770-dd31bd8bca31.png)

#### CSS的历史

- 早期的网页都是通过HTML来编写的，但是我们希望HTML页面可以更加丰富:
  - 这个时候就增加了很多具备特殊样式的元素:比如i、strong、del等等;
  - 后来也有不同的浏览器实现各自的样式语言，但是没有统一的规划;
  - 1994年，哈肯·维姆·莱和伯特·波斯合作设计CSS，在1996年的时候发布了CSS1; 
  - 直到1997年初，W3C组织才专门成立了CSS的工作组，1998年5月发布了CSS2; 
  - 在2006~2009非常流行 “DIV+CSS”布局的方式来替代所有的html标签;
  - 从CSS3开始，所有的CSS分成了不同的模块(modules)，每一个“modules”都有于CSS2中额外增加的功能，以及向后 兼容。
  - 直到2011年6月7日，CSS 3 Color Module终于发布为W3C Recommendation。

- 总结:CSS的出现是为了美化HTML的，并且让结构(HTML)与样式(CSS)分离;
  - 美化方式一:为HTML添加各种各样的样式，比如颜色、字体、大小、下划线等等; 
  - 美化方式二:对HTML进行布局，按照某种结构显示(CSS进行布局 – 浮动、flex、grid);

#### CSS如何编写呢?

- CSS这么重要，那么它的语法规则是怎么样的呢?

![](https://img.onmicrosoft.cn/2022/12/14/c6a8051a-48e0-4d32-b383-5045629874cb.png)

- 声明(**Declaration**)一个**单独的**CSS规则，如 color: red; 用来指定添加的CSS样式。
  - 属性名(Property name):要添加的css规则的名称;
  - 属性值(Property value):要添加的css规则的值;

- 但是有个问题:我们会编写了，要编写到什么位置呢?

如何将CSS样式应用到元素上?

#### 如何将CSS样式应用到元素上?

- CSS提供了3种方法，可以将CSS样式应用到元素上:
  - 内联样式(inline style)
  - 内部样式表(internal style sheet)、文档样式表(document style sheet)、内嵌样式表(embed style sheet)
  - 外部样式表(external style sheet)

- 疑问:三种方式，学好哪一个呢?
  - 每一个都很重要，目前开发中不同的场景都会用到

### 2.3. 三种编写规则

#### 内联样式(inline style)

- 内联样式(inline style)，也有人翻译成行内样式。
  - 内联样式表存在于HTML元素的style属性之中。

![](https://img.onmicrosoft.cn/2022/12/14/b6c8bb96-9a79-4855-9597-3feeb7995eb2.png)

- CSS样式之间用分号 `;` 隔开，建议每条CSS样式后面都加上分号 `;`

- 很多资料不推荐这种写法:
  - 1.在 `原生的HTML编写` 过程中确实这种写法是不推荐的
  - 2.在 `Vue的template` 中某些动态的样式是会使用内联样式的;

◼ 所以，内联样式的写法依然需要掌握。

#### 内部样式表(internal style sheet)

- 内部样式表(internal style sheet)
  - 将CSS放在HTML文件 `<head>` 元素里的 `<style>` 元素之中。

![](https://img.onmicrosoft.cn/2022/12/14/10414e96-d145-4804-95bc-0d29ac8d7014.png)

- 在 `Vue` 的开发过程中，每个组件也会有一个 `style` 元素，和内部样式表非常的相似(原理并不相同);

#### 外部样式表(external style sheet)

- 外部样式表(external style sheet) 是将css编写一个独立的文件中，并且通过 `<link>` 元素引入进来;
- 使用外部样式表主要分成两个步骤:
  - 第一步:将css样式在一个独立的css文件中编写(后缀名为.css); 
  - 第二步:通过 `<link>` 元素引入进来;
- link元素的作用，后续单独讲解。

![](https://img.onmicrosoft.cn/2022/12/14/da10f9ae-69d5-4c4f-90ef-1163a988aba4.png)

#### @import

- 可以在style元素或者CSS文件中使用@import导入其他的CSS文件

![](https://img.onmicrosoft.cn/2022/12/14/6a171a40-97be-431b-8632-149d8c9075b1.png)

### 2.4. CSS中的注释

```css
/* 注释 */
```

- CSS代码也可以添加注释来方便阅读:
  - CSS的注释和HTML的注释是不一样的;
  - `/* 注释内容 */` 

### 2.5. 常见的CSS

![](https://img.onmicrosoft.cn/2022/12/14/5e45807c-ce45-46bd-8e54-2816a113cc00.png)

#### 必须掌握的CSS属性

![](https://img.onmicrosoft.cn/2022/12/14/ee5c71f5-3023-44f0-9a1c-83c091a3ac06.png)

> - 必须掌握的CSS属性
>   - 在开发中90+%的时间写的都是这些属性;
> - 赶紧开始?
>   - 不要小看这几个CSS属性，里面涉及到的概念是非常多的;
>   - 你必须了解CSS的很多特性，才能真正理解里面的每个属 性;
>   - 并且在遇到一些问题的时候知道如何去调试

#### CSS属性的官方文档 

- CSS官方文档地址
  - https://www.w3.org/TR/?tag=css
- CSS推荐文档地址:
  - https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%85%B3%E9%94%AE%E5%AD%97%E7%B4%A2%E5%BC%95

- 由于浏览器版本、CSS 版本等问题，查询某些CSS是否可用:
  - 可以到 https://caniuse.com/ 查询CSS属性的可用性;
  - 这个网站在后续的 browserlist 工具中我们再详细说明;

#### 目前需要掌握的CSS属性

- 要想深刻理解所有常用CSS属性，最好先学会以下几个最基础最常用的CSS属性
  - `font-size` :文字大小
  - `color` :前景色(文字颜色)
  - `background-color` :背景色
  - `width` :宽度
  - `height` :高度

##### CSS属性- background-color

- background-color 决定背景色

![](https://img.onmicrosoft.cn/2022/12/14/dd321842-c872-421c-b6d5-63becb3a3132.png)

##### CSS属性- color

- color属性用来设置文本内容的
  - 包括文字、装饰线、边框、外轮廓等的颜色

![](https://img.onmicrosoft.cn/2022/12/14/2e4d3883-6e64-49d7-9dd5-1c2bddaee4b1.png)

### 2.6. 案例练习

星球介绍

* 有水平排布(了解)

![](https://img.onmicrosoft.cn/2022/12/14/6d39d1cb-a14f-45ae-ac6e-fc8c0922e940.png)

## 三. 知识点补充

### 3.1. link元素

- `link` 元素是外部资源链接元素，规范了文档与外部资源的关系 
  - `link` 元素通常是在 `head` 元素中

- 最常用的链接是样式表( `CSS` ); 此外也可以被用来创建站点图标(比如 “favicon” 图标);

- `link` 元素常见的属性:

  - `href` :此属性指定被链接资源的URL。 URL 可以是绝对的，也可以是相对的。

  - `rel` :指定链接类型，常见的链接类型:https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types
    - `icon` :站点图标;
    - `stylesheet` :CSS样式;

### 3.2. 进制

#### 认识进制

- 进制的概念:
  - 维基百科:**进位制**是一种记数方式，亦称**进位计数法**或**位值计数法**。
  - 通俗理解:当数字达到某个值时，进一位(比如从1位变成2位)。

- 按照进制的概念，来**理解一下十进制**:
  - 当数字到9的时候，用一位已经表示不了了，那么就进一位变成2位。 
  - 在东北没有什么是一顿烧烤不能解决的，如果有，那就两顿。

- 按照上面的来理解，**二进制、八进制、十六进制**:
  - `二进制` :当数字到1的时候，用一位已经表示不了了，那么就进一位。
  - `八进制` :当数字到7的时候，用一位已经表示不了了，那么就进一位。
  - `十六进制` :等等，用一位如何表示十六个数字呢?a(10)、b(11)、c(12) 、 d(13) 、 e(14) 、 f(15)

◼ OK，下面我们简单学习一下计算机中的二进制、八进制、十六进制。

#### 人类的十进制

![](https://img.onmicrosoft.cn/2022/12/14/c07badfa-c82f-43fb-bf0e-619b51952cdf.png)

#### 计算机中的进制

![](https://img.onmicrosoft.cn/2022/12/14/2eaaca9c-b6e8-49bc-a5a1-755a829d30e7.png)

#### 进制之间的转换(课下了解)

![](https://img.onmicrosoft.cn/2022/12/14/5711217d-4cb1-4f96-af60-fcf994657be1.png)

### 3.3. 颜色表示方法

* color keywords(颜色关键字)
* RGB
  * 十六进制: #aabbcc;
  * 缩写: #abc
  * 函数: rgb(0~255, 0~255, 0~255)

- 在CSS中，颜色，有以下几种表示方法:

- 颜色关键字(color keywords):
  - 是不区分大小写的标识符，它表示一个具体的颜色;
  - 可以表示哪些颜色呢?
  - https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#%E8%AF%AD%E6%B3%95

- RGB颜色:
  -  RGB是一种色彩空间，通过R(red，红色)、G(green，绿色)、B(blue，蓝色)三原色来组成了不同的颜色;
    - ✓ 也就是通过调整这三个颜色不同的比例，可以组合成其他的颜色; 
  - RGB各个原色的取值范围是 0~255;

#### RGB的表示方法

![](https://img.onmicrosoft.cn/2022/12/14/8d33d07b-098a-40ac-a9da-cc0de0486022.png)

### 3.4. Chrome调试工具

![](https://img.onmicrosoft.cn/2022/12/14/131ae553-3ace-4a81-8c82-01707b32814c.png)

![](https://img.onmicrosoft.cn/2022/12/14/9204c361-c4e0-47d1-8d2d-90ea24164fc1.png)

### 3.5. 浏览器的渲染流程

![](https://img.onmicrosoft.cn/2022/12/14/a8618f80-3732-483c-b875-8adfc5d8d280.png)



