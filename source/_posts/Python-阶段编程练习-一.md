---
title: Python 阶段编程练习(一)
date: 2021-09-27 19:36:43
tags: [编程练习]
categories: Python
cover: https://img.onmicrosoft.cn/2021-9-27/4.jpg
description: 通过运用前面所学的知识 <br> 完成自己的任务
---

###  编程练习(一)

#### 说明

> 在脚本开始写上国际通用编码。定义六个变量分别表示‘周一’，‘周二’，‘周三’，‘周四’，‘周五’，‘饭店活动介绍’每个变量加上相应的注释。‘周一’到‘周五’中把菜名与价格作为格式化。在‘饭店活动介绍’中把饭店名称以及所有奖品的价格用{}格式化。在‘凭结账小票可进行抽奖’后加入换行符，每等奖介绍完后都要进行换行，所有‘：’后面加入空格符。再定义五个变量作为‘周一’到‘周五’格式化输出的结果（比如菜名‘麻辣小龙虾’13，9.8）。最后将这11个变量对应输出，实现效果图：
>
> ![](https://img.onmicrosoft.cn/2021-9-27/2.jpg)

#### 任务

1. 定义每天特价的菜品变量，并把菜品与价格用格式符占位。
2. 定义一个活动介绍的变量‘
   -  饭店不仅每天有特价,为了回馈新老客户到店就送价值的精美礼品,凭结账小票可进行抽奖 
      - 一等奖: 价值 欧洲游 
      - 二等奖: 价值 的豆浆机 
      - 三等奖: 价值200元的生活大礼包"
3. 在活动介绍中加入相应的`格式符`与`转义字符`
4. 定义与1相对的变量写出每天的菜名，菜的价格，赠送汤的价格
5. 最后将3与1对应的周一到周五以及活动介绍并输出

### 提交作业区

```python
# coding:utf-8

num_1 = '一'  # 一
num_2 = '二'  # 二
num_3 = '三'  # 三
num_4 = '四'  # 四
num_5 = '五'  # 五
text = '饭店活动介绍'  # 介绍
food1 = '麻辣小龙虾'  # 食物
food1_price = 23
food2 = '宫保鸡丁'  # 食物
food2_price = 12
food3 = '水煮鱼片'  # 食物
food3_price = 32
food4 = '果儿拼盘'  # 食物
food4_price = 19
food5 = '小鸡炖蘑菇'  # 食物
food5_price = 33
free_food_01 = '罗宋汤'  # 赠送食物
free_food_02 = '紫菜蛋花汤'  # 赠送食物
free_food_03 = '西湖牛肉羹'  # 赠送食物
free_food_04 = '番茄鸡蛋汤'  # 赠送食物
free_food_05 = '米酒小汤圆'  # 赠送食物
free_food_price = 9.8

prize_01 = '价值一万元欧洲游'
prize_02 = '价值388的豆浆机'
prize_03 = '价值200元的生活大礼包'

word = '周%s特价%s %d元, 赠送一份价值%f的%s'
word_special = '****************************\n小北饭店不仅每天有特价,为了回馈新老顾客到店就送价值29.9的精美礼品,凭结账小票可进行抽奖'
word_prize = '%s等奖:  %s'

if __name__ == '__main__':
    print(word % (num_1, food1, food1_price, free_food_price, free_food_01))
    print(word % (num_2, food2, food2_price, free_food_price, free_food_02))
    print(word % (num_3, food3, food3_price, free_food_price, free_food_03))
    print(word % (num_4, food4, food4_price, free_food_price, free_food_04))
    print(word % (num_5, food5, food5_price, free_food_price, free_food_05))
    print(word_special)
    print(word_prize % (num_1, prize_01))
    print(word_prize % (num_2, prize_02))
    print(word_prize % (num_3, prize_03))

```

### 结果检验区

```cmd
C:\Users\admin\PycharmProjects\pythonlearn\venv\Scripts\python.exe C:/Users/admin/PycharmProjects/pythonlearn/test1.py
周一特价麻辣小龙虾 23元, 赠送一份价值9.800000的罗宋汤
周二特价宫保鸡丁 12元, 赠送一份价值9.800000的紫菜蛋花汤
周三特价水煮鱼片 32元, 赠送一份价值9.800000的西湖牛肉羹
周四特价果儿拼盘 19元, 赠送一份价值9.800000的番茄鸡蛋汤
周五特价小鸡炖蘑菇 33元, 赠送一份价值9.800000的米酒小汤圆
****************************
小北饭店不仅每天有特价,为了回馈新老顾客到店就送价值29.9的精美礼品,凭结账小票可进行抽奖
一等奖:  价值一万元欧洲游
二等奖:  价值388的豆浆机
三等奖:  价值200元的生活大礼包

进程已结束，退出代码为 0
```

