---
title: Python 阶段编程练习(二十二)
tags: [高级函数,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-12 02:10:05
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-11/6.png
---

### 编程练习

> 请运用reduce函数，计算20的阶乘，并于终端打印计算结果（如下）
>
> '2432902008176640000'

##### 任务

1. 定义use_reduce函数
2. 函数体内：实现某个数值的阶乘

##### 任务提示

1. 结合list和range函数实现1-20(包含20）的数值即list(range(1,21))
2. 20的阶乘为`1*2*3*4*5*...*20`(角标星星)

##### 初始代码

```python
# 从functools 中导入reduce函数

def use_reduce(x, y):
    # 使用result接收两个数的乘积
    result =
    return result

if __name__ == '__main__':
    # 使用data接收一个1-20的数值
    data =
    # 调用use_reduce函数传入data
    result = reduce()
```

##### 代码

```python
from functools import reduce

def use_reduce(data):
    # 使用result接收reduce实现20的阶乘
    result = reduce(lambda m, n: m*n, data)
    print(result)
    # 测试该功能

if __name__ == '__main__':
    # 使用data接收一个1-20的数值
    data = list(range(1,21))
    # 调用use_reduce函数传入data
    result = use_reduce(data)
    
```
