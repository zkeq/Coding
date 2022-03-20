---
title: Python 函数的递归
date: 2021-10-20 23:14:48
tags: [函数]
categories: Python
description: 本节课主要学习了<br>函数的递归
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 函数的递归

#### 什么是递归函数

- 一个函数不停的将自己反复执行

#### 递归的定义方法

- 通过返回值 `直接执行自身函数`

#### 递归函数的说明

- 内存溢出
- 避免滥用递归

#### 代码

```python
# coding:utf-8

count = 0


def test():
    global count
    count += 1

    if count < 5:
        print('count条件不满足, 我要重新执行我自己! 当前count是%s' % count)
        return test()
    else:
        print('count is %s' % count)


test()
```
