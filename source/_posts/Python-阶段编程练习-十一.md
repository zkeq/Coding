---
title: Python 阶段编程练习(十一)
date: 2021-10-20 23:12:46
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 编程练习

> 定义一个函数，向函数内传入形参num, num1, num2，如果num小于100，则计算num1 和 num2的积并打印；否则计算num1 和num2的和，然后打印输出

#### 任务

1. 定义函数名为oper的函数
2. 当num值小于100时，求两数的乘积，反之求两数的和
3. 调用函数，向函数内传入1314, 52, 0和5, 2, 0两组数据测试结果

#### 原始代码

```python
def oper(num, num1, num2):

	# if条件判断num小于100的情况
	
		# 对num1和num2进行乘法运算，并输出结果
		
	else:
	
		#对num1和num2进行加法运算，并输出结果
		
#调用函数，向函数内传入1314, 52, 0和5, 2, 0两组数据测试结果	

```

#### 代码

```python
# coding:utf-8


def oper(num, num1, num2):
    # if条件判断num小于100的情况
    if num < 100:
        # 对num1和num2进行乘法运算，并输出结果
        num = num1 * num2
    else:
        # 对num1和num2进行加法运算，并输出结果
        num = num1 + num2
    return num
    # 调用函数，向函数内传入1314, 52, 0和5, 2, 0两组数据测试结果


print(oper(1313, 52, 0))
print(oper(5, 2, 0))

```
