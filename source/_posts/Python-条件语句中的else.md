---
title: Python 条件语句中的else
date: 2021-10-06 18:04:50
tags: [条件语句]
description: 本节课主要学习了:<br>条件语句中的else
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/5.jpg
---

### 条件语句中的`else`

#### 什么是else

- `else` 就是对于`if条件不满足的时候`执行`另一个代码块`的`入口`
- ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/1.jpg)

#### 功能

- 当if语句`不满足时`所执行的**代码块**的`入口`

#### 用法

```
if bool_result :
	do
else:
	elsedo  # else语法快 , 需缩进
			# 缩进等级与do语法块一致
```

#### 参数

- `elsedo` : else 语句对应的python代码块

#### 返回值

- `else属于语法` , 没有**返回值**

#### 代码

```python
# coding:utf-8

url = 'https://code.maylove.pub'

if 'code.maylove.pub' in url:
    print('你进入了编程日志记录web,请查阅相关知识')
else:
    print('请前往code.maylove.pub获取内容')

if 'code.maylove.pub' in url:
    _url = 'code.maylove.pub'
else:
    _url = None
print('_url is %s' % _url)

if 3-3 :
    print('a')
else:
    print('b')

```

