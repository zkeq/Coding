---
title: 寒假提升 ｜ Day1 软件开发-HTML结构-元素剖析
date: 2022-12-12 16:46:48
tags: [寒假提升]
categories: [寒假提升]
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
---

> 今日必做任务：截图 Vscode 的扩展栏
>
> 要求：
>
> 1. 要求看到页面为中文
> 2. 要求看到必装的6种插件必须安装（已经安装的插件个数大于等于6即可）
>
> 可选任务：
>
> - 完成今日上课代码（5个）
> - 完成今日课堂练习（10个）

>务必下载！！
>
>今日的代码和讲义 以及思维导图：[【点击此链接下载 Day01.zip】](https://adobe.onmicrosoft.cn/d/Front-end_Refinement/22%E8%AE%A16%20%E5%89%8D%E7%AB%AF%20%E5%AF%92%E5%81%87%E6%8F%90%E5%8D%87%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99/%E8%B5%84%E6%96%99/01_%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3HTML%2BCSS%E5%9F%BA%E7%A1%80%E5%8E%9F%E7%90%86/%E5%88%86%E5%A4%A9%E6%95%B0%E7%89%88%E6%9C%AC/Day01.zip?sign=crfm59YjLlV8Fo3mHP3q5je3UwzhBwM5zNmtL89qT10=:0)

![](https://img.onmicrosoft.cn/2022/12/12/a86e9a3e-02c0-4799-b8cc-a6ceb02f1971.png)

今日课堂练习（带着以下问题学习效果更佳）：

```
- 一. 说出软件和应用程序的区别？（自己整理）
- 二. 说出一个完善的应用系统包含哪些环节？
- 三. 整理出网页从编写到浏览器显示的整个过程（重要）。
- 四. 服务器是什么？说出你的理解
- 五. 网页的三大组成部分是哪些？分别说出他们的作用。
- 六. 浏览器内核是什么？有哪些常见的浏览器内核？
- 七. 手动编写出HTML页面的结构（不利用开发工具提示）
- 八. 元素的结构是什么？有哪些单标签元素、双标签元素？
- 九. 元素之间有哪些关系？写出一个例子，并且说明他们的关系。
- 十. 注释的作用，HTML的注释如何编写。
```

### 一、邂逅前端开发

- 自我介绍、课前提醒
- 软件开发和程序员
- 前端开发整体概览
- 前端技术发展路线
- 学前答疑、学习建议

> 了解真相，你才能获得真正的自由

#### 课前提醒

![](https://img.onmicrosoft.cn/2022/12/12/903fe139-248e-4fb0-b198-033d61984301.png)

#### 1.1 软件是什么？

![image-20221212171545368](https://img.onmicrosoft.cn/2022/12/12/a6fdc98e-ef6b-4e30-9e64-af52a7a50978.png)

##### 软件的专业定义

![image-20221212171838598](https://img.onmicrosoft.cn/2022/12/12/5e11efae-a49b-4803-8074-8b89ab3f9adf.png)

##### 软件开发和应用程序开发有什么区别？

![](https://img.onmicrosoft.cn/2022/12/12/433663a7-0263-4e04-9366-f0886e38a676.png)

#### 1.2 完善的应用程序（网易云音乐为例）

![](https://img.onmicrosoft.cn/2022/12/12/9a36de8c-f6ef-43d5-9d9b-9e370fe836f8.png)

#### 1.3 前端开发工程师

![](https://img.onmicrosoft.cn/2022/12/12/8dfdcf1b-ef6d-4e57-b89e-740df49ad106.png)

##### 前端行业发展怎么样

![](https://img.onmicrosoft.cn/2022/12/12/2ed61a0f-0b6d-4c9f-a571-59f479aea5d0.png)

##### 技术发展线路

![](https://img.onmicrosoft.cn/2022/12/12/71670379-cd21-47d6-b5bd-eb80bd791088.png)

![](https://img.onmicrosoft.cn/2022/12/12/36ae8bd8-a1bc-4dda-a0dc-063f5e8b2d0c.png)

##### 体系课架构

![](https://img.onmicrosoft.cn/2022/12/12/0eceec42-a71c-415a-b064-59bf9b78cf3c.png)

##### 学前疑惑解答

![](https://img.onmicrosoft.cn/2022/12/12/938c2d68-6417-48fd-baee-e065320c40e5.png)

#### 1.4 学习方法、学习建议

![](https://img.onmicrosoft.cn/2022/12/12/596e0838-70b8-46a4-8446-2b05b8b91cf2.png)

##### 学习技术也是为了解决问题的

![](https://img.onmicrosoft.cn/2022/12/12/61e0ce2f-88f5-48b6-b4a9-3efe12462645.png)

##### 课程讲授的方式

![image-20221212185119864](/Users/zkeq/Library/Application Support/typora-user-images/image-20221212185119864.png)

### 邂逅Web开发

```
电脑配置、推荐软件
网站和网页的关系
网页的显示过程
网页的组成部分
浏览器和浏览器内
```

#### 2.1 **电脑配置 – 显示隐藏文件和扩展名**

![](https://img.onmicrosoft.cn/2022/12/12/3f9c5906-916f-4766-b495-981297655ff8.png)

##### 推荐安装的软件

- Chrome浏览器:开发必备浏览器
- https://www.google.cn/chrome/index.html
- VSCode编辑器:开发推荐编辑器(编写代码) n https://code.visualstudio.com/
- Xmind Zen思维导图:思维导图笔记 n https://www.xmind.cn/
- Typora: markdown笔记软件 p 见资料分享中

#### 2.2 认识网页和网站

![](https://img.onmicrosoft.cn/2022/12/12/561963cf-ba6b-4968-9e36-4dc7ce8850b3.png)

![](https://img.onmicrosoft.cn/2022/12/12/770c592c-9e42-4316-8187-a11f37f1ec0d.png)

##### **网页的显示过程 – 用户角度**

1. 用户在浏览器输入一个网站;

2. 浏览器会找到对应的服务器地址，请求静态资源(可以存放在世界上任何一个地方); 

3. 服务器返回静态资源给浏览器;
4. 浏览器对静态资源进行解析和展示;

![](https://img.onmicrosoft.cn/2022/12/12/d5139aac-76d2-4918-9b00-c4067c982745.png)

##### **网页的显示过程 – 前端工程师**

1. 开发项目(HTML/CSS/JavaScript/Vue/React) 
2. 打包、部署项目到服务器里面

![](https://img.onmicrosoft.cn/2022/12/12/5d96a280-72cc-4db6-8547-5494d44dc14d.png)

##### 服务器是什么?

- 我们日常生活接触到的基本都属于客户端、前端的内容:
  - 比如浏览器、微信、QQ、小程序;
- 我们知道自己的手机并不可能存放哪些多的数据和资源:
  - 比如你用《网易云听音乐》，音乐数据大部分都是存在“服务器”中的;
- 那么服务到底是什么呢?
  - 服务器本质上也是一台类似于你电脑一样的主机; 
  - 但是这个主机有几个特点:
    - 二十四小时不关机的(稳定运行);
    - 没有显示器的;
    - 一般装的是Linux操作系统(比如centos);
- 那么我以后到公司是不是就看得见服务器了呢?
  - 目前公司大部分用的是云服务器(比如阿里云、腾讯云、华为云);

<img src="https://img.onmicrosoft.cn/2022/12/12/78ba6720-3540-4f78-9a83-464f1b5c435a.png" style="zoom:33%;" />

##### 世界上第一个网页

- 上世纪90年代，**Berners-Lee**上线了世界上第一个网站: 
  - http://info.cern.ch/hypertext/WWW/TheProject.html

![](https://img.onmicrosoft.cn/2022/12/12/f431147c-82c2-4c08-94ea-133fcde52299.png)

- 虽然目前我们会认为这个网页简单到不值一提，但是在当时它的发明是**“天才之作”**。

##### 现代的网页已经非常复杂

![](https://img.onmicrosoft.cn/2022/12/12/c33461b5-371c-45ad-9bf0-ffc6ba14b475.png)

#### 2.3 网页的组成

- 那么网页是由什么开发出来的呢?
  - 阶段一:HTML 元素;
  - 阶段二:HTML 元素 + CSS 样式; 
  - 阶段三:HTML 元素 + CSS 样式 + JavaScript 语言;

![](https://img.onmicrosoft.cn/2022/12/12/37a57905-0847-48c7-9de9-70853a91eafe.png)

##### 网页的组成

![](https://img.onmicrosoft.cn/2022/12/12/2ac74e90-0fd1-471c-82e2-5632dcea7447.png)

![](https://img.onmicrosoft.cn/2022/12/12/58fe7d3d-ed30-43ed-941f-a39728c6c006.png)

##### 网页源代码的角度

![](https://img.onmicrosoft.cn/2022/12/12/aea45d88-d7be-4530-95ea-72222e1b6f0a.png)

##### 网页开发的角度

![](https://img.onmicrosoft.cn/2022/12/12/9ae25a96-b008-42ef-b76d-bbe590c128d5.png)

##### 浏览器的作用

- 我们已经明确知道了**网页的组成部分**:**HTML + CSS + JavaScript**。

- 那么这些看起来**枯燥的代码**，是如何**被渲染成多彩的网页**呢? 
  - 我们知道是通过浏览器来完成;
- 浏览器最核心的部分其实是 **“浏览器内核”**;

![](https://img.onmicrosoft.cn/2022/12/12/41009fee-77f4-4669-9263-c174d5745f57.png)

#### 2.4 浏览器的渲染引擎

- 浏览器最核心的部分是渲染引擎(Rendering Engine)，一般也称为**“****浏览器内核****”**
  - 负责解析网页语法，并渲染(显示)网页 

- 常见的浏览器有很多:

![](https://img.onmicrosoft.cn/2022/12/12/e9fe2762-89df-4a1a-b557-6ae7daf051de.png)

- 课堂上必须安装的浏览器:Chrome 浏览器(所有讲解也会基于这个浏览器)

##### 不同浏览器的内核

-  常见的浏览器内核有
  - Trident ( 三叉戟):IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器; 
  - Gecko( 壁虎) :Mozilla Firefox;
  - Presto(急板乐曲)-> Blink (眨眼):Opera
  - Webkit :Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器(Android、iOS) 
  - Webkit -> Blink :Google Chrome

- 不同的浏览器内核有不同的解析、渲染规则，所以同一网页在不同内核的浏览器中的渲染效果也可能不同。

<img src="https://img.onmicrosoft.cn/2022/12/12/70285880-0f48-4463-b138-84a87c647f6a.png" style="zoom:50%;" />

### MarkDown 的基本用法

- 软件的下载和安装
- 常用语法的书写

![](https://img.onmicrosoft.cn/2022/12/12/eff86aad-50df-4c4b-b84b-6753f9496a0b.png)

> 以上为上午的课程部分

## 二. 开发自己的第一个网页

### 2.1. 记事本开发网页

![](https://img.onmicrosoft.cn/2022/12/12/93f9293c-8e41-429f-bc39-d53fe1bdc21b.png)

### 2.2. 对网页进行补充

* 增加标记 -> 元素 -> 浏览器 -> 渲染对应的效果
* 增加网页的结构
  * html
    * head
      * title
    * body 
      * h1
      * p
      * div
      * span

#### 案例 – 显示一条新闻

![](https://img.onmicrosoft.cn/2022/12/12/85c59c87-5aed-47cc-8dfa-278c05f15ffc.png)

### 2.3. HTML语言

* 超文本标记语言
  * 为什么表标记语言？
  * 超文本：图片、音频、视频、超链接

#### HTML的简介

![](https://img.onmicrosoft.cn/2022/12/12/315c36cc-7e32-4578-98b5-f29f6044c175.png)

#### HTML文件的特点 – 扩展名(后缀名)

![](https://img.onmicrosoft.cn/2022/12/12/64518630-123d-4fc8-a1c6-8fbc1c806620.png)

#### HTML文件的特点 – 结构

![](https://img.onmicrosoft.cn/2022/12/12/dc982ce2-bc87-4d9b-a443-ac823e88ee4a.png)

#### 改进自己的网页

![](https://img.onmicrosoft.cn/2022/12/12/bd8d32f3-3175-4b08-8442-e41390df1736.png)

### 2.4. 开发工具VSCode

* 安装
* 安装插件
* 配置

![](https://img.onmicrosoft.cn/2022/12/12/5245ea37-febb-433e-8b66-d319bf36be92.png)

#### VSCode工具安装（重点！）

-  **VSCode编辑器下载-安装**:https://code.visualstudio.com/

- **安装插件(增加功能)**:右侧图标最后一项，Extensions，查找需要的插件(联网) 

  - 中文插件: Chinese
  - 颜色主题: atom one dark
  - 文件夹图标: VSCode Great Icons

  - 在浏览器中打开网页:open in browser、Live Sever 
  -  自动重命名标签:auto rename tag

- VSCode的配置:
  - Auto Save 自动保存
  - Font Size 修改代码字体大小
  - Word Wrap 代码自动换行
  - Render Whitespace 空格的渲染方式(个人推荐) 
  - Tab Size 代码缩进

- 推荐 2 个空格 (公司开发项目基本都是 2 个空格)

### 2.5. 剖析元素结构

* 开始标签
* 结束标签
* 内容
* 属性
* 元素的嵌套

#### 认识元素

![](https://img.onmicrosoft.cn/2022/12/12/e3807187-1b0e-44a1-b4c3-bb4406129c46.png)

#### 元素的组成

![](https://img.onmicrosoft.cn/2022/12/12/28a0c399-1d78-4640-ad97-f8e040b5c623.png)

#### 元素的属性

![](https://img.onmicrosoft.cn/2022/12/12/476521d8-402a-47a2-8e1c-508507706c72.png)

#### 属性的分类

![](https://img.onmicrosoft.cn/2022/12/12/49258727-b7a0-4c5b-8786-41b7fcca603d.png)

#### 单标签元素 – 双标签元素

![](https://img.onmicrosoft.cn/2022/12/12/109ecf6b-ba07-42f7-a439-2acdff8a2245.png)

#### 元素的结构总结（重点）

![](https://img.onmicrosoft.cn/2022/12/12/2f7b4cc7-7137-4eed-9096-daf61c5b4d73.png)

#### 元素的嵌套关系

![](https://img.onmicrosoft.cn/2022/12/12/4ece4bd7-4ddb-4429-9330-8a1bc7516537.png)

### 2.6. HTML注释

* 理解注释的作用
* HTML注释的编写方法
  * ctrl + /

#### 为什么需要注释?

![](https://img.onmicrosoft.cn/2022/12/12/61205d84-6eb9-48c7-8374-e855e2c41d76.png)

#### HTML的注释

![](https://img.onmicrosoft.cn/2022/12/12/e3c43cd6-919e-4764-a4e8-c5011e8fb369.png)
