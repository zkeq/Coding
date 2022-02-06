---
title: Python数据类型
date: 2021-09-18 18:55:07
tags: [数据类型]
categories: Python
toc: false
toc_number: true
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-18/1.png
description: 初步认识pythond的数据类型 ： <br> 整形 浮点型 内置函数 <br>type字符串类型 内置函数id 内置函数len
---

## 整形

#### `int` 定义整形 ,又是定义整形的 内置函数

#### 定义一个整型,并不一定要使用`int`

`cout_100_01 = int(100)`

`cout_100_02 = 100`

不要使用long

-------------------

## 浮点型

#### 凡是带有小数点的类型,都可以认为是浮点型

`pi_01 = float(3.14)`

`pi_02 =  3.14`

定义一个浮点型,并不一定要使用`float`

--------------------

## 内置函数 `type`

---------------------

## 字符串 类型

##### 什么是字符串?

##### 用 '  ' 或者 "" 包裹的信息 就是 字符串

##### 字符串中可以包括任意字符且没有先后顺序

------------------------

## 字符串定义方法

### 使用`str`定义

#### `safe = str('健康的体温是36.5左右')`



### 字符串不可改变!!!

##### `name = 'dewei'`



### 内置函数 `id`

返回变量的内存地址

`数值地址 = in(变量)`



### 内置函数`len`

- 返回 字符串的长度

- 无法返回数字类型的长度,因为数字类型没有长度

- `返回值 = len(字符串)`

  `lenth = len('python是一门很好的语言')`

  `print(length)14`

- count = len(3.14)直接报错!!!!!!



```python
# coding:utf-8

title = '小慕学校的春游'

class_count = 51
boys = 28
girls = 23

every_body_pay = 35.5

start_time = 8.00
bus_count = 2
site_every_bus = 30

come_part_time = 10.33

lunch_time = 12.0
lunch_pay = 25.5

leave_park_time = 3.05

bus_pay = 5

come_back_school_time = 5.00

back_pay = 5

if __name__ == '__main__':
    print(title)
    print('小慕的班级有:', class_count)
    print('男生有:', boys)
    print('女生有:', girls)
    print('每人支付', every_body_pay, '元')
    print('出发的时间是早上', start_time, '点')
    print('出行需要', bus_count, ' 辆公交大巴')
    print('我们到达公园的时间是:', come_part_time)
    print('吃午饭的时间是:', lunch_time)
    print('每人支付伙食费是:', lunch_pay)
    print('离开公园的时间是:', leave_park_time)

    print('公交大巴来回的费用是每人', bus_pay)

    print('下午', come_back_school_time, '到达学校')
    print('这一天小慕同学花费了', 30.5)
    print('最后退回', back_pay, '元')
    print(type(come_back_school_time))
    print(type(every_body_pay))
    print(type(site_every_bus))

    print('数字编写测试')

```

