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
ajax({url: "xxx"})
```