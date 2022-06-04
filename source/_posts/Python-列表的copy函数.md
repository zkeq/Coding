---
title: Python 列表的copy函数
date: 2021-10-01 22:41:45
tags: [列表]
categories: Python
description: 本节课主要学习了:<br>列表的copy函数<br>以及浅拷贝与深拷贝的的定义
cover: https://img.onmicrosoft.cn/2021-10-1/4.png
---

### 列表的copy函数

#### 功能

- 将`当前列表`复制一份**相同的列表**,新列表与旧列表**内容相同**,但**内存空间不同**

#### 用法

- `list.copy()` -> 该函数**无参数** , 返回一个一模一样的列表

#### `copy`与`二次赋值`的区别

- 二次赋值的变量与原始变量享有`相同内存空间`

- `copy函数`创建的新列表与原始列表**不是一个内存空间**,`不同享数据变更`
- `copy` 属于 `浅拷贝`

```python
a = [1,2,3]
b = a
```

```python
a = [1,2,3]
b = a.copy()
b.append(4)
b  ->  [1,2,3,4]
a  ->  [1,2,3]
```

#### 浅拷贝与深拷贝

- 深拷贝内存空间不同，不共享数据；
- 浅拷贝是对最外层的数据创建一个新的间来存储，而对内层的内存地址进行引用;

![1](https://img.onmicrosoft.cn/2021-10-1/1.jpg)

![2](https://img.onmicrosoft.cn/2021-10-1/2.jpg)

#### 代码

```python
# coding:utf-8

old_list = ['python', 'django', 'flask']

new_list = old_list
new_list.append('tornado')
print(new_list)
print(old_list)
print(id(new_list), id(old_list))

old_list.remove('tornado')
print(new_list, old_list)

# old_list.clear()
# print(new_list, old_list)

del new_list
print(old_list)

old_list_copy = ['python', 'django', 'flask']
new_list_copy = old_list_copy.copy()

print(old_list_copy, new_list_copy)
new_list_copy.append('tornado_copy')
print(old_list_copy, new_list_copy)
print(id(old_list_copy), id(new_list_copy))

```
