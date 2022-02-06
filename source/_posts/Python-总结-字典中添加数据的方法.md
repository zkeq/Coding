---
title: 'Python 总结 : 字典中添加数据的方法'
date: 2021-10-04 08:43:34
tags: [字典]
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/5.png
description: 本节课主要总结了:<br>字典中添加数据的方法<br>是上节课的总结记录......
categories: Python
---

### 总结 : 字典中添加数据的方法

> 在字典中添加数据的方法有很多种，总结为以下几种

#### 第一种：通过中括号的形式添加

![1](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/1.jpg)

#### 第二种：字典的内置函数update

- 无论是添加还是修改都属于`更新字典`

- 在`update括号`中传入一个新的字典`key`和`value`就可以了。字典会自己去检测`key`是否存在，存在就会覆盖。

![2](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/2.jpg)

#### 第三种：字典的setdefault()函数

- Python 字典 `setdefault() 函数`和 `get()方法` 类似, 如果键不存在于字典中，将会添加键并将值设为默认值，如果字典中包含有给定键，则返回该键对应的值，否则返回为该键设置的值。

![3](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/3.jpg)
