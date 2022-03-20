---
title: Python 阶段编程练习（十七）
tags: [模块和包,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-08 00:32:20
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-8/1.png
---

### 编程练习

> 使用`from...import...`导入`datetime`模块中的**datetime对象**，并根据任务要求书写代码。

#### 任务

1. 使用两种方法获得当前日期时间，并输出到控制台
2. 在控制台上分别对日期和时间进行输出
3. 使用-拼接年月日得到当前日期

#### 任务提示

- 使用`format格式化`输出得到的`当前年份`、`当前月份`、`当前日`，并用“`-`”进行连接

#### 初始代码

```python
from datetime import datetime
# 得到当前日期时间（两种方法

# 得到当前日期

# 得到当前时间

# 得到当前年份用year_变量接收

# 得到当前月份用month_变量接收

# 得到当前天用day_变量接收

# 使用-拼接年月日得到当前日期

```

#### 代码

```python
from datetime import datetime
# 得到当前日期时间（两种方法
print(datetime.now())
print(datetime.today())
# 得到当前日期
print(datetime.now().date())
# 得到当前时间
print(datetime.now().time())
# 得到当前年份用year_变量接收
year_ = datetime.now().date().year
print(year_)
# 得到当前月份用month_变量接收
month_ = datetime.now().date().month
print(month_)
# 得到当前天用day_变量接收
day_ = datetime.now().date().day
print(day_)
# 使用-拼接年月日得到当前日期
print("{}-{}-{}".format(year_, month_, day_))

```

