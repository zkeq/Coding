---
title: Python 类的多重继承
date: 2021-11-03 23:15:26
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>类的多重继承
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的多重继承

##### 什么是多重继承

- 可以继承多个基(父)类

##### 多重继承的方法

- `class Child(Parent1,  Parent2, Parent3...)`

- 将被继承的类放入子类的参数位中,用逗号隔开
- 从左向右依次继承

#### 代码

```python
# coding:utf-8

# 1 2个父类

class Tool(object):
    def work(self):
        return 'tool work'

    def car(self):
        return 'car will run'


class Food(object):
    def work(self):
        return 'food work'

    def cake(self):
        return 'i like cake'


# 继承父类的子类
class Person(Food, Tool):  # 最左边的类先被继承,如果有多个类,则最开始的那个类发生作用
    pass


if __name__ == '__main__':
    p = Person()
    p_car = p.car()
    p_cake = p.cake()
    print(p_car)
    print(p_cake)
    p_work = p.work()
    print(p_work)
    print(Person.__mro__)
    
```
