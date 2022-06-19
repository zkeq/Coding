---
title: 饥人谷前端 | CSS 动画
tags: [CSS]
description: 本节课主要学习了<br>CSS 动画 的 原理和基础知识。
date: 2022-06-18 08:30:54
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

### 动画

#### 定义
- 由许多静止的画面（帧）
- 以一定的速度（如每秒 30 张）连续播放时
- 肉眼因视觉残像产生错觉
- 而误以为是活动的画面

#### 概念
- 帧：每个静止的画面都叫帧
- 播放速度：每秒 24 帧（影视）或者每秒 30 帧（游戏）

### 一个最简单的例子
#### 将 div 从左往右移动
- [jsbin](http://js.jirengu.com/bagow/1/edit?html,js,output)

```javascript
var n = 1
var id = setInterval(() => {
  console.log(n)
  if (n <= 100) {
    demo.style.left = n / 100 * 300 + 'px'
    n = n + 1
  }else{
    clearInterval(id)
  }
}, 1000 / 30)
```
#### 原理
- 每过一段时间（用 `setinterval` 做到）
- 将 div 移动一小段距离
- 直到移动到目标地点
#### 注意性能
- 绿色表示重新绘制（`repaint`）了
- CSS 渲染过程依次包含 布局、绘制、合成
- 其中布局和绘制可能被忽略

### 前端高手不用 left 做动画
#### 用transform （变形）
- [jsbin](http://js.jirengu.com/lojiz/1/edit?html,css,js,output)

```css
#demo{
  width: 100px;
  height: 100px;
  border: 1px solid red;
  transition: all 1s linear;
}

#demo.end{
  transform: translateX(300px);
}
```
#### 原理
- `transform: translateX(0 => 300px)`
- 直接修改会被合成，需要等一会修改
- `transition` 过渡属性可以自动脑补中间帧

#### 注意性能
- 没有 repaint （重新绘制）
- 比改 left 性能好

### 浏览器的渲染原理
Google 团队写的文章(右上角中文)
- [渲染树构建、布局及绘制](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
- [渲染性能](https://developers.google.com/web/fundamentals/performance/rendering/)
- [使用 transform 来实现动画](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
查看 CSS 各属性触发什么
- [CSSTriggers.com](https://csstriggers.com/)

### 浏览器渲染过程
#### 步骤
- 根据 HTML 构建 HTML 树（`DOM`）
- 根据 CSS 构建 CSS 树（`CSSOM`）
- 将两棵树合并成一棵渲染树（`render tree`）
- `Layout` 布局（文档流、盒模型、计算大小和位置）
- `Paint` 绘制（把边框颜色、文字颜色、阴影等画出来）
- `Compose` 合成（根据层叠关系展示画面）
![1](https://img.onmicrosoft.cn/2022-06-18/1.png)

### 如何更新样式
#### 一般我们用 JS 来更新样式
- 比如 `div.stlye.background= 'red'`
- 比如 `div.stlye.display = 'none'`
- 比如 `div.classList.add('red')`
- 比如 `div.remove()` 直接删掉节点
#### 那么这些方法有什么不同吗？
- 有三种不同的渲染方式
- 详情看下一张 PPT

### 三种更新方式
![2](https://img.onmicrosoft.cn/2022-06-18/2.png)
1. 第一种， 全走
   - [`div.remove()`](http://js.jirengu.com/jagel/1/edit?html,css,js,output) 会触发当前消失，其他元素 `relayout`
2. 第二种，跳过 layout
   - [改变背景颜色](http://js.jirengu.com/jidam/1/edit?html,css,js,output)，直接 repaint + composite
3. 第三种，跳过 layout 和 paint
   - [改变 transform](http://js.jirengu.com/wusew/1), 只需 composite
   - 注意必须全屏查看效果，在 iframe 里看有问题

### 每一个属性到底会触发哪一种流程
- https://csstriggers.com/

### CSS 动画优化
#### 没什么技术含量
- 答案都在 [Google 写的文章](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)里，谁看完谁牛 X
#### JS 优化
- 使用 `requestAnimationFrame` 代替 `setTimeout` 或 `setInterval`
#### CSS 优化
- 使用 `will-change` 或 `translate`
#### 没错
- 完全就是死记硬背

### transform 完整介绍
- 你不知道去看 MDN 吗？
  - 他们充钱了
    - 哦，充钱了啊，那我还是讲解一下吧

#### transform
##### 四个常用功能
- 位移 `translate`
  - http://js.jirengu.com/xidiy
- 缩放 `scale`
- 旋转 `rotate`
- 倾斜 `skew`
##### 经验
- 一般都需要配合 `transition` 过渡
- `inline` 元素不支持 `transform` ，需要先变成 `block`

#### `transform` 之 `translate`
- 移动
##### 常用写法
- `translateX(<length-percentage>)`
- `translateY(<length-percentage>)`
- `translate(<length-percentage>,<length-percentage>?)`
- `translateZ(<length>)` 且父容器 `perspective`
- `translate3d(x, y, z)`
- [JSBin 演示](http://js.jirengu.com/xidiy/1/edit?html,css,output)
##### 经验
- 要学会看懂 MDN 的语法示例
- `translate(-50%, -50%)` 可做绝对定位元素的居中
  - http://js.jirengu.com/xeraf/edit?html,css,output
```CSS
/* 这个写法背下来，这是我们发现的写法 */
/* 绝对居中的完美答案 */
#demo {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}  
```

#### `transform` 之 `scale`
- 放大缩小
##### 常用写法
- `scaleX(<number>)`
- `scaleY(<number>)`
- `scale(<number>, <number>?)`
  - `?` 表示此属性可以不写
- [JSBin 演示](http://js.jirengu.com/jucal/1/edit?html,css,output)
##### 经验
- 用的较少，因为容易出现模糊

#### `transform` 之 `rotate`
- 旋转
- `deg` 度数 单位
#####  常用写法
- `rotate([ <angle> | <zero> ])`
- `rotateZ([ <angle> | <zero> ])`
- `rotateX([ <angle> | <zero> ])`
- `rotateY([ <angle> | <zero> ])`
- `rotate3D` 太复杂，无法用语言描述
  - https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate3d
- [JSBin 演示](http://js.jirengu.com/jiquq/1/edit?html,css,output)
##### 经验
- 一般用于 360 度旋转制作 `loading`
- 用到时再搜索 `rotate MDN` 看文档

#### `transform` 之 `skew`
- 倾斜
##### 常用写法
- `skewX([ <angle> | <zero> ])`
- `skewY([ <angle> | <zero> ])`
- `skew([ <angle> | <zero> ], [ <angle> | <zero> ]?)`
- [JSBin 演示](http://js.jirengu.com/tazer/1/edit?html,css,output)
##### 经验
- 用得较少
- 用到时再搜 `skew MDN` 文档

#### `transform` 多重效果
####　组合使用
- `transform: scale(0.5) translate(-100%, 100%);`
- `transform: none;` 取消所有

### 实践
#### 跳动的心，先给大家
- [JSBin](http://js.jirengu.com/nonud/1/edit?html,css,output)
#### 心得
- CSS 需要你有想象力，而不是逻辑
- CSS 给出的属性都很简单，但是可以组合得很复杂