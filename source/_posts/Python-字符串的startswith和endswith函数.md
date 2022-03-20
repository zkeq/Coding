---
title: Python 字符串的startswith和endswith函数
date: 2021-09-25 21:32:19
tags: [字符串]
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-25/1.jpg
---

### 字符串的startswith和endswith函数

#### 功能

- `startswith`判断字符串**开始位**是否是某成员(元素)
- `endswith`判断字符串**结尾**是否是某成员(元素)

#### 用法

- `string.startswith(item)` -> `item` : 你想查询匹配的元素,返回一个**布尔值**
- `string.endswith(item) ` -> `item`: 你想查询匹配的元素,返回一个**布尔值**

#### 小发现

当`item`赋值为`''`时,始终返回为`True`

#### 代码

```python
# coding:utf-8

info = 'this is a string example!!'

result = info.startswith('this')
print(result)

result = info.startswith('this is a string example!!')
print(result)

print(bool(info == 'this is a string example!!'))

result = info.endswith('!')
print('result:', result)

result = info.endswith('this is a string example!!')
print('full?:', result)

```

