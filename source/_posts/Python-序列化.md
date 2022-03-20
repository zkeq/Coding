---
title: Python 序列化
tags: [文件操作（IO）]
description: 本节课主要学习了<br>序列化是什么已经 Json pickle
date: 2021-11-10 01:21:10
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-10/1.png
---

### 序列化

#### 初识序列化与反序列化

- `对象信息`或`数据结构信息`通过**转换**达到`存储`或者`传输`的**效果**
- 可以用比特的编码与解码进行联想

#### 可序列化的数据类型

- `number`
- `str`
- `list`
- `tuple`
- `dict`  **#  最常用的**

#### Python中的`json模块`

| 方法名  | 参数 | 介绍       | 举例                    | 返回值       |
| ------- | ---- | ---------- | ----------------------- | ------------ |
| `dumps` | obj  | 对象序列化 | `json.dumps([1,2])`     | 字符串       |
| `loads` | str  | 返序列化   | `Json.loads('[1,2,3]')` | 原始数据类型 |

#### Python中的`pickle`

| 方法名  | 参数 | 介绍       | 举例                        | 返回值       |
| ------- | ---- | ---------- | --------------------------- | ------------ |
| `dumps` | obj  | 对象序列化 | `pickle.dumps([1,2])`       | 比特         |
| `loads` | byte | 返序列化   | `pickle.loads('[1, 2, 3]')` | 原始数据类型 |

#### 代码

```python
# coding:utf-8

import json


def read(path):
    with open(path, 'r') as f:
        data = f.read()

    return json.loads(data)


def write(path, data):
    with open(path, 'w') as f:
        if isinstance(data, dict):
            _data = json.dumps(data)
            f.write(_data)
        else:
            raise TypeError('data is dict')
    return True


data = {'name': '小慕', 'age': 18, 'top': 176}

if __name__ == '__main__':
    # write('test.json', data)
    result = read('test.json')
    result['sex'] = 'boy'
    write('test.json', result)
    # print(result, type(result))
    
```
