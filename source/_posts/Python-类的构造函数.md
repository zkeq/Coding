---
title: Python 类的构造函数
date: 2021-10-28 22:23:31
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>类的构造函数
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的构造函数

- 类中的一种默认函数,用来将类实例化的同时, 将参数传入类中

#### 构造函数的创建

```python
def __init__(self, a, b)
	self.a = a
    self.b = b
```

#### 代码

```python
# coding:utf-8

def sleep(name):
   return name

class Person(object):

    def __init__(self, name, age=None):
        self.name = name
        self.age = age

    def run(self):
        print(f'{self.name}在奔跑')

    def jump(self):
        print(f'{self.name}在跳跃')


    def work(self):
        self.run()
        self.jump()
        # def sleep(name):
        #     return name
        # result = sleep(self.name)
        # print('sleep result is', result)



xiaomu = Person(name='小慕',age=10)
xiaomu.name = 'xiaomu'
xiaomu.jump()

dewei = Person(name='dewei')
dewei.jump()

dewei.top = 174
print(dewei.top)
# print(xiaomu.top)
print(dewei.age)
print('--------')
xiaomu.work()
```
