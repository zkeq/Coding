---
title: Python 字符串的replace函数
date: 2021-09-25 21:33:17
tags: [字符串]
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-9-25/1.jpg
---

### 字符串的replace函数

#### 功能

- 将字符串中的`old`(旧元素)替换成`new`(新元素),并能指定替换的数量

#### 用法

- `newtr = string.replace(old, new, max)`

#### 参数

- `old` : 被替换的元素.
- `new` : 替代old的新元素
- `max` : 可选,代表替换几个,默认全部替换**全部匹配**的old元素

#### 代码

```python
# coding:utf-8

info = ('百：量词，指数量多，在这里指全部；科：学科，科目。'
        '《中国大百科全书·新闻出版》卷定义为：'
        '“概要介绍人类一切门类知识或某一门类知识的工具书。'
        '供查检所需知识和事实资料之用。'
        '但也具有扩大读者知识视野，帮助系统求知的作用。'
        '它是一个国家和一个时代科学文化发展的标志。”')

a = '百'
b = '指'
c = '人类'
d = '科'
e = '*'
f = '0'
g = '$'
h = '&'

#test = info.replace(a, e)
#print(test)
#test = test.replace(b, f)
#print(test)
#test = test.replace(c, g)
#test = test.replace(d, h)
#print(test)

test = info.replace(a, e).replace(b, f).replace(c, g).replace(d, h)
print(test)


```

