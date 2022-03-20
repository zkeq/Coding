---
title: Python 阶段编程练习（十六）
date: 2021-11-03 23:16:19
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

#### 编程练习

> 圆形、长方形除了是几何学科中的基本图形之外，也还是我们日常生活中最常见的平面图形。请根据面向对象的相关知识，将上述两种平面图形用Python语言进行表示，使得我们的程序可以正常对其使用。
> 效果图如下：
>
> ![2](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-3/2.png)

##### 任务

1. 自定义Point类，并重写其构造（初始化）方法__init__( )，将参数x和y赋值给实例对象的属性
2. 自定义该类实例方法string( )，功能：打印“{X：xx, Y：xx}”
3. 自定义Circle类，继承自Point类，并重写其构造（初始化）方法__init__( )，x、y参数通过调用父类的构造函数进行赋值，radius通过子类重写的 __init__( )进行赋值。
4. 自定义该类实例方法string( )，功能：打印“该图形初始化点为：{X：xx, Y：xx}; {半径为：xx}”
5. 自定义Size类，并重写其构造（初始化）方法__init__( )，将参数width和height赋值给实例对象的属性
6. 自定义该类实例方法string( )，功能：打印“{Width：xx, Height：xx}”
7. 自定义Rectangle类，继承自Point类和Size类，并重写其构造（初始化）方法__init__( )，x、y、width、height 4个参数全部通过调用父类的构造函数进行赋值
8. 自定义该类实例方法string( )，功能：打印“该图形初始化点为：{X：xx, Y：xx}; 长宽分别为：{Width：xx, Height：xx}
9. 初始化Circle类的对象c，并调用其格式化输出函数string( )
10. 初始化Rectangle类的对象r1、r2,并分别调用其格式化输出函数string( )

##### 任务提示

1. 在自定义Rectangle类的构造方法时，调用父类方法必须按照类名.__init__(参数列表)的方式进行调用，如Point.__init__(self, x, y)
2. 自定义Rectangle类格式化输出方法时，调用父类的格式化输出函数string()

##### 初始代码

```python
class Point(object):
	# 自定义Point类的构造(初始化)方法
	
	# 自定义Point类对象的格式化输出函数(string())
	
class Circle(Point):
	# 自定义Circle类的构造(初始化)方法
	
	# 自定义Circle类对象的格式化输出函数(string())
	
class Size(object):
	# 自定义Size类的构造(初始化)方法
	
	# 自定义Size类对象的格式化输出函数(string())
	
class Rectangle(Point, Size):

	# 自定义Rectangle类的构造(初始化)方法，并在方法中调用父类的初始化方法以完成初
	
	# 自定义Rectangle类对象的格式化输出函数(string()
	
if __name__ == "__main__":
	# 实例化Circle对象，圆心为（5,5），半径为8
	
	# 实例化Rectangle对象，顶点位置（15,15），长和宽
	
	# 实例化Rectangle对象，顶点位置（40,30），长和宽
	
```

##### 代码提交区

```python
# coding:utf-8
class Point(object):
    # 自定义Point类的构造(初始化)方法
    def __init__(self, x, y):
        self.x = x
        self.y = y
    # 自定义Point类对象的格式化输出函数(string())
    def string(self):
        print('X:{0},Y:{1}'.format(self.x, self.y))
class Circle(Point):
    # 自定义Circle类的构造(初始化)方法
    def __init__(self, x, y, radius):
        super().__init__(x, y)
        self.radius = radius
    # 自定义Circle类对象的格式化输出函数(string())
    def string(self):
        print('该图像的初始化点为:X{0},Y{1},半径为{2}'.format(self.x, self.y,self.radius))
class Size(object):
    # 自定义Size类的构造(初始化)方法
    def __init__(self, width, height):
        self.width = width
        self.height = height
    # 自定义Size类对象的格式化输出函数(string())
    def string(self):
        print('width:{0},height:{1}'.format(self.width, self.height))
class Rectangle(Point, Size):
    # 自定义Rectangle类的构造(初始化)方法，并在方法中调用父类的初始化方法以完成初
    def __init__(self, x, y, width, height):
        Point.__init__(self, x, y)
        Size.__init__(self, width, height)
    # 自定义Rectangle类对象的格式化输出函数(string())
    def string(self):
        Point.string(self)
        Size.string(self)


if __name__ == "__main__":
    # 实例化Circle对象，圆心为（5,5），半径为8
    circle = Circle(5, 5, 8)
    circle.string()
    # 实例化Rectangle对象，顶点位置（15,15），长和宽
    r1 = Rectangle(15, 15, 15, 15)
    r1.string()
    # 实例化Rectangle对象，顶点位置（40,30），长和宽
    r2 = Rectangle(40, 30, 11, 14)
    r2.string()
```
