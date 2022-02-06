---
title: Vue 初体验
tags: [基础语法]
description: 本节课主要学习了<br>Vue 的基本语法
date: 2022-02-04 17:17:45
categories: Vue
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/7.png
---

> 点击标题超链接可跳转到对应的html界面

## [01_Vue3的引入-CDN](https://icodeq.com/html/Vue/01_Vue3初体验/01_Vue3的引入-CDN.html)

![1](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/1.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div id="app">
        <h2>world</h2>
    </div>
    <script src="https://unpkg.zhimg.com/vue@3.0.11/dist/vue.global.js"></script>
    <script>
        const why = {
            template: '<h2>hello</h2>',
        }
        
        const app = Vue.createApp(why)
        app.mount("#app")
    </script>

</body>
</html>
```

## [02_Vue3的引入-local](https://icodeq.com/html/Vue/01_Vue3初体验/02_Vue3的引入-local.html)

![2](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/2.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="app"></div>

    <script src="../js/vue.js"></script>
    <script>
        Vue.createApp({
            template: '<h2>hello Vue.js! 你好</h2>',
        }).mount("#app")
    </script>

</body>
</html>
```

## [03_计数器案例-原生](https://icodeq.com/html/Vue/01_Vue3初体验/03_计数器案例-原生.html)

![3](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/3.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<h2 class="counter"></h2>
<button class="increment">+1</button>
<button class="decrement">-1</button>


<script>
    // 1.获取所有的元素
    const counterEl = document.querySelector('.counter');
    const incrementEl = document.querySelector('.increment');
    const decrementEl = document.querySelector('.decrement');

    // 2.定义变量
    let counter = 100;
    counterEl.innerText = counter;

    // 3.监听按钮的点击
    incrementEl.addEventListener('click', () => {
        counter++;
        counterEl.innerText = counter;
    });
    decrementEl.addEventListener('click', () => {
        counter--;
        counterEl.innerText = counter;
    });

</script>
</body>
</html>
```

## [04_计数器案例-Vue](https://icodeq.com/html/Vue/01_Vue3初体验/04_计数器案例-Vue.html)

![4](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/4.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="app"></div>

    <script src="../js/vue.js"></script>
    <script>
        Vue.createApp({
            template: `
            <div>
                <h2>{{message}}</h2>
                <h2>{{counter}}</h2>
                <button @click='increment'>+1</button>
                <button @click='decrement'>-1</button>   
            </div>
            `,                         
            data: function() {
                return {
                    counter: 10 ,
                    message: "hello Vue.js!"
                }
            },
            methods: {
                increment() { //语法糖 写法
                    this.counter++;
                    console.log("increment")
                    console.log(this.counter)
                },
                decrement: function() { //ES5 写法
                    this.counter--;
                    console.log("decrement")
                    console.log(this.counter)
                }
            }
        }).mount("#app")
</script>
</body>
</html>
```

## [05_template写法一](https://icodeq.com/html/Vue/01_Vue3初体验/05_template写法一.html)

![5](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/5.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="app"></div>

    <script type="x-template" id="code">
        <div>
            <h2>{{message}}</h2>
            <h2>{{counter}}</h2>
            <button @click='increment'>+1</button>
            <button @click='decrement'>-1</button>   
        </div>
    </script>

    <script src="../js/vue.js"></script>
    <script>
        Vue.createApp({
            template: '#code', // # 号开头的时候, 就是id. 不是class 会执行 querySelector(#why)
            data: function() {
                return {
                    counter: 100 ,
                    message: "hello Vue.js!"
                }
            },
            methods: {
                increment() { //语法糖 写法
                    this.counter++;
                    console.log("increment")
                    console.log(this.counter)
                },
                decrement: function() { //ES5 写法
                    this.counter--;
                    console.log("decrement")
                    console.log(this.counter)
                }
            }
        }).mount("#app")
</script>
</body>
</html>
```

## [06_template写法二](https://icodeq.com/html/Vue/01_Vue3初体验/06_template写法二.html)

![6](https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-02-04/6.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="app"></div>

    <template id="code">
        <div>
            <h2>{{message}}</h2>
            <h2>{{counter}}</h2>
            <button @click='increment'>+1</button>
            <button @click='decrement'>-1</button>   
        </div>
    </template>

    <!-- 可以用div 但是会渲染两边. 原始的数据会被保留 -->
    <!-- 也就是 code 里面的内容在解析的时候被显示一次 被 Vue 解析之后, 在 app 中又被渲染一次-->

    <script src="../js/vue.js"></script>
    <script>
        Vue.createApp({
            template: '#code', // # 号开头的时候, 就是id. 不是class 会执行 querySelector(#why)
            data: function() { // vue 2 中 也可以传入一个对象(虽然官方推荐是一个函数) [vue3 中不能传入对象, 否则会报错(只能传函数 返回一个对象)]
                return { 
                    counter: 100 ,
                    message: "hello Vue.js!"
                    // data 中的数据会被 vue 中劫持
                }
            },
            methods: { // 这里不可用箭头函数, 因为箭头函数中的 this 指向的是父组件, 而不是当前组件
                increment() { //语法糖 写法
                    this.counter++;
                    // this 这种就是指向 vue 实例
                    // 可以修改或者获取 , 可以直接访问
                    console.log("increment")
                    console.log(this.counter)
                },
                decrement: function() { //ES5 写法
                    this.counter--;
                    console.log("decrement")
                    console.log(this.counter)
                }
            }
        }).mount("#app")
</script>
</body>
</html>
```

