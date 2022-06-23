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

#### 删除属性
- `delete obj.xxx` 或 `delete obj['xxx']`
  - 即可删除 `obj` 的 `xxx` 属性
  - 请区分 【属性值为 undefined】和【不含属性名】
- 不含属性名
  - `'xxx' in obj === false`
- 含有属性名，但是值为 undefined
  - `'xxx' in obj && obj.xxx === undefined`
- 注意 `obj.xxx` === `undefined`
  - 不能断定 `'xxx'` 是否为 obj 的属性
- 类比
  - 你有没有卫生纸？
    - A: 没有 // 不含属性名
    - B: 有，但是没带 // 含有属性名，但是值为 `undefined`

#### 查看所有属性（读属性）

- 查看自身所有属性
  - `Object.keys(obj)`
- 查看自身+共有属性
  - `console.dir(obj)`
  - 或者自己依次用 `Object.keys` 打印出 `obj.__proto__`
- 判断一个属性是自身的还是共有的
  - `obj.hasOwnProperty('toString')`

#### 原型
- 每个对象都有原型
  - 原型里面存着对象的共有属性
  - 比如 `obj` 的原型就是一个对象
  - `obj.__proto__` 存着这个对象的地址
  - 这个对象里有 `toString` / `constructor` / `valueOf` 等属性
- 对象的原型也是对象
  - 所以对象的原型也有原型
  - `obj = {}` 的原型即为所有对象的原型
  - 这个原型包含有用对象的共有属性，是 `对象的根`
  - 这个原型也有原型，是 `null`

#### 查看属性
- 两种方法查看属性
  - 中括号语法：`obj['key']`
  - 点语法：`obj.key`
  - 坑新人语法：`obj[key]` // 变量 key 值一般不为 'key'
- 请优先使用中括号语法
  - 点语法会误导你，让你认为 `key` 不是字符串
  - 等你确定不会弄混两种写法，再改用点语法

![1](https://img.onmicrosoft.cn/2022-06-23/1.png)

![2](https://img.onmicrosoft.cn/2022-06-23/2.png)

![3](https://img.onmicrosoft.cn/2022-06-23/3.png)

#### 修改或增加属性（写属性）
- 直接赋值
```js
let obj = {name: 'frank'} // name 是字符串
obj.name = 'frank' // name 是字符串
obj['name'] = 'frank' 
obj[name] = 'frank' // 错，因 name 值不确定
obj['na'+'me'] = 'frank'
let key = 'name'; obj[key] = 'frank'
let key = 'name'; obj.key = 'frank' // 错
因为 obj.key 等价于 obj['key']
```
- 批量赋值
```js
Object.assign(obj, {age: 18, gender: 'man'})
// 赋值
```

#### 修改或增加共有属性
- 无法通过自身修改或增加共有属性
  - `let obj = {}, obj2 = {}` //共有 toString()
  - `obj.toString = 'xxx'` 只会在改 obj 自身属性
  - `obj2.toString` 还是在原型上
- 我偏要修改或增加原型上的属性
  - `obj.__proto__.toString = 'xxx'` // 不推荐使用 __proto__
  - `Window.` / `Object.prototype.toString = 'xxx'`
  - 一般来说，不要修改原型，会引起很多问题

#### 修改隐藏属性
- 不推荐使用 __proto__
```js
let obj = {name: 'frank'}
let obj2 = {name: 'jack'}
let common = {kind: 'human'}
obj.__proto__ = common
obj2.__proto__ = common
```
- 推荐使用 Object.create
```js
let obj = Object.create(common)
obj.name = 'frank'
let obj2 = Object.create(common)
obj2.name = 'jack'
规范大概的意思是，要改就一开始就改，别后来再改
```

#### 总结
- 删
```js
delete obj['name']
'name' in obj // false
obj.hasOwnProperty('name')  // false
```
- 查
```js
Object.keys(obj)
console.dir(obj)
obj['name']
obj.name // 记住这里的 name 是字符串
obj[name]  // 记住这里的 name 是变量
```
- 改
```js
改自身 obj['name'] = 'jack'
批量改自身 Object.assign(obj, {age:18, ...})
改共有属性 obj.__proto__['toString'] = 'xxx'  // 不推荐
改共有属性 Object.prototype['toString'] = 'xxx'
改原型 obj.__proto__ = common                // 不推荐
改原型 let obj = Object.create(common)
注：所有 __proto__ 代码都是强烈不推荐写的
```
- 增
```js
基本同上：已有属性则改；没有属性则增。
```

