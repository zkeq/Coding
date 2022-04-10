---
title: Python字符串的填充和计数
date: 2021-09-20 14:41:58
tags: [字符串]
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-9-20/2.png
description: 本节课主要学习了 <br> Zfill函数(补全函数) <br> Count函数(计数函数) 的用法
---

## zfill函数

#### 功能

为字符串定义长度, 如不满足,缺少的部分用0填充

#### 用法

`newstr = string.zfill(width)`

#### 参数

`width`: 新字符串希望的宽度

#### 注意事项

- 与字符串的字符无关
- 如果定义长度小于当前字符串长度,则不发生变化

#### 代码 

```python
# coding:utf-8

heart = 'love'


if __name__ == '__main__':
        print(' t  ' + heart)
        print('t    ' + heart)
        print(heart.zfill(10))
        print(heart.zfill(9))
        print(heart.zfill(8))
        print(heart.zfill(6))
        print(heart.zfill(4))

```

-------------------------

## 字符串的count函数

#### 功能

返回当前字符串中某个成员(元素)的个数

#### 用法

`inttpe = string.count(item)`

#### 参数

`item`: 查询个数的元素

#### 注意事项

- 返回的是整形
- 如果查询的成员(元素)不存在,则返回0

```python
# coding:utf-8

info = '''
    The mission of the Python Software Foundation is to promote, 
    protect, and advance the Python programming language, 
    and to support and facilitate the growth of a diverse and 
    international community of Python programmers.
'''

a = info.count('a')
b = info.count('b')
c = info.count('c')
d = info.count('d')
e = info.count('e')
f = info.count('f')

print(a, b, c, d, e, f)
number_list = [a, b, c, d, e, f]
print(number_list)
print('在列表中最大的数值是', max(number_list))

number_dict = {
            'a': a,
            'b': b,
            'c': c,
            'd': d,
            'e': e,
            'f': f,
}
print('每个成员对应的数值分别是', number_dict)

```

