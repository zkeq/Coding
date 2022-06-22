---
title: 饥人谷前端 | JS 语法
tags: [JS]
description: 本节课主要学习了<br>JS 语法
date: 2022-06-22 10:29:25
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

![1](https://img.onmicrosoft.cn/2022-06-22/1.png)

取其精华，取其糟粕
- 对待 `JS` 这是我们的态度

`JS` 之父对 `JS` 的评价
- 它的优秀之处并非原创，它的原创之处并不优秀。

![2](https://img.onmicrosoft.cn/2022-06-22/2.png)

![3](https://img.onmicrosoft.cn/2022-06-22/3.png)

## JS 语法
### 表达式与语句
- `1 + 2` 表达式的值为 `3`
- `add(1,2)` 表达式的值为函数的范围值
- `console.log` 的表达式的值为函数本身

#### 语句
- `var a = 1` 是一个语句

#### 二者的区别
- 表达式一般都有值，语句可能有也可能没有
- 语句一般会改变环境（声明、赋值）
- 上面两句话并不是绝对的

#### 大小写敏感
- 不要写错
  - `var a` 和 `var A` 是不同的
  - `object` 和 `Object` 是不同的
  - `function` 和 `Function` 是不同的
  - 具体函数后面说

#### 空格
- 大部分空格没有实际意义
  - `var a = 1` 和 `var a=1` 没有区别
  - 加回车大部分时候也不影响
  - 只有一个地方不能加回车，那就是 `return` 后面
    - 如果加了就会变成 `undefined`

#### 标识符
规则
- 第一个字符，可以是 `Unicode` `字母` 或 `$` 或 `_` 或 `中文`
- 后面的字符除了上面所说的，还可以有 `数字`

变量名可以是标识符
- `var _ = 1`
- `var $ = 2`
- `var ______ = 6`
- `var 你好 = 'hi'`

> 数字不可用于开头，只能用到从第二位开始

其他标识符用到再说

#### 注释
- 写代码要多写注释--放屁

不好的注释
- 把代码翻译成中文
- 过时的注释
- 发泄不满的注释

好的注释
- 踩坑注释
- 为什么代码会写得这么奇怪，遇到什么 `bug`
- `信噪比要低`

#### 区块 `block`
把代码包在一起

```js
{
  let a = 1;
  let b = 2;
}
```

常与 `if` / `else` / `while` 连用

#### `if` 语句
- 如果 ... 那么 ...

语法
- `if (表达式) {语句1} else {语句2}`
- `{}` 在语句只有一句的时候可以省略，不建议这样做

变态情况
- 表达式里可以非常变态，如 a = 1
- 语句1 里可以非常变态，如 嵌套的 if else
- 语句2 里可以非常变态，如 嵌套的 if else
- 缩进也可以很变态，如面试题尝尝下套

```js
a = 1
if (a === 2)
  console.log("a")
  console.log("a等于2")
```

```js
a = 1
if (a === 2)
  console.log("a"), console.log("a等于2")
// 逗号表示 这句话没完
console.log("a"); console.log("a等于2")
// 分号表示 这句话完了
```

- 使用最没有歧义的写法

最推荐使用的写法
```js
if (表达式) {
    语句
} else if (表达式) {
    语句
} else {
    语句
}
```

#### switch 语句

语法
```js
switch (fruit) {
  case "banana":
      // ...
        break;
  case "apple":
      // ...
        break;
  default:
      // ...
} 
```

`break`
- 大部分时候，省略 `break` 你就完了
- 少部分时候，可以利用 `break`

![4](https://img.onmicrosoft.cn/2022-06-22/5.png)

#### 问号冒号表达式
- `表达式1 ? 表达式2 : 表达式3`

![6](https://img.onmicrosoft.cn/2022-06-22/6.png)

#### `&&` 短路逻辑
- `A && B && C && D` 取第一个假值或 D
- 并不会取 `true` / `false`

![6](https://img.onmicrosoft.cn/2022-06-22/7.png)

#### `||` 短路逻辑
- `A && B && C && D` 取第一个真值或 D
- 并不会取 `true` / `false`

#### 总结

条件语句
```js
if ... else ...else 
switch
A ? B ? C
A && B 
fn && fn()
A || B
A = A || B
```

#### while 
语法
- `while` (表达式) {语句}
- 判断表达式的真假
- 当表达式为真，执行语句,执行完再次检查判断表达式的真假
- 当表达式为假，执行后面的语句

其他
- `do...while`  用得不多，自行了解

浮点数不精确

![8](https://img.onmicrosoft.cn/2022-06-22/8.png)

#### for 循环
语法糖
- for 是 while 循环的方便写法
- 方便在哪？

语法
```js
for (语句1; 表达式2; 语句3){
    循环体
}
```

- 先执行 `语句1`

- 然后判断 `表达式2`

- 如果为真，执行循环体，然后执行语句3

- 如果为假，直接退出循环，执行后面的语句

![9](https://img.onmicrosoft.cn/2022-06-22/9.png)

![10](https://img.onmicrosoft.cn/2022-06-22/10.png)

![11](https://img.onmicrosoft.cn/2022-06-22/11.png)

![12](https://img.onmicrosoft.cn/2022-06-22/12.png)

- for 和 let 一起用 单独处理过

#### `break` 和 `continue`
- 退出所有循环 V.S. 退出当前一次循环
- `break` 只会退出最近的一个 `for` 循环

#### `label` 语句
语法

```js
foo: {
    console.log(1);
    break foo;
    console.log("本行不会输出")
}
console.log(2)
```

面试
```js
{
    foo: 1
}
```
上面的东西是什么
- 是一个 label  内容是 1

推荐的书
- https://wangdoc.com/javascript/basic/grammar.html
- https://web.qianguyihao.com/