---
title: 饥人谷前端 | JS 运算符
tags: [JS]
description: 本节课主要学习了<br>JS 运算符
date: 2022-07-07 16:55:45
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
 JS 运算符
- 算数运算符
- 比较运算符
- 布尔运算符
- 二进制运算符
- 其他运算符

#### 算数运算符
`number` 运算
- 加减乘除
- 余数 `x % 7`
- 指数 `x ** 3`
- 自增自减 `x++ / ++x / x-- / --x`
  - `a` 在前，表达式是取之前的值
- 求值运算符 `+x`
  - `+` 后面加任何数，那么就是加这个
- 负数运算符 `-x`

`string` 运算
- 连接运算 `'123' + '456'`

#### 比较运算符

- `>`
- `<`
- `>=`
- `<=`
- `==` // 模糊相等
- `!=` // 不 模糊相等
- `===` // 全等
- `!==` // 不全等

![1](https://img.onmicrosoft.cn/2022-07-13/1.png)
![2](https://img.onmicrosoft.cn/2022-07-13/2.png)
![3](https://img.onmicrosoft.cn/2022-07-13/3.png)
![4](https://img.onmicrosoft.cn/2022-07-13/4.png)


#### 布尔运算符

或且非
- `||`
- `&&`
- `!`

短路逻辑
- `console && console.log && console.log('hi')`
- 以防 `console` 不存在导致报错
- `a = a || 100`
- `a` 的保底值

#### 二进制运算符
或、与、否
- `|` 两个位都为 0，则结果为 0，否则为 1
- `&`
- `~`

异或
- `^`
- 两个位相同，则结果为 0，否则为 1

左移右移
- `<<` 和 `>>`

头部补零的右移运算符
- `>>>`

[位运算符在JS中的妙用](https://juejin.cn/post/6844903568906911752)

#### 使用与运算符判断奇偶

代码
- 偶数 & 1 = 0
- 奇数 & 1 = 1

使用 `~`,`>>`,`<<`,`>>>`,`|` 来取整

```js
console.log(~~ 6.83)
console.log(6.83 >> 0)
console.log(6.83 << 0)
console.log(6.83 | 0)
console.log(6.83 >>> 0)
```

#### 使用 `^` 来交换 a b 的值

代码

```js
var a = 5
var b = 8
a ^= b
b ^= a
a ^= b
console.log(a) // 8
console.log(b) // 5
```

#### 点运算符
语法
- 对象.属性名 = 属性值

作用
- 读取对象的属性值
  - `点` 只能用在对象上面

有个疑问
- 不是对象，为什么也可以有属性？ `'a-b-c'.split('-')`
- `JS` 有特殊逻辑，点前面不是对象， 就把它封装成对象
- `number` 会变成 `Number` 对象
- `string` 会变成 `String` 对象
- `bool` 会变成 `Boolean` 对象
- 程序员 `从来不用这三种对象`，只用简单类型

> `==` , `new Number`, `++` 这辈子都不要用


#### void 运算符
语法
- void 表达式或语句

左右
- 求表达式的值，或执行语句
- 然后 void 的值总是为 undefined

需求
- `<a href="http://examle.com" onclick="f(); return flase;">点击</a>`
- `return 假值` 可以阻止默认动作
- `<a href="javascript: void(f())"> 文字 </a>`
- 改用 `void` 可以炫技

#### 逗号运算符
语法
- 表达式1, 表达式2, ..., 表达式n

作用
- 将表达式 n 的值作为整体的值

使用
- `let a = (1,2,3,4,5)` 
- 那么 a 的值就是 5
- `let f = (x) => (console.log('平方值为'， x*x)`
- 注意上面的括号不能省

#### 运算符优先级
不同运算符
- `1 + 2 * 3` 是　`(1 + 2) * 3` 还是 `1 + (2 * 3)`
- `! a === 1` 是 `(!a) === 1` 还是 `!(a === 1)`
- `new Person().sayHi()` 是什么意思

相同运算符
- 从左到右 `a + b + c`
- 从右到左 `a = b = c = d`

优先级技术先算什么后算什么
- 具体规则
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

#### 优先级汇总
- 圆括号优先级最高
- 会用圆括号就行
- 其他一律不记

![4](https://img.onmicrosoft.cn/2022-07-13/5.png)
![4](https://img.onmicrosoft.cn/2022-07-13/6.png)
![4](https://img.onmicrosoft.cn/2022-07-13/7.png)