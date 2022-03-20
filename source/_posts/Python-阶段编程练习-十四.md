---
title: Python 阶段编程练习(十四)
date: 2021-10-28 22:24:36
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 编程练习

> 自定义一个交通工具类(Vehicle)，并根据提示对该类进行进一步封装，使其拥有工具类型、速度、体积等属性值。通过自定义实例方法实现交通工具的前移、速度设置、获取当前速度、加速行驶、减速行驶、实例信息展示、实例类型判别等功能。
>
> 效果图如下：
>
> ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/1.jpg)

#### 任务

1. 自定义一个交通工具类(Vehicle)
2. 设置类属性trans_type（默认值为SUV）和实例属性速度speed（int 类型，单位为 km/h）、体积size（tuple类型，单位为米。）
3. 自定义方法 show_info( )，打印实例的所属类型和速度、体积的值；
4. 自定义实例方法如下：

   1. 定义move( )方法，实现打印"我已向前移动了50米"
   2. 定义set_speed(new_speed)方法，设置对应实例的速度为new_speed km/h
   3. 定义get_speed()方法，如果（2）中设置了速度值则打印出来，打印格式为"我的时速为：设置的速度值 km/h"
   4. 定义speed_up()方法，设置每次调用时实例的速度都增加10km/h，并打印"我的速度由xx km/提升到了xx km/h"
   5. 定义speed_down()方法，设置每次调用时实例的速度都降低15km/h，并打印"我的速度由xx km/下降到了xx km/h"
5. 自定义方法 transport_identify( )，判断实例的trans_type属性是否为SUV。若是则打印"类型匹配"，反之则打印"类型不匹配"
6. 初始化实例对象tool_1，并根据上述效果图调用对应方法

#### 任务提示

- 类的初始化方法中所传参数size是元组类型，直接传入实例的长，宽，高即可，如size=(10,10,10)

#### 初始代码

```python
class Vehicle(object):
	# 自定义Vehicle类属性
    
	# 自定义实例的初始化方法
    
	# 自定义实例方法show_info，打印实例的速度和体积
    
	# 自定义实例方法move,打印“我已向前移动了50米”
    
	# 自定义实例方法set_speed，设置对应的速度值
    
	# 自定义实例方法get_speed，打印当前的速度值
    
	# 自定义实例方法speed_up，实现对实例的加速
    
	# 自定义实例方法speed_down，实现对实例的减速
    
	# 自定义实例方法transport_identify，实现对实例
    
if __name__ == "__main__":
	tool_1 = Vehicle(20, (3.6, 1.9, 1.75))
    
	# 调用实例方法 打印实例的速度和体积
    
	# 调用实例方法 实现实例的前移
    
tool_1.set_speed(40)
	# 调用实例方法 打印当前速度
    
	# 调用实例方法 对实例进行加速
    
	# 调用实例方法 对实例进行减速
    
	# 调用实例方法 判断当前实例的类型
```

#### 代码提交区

```python
# coding:utf-8

class Vehicle(object):
    # 自定义Vehicle类属性
    trans_type = 'SUV'

    # 自定义实例的初始化方法
    def __init__(self, speed, size):
        self.speed = speed
        self.size = size

    # 自定义实例方法show_info，打印实例的速度和体积
    def show_info(self):
        print('所属类型:{},速度是{}km/h,体积是{}'.format(self.trans_type, self.speed, self.size))

    # 自定义实例方法move,打印“我已向前移动了50米”
    def move(self):
        print('我已向前移动了50米')

    # 自定义实例方法set_speed，设置对应的速度值
    def set_speed(self, speed):
        self.speed = speed

    # 自定义实例方法get_speed，打印当前的速度值
    def get_speed(self):
        print('我的时速为:{}'.format(self.speed))

    # 自定义实例方法speed_up，实现对实例的加速
    def speed_up(self):
        self.__new_speed = self.speed + 10
        print('我的速度由{}km/h,提升到了{}km/h'.format(self.speed,self.__new_speed))

    # 自定义实例方法speed_down，实现对实例的减速
    def speed_down(self):
        self.__speed = self.speed - 15
        print('我的速度由{}km/h,下降到了{}km/h'.format(self.speed, self.__speed))

    # 自定义实例方法transport_identify，实现对实例
    def transport_identify(self):
        if isinstance(self, Vehicle):
            print('类型匹配')
        else:
            print('类型不匹配')


if __name__ == "__main__":
    tool_1 = Vehicle(20, (3.6, 1.9, 1.75))
# 调用实例方法 打印实例的速度和体积
    tool_1.show_info()
# 调用实例方法 实现实例的前移
    tool_1.move()
    tool_1.set_speed(40)
# 调用实例方法 打印当前速度
    tool_1.get_speed()
# 调用实例方法 对实例进行加速
    tool_1.speed_up()
# 调用实例方法 对实例进行减速
    tool_1.speed_down()
# 调用实例方法 判断当前实例的类型
    tool_1.transport_identify()
```

#### 结果检验

```cmd
C:\Python39\python.exe C:/Users/admin/PycharmProjects/python_object/hello.py
所属类型:SUV,速度是20km/h,体积是(3.6, 1.9, 1.75)
我已向前移动了50米
我的时速为:40
我的速度由40km/h,提升到了50km/h
我的速度由40km/h,下降到了25km/h
类型匹配

进程已结束，退出代码为 0

```

##### 学霸答案区

```python
class Vehicle(object):
    # 自定义Vehicle类属性
    trans_type = 'SUV'
 
    # 自定义实例的初始化方法
    def __init__(self,speed,size):
        self.speed = speed
        self.size = size
 
 
# 自定义实例方法show_info，打印实例的速度和体积
    def show_info(self):
        print('速度：{0}km/h,体积：{1}'.format(self.speed,self.size))
    # 自定义实例方法move,打印“我已向前移动了50米”
    def move(self):
        print('我已经向前移动了50米')
    # 自定义实例方法set_speed，设置对应的速度值
    def set_speed(self,speed):
        self.speed = speed
    # 自定义实例方法get_speed，打印当前的速度值
    def get_speed(self):
        print('我的时速为：{0}km/h'.format(self.speed))
    # 自定义实例方法speed_up，实现对实例的加速
    def speed_up(self):
        speed2 = self.speed+10
        print('我的速度由{0}km/h提升到了{1}km/h'.format(self.speed,speed2))
        self.speed = speed2
    # 自定义实例方法speed_down，实现对实例的减速
    def speed_down(self):
        speed3 = self.speed - 15
        print('我的速度由{0}km/h下降到了{1}km/h'.format(self.speed,speed3))
        self.speed = speed3
    # 自定义实例方法transport_identify，实现对实例所属类型的判断
    def transport_identify(self):
        if isinstance(self,Vehicle):
            print('类型匹配')
        else:
            print('类型不匹配')
if __name__ == "__main__":
    tool_1 = Vehicle(20, (3.6, 1.9, 1.75))
 
    # 调用实例方法 打印实例的速度和体积
    tool_1.show_info()
    # 调用实例方法 实现实例的前移
    tool_1.move()
 
    tool_1.set_speed(40)
    # 调用实例方法 打印当前速度
    tool_1.get_speed()
    # 调用实例方法 对实例进行加速
    tool_1.speed_up()
    # 调用实例方法 对实例进行减速
    tool_1.speed_down()
    # 调用实例方法 判断当前实例的类型
    tool_1.transport_identify()
```
