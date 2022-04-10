---
title: Python Python中的时间包2  time模块
tags: [模块和包]
description: 本节课主要学习了<br>time模块的使用（什么是时间戳）以及datetime的补充
date: 2021-11-08 00:33:03
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-11-8/1.png
---

### Python中的时间包2`time模块`

- 认识时间戳
- 认识python的`time模块`与常用方法
- `datetime`包生成的时间戳与时间戳转时间类型的方法

#### 认识时间戳

- 1970年1月1日00时00分00秒至今的总毫秒（秒）数
- `timestamp`
- `float`

#### time模块与它的函数们

- 时间处理，转换时间格式
- 生成时间戳函数`time`
- 获取本地时间函数`localtime`
- `localtime`对应字段介绍
- 暂停函数`sleep`
- `time`中的`strftime`与`strptime`

#### 生成时间戳函数`time`

##### 导入包

- `import time`

##### 使用方法

- `time.time()`

##### 返回值

- **秒级别**的`浮点类型`

##### 举例

- `1580878485.4009378`

#### 获取本地时间函数 `localtime`

##### 导入包

- `import time`

##### 使用方法

- `time.localtime(timestamp)`

##### 参数介绍

- `timestamp` :  时间戳（可不传）

#### localtime对应字段介绍

| 属性名     | 介绍         | 取值范围               |
| ---------- | :----------- | ---------------------- |
| `tm_year`  | 四位数年     | 示例：2021             |
| `tm_mom`   | 月           | 1~12                   |
| `tm_mday`  | 日           | 1~31                   |
| `tm_hour`  | 小时         | 0~23                   |
| `tm_min`   | 分钟         | 0~59                   |
| `tm_sec`   | 秒           | 0~61（依然是闰月问题） |
| `tm_wday`  | 一周的第一天 | 0~6（0是周一）         |
| `tm_yday`  | 一年的第几日 | 1~366（儒略历）        |
| `tm_isdat` | 夏令时       | -1, 0, 1是否是夏令时   |

#### 暂停函数`sleep`

##### 导入包

- `import time`

##### 使用方法

- `time.sleep(second)`

##### 参数介绍

- `second` :  希望程序被暂停的秒数

#### `time`中的`strftime`

##### 导入包

- `import time`

##### 使用方法

- `time.strftime(format, t)`

##### 参数介绍

- `format`： 格式化规范
- `t`：`time.localtime`对应的时间类型

#### `time`中的`strptime`

##### 导入包

- `import time`

##### 使用方法

- `time.strptime(time_str, format)`

##### 参数介绍

- `time_str`:  符合时间格式的字符串
- `format`：确保与`time_str`一致的格式化标准

#### datetime中生成时间戳函数

##### 导入包

- `import datetime`

##### 使用方法

```python
now = datetime.datetime.now()
datetime.datetime.timestamp(now)
```

##### 参数介绍

- `now` ： datetime时间对象
- 秒级时间戳，浮点类型

#### datetime中时间戳转时间对象

##### 导入包

- `import datetime`

##### 使用方法

```python
datetime.datetime.fromtimestamp(timestamp)
```

##### 参数介绍

- `timestamp` ： **时间戳**

##### 返回值

- `datetime`的**日期对象**

#### 代码

```python
# coding:utf-8]

import time
import datetime

now = time.time()
print(now, type(now))

time_obj = time.localtime(now)
# time.sleep(5)
print(time_obj, type(time_obj))

current_time_obj = time.localtime()
print(current_time_obj)

before = now - 100000
before_time_obj = time.localtime(before)
print(before_time_obj)

print(time.time() * 1000)
print(time.time())

# for i in range(10):
#     print(i)
#     time.sleep(1)

datetime_now = datetime.datetime.now()
datetime_timestamp = datetime.datetime.timestamp(datetime_now)
print('datetime 生成的时间戳 %s' % datetime_timestamp)

datetime_obj = datetime.datetime.fromtimestamp(datetime_timestamp)
print(datetime_obj)

```

