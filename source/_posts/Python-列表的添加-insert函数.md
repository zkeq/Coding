---
title: Python 列表的添加-insert函数
date: 2021-09-29 22:52:58
tags: [列表]
categories: Python
description: insert函数
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-29/4.png
---

### 列表的添加-insert函数

#### 功能

- 将一个元素添加到当前列表的指定位置中

#### 用法

- list.insrt(index, new_item)

#### 参数

- `index` : 新的元素放在哪个位置(数字)`[整形]`
- `new_item` : 添加的新元素(成员)

#### insert与append的区别

- `append`只能添加到列表的结尾,而`insert`可以选择任何一个位置
- 如果`insert`传入的位置列表中**不存在**,则将新元素添加到列表**结尾**
- `字符串` `元组` `列表` `元素`的位置是从0开始计算的
- `insert`之后    其他的元素向后顺沿

#### 代码

```python
# coding:utf-8

students = [
    {'name': 'dewei', 'age': 33, 'sex': '男', 'id': 1, 'top': '174'},
    {'name': '小慕', 'age': 10, 'sex': '男', 'id': 2, 'top': '175'}
]

xiaoyun = {
    'name': 'xiaoyun',
    'age': 18,
    'sex': '女',
    'id': 3,
    'top': '160'
}

students.insert(0, xiaoyun)
print(students)

xiaogao = {
    'name': 'xiaogao',
    'age': 18,
    'id': 4,
    'top': '188'
}

students.insert(3, None)
students.insert(4, None)
students.insert(5, None)

students.insert(6, xiaogao)
print(students)

xiaoming = {
    'name': 'xiaoming',
    'age': 19,
    'sex': '男',
    'id': 5,
    'top': '178'
}

students.insert(3, xiaoming)
print(students[1])
print(students[2])
print(students[3])
print(students[4])
print(students[5])
print(students[6])
print(students[7])

```

