---
title: Python 字符串的strip函数
date: 2021-09-25 21:32:57
tags: [字符串]
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-25/1.jpg
---

### 字符串的strip函数

#### 功能

- `string`将去掉字符串**左右两边**的`指定元素`,**默认**是`空格`

#### 用法

- `newstr = string.strip(item)`

#### 参数

- 括弧里需要传一个你`想去掉的元素`,可不填写

#### 拓展知识

- 传入的元素如果不在开头或结尾则无效
- `lstrip`仅去掉字符串开头的指定元素或空格
- `rstrip`仅去掉字符串结尾的指定元素或空格

#### 代码

```python
# coding:utf-8

info = '                             my name is dewei                      '
new_info = info.strip()
print('.' + info + '.')
print('.' + new_info + '.')

info_01 = 'my name is dewei'
new_info_01 = info_01.strip(info_01)
print(new_info_01)
print(len(new_info_01))


new_str = 'abcde'
print(new_str.lstrip('a'))
print(new_str.rstrip('e'))

```

