---
title: 笔记 | 一道使用js合并数组的题目
tags: [饥人谷]
description: 本节课主要贴了几个<br>一道使用js合并数组的题目
date: 2022-08-10 05:14:33
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### 题目

有如下数组

```js
[
    {
        code: 1,
        data: [
            { title: 'haha', size: 123 },
            { title: 'xixi', size: 456 }
        ]
    },
    {
        code: 2,
        data: [
            { title: 'cscs', size: 4344 },
            { title: 'vvv', size: 555 }
        ]
    }
]
```

要求整理成如下格式

```js
[
  { code: 1, title: 'haha', size: 123 },
  { code: 1, title: 'xixi', size: 456 },
  { code: 2, title: 'cscs', size: 4344 },
  { code: 2, title: 'vvv', size: 555 }
]
```

#### 题解一

思路：既然是数组，那么肯定要使用数组的一些方法

首先我想到的是使用 `reduce`，因为这种就是对数组就行累加

```js
// 首先写成这样子
const result = data.reduce((acc, cur) => {
 
    return acc
    }
    , [])
```

接着我们拿到了数组第一层的每一项

```js
    {
        code: 1,
        data: [
            { title: 'haha', size: 123 },
            { title: 'xixi', size: 456 }
        ]
    }
// 即要求以上结构变成
  { code: 1, title: 'haha', size: 123 },
  { code: 1, title: 'xixi', size: 456 },
```

很容易想到使用 `forEach` 遍历即可

```js
    cur.data.forEach(item => {
        acc.push({
          code: cur.code,
          ...item // 即展开数组（
        })
    })
```

即最终答案：

```js
const result = data.reduce((acc, cur) => {
    cur.data.forEach(item => {
        acc.push({
          code: cur.code,
          ...item
        })
    })
    return acc
    }
    , [])
```

#### 题解二

使用两次 `map` 外加一次 `拍平`

```js
data.map(item => item.data.map(v =>({code: item.code, ...v}))).flat()
```

### 题解三

将题解一的 `foreach + push` 用 `map` 代替

```js
const result = data.reduce((acc, cur) => {
    return acc.concat(cur.data.map((item)=>{
      item.code = cur.code
      return item
    }))
    }
    , [])
```

### 题解四

优化题解三, 删掉 `return`

```js
const result = data.reduce((acc, cur) => // 箭头函数不用 return 值 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

    acc.concat(

        cur.data.map((item) => ({ // 多加一个括号，是为了把返回值当做一个参数返回
            ...item,
            code: cur.code
        })
        )

    )

    , [])
```

### 对得到的数组进行按 title 排序

```js
result.sort((a, b) => a.title > b.title ? 1 : -1)
``` 