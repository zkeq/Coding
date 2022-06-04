---
title: Python Python中的sys模块
tags: [模块和包]
description: 本节课主要学习了<br>Python中的sys模块
date: 2021-11-10 01:20:24
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-8/1.png
---

### Python中的sys模块

#### sys中的常用方法

| 函数名               | 参数    | 介绍                 | 举例                       | 返回值 |
| -------------------- | ------- | -------------------- | -------------------------- | ------ |
| `modules`            | 无      | Py启动时加载的模块   | `sys.modules( )`           | 列表   |
| `path`               | 无      | 返回当前py的环境路径 | `sys.path()`               | 列表   |
| `exit`               | `arg`   | 退出程序             | `sys.exit(0)`              | 无     |
| `getdefaultencoding` | 无      | 获取系统编码         | `sys.getdefaultencoding()` | 字符串 |
| `platform`           | 无      | 获取当前系统平台     | `sys.platform()`           | 字符串 |
| `version(属性)`      | 无      | 获取python版本       | `sys.version`              | 字符串 |
| `argv`               | `*args` | 程序外部获取参数     | `sys.argv`                 | 列表   |

#### 代码

```python
# coding:utf-8

import sys

command = sys.argv[1]
if command == 'modules':
    modules = sys.modules
    print(modules)
elif command == 'path':
# sys.exit(1)
    path = sys.path
    print(path)
elif command == 'encoding':
    code = sys.getdefaultencoding()
    print(code)
elif command == 'platform':
    print(sys.platform)
elif command == 'version':
    print(sys.version)
else:
    print('not command')

# print(sys.argv)

```
