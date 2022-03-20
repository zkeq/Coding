---
title: Python 字典的删除
date: 2021-10-04 08:44:49
tags: [字典]
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/5.png
description: 本节课主要学习了:<br>clear函数和pop函数<br>[]以及del在字典中的用法
categories: Python
---

### 字典的删除

#### clear函数

##### 功能

- 清空当前字典中所有数据

##### 用法

- `dict.clear()`  -> **无参数**,**无返回值**

#### pop函数的功能与用法

##### 功能

- **删除**字典中`指定的key`,并**将其结果返回**,如果**key不存在则报错**

##### 用法

- dict.pop(key)  --  key 希望被删掉的键
- `>>返回这个key对应的值(value)`

#### del 在字典中的用法

```python
  my_dict = {'name': 'dewei', 'age': 33}
  
  del my_dict['name']
  print(my_dict)
  >> {'age': 33}
  
  del my_dict
print(my_dict) -> 报错 , 整个字典对象已被删除
```

#### 代码

```python
# coding:utf-8

projects = {
    'ipad': {'name': 'ipad', 'price': 2200, 'decs': '平板电脑'},
    'iphone': {'name': 'iphone', 'price': 3000, 'desc': '智能手机'},
    'pc': {'name': 'pc', 'price': 5000, 'desc': '台式电脑'},
    'mac': {'name': 'mac', 'price': 8000, 'desc': '平板电脑'}
}

print(projects.keys())

print('一个中学生购买了{},价格是{}'.format(projects['pc']['name'], projects['pc']['price']))
projects.pop('pc')
print(projects.keys())

result = projects.pop('mac')
print('一个程序员购买了{},它的价格是{}'.format(result['name'], result['price']))
print(projects.keys())

print('{} 和 {} 都被卖出了, 他们一共花费了{}元'.format(
    projects['ipad']['name'], projects['iphone']['name'],
    projects['ipad']['price'] + projects['iphone']['price']
))
projects.clear()
print(projects.keys())

del  projects
# print(projects)

```

