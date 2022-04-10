---
title: Python 列表的remove函数
date: 2021-09-29 22:53:38
tags: [列表]
categories: Python
description: 列表的remove函数<br>变量的del命令
cover: https://ik.imagekit.io/zkeq/2021-9-29/4.png
---

### 列表的remove函数

#### 功能

- 删除列表中的某个元素

#### 用法

- `list.remove(item)`

#### 参数

- `item` : 准备删除的函数

#### 注意事项

- 如果删除的成员(元素)不存在 , 会`直接报错`
- 如果被删除的元素有多个 , `只会删除第一个`(从左往右数)
- `remove`函数**不会返回一个新的列表,**而是在`原先的列表`中对元素进行删除(列表是可以被修改的)

### Python内置函数 `del`

- `del把变量完全删除`

### 代码

```python
# coding:utf-8

shops = ['可乐', '洗发水', '可乐', '牛奶', '牛奶', '牙膏', '牙膏']

print('我们的超市有这些内容:%s' % shops)
print('我们的可乐有%s件产品' % shops.count('可乐'))
print('我们的牛奶有%s件产品' % shops.count('牛奶'))
print('我们的牙膏有%s件产品' % shops.count('牙膏'))
print('我们的洗发水有%s件产品' % shops.count('洗发水'))
print('我们要购买一件洗发水')
shops.remove('洗发水')
print('现在我们的洗发水还剩下%s件, 当前已经没有洗发水了' % shops.count('洗发水'))
# shops.remove('洗发水')
shops.remove('可乐')
print('当前可乐还有%s件' % shops.count('可乐'))
shops.remove('可乐')
print('可乐还有%s件' % shops.count('可乐'))

print(shops)

del shops

# print(shops)

```

