---
title: 饥人谷前端 | JS 概览
tags: [JS]
description: 本节课主要学习了<br>JS 概览 <br> JS 要怎么学？
date: 2022-06-20 17:51:37
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
- 前端的门槛
  - 从 `JavaScript` 开始，你需要绞尽脑汁了

### 学习 JS 基本要求是什么
#### 软要求
- 对你大脑的要求
1. 逻辑能力

三段论逻辑

示例
- JS 的数据类型有 `number` / `string` / `null` / `undefined` / `bool` / `symbol` / `object`
- JS 的函数不是   `number` / `string` / `null` / `undefined` / `bool` / `symbol` 中的任意一种
- 所以，JS 的函数是 `object`

好处
- 写代码基本就是在编写逻辑

2. 质疑自己的能力
- 不要相信人类，包括你自己

![24](https://img.onmicrosoft.cn/2022-06-20/24.png)

![25](https://img.onmicrosoft.cn/2022-06-20/25.png)

3. 抽象思维
- 高级程序员必备能力

![26](https://img.onmicrosoft.cn/2022-06-20/26.png)

#### 硬要求
- 客观上的要求

1. 足够的代码量
   - 达到 `1000` 行 - 新手
   - 达到 `10000` 行 - 熟手
   - 达到 `50000` 行 - 专业选手
   - 只能靠时间积累

![27](https://img.onmicrosoft.cn/2022-06-20/27.png)

2. 了解足够的概念

- 不仅要会写，还要会说

常用常考
- `闭包`、`原型`
- `类`、`继承`
- `MVC`、`Flux`
- `高阶函数`
- `前端工程化`

如何积累
- 在 **课程** 中提炼
- 在 **大脑** 中思考
- 在 **博客** 上总结
- 在 **代码** 中实践

3. 有足够的踩坑经验

- 你以为是工作经验吗？

何谓专家
- 把该领域内所有的错误都犯完的人，就是专家

如何踩坑
- 做项目，而且是 个人项目
- **个人项目** 的意思是所有的代码都是你一个人写的
- 这样你才能全方位踩坑

### JavaScript 概述
- 历史与特点

![28](https://img.onmicrosoft.cn/2022-06-20/28.png)

- https://www.bilibili.com/video/av15989846/

![29](https://img.onmicrosoft.cn/2022-06-20/29.png)
![30](https://img.onmicrosoft.cn/2022-06-20/30.png)
![31](https://img.onmicrosoft.cn/2022-06-20/31.png)
![32](https://img.onmicrosoft.cn/2022-06-20/32.png)
![33](https://img.onmicrosoft.cn/2022-06-20/33.png)
![34](https://img.onmicrosoft.cn/2022-06-20/34.png)
![35](https://img.onmicrosoft.cn/2022-06-20/35.png)
![36](https://img.onmicrosoft.cn/2022-06-20/36.png)
![37](https://img.onmicrosoft.cn/2022-06-20/37.png)
![38](https://img.onmicrosoft.cn/2022-06-20/38.png)
![39](https://img.onmicrosoft.cn/2022-06-20/39.png)
![40](https://img.onmicrosoft.cn/2022-06-20/40.png)
![41](https://img.onmicrosoft.cn/2022-06-20/41.png)
![42](https://img.onmicrosoft.cn/2022-06-20/42.png)
![43](https://img.onmicrosoft.cn/2022-06-20/43.png)

> https://zh.wikipedia.org/wiki/JavaScript

## 历史

### 肇始于网景

1993年，[国家超级电脑应用中心](https://zh.wikipedia.org/wiki/国家超级电脑应用中心)（NCSA）发表了[NCSA Mosaic](https://zh.wikipedia.org/wiki/NCSA_Mosaic)，这是最早流行的图形接口网页浏览器，它在[万维网](https://zh.wikipedia.org/wiki/全球資訊網)的普及上发挥了重要作用[[11\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-11)。1994年，Mosaic的主要开发人员随即创立了[Netscape](https://zh.wikipedia.org/wiki/Netscape)公司，并雇用了许多原来的NCSA Mosaic开发者用来开发[Netscape Navigator](https://zh.wikipedia.org/wiki/Netscape_Navigator)，该公司的目标是取代NCSA Mosaic成为世界第一的网页浏览器。在四个月内，已经占据了四分之三的浏览器市场，并成为1990年代互联网的主要浏览器[[12\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-12)。网景预见到网络需要变得更动态。公司的创始人[马克·安德森](https://zh.wikipedia.org/wiki/马克·安德森)认为[HTML](https://zh.wikipedia.org/wiki/HTML)需要一种[胶水语言](https://zh.wikipedia.org/wiki/胶水语言)，让网页设计师和兼职程序员可以很容易地使用它来组装图片和插件之类的组件，且代码可以直接编写在网页标记中。

1995年，网景招募了[布兰登·艾克](https://zh.wikipedia.org/wiki/布蘭登·艾克)，目标是把[Scheme](https://zh.wikipedia.org/wiki/Scheme)语言嵌入到Netscape Navigator浏览器当中。但更早之前，网景已经跟[昇阳](https://zh.wikipedia.org/wiki/昇陽電腦)合作在Netscape Navigator中支持[Java](https://zh.wikipedia.org/wiki/Java)，这时网景内部产生激烈的争论。后来网景决定发明一种与Java搭配使用的辅助脚本语言并且语法上有些类似，这个决策导致排除了采用现有的语言，例如[Perl](https://zh.wikipedia.org/wiki/Perl)、[Python](https://zh.wikipedia.org/wiki/Python)、[Tcl](https://zh.wikipedia.org/wiki/Tcl)或Scheme。为了在其他竞争提案中捍卫JavaScript这个想法，公司需要有一个可以运作的原型。艾克在1995年5月仅花了十天时间就把原型设计出来了。

最初命名为**Mocha**，1995年9月在Netscape Navigator 2.0的Beta版中改名为**LiveScript**，同年12月，Netscape Navigator 2.0 Beta 3中部署时被重命名为**JavaScript**，当时网景公司与昇阳电脑公司组成的开发联盟为了让这门语言搭上Java这个编程语言“热词”，因此将其临时改名为JavaScript，日后这成为大众对这门语言有诸多误解的原因之一。

### 微软采纳

[微软公司](https://zh.wikipedia.org/wiki/微軟公司)于1995年首次推出[Internet Explorer](https://zh.wikipedia.org/wiki/Internet_Explorer)，从而引发了与Netscape的[浏览器大战](https://zh.wikipedia.org/wiki/浏览器大战)。微软对Netscape Navigator[解释器](https://zh.wikipedia.org/wiki/直譯器)进行了[逆向工程](https://zh.wikipedia.org/wiki/逆向工程)，创建了[JScript](https://zh.wikipedia.org/wiki/JScript)，以与处于市场领导地位的网景产品同台竞争。JScript也是一种JavaScript实现，这两个JavaScript语言版本在浏览器端共存意味着语言标准化的缺失，发展初期，JavaScript的标准并未确定，同期有网景的JavaScript，微软的JScript双峰并峙。除此之外，微软也在网页技术上加入了不少专属对象，使不少网页使用非微软平台及浏览器无法正常显示，导致在浏览器大战期间网页设计者通常会把“用Netscape可达到最佳效果”或“用IE可达到最佳效果”的标志放在主页。

### 标准化

1996年11月，网景正式向[ECMA](https://zh.wikipedia.org/wiki/Ecma国际)（欧洲计算机制造商协会）提交语言标准。1997年6月，ECMA以JavaScript语言为基础制定了[ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)标准规范ECMA-262。JavaScript成为了ECMAScript最著名的实现之一。除此之外，[ActionScript](https://zh.wikipedia.org/wiki/ActionScript)和[JScript](https://zh.wikipedia.org/wiki/JScript)也都是[ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)规范的实现语言。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。

## 概论

一般来说，完整的JavaScript包括以下几个部分：

- ECMAScript，描述了该语言的语法和基本对象
- 文档对象模型（[DOM](https://zh.wikipedia.org/wiki/DOM)），描述处理**网页内容**的方法和接口
- 浏览器对象模型（[BOM](https://zh.wikipedia.org/wiki/浏览器对象模型)），描述与**浏览器**进行交互的方法和接口

JavaScript的基本特点如下：

- 是一种解释性脚本语言（代码不进行预编译）。
- 主要用来向HTML页面添加**交互行为**。
- 可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。

JavaScript常用来完成以下任务：

- 嵌入动态文本于HTML页面
- 对浏览器事件作出响应
- 读写HTML元素
- 在数据被提交到服务器之前验证数据
- 检测访客的浏览器信息
- 控制[cookie](https://zh.wikipedia.org/wiki/Cookie)，包括创建和修改等

## 特性

不同于[服务器](https://zh.wikipedia.org/wiki/伺服器)端脚本语言，例如[PHP](https://zh.wikipedia.org/wiki/PHP)与[ASP](https://zh.wikipedia.org/wiki/Active_Server_Pages)，JavaScript主要被作为[客户端](https://zh.wikipedia.org/wiki/客户端)脚本语言在用户的浏览器上运行，不需要服务器的支持。所以在早期程序员比较青睐于JavaScript以减少对服务器的负担，而与此同时也带来另一个问题：安全性。而随着服务器变得强大，现在的程序员更喜欢运行于服务端的脚本以保证安全，但JavaScript仍然以其跨平台、容易上手等优势大行其道。同时，有些特殊功能（如AJAX）必须依赖JavaScript在客户端进行支持。随着引擎如V8和框架如[Node.js](https://zh.wikipedia.org/wiki/Node.js)的发展，及其[事件驱动](https://zh.wikipedia.org/wiki/事件驅動)及[异步IO](https://zh.wikipedia.org/wiki/异步IO)等特性，JavaScript逐渐被用来编写[服务器](https://zh.wikipedia.org/wiki/伺服器)端程序。且在近几年[[何时？\]](https://zh.wikipedia.org/wiki/Wikipedia:不要模棱两可)中，[Node.js](https://zh.wikipedia.org/wiki/Node.js)的出世，让JavaScript也具有了一定的服务器功能。

以下是[ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)通常实现所共有的特性。

### 指令式与结构化

JavaScript从支持许多C语言的结构化编程语法（例如if条件语句、while循环、switch语句、do-while循环等）。但[作用域](https://zh.wikipedia.org/wiki/作用域)是一个例外：JavaScript在过去只支持使用var关键字来定义变量的函数作用域。ECMAScript 2015加入了let关键字来支持块级作用域。意味着JavaScript现在既支持函数作用域又支持块级作用域。和C语言一样，JavaScript中的[表达式](https://zh.wikipedia.org/wiki/表达式)和语句是不同的。有一点格式上的不同，JavaScript支持自动在语句末添加分号，因此允许忽略语句末尾的分号。

### 弱类型

Javascript是[弱类型](https://zh.wikipedia.org/wiki/強弱型別)的，这意味着变量可以被隐式地转换为另一个类型。

- 二元运算符`+`会把两个操作数转换为字符串，除非两个操作数都为数字类型。这是因为`+`也表示字符串连接操作。
- 二元操作符`-`会把两个操作数转换为数字类型。
- 一元操作符，包括`+`和`-`，都会把操作数转换为数字。

下列为变量转换为字符串的例子：

- 字符串类型不变。
- 数字会转换为其字符串表示。
- 数组的元素会转换为字符串，然后连接成通过逗号`,`分隔的长字符串。
- 其它对象会转换为`[object Object]`，其中`Object`中该对象的[构造函数](https://zh.wikipedia.org/wiki/构造函数)名。

类型的隐藏转换，是JavaScript受到批评的原因之一，因为其增加了规则的复杂度与发生错误的可能性。

|     左操作数      | 操作符 |     右操作数     |             结果              |
| :---------------: | :----: | :--------------: | :---------------------------: |
|  `[]`（空数组）   |  `+`   |  `[]`（空数组）  |       `""`（空字符串）        |
|  `[]`（空数组）   |  `+`   |  `{}`（空对象）  | `"[object Object]"`（字符串） |
| `false`（布尔值） |  `+`   | `[]`（空字符串） |      `"false"`（字符串）      |
| `"123"`（字符串） |  `+`   |   `1`（数字）    |      `"1231"`（字符串）       |
| `"123"`（字符串） |  `-`   |   `1`（数字）    |        `122` （数字）         |

### 动态化

#### 类型

JavaScript是[动态类型](https://zh.wikipedia.org/wiki/动态类型)的，正如大部分脚本语言，其类型与值而不是与变量关联。例如变量可以为数值，随后又可被赋值为字符串。JavaScript提供了包括[鸭子类型](https://zh.wikipedia.org/wiki/鸭子类型)在内的方法来检测变量类型。

#### 运行时估值

Javascript提供`eval()`函数，可以在运行时直接执行Javascript语句。

### 基于原型的面向对象

在JavaScript中，对象是[关联数组](https://zh.wikipedia.org/wiki/关联数组)，通过原型（prototype，见下）进行扩充。每一个字符串键值提供对象的一个属性的名称。可以通过两种效果相同的方式进行访问：使用点号（`obj.x`）或使用方括号（`obj['x']`）。属性可以在运行时添加、重定义或删除。一个对象大多数属性（包括来自原型继承链的属性）都可以通过 `for...in`循环访问。

#### 原型

JavaScript使用[原型](https://zh.wikipedia.org/wiki/基于原型编程)，而许多其它面向对象语言使用类用于实现继承。有了原型，使得在JavaScript中模拟基于类的面向对象特征变成可能。

#### 函数作为对象构造器

函数在JavaScript中兼作为对象构造函数。在函数调用前加上`new`会创建一个原型的实例，并继承来自构造函数的属性和方法（包括来自`Object`原型）。ECMAScript 5提供`Object.create`方法，可以显式地创建实例还不是自动从`Object`继承。构造函数的`prototype`属性决定了用于新对象的内部原型。可以通过修改构造函数的原型的方法来为对象添加新的方法。也可以修改JavaScript的内部对象的原型，如`Array`或`Object`。尽管可以这么做，但对`Object`原型进行修改并不是一个好的做法。因为大多数JavaScript对象都会从`Object`继承，且不会希望其原型做了修改。

#### 函数作为方法

与大多数而向对象的语言不同，在JavaScript中函数定义与[方法](https://zh.wikipedia.org/wiki/方法_(计算机科学))定义没有明显的区别。唯一的区别在于调用时：当函数被作为方法调用时，函数的`this`会指向调用此函数的对象。

#### 传统的类定义与使用格式

ECMAScript ES6加入了对`class`、`extends`关键字的支持，使得类的定义与继承行为更加类似于其它面向对象语言，同时也更加容易使用。

### 函数式

在JavaScript中，函数是[一等](https://zh.wikipedia.org/wiki/头等函数)的，函数也被认为是对象。因此，函数也可以有属性与方法，例如`call()`和`bind`等。嵌套函数指定义于其它函数内部的函数，在外部函数被调用时，嵌套函数会被创建。另外，嵌套函数是一个[闭包](https://zh.wikipedia.org/wiki/闭包_(计算机科学))，在外部函数的作用域（包括常量，局部变量和参数）都成为内部函数状态的一部分，甚至在外部函数执行完毕后，内部函数的状态依然保留。JavaScript同时也支持[匿名函数](https://zh.wikipedia.org/wiki/匿名函数)。

### 其它

#### 运行时环境

JavaScript通常依赖于运行时环境（例如[浏览器](https://zh.wikipedia.org/wiki/网页浏览器)）来提供对象和方法，脚本可以通过这些对象和方法与环境（例如网页[DOM](https://zh.wikipedia.org/wiki/文档对象模型)）进行交互。它还依赖于运行时环境来提供包含/导入脚本（例如[HTML](https://zh.wikipedia.org/wiki/HTML)的`<script>`元素）的功能。这本身不是语言功能，但是在大多数JavaScript实现中很常见。

#### 异步

JavaScript一般来说是单线程的。为了[并发](https://zh.wikipedia.org/wiki/并发)地处理事件，JavaScript程序输入/输出是使用[事件](https://zh.wikipedia.org/wiki/事件)和[回调函数](https://zh.wikipedia.org/wiki/回调函数)执行的。例如，这意味着JavaScript可以在等待数据库查询返回信息时处理鼠标单击。ECMAScript ES6引入了`Promise`用于优雅地处理异步事件，其可以使得传统的基于回调的异步代码更加清晰与简单。

#### 变长参数

JavaScript中函数的参数长度是可变的，在函数内部可以通过`arguments`对象访问这些参数。

> Javascript的10个设计缺陷  :
>
> http://www.ruanyifeng.com/blog/2011/06/10_design_defects_in_javascript.html

**1. 不适合开发大型程序**

Javascript没有名称空间（namespace），很难模块化；没有如何将代码分布在多个文件的规范；允许同名函数的重复定义，后面的定义可以覆盖前面的定义，很不利于模块化加载。

**2. 非常小的标准库**

Javascript提供的标准函数库非常小，只能完成一些基本操作，很多功能都不具备。

**3. null和undefined**

null属于对象（object）的一种，意思是该对象为空；undefined则是一种数据类型，表示未定义。

```js
　　typeof null; // object
　　typeof undefined; // undefined
```

两者非常容易混淆，但是含义完全不同。

```js
　　var foo;
　　alert(foo == null); // true
　　alert(foo == undefined); // true
　　alert(foo === null); // false
　　alert(foo === undefined); // true
```

在编程实践中，null几乎没用，根本不应该设计它。

**4. 全局变量难以控制**

Javascript的全局变量，在所有模块中都是可见的；任何一个函数内部都可以生成全局变量，这大大加剧了程序的复杂性。

　

```js
　a = 1;
　　(function(){
　　　　b=2;
　　　　alert(a);
　　})(); // 1
　　alert(b); //2
```

**5. 自动插入行尾分号**

Javascript的所有语句，都必须以分号结尾。但是，如果你忘记加分号，解释器并不报错，而是为你自动加上分号。有时候，这会导致一些难以发现的错误。

比如，下面这个函数根本无法达到预期的结果，返回值不是一个对象，而是undefined。

　

```js
　function(){
　　　　return
　　　　　　{
　　　　　　　　i=1
　　　　　　};
　　}
```

原因是解释器自动在return语句后面加上了分号。

　　

```js
function(){
　　　　return;
　　　　　　{
　　　　　　　　i=1
　　　　　　};
　　}
```

**6. 加号运算符**

+号作为运算符，有两个含义，可以表示数字与数字的和，也可以表示字符与字符的连接。

```js
　　alert(1+10); // 11
　　alert("1"+"10"); // 110
```

如果一个操作项是字符，另一个操作项是数字，则数字自动转化为字符。

```js
　　alert(1+"10"); // 110
　　alert("10"+1); // 101
```

这样的设计，不必要地加剧了运算的复杂性，完全可以另行设置一个字符连接的运算符。

**7. NaN**

NaN是一种数字，表示超出了解释器的极限。它有一些很奇怪的特性：

```js
　　NaN === NaN; //false
　　NaN !== NaN; //true
　　alert( 1 + NaN ); // NaN
```

与其设计NaN，不如解释器直接报错，反而有利于简化程序。

**8. 数组和对象的区分**

由于Javascript的数组也属于对象（object），所以要区分一个对象到底是不是数组，相当麻烦。[Douglas Crockford](http://javascript.crockford.com/remedial.html)的代码是这样的：

```js
　　if ( arr &&
　　　　typeof arr === 'object' &&
　　　　typeof arr.length === 'number' &&
　　　　!arr.propertyIsEnumerable('length')){

　　　　alert("arr is an array");

　　}
```

**9. == 和 ===**

==用来判断两个值是否相等。当两个值类型不同时，会发生自动转换，得到的结果非常不符合直觉。

```js
　　"" == "0" // false
　　0 == "" // true
　　0 == "0" // true
　　false == "false" // false
　　false == "0" // true
　　false == undefined // false
　　false == null // false
　　null == undefined // true
　　" \t\r\n" == 0 // true
```

因此，推荐任何时候都使用"==="（精确判断）比较符。

**10. 基本类型的包装对象**

Javascript有三种基本数据类型：字符串、数字和布尔值。它们都有相应的建构函数，可以生成字符串对象、数字对象和布尔值对象。

```js
　　new Boolean(false);
　　new Number(1234);
　　new String("Hello World");
```

与基本数据类型对应的对象类型，作用很小，造成的混淆却很大。

```js
　　alert( typeof 1234); // number
　　alert( typeof new Number(1234)); // object
```

关于Javascript的更多怪异行为，请参见[Javascript Garden](https://bonsaiden.github.com/JavaScript-Garden/zh/)和[wtfjs.com](http://wtfjs.com/)。