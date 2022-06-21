---
title: 饥人谷前端 | JS 入门三座大山之原型
tags: [JS]
description: 本节课主要学习了<br>this, 原型, AJAX
date: 2022-06-21 10:39:32
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

![1](https://img.onmicrosoft.cn/2022-06-21/1.png)

- 如何有两层，写的时候只会走一层
- 两层的话，没有简单的办法篡改的

![19](https://img.onmicrosoft.cn/2022-06-21/19.png)

Obj 有隐藏的属性，如果在里面没有找到，就会去隐藏属性里面去找

> XXX.prototype 存储了 XXX 对象的共同属性
> - 这就是原型

如果没有原型

![16](https://img.onmicrosoft.cn/2022-06-21/16.png)

原型无需重复声明共有属性

`也就是继承吗？`

每个对象都有一个隐藏属性，指向 原型（对象）

如果没有这个隐藏属性，就无法继承共有属性

隐藏属性叫 `__proto__`

只关心 小写对象的隐藏属性，不关心 大写对象的隐藏属性

`prototype` 和 `__proto__` 的区别是什么
- 都存在原型的地址
- 只不过 `protype` 挂在函数上
- `__proto__` 挂在每个新生成的对象上

![17](https://img.onmicrosoft.cn/2022-06-21/17.png)

自己画的图示

![18](https://img.onmicrosoft.cn/2022-06-21/18.png)