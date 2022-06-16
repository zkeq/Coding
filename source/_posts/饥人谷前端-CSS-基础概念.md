---
title: 饥人谷前端 | CSS 基础概念
tags: [CSS]
description: 本节课主要学习了<br>CSS 的 基础概念
date: 2022-06-16 14:23:15
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

## 体系化学习CSS

### CSS的历史

- 李爵士的挪威同事赖先生首先 [**提出 CSS**]()
- Hakon Wium Lie

### CSS 的 牛X之处在哪里？

- **层叠** 样式`表`

### 层叠指什么？

- 样式层叠
  - 可以多次对同一选择器进行样式声明

- 选择器层叠
  - 可以用不同选择器对同一个元素进行样式声明

- 文件层叠
  - 可以用多个文件进行层叠

- 这些特性使得 CSS 极度灵活
  - 这也为 CSS 后来被吐槽留下了隐患

### CSS 的版本

| 版本     | 时间            | 重点                               |
| -------- | --------------- | ---------------------------------- |
| `CSS1`   | 1996 年         | 不用管                             |
| `CSS2`   | 1998 年         | 添加定位、z-index、meadia，不用管  |
| `CSS2.1` | 2004-2011年     | 使用最广泛的版本（`IE支持`）       |
| `CSS3`   | 1999 年开始起草 | 现代版本，分模块（`IE8 部分支持`） |
| `CSS4*`  | 分模块升级      | (每个模块自己升级 不存在 CSS4)     |

### 我怎么知道哪些浏览器支持哪些特性呢？

- 方法一：几十种浏览器全部跑一遍

- 方法二：使用 `caniuse.com`

#### caniuse.com 建议收藏

### CSS是艺术

- 就像画画、折纸

- 需要用感性思维来理解 CSS

#### 不要用理性思维

- 即 不要问 【为什么会这样】
- 而是说 【原来是这样】
- 浏览器说是什么样，就是什么样
- 当然有极少情况是浏览器出错了

> 所见即所得

### 体系化学习

- 学一门语言必须学会什么
  - 语法（怎么写代码）
  - 如何调试（怎么知道自己代码写错了）
  - 在哪查资料（其实就是为了抄代码）
  - 标准制定者是谁
- 如何学
  - `Copy` - 抄文档，抄老师
  - `Run` - 放在自己的机器上运行成功
  - `Modify` - 加入一点自己的想法，然后重新运行

### 语法超级简单

#### 语法一：样式语法

```css
选择器 {
	属性名：属性值;
	/* 注释 */	
}
```

##### 注意事项

- 所以符号都是英文符号，如果写错了，浏览器会警告
- 区分大小写，`a` 和 `A` 是不同的东西
- 没有 // 注释
- 最后一个分号可以省略，但 **建议不要省略**
- 那我怎么知道自己写没写错呢？一会说

#### 语法二：at 语法

```css
@charset "UTF-8";
@import url(2.css);
@media (min-width: 100px) and (max-width: 200px) {
	语法1
}
```

##### 注意事项

- `@charset` 必须放在第一行
- 前两个 `at` 语法必须以分号 ; 结尾
- `@media` 语法会单独教学
- `charset` 是字符集的意思，但 `UTF-8` 是字符集编码 `encoding`，这是历史遗留问题

| 字符集(chaset) | 编码（实际 css 里面的 charset 指定的是这个玩意） |
| -------------- | ------------------------------------------------ |
| `ASCII`        | `ASCII`                                          |
| `GB2312`       | `GB2312`                                         |
| `GBK`          | `GBK`                                            |
| `Unicode`      | `UTF-8 UTF-16 UTF-32`                            |

### 如何调试 CSS

#### 方法

- 使用 `W3C 验证器`（在线 / 命令行工具）不用试了
- 使用 VSCode 看颜色
- 使用 `WebStrom` 看颜色
- 使用开发者工具看警告

#### 符合使用开发者工具

- 找到你脑中的`标签`
- 看它是否有`选择器`
- 看它的样式`是否被划掉`
- 看它的样式`是否有警告`

### Border 调试法

- `border: 1px solid red;`

#### 步骤

- 怀疑某个元素有问题
- 就给这个元素加 `border`
- `border` 没出现？说明悬着器错了或者语法错了
- `border` 出现了？看看边界是否符合预期
- `bug` 解决了才可以把 `border` 删掉

#### 记住

- `CSS` 的 `border` 调试法
- 就相当于 `JS` 的 `log` 调试法
- 我会在每节课重复这个调试法

### 新人常见错误

#### 低级错误

- 选择器拼写错误
- 属性名拼写错误
- 属性值拼写错误
- 大小写错误
- 没写分号
- 中文冒号
- 没写反花括号
- 没加单位

#### 非低级错误

- 没有非低级错误

### 在哪查资料

#### 网站推荐

- `Google` 搜索关键词加 `MDN`
- `CSS tricks` （英文）
- 张鑫旭的博客

#### 书籍推荐

- 不推荐买任何书
- `CSS` 和 `HTML` 一样，以练为主

### 在哪搜练习素材

#### PSD

- Freepik 搜索 `PSD web`
- 如果下载慢，就把域名加入到 FQ插件
- 中文免费 `PSD` 网站较少，需要多搜一下
- `365PSD` 里的 UI套件 还行

#### 效果图（不支持下载）

- `dribbble.com` 顶级设计师社区
- 可以用肉眼模仿它

#### 商业网站

- 直接模仿你常去的网站

### 不要沉迷于临摹

- 每个类型的临摹一两个即可
- `PC 网站`、`手机网站`、`UI套件` 再多无益

### 标准制定者是谁

- W3C
  - 搜索 CSS spec 可以找到 CSS 最新标准
  - 没人能看完它
  - 你可以看看 CSS 2.1  标准 的 中文版

## 文档流

- Normal Flow

#### 基本概念

- 要理解几个重要的概念
  - 文档流 Normal Flow
  - 块、内联、内联块
  - margin 合并
  - 两种盒模型（border-box 更符合人类思维）

![1](https://img.onmicrosoft.cn/2022-06-16/1.png)

- 从左到右：内联元素
- 从上到下：`block` 元素
- 元素不要分为内联元素和块级元素，这些是由元素的属性决定的（也就是说可以 `inline` `block` 随时指定）

#### 文档流的详细属性

##### 流动方向

- `inline` 元素从左到右，到达最右边才会换行
- `block` 元素从上到下，每一个都另起一行
- `inline-block` 也是从左到右，但是到达最后的时候 `不会把自己分成两块`

##### 宽度

- `inline` 宽度为内部 `inline` 元素的和，不能用 `width` 指定
- `block` 默认自动计算宽度，可用 `width` 指定
- `inline-block` 结合前两者特点，可用 `width`

##### 高度

- `inline` 高度由 `line-height` 间接确定，跟 `height` 无关
- `block` 高度由 `内部文档流元素` 决定，可以设 `height`
- `inline-block` 跟 `block` 类似，可以设置 `height`

> `inline` 和 `inline-block` 相似但又不同的特点
>
> - `inline-block` 不会出现元素断开的情况
>
> ![2](https://img.onmicrosoft.cn/2022-06-16/2.png)

> `span` 的宽度是由其中的所有内联元素的宽度总和决定的
> `span` 元素不接受宽度

> `span` 的宽度是由其中的所有内联元素的宽度总和决定的
> `span` 元素不接受宽度

> 不要在 `display` 为 `inline` 里面加 `display` 为 `block` 的元素

> `div` 的宽度为占满全行 但不是 `100%`
> 可以指定 `div` 的宽度
> 如果不写的话 宽度为 `auto` 而不是 `100%`
>
> 永远不要写 宽度 100%，border 会撑大....


![3](https://img.onmicrosoft.cn/2022-06-16/3.png)

 相关代码：

- [ inline 和 block-inline (jirengu.com)](http://js.jirengu.com/hoxujukezu/8/edit)

- [span的高度确定依据 (jirengu.com)](http://js.jirengu.com/zogawidite/10/edit)
- [改一下字体 就多一像素？(jirengu.com)](http://js.jirengu.com/hayowarapi/3/edit)
  - [深入理解 CSS：字体度量、line-height 和 vertical-align - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/25808995)
  - 可以固定 div 的高度就没事了
  - 相关概念：行盒

- [脱离文档流 (jirengu.com)](http://js.jirengu.com/vibuwidomu/8/edit)

> 如果 div 里面什么都没有 那么 div 的高度为 0
>
> 相关代码 ：[溢出相关](http://js.jirengu.com/sigev/11/edit)
>
> - 如果有滚动条，那么内联元素只在横向第一屏显示 后面的留空，不会跑到滚动条右边

### overflow 溢出

#### 当内容大于容器时

- 等内容的宽度或高度大于容器的，会溢出
- 可用 `overflow` 来设置是否显示滚动条
- `auto` 是灵活设置
- `scroll` 是永远显示
- `hidden` 是直接隐藏溢出部分
- `visible` 是直接显示溢出部分
- `overflow` 可以分为 `overflow-x` 和 `overflow-y`

### 脱离文档流

#### 回忆一下

- block 高度是由内部文档流元素决定，可以设置 height 
- 这句话的意思是不是说，有些元素可以不在文档流中

#### 哪些元素可以脱离文档流

- `float`
- `postion: absolute / fixed`

#### 怎么让元素不脱离文档流

- 不要用上面属性不就不脱离了

[相关代码](http://js.jirengu.com/daviv/1/edit)
<a class="jsbin-embed" href="http://js.jirengu.com/daviv/1/embed">JS Bin</a><script src="http://js.jirengu.com/js/embed.js"></script>