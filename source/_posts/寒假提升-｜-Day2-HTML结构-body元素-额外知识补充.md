---
title: 寒假提升 ｜ Day2 HTML结构-body元素-额外知识补充
tags:
  - 寒假提升
categories:
  - 寒假提升
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
date: 2022-12-13 19:12:35
---

#### 今日打卡任务

```
# day02 作业布置

- 一. 完成课堂所有的代码练习（必须全部自己实现）
- 二. 寻找h元素和p元素的案例，并且实现
- 三. 寻找a元素结合img元素的案例（3个）
- 四. 说出div元素和span元素的作用和区别
- 五. HTML全局属性有哪些？分别是什么作用。
- 六.预习CSS（按照MDN文档）
	https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps
```

>务必下载！！
>
>今日的代码和讲义 以及思维导图：[【点击此链接下载 Day02.zip】](https://share.onmicrosoft.cn/slkftigmp)


<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-2"></iframe>

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/fe-3"></iframe>



![](https://img.onmicrosoft.cn/2022/12/13/3b5db2c2-6185-4938-82a8-ac63a05fd466.png)

## 一. HTML结构

### 完整的HTML结构

![](https://img.onmicrosoft.cn/2022/12/13/70d78fca-2a6f-4284-8186-60357cd39b28.png)

### 1.1. 文档(类型)声明

- HTML最上方的一段文本我们称之为 **文档类型声明**，用于声明**文档类型**

![](https://img.onmicrosoft.cn/2022/12/13/3f5309de-416c-4545-8570-4af0ed81cf71.png)

- `<!DOCTYPE html>`
  -  `HTML文档声明` ，告诉浏览器当前页面是 `HTML5` 页面;
  -  让浏览器用 `HTML5` 的标准去解析识别内容;
  - 必须放在 `HTML` 文档的最前面，不能省略，省略了会出现兼容性问题;

- HTML5的文档声明比HTML 4.01、XHTML 1.0简洁非常多(了解即可)

![](https://img.onmicrosoft.cn/2022/12/13/425de2db-983e-423f-aafa-469db8276e08.png)

### 1.2. html元素

- `<html>` 元素 表示一个 HTML 文档的根(顶级元素)，所以它也被称为根元素。
  - 所有其他元素必须是此元素的后代。

![](https://img.onmicrosoft.cn/2022/12/13/e396353c-9b66-4381-ac13-6ab853b5d2cc.png)

- W3C标准建议为html元素增加一个 `lang` 属性，作用是 

  -  帮助语音合成工具确定要使用的发音;

  - 帮助翻译工具确定要使用的翻译规则;

- 比如常用的规则:
  - `lang=“en”` 表示这个HTML文档的语言是英文;
  - `lang=“zh-CN”` 表示这个HTML文档的语言是中文;

### 1.3. head

* 元数据(配置信息)
  * `meta` -> `charset` -> `utf-8`
  * `title` -> `标题`

![](https://img.onmicrosoft.cn/2022/12/13/b575f9b1-07e5-49db-8be1-97e822b3f75c.png)

- **HTML head元素** 规定文档相关的 **配置信息(也称之为元数据)，**包括文档的标题，引用的文档样式和脚本等。
  - 什么是元数据(meta data)，是描述数据的数据;
  - 这里我们可以理解成 `对整个页面的配置`:

![](https://img.onmicrosoft.cn/2022/12/13/881933b2-7a6e-49a0-a1cf-76c656c2f938.png)

- 常见的设置有哪些呢?一般会至少包含如下2个设置。

  -  网页的标题: `title` 元素

  - 网页的编码:`meta` 元素
    - 可以用于设置网页的字符编码，让浏览器更精准地显示每一个文字，不设置或者设置错误会导致乱码;
    - 一般都使用 `utf-8` 编码，涵盖了世界上几乎所有的文字;

![](https://img.onmicrosoft.cn/2022/12/13/2d5de3f2-539b-4ee0-b0a8-a9ddb67e6729.png)

## 二. body元素

- `body` 元素里面的内容将是你**在浏览器窗口中看到的东西**，也就是**网页的具体内容和结构**。
- 之后学习的大部分HTML元素都是在 `body` 中编写呈现的;

![](https://img.onmicrosoft.cn/2022/12/13/f993d6a4-212c-4d2b-9a13-c3d320958b41.png)

- HTML元素本身很多，但是**常用的元素就是那么几个**。
  - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
  - 我们只需要记住常用的，不常用的学会查看文档即可;

- **常用的元素**(暂时掌握下面几个就够了，90%时间都在写这几个): 
  - `p` 元素、 `h` 元素;
  - `img` 元素、 `a` 元素、 `iframe` 元素;
  - `div` `元素、span` 元素;

- 下阶段学习的元素:
  - `ul` 、 `ol` 、 `li` 元素;
  - `button` 元素、 `input` 元素;
  - `table` 、 `thead` 、 `tbody` 、 `thead` 、 `th` 、 `tr` 、 `td` ;

- HTML5新增元素(后续学习)

![](https://img.onmicrosoft.cn/2022/12/13/5181f0f2-7ed6-49aa-99a3-314e853cb2b0.png)

### 2.1.  h1~h6

- 在一个页面中通常会有一些比较重要的文字作为标题，这个时候我们可以使用h元素。
- `<h1>–<h6>` 标题 (Heading) 元素呈现了六个不同的级别的标题 
  - Heading是头部的意思，通常会用来做标题
  - `<h1>` 级别最高，而 `<h6>` 级别最低。


- 注意:**h** 元素通常和 SEO 优化有关系(什么是SEO，后续再介绍)

![](https://img.onmicrosoft.cn/2022/12/13/f4d9b0cc-fae0-4033-a3b9-52ff1496a63f.png)

### 2.2. p元素

- 如果我们想表示一个段落，这个时候可以使用 p 元素。

- HTML `<p>`元素(或者说 HTML 段落元素)表示**文本的一个段落**。
  - `p` 元素是 paragraph 单词的缩写，是段落、分段的意思;
  - `p` 元素多个段落之间会有一定的间距;

![](https://img.onmicrosoft.cn/2022/12/13/123f0c86-77c8-4686-9994-84238b54339a.png)

### 2.3. 案例练习

![](https://img.onmicrosoft.cn/2022/12/13/bee04df8-258e-4d0f-828f-8ba8b05f62c8.png)

### 2.4. img元素

- 我们应该如何告诉浏览器来**显示一张图片**呢?使用img元素。

- `HTML <img>` 元素将一份图像嵌入文档。
  - `img` 是 image 单词的缩写，是图像、图像的意思; 
  - 事实上 img 是一个可替换元素(` replaced element `);

- **img** 有两个常见的属性:
  - `src` 属性 :source 单词的缩写，表示源
    - ✓ 是**必须的**，它包含了你想嵌入的图片的文件路径。
  - `alt` 属性:不是强制性的，有两个作用
    - ✓ 作用一:当图片加载不成功(错误的地址或者图片资源不存在)，那么会显示这段文本;
    - ✓ 作用二:屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义;

- 某些其他属性目前已经不再使用
  - 比如 `width` 、 `height` 、 `border`

#### img元素- 图片的路径

- 设置 `img` 的 `src` 时，需要给图片设置路径:
  - 网络图片:一个URL地址(后续会专门讲URL);
    - ✓ 网络图片的设置非常简单，给一个地址即可;
  - 本地图片:本地电脑上的图片，后续会和html一起部署到服务

![](https://img.onmicrosoft.cn/2022/12/13/a622aa1b-b138-41da-892b-67d514ce147c.png)

#### img元素 **-** 图片的格式

![](https://img.onmicrosoft.cn/2022/12/13/35ea0a25-3c60-4fac-95f0-ca593a3630ce.png)

### 2.5. a元素(anchor)

#### 常见元素 – a元素

- 在网页中我们经常需要跳转到另外一个链接，这个时候我们使用a元素;

- HTML `<a>` 元素(或称锚(anchor)元素): 
  - 定义 超链接，用于打开新的URL;

- **a**元素有两个常见的属性:

  - `href`:Hypertext Reference的简称

    - ✓ 指定要打开的URL地址;

    - ✓ 也可以是一个本地地址;

  - `target`:该属性指定在何处显示链接的资源。

    - ✓ `_self`:默认值，在当前窗口打开URL; 
    - ✓ `_blank`:在一个新的窗口中打开URL; 
    - ✓ 其他不常用, 后面iframe可以讲一下;

![](https://img.onmicrosoft.cn/2022/12/13/5e9cda4f-96ef-4c3f-ae4d-414e3300b537.png)

#### a元素 - 锚点链接

- 锚点链接可以实现:跳转到**网页中的具体位置**

- 锚点链接有两个重要步骤:
  - 在要跳到的元素上定义一个 `id` 属性;
  - 定义 `a` 元素，并且 `a` 元素的 `href` 指向对应的 `id` ;

![](https://img.onmicrosoft.cn/2022/12/13/b30ac0f0-10a5-4971-ad98-e910538fc11c.png)

#### **a**元素 **-** 图片链接

- 在很多网站我们会发现图片也是可以点击进行跳转的 
  - `img` 元素跟 `a` 元素一起使用，可以实现图片链接;

![](https://img.onmicrosoft.cn/2022/12/13/e935edea-3603-4234-a62c-e13d8ca605ad.png)

- 实现思路:
  - `a` 元素中不存放文字，而是存放一个 `img` 元素; 
  - 也就是 `img` 元素是 `a` 元素的内容;

![](https://img.onmicrosoft.cn/2022/12/13/8b3bf7f7-fdb7-435b-9b87-474d2ad40f45.png)

#### a元素 – 其他URL地址

- **a**元素一定是用来跳转到新网页的么?

  - `https://github.com/coderwhy/HYMiniMall/archive/master.zip`

  - `mailto:12345@qq.com`

![](https://img.onmicrosoft.cn/2022/12/13/0282540f-70b1-4e2c-bba1-07267fc7523e.png)

### 2.6. iframe元素

> * 嵌套网页
> * 某些网页禁止嵌套(原理)
> * 和a元素结合(target另外两个值)

- 利用 `iframe` 元素可以实现:在一个 HTML 文档中嵌入其他HTML文档

- `frameborder` 属性
  - 用于规定是否显示边框 
    - ✓ `1` :显示
    - ✓ `0` :不显示

- `a` 元素 `target` 的其他值:
  - `_parent`: 在父窗口中打开URL 
  - `_top`: 在顶层窗口中打开URL

### 2.6. div/span

* 历史
* 案例

#### div元素、span元素的历史

- 在HTML中**有两个特殊的元素div元素、span元素**: 
  - `div` 元素:division，分开、分配的意思;
  - `span` 元素:跨域、涵盖的意思;

- 这两个元素有什么作用呢? 无所用、无所不用。

- **产生的历史:**
  - 网页的发展早期是没有 `css` ，这个时候我们必须通过语义化元素来告知浏览器一段文字如何显示; 
  - 后来出现了 `css` ，结构和样式需要分离，这个时候html只需要负责结构即可;
    - 比如 `h1` 元素可以是一段普通的文本+CSS修饰样式;
    - 这个时候就出现了 `div` 、 `span` 来编写HTML结构所有的结构，样式都交给css来处理;

- 所以，理论上来说:
  - 我们的页面可以没有 `div` 、 `span` ;
  - 我们的页面也可以全部都是 `div` 、 `span` ;

#### div元素、span元素的区别

- 这个时候有一个问题:**我出现一个不就可以了吗?**

- `div` 元素和 `span` 元素都是**“纯粹的” 容器**，也可以把他们理解成**“盒子”**，它们都是用来**包裹内容**的; 

  - `div` 元素:多个 `div` 元素包裹的内容会在不同的行显示;

    - ✓ 一般作为其他元素的父容器，把其他元素包住，代表一个整体 

    - ✓ 用于把网页分割为多个独立的部分

  - `span` 元素: 多个 `span` 元素包裹的内容会在同一行显示;
    - ✓ 默认情况下，跟普通文本几乎没差别
    - ✓ 用于区分特殊文本和普通文本，比如用来显示一些关键字 

### 2.7. 不常用元素

- `strong` 元素 : 内容加粗、强调;
  - 通常加粗会使用css样式来完成; 
  - 开发中很偶尔会使用一下;

- `i` 元素 : 内容倾斜;
  - 通常斜体会使用css样式来完成;
  - 开发中偶尔会用它来做字体图标(因为看起来像是icon的缩写);

- `code` 元素 : 用于显示代码
  - 偶尔会使用用来显示等宽字体;

- `br` 元素 : 换行元素
  - 开发中已经不使用;

- 更多元素详解，查看MDN文档:
  - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

### 2.8. 全局属性

- 我们发现**某些属性只能设置在特定的元素**中:
  - 比如 img 元素的 `src`、a元素的 `href`;
- 也有一些属性是所有HTML都可以设置和拥有的，这样的属性我们称之为 **“全局属性(Global Attributes)”**
  - 全局属性有很多:https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes 

- **常见的全局属性如下:**

  - `id` : 定义唯一标识符(ID)，该标识符在整个文档中必须是唯一的。其目的是在链接(使用片段标识符)，脚本或样 式(使用 CSS)时标识元素。

  - `class` : 一个以空格分隔的元素的类名(classes )列表，它允许 CSS 和 Javascript 通过类选择器或者DOM方法来选 择和访问特定的元素;

  - `style` : 给元素添加内联样式;

  - `title` : 包含表示与其所属元素相关信息的文本。 这些信息通常可以作为提示呈现给用户，但不是必须的。

## 三. 额外知识

### 3.1. 字符实体

```
&nbsp; 空格
&lt;  小于号
&gt;  大于号
```

- 思考: **我们编写的 HTML代码 会被浏览器解析**。

- 如下代码是**如何被解析**的呢?
  - 如果你使用小于号(<)，浏览器会将其后的文本解析为一个tag。 
  - 但是某些情况下，我们确实需要编写一个小于号(<);
  - 这个时候我们就可以使用字符实体;

![](https://img.onmicrosoft.cn/2022/12/13/f8ac6422-04a6-4b7c-9b93-22f5ce60b68f.png)

- HTML 实体是一段以连字号( `&` )开头、以分号(`;`)结尾的文本(字符串): 
  - 实体常常用于显示保留字符(这些字符会被解析为 HTML 代码)和不可见的字符(如“不换行空格”); 
  - 你也可以用实体来代替其他难以用标准键盘键入的字符;

![](https://img.onmicrosoft.cn/2022/12/13/7b1883ca-55ba-48f0-99d0-b264d7292301.png)

#### 常见的字符实体

![](https://img.onmicrosoft.cn/2022/12/13/80487b5e-14c5-401b-83c4-c31467938da3.png)

#### 课题总结

- 必须掌握的知识:
  - 字符实体的作用和常见的三个字符实体;
  - 掌握URL的概念以及URL的常见规则(开发是离不开的);

- 理解的知识:
  - 元素语义化的含义; 
  - SEO优化的基本原理; 
  - 字符编码的含义;
