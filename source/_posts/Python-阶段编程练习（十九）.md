---
title: Python 阶段编程练习（十九）
tags: [模块和包,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-08 00:32:33
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-11-8/1.png
---

### 编程练习

> 使用`from...import...`导入`datetime`模块中的**datetime**，**timedelta对象**，根据任务要求书写代码。

#### 任务

- 定义`now_`变量接收当前日期时间

- 使用`now_before`接收当前日期时间3天6小时12分钟之前的日期时间

- 使用`now_after`接收当前日期时间10天之后的日期时间

#### 原始代码

```python
from datetime import datetime, timedelta
# 定义now_变量接收当前日期时间
now_=

# 计算当前日期时间3天6小时12分钟之前的日期时间
now_before=

# 计算当前日期时间10天之后的日期时间
now_after=

print(now_before)
print(now_after)
```

#### 代码提交区

```python
# coding:utf-8

from datetime import datetime, timedelta
# 定义now_变量接收当前日期时间
now_ = datetime.now()

# 计算当前日期时间3天6小时12分钟之前的日期时间
now_before = now_ - timedelta(days=3, hours=6, minutes=12)
# 计算当前日期时间10天之后的日期时间
now_after = now_ + timedelta(days=10)

print(now_before)
print(now_after)
```
