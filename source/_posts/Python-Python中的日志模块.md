---
title: Python Python中的日志模块
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>Python中的日志模块
date: 2021-11-12 02:07:17
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

### Python中的日志模块

#### 日志的作用

- 日记
- 程序行为
- 重要信息记录

#### 日志的等级

- `debug`
- `info`
- `warning`
- `error`
- `critical`

#### logging模块的使用

- `logging.basicConfig`

| 参数名     | 作用         | 举例                        |
| ---------- | ------------ | --------------------------- |
| `level`    | 日志输出等级 | `level = logging.DEBUG`     |
| `format`   | 日志输出格式 |                             |
| `filename` | 存储位置     | `filename = 'd://back.log'` |
| `filemode` | 输入模式     | `filemode = "w"`            |

##### format具体格式

| 格式符          | 含义           |
| --------------- | -------------- |
| `%(levelname)s` | 日志级别名称   |
| `%(pathname)s`  | 执行程序的路径 |
| `%(filename)s`  | 执行程序名     |
| `%(lineno)d`    | 日志的当前行号 |
| `%(asctime)s`   | 打印日志的时间 |
| `%(message)s`   | 日志信息       |

- `format = '%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s'`
- (常用的格式)

#### 代码

```python
# coding:utf-8

import logging
import os


def init_log(path):
    if os.path.exists(path):
        mode = 'a'
    else:
        mode = 'w'
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s %(filename)s %(lineno)d %(levelname)s %(message)s',
        filename=path,
        filemode=mode
    )
    return logging


current_path = os.getcwd()
path = os.path.join(current_path, 'back.log')
log = init_log(path)
# log = init_log()

log.info('这是第一个记录的日志信息')
log.warning('这是一个警告')
log.error('这是一个重大的错误信息')
log.debug('这是一个debug')
```
