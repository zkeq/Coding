---
title: Python 阶段编程练习(十三)
date: 2021-10-20 23:13:30
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 编程练习

> 定义seq函数，向函数内传入形参(num, num1, num2)，如果num小于88，返回num1与num2的积，否则返回num1和num2的和，调用函数传参时使用元组传参

#### 任务

1. 当num小于88，计算num1与num2的乘积，否则计算num1，num2之和
2. 定义变量tuple1为(5,2,1)
3. 调用函数，并打印函数返回值

#### 任务提示

- 使用*tuple1可实现对元组tuple1的解包

#### 原始代码

```
def seq(num,num1,num2):
	# if判断num小于88
	
		#返回num1与num2的积
		
	else:
		#返回num1与num2之和
		
# 定义变量tuple1的值为(5,2,1)

# 调用函数，传入参数tuple1，并打印函数返回值
```

#### 代码

```python
# coding:utf-8

def seq(num, num1, num2):
    # if判断num小于88
    if num < 88:
        # 返回num1与num2的积
        return num1 * num2
    else:
        # 返回num1与num2之和
        return num1 + num2
# 定义变量tuple1的值为(5,2,1)


tuple1 = (5, 2, 1)
# 调用函数，传入参数tuple1，并打印函数返回值
print(seq(tuple1[0], tuple1[1], tuple1[2]))
print(seq(*tuple1))

```
