---
title: 饥人谷前端 | JS 数组
tags: [JS]
description: 本节课主要学习了<br>JS 数组
date: 2022-06-30 09:12:08
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
#### 数组对象
- 一种特殊的对象

- JS 其实没有真正的数组
  - 只是用对象模拟数组

JS 的数组不是典型数组
- 典型的数组
  - 元素的数据类型相同
  - 使用连续的内存存储
  - 通过数字下标获取元素

![1](https://img.onmicrosoft.cn/2022-06-30/1.png)

- 但是 JS 的数组不这样
  - 元素的数据类型可以不同
  - 内存不一定是连续的（对象是随机存储的）
  - 不能通过数字下标，而是通过字符串下标
  - 这意味着数组可以有任何 key
  - 比如
    - `let arr = [1,2,3]`
    - `arr['xxx'] = 1`
    - 完全合法

![2](https://img.onmicrosoft.cn/2022-06-30/2.png)

#### 创建一个数组
- 新建

```js
let arr = [1,2,3]  // 简写形式
let arr = new Array(1,2,3)  // 和第一句等价
let arr = new Attr(3) // 参数只有一个的时候表示数组的长度
```
- 转化

```js
let arr = '1,2,3'.split(',') // 通过字符串来创建数组
let arr = '123'.split('')
Array.from('123') // 从什么地方创建数组 只有符合条件才会
// 1. 0 1 2 3 下标
// 2. length 属性
```
- 伪数组

```js
let divList = document.querySelectorAll('div')
可以变成数组
let divArray = Array.from(divList)
console.dir(divArray)
这样就变成数组了
```
伪数组的原型链中并没有数组的原型，直接指到了根对象

- 没有 `push` 或者 `pop` 等数组共有的属性，那就是伪数组
- 没有数组共用属性的【数组】，就是伪数组

#### 创建一个数组（续）
- 合并两个数组，得到新数组

```js
arr1.concat(arr2)
```
- 截取一个数组的一部分

```js
arr1.slice(1) // 从第二个元素开始
arr1.slice(0) // 全部截取，复制的方法
注意，JS 只提供浅拷贝
```
#### 增删改查 数组中的元素
- 删元素
  - 跟对象一样
  - 稀疏数组

```js
let arr = ['a', 'b', 'c']
delete arr['0']
arr // [empty, 'b', 'c']
神奇，数组的长度并没有变
```
- 如果改 length 可以删元素吗？
  - 重要：不要随便改 length

```js
let arr = [1,2,3,4,5]
arr.length = 1
```
- 删元素续
  - 删除头部的元素

```js
arr.shift() // arr 被修改，并返回被删元素
```
- 删除尾部的元素

```js
arr.pop() // arr 被修改，并返回被删元素
```
- 删除中间的元素

```js
arr.splice(index, 1) // 删除 index 的一个元素
arr.splice(index, 1, 'x') // 并在删除位置添加 'x'
arr.splice(index, 1, 'x', 'y') // 并在删除位置添加 'x', 'y'
```
#### 查看所有元素
- 查看所有属性名

```js
let arr = [1,2,3,4,5];arr.x='xxx'
Object.keys(arr)
for(let key in arr){console.log(`${key}:${arr[key]}`)}
// 可能会获取到不想要的东西
```
- 查看数字（字符串）属性名和值

```js
for(let i = 0; i < arr.length; i ++){
    console.log(`${i}: ${arr[i]}`)
}
// 推荐这种
```
- 你要自己让 `i` 从 `0` 增长到 `length -1`

```js
arr.forEach(function (item, index){
    console.log(`${index}: ${item}`)
})
arr.forEach((x,y) => {
  console.log(x+":"+y)
})
// for 循环是一个关键词
// for 循环没有函数作用域，只有块级作用域
// 但是 forEach 是一个函数
```
- 也可以用 `forEach` / `map` 等原型上的函数

#### forEach 是一个坎
- 自己写 forEach 才能理解 forEach

```js
function forEach(array, fn) {
    for(let i = 0; i<array.length; i++){
        fn(array[i], i, array)
    }
}
// forEach 基本原理
// 第一个参数是当前的元素
// 第二个参数是当前的下标
// 第三个参数是数组本身
// 其实原理就是遍历这个 array ，每次都调用那个函数
// for 循环可以 break
// forEach 没有 break 的功能
```
- `forEach` 用 `for` 访问 `array 的每一项`
- 对每一项调用 `fn(array[i], i, array)`
- 为什么要传入 `array` 呢？ 不为什么，规定如此。

#### 查看单个属性
- 跟对象一样

```js
let arr = [111,222,333]
arr[0]
```
- 索引越界

```js
arr[arr.length] === undefined
arr[-1] === undefined
```
- 举例

```js
for(let i = 0; i<= arr.length; i++){
    console.log(arr[i].toString())
}
报错：Cannot read properties of undefined (reading 'toString')
```

![3](https://img.onmicrosoft.cn/2022-06-30/3.png)

#### 查看单个元素（续）
- 查找某个元素是否在数组里

```js
for(let i = 0; i<arr2.length; i++){
    if(arr[i] === 13){
        console.log('yes')
    }
}
// 有点弱智，不推荐
```
```js
// 推荐写法
arr.indexOf(item) // 存在返回索引，否则返回 -1
```
- 使用条件查找元素

```js
arr.find(function (x){
        return x%5===0
    })
```
```js
arr.find(item => item % 2 === 0) // 找第一个偶数
```
- 使用条件查找元素的索引

```js
arr.findIndex(function (x){
        return x%5===0
    })
```
```js
arr.findIndex(item => item % 2 === 0)
// 找第一个偶数的索引
```
#### 增加数组中的元素
- 在尾部加元素

```js
arr.push(newItem) // 修改 arr，返回新长度
arr.push(item1, item2) // 修改 arr，返回新长度
```
- 在头部加元素

```js
arr.unshift(newItem) // 修改 arr, 返回新长度
arr.unshift(item1, item2) // 修改 arr，返回新长度
// 添加什么顺序，出现在数组里面就是什么顺序
```
- 在中间添加元素

```js
arr.splice(index, 0, 'x') // 在 index 处插入 'x'
// 0 的意思的是什么都不删
arr.splice(index, 0, 'x', 'y')
```
#### 修改数字中的元素
- 修改就正常修改就行了
- 反转顺序
```js
arr.reverse() // 修改原数组
```
- 自定义顺序

```js
arr.sort(function (a,b){
    if(a>b){
        return 1
    }else if(a===b){
        return 0
    }else{
        return 1
    }
})
```
```js
arr.sort((a,b)=> a-b)
需要详细讲解
```
```js
let arr = [
  {name:'小明', score:99},
  {name:'小红', score: 95},
  {name:'大黄', score: 100}
]
// arr.sort(function (a,b){
//     if(a.score > b.score){return 1}
//     else if(a.score === b.score){return 0}
//     else {return -1}
// })
arr.sort((a,b) => a.score - b.score)
```
#### 数组变换

![4](https://img.onmicrosoft.cn/2022-06-30/4.png)

#### 数字变换（续）
- `map`
  - n 变 n

```js
let arr = [1,2,3,4,5,6]
for (let i=0; i<arr.length; i++){
    arr[i] = arr[i]*arr[i]
}
```
```js
let arr = [1,2,3,4,5,6]
arr.map(item => item*item)
```
- `filter`
  - n 变少

```js
arr.filter(item => item %2 ===0?true : false)
arr.filter(item => item %2 ===0)
```
- `reduce`
  - n 变 1

```js
let arr = [1,2,3,4,5,6]
let sum = 0
for (let i=0; i<arr.length; i++){
    sum += arr[i]
}
console.log(sum)
```
```js
arr.reduce((sum, item)=>{return sum+item} ,0)
// return 的是第一个参数
// 全部 map 乘方
arr.reduce((result,item) => {return result.concat(item*item)}, [])
// 取偶数
arr.reduce((result, item)=>{
  if(item %2 === 1){
    return result
  }else{
    return result.concat(item)
  }
},[])
// 简化写法
arr.reduce((result, item)=>
                item % 2 ===1 ?
                        result
                        :
                        result.concat(item)
        ,[])
// 再次简化
// result = result.concat([])
// 可以放进去 [] 表示本身
arr.reduce((result, item)=>
                result.concat(item % 2 === 1 ? [] : item)
        ,[])
``` 

| 参数             | 描述                     |
|:---------------|:-----------------------|
| *total*        | 必需。*初始值*, 或者计算结束后的返回值。 |
| *currentValue* | 必需。当前元素                |
| *currentIndex* | 可选。当前元素的索引             |
| *arr*          | 可选。当前元素所属的数组对象。        |

#### 题目
- 第一题
  - 把数字变成星期
- 第二题
  - 找出所有大于60分的成绩
- 第三题
  - 算出所有数字之和

#### 面试题
- 数据变换

```js
let arr = [
  {名称:'动物', id: 1, parent: null},
  {名称:'狗', id:2, parent: 1},
  {名称:'猫', id:3, parent: 1}
]

数组变成对象
{
    id:1, 名称: '动物', children: [
      {id:2, 名称: '狗', children: null},
      {id:3, 名称: '猫', children: null}
    ]
}
```

答案
```js
arr.reduce((result, item)=>{
  if(item.parent === null){
    result.id = item.id
    result['名称'] = item['名称']
  }else{
    result.children.push(item)
    delete item.parent
    item.children = null
  }
  return result
},{id: null, children: []})
```