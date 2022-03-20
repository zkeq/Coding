---
title: Python 类的参数self
date: 2021-10-28 22:23:18
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>类的参数self
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的参数self

- `self`是类函数中的必传参数, 且必须放在第一个参数位置
- `self`是一个变量,他代表实例化的变量本身
- `self`可以直接通过定义点来定义一个类变量    `self.name = 'dewei'`
- self中的变量与含有self参数的函数可以在类中的任何一个函数内随意调用
- 非函数中定义的变量在定义的时候不用self



### 代码

```python
# coding:utf-8

def sleep(name):
   return name

class Person(object):
    name = None
    age = None

    def run(self):
        print(f'{self.name}在奔跑')

    def jump(self):
        print(f'{self.name}在跳跃')


    def work(self):
        self.run()
        self.jump()
        # def sleep(name):
        #     return name
        result = sleep(self.name)
        print('sleep result is', result)



xiaomu = Person()
xiaomu.name = '小慕'
xiaomu.jump()

dewei = Person()
dewei.jump()

dewei.top = 174
print(dewei.top)
# print(xiaomu.top)
print(dewei.age)
print('--------')
xiaomu.work()

```
