---
title: 饥人谷前端 | JS 数据类型
tags: [JS]
description: 本节课主要学习了<br>JS 的一些 数据类型
date: 2022-06-22 16:58:07
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
数字与字符串
- 都是一，为什么要分 `1` 和 `'1'`
- 功能不同
  - 数字是数字，字符串是字符串，要严谨
  - 数字能加减乘除，字符串不行
  - 字符串能表示电话号码，数字不行
- 存储形式不同
  - JS 中，数字是用 64 位浮点数的形式存储的
  - JS 中，字符串是用类似 UTF8 形式存储的（UCS-2）

二进制
- 10 转 2
  - 31 变成二进制
  ![2](https://img.onmicrosoft.cn/2022-06-22/13.png)
  - 经过一番尝试
  ![3](https://img.onmicrosoft.cn/2022-06-22/14.png)
  - 所以 31（十进制） = 01111（二进制）
  - 不是套公式吗？程序员从来不套公式

- 2 转 10
  - 100011 变成十进制
  - 每一位乘以 2 的 N 次方，然后加起来即可
  - `100011 = 2^5 + 2^1 + 2^0 = 35`

![15](https://img.onmicrosoft.cn/2022-06-22/15.png)

如何存字符
- 转成数字不就得了
- 但是注意，`1` 不能用 `1` 表示

![15](https://img.onmicrosoft.cn/2022-06-22/16.png)

![17](https://img.onmicrosoft.cn/2022-06-22/17.png)

![18](https://img.onmicrosoft.cn/2022-06-22/18.png)

Unicode 万国码

![18](https://img.onmicrosoft.cn/2022-06-22/19.png)

![20](https://img.onmicrosoft.cn/2022-06-22/20.png)

![21](https://img.onmicrosoft.cn/2022-06-22/21.png)

存字符就是编号

数字 1 和 字符 '1' 
- 功能不同 存储形式不同

### JS 中的数据类型
7 种（大小写无所谓）
- 数字 `number`
- 字符串 `string`
- 布尔 `bool`
- 符号 `symbol`
- 空 `undefined`
- 空 `null`
- 对象 `object`
- 总结：`四基两空一对象`

以下不是数据类型
- 数组、函数、日期
- 它们都属于 object

#### 数字
- 64位 浮点数

写法
- 整数写法
  - `1`
- 小数写法
  - `0.1`
- 科学计数法
  - `1.23e4`
- 八进制写法（用得少）
  - `0123` 或 `00123` 或 `0o123`
- 十六进制写法
  - `0x3F` 或 `0X3F`
- 二进制写法
  - `0b11` 或 `0B11`

特殊值
- `正0` 和 `负0`
  - 都等于 `0`，要严谨
- 无穷大
  - `Infinity`、`+Infinity`、`-Infinity`
- 无法表示的数字
  - `NaN`（Not a Number）
    - `NaN !== Nan`
    - 但它是一个数字
    - `NaN` 表示一个不知道是什么的数字，是不确定的

![22](https://img.onmicrosoft.cn/2022-06-22/22.png)
![23](https://img.onmicrosoft.cn/2022-06-22/23.png)

64位浮点数
- JS 数字的存储形式
  - 浮点就是浮动的电，意思就是小数点会乱动
  - 123.456 可以表示为 1.23456e10^2
  - 也可以表示为 12345.6e10^-2
    ![23](https://img.onmicrosoft.cn/2022-06-22/24.png)
- 64位存储一个 number
  - 符号占 `1` 位
  - 指数占 `11` 位（`-1023~1024`）
  - 有效数字占 `52` 位（开头的 `1` 省略）

范围和精度
- 范围 **（忽略符号位）**
  - 指数拉满、有效数字拉满，得到最大二进制数字
  - `Number.MAX_VALUE: 1.7976931348623157e+308`
  - 指数负方向拉满、有效数字最小1，得到最小值
  - `Number.MIN_VALUE: 5e-324`
- 精度 **（有效数字）**
  - 最多只能到`52+1`个二进制位表示有效数字
  - `2^53` 对应的十进制是 9 后面 15 个零
  - 所以 `15位有效数字` 都能精确表示
  - `16位有效数字如果小于 90 开头，也能精确表示`
  - `9110000000000001` 就存不下来

#### 字符串 string
每两个字符两个字节（阉割版UTF-8）
写法
- 单引号
  - '你好'
- 双引号
  - "你好"
- 反引号
  - `你好`
- 注意
  - 引号不属于字符串的一部分，就像书名号不属于书名的一部分一样
  - 如果要在单引号里面包含单引号怎么办

转义
错误写法
- 'it's ok'
- JS 引擎会认为 'it' 就结束了，后面的看不懂

正确写法
- 'it\'s ok' // 这就是转义
- "it's ok"
- `it's ok`

用另一种写法表示你想要的东西
- `\'` 表示 `'`
- `\"` 表示 `"`
- `\n` 表示`换行`
- `\r` 表示`回车`
- `\t` 表示 `tab 制表符`
- `\\` 表示 `\`
- `\uFFFF` 表示`对应的 Unicode 字符`
- `\xFF` 表示`前 256 个 Unicode 字符`

多行字符串

如果你想要在字符串里回车

```js
let s = `这样是
可以的
用反引号很容易做到`
```

以前没有反引号的时候
- 见此篇教程
- https://wangdoc.com/javascript/types/string.html

#### 字符串的属性
- 对象才有属性，但是字符串也有

字符串的长度
```js
string.length
'123'.length // 3
'\n\r\t'.length // ?
''.length // 0
' '.length // 1
```

通过下标读取字符

- string[index]
- 注意 index 从 0 开始
- 注意 index 到 length
```js
let s = 'hello';
s[0] // "h"
s[0] 是第一个字符
let s = 'hello';
s[5] // undefined，居然不报错
s[4] // 'o'
```

base64 转码
- `window.btoa`
  - 正常字符串转为 Base64 编码的字符串
- `window.atob`
  - Base64 编码的字符串转为原来的字符串
- 一般用来隐藏招聘启事里的简历
  - 邮箱: `YWRtaW5AaWNvZGVxLmNvbQ`
- 有时候也用来自欺欺人
  - 所谓的 【加密】，也就能骗过一部分外行

#### 布尔 Boolean
- 真或假

否定运算
- `!value`

相等运算
- `1==2`、`1!=2`、`3===4`、`3!==4`

比较运算
- `1 > 2`、`1 >= 2`、`3 < 4`、`3 <= 4`


#### if 配 bool
if 语句尝尝 需要判断真假
- `if(value) {...} else {...}`

问题来了
- 如果 value 是 bool 值还好说
- 如果 value 不是 bool 值，那么就是 `五个 falsy 值`

#### 五个 falsy 值
- `falsy` 就是相当于 `false` 但是又 `不是` `false` 的值
- 分别是 `undefined`、`null`、`0`、`NaN`、`''`
  - `''` 和 `' '` 不是一个玩意

#### `undefined` 和 `null` 两种空类型
- 为什么有两个空？

区别
- 没有本质区别
- 细节一
  - 如果一个变量声明了，但没有赋值，那么默认值就是 `undefined`，而不是 `null`
- 细节二
  - 如果一个函数，没有写 `return`，那么默认 `return undefined`，而不是 `null`
- 细节三
  - 前端程序员习惯上，把非对象的空值写为 `undefined`，把对象的空值写为 `null`
  - 但仅仅是习惯上而已

#### symbol 符号
- 不怎么常用 见此文章：https://zhuanlan.zhihu.com/p/22652486

### 变量声明
#### 三种声明方式
- `var a = 1`
  - 代码不准用 `var`
- `let a = 1`
- `const a = 1`
- `a = 1` // 错的
  - 如果没有在任何地方声明过 a 那就直接被放在 `window` 上了
  - 过时的，从来不会用

#### 区别
- `var` 是过时的、不好用的方式
- `let` 是新的，更合理的方式
- `const` 是声明时必须赋值，且不能再改的方式
- 最后这种方式是错误的，不准这样声明

#### var 变量提升
- 押题时再讲
- 可以看这个 [变量提升](https://wangdoc.com/javascript/basic/grammar.html#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87)

#### var 声明
- 直接跳过
  - 我们写代码不用 var
  - 面试押题前单独讲

#### let 声明
规则
- 遵循块作用域，即使用范围不能超出 `{}`
- 不能重复声明
- 可以赋值，也可以不赋值
- 必须先声明再使用，否则报错
- 全局声明的 `let` 变量，不会变成 `window` 的属性
- `for` 循环配合 `let` 有奇效

#### const 声明
规则
- 跟 `let` 几乎一样
- 只有一条不一样：声明时就要赋值，赋值后不能改

#### 变量声明
- 指定值
  - `var a = 1`
- 同时也指定了类型
  - `var a = 1`
- 但是值和类型都可以随意变化
  - `a = 2`
  - `a = '字符串'`

#### name 和 'name' 的区别

- `name` 是变量
  - 值可变，可能是 `'name'`，也可能是 `'hello'`
- `'name'` 是字符串常量
  - 常量就是不变量
  - `'name'` 只能是 `'name'`，不能是其他值

#### 总结

- 六种类型（大小写无所谓）
  - `undefined`
  - `null`
  - `number`
  - `string`
  - `bool`
  - `symbol`
- 这些都是简单类型
  - 只有 `object` 叫做复杂类型，下节课学

#### 类型转换
- number => string
```js
String(n)
String(1000000000000000000000000000000000) // BUG 科学计数法
n + ''
```
- string => number
```js
Number(s)
parseInt(s) / parseFloat(s)
parseInt(s,10) // 默认就是 10
s - 0
```
- x => bool
```js
Boolean(x)
!!x
```
- x => string
```js
String(x)
x.toString()
```

js 秘密花园

https://www.javascriptc.com/books/javascript-garden/

#### 新增 `bigint` 类型
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt