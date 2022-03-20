---
title: Python python的随机模块--random
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>python的随机模块--random
date: 2021-11-12 02:08:02
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

### python的随机模块--`random`

- `random.random`
  - 模块名称.模块中的函数
- `random.uniform`
- `random.randint`
- `random.choice`
- `random.sample`
- `random.randrange`

#### random.random

- 随机返回0~1之间的浮点数

#### random.uniform

- 产生一个a,b区间的随机浮点数

#### random.randint

- 产生一个a, b区间的随机整数

#### random.choice

- 返回对象中的一个随机元素

#### random.sample

- 随机返回对象中指定的元素

- `# 即个数`

#### random.randrange

- 获取区间内的一个随机数
- `random.randrange(0, 100, 1)`  # 区间,步长
- `random.choice(range(0, 100, 1))`

#### 代码

```python
# coding:utf-8

import random

gifts = ['iphone', 'ipad', 'car', 'tv']


def chioce_gifts():
    gift = random.choice(gifts)
    print('你得到了%s' % gift)


def chioce_gift_new():
    count = random.randrange(0, 100, 1)
    if 0 <= count <= 50:
        print('你中了一个iphone')
    elif 50 < count <= 70:
        print('你中了一个ipad')
    elif 70 < count < 90:
        print('你中了一个tv电视')
    elif count >= 90:
        print('恭喜你中了一辆小汽车')


if __name__ == '__main__':
    # chioce_gifts()
    chioce_gift_new()
    
```
