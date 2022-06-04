---
title: Python Python中的加密工具
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>Python中的几种加密工具
date: 2021-11-12 02:07:00
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-11/6.png
---

### Python中的加密工具

#### hashlib模块介绍

- 难破解
- 不可逆

#### hashlib模块中的常用方法

| 函数名   | 参数 | 介绍           | 举例                       | 返回值   |
| -------- | ---- | -------------- | -------------------------- | -------- |
| `md5`    | byte | Md5算法加密    | `hashlib.md5(b'hello')`    | Hash对象 |
| `sha1`   | byte | Sha1算法加密   | `hashlib.sha1(b'hello')`   | Hash对象 |
| `sha256` | byte | Sha256算法加密 | `hashlib.sha256(b'hello')` | Hash对象 |
| `sha512` | byte | Sha512算法加密 | `hashlib.sha512(b'hello')` | Hash对象 |

#### 代码

```python
# coding:utf-8

import hashlib
import time

base_sigh = 'muke'


def custom():
    a_timestamp = int(time.time())
    _token = '%s%s' % (base_sigh, a_timestamp)
    # print(_token, type(_token))
    hashobj = hashlib.sha1(_token.encode('utf-8'))
    a_token = hashobj.hexdigest()
    # print(a_token)
    return a_token, a_timestamp


def b_service_check(token, timestamp):
    _token = '%s%s' % (base_sigh, timestamp)
    b_token = hashlib.sha1(_token.encode('utf-8')).hexdigest()
    if token == b_token:
        return True
    else:
        return False


if __name__ == '__main__':
    need_help_token, timestamp = custom()  # 若只使用一个变量,则此处会生成一个元组传入其变量
    time.sleep(1)
    result = b_service_check(need_help_token, int(time.time()))
    if result == True:
        print('a合法,b服务可以进行帮助')
    else:
        print('a不合法,b不可进行帮助')
        
```

#### base64模块介绍

- 通用型
- 可解密

#### base64模块的常用方法

| 函数名                | 参数 | 介绍           | 举例                                 | 返回值 |
| --------------------- | ---- | -------------- | ------------------------------------ | ------ |
| `encodestring`        | Byte | 进行base64加密 | `base64.encodestring(b'py')`         | Byte   |
| `decodingstring`      | Byte | 对base64解密   | `base64.decodestring(b'eGlhb211\n')` | Byte   |
| `encodebytes`(推荐)   | Byte | 进行bese64加密 | `base64.encodebytes(b'py')`          | Byte   |
| `decodingbytes`(推荐) | Byte | 对base64解密   | `base64.decodebytes(b'eGlhb211\n')`  | Byte   |

#### 代码

```python
# coding:utf-8

import base64

replace_one = '%'
replace_two = '$'


def encode(data):
    if isinstance(data, str):
        data = data.encode('utf-8')
    elif isinstance(data, bytes):
        data = data
    else:
        raise TypeError('data need bytes or str')

    _data = base64.encodebytes(data).decode('utf-8')
    # print(_data)
    _data = _data.replace('a', replace_one).replace('2', replace_two)
    # print(_data)
    return _data


def decode(data):
    if not isinstance(data, bytes):
        raise TypeError('data need bytes')
    replace_one_b = replace_one.encode('utf-8')
    replace_two_b = replace_two.encode('utf-8')
    data = data.replace(replace_one_b, b'a').replace(replace_two_b, b'2')
    return base64.decodebytes(data).decode('utf-8')


if __name__ == '__main__':
    result = encode('hello xiaomu')
    print(result)
    new_result = decode(result.encode('utf-8'))
    print(new_result)
    
```
