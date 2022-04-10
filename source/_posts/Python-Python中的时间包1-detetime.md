---
title: Python Python中的时间包1 datetime
tags: [模块和包]
description: 本节课主要学习了<br>如何使用时间包datetime
date: 2021-11-08 00:31:34
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-11-8/1.png
---

### Python中的时间包 `detetime`

- 日期与时间的结合体 `-date and time`
- 获取当前时间
- 获取时间间隔
- 将时间对象转换成时间字符串
- 将字符串转成时间类型

#### `detetime`包的常用功能

##### 获取当前时间

###### 导入包与模块

- `from datetime import datetime`
- `import datetime`

###### 使用方法

- `datetime.now()`
- `datetime.datetime.now()     (today)`

- 返回当前年月日时分秒毫秒的datetime对象

##### 获取时间间隔

###### 导入包

```python
from datetime import datetime
from datetime import timedelta
```

###### 使用方法

```python
timeobj = timedelta(days=0, seconds=0, microsenconds=0, milliseconds=0, minutes=0, hours=0, week=0)
```

#### `datetime`包中的常用方法

##### 时间对象转字符串

###### 获取对象时间

```python
from datetime import datetime
now = datetime.datetime.now()
```

###### 时间转字符串

```python
date_str = now.strftime(format)
```

##### 时间字符串转时间类型

###### 获取时间模块

```python
from datetime import datetime
```

###### 时间字符串转时间类型

```python
datetime.strptime(tt, format)
```

###### 参数介绍

- `tt`: 符合时间格式的字符串
- `format`:  **tt时间字符串**匹配规则

#### python的`常用时间格式化符号`1

| 字符 | 介绍                               |
| ---- | ---------------------------------- |
| `%Y` | 完整的年份，如2021                 |
| `%m` | 月份，1~12                         |
| `%d` | 月中的某一天（1~31）               |
| `%H` | 一天中的第几个小时（24小时，00~23) |
| `%I` | 一天中的第几个小时（12小时，00~12) |
| `%M` | 当前的第几分（00~59）              |
| `%S` | 当前的第几秒（0~61）`闰年多占2秒`  |
| `%f` | 当前秒的第多少毫秒                 |

#### python的`常用时间格式化符号`2

| 字符 | 介绍                                        |
| ---- | ------------------------------------------- |
| `%a` | **简化**的星期，如星期三 `Wed`              |
| `%A` | **完整**的星期，如星期三 `Wednesday`        |
| `%b` | **简化**的月份，如二月 `Fab`                |
| `%B` | **完整**的月份，如二月 `Fabruary`           |
| `%c` | 本地的日期和时间，如Web Fab 5 10:14:49 2020 |
| `%p` | 显示上午还是下午，如AM代表上午，PM代表下午  |
| `%j` | 一年中的第几天                              |
| `%U` | 一年中的星期数                              |

#### 代码

```python
# coding:utf-8

from datetime import datetime
from datetime import timedelta

now = datetime.now()
print(now, type(now))
now_str = now.strftime('%Y-%m-%d %H:%M:%S')
print(now_str, type(now_str))
now_obj = datetime.strptime(now_str, '%Y-%m-%d %H:%M:%S')
print(now_obj, type(now_obj), '-----')

three_days = timedelta(days=3)
after_three_day = now + three_days
print(after_three_day)
after_three_day_str = after_three_day.strftime('%Y/%m/%d %H:%M:%S')
print(after_three_day_str, type(after_three_day_str))
after_three_day_obj = datetime.strptime(after_three_day_str, '%Y/%m/%d %H:%M:%S')
print(after_three_day_obj, type(after_three_day_obj), '-----')

before_three_day = now - three_days
print(before_three_day)
before_three_day_str = before_three_day.strftime('%Y%m%d')
print(before_three_day_str, type(before_three_day_str))
before_three_day_obj = datetime.strptime(before_three_day_str, '%Y%m%d')
print(before_three_day_obj, type(before_three_day_obj), '-------')

one_hour = timedelta(hours=1)
before_one_hour = now - one_hour
print(before_one_hour)
before_one_hour_str = before_one_hour.strftime('%H:%M:%S')
print(before_one_hour_str, type(before_three_day_str))

# default_str = '2020 12 abc'
# print(datetime.strptime(default_str, '%Y %m'))
```

