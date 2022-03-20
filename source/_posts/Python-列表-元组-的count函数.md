---
title: Python 列表(元组)的count函数
date: 2021-09-29 22:53:21
tags: [列表,元组]
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-29/4.png
description: count函数
---

### 列表(元组)的count函数

#### 功能

- 返回当前列表中某个成员的个数

#### 用法

- `inttype = list.count(item)`

#### 参数

- `item` :  你想查询个数的元素

#### 注意事项

- 如果查询的成员(元素)不存在,则返回 `0`

- 列表只会检查`完整元素`是否存在需要计算的内容
- `列表`和`元组`的`count`是**一致**的

#### 代码

```python
# coding:utf-8

animals = ['小猫', '小狗', '龙猫', '小猫', '鹦鹉', '小狗', '小兔子', '小猫']

cat = animals.count('小猫')
dog = animals.count('小狗')
l_cat = animals.count('龙猫')
rabbit = animals.count('小兔子')

print('我家的院子里有很多小动物')
print('其中小猫有 %s 只' % cat)
print('小狗有 {} 只'.format(dog))
print(f'龙猫有 {l_cat} 只')
print('小兔子有 %d 只' % rabbit)
print('我们没有小松鼠, 所以松鼠有 %s 只' % animals.count('松鼠'))

animals_dict = [
    {'name': 'dog'},
    {'name': 'dog'},
    {'name': 'cat'}
]

dog_dict_count = animals_dict.count({'name': 'dog'})
print('小狗在动物字典中有 %s 只' % dog_dict_count)

animals_tuple = ('小猫', '小狗', '龙猫', '小猫',
           '鹦鹉', '小狗', '小兔子', '小猫')

cat = animals_tuple.count('小猫')
dog = animals_tuple.count('小狗')
l_cat = animals_tuple.count('龙猫')
rabbit = animals_tuple.count('小兔子')

print('我家的院子里有很多小动物')
print('其中小猫有 %s 只\n小狗有 %s 只\n龙猫有 %s 只\n小兔子有 %s 只'
      % (cat, dog, l_cat, rabbit))

```

