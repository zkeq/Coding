---
title: Python 线程
tags: [进程与线程]
description: 本节课主要学习了<br>线程的基础知识
date: 2021-11-13 22:53:13
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-13/3.png
---

### 线程

> Python学累了,想学Java html js vue Tailwindcss 小程序  c4d ae pr 了.

#### 什么是线程

- 进程吸收资源
- 传递给线程执行业务逻辑

#### 线程与进程的关系

- 吃饭获得能量和营养(进程), 之后大脑执行逻辑(线程)
- 进程提供线程执行程序的前置要求,线程在重组的资源配备下,去执行程序

#### 多线程

- 开启一个浏览器后,从浏览器(主进程)中创建出多个线程来开启多个页面

#### 多线程的执行方式

![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-13/1.jpg)

> ##### 一、什么是线程
>
> 线程（Thread）是操作系统最小的执行单元，进程至少由一个线程组成。如何调度进程和线程，完全由操作系统决定，程序自己不能决定什么时候执行，执行多长时间。有些进程还不止同时干一件事，比如微信，它可以同时进行语音、发文字、浏览信息等事情。
>
> 简单理解：在一个进程内部，要同时干多件事，就需要同时运行多个“子任务”，我们把进程内的这些“子任务”称为线程。
>
> ##### 二、怎样的任务算一个线程
>
> 进程被运行后算是一个线程，进程是不运行的，线程才会运行，而一个进程有多个线程就涉及到进程有多少可以被cpu单独调用的模块，这个调用的模块可以通过手动创建线程来建立。
>
> ##### 三、在python中如何创建线程
>
> - 使用的模块：`threading`
>
> - 创建的方法：`threading.Thread(…)`
>
> 代码如下：
>
> ![2](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-13/2.jpg)
