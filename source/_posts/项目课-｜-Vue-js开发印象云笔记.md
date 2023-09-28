---
title: 项目课 ｜ Vue.js开发印象云笔记
date: 2023-09-22 14:46:45
tags: ["Vue.js", "前端"]
categories: ["前端"]
description: 本课程将以 evernote 云笔记 mac 客户端版的 ui 做原型，做一款线上的云笔记 webapp 产品。产品包括登录、注册、笔记本的创建、修改、删除，笔记的markdown编辑、删除到回收站、markdown 预览、回收站管理等功能。采用前后端分离的开发方式，本课程只负责前端部分的开发。
cover: https://img.onmicrosoft.cn/ke/202309221445716.png
---

### 课程效果

- https://jirengu.github.io/forevernote/#/login

### 项目简介

> 本课程将以 evernote 云笔记 mac 客户端版的 ui 做原型，做一款线上的云笔记 webapp 产品。产品包括登录、注册、笔记本的创建、修改、删除，笔记的markdown编辑、删除到回收站、markdown 预览、回收站管理等功能。采用前后端分离的开发方式，本课程只负责前端部分的开发。

### 前置知识

#### var-let-const

1. var 可声明前置

- 声明前置：变量可以在声明之前使用，值为 undefined

> 在JavaScript中，变量声明前置是指在代码执行过程中，JavaScript解析器会在代码执行之前将变量声明提升到作用域的顶部。这意味着你可以在变量声明之前使用变量，而不会引发错误。
> 例子：
>
> ```
> console.log(x); // undefined
> var x = 5;
> ```
> 在上面的例子中，尽管变量`x`在打印语句之前被声明，但由于变量声明前置的特性，代码不会引发错误，而是打印出`undefined`。这是因为在执行代码之前，`var x`会被提升到作用域的顶部，但是变量的赋值操作仍然是按照代码的实际顺序执行的。
>
> 需要注意的是，只有变量声明会被提升，而变量赋值并不会被提升。因此，在使用变量之前进行赋值操作仍会导致变量值为`undefined`。
> ```
> console.log(x); // undefined
> var x = 5;
> console.log(x); // 5
> ```

```js
a = 3;
var a; // undefined
console.log(a); // 3
var a = 3;
```

2. let 不可声明前置

```js
a = 3; // ReferenceError: a is not defined
let a;
let a = 3; // SyntaxError: Identifier 'a' has already been declared
```

3. let 不可重复声明

```js
let a = 3;
let a = 4; // SyntaxError: Identifier 'a' has already been declared
let a = 5; // SyntaxError: Identifier 'a' has already been declared
```

4. let 有块级作用域

```js
if (true) {
  let a = 3;
}
console.log(a); // ReferenceError: a is not defined
```

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined
```

5. IIFE 的替换

- IIFE

```js
(function () {
  var a = 3;
})();

console.log(a); // ReferenceError: a is not defined
```

```js
{
  let a = 3;
}

console.log(a); // ReferenceError: a is not defined
```

暂时性死区

- 在let声明变量之前都是该变量的死区, 在死区内该变量是不能被访问的

```js
var a = 3;
if (true) {
  console.log(a); // ReferenceError: a is not defined
  let a = 4;
}
```

> IIFE指的是Immediately Invoked Function Expression（立即调用的函数表达式）。它是一个在定义后立即执行的 JavaScript 函数。
>
> IIFE的一般语法如下：
>
> ```javascript
> (function () {
>   // 函数体
> })();
> ```
>
> 上述语法中，在函数定义的末尾加上一对圆括号 `()`，表示立即调用该函数。
>
> IIFE 的主要作用有两个：
>
> 1. 创建一个独立的作用域：在 IIFE 内部定义的变量和函数在外部是不可访问的，从而避免变量冲突和污染全局命名空间。
> 2. 执行一些初始化的操作：可以在 IIFE 内部执行某些操作，并且不会暴露在全局作用域中。
>
> 示例：
>
> ```javascript
> (function () {
>   var x = 10;
>   console.log(x); // 10
> })();
> 
> console.log(x); // 报错：x is not defined
> ```
>
> 在上述示例中，IIFE 内部定义了变量 `x`，并且可以在函数内部访问该变量。而在外部，由于 `x` 是在 IIFE 内部声明的，因此无法访问到该变量，会报错。
>
> IIFE 还可以接收参数，并在调用时传递参数进去，以便在函数内部使用。这样可以进一步扩展 IIFE 的功能。
>
> ```javascript
> (function (name) {
>   console.log("Hello, " + name);
> })("Alice"); // Hello, Alice
> ```
>
> 在上述示例中，IIFE 接收一个参数 `name`，并在调用时传递了参数值 `"Alice"`。在函数内部，通过使用参数 `name`，输出了相应的消息。

6. const 声明的常量不可改变

```js
const a = 1;
a = 2; // TypeError: Assignment to constant variable.
```

```js
const obj = {a: 1}
obj.a = 2 // 可以
obj = {a: 2} // TypeError: Assignment to constant variable.
```

7. 适用于let的同样适用于const

#### 解构赋值

1. 数组的解构

```js
let [a,b,c] = [1,2,3]
console.log(a,b,c) // 1 2 3

let [a,[b],c] = [2,[4],6]
console.log(a,b,c) // 2 4 6

let [a] = 1 // TypeError: 1 is not iterable
```

2. 默认值

```js
let [a,b,c=3] = [1,2]
console.log(a,b,c) // 1 2 3

let [a,b,c=3] = [1,2,undefined]
console.log(a,b,c) // 1 2 3

let [a,b,c=3] = [1,2,null]
console.log(a,b,c) // 1 2 null

let [a,b=2] = [3,4]
console.log(a,b) // 3 4

let [a,b=2] = [3,undefined]
console.log(a,b) // 3 2

let [a,b=2] = [3,null]
console.log(a,b) // 3 null
```

数组对应对值有没有? 如果没有(数组对没有指的是undefined), 就用默认值 如果有, 就用对应的值

```js
let [a=2,b=3] = [undefined,null]
console.log(a,b) // 2 null
```

```js
let [a=1, b=a] = [2]
console.log(a,b) // 2 2
```

3. 对象的解构赋值

前置知识

```js
let [name, age] = ["hunger", 3]
let p1 = {name, age} // 对象的简写
// 等同与
let p2 = {name: name, age: age}
```

解构范例

```js
let {name, age} = {name: "hunger", age: 3}
console.log(name, age) // hunger 3
```

以上代码等同于

```js
let {name: name, age: age} = {name: "hunger", age: 3}
console.log(name, age) // hunger 3
```

4. 默认值

```js
let {name, age=3} = {name: "hunger"}
console.log(name, age) // hunger 3
```

5. 函数结构

```js
function add([x,y]=[1,2]){
  return x + y
}
add() // 3
add([3,4]) // 7
```

```js
function sum ({x, y} = {x: 0, y: 0}, {a = 1, b = 2}){ // {x, y} = {x: 0, y: 0} 是默认值 // {a = 1, b = 2} 是解构赋值
    return [x + a, y + b];
}
sum({x:1, y:2}, {a:2}) // [3, 4]
```

6. 作用

```js
let [x, y] = [1, 2];
[x, y] = [y, x];
console.log(x, y); // 2 1
```

```js
function ajax({url, type="GET"}){

}
ajax({url: "xxx"}) // 设置了默认值: type="GET"
```

#### 字符串-函数-数组-对象

字符串

1. 多行字符串

```js
let str = `hello
world`
```

2. 字符串模板

```js
let name = "hunger"
let age = 3
let str = `hello, ${name}, age is ${age}`
```

3. 字符串查找

```js
let str = "hello world"
str.includes("hello") // true
str.startsWith("hello") // true
str.endsWith("world") // true
```

数组

1. 扩展运算符

```js
let arr = [1,2,3]
console.log(...arr) // 1 2 3
```

2. 合并数组

```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2]
console.log(arr3) // [1,2,3,4,5,6]
```

3. 数组克隆

```js
let arr1 = [1,2,3]
let arr2 = [...arr1]
console.log(arr2) // [1,2,3]
```

4. 函数参数的扩展

```js
function sort(...arr){ // ...arr 是扩展运算符 js会把传进来的参数转成数组
    console.log(arr.sort())
}
sort(3,2,1) // [1,2,3]

function max(arr){
    return Math.max(...arr)
}
max([3,4,1]) // 4
```

5. 类数组对象转数组

```js
let ps = document.querySelectorAll("p")
Array.from(ps).forEach(function(p){
    console.log(p.innerText)
})
[...ps].forEach(function(p){
    console.log(p.innerText)
})
```

函数

1. 默认值

```js
function sayHi(name='jirengu'){
    console.log(`hi, ${name}`)
}
sayHi() // hi, jirengu
sayHi("Zkeq") // hi, Zkeq
```

```js
function fetch (url, {body="", method="GET", headers={}}){
    console.log(method)
}
fetch("http://www.baidu.com", {}) // GET
```

以下两种写法的区别?

```js
// ex1
function m1({x=0, y=0} = {}) {
  return [x, y];
}
// ex2
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

ex1: 调用函数需要传入一个对象, 如果不传, 就用默认值 `{}`, 默认值对象里面都是 undefined, 所以属性使用初始值
ex2: 调用函数需要传入一个对象, 如果不传, 就用默认值 `{x: 0, y: 0}`, 如果传了对象, 就用传入的对象
```

2. 箭头函数

```js
let f = v => v + 1
f(2) // 3
// 等价于
var f = function(v){
    return v + 1
}
f(2) // 3
```

```js
var f = () => 5
f() // 5
// 等价于
var f = function(){
    return 5
}
f() // 5
```

```js
var sum = (num1, num2) => num1 + num2
sum(1,2) // 3
// 等价于
var sum = function(num1, num2){
    return num1 + num2
}
sum(1,2) // 3
```

```js
var arr = [1,2,3]
var arr2 = arr.map(v=>v*v)
arr2 // [1,4,9]
// 等价于
var arr = [1,2,3]
var arr2 = arr.map(function(v){
    return v*v
})
arr2 // [1,4,9]
```

箭头函数里的 this

```js
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
// ES5
function foo() {
  var _this = this;
  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
// 解释: ES6 的箭头函数没有自己的 this，内部的 this 就是外层代码块的 this。
```

对象

```js
var name = 'jirengu'
var age = 3
var people = {name, age} // {name: "jirengu", age: 3}
```

```js
let app = {
    init(){
        console.log("init")
    },
    start(){
        console.log("start")
    }
}
app.init() // init

// 等价于
let app = {
    init: function(){
        console.log("init")
    },
    start: function(){
        console.log("start")
    }
}
```

模块化

1. export 

写法1

```js
// a.js
export var a = 1
export function add(x,y){
    return x + y
}
export class Person{
    constructor(name){
        this.name = name
    }
}
```

```js
// b.js
import {a, add, Person} from "./a.js"
console.log(a) // 1
console.log(add(1,2)) // 3
console.log(new Person("hunger")) // Person {name: "hunger"}
```

```js
// b.js
import * as a from "./a.js"
console.log(a.a) // 1
console.log(a.add(1,2)) // 3
console.log(new a.Person("hunger")) // Person {name: "hunger"}
```

```js
// b.js
import {a as b} from "./a.js"
console.log(b) // 1
```

写法2

```js
// a.js
var a = 1
function add(x,y){
    return x + y
}
class Person{
    constructor(name){
        this.name = name
    }
}
export {a, add, Person}
```

使用

```js
// b.js
import {a, add, Person} from "./a.js"
console.log(a) // 1
console.log(add(1,2)) // 3
console.log(new Person("hunger")) // Person {name: "hunger"}
```

```js
// b.js
import * as a from "./a.js"
console.log(a.a) // 1
console.log(a.add(1,2)) // 3
console.log(new a.Person("hunger")) // Person {name: "hunger"}
```

```js
// b.js
import {a as b} from "./a.js"
console.log(b) // 1
```

写法3

```js
// a.js
export function getName(){}
export function getAge(){}
// 注意的是, 导出函数的时候不可以赋值给变量
```

```js
// b.js
import {getName, getAge} from "./a.js"
getName()
```

写法4

```js
// a.js
function getName(){}
function getAge(){}
export {getName, getAge}
```

```js
// b.js
import {getName, getAge} from "./a.js"
getName()
```

写法5

```js
export default function(){
    console.log("hello")
}
```

```js
// b.js
import foo from "./a.js" // 注意的是, 导入的时候可以赋值给变量, 重新命名
foo()
```

#### 类和继承

1. 构造函数

```js
class Person{
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(`hi, ${this.name}`)
    }
}

let p = new Person("hunger")
p.sayHi() // hi, hunger
```

等价于

```js
function Person(name){
    this.name = name
}
Person.prototype.sayHi = function(){
    console.log(`hi, ${this.name}`)
}

let p = new Person("hunger")
```

2. 静态方法

```js
class EventCenter {
    static fire() {
        return "fire";
    }
    static on() {
        return "on";
    }
}
```

等价于

```js
function EventCenter(){};
EventCenter.fire = function(){
    return "fire";
}
EventCenter.on = function(){
    return "on";
}
```

3. 继承

```js
class Person{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`hi, ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, number){
        super(name);
        this.number = number;
    }
    sayHi(){
        console.log(`姓名 ${this.name} 学号 ${this.number}`);
    }
}
```

### Vue基础知识

阅读以下 vue 教程，跟随教程手写并运行代码。

1.  [介绍](https://v2.cn.vuejs.org/v2/guide/index.html)
2.  [Vue 实例](https://v2.cn.vuejs.org/v2/guide/instance.html)
3.  [模板语法](https://v2.cn.vuejs.org/v2/guide/syntax.html)
4.  [计算属性和观察者](https://v2.cn.vuejs.org/v2/guide/computed.html)
5.  [class 和 style 绑定](https://v2.cn.vuejs.org/v2/guide/class-and-style.html)
6.  [条件渲染](https://v2.cn.vuejs.org/v2/guide/conditional.html)
7.  [列表渲染](https://v2.cn.vuejs.org/v2/guide/list.html)
8.  [表单输入绑定](https://v2.cn.vuejs.org/v2/guide/forms.html)
9.  [组件](https://v2.cn.vuejs.org/v2/guide/components.html)

- 视频课: https://learning.dcloud.io/#/

### Vue-router 初体验 && Vue-router 基础

- https://v3.router.vuejs.org/zh/guide/#html

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

#### 动态路由匹配

```js
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
}
```

| 模式                          | 匹配路径            | $route.params                          |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

#### 捕获所有路由或 404 Not found 路由

```js
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}

// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```

#### 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：路由定义得越早，优先级就越高。

#### 嵌套路由

- https://v3.router.vuejs.org/zh/guide/essentials/nested-routes.html

### Vue.js 添加 进入/离开 & 列表过渡

- https://v2.cn.vuejs.org/v2/guide/transitions.html

### Vue生命周期图示

![Vue 实例生命周期](https://img.onmicrosoft.cn/ke/202309280856760.png)

#### 选项 / 生命周期钩子

- [https://v2.cn.vuejs.org/v2/api/#选项-生命周期钩子](https://v2.cn.vuejs.org/v2/api/#选项-生命周期钩子)

#### 实例生命周期钩子

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。

比如 [`created`](https://v2.cn.vuejs.org/v2/api/#created) 钩子可以用来在一个实例被创建之后执行代码：

```
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 [`mounted`](https://v2.cn.vuejs.org/v2/api/#mounted)、[`updated`](https://v2.cn.vuejs.org/v2/api/#updated) 和 [`destroyed`](https://v2.cn.vuejs.org/v2/api/#destroyed)。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

>  不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。
