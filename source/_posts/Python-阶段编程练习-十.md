---
title: Python 阶段编程练习(十)
date: 2021-10-18 23:57:14
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-18/2.png
---

### 编程练习 

> 定义一个函数，实现在控制台打印3遍唐诗 《咏鹅》，并使用50个星（*）号分隔每一 次打印结果
>
> ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-18/1.jpg)

#### 任务

1. 定义函数名为goose的函数
2. 函数体内：向控制台输出唐诗《咏鹅》
3. 函数体内：向控制台输出50个*号分隔符
4. 调用三次函数名为goose的函数

#### 初始代码

```python
def goose():
	# 向控制台输出唐诗《咏鹅》诗句
	
	# 向控制台输出50个*号分隔符
	
# 调用函数实现效果

```

#### 代码提交区

```python
# coding:utf-8

def goose():
    # 向控制台输出唐诗<咏鹅>的诗句
    verse = '鹅,鹅,鹅,曲项向天歌,白毛浮绿水,红掌拨清波.'
    # 向控制台输出50个*号分隔符
    star = '*' * 50
    return verse, star


# 调用函数实现结果
print(goose()[0], '\n', goose()[1])
print(goose()[0], '\n', goose()[1])
print(goose()[0], '\n', goose()[1])

```

