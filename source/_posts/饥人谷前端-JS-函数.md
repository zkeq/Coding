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

#### 作用域

- 每个函数都会默认创建一个作用域

例1

```js
function fn(){
    let a = 1
}
console.log(a) // a 不存在
```
- 问
  - 是不是因为 fn 没执行函数
- 答
  - 就算 fn 执行了，也访问不到作用域里面的 a

例2

```js
function fn(){
    let a = 1
}
fn()
console.log(a) // a 还是不存在
```

#### 全局变量 V.S. 局部变量
- 在顶级作用域声明的变量是全局变量
- window 的属性是全局变量
- 其他都是局部变量

函数可嵌套
- 作用域也可嵌套

例3

```js
function f1(){
    let a = 1
    
    function f2(){
        let a = 2
        console.log(a)
    }
    
    console.log(a)
    a = 3
    f2()
}
f1()
```

#### 作用域规则
- 如果多个作用域有同名变量 a
  - 那么查找 `a` 的声明时，就`向上取最近的作用域`
  - 简称 `就近原则`
  - 查找 a 的过程与函数执行无关
  - 但 a 的值与函数执行有关

> 跟函数执行没有关系的作用域叫做 `静态作用域` / `词法作用域`

例4

```js
function f1(){
    let a = 1
    function f2(){
        let a = 2
        function f3(){
            console.log(a)
        }
        a = 22
        f3()
    }
    console.log(a)
    a = 100
    f2()
}
f1()
```

#### 闭包
- JS 的函数会就近寻找最近的变量，这就叫闭包

> - 如果一个函数用到了外部的变量
> - 那么这个函数加这个变量
> - 就叫做 `闭包`
> - 左边的 a 和 f3 组成了 闭包
> - 闭包的用途以后讲
> - 你也可以先搜一下

```js
function f1(){
    let a = 1
    function f2(){
        ···
        let a = 2  // 闭包，用到了外面的变量
        function f3(){  // 闭包，用到了外面的变量
            console.log(a)  // 闭包，用到了外面的变量
        }  // 闭包，用到了外面的变量
        ···0
        a = 22
        f3()
    }
    console.log(a)
    a = 100
    f2()
}
f1()
```

#### 形式参数
- 形式参数的意思就是非实际参数

```js
function add(x, y){
    return x+y
}
// 其中 x 和 y 就是形参，因为并不是实际的参数
add(1, 2)
// 调用 add 时，1 和 2 是实际参数，会被赋值给 x y
```

- 形参可认为是变量声明

```js
// 上面代码近似等价于下面代码
function add(){
    var x = arguments[0] // 当时发明形参的时候 只有 var
    var y = arguments[1] // 当时发明形参的时候 只有 var
    return x + y
}
```
![1](https://img.onmicrosoft.cn/2022-07-03/1.png)

// 传对象的时候，复制地址

// `stack` 记了什么，就复制什么

// 根据内存图，全部复制的

#### 返回值
- 每个函数都有返回值

```js
function hi(){
    console.log('hi')
}
hi()
// 没写 return，所以返回值是 undefined

function hi(){
    return console.log('hi')
}
hi()
// 返回值为 console.log('hi') 的值，即 undefined
```
- 函数执行完了后才会返回
- 只有函数有返回值
  - ~~1+2 返回值为 3~~
  - 1+2 值为 3

#### 调用栈
什么是调用栈
- JS 引擎在调用一个函数前
- 需要把函数所在环境 push 到一个数组里
- 这个数组叫做调用栈
- 等函数执行完了，就会把环境弹（pop）出来
- 然后 return 到之前的环境，继续执行后续代码

举例
```js
console.log(1)
console.log('1+2的结果为' + add(1,2))
console.log(2)
```
压栈 和 弹栈
![2](https://img.onmicrosoft.cn/2022-07-03/2.png)

#### 递归函数
阶乘
```js
function f(n){
    return n !== 1? n* f(n-1): 1
}
```
理解递归
```js
f(4)
= 4 * f(3)
= 4 * (3 * f(2))
= 4 * (3 * f(2 * f(1)))
= 4 * (3 * (2 * (1)))
= 4 * (3 * (2))
= 4 * (6)
= 24
```
先递进，再归回归

![4](https://img.onmicrosoft.cn/2022-07-03/4.png)

```js
function f(n){
    return n !== 1? n*f(n-1) : 1
}
```
```js
function sum(n){
    return n !== 1? n + sum(n-1) : 1
}
sum(11000) // 60505500
sum(11500) // Maximum call stack size exceeded

sum(11419) // 65202490
sum(11420) // Maximum call stack size exceeded
```

#### 递归函数的调用栈
递归函数的调用栈很长
- 请画出阶乘 (6) 的调用栈

调用栈最长有多少
```js
function computeMaxCallStackSize(){
    try {
      return 1 + computeMaxCallStackSize();
    } catch (e) {
        // 报错说明 stack overflow 了
        return 1;
    }
}
Chrome 12578
Firefox 26773
Node 12536
```
#### 爆栈
- 如果调用栈中压入的栈过多，程序就会崩溃

#### 函数提升
什么是函数提升
- `function fn(){}`
- 不管你把具名函数声明在哪里，他都会跑到第一行

```js
add(1,2)
function add(x,y){
    return x+y
}
```
```js
let add = 1
function add(){} // 报错
// Identifier 'add' has already been declared
```

什么不是函数提升
- `let fn = function(){}`
- 这是赋值，右边的匿名函数声明不会提升