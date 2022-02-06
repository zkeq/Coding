---
title: 'Python 作业:货币兑换系统'
date: 2021-10-16 20:05:29
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的作业
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/3.jpg
---

### 作业

> 亲爱的朋友们，学到当前位置，相信大家已掌握Python语言的基础知识，为了巩固大家的所学，现在请大家亲自动手运用所学知识来开发一个简单的货币兑换系统吧。
> 题目要求：
> 根据业务需求，现要求慕友们开发一个货币兑换的服务系统，具体要求如下：
> 1、实现人民币兑换美元的功能
> 2、实现美元兑换人民币的功能
> 3、实现人民币兑换欧元的功能
> 4、1美元=7.06人民币，1人民币=0.12欧元
> 5、在兑换后保留2位小数
> 6、在输入要选择服务后有波浪线分隔；本次兑换服务结束后有等号线进行分隔。
> 运行效果图:
>
> ![2](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/2.jpg)

#### 任务描述

##### 一、开发语言与环境要求

1. 语言版本：`Python3.8`
2. 开发工具：`Pycharm`

##### 二、程序整体要求

1. 完成需求中所涉及到的`所有功能`；
2. 要求Python代码`书写`、`命名`**符合规范**，在代码中添加`必要的注释`；
3. 代码结构要**层次分明**，**代码编辑思路**要`清晰`、`整洁`；
4. 程序中用到的`变量名`**必须与要求保持一致**；
5. 程序`运行效果`**与提供的效果图结构保持一致**，
   - **信息间分隔符“*、~、=”号数量文字大小及背景色**`均不做统一要求`；

##### **三、 详细设计：**

1. 定义字典变量service_menu存储货币转换的四种服务：1.人民币转换美元，2.美元转换人民币，3.人民币转换欧元，0.结束程序

2. 定义一个列表lst，分别存放文字1，2，3，0。使用for循环得到列表中的元素后，使用service_menu[key]的方式得到字典中的value值，并对结果进行输出。

   效果：例

   ![img](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/4.webp)	

3. 定义变量your_money，用于存储小明的100元钱

4. 使用if……elif……else……条件判断语句，选择不同的服务进行货币兑换

5. 在每个货币兑换后有等号线进行分隔

6. 按照货币兑换规则将结果打印

7. 每个变量的具体要求请参照评分标准

#### 作业提交区

```python
# coding:utf-8
if __name__ == '__main__':
    print('*******欢迎使用货币转换服务系统*******')
    print('1.人民币转换美元')
    print('2.美元转换人民币')
    print('3.人民币转换欧元')
    print('0.结束程序')
    print('请选择需要的服务:', end=' ')

start = input()
while start == '1':
    print('~~~~~~~~~~~~~~~~~~~~~~~~~')
    print('欢迎使用人民币转换美元服务')
    print('请您输入需要转换的人民币金额:', end='')
    ren = input()
    print('您需要转换的人民币为:%s元' % ren)
    ren_num = float(ren)
    huilv = 7.06
    mei = ren_num / huilv
    mei = round(mei, 2)
    print('兑换成美元为:%s$' % mei)
    print('========================')
    print('*******欢迎使用货币转换服务系统*******')
    print('1.人民币转换美元')
    print('2.美元转换人民币')
    print('3.人民币转换欧元')
    print('0.结束程序')
    print('请选择需要的服务:', end=' ')
    start = input()
while start == '2':
    print('~~~~~~~~~~~~~~~~~~~~~~~~~')
    print('欢迎使用美元转换人民币服务')
    print('请您输入需要转换的美元金额:', end='')
    mei = input()
    print('您需要转换的美元为:%s$' % mei)
    mei_num = float(mei)
    huilv = 7.06
    ren = mei_num * huilv
    ren = round(ren, 2)
    print('兑换成人民币为:%s元' % ren)
    print('========================')
    print('*******欢迎使用货币转换服务系统*******')
    print('1.人民币转换美元')
    print('2.美元转换人民币')
    print('3.人民币转换欧元')
    print('0.结束程序')
    print('请选择需要的服务:', end=' ')
    start = input()
while start == '3':
    print('~~~~~~~~~~~~~~~~~~~~~~~~~')
    print('欢迎使用人民币转换欧元服务')
    print('请您输入需要转换的人民币金额:', end='')
    ren = input()
    print('您需要转换的人民币为:%s元' % ren)
    ren_num = float(ren)
    huilv = 0.12
    ouyuan = ren_num * huilv
    ouyuan = round(ouyuan, 2)
    print('兑换成欧元为:%s欧元' % ouyuan)
    print('========================')
    print('*******欢迎使用货币转换服务系统*******')
    print('1.人民币转换美元')
    print('2.美元转换人民币')
    print('3.人民币转换欧元')
    print('0.结束程序')
    print('请选择需要的服务:', end=' ')
    start = input()
while start != ('1' or '2' or '3'):
    break
print('**************')
print('感谢你的使用,祝你生活愉快,再见!')

```

##### 标准答案模板学习...(别人写的真好啊呜呜呜呜)

```python
# 货币兑换利率：1美元 = 7.14人民币      1元=0.12欧元
service_menu = {
        1:'人民币转换服务',
        2:'美元转换人民币',
        3:'人民币转换欧元',
        0:'结束程序'
        }
print('{:*^35}'.format('欢迎使用货币转换服务系统'))
for your_choice in service_menu:
    print(f'{your_choice}.{service_menu[your_choice]}')
print()
your_choices = int(input('请输入您的选择:'))
if your_choices in service_menu:
    if your_choices != 0:
        your_money = float(input('请输入您的金额:'))
        print()
        if your_choices == 1:
            print('欢迎使用{}'.format(service_menu[your_choices]))
            print('您需要转换的人民币为: {} 元'.format(your_money))
            print('兑换成美元为:{}$'.format(your_money/7.14))
            print('='*45)
        elif your_choices == 2:
            print('欢迎使用{}'.format(service_menu[your_choices]))
            print('您需要转换的美元为: {}$'.format(your_money))
            print('兑换成人民币为:{}元'.format(your_money*7.14))
            print('='*45)
        elif your_choices == 3:
            print('欢迎使用{}'.format(service_menu[your_choices]))
            print('您需要转换的人民币为: {} 元'.format(your_money))
            print('兑换成欧元为:{}€'.format(your_money*0.12))
    else:
        print('程序结束了')
else:
    print('输入错误，请检查。')
    
```

