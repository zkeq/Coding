---
title: Python 阶段编程练习（十五）
date: 2021-11-03 23:16:10
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 代码练习

> 自定义两个类Person和Student，且Student继承自Person。Person类主要描述人的姓名和性别两大基本特征。Student类除了保持父类的基本属性之外还具有分数、主修两个公有属以及一个私有属性（学号）。请根据上述的基本说明，对stu和stu_2两个对象的信息进行综合展示。
>
> 效果图如下：
>
> ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-3/1.jpg)

#### 任务

1. 自定义Person类，并重写其构造（初始化）方法__init__( )，将name和gender参数赋值给实例对象的属性
2. 自定义实例方法speak( )，功能：打印“hello ! 我是xxx”。relation( )方法主要是占位作用，无其他实质性功能
3. 自定义Student类，继承自Person类，并重写其构造（初始化）方法__init__( )，name、gender参数通过调用父类的构造函数进行赋值，score、major及__stu_num通过子类重写的 __init__( )进行赋值，设置__stu_num的初始值为'2018014002'。
4. 自定义实例方法speak( )，功能：打印'我的学号为xxxxxxxxxx，很高兴认识大家';
5. 自定义实例方法identify_stu( )，功能：判断Student对象的学号。若学号为2018014002，则打印‘我的分组已经完成’，反之则打印‘请稍后，马上为你自动分组’；
6. 自定义实例方法set_num( new_num)，功能：将学号重写设置为new_num；
7. 自定义实例方法relation( )，功能：判断Student是否为Person的子类。若成立，则打印‘我的父类是Person’，反之则打印‘父类正在查询中······’
8. 初始化实例对象stu和stu_2，并根据上述效果图调用对应方法

#### 任务提示

1. Person类中的实例方法relation( )为占位功能时，其方法体可用pass语句代替
2. 使用issubclass()是判断是否是子类，第一个参数传入的是子类类名，第二个参数传入的是父类类名。
3. `略......`

#### 初始代码

```python
class Person(object):
	# 重写实例对象的构造（初始化）方法
    
	# 自定义实例方法，格式化打印实例属性name的值
    
	# 自定义实例方法，占位作用
    
class Student(Person):
    
	# 重写实例对象的构造（初始化）方法，并调用父类实例属性的赋值

	# 自定义实例方法，格式化打印实例属性stu_num的
    
	# 自定义实例方法，判断学号是否为既定值，并根据进行分类打印
    
	# 自定义实例方法，设置实例对象的学号为传入的值
    
	# 自定义实例方法，判断该类是否为Person类的子类
if __name__ == '__main__':
	stu = Student('小明', '男', 90, '数学')
	# 调用speak方法 打印stu对应的值
    
	# 调用实例方法 鉴别学号是否为指定值
    
	# 调用实例方法 鉴别实例对象所属的类的父类是否为
    
	print("******************")
	stu_2 = Student('小红', '女', 89, '英语')
	# 调用实例方法 设置stu_2的学号为'2018040625'
    
	# 调用实例方法 打印stu_2对应的值
    
	# 调用实例方法 鉴别学号是否为指定值
    
```

#### 代码提交区

```python
class Person(object):
    # 重写实例对象的构造（初始化）方法
    def __init__(self, name, sex):
        self.name = name
        self.sex = sex

    # 自定义实例方法，格式化打印实例属性name的值
    def speak(self):
        print('hello i am %s' % self.name)

    # 自定义实例方法，占位作用
    def sex(self):
        pass


class Student(Person):
    # 重写实例对象的构造（初始化）方法，并调用父类实例属性的赋值
    def __init__(self, name, sex, score, major):
        super().__init__(name, sex)
        self.score = score
        self.major = major
        self._stu_num = 20211103

    # 自定义实例方法，格式化打印实例属性stu_num的
    def speak(self):
        print('我的学号是%s,很高兴见到大家' % self._stu_num)

    # 自定义实例方法，判断学号是否为既定值，并根据进行分类打印
    def identify_stu(self):
        if(self._stu_num == 20211103):
            print('我的分组已完成')
        else:
            print('请稍后,马上为你自动分组')

    # 自定义实例方法，设置实例对象的学号为传入的值
    def set_num(self, new_num):
        self._stu_num = new_num

    # 自定义实例方法，判断该类是否为Person类的子类
    def relation(self):
        if issubclass(Student, Person):
            print('我的父类是Person')
        else:
            print('父类正在查询中.....')


if __name__ == '__main__':
    stu = Student('小明', '男', 90, '数学')
    # 调用speak方法 打印stu对应的值
    stu.speak()
    # 调用实例方法 鉴别学号是否为指定值
    stu.identify_stu()
    # 调用实例方法 鉴别实例对象所属的类的父类是否为
    stu.relation()
    print("******************")
    stu_2 = Student('小红', '女', 89, '英语')
    # 调用实例方法 设置stu_2的学号为'2018040625'
    stu_2._stu_num = 20211103
    # 调用实例方法 打印stu_2对应的值
    stu_2.speak()
    # 调用实例方法 鉴别学号是否为指定值
    stu_2.identify_stu()
```

