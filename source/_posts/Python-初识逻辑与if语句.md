---
title: Python 初识逻辑与if语句
date: 2021-10-06 18:04:17
tags: [逻辑,条件语句]
description: 本节课主要学习了:<br>逻辑的概念与if语句<br>
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/5.jpg
---

### 初识逻辑与`if`语句

#### 逻辑判断与逻辑语句

- 对于一件事情正确与否(真假的判断)
- 根据判断的结果做不同的事情 , 就是我们的逻辑业务
- 对于条件满足的判断语句 , 就是条件语句

> 一个逻辑语句是由条件语句和业务语句组合而成的

#### if语句

##### 功能

- 判断一个命题的真实性 , 如果命题为真(True)则执行if的逻辑语句

##### 用法

- `if bool_result : # 语法`块
- ​            `do         # 业务代码块   注意缩进`
  - 缩进是由一个`TAB`或者`四个空格`组成的
- in  and

##### 返回值

- `if 属于关键字`  ,  **没有返回值**

#### 代码

```python
# coding:utf-8

info = 'my name is xiaomu'

info_list = info.split()
print(info_list)

if info_list[0] == 'xiaomu':
    print(1)
    info_list[0] = 'dewei'

if info_list[1] == 'xiaomu':
    print(2)
    info_list[1] = 'dewei'

if info_list[2] == 'xiaomu':
    print(3)
    info_list[2] = 'dewei'

if info_list[-1] == 'xiaomu':
    print(4)
    info_list[-1] = 'dewei'

print(info_list)
info = ' '.join(info_list)
print(info)

info = 'my name is dewei, i am a pythoner, i love python'
info_list = info.split()

if info_list[0] in ['python', 'i']:
    info_list[0] = '*'

if info_list[1] == 'python' or info_list[1] == 'i':
    info_list[1] = '*'

if info_list[2] == 'python' or info_list[2] == 'i':
    info_list[2] = '*'

if info_list[3] == 'python' or info_list[3] == 'i':
    info_list[3] = '*'

if info_list[4] == 'python' or info_list[4] == 'i':
    info_list[4] = '*'

if info_list[5] == 'python' or info_list[5] == 'i':
    info_list[5] = '*'

if info_list[6] == 'python' or info_list[6] == 'i':
    info_list[6] = '*'

if info_list[7] == 'python' or info_list[7] == 'i':
    info_list[7] = '*'

if info_list[8] == 'python' or info_list[8] == 'i':
    info_list[8] = '*'

if info_list[9] == 'python' or info_list[9] == 'i':
    info_list[9] = '*'

if info_list[-1] in ['python', 'i']:
    info_list[10] = '*'

print(info_list)

info = ' '.join(info_list)
print(info)

info = 'my name is dewei'
print(len(info))

if len(info) > 10 and len(info) != 16:
    print(info.replace('dewei', 'xiaomu'))

print('finish')

```
