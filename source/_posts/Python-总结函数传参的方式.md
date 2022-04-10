---
title: Python 总结函数传参的方式
date: 2021-10-20 23:13:55
tags: [函数]
categories: Python
description: 本节课主要总结了<br>函数的传参的方式
cover: https://ik.imagekit.io/zkeq/2021-10-20/4.png
---

### 总结函数传参的方式

在函数中经常会用到参数来做一系列的业务处理，我们先来说说函数中的参数。

形参变量（所谓形参就是def声明函数名括号中的参数）:

- 只有在被调用时才分配内存单元，调用结束时，即刻释放所分配的内存单元。因此，形参只在函数内部有效。

实参（调用函数传入的参数被称为实参）：

- 无论实参是何种类型，在进行函数调用，它们都必须有确定的值。

传参的方式：

- 第一种位置参数：

  - 位置参数顾名思义，就是调用函数时传的实参与形参位置上一一对应的参数。

    例如：

    ![1](https://ik.imagekit.io/zkeq/2021-10-20/1.jpg)

- 第二种默认参数：

  - 默认参数是你在函数形参中定义好的，当实参中未传对应的参数时，参数就会以默认值为准。

    - 注意：默认参数，必须放在位置参数之后,否则会出错

    例如：

    ![2](https://ik.imagekit.io/zkeq/2021-10-20/2.jpg)

- 第三种关键参数：

  - 正常情况下，给函数传参数要按顺序，如果不按顺序就可以用关键参数，只需指定参数名即可（指定参数名的参数就叫关键参数），
    - 切记，关键参数必须放在位置参数（以位置顺序确定对应关系的参数）之后。

```python
def two_stu_info(name,age,major,country='CN'):
    print('--------------------学生信息---------------------')
    print('姓名：',name)
    print('年龄：',age)
    print('专业：',major)
    print('国籍：',country)
#country即为关键参数，单独指定，但必须放在位置参数之后，覆盖默认参数
stu3 = stu_info('Jack',21,'Chinese',country='UK')


def send_alert(msg,*users):
    '''
    :param msg:
    :param users: 表示非固定传参，可同时指定多个用户，传给过来的所有参数
    :return:
    '''
    print('打印参数users',users)
    for u in users:
        print('报警！请及时查看……',u,msg)

send_alert('你的系统已频临崩溃','AA','BB','CC')

```

- 非固定传参方式二：    
  - 可同时指定多个用户，传过来的所有参数打包成元组或字典；

```python
def func(name,*args,**kwargs):#形参依次是：位置参数，元组，字典
    print(name,args,kwargs)

func('Tom',22,'CN','tomorrow')
func('Try',21,'will',add='HG',num=666)
```

