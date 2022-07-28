---
title: DOM 事件模型
tags: [DOM]
description: 本节课主要学习了<br>DOM 事件模型
date: 2022-07-28 17:48:21
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: Xyxq
copyright_author_href: https://zhuanlan.zhihu.com/p/166083675
copyright_url: https://zhuanlan.zhihu.com/p/166083675
copyright_info: 资料来源：知乎Xyxq。任何组织或个人未经许可，禁止转载
---

## DOM 事件模型

DOM 的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。

该接口主要提供三个实例方法。

- `addEventListener`：绑定事件的监听函数
- `removeEventListener`：移除事件的监听函数
- `dispatchEvent`：触发事件

DOM事件传播的三个阶段：**捕获阶段，目标阶段，冒泡阶段**

![img](https://pic2.zhimg.com/80/v2-f041aba9eae2dc6bc9e578608ef0b2a5_720w.jpg)

![img](https://pic3.zhimg.com/80/v2-e485806072c182262f0b1adcbe05ab72_720w.jpg)

## **target v.s. currentTarget的区别**

**区别：**

> [e.target](https://link.zhihu.com/?target=http%3A//e.target/) - 用户操作的元素
> e.currentTarget-程序员监听的元素
> this是e.currentTarget,我个人不推荐使用它

> div>span{文字},用户点击文字
> e.target就是span
> e.currentTarget就是div

## e.stopPropagation()：取消冒泡

e.stopPropagation()可打断冒泡，浏览器不再向上走

一般用于封装某些独立组件

*注意：捕获不可以取消但是冒泡可以*

## 事件委托：

我委托一个元素帮我监听我本该监听的东西，比如onclick

**场景1：**

要给100个按钮添加点击事件，咋办？

答：监听这个100个按钮的祖先，等冒泡的时候判断target是不是这100个按钮中的一个

代码：

http://js.jirengu.com/xoset/1/edit?html,js,output

**场景2：**

你要监听目前不存在的元素的点击事件？

答：监听祖先，等点击的时候看看是不是监听的元素即可。

优点：省监听数（内存），可以动态监听元素

代码：

http://js.jirengu.com/pigaw/1/edit?html,js,console,output

## 封装一个事件委托

只要实行一个函数就可以实现事件委托

要求：

写出这样一个函数on('click','#testDiv','li',fn)

当用户点击#testDiv里面的li元素时，调用fn函数

要求用到事件委托

答案1：判断target是否匹配'li'

答案2：target/target的爸爸/target的爷爷

代码：

http://js.jirengu.com/soluy/1/edit?html,js,console,output

错的但是面试可以用：

答：给一个元素加一个监听，看当前的target是否满足监听函数（函数2）中函数2的条件如果满足调用，不满足放过。但是是错的！

代码：

```js
setTimeout(()=>{
  const button = document.createElement('button')
  const span = document.createElement('span')
  span.textContent='click 1'
  button.appendChild(span)
  div1.appendChild(button)
},1000)

on('click','#div1','button',()=>{//'#div'是选择器不是元素
  console.log('button 被点击啦')
})
function on(eventType,element,selector,fn){
  if(!(element instanceof Element)){
       element = document.querySelector(element)
     }
  element.addEventListener(eventType,(e)=>{
  const t= e.target//被点击的元素是span不是button啦
  if(t.matches(selector)){//matches用来判断一个元素是否匹配一个选择器,selector是不是一个选择器
span不匹配button
    fn(e)
   }
})
}
```

