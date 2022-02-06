---
title: Pyhton 阶段编程练习(六)
date: 2021-10-14 21:47:37
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-14/1.png
---

### 编程练习

> 已知一个列表，存储1到10的元素，遍历循环输出列表中的所有偶数。
>
> 运行结果：
>
> 第 1 个偶数 2
>
> 第 2 个偶数 4
>
> 第 3 个偶数 6
>
> 第 4 个偶数 8
>
> 第 5 个偶数 10

#### 任务

- 定义一个列表numList，存储元素为1到10的所有整数

- for循环遍历输出所有列表中的偶数

#### 任务提示

- `注意`：输出格式

#### 作业提交

```python
# coding:utf-8

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = range(1, 10, 2)
b = 0
for i in a:
    b = b + 1
    print('第%s个偶数' % b, list[i])

```

