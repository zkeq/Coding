---
title: 前端体系｜Promise专题 - 原理以及是什么(持续更新)
tags:
  - 前端
  - Promise
categories:
  - 前端
cover: https://img.onmicrosoft.cn/ke/202309202133156.png
date: 2023-09-20 10:40:48
description: 该文章介绍了编写一个手写Promise.all的原理。首先，该函数接收一个可迭代对象作为参数，并返回一个新的Promise实例。在函数内部，先将可迭代对象转化为数组，并将其中每个非Promise值转化为Promise对象。然后，判断如果转化后的数组长度为0，则直接返回一个resolved状态的Promise对象，并传递一个空数组作为值。接着，定义一个values数组和一个count变量用于记录已完成的Promise数量。接下来，通过for循环遍历每个Promise对象，使用then方法来监听其状态改变。当一个Promise对象被resolved时，将其值存入values数组中，并将count变量加1。当已完成的Promise数量等于总数时，即所有Promise对象都已resolved，返回一个resolved状态的Promise对象，并传递values数组作为值。如果其中任何一个Promise对象被rejected，直接将错误传递给最终的Promise对象。这就是手写Promise.all函数的实现原理。
---

### 面试面什么?

![image-20230920104116918](https://img.onmicrosoft.cn/ke/202309201041039.png)

- 熟练使用Promise封装代码，如封装axios，Promise级联使用，掌握async、await的用法
- 掌握Promise静态方法的使用场景、用法，Promise.all、Promise.allSettled、Promise.race、Promise.any、Promise.resolve、Promise.reject
- 手写Promise.all、Promise.race、Promise.allSettled
- 手写Promise.any、Promise.last、Promise.queue
- 并发请求限制数量封装
- 实现Promisify
- Promise 微任务输出、async/await 微任务输出
- 理解Promise A+规范，手写Promise

### 手写Promise.all 原理

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

![image-20230920104826227](https://img.onmicrosoft.cn/ke/202309201048263.png)

![image-20230920104612738](https://img.onmicrosoft.cn/ke/202309201046769.png)

```js
Promise.all = function(iterable) {
  return new Promise((resolve, reject) => {
    let promises = [...iterable].map(p => (p instanceof Promise) ? p : Promise.resolve(p))
    if(promises.length === 0) return resolve([])
    let values = []
    let count = 0
    for(let i=0; i < promises.length; i++) {
      promises[i].then(v => {
        values[i] = v
        count++
        if(count === promises.length) {
          resolve(values)
        }
      }, reject)
    } 
  })
}
```

