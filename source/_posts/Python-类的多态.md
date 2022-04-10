---
title: Python 类的多态
date: 2021-11-01 23:35:26
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中类的继承
cover: https://ik.imagekit.io/zkeq/2021-10-28/2.jpg
---

### 类的多态

#### 什么是类的多态

- 同一个功能的多状变化

#### 多态的用法

- `子类中重写父类的方法`

#### 代码

```python
# coding:utf-8

# 1 书写一个父类
class XiaomuFather(object):
    def talk(self):
        print('小慕的爸爸说了一句话')

    def jump(self):
        print('大家都可以跳')


# 2 书写一个子类,并且继承一个父类
class XiaomuBrother(XiaomuFather):
    def run(self):
        print('小慕哥哥在奔跑着')

    def talk(self):
        print('小慕哥哥在说话')

# 为什么要去多态
# 为什么要去继承父类
# 答案: 为了已经写好的类中的函数
# 为了保留子类中某个和父类名称一样的函数的功能, 这时候, 我们就用到了类的多态
# 可以帮助我们保留子类中的函数功能

class Xiaomu(XiaomuFather):
    def talk(self):
        print('haha 小慕也可以说自己的观点')


if __name__ == '__main__':
    xiaomu_brother = XiaomuBrother()
    xiaomu_brother.run()
    xiaomu_brother.talk()
    xiaomu_brother.jump()
    father = XiaomuFather()
    father.talk()
    xiaomu = Xiaomu()
    xiaomu.talk()
    xiaomu.jump()
    
```
