---
title: jQuery 设计思想
tags: [js]
description: 本节课主要学习了<br>jQuery 设计思想
date: 2022-07-28 17:20:21
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

#### jQuery 如何获取元素

```js
// CSS 选择器
// https://www.ruanyifeng.com/blog/2009/03/css_selectors.html
$(document) //选择整个文档对象
$('#myId') //选择ID为myId的网页元素
$('div.myClass') // 选择class为myClass的div元素
$('input[name=first]') // 选择name属性等于first的input元素

// 特有的表达式
// https://api.jquery.com/category/selectors/
$('a:first') //选择网页中第一个a元素
$('tr:odd') //选择表格的奇数行
$('#myForm :input') // 选择表单中的input元素
$('div:visible') //选择可见的div元素
$('div:gt(2)') // 选择所有的div元素，除了前三个
$('div:animated') // 选择当前处于动画状态的div元素

// 过滤器
// https://api.jquery.com/category/traversing/filtering/
$('div').has('p'); // 选择包含p元素的div元素
$('div').not('.myClass'); //选择class不等于myClass的div元素
$('div').filter('.myClass'); //选择class等于myClass的div元素
$('div').first(); //选择第1个div元素
$('div').eq(5); //选择第6个div元素

// 在DOM树上移动
// https://api.jquery.com/category/traversing/tree-traversal/
$('div').next('p'); //选择div元素后面的第一个p元素
$('div').parent(); //选择div元素的父元素
$('div').closest('form'); //选择离div最近的那个form父元素
$('div').children(); //选择div的所有子元素
$('div').siblings(); //选择div的同级元素
```

#### jQuery 的链式操作

```js
$('div').find('h3').eq(2).html('Hello');

$('div') //找到div元素
	.find('h3') //选择其中的h3元素
    .eq(2) //选择第3个h3元素
    .html('Hello'); //将它的内容改为Hello
// 原理在于每一步的jQuery操作，返回的都是一个jQuery对象，所以不同操作可以连在一起。
// jQuery还提供了.end()方法，使得结果集可以后退一步：
　　$('div')
　　　.find('h3')
　　　.eq(2)
　　　.html('Hello')
　　　.end() //退回到选中所有的h3元素的那一步
　　　.eq(0) //选中第一个h3元素
　　　.html('World'); //将它的内容改为World
```

>  创建新元素的方法非常简单，只要把新元素直接传入jQuery的构造函数就行了：

```JS
$('<p>Hello</p>');
$('<li class="new">new list item</li>');
$('ul').append('<li>list item</li>');
```

#### 元素的操作：取值和赋值

```js
$('h1').html(); //html()没有参数，表示取出h1的值
$('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值
```

常见的取值和赋值函数如下：

- [.html()](https://api.jquery.com/html/) `取出或设置html内容`
- [.text()](https://api.jquery.com/text/) `取出或设置text内容`
- [.attr()](https://api.jquery.com/attr/) `取出或设置某个属性的值`
- [.width()](https://api.jquery.com/width/) `取出或设置某个元素的宽度`
- [.height()](https://api.jquery.com/height/) `取出或设置某个元素的高度`
- [.val()](https://api.jquery.com/val/) `取出某个表单元素的值`

> 需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值；取值的时候，则是只取出第一个元素的值（[.text()](https://api.jquery.com/text/)例外，它取出所有元素的text内容）。

#### 元素的操作：移动

1. 使用[.insertAfter()](https://api.jquery.com/insertAfter/)，把div元素移动p元素后面：

```js
$('div').insertAfter($('p')); // 返回div元素
```

2. 使用[.after()](https://api.jquery.com/after/)，把p元素加到div元素前面：

```js
$('p').after($('div'));  // 返回p元素
```

```js
.insertAfter()和.after()：在现存元素的外部，从后面插入元素

.insertBefore()和.before()：在现存元素的外部，从前面插入元素

.appendTo()和.append()：在现存元素的内部，从后面插入元素

.prependTo()和.prepend()：在现存元素的内部，从前面插入元素
```

#### **元素的操作：复制、删除和创建**

```js
复制元素使用.clone()。

删除元素使用.remove()和.detach()。两者的区别在于，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用。

清空元素内容（但是不删除该元素）使用.empty()。
```

#### **工具方法**

```js
$.trim() 去除字符串两端的空格。

$.each() 遍历一个数组或对象。

$.inArray() 返回一个值在数组中的索引位置。如果该值不在数组中，则返回-1。

$.grep() 返回数组中符合某种标准的元素。

$.extend() 将多个对象，合并到第一个对象。

$.makeArray() 将对象转化为数组。

$.type() 判断对象的类别（函数对象、日期对象、数组对象、正则对象等等）。

$.isArray() 判断某个参数是否为数组。

$.isEmptyObject() 判断某个对象是否为空（不含有任何属性）。

$.isFunction() 判断某个参数是否为函数。

$.isPlainObject() 判断某个参数是否为用"{}"或"new Object"建立的对象。

$.support() 判断浏览器是否支持某个特性。
```

#### **事件操作**

- 把[事件](https://api.jquery.com/category/events/)直接绑定在网页元素之上。

```js
　　$('p').click(function(){
　　　　alert('Hello');
　　});
```

```js
.blur() 表单元素失去焦点。

.change() 表单元素的值发生变化

.click() 鼠标单击

.dblclick() 鼠标双击

.focus() 表单元素获得焦点

.focusin() 子元素获得焦点

.focusout() 子元素失去焦点

.hover() 同时为mouseenter和mouseleave事件指定处理函数

.keydown() 按下键盘（长时间按键，只返回一个事件）

.keypress() 按下键盘（长时间按键，将返回多个事件）

.keyup() 松开键盘

.load() 元素加载完毕

.mousedown() 按下鼠标

.mouseenter() 鼠标进入（进入子元素不触发）

.mouseleave() 鼠标离开（离开子元素不触发）

.mousemove() 鼠标在元素内部移动

.mouseout() 鼠标离开（离开子元素也触发）

.mouseover() 鼠标进入（进入子元素也触发）

.mouseup() 松开鼠标

.ready() DOM加载完成

.resize() 浏览器窗口的大小发生改变

.scroll() 滚动条的位置发生变化

.select() 用户选中文本框中的内容

.submit() 用户递交表单

.toggle() 根据鼠标点击的次数，依次运行多个函数

.unload() 用户离开页面
```

以上这些事件在jQuery内部，都是[.bind()](https://api.jquery.com/bind/)的便捷方式。使用[.bind()](https://api.jquery.com/bind/)可以更灵活地控制事件，比如为多个事件绑定同一个函数：

```js
　　$('input').bind(
　　　　'click change', //同时绑定click和change事件
　　　　function() {
　　　　　　alert('Hello');
　　　　}
　　);
```

有时，你只想让事件运行一次，这时可以使用[.one()](https://api.jquery.com/one/)方法。

```js
　　$("p").one("click", function() {
　　　　alert("Hello"); //只运行一次，以后的点击不会运行
　　});
```

[.unbind()](https://api.jquery.com/unbind/)用来解除事件绑定。

```js
$('p').unbind('click');
```

所有的事件处理函数，都可以接受一个[事件对象](https://api.jquery.com/category/events/event-object/)（event object）作为参数，比如下面例子中的e：

```js
　　$("p").click(function(e) {
　　　　alert(e.type); // "click"
　　});
```

这个事件对象有一些很有用的属性和方法：

```js
　　event.pageX 事件发生时，鼠标距离网页左上角的水平距离

　　event.pageY 事件发生时，鼠标距离网页左上角的垂直距离

　　event.type 事件的类型（比如click）

　　event.which 按下了哪一个键

　　event.data 在事件对象上绑定数据，然后传入事件处理函数

　　event.target 事件针对的网页元素

　　event.preventDefault() 阻止事件的默认行为（比如点击链接，会自动打开新页面）

　　event.stopPropagation() 停止事件向上层元素冒泡
```

在事件处理函数中，可以用this关键字，返回事件针对的DOM元素：

```js
　　$('a').click(function(e) {
　　　　if ($(this).attr('href').match('evil')) { //如果确认为有害链接
　　　　　　e.preventDefault(); //阻止打开
　　　　　　$(this).addClass('evil'); //加上表示有害的class
　　　　}
　　});
```

有两种方法，可以自动触发一个事件。一种是直接使用事件函数，另一种是使用[.trigger()](https://api.jquery.com/trigger/)或[.triggerHandler()](https://api.jquery.com/triggerHandler/)。

```js
$('a').click();
$('a').trigger('click');
```

#### **特殊效果**

- [Effects | jQuery API Documentation](https://api.jquery.com/category/effects/)

```js
$('h1').show(); //展现一个h1标题
```

```js
.fadeIn() 淡入
.fadeOut() 淡出
.fadeTo() 调整透明度
.hide() 隐藏元素
.show() 显示元素
.slideDown() 向下展开
.slideUp() 向上卷起
.slideToggle() 依次展开或卷起某个元素
.toggle() 依次展示或隐藏某个元素
```

除了[.show()](https://api.jquery.com/show/)和[.hide()](https://api.jquery.com/hide/)，所有其他特效的默认执行时间都是400ms（毫秒），但是你可以改变这个设置。

```js
$('h1').fadeIn(300); // 300毫秒内淡入
$('h1').fadeOut('slow'); // 缓慢地淡出
```

在特效结束后，可以指定执行某个函数。

```js
$('p').fadeOut(300, function() { $(this).remove(); });
```

更复杂的特效，可以用[.animate()](https://api.jquery.com/animate/)自定义。

```js
　　$('div').animate(
　　　　{
　　　　　　left : "+=50", //不断右移
　　　　　　opacity : 0.25 //指定透明度
　　　　},
　　　　300, // 持续时间
　　　　function() { alert('done!'); } //回调函数
　　);
```

[.stop()](https://api.jquery.com/stop/)和[.delay()](https://api.jquery.com/delay/)用来停止或延缓特效的执行。

[$.fx.off](https://api.jquery.com/jQuery.fx.off/)如果设置为true，则关闭所有网页特效。
