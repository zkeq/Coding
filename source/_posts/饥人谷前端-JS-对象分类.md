---
title: 饥人谷前端 | JS 对象分类
tags: [JS]
description: 本节课主要学习了<br> JS 的 对象分类
date: 2022-06-29 10:11:37
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
对象需要分类吗？
- 这是一个值得思考的问题

输出各种图形的面积和周长

- 正方形
#### 代码
```js
let square = {
    width: 5,
    getArea(){
        return this.width * this.width
    },
    getLength(){
        return this.width * 4
    }
}
```

![1](https://img.onmicrosoft.cn/2022-06-29/1.png)

![2](https://img.onmicrosoft.cn/2022-06-29/2.png)

- 不同数值
代码
```js
let squareList = []
let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
for(let i = 0; i<12; i++){
squareList[i] = {
width: widthList[i],
getArea(){
return this.width * this.width
},
getLength(){
return this.width * 4
}
}
}
```
看，又搞定了
- 垃圾代码，浪费了太多内存，自己画内存图就知道了

内存图：重复的函数

![3](https://img.onmicrosoft.cn/2022-06-29/3.png)

- 借助原型
```js

代码
let squareList = []
let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
let squarePrototype = {
  getArea(){ 
    return this.width * this.width 
  },
  getLength(){
    return this.width * 4
  }
}
for(let i = 0; i<12; i++){
  squareList[i] = Object.create(squarePrototype) 
  squareList[i].width = widthList[i]
}
```

看，双搞定了
- 还是垃圾代码！你创建 `square` 的代码太分散了！

把代码抽离到一个函数里，然后调用函数
```js
let squareList = []
let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
function createSquare(width){ //此函数叫做构造函数
  let obj = Object.create(squarePrototype)
  // 以 squarePrototype 为原型创建空对象
  obj.width = width
  return obj
}
let squarePrototype = {
  getArea(){ 
    return this.width * this.width 
  },
  getLength(){
    return this.width * 4
  }
}
for(let i = 0; i<12; i++){
  squareList[i] = createSquare(widthList[i])
  // 这下创建 square 很简单了吧！
  // 这叫封装
}
```

- 构造函数就是能够构造对象的函数

squarePrototype 原型 和 createSquare 函数 还是分散的

- 函数和原型结合
```js
let squareList = []
let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]

function createSquare(width){
  let obj = Object.create(createSquare.squarePrototype) // 先使用后定义？NO
  obj.width = width
  return obj
}
createSquare.squarePrototype = { //把原型放到函数上，结合够紧密了吗？
  getArea(){ 
    return this.width * this.width 
  },
  getLength(){
    return this.width * 4
  },
  constructor: createSquare //方便通过原型找到构造函数
}
for(let i = 0; i<12; i++){
  squareList[i] = createSquare(widthList[i])
  //  在这一行才是使用 封包 里面的
  console.log(squareList[i].constructor) 
  // constructor 可以知道谁构造了这个对象：你妈是谁？
}
```

这段代码几乎完美
- 为什么不固定下来，让每个 JS 开发者直接用呢

#### new 操作符
```js
let squareList = []
let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
function Square(width){ 
  this.width = width
}
Square.prototype.getArea = function(){ 
  return this.width * this.width 
}
Square.prototype.getLength = function(){
  return this.width * 4
}
for(let i = 0; i<12; i++){
  squareList[i] = new Square(widthList[i])
  console.log(squareList[i].constructor)
}
// 多美，几乎没有一句多余的废话

// 每个函数都有 prototype 属性，这是 JS 之父故意的
// 每个 prototype 都有 constructor 属性，也是故意的

```

-----------

```js
function createSquare(width){
  let obj = Object.create(createSquare.squarePrototype)
  obj.width = width
  return obj
}
createSquare.squarePrototype = {
  getArea(){ 
    return this.width * this.width 
  },
  getLength(){
    return this.width * 4
  },
  constructor: createSquare
}
let square = createSquare(5)
```

上面的代码被简化为下面的代码
唯一的区别是要用 new 来调用

```js
function Square(width){ 
  this.width = width
}
Square.prototype.getArea = function(){ 
  return this.width * this.width 
}
Square.prototype.getLength = function(){
  return this.width * 4
}
let square = new Square(5)

```

#### 总结
- new X() 自动做了四件事情
  - 自动创建空对象
  - 自动为空对象关联原型，原型地址指定为 `X  .prototype`
  - 自动将空对象作为 this 关键字运行构造函数
  - 自动 `return this`

——这就是 JS 之父的爱

构造函数 X

- X 函数本身负责给对象本身添加属性
  - `X.prototype` 对象负责保存对象的共用属性

![4](https://img.onmicrosoft.cn/2022-06-29/4.png)

#### 题外话：代码规范
- 大小写
  - 所有构造函数（专门用于创建对象的函数）首字母大写
  - 所有被构造出来的对象，首字母小写
- 词性
  - new 后面的函数，使用名词形式
  - 如 `new Person()`、`new Object()`
  - 其他函数，一般使用动词开头
  - 如 `createSquare(5)`、`createElement('div')`
  - 其他规则以后再说

#### 总结一个重要的公式
 - 也是 JS 里唯一的一个公式

如何确定一个对象的原型

为什么
- let obj = new Object() 的原型是 Object.prototype
- let arr = new Array() 的原型是 Array.prototype
- let square = new Square() 的原型是 Square.prototype
- let fn = new Function() 的原型是 Function.prototype

因为 new 操作故意这么做的

![5](https://img.onmicrosoft.cn/2022-06-29/5.png)

#### 结论

你是谁构造的
你的原型就是`谁的 prototype 属性`  `对应的对象`

#### 原型公式

对象.__proto__ === 其构造函数.prototype

#### 参考资料

- [__proto__ 和 prototype 存在的意义是什么](https://www.zhihu.com/question/56770432/answer/315342130)

#### 几道题

![5](https://img.onmicrosoft.cn/2022-06-29/6.png)

![5](https://img.onmicrosoft.cn/2022-06-29/7.png)

![5](https://img.onmicrosoft.cn/2022-06-29/8.png)