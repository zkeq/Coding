---
title: 饥人谷前端 | JS 函数的执行时机
tags: []
description: 本节课主要学习了<br>
date: 2022-07-07 09:15:07
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 迦南
copyright_author_href: https://www.zhihu.com/people/xin-jia-nan-51
copyright_url: https://zhuanlan.zhihu.com/p/138869631
copyright_info: 资料来源：知乎。
---

## **定时器：setTimeout()**

> setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式

**提示：** 1000 毫秒= 1 秒。 **提示：** 如果你只想重复执行可以使用 [setInterval()](https://link.zhihu.com/?target=https%3A//www.runoob.com/jsref/met-win-setInterval.html) 方法。 **提示：** 使用 [clearTimeout()](https://link.zhihu.com/?target=https%3A//www.runoob.com/jsref/met-win-cleartimeout.html) 方法来阻止函数的执行。

**语法：**setTimeout（x，y，z）

- x 函数function（）
- y 时间（time）
- z 参数（会自动传入第一个参数，也就是函数的参数中) 可省略

```js
setTimeout(function(){
  alert("Hello"); 
}, 3000);
```

因为setTimeout含义是定时器，需要通过设置（触发）时间来调用代码

假使设置的时间为3000，则在3000毫秒数弹出对话框“Hello” 假使设置的触发时间为“0”时，含义则为**尽快调用**

> 打个比喻：老板让你清点运来的箱子，当数到第50个，老板和你说把结果写到纸上交给我。
> 当下肯定不能进行记录，因为箱子还未清点完成；只有最后数完箱子后，才能在写到纸上交给老板

**先把主代码执行完，之后才尽快执行setTimeout中的代码**

------

## JS执行(调用)时机

### 面试题：6个6

思考：以下代码会打印出什么？

```js
let i=0
for(i=0;i<6;i++){
  setTimeout(()=>{console.log(i)},1000)
}
```

**运行上面代码，看看会打印出什么结果**

```js
let i=0
for(i=0;i<6;i++){
  setTimeout(()=>{console.log(i)},1000)
}
```

![img](https://pic4.zhimg.com/80/v2-d71d56328095000e78fa59ed1eb6b237_720w.jpg)

- JS函数的调用时机不同，得到的结果不同。
- setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式；其意思就是尽快，而不是马上。

**解释：**因为setTimeout是一个异步任务，执行到这里的操作会被浏览器丢到另一个任务队列里去， 浏览器这时候会继续执行for循环。每一次for循环的时候，setTimeout都执行一次，但是里面的函数没有被执行，而是被放到了任务队列里面，等待执行，for循环了6次，就放了6次，当主线程执行完成后，才进入任务队列里面执行。这时候因为for循环i=6了，所以输出的全部都是6。

**如何理解异步呢？**

异步代码不等待结果，直接进行下面的代码，所以定时器只是开启了，而没有立即执行里面的代码，等到当前运行坏境的代码执行完之后再回来执行定时器里面的代码。总结：异步就是不等待结果的代码。

**解释二：**如案例中所示，setTimeout的调用时间为“0”（尽快调用），只有当主代码执行完一遍后才会执行setTimeout（定时器），但这时**i已经为6**，所以打印出数值6.

又因为条件：i<6，共执行了6次（当i等于6时跳出循环），所有结果为一共打印出6次6。

### 思考：那么怎么正确显示？（如何打印出0、1、2、3、4、5）

------

### 方法一：let关键字

**原理：**每次进入进入循环时，JS会把当前的复制一份路i在循环空间里（i=0,i=1...） 不会跟随新的i跟变化

> **JS变态之处：**把let声明写入for循环中，则会正常打印出 0、1、2、3、4、5 （服了JS，迎合新人）

```js
for(let i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```

![img](https://pic2.zhimg.com/80/v2-4f38eb4910ad404a5442e68c47b2b9a5_720w.jpg)

**解释：因为let变量的作用域只能在当前函数中**，所以每次for循环生成的都是一个新的i,setTimeout里输出的i就是这个新的i，这个i是不会变化的，所以输出的就是正常的。

[迦南：var、let、consts在JavaScript变量/常量的定义0 赞同 · 0 评论文章](https://zhuanlan.zhihu.com/p/151859681)

除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5？

**方法二：**

```js
for(i=0;i<6;i++){
  let j = i
  setTimeout(()=>{console.log(j)},1000)
}
```

**方法三：闭包**

```js
for(var i=0;i<6;i++){
  !function(i){  //这是里面的i //在匿名函数前加上运算符‘ ！’，不生成新的全局变量（防止污染全局）
     setTimeout(()=>{console.log(i)},1000)  //这是里面的i
   }(i)  //这是外面的i //在匿名函数后加个（）立即执行，并把i当作参数value传入匿名函数循环执行，参数i和匿名函数组成了闭包
}
```

![img](https://pic4.zhimg.com/80/v2-e264b10246e1a867123515f6d460e767_720w.jpg)

**原理：**

- 声明匿名函数 **function(value){}** 包裹 setTimeout（）
- 然后再匿名函数前加上运算符**‘ ！’**，防止生成新的全局变量（避免污染全局）
- 在匿名函数后加个**（）**立即调用，并把 **i** 当作参数 **value** 传入匿名函数进行调用

**注意：参数i和匿名函数会组成了闭包**

通过闭包，将i的变量驻留在内存中，当输出j时，引用的是外部函数A的变量值i，i的值是根据循环来的，执行setTimeout时已经确定了里面的的输出了。

**方法四：利用 setTimeout 的第三个参数,将i传进去**

```js
let i
for(i = 0; i<6; i++){
    setTimeout((value)=>{
      console.log(value)
    },0,i)   //setTimeout 第三个参数，声明后这个参数可以将自身传给第一个参数 function（value），
}
```

**原理：**

> 使用setTimeout 的第三个参数--这个参数可以将自身传给第一个参数
> 也就是匿名函数function（value）中，作为所需要的参数value，value可默认不写
> 而 i 共传入6次（0，1，2，3，4，5），通过匿名函数即可打印出
> 通常不写第三个三处，如果默认不写第三个参数，则不会传入函数

由于每次传入的参数是从for循环里面取到的值，所以会依次输出0~5

简单一句换：setTimeout的第三个参数作用，它就是当作setTimeout第一个函数的参数

**方法五：const关键字**

```js
let i
for(i = 0; i<6; i++){
    const x = i
    setTimeout(()=>{
      console.log(x)
    })
}
```

**拓展例1：**

```js
function sum(x,y,z){
    console.log(x+y+z);
}
setTimeout(sum,1000,1,2,3);
```

![img](https://pic2.zhimg.com/80/v2-7bbfd6170f491e560d7ab8d9a883151d_720w.jpg)

**拓展例2：**

```js
var i=0;
setTimeout(function(){
    console.log('第二次'+i)
},3000,setTimeout(function(){
    console.log('第一次'+i);
    i++;
},1000));
```

![img](https://pic4.zhimg.com/80/v2-dab99b07c931f1c686d63a06ed21b8f7_720w.jpg)

> 最后依次输出为 第一次0 第二次1
> 可以看到第三个参数还可以是先执行，然后再执行函数

**不过还要注意一点就是：**

这种传参方式在IE9及更低的版本下是不起作用的

**setTimeout的意思**

```js
setTimeout(fn(),1000)
f2()
```

1000ms后尽快执行fn()，不代表马上执行，如f2()中写了10000行代码，需要花10秒执行完，那么，fn()会在10秒之后执行。
