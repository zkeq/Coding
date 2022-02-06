---
title: Python 私有函数和私有变量
date: 2021-10-28 22:23:54
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>私有函数和私有变量的基础知识
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 私有函数和私有变量

#### 什么是私有函数和私有变量

- 无法被实例化后的对象调用的类中的函数与变量
- 类的内部可以调用私有函数与变量
- 只希望类内部业务调用使用,不希望被使用者使用

#### 私有函数与私有变量的定义方法

- 在一个变量或函数前添加`__`(2个下横线),变量或函数名后边无需添加

 ```python
  class Person(object):
  	def __init__(self, name):
  		self.name = name
  		self.__age = 33  # 私有
     	def dump(self):
     		print(self.name, self.__age)  # 私有
      def __cry(self):  # 私有
      	return 'I want cry'
 ```

  

#### 代码

```python
# coding:utf-8

class Cat(object):
    __cat_type = 'cat'

    def __init__(self, name, sex):
        self.name = name
        self.__sex = sex

    def run(self):
        result = self.__run()
        print(result)

    def __run(self):
        return f'{self.__cat_type},小猫{self.name}{self.__sex}开心的奔跑着'

    def dump(self):
        result = self.__dump()
        print(result)

    def __dump(self):
        return f'{self.__cat_type}小猫{self.name}{self.__sex}开心的跳着'


class Test(object):
    pass

cat = Cat(name='米粒儿', sex='boy')
cat.run()
cat.dump()
print(dir(cat))
# print(cat._Cat__dump())
```

