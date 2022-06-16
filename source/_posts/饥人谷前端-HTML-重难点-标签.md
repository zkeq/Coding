---
title: 饥人谷前端 | HTML 重难点 标签
tags: [HTML]
description: 本节课主要学习了<br>HTML 重点标签
date: 2022-06-15 19:54:44
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
---

### 英语小课堂

| 英语        | 翻译       | 助记           | 英语         | 翻译     | 助记   |
| ----------- | ---------- | -------------- | ------------ | -------- | ------ |
| `hyper`     | 超级       | 害怕           | `blank`      | 空白     |        |
| `target`    | 目标       | 她给他         | `parent` (s) | 父母之一 | 盼望他 |
| `reference` | 引用       | `refer + ence` | `self`       | 自己     |        |
| `frame`     | 边框、框架 |                | `load`       | 加载     |        |
| `error`     | 错误       | 爱惹           | `canvas`     | 画布     |        |

### a 标签

- 特别常用
- 但是很多人不会用

#### 属性

- `href`
- `target`
- `download` （不大靠谱,很多浏览器不支持）
- `rel=noopener` （为了防止一个 `BUG`）

#### 作用

- 跳转外部页面跳转内部锚点
- 跳转内部锚点
- 跳转到邮箱

> 预览的时候 不要双击打开 `HTML`，要用` HTTP 服务器`打开。
>
> `http-server` 或者 `parcel `或者 VSCode 里面的` Live Server`

#### a 的 href 的取值

- 网址
  - https://google.com
  - http://google.com
  - //google.com （自动跟随协议网址）
- 路径
  - `/a/b/c `以及` a/b/c`
  - `index.html `以及` ./index.html`
- 伪协议
  - `javascript:` 代码;
  - `mailto: `邮箱
  - `tel: `电话号
- `id`
  - `href=#xxx`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p>10</p>
   <p id="test">10</p>
   <p>10</p>
   <p>10</p>

    <a href="https://bing.com" target="_blank">超链接</a>
    <a href="/a/b/c.html">c.html</a>

    <a href="./index.html">index.html</a>
    <a href="index.html">index.html</a>

    <a href="javascript:;alert(1);">Javascript 伪协议</a>
    <a href="javascript:;">空的伪协议</a>
    <!-- 用来做点击之后没有动作的 a 标签 -->

    <a href="#test">测试id</a>
    <a href="mailto:admin@icodeq.com">发邮件给 Zkeq</a>

</body>
</html>
```

#### a 的 target 的取值

- 内置名字
  - `_blank`
  - `_top`
  - `_parent`
  - `_self`
- 程序员命名
  - `window` 的 name
  - `iframe` 的 name

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
    
    <a href="https://bing.com" target="_blank">bing _blank</a>
    <!-- 在新标签页 -->
    <a href="https://bing.com" target="_self">bing _self</a>
    <!-- 在 iframe 内打开 -->
    <a href="https://bing.com" target="_parent">bing _self</a>
    <!-- 在上一层级的 iframe 内打开 -->
    <a href="https://bing.com" target="_top">bing</a> 
    <!-- top 是在最顶层打开 -->
    <a href="https://bing.com" target="xxx">bing</a> 
    <!-- 
        如果有一个叫 xxx 的窗口 那么就在那个窗口打开它
        如果没有叫 xxx 的窗口，那么就创建它
     -->


    <hr>

    <a href="https://bing.com" target="bing"> bing </a>
    <a href="https://baidu.com" target="baidu"> baidu </a>

    <hr>
    <iframe src="" name=bing></iframe>
    <hr>
    <iframe src="" name=baidu></iframe>

</body>
</html>
```

#### a 的 download

- 作用
  - 不是打开页面，而是下载页面
- 问题
  - 不是所有浏览器都支持，尤其是手机浏览器可能不支持

### iframe 标签

- 内嵌窗口
- 已经很少使用了，还有些老系统在用

### table 标签

- 表格
- `HTML` 有 **超强纠错** 的功能
- 各个标签 与书写的顺序无关，一定是 头 身体 脚

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
    
    <table>
        <thead>
            <tr>
                <th>英语</th> <!-- 表头  -->
                <th>翻译</th>
            </tr> <!-- table row -->
        </thead>
        <tbody>
            <tr>
                <td>hyper</td>
                <td>超级</td>
            </tr>  
            <tr>
                <td>target</td>
                <td>目标</td>
            </tr> 
            <tr>
                <td>reference</td>
                <td>引用</td>
            </tr> 
        </tbody>
        <tfoot>
            <tr>
                <td>空</td>
                <td>空</td>
            </tr>  
        </tfoot>
    </table>

</body>
</html>
```

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
    
    <table>
        <thead>
            <tr>
                <th></th>
                <th>小红</th>
                <th>小明</th>
                <th>小颖</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>数学</th>
                <td>61</td>
                <td>91</td>
                <td>85</td>
            </tr>
            <tr>
                <th>语文</th>
                <td>61</td>
                <td>91</td>
                <td>85</td>
            </tr>
            <tr>
                <th>英语</th>
                <td>61</td>
                <td>91</td>
                <td>85</td>
            </tr>
        </tbody>

        <tfoot>
            <tr>
                <th>总分</th>
                <td>200</td>
                <td>200</td>
                <td>200</td>
            </tr>
        </tfoot>
    </table>

</body>
</html>
```

#### 相关的标签

- `table`
- `thead`
- `tbody`
- `tfoot`
- `tr`
- `td`
- `th`

#### 相关的样式

- `table-layout` // 列宽的计算算法
- `border-collapse`  // 是否合并各个单元格
- `border-spacing` // 单元格的空隙（调0）

### img 标签

- 图片

#### 作用

- 发出 `get` 请求，展示一张图片

#### 属性

- `alt / height / width / src`
- 宽高只写一个的时候，另一个会自适应
- （永远不要让图片变形）

#### 事件

- `onload / onerror` （监听图片是否加载成功）

#### 响应式

- `max-width: 100%`

#### 可替换元素

- 考试可能会问，被问概率 30%

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
    <img id="xxx" width="400" src="https://img.onmicrosoft.cn/2022-06-15/5.png" alt="一只狗子">
    <script>
        xxx.onload = function() {
            console.log("图片加载成功")
        };
        xxx.onerror = function() {
            console.log("图片加载失败");
            xxx.scr = "/404.png";
        };
    </script>
</body>
</html>
```

### form 标签

#### 作用

- 发 get 或 post 请求，然后刷新页面

#### 属性

- `action` / `autocomplete` / `method` / `target`

#### 事件

- `onsubmit`
  - 点击提交会触发

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/xxx" method="POST" autocomplete="on" target="a">
        <!-- 必须要有个 type="submit" 的按钮！ -->
      <input type="text" name="username"/>
      <input type="submit" value="冲冲冲"/>
      <button type="submit"><strong>啊gogogo</strong></button>
      <!-- 
        区别：input 里面不能有任何内容,只能有纯文本
             button 里面可以有任何内容
        -->
    </form>

    <iframe name="a" src="a-target.html" frameborder="0"></iframe>
  </body>
</html>
```

### input 标签

#### 作用

- 让用户输入内容

#### 属性

- 类型 type: `button `/ `checkbox `/ `email `/ `file `/ `hidden `/ `number `/ `password `/ `radio `/ `search `/ `submit `/ `tel `/ `text`
- 其他 `name `/ `autofocus `/ `checked `/ `disabled `/ `maxlength `/ `pattern `/ `value `/ `placeholder`
- 只要出现 disabled / ~ 属性 就不可输入，无论赋值是什么值都不可输入

#### 事件

- `onchange `/ `onfocus `/ `onblur `

#### 验证器

- `HTML5 新增功能`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/xxx" method="POST" autocomplete="on" target="a">
        <!-- 必须要有个 type="submit" 的按钮！ -->
      <input type="text" name="username" required/>
        <!-- 必须要有数据才能提交 -->
      <hr />
      <input type="color" />
      <hr />
      <input type="password" />
      <hr />
      <input name=gander type="radio" />男 <input name=gander type="radio" /> 女
      <hr />
      <input name="hobby" type="checkbox" /> 唱
      <input name="hobby" type="checkbox" /> 跳
      <input name="hobby" type="checkbox" /> rap
      <input name="hobby" type="checkbox" /> 篮球
      <hr />
      <input type="file" />
      <input type="file" multiple/>
      <hr />
      看不见我吧：<input type="hidden" />
      <!-- 用户看不见的，让机器自动填的部分，例如用户的id -->
      <hr />
      <textarea style="resize: none; width: 50%; height: 300px;">

      </textarea>
      <hr />
      <select>
        <option value="">请选择</option>
        <option value="1">星期1</option>
        <option value="2">星期2</option>
        <option value="3">星期3</option>
        <option value="4">星期4</option>
      </select>


      <hr />
      <input name="hobby" type="submit" value="冲冲冲"/>
      <button type="submit"><strong>啊gogogo</strong></button>
      <!-- 
        区别：input 里面不能有任何内容,只能有纯文本
             button 里面可以有任何内容
        -->
    </form>

    <iframe name="a" src="a-target.html" frameborder="0"></iframe>
  </body>
</html>

```

#### 其他输入标签

##### 标签

- `select + option`
- `textarea`
- `label`

##### 注意事项

- 一般不监听 `input  `的 `click `事件
- `form `里面的 `input `要有 `name`
- `form `里要放一个` type=submit` 才能触发 `submit `事件

### 其他标签

#### 标签

- `video`
- `audio`
- `canvas`
- `svg`

#### 注意事项

- 这些标签的兼容性一定要查看文档
- 后续我们会在 `JS `课程里专门讲这些标签
