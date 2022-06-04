---
title: Python Python的os包
tags: [模块和包]
description: 本节课主要学习了<br>Python的os包
date: 2021-11-10 01:20:14
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-8/1.png
---

### Python的os包

#### os的文件与目录函数介绍

- `import os`

| 函数名       | 参数            | 介绍                             | 举例                              | 返回值       |
| ------------ | --------------- | -------------------------------- | :-------------------------------- | ------------ |
| `getcwd`     | 无              | 返回当前的路径                   | os.getcwd()                       | 字符串       |
| `listdir`    | path            | 返回制定路径下所有的文件或文件夹 | os.listdir('c//Windows')          | 返回一个列表 |
| `makedirs`   | Path mode       | 创建多级文件夹                   | os.makedir('d//imooc/py')         | 无           |
| `removedirs` | path            | 删除多级文件夹                   | os.removedirs('d://imooc/py')     | 无           |
| `rename`     | Oldname newname | 给文件或文件夹改名               | os.rename('d://imooc', 'd//imoc') | 无           |
| `rmdir`      | path            | 只能删除空文件夹                 | os.rmdir('d://imooc')             | 无           |

##### 代码

```python
# coding:utf-8

import os

current_path = os.getcwd()
print(current_path)

new_path = '%s/test1' % current_path
# os.makedirs(new_path)

data = os.listdir(current_path)
print(data)

new_path2 = '%s/test2/abc' % current_path
# os.makedirs(new_path2)
# os.makedirs('test3')

# os.removedirs('test2/abc')
# os.rename('test3', 'test3_new')
# os.rename('test1.py', 'python_test1.py')

# os.rmdir('%s/test3_new' % current_path)
os.rmdir('test1')
```

#### os.path模块常用函数介绍

| 函数名   | 参数        | 介绍                     | 举例                           | 返回值   |
| -------- | ----------- | ------------------------ | ------------------------------ | -------- |
| `exists` | Path        | 文件或路径是否存在       | `os.path.exists('d://')`       | bool类型 |
| `isdir`  | Path        | 是否是路径               | `os.path.isdir('d://')`        | bool类型 |
| `isabs`  | Path        | 是否是绝对路径           | `os.path.isabs('test')`        | bool类型 |
| `isfile` | Path        | 是否是文件               | `os.path.isfile('d://a.py')`   | bool类型 |
| `join`   | Path, path* | 路径字符串合并           | `os.path.join('d://', 'test')` | 字符串   |
| `split`  | Path        | 以最后以层路径为基准切割 | `os.path.split('d://test')`    | 列表     |

#### 代码

```python
# coding:utf-8

import os
import os.path

current_path = os.getcwd()
print(current_path)
print(os.path.isabs(current_path))
print(os.path.isabs('animal'))

new_path = '%s/test1' % current_path
if os.path.exists(new_path):
    os.makedirs(new_path)

data = os.listdir(current_path)
print(data)

new_path2 = os.path.join(current_path, 'test2', 'abc')
print(new_path2)
if os.path.exists(new_path2):
    os.makedirs(new_path2)
if os.path.exists('test3'):
    os.makedirs('test3')

if os.path.exists('test2/abc'):
    os.removedirs('test2/abc')
if os.path.exists('test3'):
    os.rename('test3', 'test3_new')
if os.path.exists('test1.py'):
    os.rename('test1.py', 'python_test1.py')

if os.path.exists('%s/test3_new'):
    os.rmdir('%s/test3_new' % current_path)

if os.path.exists('test1'):
    os.rmdir('test1')
print(dir(os))

current_path = current_path + '/package_os.py'
print(os.path.isfile(current_path))
print(os.path.split(current_path))
print(os.path.isdir(os.path.split(current_path)[0]))

```
