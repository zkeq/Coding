---
title: Python 阶段编程练习(十二)
date: 2021-10-20 23:13:09
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 编程练习

> 定义一个函数，向函数内传入形参username，password，当username值为imooc且password值为字符串123456时，返回“登录成功”；否则返回“请重新登录”

#### 任务

1. 定义函数login
2. if语句判断用户名和密码是否为字符串imooc和123456

#### 原始代码

```python
def login(username,password):
	# 使用if语句，判断用户名和密码为“imooc”和“123456
	
		#返回登录成功
		
	# 使用else子句处理用户名和密码非“imooc”和“123456
	
		#返回请重新登录

# 调用函数，向函数内传入'imooc','123456'和'mooc','123456'两组数据测试结果

# 打印函数测试结果

```

#### 代码

```python
# coding:utf-8

def login(username, password):
    # 使用if语句，判断用户名和密码为“imooc”和“123456
    if username == 'imooc' and password == '123456':
        # 返回登录成功
        return '登录成功'
# 使用else子句处理用户名和密码非“imooc”和“123456
    else:
        # 返回请重新登录
        return '请重新登录'
# 调用函数，向函数内传入'imooc','123456'和'mooc','123456'两组数据测试结果


user1 = login('imooc', '123456')
user2 = login('mooc', '123456')
# 打印函数测试结果
print(user1)
print(user2)

```

