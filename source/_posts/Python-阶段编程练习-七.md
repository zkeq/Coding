---
title: Python 阶段编程练习 (七)
date: 2021-10-16 20:02:46
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/3.jpg
---

### 编程练习

> 编写一个程序生成一个包含(i, i*i)的字典（i是key，i*i是value），该字典包含1到8之间的整数(两者都包含)。然后打印该字典。
>
> 效果如下:
>
> ![1](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/1.png)
>
> 

#### 任务提示

1. 定义一个整型变量，值为8
2. 使用dict类型()

#### 原始代码

```python
# -*- coding:utf-8 -*-
# 定义一个整数
n = 8

```

#### 代码提交区

```python
# coding:utf-8

# 定义一个整数
n = 8
dict_eight = {}

l = range(8)
for i in l:
    if i < n:
        a = i + 1
        b = (i + 1) ** 2
        dict_eight[a] = b
print(dict_eight)

```

#### 结果检验区

```cmd
C:\Users\admin\PycharmProjects\python_iterable\venv\Scripts\python.exe 
C:/Users/admin/PycharmProjects/python_iterable/test_new.py
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}

进程已结束，退出代码为 0
```

