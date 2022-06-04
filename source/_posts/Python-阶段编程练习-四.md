---
title: Python 阶段编程练习(四)
date: 2021-10-01 22:43:27
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://img.onmicrosoft.cn/2021-10-1/4.png
---

### 编程练习(四)

#### 说明

> 上级派一个组织，去捣毁诈骗团伙。某组织打入敌人内部之后。被卧底发现。卧底想破译组织带来的编码里应合，一网打尽。根据效果图，任务描述及代码中的部分提示来完成
>
> 效果图:
>
> ![](https://img.onmicrosoft.cn/2021-10-1/3.jpg)

#### 任务

1. 定义两个}空列表将字符串与数字分别添加到这两个空列表里
2. 得到两个列表之后将两个列表进行有规律的排序
3. 排序之后就获取到暗号与密码，为了保密再将两个列表的顺序反转进行打乱顺序
4. 将原来code列表中的数据复制一份
5. 为了不让编码落入敌人只手将原code列表数据清空

#### 原始代码

```
code = ["e_ying", "d_shi", 6, "a_wo", 1, 2, 3, 'f_xiong', 4, 'b_men', 5, "c_dou"]
# 定一个空列表crack 放入字符串

# 定义一个空列表number 放入数字

# 使用append将code里面的字符串根据索引添加到crack列表





print("字符串添加完成", crack)
# 使用append将code里面的数字根据索引添加到number列表





print("数字添加完成", number)
# 使用sort对crack和number列表进行排序


print("新字符串列表排序", crack, "\n", "新数字列表", number)
# 使用reverse对两个列表进行反序



print("反转后的新字符串列表crack", crack)
print("反转后的新数字列表number", number)
# 再将原列表复制了一份并且将原列表里面的内容清空

print("复制原编码", new_code)

print("清空原列表编码", code)

```

#### 作业提交区

```python
code = ["e_ying", "d_shi", 6, "a_wo", 1, 2, 3, 'f_xiong', 4, 'b_men', 5, "c_dou"]
# 定一个空列表crack 放入字符串
crack = []
# 定义一个空列表number 放入数字
number = []
# 使用append将code里面的字符串根据索引添加到crack列表
crack.append(code[0])
crack.append(code[1])
crack.append(code[3])
crack.append(code[7])
crack.append(code[9])
crack.append(code[11])
print("字符串添加完成:", crack)
# 使用append将code里面的数字根据索引添加到number列表
number.append(code[2])
number.append(code[4])
number.append(code[5])
number.append(code[6])
number.append(code[8])
number.append(code[10])
print("数字添加完成", number)
# 使用sort对crack和number列表进行排序
crack.sort()
number.sort()
print("新字符串列表排序", crack, "\n", "新数字列表", number)
# 使用reverse对两个列表进行反序
crack.reverse()
number.reverse()
print("反转后的新字符串列表crack", crack)
print("反转后的新数字列表number", number)
# 再将原列表复制了一份并且将原列表里面的内容清空
new_code = code.copy()
print("复制原编码", new_code)
print("清空原列表编码", code)
del code

```

#### 结果检验区

```cmd
C:\Users\admin\PycharmProjects\pythonlearn\venv\Scripts\python.exe C:/Users/admin/PycharmProjects/python_list/venv/test3.py
字符串添加完成: ['e_ying', 'd_shi', 'a_wo', 'f_xiong', 'b_men', 'c_dou']
数字添加完成 [6, 1, 2, 3, 4, 5]
新字符串列表排序 ['a_wo', 'b_men', 'c_dou', 'd_shi', 'e_ying', 'f_xiong'] 
 新数字列表 [1, 2, 3, 4, 5, 6]
反转后的新字符串列表crack ['f_xiong', 'e_ying', 'd_shi', 'c_dou', 'b_men', 'a_wo']
反转后的新数字列表number [6, 5, 4, 3, 2, 1]
复制原编码 ['e_ying', 'd_shi', 6, 'a_wo', 1, 2, 3, 'f_xiong', 4, 'b_men', 5, 'c_dou']
清空原列表编码 ['e_ying', 'd_shi', 6, 'a_wo', 1, 2, 3, 'f_xiong', 4, 'b_men', 5, 'c_dou']

进程已结束，退出代码为 0

```
