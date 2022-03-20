---
title: Python 列表中的sort函数
date: 2021-10-01 22:41:23
tags: [列表]
categories: Python
description: 本节课主要学习了:<br>列表中的sort函数以及相关的注意事项
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-1/4.png
---

### 列表中的sort函数

#### 功能

- 对当前列表按照`一定规律`**排序**

#### 用法

- `list.sort(key=None, reverse=False)`

#### 参数

- `key` - 参数比较
- `reverse` --排序规则
  - `reverse = True` 降序 
  - `reverse = False` 升序 ( 默认 )
  - *key涉及函数学习,我们在日后讲解当前默认不传即可*

#### 注意事项

- 列表中的元素类型**必须相同** , 否则无法排序`(报错)`
- 字典也可以排序, key或者value排序

#### 代码

```python
# coding:utf-8

shu = '01老鼠'
niu = '02牛'
hu = '03虎'
tu = '04兔'
long = '05龙'
she = '06蛇'
ma = '07马'
yang = '08羊'
hou = '09猴'
ji = '10鸡'
gou = '11狗'
zhu = '12猪'

shengxiao =[]
shengxiao.append(gou)
shengxiao.append(ji)
shengxiao.append(zhu)
shengxiao.append(hou)
shengxiao.append(she)
shengxiao.append(tu)
shengxiao.append(hu)
shengxiao.append(niu)
shengxiao.append(shu)
shengxiao.append(long)
shengxiao.append(ma)
shengxiao.append(yang)

print(shengxiao)
print(len(shengxiao))
shengxiao.sort()
print(shengxiao)
shengxiao.sort(reverse=True)
print(shengxiao)
shengxiao.sort(reverse=True)
print(shengxiao)

# 以下会报错的
# mix = ['python', 1.2, {'name': 'dewei'}]
# mix.sort()
# print(mix)


```

