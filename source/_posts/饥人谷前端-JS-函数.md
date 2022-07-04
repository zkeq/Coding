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

#### JS 三座大山
- 原型
- this
- AJAX

#### `arguments` 和 `this`
- 每个函数都有，除了箭头函数
  - `arguments` 是一个包含所有参数的伪数组
  - 如果不给任何条件，那么默认指向 `window`

代码
```js
function fn(){
    console.log(arguments)
    console.log(this)
}
```

如何传 `arguments`
- 调用 `fn` 即可传 `arguments`
- `fn(1,2,3)` 那么 `arguments` 就是 [1,2,3] 伪数组


如何传 this
- 目前可以用 `fn.call(xxx, 1, 2, 3)` 传 `this` 和 `arguments`
  - 第一段 `this` 其他 `arguments`
- 而且 xxx 会被 `自动转换成对象`（JS 的糟粕）
  - 如何传的 `this` 不是对象，那么会自动封装成对象
  - 如果加了 `'use strick'`就没有奇奇怪怪的规则了

```js
fn.call(1)
function fn(){
    'use strick'
    console.log(this)
}
```

`this` 是隐藏参数，`arguments` 是普通参数
- this 是参数（此结论是方佬个人的）

#### 假如没有 this

代码
```js
let person = {
  name: 'frank',
  sayHi() {
    console.log(`你好，我叫` + person.name)
    // 不用 this 的话，这样是可行的
  }
}
```
分析
- 我们可以用直接保存了对象地址的 `变量` 获取 `'name'`
- 我们把这种方法简称为`引用`

##### 问题一
代码
```js
let sayHi = function (){
     console.log(`你好，我叫`+ ~person~.name) // 这样不好
}
let person = {
    name: 'frank',
    'sayHi': sayHi()
}
```
分析
- `person` 如果改名，`sayHi` 函数就挂了
- `sayHi` 函数甚至有可能在另一个文件里面
- 所以我们不希望 `sayHi` 函数里出现 `person` 饮用 

##### 问题二
代码
```js
class Person{
    constructor(name){
        this.name = name
        // 这里的 this 是 new 强制指定的
    }
    sayHi(){
        console.log(???)
    }
}
```
分析
- 这里只有类，还没创建对象，故不可能获取对象的引用
- 那么如何拿到对象的 `name` ?

需要一种办法拿到对象
- 这样才能获取对象的 name 属性

#### 一种土方法，用参数
对象
```js
let person = {
    name: 'frank',
    sayHi(p){
        console.log(`你好，我叫` + p.name)
    }
}
person.sayHi(person)
```
类
```js
class Person{
    constructor(name){
        this.name = name
    }
    sayHi(p){
        console.log(`你好，我叫` + p.name)
    }
}
```

![4](https://img.onmicrosoft.cn/2022-07-03/6.png)

JS 没有模仿 `Python` 的思路
- 走了另一条路

JS 在每个函数里加了 this
- 用 this 获取每个对象

```js
let person = {
    name: 'frank',
    sayHi(){ // sayHi(this){
        console.log(`你好，我叫` + this.name)
  }
}
person.sayHi()
相当于
person.sayHi(person)
然后 person 被传给 this 了（person 是个地址）

这样，每个函数都能用 this 获取一个未知对象的引用了

person.sayHi() 会隐式地吧 person 作为 this 传给 sayHi
- 方便 sayHi 获取 person 对应的对象
```

#### 总结一下目前的知识
- 我们想让函数获取对象的引用
- 但是并不想通过变量名做到
- `Python` 通过额外的 `self` 参数做到
- `JS` 通过额外的 `this` 做到
  - `person.sayHi()` 会把 `person` 自动传给 `sayHi`
  - `sayHi` 可以通过 `this` 引用 `person`
  - `this` 就是最终调 `sayHi` 的对象
  - 
- 其他
  - 注意 `person.sayHi` 和 `person.sayHi()` 的区别
  - 注意 `person.sayHi()` 的断句 `(person.sayHi) ()`

#### 这就引出另一个问题
到底哪个对？
```js
let person = {
    name: 'frank',
    sayHi(){ // sayHi(this){
        console.log(`你好，我叫` + this.name)
  }
}
person.sayHi()
person.sayHi(person)
// 省略形式反而对了，完整形式反而是错的
```
JS 怎么解决这种不和谐
- 提供两种调用方式

#### 两种调用
小白调用法
- `person.sayHi()`
- 会自动吧 `person` 传到函数里，作为 `this`
- 隐藏了太多细节，只适合小白

大师调用法
- `person.sayHi.call(person)`
- 需要自己手动把 `person` 传到函数里，作为 `this`
- 传什么就是什么

```js
let person = {
    name: 'frank',
    sayHi(){
        console.log(this.name)
    }
}
person.sayHi.call({name:1}) // 1
```

![4](https://img.onmicrosoft.cn/2022-07-04/1.png)

应该学习哪种？
- 学习大师调用法，因为小白调用你早就会了
- 从这种 PPT 开始，默认用大师调用法

#### 例1
```js
function add(x, y){
    return x + y 
}
```
没有用到 `this`
- `add.call(undefined, 1, 2)` // 3

为什么要多写一个 `undefined`
- 因为一个参数要作为 `this`
- 但是代码里没有用 `this`
- 所以只能用 `undefined` 占位
- 其实用 `null` 也可以

#### 例二
- 自己实现一个 `forEach`
- 可以用这个来实现

```js
Array.prototype.forEach2 = function (fn){
    for(let i=0;i<this.length;i++){
        fn(this[i], i, this)
      //  for each 的源代码
    }
}
```
this 是什么
- 由于大家使用 `forEach2` 的时候总是会用 `arr.forEach2`
- 所以 `arr` 就自动被传给 `forEach2` 了

this 一定是数组吗？
- 不一定，比如
- `Array.prototype.forEach2.call({0:'a',1: 'b'})`
- //  这就是个伪数组

#### this 的两种使用方法
隐式传递
- `fn(1,2)` // 等价于 `fn.call(undefined, 1, 2)`
- `obj.child.fn(1)` // 等价于 `obj.child.fn.call(obj,child,1)`

显示传递
- `fn.call(undefined, 1, 2)`
- `fn.apply(undefined, [1,2])` // 数组
- // 只是形式不同，其他全部都是一样的
- // 只是中括号的问题

#### 绑定 this
使用 .bind 可以让 this 不被改变
```js
function f1(p1, p2){
    console.log(this, p1, p1)
}
let f2 = f1.bind({name: 'frank'})
// 那么 f2 就是 f1 绑定了 this 之后的新函数
f2() // 等价于 f1.call({name: 'frank'})
```
.bind 还可以绑定其他参数
```js
let f3 = f1.bind({name: 'frank'}, 'hi')
f3() // 等价于 f1.call({name: 'franl'}, 'hi'}
```

#### 箭头函数
- 没有 `arguments` 和 `this`

里面的 this 就是外面的 this
- `console.log(this)` // window
- `let fn = () => console.log(this)`
- `fn()` // window

就算你加 call 都没有
- `fn.call({name:'frank'})` // window

箭头函数自己没有 `this`
也没有 arguments

#### 总结
- 每个函数都有这些东西
  - `调用时机`
  - `作用域`
  - `闭包`
  - `形式参数`
  - `返回值`
  - `调用栈`
  - `函数提升`
  - `arguments`（除了箭头函数）
  - `this`（除了箭头函数）

#### 立即执行函数
- 只有 JS 才有的变态玩意，现在用得少

![2](https://img.onmicrosoft.cn/2022-07-04/2.png)

原理
- ES5 时代，为了得到局部变量，必须引用一个函数
- 但是这个函数如果有名字，就得不偿失
- 于是这个函数必须是匿名函数
- 声明匿名函数，然后立即加个 `()` 执行它
- 但是 JS 标准认为这种语法不合法
- 所以 JS 程序员寻求各种方法
- 最终发现，只要在匿名函数前面加个运算符即可
- `!`,`~`,`()`,`+`,`-` 都可以
  - 用 `()` 可以，但是要加 `;`，也是唯一要加 `;` 的地方
  - 因为 `()` 会被认为是调用了上一行的一个函数
- 但是这里有些运算符会往上走
- 所以方方推荐永远用 `!` 来解决