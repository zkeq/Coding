---
title: Python 阶段编程练习(八)
date: 2021-10-16 20:03:33
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/3.jpg
---

### 编程练习

> 计算从1到1000以内所有奇数的和，并进行输出，结果为250000

#### 任务

1. 定义变量sum1和 num1，sum1用于存放所有奇数和，num1用于存放数值，并对其赋初始值
2. 使用while来实现1-1000以内的循环
3. 用if语句实现条件判断，是否为奇数
4. 输出符合条件的所有奇数的和

#### 任务提示

- 不能被2整除的数为奇数

#### 原始代码

```python
sum1 = 0
num1 = 1
# 循环条件
# 判断条件
# 求和
num1 = num1 + 1
print(sum1)
```

#### 代码提交区

```python
# coding:utf-8

sum1 = 0
num1 = 1
# 循环条件
while num1 <= 1000:
    # 判断条件
    if num1 % 2 != 0:
        # 求和
        sum1 += num1
    num1 = num1 + 1
print(sum1)

```

#### 结果检验区

```cmd
C:\Users\admin\PycharmProjects\python_iterable\venv\Scripts\python.exe 
C:/Users/admin/PycharmProjects/python_iterable/test_2.py
250000

进程已结束，退出代码为 0
```
