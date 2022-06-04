---
title: Python Yaml文件的读取
tags: [文件操作（IO）]
description: 本节课主要学习了<br>Yaml文件的基本用法
date: 2021-11-10 01:21:26
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-10/1.png
---

### Yaml文件的读取

#### yaml格式的介绍

- 文本文件

- 服务器配置文件

- `xxx.yaml`

  ```yaml
  name:
    xiaomu
  age:
    10
  xingqing:
    - haha
    - heihei
  new:
    a: b
    c: 1
  ```

#### Python的第三方包----pyyaml

- `pip install pyyaml`
- `import yaml`

#### 读取yaml文件的方法

##### 用法

1.  `f = open(yaml_file, 'r')`
2.  `data = yaml.load(f.read())`
3.  `  f.close()`

##### 返回值

- 字典类型

#### 代码

```python
# coding:utf-8

import yaml


def read(path):
    with open(path, 'r') as f:
        data = f.read()
    _result = yaml.load(data, Loader=yaml.FullLoader)
    return _result


if __name__ == '__main__':
    result = read('muke.yaml')
    print(result, type(result))
    print(dir(yaml))
    
```
