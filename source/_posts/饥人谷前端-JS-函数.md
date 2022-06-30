---
title: 饥人谷前端 | JS 函数
tags: [JS]
description: 本节课主要学习了<br>JS 函数
date: 2022-06-30 18:03:29
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
#### 定义一个函数
- 具名函数
- 等于号右边有名字的作用域只在等于号右边

```js
function 函数名(形式参数1, 形式参数2){
    语句
    return 返回值
}
```
- 匿名函数
  - 上面的具名函数，去掉函数名就是匿名函数
  - `let a = function (x,y){ return x+y }`
  - 也叫函数表达式

- 箭头函数

```js
let f1 = x => x*x
let f2 = (x,y) => x+y // 圆括号不能省
let f3 = (x,y) => {return x+y} // 花括号不能省略 return
let f4 = (x,y) => ({name:x, age: y})
```
直接返回对象会报错，需要加个圆括号（头疼）
因为 `{}` 也是代码块的意思
- 用构造函数

```js
let f = new Function('x', 'y', 'return x+y')
```
基本没人用，但是能让你知道函数是谁构造的

所有函数都是 `Function` 构造出来的

包括 `Object`、`Array`、`Function` 也是


#### 函数自身 V.S. 函数调用
##### 函数自身
- 代码

```js
let fn = () => console.log('hi')
fn
```

- 结果
  - 不会有任何结果
  - 因为 fn 没有执行

##### 函数调用
- 代码

```js
let fn = () => console.log('hi')
fn()
```

- 结果
  - 打印出 `hi`
  - 有圆括号才是调用

##### 再进一步
- 代码

```js
let fn = () => console.log('hi')
let fn2 = fn
fn2()
```

- 结果
  - `fn` 保存了匿名函数的地址
  - 这个地址被复制给了 `fn2`
  - `fn2()` 调用了匿名函数
  - `fn` 和 `fn2` 都是匿名函数的引用而已
  - 真正的函数既不是 `fn` 也不是 `fn2`

#### 函数的要素
- 每个函数都有这些东西
  - `调用时机`
  - 作用域
  - 闭包
  - 形式参数
  - 返回值
  - 调用栈
  - 函数提升
  - arguments（除了箭头函数）
  - this（除了箭头函数）

##### 调用时机不同，结果不同

![5](https://img.onmicrosoft.cn/2022-06-30/5.png)
![6](https://img.onmicrosoft.cn/2022-06-30/6.png)
![7](https://img.onmicrosoft.cn/2022-06-30/7.png)
![8](https://img.onmicrosoft.cn/2022-06-30/8.png)
![9](https://img.onmicrosoft.cn/2022-06-30/9.png)
![10](https://img.onmicrosoft.cn/2022-06-30/10.png)
![11](https://img.onmicrosoft.cn/2022-06-30/11.png)