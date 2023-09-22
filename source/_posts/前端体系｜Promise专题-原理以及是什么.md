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

> 一学期的比赛生涯在 “” 中结束了, 无论如何; 开始了新学期的学习.那么这学期主攻学业, 但是前端还是要在子任务进度下慢慢推进, 本文算是前端继续学习的一个开端~

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

### 手写 Promise.all 原理

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

> Promise.all() 静态方法接受一个 Promise 可迭代对象作为输入，并返回一个 Promise。当所有输入的 Promise 都被兑现时，返回的 Promise 也将被兑现（即使传入的是一个空的可迭代对象），并返回一个包含所有兑现值的数组。如果输入的任何 Promise 被拒绝，则返回的 Promise 将被拒绝，并带有第一个被拒绝的原因。

![image-20230920104826227](https://img.onmicrosoft.cn/ke/202309201048263.png)

![image-20230920104612738](https://img.onmicrosoft.cn/ke/202309201046769.png)

```js
Promise.all = function(iterable) {
  return new Promise((resolve, reject) => {
    let promises = [...iterable].map(p => (p instanceof Promise) ? p : Promise.resolve(p)) // 将可迭代对象转化为数组，并将其中每个非Promise值转化为Promise对象
    if(promises.length === 0) return resolve([]) // 如果转化后的数组长度为0，则直接返回一个resolved状态的Promise对象，并传递一个空数组作为值
    let values = [] // 定义一个values数组用于存储每个Promise对象的值
    let count = 0 // 定义一个count变量用于记录已完成的Promise数量
    for(let i=0; i < promises.length; i++) {
      promises[i].then(v => { // 通过for循环遍历每个Promise对象，使用then方法来监听其状态改变
        values[i] = v // 当一个Promise对象被resolved时，将其值存入values数组中
        count++ // 将count变量加1
        if(count === promises.length) {
          resolve(values) // 当已完成的Promise数量等于总数时，即所有Promise对象都已resolved，返回一个resolved状态的Promise对象，并传递values数组作为值
        }
      }, reject) // 如果其中任何一个Promise对象被rejected，直接将错误传递给最终的Promise对象
    } 
  })
}
```

### 手写 Promise.race 原理

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

> Promise.race(iterable)方法返回一个promise, 一旦迭代器中的某个 promise resolve 或者 reject, 返回的 promise 就会 resolve 或reject.
>
> Promise.race() 静态方法接受一个 promise 可迭代对象作为输入，并返回一个 Promise。这个返回的 promise 会随着第一个 promise 的敲定而敲定。

![手写Promise.race](https://img.onmicrosoft.cn/ke/202309210855326.png)

```js
Promise.race = function(iterable) { // 接收一个可迭代对象作为参数
  let arr = [...iterable].map(item => item instanceof Promise? item : Promise.resolve(item)) // 将可迭代对象转化为数组，并将其中每个非Promise值转化为Promise对象

  return new Promise((resolve, reject) => { // 返回一个新的Promise实例
    for(let i=0; i<arr.length; i++) { // 遍历数组
      arr[i].then(resolve, reject) // 使用then方法来监听其状态改变, 当其中任何一个Promise对象被resolved或rejected时，直接将其值传递给最终的Promise对象
    }
  })        
}


//test
let p1 = new Promise(r => setTimeout(r, 3000, 1))
let p2 = new Promise((r,j) => setTimeout(j, 1000, 2))
let p3 = new Promise(r => setTimeout(r, 500, 3))

Promise.race([p1, p2, p3])
  .then(data => console.log(data))
  .catch(e => console.error(e))

Promise.race('hello').then(data => console.log(data))

console.log(Promise.race(''))

Promise.race([Promise.resolve(2), 3]).then(data => console.log(data))
```

### 手写 Promise.allSettled 原理

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

> Promise.allSettled() 方法返回一个在所有给定的promise都已 fuldilled 或 rejected 后的 promise, 并带有一个对象数组, 每个对象表示对应的 promise 结果.

> Promise.allSettled() 静态方法将一个 Promise 可迭代对象作为输入，并返回一个单独的 Promise。当所有输入的 Promise 都已敲定时（包括传入空的可迭代对象时），返回的 Promise 将被兑现，并带有描述每个 Promise 结果的对象数组。

![Promise.allSettled](https://img.onmicrosoft.cn/ke/202309210927957.png)

```js
Promise.allSettled = function(iterable) {
  let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item)) // 将可迭代对象转化为数组，并将其中每个非Promise值转化为Promise对象
  if(arr.length === 0) return Promise.resolve([]) // 如果转化后的数组长度为0，则直接返回一个resolved状态的Promise对象，并传递一个空数组作为值

  return new Promise((resolve, reject) => {
    let results = [] // 定义一个results数组用于存储每个Promise对象的状态和值
    let count = 0 // 定义一个count变量用于记录已完成的Promise数量
    for(let i in arr) {
      arr[i].then(value => { // 通过for循环遍历每个Promise对象，使用then方法来监听其状态改变
        results[i] = { status: 'fulfilled', value } // 当一个Promise对象被resolved时，将其状态和值存入results数组中
      }, reason => {
        results[i] = { status: 'rejected', reason } // 当一个Promise对象被rejected时，将其状态和值存入results数组中
      }).finally(() => {
        count++ // 将count变量加1
        if(count === arr.length) {
          resolve(results) // 当已完成的Promise数量等于总数时，即所有Promise对象都已resolved或rejected，返回一个resolved状态的Promise对象，并传递results数组作为值
        }
      })
    }
  })
}

let p1 = new Promise(r => setTimeout(r, 3000, 1))
let p2 = new Promise((r,j) => setTimeout(j, 1000, 2))
let p3 = new Promise(r => setTimeout(r, 500, 3))

Promise.allSettled([p1, p2, p3])
  .then(data => console.log(data))
  .catch(e => console.error(e))

// 输出结果
// {status: 'fulfilled', value: 1},
// {status: 'rejected', reason: 2},
// {status: 'fulfilled', value: 3}

Promise.allSettled('hello').then(data => console.log(data))

Promise.allSettled('').then(data => console.log(data))

Promise.allSettled([Promise.resolve(2), 3, Promise.reject(4)]).then(data => console.log(data))
```

### 手写 Promise.any 原理

> **`Promise.any()`** 静态方法将一个 Promise 可迭代对象作为输入，并返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。当输入的任何一个 Promise 兑现时，这个返回的 Promise 将会兑现，并返回第一个兑现的值。当所有输入 Promise 都被拒绝（包括传递了空的可迭代对象）时，它会以一个包含拒绝原因数组的 [`AggregateError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 拒绝。

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

![手写Promise.any](https://img.onmicrosoft.cn/ke/202309210944336.png)

```js
Promise.any = function(iterable) {
  let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item)) // 将可迭代对象转化为数组，并将其中每个非Promise值转化为Promise对象
  if(arr.length === 0) return Promise.reject('All promise rejected') // 如果转化后的数组长度为0，则直接返回一个rejected状态的Promise对象，并传递一个错误信息作为值
  return new Promise((resolve, reject) => {
    let rejectCount = 0 // 定义一个rejectCount变量用于记录已完成的Promise数量
    for(let i=0; i<arr.length; i++) { 
      arr[i].then(resolve, reason => { // 通过for循环遍历每个Promise对象，使用then方法来监听其状态改变, 当其中任何一个Promise对象被resolved时，直接将其值传递给最终的Promise对象
        rejectCount++ // 将rejectCount变量加1
        if(rejectCount === arr.length) {
          reject('All promises rejected') // 当已完成的Promise数量等于总数时，即所有Promise对象都已rejected，返回一个rejected状态的Promise对象，并传递一个错误信息作为值
        }
      })
    }
  })
}

//test
let p1 = new Promise(r => setTimeout(r, 3000, 1))
let p2 = new Promise((r,j) => setTimeout(j, 1000, 2))
let p3 = new Promise(r => setTimeout(() => r(3), 500)

Promise.any([p1, p2, p3])
  .then(data => console.log(data))
  .catch(e => console.error(e))

Promise.any('hello').then(data => console.log(data))

Promise.any('').then(data => console.log(data), reason => console.error(reason))

Promise.any([Promise.resolve(2), 3, Promise.reject(4)]).then(data => console.log(data))
```

### 手写并发控制

- 使用闭包优化并发请求结果顺序

```js
function asyncPool(fn, arr, limit = 2) {
  let args = [...arr] //  [...arr] 为了不改变原数组 也可以用 arr.slice()
  let currentCount = 0 // 当前请求数(在运行的数量)
  let results = [] // 存放结果
  let settledCount = 0 // 已经完成的请求数
  let order = 0 // 请求顺序

  return new Promise((resolve, reject) => {

    function run() { // 递归函数
      while (currentCount < limit && args.length > 0) {// 当前请求数小于限制数 并且 还有请求未发出
        currentCount++ // 当前请求数+1

        (function (i) { // 闭包
          console.log('当前请求数' + currentCount) // 打印当前请求数
          let val = args.shift() // 取出第一个请求
          fn(val).then(v => { // 执行请求
            results[i] = v // 将结果放入对应的位置
          }).finally(() => { // 不管成功还是失败
            settledCount++ // 已经完成的请求数+1
            currentCount-- // 当前请求数-1
            if (settledCount === arr.length) { // 当已经完成的请求数等于请求数组的长度时
              resolve(results) // 返回结果
            } else {
              run() // 继续执行
            }
          })
        })(order++) // 传入请求顺序

      }
    }

    run()

  })
}


function getWeather(city) {
  console.log(`开始获取${city}的天气`)
  return fetch(`http://api2.jirengu.com/getWeather.php?city=${city}`).then(res => res.json())
}

let citys = ['北京', '上海', '杭州', '成都', '武汉', '天津', '深圳', '广州', '合肥', '郑州']
asyncPool(getWeather, citys, 5).then(results => console.log(results))

```

![](https://bu.dusays.com/2023/09/21/650be9665f465.png)
