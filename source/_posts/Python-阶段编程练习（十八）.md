---
title: Python 阶段编程练习（十八）
tags: [模块和包,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-08 00:32:27
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-11-8/1.png
---

### 编程练习

> 使用`from...import...`导入`datetime模块`中的**datetime对象**，根据任务要求书写代码。

#### 任务

1. 定义一个`str_`字符串为`2019-09-10 8:10:56`
2. 将`str_`转换为时间类型`2019-09-10 08:10:56`，使用`str_date`变量接收
3. 定义`now_`变量接收当前的日期时间
4. 将当前日期时间格式化为——`四位的年份/月/日 时:分:秒`，使用`date_str`接收

#### 任务提示

1. `%Y`：代表四位的年份
2. `%m`：代表月份
3. `%d`：代表这个月的第几天
4. `%H:%M:%S`：代表 时：分：秒

#### 原始代码

```python
from datetime import datetime
# 定义一个str_字符串为2019-09-10 8:10:56
str_=
# 将str_转换为日期函数2019-09-10 8:10:56
str_date=
print(str_date
# 定义now_变量接收当前的日期时间

# 将当前日期时间格式化为——四位的年份/月/日 时:分:秒
date_str=
print(date_str)
```

#### 代码提交区

```python
# coding:utf-8

from datetime import datetime
# 定义一个str_字符串为2019-09-10 8:10:56
str_ = '2019-09-10 8:10:56'
# 将str_转换为日期函数2019-09-10 8:10:56
str_date = datetime.strptime(str_, '%Y-%m-%d %H:%M:%S')
print(str_date)
# 定义now_变量接收当前的日期时间
now_ = datetime.now()
# 将当前日期时间格式化为——四位的年份/月/日 时:分:秒
date_str= datetime.strftime(now_, '%Y/%m/%d %H:%M:%S')
print(date_str)
```
