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

        (function (i) { // 闭包, 保存请求顺序
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

# 宏任务、微任务原理

### 运行顺序

- 先运行**同步代码**
- 再扫描**微队列**依次运行并清空**全部任务**
- 扫描**宏队列**拿出**一个任务**运行
- 再扫描微队列依次运行并清空全部任务
- 扫描宏队列拿出一个任务运行.....
- 直到两个队列都为空

### 同步与放入宏队列

- `setTimeout(fn, t)` 本身是**同步代码**，作用是创建一个定时器
- `t`毫秒后把`fn`**放入宏队列**
- `new Promise(function fn(resolve, reject) { ...})` 会立即运行`fn`，其中**`fn`里也是同步代码**

### 放入微队列

- 对于处于`pending`状态的`Promise`对象`p`，内部状态的`resolve`，才会触发`p.then(fn)`中的`fn`加入微队列
- 对于处于`fulfilled`状态的`Promise`对象`p`, 执行`p.then(fn)`会立即让`fn`加入微队列

![思路](https://img.onmicrosoft.cn/ke/202309220917219.png)

# 宏任务、微任务案例1

原始代码，输出什么？

```javascript
setTimeout(() => console.log(1), 0); // 宏任务
new Promise(resolve => { 
 resolve(); 
 console.log(2); // 同步代码
}).then(() => { 
  console.log(3); // 微任务
});
console.log(4); // 同步代码
// 输出结果: 2 4 3 1
```

改造后，所有的函数都加个名字，便于分析

```javascript
setTimeout(function f1( {  // 1. setTimeout本身是同步代码，作用是创建一个定时器(宏任务)
  console.log(1) 
}, 0);
new Promise(function f2(resolve) { // 2. new Promise会立即运行fn，其中fn里也是同步代码 
 resolve();
 console.log(2);
}).then(function f3() { // 3. 对于处于pending状态的Promise对象p，内部状态的resolve，才会触发p.then(fn)中的fn加入微队列
  console.log(3);
});
console.log(4); // 4. 同步代码 
```

执行过程：

1. 执行同步代码创建计时器，并立即加入到宏队列。 此时宏队列【f1】，微队列【】；
2. 创建Promise，运行同步代码f2()。运行resolve()会触发f3加入微队列。此时宏队列【f1】，微队列【f3】。再输出2；
3. 运行同步代码输出4。同步代码执行完毕，扫描微队列，执行全部任务，执行f3()，输出3；
4. 拿出一个宏队列任务，执行f1()，输出1。此时队列都为空。

![image-20230922095000652](https://img.onmicrosoft.cn/ke/202309220950737.png)

![案例1](https://img.onmicrosoft.cn/ke/202309220923401.png)

# 宏任务、微任务案例2

输出什么?

```javascript
new Promise(function f1(resolve){
  console.log(1); // 同步代码
  setTimeout(function f2() {
    console.log(2); // 宏任务
  });
  resolve(1); // 同步代码
}).then(function f3(res) {
  console.log(3); // 微任务
})

setTimeout(function f4() {
  console.log(4); // 宏任务
})

console.log(5); // 同步代码
```

- 执行同步代码创建Promise对象，运行同步代码f1()。输出1，创建定时器，立即把f2加入宏队列。运行resolve(1)，触发f3加入微队列。此时宏队列【f2】，微队列【f3】；
- 创建定时器，立即把f4加入宏队列。此时宏队列【f2, f4】，微队列【f3】;
- 运行同步代码输出5。同步代码执行完毕;
- 扫描微队列，拿出并执行全部任务，执行f3()，输出3；
- 拿出一个宏队列任务，执行f2()，输出2。扫描微队列为空，再扫描宏队列拿出f4执行，输出4。此时队列都为空。

![image-20230922094932033](https://img.onmicrosoft.cn/ke/202309220949117.png)

![案例2](https://img.onmicrosoft.cn/ke/202309220941138.png)

# 宏任务、微任务案例3

输出什么？

```javascript
setTimeout(function f1() { 
  console.log(1)  // 宏任务
})

new Promise(function f2(resolve) {
  resolve()
  console.log(2) // 同步代码
}).then(function f3() {
  console.log(3) // 微任务 
  Promise.resolve().then(function f4() {
    console.log(4) // 微任务
  }).then(function f5() {
    Promise.resolve().then(function f6() {
      console.log(5) // 微任务
    })
  })
})

console.log(6) // 同步代码
```

1. 创建定时器，立即把f1加入宏队列。此时宏队列【f1】，微队列【】；
2. 创建Promise对象，执行同步代码f2()。执行resolve() 触发f3加入微队列。之后输出2。此时宏队列【f1】，微队列【f3】;
3. 运行同步代码输出6。同步代码执行完毕;
4. 扫描微队列，拿出并执行全部任务。先执行f3()，输出3；Promise.resolve().then(f4） 立即把f4加入微队列。此时宏队列【f1】，微队列【f4】。微队列不为空，拿出f4执行，输出4。f4执行完导致当前状态fulfilled，触发f5加入微队列。拿出f5继续执行，触发f6立即加入微队列。拿出并执行f6,输出5。此时宏队列为【f1】，微队列为空
5. 扫码宏队列，拿出运行f1，输出1。

![image-20230922094902186](https://img.onmicrosoft.cn/ke/202309220949272.png)

![案例3](https://img.onmicrosoft.cn/ke/202309220941168.png)

# 宏任务、微任务案例4

```javascript
console.log(1) // 同步代码
setTimeout(function f1(){
  console.log(2) // 宏任务
  Promise.resolve().then(function f2() {
      console.log(3) // 微任务
      setTimeout(function f3() {
        console.log(4) // 宏任务
      })
  }).then(function f4() {
      console.log(5) // 微任务
  })
}, 0)
console.log(6) // 同步代码
```

1. 输出1；
2. 创建定时器，立即把f1加入宏队列。此时宏队列【f1】，微队列【】；
3. 输出6；
4. 扫描微队列，为空。扫描宏队列，取出f1运行。输出2；f2立即加入微队列。此时宏队列【】，微队列【f2】。
5. 扫描微队列，拿出并执行全部任务。执行f2()，输出3；创建计时器，立即把f3加入宏队列。f2执行完毕时导致当前promise fulfilled，触发f4加入微队列。此时宏队列【f3】，微队列【f4】。微队列不为空，继续拿出f4执行，输出5。此时宏队列【f3】，微队列【】
6. 扫码宏队列，运行f3，输出4。结束。

![image-20230922094813849](https://img.onmicrosoft.cn/ke/202309220948886.png)

![案例4](https://img.onmicrosoft.cn/ke/202309220942278.png)

# 【课件】async、await代码输出

来看一个近期的大厂的面试题，以下代码输出顺序是什么

```javascript
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');
  })
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);  
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
}).then(function() {
  console.log('promise3');
});
console.log('script end');
```

如果你了解 async/await、Promise、宏任务微任务，你可能给出这个答案：

```
script start
async1 start
async2 start
async2 promise
promise1
script end
async1 end    //注意这里
promise2
promise3
setTimeout
```

而实际运行的结果却是这个答案：

```
script start
async1 start
async2 start
async2 promise
promise1
script end
promise2
promise3
async1 end    //注意这里
setTimeout
```

其他的输出顺序还好理解，但 `async1 end`的输出非常靠后，这究竟是为什么？

代码的运行容不得任何一知半解的猜测，我们需要做些事情拨云见日——把async/await 写法完整的还原成Promise的写法。

## async/await 与 Promise

我们先从简单例子入手，完成async/await 到Promise写法的转换。

await 操作符用于等待一个Promise对象。如果该值不是一个 Promise，await 会把该值转换为 resolved 的Promise。

```javascript
//code 1
async function async1(){
  console.log(1)
  await 1
  console.log(2)
}
let p = async1()
console.log(p)
```

async函数一定返回Promise对象，上面的代码等价于code 2：

```javascript
//code 2
function async1() {
  console.log(1)
  return new Promise(resolve => {
    resolve(1)
  }).then(() => {
    console.log(2)
  })
}
let p = async1()
console.log(p)
```

运行code 1 和 code 2，会得到相同的输出，想想为什么得到如下输出？

我们让例子变的更复杂一些

```javascript
//code 3
async function async2() {
  console.log(2)
  return 2
}

async function async1(){
  console.log(1)
  await async2()
  console.log(3)
}

async1()
```

如果async函数里的await 是一个Promise对象，则这个Promise对象的resolve会触发后续代码的执行。换句话说await 语句之后的代码是await的这个Proimise对象的then逻辑。上面的代码等价code 4：

```javascript
//code 4
function async2() {
  console.log(2)
  return Promise.resolve(2)
}
function async1() {
  console.log(1)
  return async2()
    .then(() => console.log(3))
}
async1()
```

在让例子变得更复杂一些，如果async函数里又return一个Promise对象（如刚刚的面试题），该如何转换呢？

```javascript
//code 5
async function async2() {
  console.log('async2 start')
  return new Promise((resolve, reject) => {
    resolve()
    console.log('async2 promise')
  })
}

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async1()
```

假设 p = async2() ，p是一个新的Promise对象，并不是async2函数里return的那个Promise对象，p的内部状态由async2函数里return的Promise对象的resolve来改变。所以

```javascript
//code 6
async function async2() {
  console.log('async2 start')
  return new Promise((resolve, reject) => {
    resolve()
    console.log('async2 promise')
  })
}

//不等价这个
function async2() {  
  console.log('async2 start')
  return new Promise((resolve, reject) => {
      resolve()
      console.log('async2 promise')
    })
  })
}

//而是等价于这个
function async2() {  
  console.log('async2 start')
  return new Promise(resolve2 => {
    new Promise((resolve, reject) => {
      resolve()
      console.log('async2 promise')
    }).then(() => resolve2())
  })
}
```

以下是代码替换的完整版：

```javascript
// code 7
function async1() {
  console.log('async1 start')
  return new Promise(resolve => {    // async 函数返回一个Promise对象，由async2()得到的Promise对象的resolve来触发自己的resovle
    async2().then(v => resolve(v))
  }).then(()=> {
    console.log('async1 end')
  })
}

function async2() {  
  console.log('async2 start')
  return new Promise(resolve2 => { // 返回一个新的Promise对象，由原来async函数里return的Promise对象的resovle来触发自己的resolve
    new Promise((resolve, reject) => {
      resolve()
      console.log('async2 promise')
    }).then(() => resolve2())
  })
}

console.log('script start')
setTimeout(function() {
  console.log('setTimeout')
}, 0)
async1()
new Promise(function(resolve) {
  console.log('promise1')
  resolve()
}).then(function() {
  console.log('promise2')
}).then(function() {
  console.log('promise3')
});
console.log('script end')
```

得到改造版后，再来详细分析执行逻辑，为了便于讲解，我们先把代码里所有的箭头函数加上函数名

```javascript
// code 8
function async1() {
  console.log('async1 start')
  return new Promise(function f1(resolve) {    // 第3行，async 函数返回一个Promise对象，由async2()得到的Promise对象的resolve来触发自己的resovle
    async2().then(function f2(v) { resolve(v) } )   //第4行
  }).then(function f3() {              //第5行
    console.log('async1 end')
  })
}

function async2() {  
  console.log('async2 start')
  return new Promise(function f4(resolve2) { // 第12行，返回一个新的Promise对象，由原来async函数里return的Promise对象的resovle来触发自己的resolve
    new Promise(function f5(resolve, reject) {  // 第13行
      resolve()
      console.log('async2 promise')
    }).then(function f6() {  resolve2() })   // 第16行
  })
}

console.log('script start')
setTimeout(function f7() {
  console.log('setTimeout')
}, 0)
async1()
new Promise(function f8(resolve) {     //第25行
  console.log('promise1')
  resolve()
}).then(function f9() {
  console.log('promise2')
}).then(function f10() {
  console.log('promise3')
});
console.log('script end')
```

详细执行过程：

- 运行同步代码
  - 声明函数async1 和 async2
  - 输出 script start
  - 创建定时器，立即把 f7 加入宏队列。宏队列[f7]
  - 执行 async1()
    - 输出async1 start
    - 执行同步代码 f1
    - 执行async2
      - 输出 async2 start
      - 执行同步代码 f4
      - 执行同步代码 f5，f5里的resolve()，把f6 加入微队列。微队列[f6]
      - 输出 async2 promise
    - 第25行，创建Promise，执行同步代码f8，输出 promise1 ，之后执行resolve，把f9加入到微队列。微队列[f6, f9]
    - 输出 script end
- 扫描微队列
  - 拿出f6运行，执行resolve2()，导致async2函数return的Promise对象（第12行）被resovle，也就是调用async2的地方(第4行)。导致f2加入微队列。 微队列[f9, f2]
  - 拿出f9运行，输出 promise2。执行完导致当前Promise被resolve，导致f10加入微队列。微队列[f2, f10]
  - 拿出f2运行。执行resolve，导致第3行的Promise被resolve，导致第5行f3加入微队列。微队列[f10, f3]
  - 拿出f10运行，输出 promise3。当前Promise被resovle。微队列[f3]
  - 拿出 f3运行，输出async1 end ，微队列清空
- 扫描宏队列
  - 拿出f7运行，输出setTimeout，宏队列清空。

分析结果符合运行结果！！

# Promise链式调用与错误处理

开讲之前，先做一道题目。如果同时包含多个.then和.catch，且.then包含第二个用与错误处理的函数，运行结果什么？

```javascript
// code 1
new Promise((resolve, reject) => {
  reject('error')
}).then(()=> {
  console.log('ok 1')
}, (err) => {
  console.log('error 1: ' +  err)
}).then(() => {
  console.log('ok 2')
}, (err) => {
  console.log('error 2: ' + err)
}).catch(err => {
  console.log('catch 1: ' + err)
})
```

给出以下4个备选答案，你会选什么？

```
答案 A
  error 1: error
  error 2: error
  catch 1: error

答案 B
  error 1: error

答案 C
  error 1: error
  ok 2

答案 D
  error 1: error
  ok 2
  catch 1: error
```

往下滚动揭晓答案

正确答案是 C。

### 分析

code1 等价于以下写法

```javascript
// code 2
let p1 = new Promise((resolve, reject) => {
  reject('error')
})
let p2 = p1.then(()=> {    //line 4
  console.log('ok 1')
}, function fn2(err) {
  console.log('error 1: ' +  err)
})
let p3 = p2.then(() => {   //line 9
  console.log('ok 2')
}, function fn3(err) {
  console.log('error 2: ' + err)
})
let p4 = p3.catch(function fn4(err) {    //line 14
  console.log('catch 1: ' + err)
})
console.log(p1, p2, p3, p4)
```

首先执行同步的代码，创建已经 rejected 的p1 和处于 pending的 p2、p3、p4。

p1的reject 触发 p1.then的第二个参数，也就是fn2的运行， 输出 error 1: error。fn2运行后此时p2变成 fulfilled 状态 （注意不是rejected，可以理解为函数的执行意味着错误的处理，错误处理了就圆满了，后面就没错误了），同时触发p2.then的第一个参数的运行(line 9)，输出 ok 2 。此刻p3变成fulfilled，p3.catch不会捕捉到任何错误，fn4不会运行。

如果fn2不存在呢？如code3 所示，p1.then的第二个参数没有传递

```javascript
// code 3
let p1 = new Promise((resolve, reject) => {
  reject('error')
})
let p2 = p1.then(()=> {    //line 4
  console.log('ok 1')
})  //注意这里.then没第二个函数参数
let p3 = p2.then(() => {   //line 7
  console.log('ok 2')
}, function fn3(err) {     // line9
  console.log('error 2: ' + err)
})
let p4 = p3.catch(function fn4(err) {    //line 12
  console.log('catch 1: ' + err)
})
console.log(p1, p2, p3, p4)
```

以上代码的输出是

```
error 2: error
```

根据 Promise A+规范 2.2.7.3， 对于 p2 = p1.then(onFulfilled, onRejected)，如果onRejected不是一个函数，并且 p1 被 rejected， p2 一定被 rejected 并且使用和 p1 相同的 reason。

![Promise A+规范](https://img.onmicrosoft.cn/ke/202309220943138.png)

因为代码中 p1.then的第二个参数为空，所以 p1的reject 触发p2 变为rejected。同时触发p2.then的第二个参数fn3的运行(line 9)，输出 error2: error 。此刻p3变成fulfilled，p3.catch不会捕捉到任何错误，fn4不会运行。

假设去掉line9 里的fn3呢？

```javascript
// code 4
let p1 = new Promise((resolve, reject) => {
  reject('error')
})
let p2 = p1.then(()=> {    //line 4
  console.log('ok 1')
})  //注意这里.then没第二个函数参数
let p3 = p2.then(() => {   //line 7
  console.log('ok 2')
}) //注意这里.then没第二个函数参数
let p4 = p3.catch(function fn4(err) {    //line 12
  console.log('catch 1: ' + err)
})
console.log(p1, p2, p3, p4)
```

以上代码输出结果是，分析过程同上。

```
catch 1: error
```

我们也可以在中途 throw 错误

```javascript
// code 5
let p1 = new Promise((resolve, reject) => {
  reject('error')
})
let p2 = p1.then(()=> {    //line 4
  console.log('ok 1')
})  //注意这里.then没第二个函数参数
let p3 = p2.then(() => {   //line 7
  console.log('ok 2')
}, function fn3(err) {     // line9
  console.log('error 2: ' + err)
  throw 'error 3'          // line11 注意这里 throw了错误，p3会变成rejected状态，错误会交给后续处理
})
let p4 = p3.catch(function fn4(err) {    //line 13
  console.log('catch 1: ' + err)
})
console.log(p1, p2, p3, p4)
```

如code5 的 line 11所示， 如果没加 throw 'error 3' 这行代码，p3内处理了错误，p3变成fulfilled 状态，不会触发 p3.catch里的 fn4 的执行 （line 13）。 如果 加了 throw 'error 3' ，则又抛出一个错误，p3变为rejected 状态，会触发 p3.catch里的 fn4 的执行。

code5 代码输出为

```
error2: error
catch1: error3
```

### 总结

错误在传递的过程中如果被中途“处理”（触发then的第二个函数参数，或者被catch），则不再传递。否则继续传递，直到被处理。错误被"处理"之后，过程中的Promise对象全部都是完成状态的。

试一试如下代码

```javascript
//code 6
new Promise((resolve, reject) => {
  reject('error')                 //2
}).then(()=> {
  console.log('ok 1')             //4
}, (err) => {
  console.log('error 1:' +  err)  //6
}).then(() => {
  console.log('ok 2')             //8
}, (err) => {
  console.log('error 2:' + err)  //10
}).then(() => {
  console.log('ok 3')            //12
}, (err) => {
  console.log('error 3:' + err)  //14
}).catch(err => {
  console.log('catch 1:' + err)  //16
}).finally(() => {
  console.log('finally 1')       //18
}).then(() => {
  console.log('ok 4')            //19
}, (err) => {
  console.log('error 4:' + err)  //20
}).finally(() => {
  console.log('finally 2')       //22
}).catch(err => {
  console.log('catch 2:' +  err)  //24
})
以上代码运行结果是

"error 1:error"
"ok 2"
"ok 3"
"finally 1"
"ok 4"
"finally 2"
```

你回答对了吗？
