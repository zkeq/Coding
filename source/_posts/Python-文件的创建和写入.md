---
title: Python 文件的创建和写入
tags: [文件操作（IO）]
description: 本节课主要学习了<br>文件的创建和写入
date: 2021-11-10 01:20:38
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-10/1.png
---

### 文件的创建和写入

#### 利用内置函数open获取文件对象

##### 功能

- 生成文件对象，进行创建，读写操作

##### 用法

- `open(path, mode)`

##### 参数说明

- `path`：文件路径
- `mode`：操作模式

##### 返回值

- **文件对象**

##### 举例

- `f = open('d://a.txt', 'w')`

#### 文件操作的模式之写入 

| 模式  | 介绍                     |
| ----- | ------------------------ |
| `w`   | 创建文件                 |
| `w+`  | 创建文件并读取文件       |
| `wb`  | 二进制形式创建文件       |
| `wb+` | 二进制形式创建或追加内容 |
| `a`   | 追加内容                 |
| `a+`  | 读写模式的追加           |
| `ab+` | 二进制形式读写追加       |

#### 文件对象的操作方式之写入保存

| 方法名     | 参数         | 介绍           | 举例                                 |
| ---------- | ------------ | -------------- | ------------------------------------ |
| write      | Message      | 写入信息       | f.write('hello\n')                   |
| writelines | Message_list | 批量写入       | f.writelines(['hello\n', 'world\n']) |
| close      | 无           | 关闭并保存文件 | f.close()                            |

- 操作完成后，必须使用close方法！

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
    def __init__(self, path, mode='w', is_retern=True):
        self.path = path
        self.mode = mode
        self.is_retern = is_retern


    def write(self, message):
        f = open(self.path, mode=self.mode)
        if self.is_retern:
            message = '%s\n' % message
        f.write(message)
        f.close()


if __name__ == '__main__':
    current_path = os.getcwd()
    # path = os.path.join(current_path, 'test1')
    # create_package(path)
    open_path = os.path.join(current_path, 'b.txt')
    o = Open(open_path)
    o.write('你好 小慕')
    
```
