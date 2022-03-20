---
title: Python 阶段编程练习(九)
date: 2021-10-16 20:04:55
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/3.jpg
---

### 编程练习

> 计算1到100以内能被3或者7整除，但不能同时被3和7整除的数的个数，运行结果为39

#### 任务

1. 定义变量`num`用来存放数值，`count`用来存放个数
2. 使用`while`实现循环
3. 通过`if`来**设置符合的条件**，符合条件`count`计数加1
4. **输出符合条件**的总个数`count`

#### 任务提示

- `同时被3和7整除`，**即为21的倍数**；
- `除以21不等于0`即**不能同时被3和7整除**

#### 初始代码

```python
num = 1
count = 0
# 循环条件

	# 循环体，设置条件
	# 补全代码
		
	num = num + 1
print(count)
```

#### 代码提交区

```python
# coding:utf-8

num = 1
count = 0
# 循环条件
while num < 100:
    # 循环体，设置条件
    # 补全代码
    if num % 3 == 0 or num % 7 == 0:
        count += 1
    if num % 21 == 0:
        count -= 1
    num = num + 1
print(count)

```

```python
# coding:utf-8

num = 1
count = 0
# 循环条件
while num < 100:
    # 循环体，设置条件
    # 补全代码
    if num % 3 == 0 or num % 7 == 0:
        if num % 21 != 0:
            count += 1
    num = num + 1
print(count)
```

