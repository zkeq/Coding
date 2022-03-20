---
title: Python 阶段编程练习(二)
date: 2021-09-27 19:37:07
tags: [编程练习]
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-27/4.jpg
description: 通过运用前面所学的知识 <br> 完成自己的任务
---

###  编程练习(二)

#### 说明

> 定义一个变量 string= "When your mindis simple, your world is simple" 将变量对应效果图中的方法print输出，实现效果图：
>
> ![3](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-27/3.jpg)

#### 任务

1. `string= "When your mind is simple, your world is simple"`
2. 根据对应的字符串处理的方法进行输出

### 任务提交区

```python
# coding:utf-8

string = 'When your mind is simple, your world is simple'

if __name__ == '__main__':
    print('定义长度:', string.zfill(50))
    print('获取元素i的个数:', string.count('i'))
    print('判断开头的元素是不是e:', string.startswith('e'))
    print('判断结尾的元素是不是e:', string.endswith('e'))
    print('请找到r在哪个位置:', string.index('r'))
    print('请找到元素a在哪个位置:', string.find('a'))
    print('请把字符串中的元素W去掉:', string.strip('W'))
    print('请把字符串中的your改为my:', string.replace('your', 'my'))
    print('请判断字符串是不是由空格组成:', string.isspace())
    print('请判断字符串是不是标题', string.istitle())
    print('请判断字符串中的字母是不是都是大写:', string.isupper())
    print('请判断字符串中的字母是不是都是小写:', string.islower())

```

### 结果检验区

```Cmd
C:\Users\admin\PycharmProjects\pythonlearn\venv\Scripts\python.exe C:/Users/admin/PycharmProjects/pythonlearn/test2.py
定义长度: 0000When your mind is simple, your world is simple
获取元素i的个数: 5
判断开头的元素是不是e: False
判断结尾的元素是不是e: True
请找到r在哪个位置: 8
请找到元素a在哪个位置: -1
请把字符串中的元素W去掉: hen your mind is simple, your world is simple
请把字符串中的your改为my: When my mind is simple, my world is simple
请判断字符串是不是由空格组成: False
请判断字符串是不是标题 False
请判断字符串中的字母是不是都是大写: False
请判断字符串中的字母是不是都是小写: False

进程已结束，退出代码为 0

```

