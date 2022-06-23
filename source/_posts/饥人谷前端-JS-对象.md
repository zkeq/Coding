---
title: 饥人谷前端 | JS 对象
tags: [JS]
description: 本节课主要学习了<br>JS 对象
date: 2022-06-23 09:21:41
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
七种数据类型
- `number` `string` `bool` `symbol`
- `null` `undefined`
- `object`
五个 falsy 值
- `null` `undefined`
- `0` `NaN`
- `''` (空字符串)

### 对象 object
- 第七种数据类型，唯一一种复杂类型

#### 定义
- 无序的数据集合
- 键值对的集合

#### 写法
- `let obj = {'name': 'frank', 'aga': 18}`
- `let obj = new Object({'name': 'frank'})`
- `console.log({'name':'frank', 'age': 18})`

#### 细节
- 键名是 `字符串`，`不是标识符`，`可以包含任意字符`
- 引号可省略，省略之后就只能写标识符
- `就算引号省略了，键名也还是字符串（重要）` 

#### 属性名
- 每个 `key` 都是对象的属性名（property）

#### 属性值
- 每个 `value` 都是对象的属性值

#### 奇怪的属性名
- 所有属性名会自动变成字符串

```js
let obj = {
    1: 'a',
    3.2 : 'b',
    1e2: true,
    1e-2: true,
    .234: true,
    0xFF: true
};
Object.keys(obj)
=> ['1', '100', '255', '3.2', '0.01', '0.234']
```

细节
- `Object.keys(obj)` 可以得到 `obj` 的所有 `key`

#### 变量做属性名
- 如何用变量做属性名
- 之前都是用常量做属性名

```js
let p1 = 'name'
let obj = { p1 : 'frank'} // 这样写，属性名为 'p1'
let obj = { [p1] : 'frank' } // 这样写，属性名为 'name'
```

对比
- 不加 `[]` 的属性名会自动变成字符串
- 加了 `[]` 则会当做变量求值
- 值如果不是字符串，则会自动变成字符串

#### 对象的隐藏属性
隐藏属性
- JS 中每一个对象都有一个隐藏属性
- 这个隐藏属性存储着其共有属性组成的对象的地址
- 这个共有属性组成的对象叫做原型
- 也就是说，隐藏属性储存着原型的地址

代码示例
```js
var obj = {}
obj.toString() // 居然不报错
// 因为 obj 的隐藏属性对应的对象上有 toString()
 ```

### 超纲知识
- 除了字符串，symbol 也能做属性名

```js
let a = Symbol()
let obj = { [a]: 'Hello' }
```

- 这有什么用呢？
  - 目前，屁用都没有，很久很久以后会有用
  - 在学习【迭代】时会用到

#### 增删改查
- 我们又遇到这个词了，这次增删改成对象的属性