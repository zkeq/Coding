---
title: Python 字符串与列表间的转换
date: 2021-10-05 18:24:17
tags: [类型转换]
description: 本节课主要学习了:<br>字符串与列表间的转换<br>split函数和join函数
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-5/1.png
---

### 字符串与列表间的转换

#### 字符串转列表的函数--split

##### 功能

- 将字符串以`一定规则`**切割**转成`列表`

##### 用法

- `string.split(sep=None, maxsplit=-1)`

##### 参数

- `sep`:切割的规则符号,不填写**,默认空格**,如字符串**无空格**`不分割`生成列表

- `maxsplit` : 根据切割符号**切割的次数**, 默认**-1无限制**

##### 返回值

- 返回一个**列表**

----------------------

#### 列表转字符串的函数--join

##### 功能

- 将`列表`以**一定规则**转成`字符串`(元组,集合也可以)

##### 用法

- `'sep'.join(iterable)`

##### 参数

- `sep`: 生成字符串用来分割`列表每个元素`的符号
- `iterable`: **非数字类型**的`列表或元组或集合`

##### 返回值

- 返回一个字符串

```python
# coding:utf-8

a = 'abc'
print(a.split())

b = 'a,b,c'
print(b.split(','))

c = 'a|b|c|d'
print(c.split('|', 1))

d = 'a|b|c|d'
print(d.split('|', 2))

f = 'a~b~c'
print(f.split('~', 2))

test = ['a', 'b', 'c']
test_str = '|'.join(test)
print(test_str)

test2 = ['c', 'a', 'b']
print('|'.join(test2))

# test3 = [{'name': 'dewei'}, {'name': 'xiaomu'}]
# print('.'.join(test3))

# test4 = [('a', 'v'), ('a', 'b')]
# print(''.join(test4))

# test5 = [None, True]
# print('.'.join(test5))

sort_str = 'a b c d f i p q c'
sort_list = sort_str.split()
print(sort_list)
sort_list.sort()
print(sort_list)
sort_str = ' '.join(sort_list)
print(sort_str)

sort_str_new = 'abcdfipqc'
print(sort_str_new)
res = sorted(sort_str_new)
print(''.join(res))

seq = ('a', 'b', 'c')
seq2 = {'a', 'b','c'}
print('#'.join(seq))
print('$'.join(seq2), type(seq2))

```

