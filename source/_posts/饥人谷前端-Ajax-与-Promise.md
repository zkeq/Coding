---
title: 饥人谷前端 | Ajax 与 Promise
tags: [JS]
description: 本节课主要学习了<br>Ajax 与 Promise笔记
date: 2022-07-29 15:44:57
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### AJAX 代码
#### 获取CSS: `getCSS()`
```JS
// https://github.com/zkeq/jirengu_learn_08/blob/0db6222580aa8fe25d158392a8f3fb804cf8feb7/public/main.js#L1-L12
getCSS.onclick = function() { 
   const xhr = new XMLHttpRequest(); 
   xhr.open('GET', '/style.css'); 
   xhr.onreadystatechange = () =>{ 
     if(xhr.readyState === 4 && xhr.status === 200){ 
     const style = document.createElement('style'); 
     style.innerHTML = xhr.responseText; 
     document.head.appendChild(style); 
   } 
 } 
   xhr.send(); 
 } 
```


#### 获取JS: `getJS()`
```js
// https://github.com/zkeq/jirengu_learn_08/blob/0db6222580aa8fe25d158392a8f3fb804cf8feb7/public/main.js#L14-L24
 getJS.onclick = function() { 
   const xhr = new XMLHttpRequest(); 
   xhr.open('GET', '/2.js'); 
   xhr.onload = function() { 
     // const script = document.createElement('script'); 
     // script.innerHTML = xhr.responseText; 
     // document.head.appendChild(script); 
     eval(xhr.responseText); 
   } 
   xhr.send(); 
 } 
```
#### 获取HTML: `getHTML()`
```js
// https://github.com/zkeq/jirengu_learn_08/blob/0db6222580aa8fe25d158392a8f3fb804cf8feb7/public/main.js#L26-L35
 getHTML.onclick = function() { 
   const xhr = new XMLHttpRequest(); 
   xhr.open('GET', `/3.htm`); 
   xhr.onload = function() { 
     const div = document.createElement('div'); 
     div.innerHTML = xhr.responseText; 
     document.body.appendChild(div); 
   } 
   xhr.send(); 
 } 
```

#### 获取XML: `getXML()`
```js
// https://github.com/zkeq/jirengu_learn_08/blob/0db6222580aa8fe25d158392a8f3fb804cf8feb7/public/main.js#L37-L48
 getXML.onclick = function() { 
   const xhr = new XMLHttpRequest(); 
   xhr.open('GET', '/4.xml'); 
   xhr.onreadystatechange = () =>{ 
     if (xhr.readyState === 4 && xhr.status === 200) { 
       const xml = xhr.responseXML; 
       const text = xml.getElementsByTagName('warning')[0].textContent; 
       console.log(text.trim()); 
     } 
   } 
   xhr.send(); 
 } 
```

#### 获取JSON: `getJSON()`
```js
// https://github.com/zkeq/jirengu_learn_08/blob/0db6222580aa8fe25d158392a8f3fb804cf8feb7/public/main.js#L50-L60
 getJSON.onclick = function() { 
   const xhr = new XMLHttpRequest(); 
   xhr.open('GET', '/5.json'); 
   xhr.onreadystatechange = () =>{ 
     if (xhr.readyState === 4 && xhr.status === 200) { 
       const json = JSON.parse(xhr.responseText); 
       console.log(json); 
     } 
   } 
   xhr.send(); 
 } 
```

#### 获取分页数据: `getPage()`
```js
// https://github.com/zkeq/jirengu_learn_08/blob/0db6222580aa8fe25d158392a8f3fb804cf8feb7/public/main.js#L62-L80
 let index = 1; 
 getPage.onclick = function() { 
   if (index >= 3) { 
     index = 1; 
   } 
   const xhr = new XMLHttpRequest(); 
   xhr.open('GET', `/page${index += 1}`); 
   xhr.onreadystatechange = () =>{ 
     if (xhr.readyState === 4 && xhr.status === 200) { 
       const array = JSON.parse(xhr.responseText); 
       array.forEach(item => { 
         const li = document.createElement('li'); 
         li.textContent = item.id 
         xxx.appendChild(li); 
       }) 
     } 
   } 
   xhr.send(); 
 } 
```

### 异步与 `promise`

![1](https://img.onmicrosoft.cn/2022-07-29/1.png)
![2](https://img.onmicrosoft.cn/2022-07-29/2.png)

- `参数会全部传给后面的函数`

```js
const array = ['1','2','3'].map(parseInt)
===
const array = ['1','2','3'].map((item, i, arr) => {
    return parseInt(item, i, arr)
    // parseInt("1", 0, arr) => 1
    // parseInt("2", 1, arr) => NaN
    // parseInt("3", 2, arr) => NaN
})
// 透传了

// 正确写法
const array = ['1','2','3'].map(item=>parseInt(item))
console.log(array)
```

![3](https://img.onmicrosoft.cn/2022-07-29/3.png)

改成 Promise

![3](https://img.onmicrosoft.cn/2022-07-29/4.png)
![3](https://img.onmicrosoft.cn/2022-07-29/5.png)
![3](https://img.onmicrosoft.cn/2022-07-29/6.png)

背下来这玩意

![3](https://img.onmicrosoft.cn/2022-07-29/7.png)

小节: `Promise`

![3](https://img.onmicrosoft.cn/2022-07-29/8.png)

- 文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise

