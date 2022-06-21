---
title: 饥人谷前端 | 内存图与 JS 世界
tags: [JS]
description: 本节课主要学习了<br>【JS全解】内存图与JS世界（精品课）
date: 2022-06-21 08:33:28
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
> 注意⚠️：这节课会对你的整个前端生涯有重要影响，少部分同学现在听不懂不要紧，等你写 JS 代码一个月以上，就会发现本课的深意了。

![1](https://img.onmicrosoft.cn/2022-06-21/1.png)

操作系统常识
- 一些基础知识

### 英语小课堂

![2](https://img.onmicrosoft.cn/2022-06-21/2.png)

![3](https://img.onmicrosoft.cn/2022-06-21/3.png)

![4](https://img.onmicrosoft.cn/2022-06-21/4.png)

- `JS` 是单线程的
  - 跨线程通信
- `DOM` 操作慢

![5](https://img.onmicrosoft.cn/2022-06-21/5.png)

![6](https://img.onmicrosoft.cn/2022-06-21/6.png)

### 内存图



![7](https://img.onmicrosoft.cn/2022-06-21/7.png)

![8](https://img.onmicrosoft.cn/2022-06-21/8.png)

![9](https://img.onmicrosoft.cn/2022-06-21/9.png)

![11](https://img.onmicrosoft.cn/2022-06-21/11.png)

从这个内存存储情况图中可以看出，在每一个标签页的线程中，除了浏览器提供的功能模块，还开辟了：代码区（JS代码）、不知道什么区（这个区用来存储JS代码声明的变量）、Stack区（栈）和Heap区（堆）。
其实这个内存存储情况图并不完整，还有很多区域省略了，如：调用栈、任务队列等。
每种浏览器的非配规则并不一样。但我们主要研究的都是Stack区（栈）和Heap区（堆）。


- 数据分为两种：非对象和对象
- 非对象都存在 `Stack`
- 对象都存在 `Heap`
- = 号总是会把右边的东西复制到左边（不存在什么传值和传址）

![10](https://img.onmicrosoft.cn/2022-06-21/10.png)

#### 区分值和地址
- 不会画 `内存图` 的人才需要做这件事

#### 声明变量
```js
var a = 1
var b = a
var person = {name:'frank',child:{name:'jack'}}
var person1 = person
```

![10](https://img.onmicrosoft.cn/2022-06-21/12.png)

#### 对象被篡改了
代码
```js
var person = {name: "frank"}
var person2 = person
person2.name = 'ryan'
console.log(person.name) // 'ryan'
// 因为改的是 Heap 区的数值，而变量名只是指向于 Stack 而已
```

#### Stack&Heap

上图红色的区域便是 `Stack` 区和 `Heap` 区。
这两个区域都是用于存储数据的，但是并不存储变量名。

#### Stack&Heap的特点

- `Stack区特点`：
  - 所有数据都按顺序存放。
  - 所以 `Stack` 区的数据存储后比较难进行增删
  - 因此 `Stack` 区存储的数据一般是 
    - 具体的数据（可以用64位2进制表示清楚，如：`Number`，`String`，`Boolean`）
    - 或是一个指向 `Heap` 区的地址 。

- `Heap区的特点`：
  - 所有数据随机存放。所以 `Heap` 区的数据比较适合增删改，适合存储 对象类型的数据。

这个图很重要：

![10](https://img.onmicrosoft.cn/2022-06-21/10.png)


### JS 世界

- window 对象（浏览器提供）
  - console 挂载到 window 上
  - document 挂载到 window 上
  - Object 挂载到 window 上
    - 对象
    - `var person = {}` 等价于 `var person = new Object()`
  - Array 挂载到 window 上
    - 一种特殊的对象
    - `var a = [1,2,3]` 等价于 `var a = new Array(1,2,3)`
  - Function 挂载到 window 上
    - 一种特殊的对象
    - `function f(){}` 等价于 `var f = new Function()`

![10](https://img.onmicrosoft.cn/2022-06-21/13.png)

为什么什么都挂在 window 上
- 因为方便，挂在 window 上的东西可有在任何地方 **直接** 调用

把 window 用内存图画出来
![11](https://img.onmicrosoft.cn/2022-06-21/14.png)

更简单的画法
![12](https://img.onmicrosoft.cn/2022-06-21/15.png)

#### 细节

关于window
- `window` 变量 和 `window` 对象是两个东西
- `window` 变量(不知道什么区）是一个容器，存放 `window(Heap)` 对象的地址
- `window` 对象是 `Heap` 里的一坨数据
- 变量只是一个代号，只不过这里使用window变量指向window对象。不信的话，可有让 `var x = window`，那么这个 x 就指向了 window 对象，但是这种做法反人类.

同理
- `console` 和 `console 对象`不是用一个同喜
- `Object` 和 `Object 函数对象`不是同一个同喜
- 前者是内存地址，后者是一坨数据