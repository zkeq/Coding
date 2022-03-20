---
title: Python 函数的定义
date: 2021-10-18 23:56:47
tags: [函数]
categories: Python
description: 本节课主要学习了<br>函数的定义
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-18/2.png
---

### 函数的定义

#### 函数的定义

- 将一件事情的步骤`封装`在一起并得到的结果
- **函数名**代表了这个函数要做的事情
- **函数体**是实现函数功能的流程
- 方法或功能
- 函数可以帮助我们重复使用,通过函数名我们可以知道函数的作用

#### 函数的分类

- 内置函数
- 自定义函数

#### 函数的创建方法

##### 关键词def的功能

- 实现python中函数的创建

##### 通过def定义函数

```python
def name(args...):
    todo something..
    返回值
```

-  `#`函数名 + 小括号执行函数

##### 函数的返回值`return`

- 将函数结果返回的**关键字**
- `return`只能在函数体内使用
- `return`支持**所有**返回的**python类型**
- `有返回值的函数`可以直接**赋值给一个变量**
  - `#` 参数按顺序传递
- 代表函数执行的结束`(break)`

#### `return`与`print`的区别

- `print` 只是单纯的将对象打印 , 不支持赋值语句
- `return`是**对函数执行结果的返回**,也支持赋值语句

#### 代码

```python
# coding:utf-8

def capitalize(data):
    index = 0
    temp = ''

    for item in data:
        if index == 0:
            temp = item.upper()  # 此处是直接赋值给temp变量 故也可写成 +=
        else:
            temp += item  # 此处是给temp变量添加元素
        index += 1
    print('for结束了')
    return temp
    # print('finishi')


result = capitalize('hello 小慕')
print(result)

def message(message, message_type):
    new_message = '[%s] %s' % (message_type, message)
    print(new_message)


result = message(message='今天天气真好', message_type='info')
print('message result:', result)

def test():
    for i in range(10):
        if i == 5:
            return i


print('test的结果是:', test())

```
