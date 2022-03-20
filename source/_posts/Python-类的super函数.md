---
title: Python 类的super函数
date: 2021-11-01 23:35:14
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中类的继承
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的super函数

#### super函数的作用

- `python`子类`继承父类`的`方法`而使用的`关键字`.
  - 当**子类继承父类**后 ,就可以`使用`**父类的方法**

#### super函数的用法

```python
class Parent(object):
	def __init__(self):
		print('hello i am parent')
class Child(Parent):
	def __init__(self):
		print('hello i am child')
        super(Child, self).__init__()  #python3 括弧内的参数可以省略
        #      当前类  类的实例
```

#### 代码

```python
# coding:utf-8

class Parent(object):
    def __init__(self, p):
        print('hello i am parent %s ' % p)


class Child(Parent):
    def __init__(self, c, p):
        # super(Child, self).__init__(p)
        super().__init__(p)
        # super(Child, self).__init__('parent') 也可以
        print('hello i am child %s ' % c)


if __name__ == '__main__':
    c = Child(c='Child', p='Parent')
```

