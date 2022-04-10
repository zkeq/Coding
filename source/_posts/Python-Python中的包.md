---
title: Python Python中的包
tags: [模块和包]
description: 本节课主要学习了<br>包和模块的基础知识
date: 2021-11-08 00:31:05
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-11-8/1.png
---

### Python中的包

#### 什么是python的包与模块

- `包`就是`文件夹`，`包`中还可以有`包`，也就是`文件夹`
- 一个个`python文件`就是`模块`

#### 包的身份证

- `__init__.py`是**每一个**`python包`里**必须存在的文件**

#### 如何创建包

- 要有一个主题，明确功能，方便使用
- 层次分明，调用清晰

#### 包的导入 `import`

##### 功能

- 将python中的某个包（或模块），导入到当前的py文件中

##### 用法

- `import package`

##### 参数

- `package`：被导入的包的名字

##### 要求

- 只会拿到`对应包`下`__init__`中的**功能**或**当前模块下的功能**

#### 模块的导入 `form..import..`

##### 功能

- 通过从`某个包`中**找到对应的模块**

##### 用法

- `form package import module`

##### 参数

- `package`：来源的**包名**
- `module`：包中的**目标模块**

```python
举例：
	form animal import dog
    dog.run

```

- 我们通过 `form import` 直接找到了`dog`模块
- 所以只需要使用`dog`模块用`.`的方式找到里面的`方法`**并执行**

- `as`可以**取别名**

#### 代码

{% tabs  init %}
<!-- tab test1.py-->

```python
# coding:utf-8

from animal import dog_run, cat_run
# from animal import cat_run
from animal.cat.action import cat_name
# from animal.cat.action import Cat
#
# cat = Cat()
# cat.run()

dog_run_result = dog_run()
cat_run_result = cat_run()

print(dog_run_result)
print(cat_run_result)
print(cat_name)

```

<!-- endtab -->

<!-- tab  ./animal/main.py-->

```python
# coding:utf-8

def animal():
    return 'i am animal module function'

```

<!-- endtab -->

<!-- tab ./animal/cat/action.py-->

```python
# coding:utf-8

cat_name = '米粒儿'

def roar():
    return 'cat roar'


def dump():
    return 'cat jump'


def run():
    return 'cat running'

```

<!-- endtab -->

<!-- tab ./animal/dog/cation.py -->

```python
# coding:utf-8

def roar():
    return 'dog roar'


def dump():
    return 'dog jump'


def run():
    return 'dog running'

```

<!-- endtab -->

<!-- tab  ./animal/cat/__init__.py-->

```python
# 空
```

<!-- endtab -->

<!-- tab  ./animal/dog/__init__.py-->

```python
# 空
```

<!-- endtab -->

<!-- tab  ./animal/_init__.py-->

```python
# coding:utf-8

from .cat.action import run as cat_run
from .dog.action import run as dog_run

```

<!-- endtab -->

{% endtabs %}

