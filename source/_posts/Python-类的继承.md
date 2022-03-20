---
title: Python 类的继承
date: 2021-10-30 23:57:43
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中类的继承
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的继承

#### 什么是继承

- 通过继承`基类`来得到`基类`的功能
- 所以我们把`被继承的类`称作**父类或基类**,`继承者`被称为子类

#### 父(基)类与子类

- **子类**拥有`父类`所有的`属性和方法`
- 父类`不具备`子类自有的`属性和方法`

#### 继承的用法

- 定义子类时,将父类传入子类参数内
- 子类实例化可以调用自己与父类的函数与变量
- 父类无法调用子类的函数与变量

```python
# coding:utf-8

class Parent(object):
    def __init__(self, name, sex):
        self.name = name
        self.sex = sex

    def talk(self):
        return f'{self.name} are walking'

    def is_sex(self):
        if self.sex == 'boy':
            return f'{self.name} is a boy'
        else:
            return f'{self.name} is a girl'


class ChildOne(Parent):
    def play_football(self):
        return f'{self.name} are playing football'



class ChildTwo(Parent):
    def play_pingpong(self):
        return  f'{self.name} are playing pingpong'


c_one = ChildOne(name='小慕', sex='boy')
result = c_one.play_football()
print(result)
result = c_one.talk()
print(result)


c_two = ChildTwo(name='小云', sex='girl')
result = c_two.play_pingpong()
print(result)
result = c_two.talk()
print(result)

p = Parent(name='小慕爸爸', sex='boy')
result = p.talk()
print(result)
result = p.is_sex()
print(result)
# result = p.play_pingpong()
# print(result)
```
