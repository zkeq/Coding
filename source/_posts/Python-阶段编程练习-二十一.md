---
title: Python 阶段编程练习(二十一)
tags: [高级函数,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-12 02:09:42
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-11/6.png
---

### 编程练习

> 使用map函数，求元组 (2,4,6,8,10,12)中各个元素的5次方

#### 任务

1. pow_five函数体内：计算元素的5次方
2. 调用pow_five函数传入data，使用result接收

#### 任务提示

1. pow(x,y) 方法返回 x的y次方的值
2. 计算结果：(32, 1024, 7776, 32768, 100000, 248832)

#### 初始代码

```python
def pow_five(data):
    # 计算元素的5次方
    result =
    return result
    
if __name__ == '__main__':
    data = (2,4,6,8,10,12)
    # 调用pow_five函数传入data，使用result接收
    result = map()
    print(tuple(result))
```

#### 代码

```python
def pow_five(data):
    # 计算元素的5次方
    result = map(lambda n: pow(n, 5), data)
    return result

if __name__ == '__main__':
    data = (2, 4, 6, 8, 10, 12)
    # 调用pow_five函数传入data，使用result接收
    result = pow_five(data)
    print(tuple(result))
```
