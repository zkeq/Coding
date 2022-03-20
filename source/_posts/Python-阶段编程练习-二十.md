---
title: Python 阶段编程练习(二十)
tags: [高级函数,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-12 02:09:27
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

### 编程练习

> 使用filter函数，求0-50以内（包括50）的偶数
> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,46, 48, 50]

#### 任务

1. 定义use_filter函数
2. 函数体内：实现过滤偶数值的功能

#### 任务提示

- 使用变量data接收0-50（包含50）的数字，即list(range(51))

#### 原始代码

```python
def use_filter(data):
    # 使用result接收filter过滤偶数值的功能
    result =
    return result
if __name__ == '__main__':
    # 使用data接收0-50的数值
    data =
    # 调用use_filter函数传入data,使用result变量接收
    result =
    print(list(result))
```

#### 代码提交区

```python
def use_filter(data):
    # 使用result接收filter过滤偶数值的功能
    result = filter(lambda n:n%2 == 0,data)
    return result
if __name__ == '__main__':
    # 使用data接收0-50的数值
    data = list(range(51))
    # 调用use_filter函数传入data,使用result变量接收
    result = use_filter(data)
    print(list(result))
```

