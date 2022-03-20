---
title: 'Python 综合案例:九九乘法表'
date: 2021-10-05 18:25:42
tags: [编程练习]
description: 通过运用前面所学的知识 <br> 完成一个乘法口诀表
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-5/1.png
---

### 综合案例:九九乘法表

##### 图片版代码

![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-5/carbon.png)

##### 代码

```python
# coding:utf-8

"""
1 * 1 = 1
2 * 1 = 2 2 * 2 = 4
3 * 1 = 3 3 * 2 = 6 3 * 3 = 9
4 * 1 = 4 4 * 2 = 8 4 * 3 = 12 4 * 4 = 16
5 * 1 = 5 5 * 2 = 10 5 * 3 = 15 5 * 4 = 20 5 * 5 = 25
6 * 1 = 6 6 * 2 = 12 6 * 3 = 18 6 * 4 = 24 6 * 5 = 30 6 * 6 = 36
7 * 1 = 7 7 * 2 = 14 7 * 3 = 21 7 * 4 = 28 7 * 5 = 35 7 * 6 = 42 7 * 7 = 49
8 * 1 = 8 8 * 2 = 16 8 * 3 = 24 8 * 4 = 32 8 * 5 = 40 8 * 6 = 48 8 * 7 = 56 8 * 8 = 64
9 * 1 = 9 9 * 2 = 18 9 * 3 = 27 9 * 4 = 36 9 * 5 = 45 9 * 6 = 54 9 * 7 = 63 9 * 8 = 72 9 * 9 = 81

"""

work = {}
# 1
one_value = (1,)
one_key = 1
work[str(one_key)] = one_value
print(work)
# 2
two_key = 2
two_value = []
two_value.append(1)
two_value.append(2)
work[str(two_key)] = two_value

# 3
three_key = 3
three_value = []
three_value.append(1)
three_value.append(2)
three_value.append(3)
work[str(three_key)] = three_value
print(work)

# 4
four_key = 4
four_value = []
four_value.append(1)
four_value.append(2)
four_value.append(3)
four_value.append(4)
work[str(four_key)] = four_value

temp_five = (1, 2, 3, 4, 5)
five_key = 5
five_value = []
five_value.extend(temp_five)
work[str(five_key)] = five_value
print(work)

# 6
temp_six = [1, 2, 3, 4, 5, 6]
six_key = 6
six_value = []
six_value.extend(temp_six)
work[str(six_key)] = six_value

# 7
temp_seven = {1, 2, 3, 4, 5, 6, 7}
seven_key = 7
seven_value = []
seven_value.extend(temp_seven)
work[str(seven_key)] = seven_value

# 8
temp_eight = [1, 2, 3, 4, 5, 6, 7, 8]
eight_key = 8
eight_value = []
eight_value.extend(temp_eight)
eight_key = str(eight_key)
work[eight_key] = eight_value

# 9
temp_nine = (1, 2, 3, 4, 5, 6, 7, 8, 9)
nine_key = 9
nine_value = list(temp_nine)
nine_key = str(nine_key)
work.update({nine_key: nine_value})
print(work)

_keys = work.keys()
keys = list(_keys)
print(_keys)

one = keys[0]
one_value = work.pop(one)
print(one, one_value)
one_key = int(one)
print('{} * {} = {}'.format(one_key, one_value[0], one_key * one_value[0]))

two = keys[1]
two_value = work.pop(two)
print('{} * {} = {}'.format(two, two_value[0], int(two) * two_value[0]), end=' ')
print('{} * {} = {}'.format(two, two_value[1], int(two) * two_value[1]))

three = keys[2]
three_value = work.pop(three)
print('{} * {} = {}'.format(three, three_value[0], int(three) * (three_value[0])), end=' ')
print('{} * {} = {}'.format(three, three_value[1], int(three) * (three_value[1])), end=' ')
print('{} * {} = {}'.format(three, three_value[2], int(three) * (three_value[2])))

four = keys[3]
four_value = work.pop(four)
print('{} * {} = {}'.format(four, four_value[0], int(four) * (four_value[0])), end=' ')
print('{} * {} = {}'.format(four, four_value[1], int(four) * (four_value[1])), end=' ')
print('{} * {} = {}'.format(four, four_value[2], int(four) * (four_value[2])), end=' ')
print('{} * {} = {}'.format(four, four_value[-1], int(four) * (four_value[-1])))

five = keys[4]
five_value = work.pop(five)
print('%s * %s = %s' % (five, five_value[0], int(five) * five_value[0]), end=' ')
print('%s * %s = %d' % (five, five_value[1], int(five) * five_value[1]), end=' ')
print('%s * %s = %d' % (five, five_value[2], int(five) * five_value[2]), end=' ')
print('%s * %s = %d' % (five, five_value[-2], int(five) * five_value[-2]), end=' ')
print('%s * %s = %d' % (five, five_value[-1], int(five) * five_value[-1]),)

six = keys[5]
six_value = work.pop(six)
print('%s * %s = %s' % (six, six_value[0], int(six) * six_value[0]), end=' ')
print('%s * %s = %s' % (six, six_value[1], int(six) * six_value[1]), end=' ')
print('%s * %s = %s' % (six, six_value[2], int(six) * six_value[2]), end=' ')
print('{} * {} = {}'.format(six, six_value[3], int(six) * six_value[3]), end=' ')
print('{} * {} = {}'.format(six, six_value[4], int(six) * six_value[4]), end=' ')
print('{} * {} = {}'.format(six, six_value[5], int(six) * six_value[5]))

seven = keys[6]
seven_value = work.pop(seven)
print('{} * {} = {}'.format(seven, seven_value[0], int(seven) * seven_value[0]), end=' ')
print('{} * {} = {}'.format(seven, seven_value[1], int(seven) * seven_value[1]), end=' ')
print('{} * {} = {}'.format(seven, seven_value[2], int(seven) * seven_value[2]), end=' ')
print('{} * {} = {}'.format(seven, seven_value[3], int(seven) * seven_value[3]), end=' ')
print('{} * {} = {}'.format(seven, seven_value[4], int(seven) * seven_value[4]), end=' ')
print('{} * {} = {}'.format(seven, seven_value[5], int(seven) * seven_value[5]), end=' ')
print('{} * {} = {}'.format(seven, seven_value[6], int(seven) * seven_value[6]))

eight = keys[7]
eight_value = work.pop(eight)
print('{} * {} = {}'.format(eight, eight_value[0], int(eight) * eight_value[0]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[1], int(eight) * eight_value[1]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[2], int(eight) * eight_value[2]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[3], int(eight) * eight_value[3]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[4], int(eight) * eight_value[4]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[5], int(eight) * eight_value[5]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[6], int(eight) * eight_value[6]), end=' ')
print('{} * {} = {}'.format(eight, eight_value[7], int(eight) * eight_value[7]))

nine = keys[-1]
nine_value = work.get(nine)
format_str = '{} * {} = {}'
print(format_str.format(nine, nine_value[0], int(nine) * nine_value[0]), end=' ')
print(format_str.format(nine, nine_value[1], int(nine) * nine_value[1]), end=' ')
print(format_str.format(nine, nine_value[2], int(nine) * nine_value[2]), end=' ')
print(format_str.format(nine, nine_value[3], int(nine) * nine_value[3]), end=' ')
print(format_str.format(nine, nine_value[4], int(nine) * nine_value[4]), end=' ')
print(format_str.format(nine, nine_value[5], int(nine) * nine_value[5]), end=' ')
print(format_str.format(nine, nine_value[6], int(nine) * nine_value[6]), end=' ')
print(format_str.format(nine, nine_value[7], int(nine) * nine_value[7]), end=' ')
print(format_str.format(nine, nine_value[8], int(nine) * nine_value[8]))

```
