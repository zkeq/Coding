---
title: Python 面向对象中常用术语
date: 2021-10-28 22:23:05
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>面向对象编程中的常用术语
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 面向对象中常用术语

> 为大家总结了面向对象中常用术语，请大家认真学习：

**1、类：** 可以理解是一个模板，通过它可以创建出无数个具体实例。

比如，定义一个Cat类，通过它可以创建出无数个实例来代表各种不同特征的猫。

![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-24/1.jpg)

**2、对象：** 类并不能直接使用，通过类创建出的实例（又称对象）才能使用，比如以上案例创建类
对象cat。
**3、属性：** 类中的所有变量称为属性。比如以上案例中类的变量有 颜色color 、体重 weight 、种类k
ind 、年龄age。
**4、方法：** 类中的所有函数通常称为方法。不过，和函数所有不同的是，类方法至少要包含一个 sel
f 参数，类方法无法单独使用，只能和类的对象一起使用，比如以上案例中的方法有eat()、action
()、sleep()，创建对象后就可以直接调用类中的方法和属性。
面向对象最重要的概念就是类和实例，要牢记类是抽象的模板，而实例是根据类创建出来的一个个
具体的“对象”，每个对象都拥有相同的方法。
