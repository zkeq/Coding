---
title: Python 集合的isdisjoint函数
date: 2021-10-04 20:52:13
tags: [集合]
description: 本节课主要学习了:<br>isdisjoint函数<br>判断两个元素是否包含相同元素
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-10-4/2.jpg
---

### 集合的isdisjoint函数

#### 功能

- 判断两个`集合`是否包含**相同的元素** , 如果**没有**返回`True` , 否则返回`False`
- `没有`才返回**True**

#### 用法

- `a_set.isdisjoint(b_set)`

#### 参数

- `b_set` : 与当前集合用来判断的集合

#### 返回值

- 返回一个**布尔值**`True`或`False`

#### 代码

```python
# coding:utf-8

company_not_allow = {'女', '喝酒', '抽烟', '睡懒觉'}

one_player = {'男', '跑步', '朝气', '喝酒'}
two_player = {'女', '生活规律', '跆拳道'}
three_player = {'男', '太极拳'}
four_player = {'男', '空手道', '年轻'}

print(company_not_allow.isdisjoint(one_player))
print(company_not_allow.isdisjoint(two_player))
print(company_not_allow.isdisjoint(three_player))
print(company_not_allow.isdisjoint(four_player))

```

