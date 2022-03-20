---
title: Python 文件的读取
tags: [文件操作（IO）]
description: 本节课主要学习了<br>文件的读取
date: 2021-11-10 01:20:53
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-10/1.png
---

### 文件的读取

#### 文件操作的模式之读取

| 模式 | 介绍               |
| ---- | ------------------ |
| `r`  | 读取文件           |
| `rb` | 二进制形式读取文件 |

#### 文件对象的操作模式之读

| 方法名       | 参数 | 介绍               | 举例            |
| ------------ | ---- | ------------------ | --------------- |
| `read`(seed) | 无   | 返回整个文件字符串 | `f.read()`      |
| `readlines`  | 无   | 返回文件列表       | `f.readlines()` |
| `readline`   | 无   | 返回文件中的一行   | `f.readline()`  |
| `mode`       | 无   | 文件模式           | `f.mode`        |
| `name`       | 无   | 返回文件名称       | `f.name`        |
| `closed`     | 无   | 文件是否关闭       | `f.closed`      |

- 操作完成后,`必须使用close方法`!!

- `with函数`

#### 代码

```python
# coding:utf-8

import os


def create_package(path):
    if os.path.exists(path):
        raise Exception('%s 已经存在不可创建' % path)
    os.makedirs(path)
    init_path = os.path.join(path, '__init__.py')
    f = open(init_path, 'w')
    f.write("# coding:utf-8\n")
    f.close()


class Open(object):
    def __init__(self, path, mode='w', is_return=True):
        self.path = path
        self.mode = mode
        self.is_return = is_return

    def write(self, message):
        f = open(self.path, mode=self.mode)
        if self.is_return:
            message = '%s\n' % message
        f.write(message)
        f.close()

    def read(self, is_strip=True):
        result = []
        with open(self.path, mode=self.mode) as f:
            _data = f.readlines()
        for line in _data:
            if is_strip:
                temp = line.strip()
                if temp != '':
                    result.append(temp)
            else:
                if line != '':
                    result.append(line)
        return result


if __name__ == '__main__':
    current_path = os.getcwd()
    # path = os.path.join(current_path, 'test1')
    # create_package(path)
    # open_path = os.path.join(current_path, 'b.txt')
    o = Open('package_datetime.py', mode='r')
    # o.write('你好 小慕')
    # data = o.read(is_strip=False)
    data = o.read()
    print(data)

```
