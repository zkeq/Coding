---
title: Python 阶段编程练习(五)
date: 2021-10-06 18:05:32
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/5.jpg
---

### 编程练习(五)

> 1. 输入身高与体重并打印
> 2. 身体状况指数是身体质量指数即BMI指数，计算公式为：BMI=体重（千克）除以身高（米）的平方
> 3. 判断身体BMI指数：
>
> - 条件
>   - 如果小于18.5，打印“过轻”
>   - 如果大于等于18.5并且小于等于25，打印“正常”
>   - 如果大于25并且小于等于28，打印“过重”
>   - 如果大于28并且小于等于32，打印“肥胖”
>   - 否则，打印“严重肥胖”
>
> ![4](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/4.jpg)

##### 初始代码

```python
# coding: utf-8
height = float(input('请输入身高：'))
weight = float(input('请输入体重：'))

```

##### 作业提交区

```python
# coding: utf-8

height = float(input('请输入身高：'))
weight = float(input('请输入体重：'))

BMI = weight / height ** 2

print('小明身高为%s,体重为%s' % (height, weight))
print('小明身高状况指数为%s' % BMI)

if BMI < 18.5:
    print('过轻')
elif 18.5 < BMI <= 25:
    print('正常')
elif 25 < BMI <=28:
    print('过重')
elif 28 < BMI <= 32:
    print('肥胖')
else:
    print('严重肥胖')

```

##### 结果检验区

```CMD
C:\Users\admin\PycharmProjects\pythonlearn\venv\Scripts\python.exe C:/Users/admin/PycharmProjects/python_if/test_5.py
请输入身高：1.65
请输入体重：55
小明身高为1.65,体重为55.0
小明身高状况指数为20.202020202020204
正常

进程已结束，退出代码为 0

```

