---
title: Python 字典中的末尾删除函数--popitem
date: 2021-10-04 08:45:46
tags: [字典]
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/5.png
description: 本节课主要学习了:<br>popitem的用法和注意事项
categories: Python
---

### 字典中的末尾删除函数--`popitem`

#### 功能

- 删除当前字典`末尾一组键值对`并将其返回

#### 用法

- `dict.popitem()`  --  无需传参
- `>> 返回被删除的键值对,用元组包裹 0索引是key, 1索引是value`

#### 注意事项

- 如字典为空,则直接报错

#### 代码

```python
# coding:utf-8

students = {'dewei': '到', 'xiaomu': '在', 'xiaoyun': '在呢', 'xiaogao': '在'}

print('xiaogao 在吗')
xiaogao = students.popitem()
print('{}喊{}'.format(xiaogao[0], xiaogao[1]))
print('xiaoyun 在吗')
xiaoyun = students.popitem()
print('{}喊{}'.format(xiaoyun[0], xiaoyun[1]))
print('xiaomu 在吗')
xiaomu = students.popitem()
print('{}喊{}'.format(xiaomu[0], xiaomu[1]))
print('dewei在吗')
dewei = students.popitem()
print('{}喊{}'.format(dewei[0], dewei[1]))
print(students)

```
