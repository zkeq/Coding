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

### transition (过渡)
#### 作用
- 补充中间帧

#### 语法
- `transition`: 属性名 时长 过渡方式 延迟
  - 属性名就是上下左右
  - 时长可以写秒 也可以写毫秒
  - 过渡方式有很多种，详情见 MDN 上面的数学曲线
  - 延迟就是停多长时间再执行，也可以 ms
- `transition`: `left 200ms linear`
- 可以用逗号分隔两个不同的属性
- `transition`: `left 200ms, top 400ms`
- 可以用 `all` 代表所有属性
- `transition`: `all 200ms`
- 过渡方式有: `linear` | `ease` | `ease-in` | `ease-out` | `ease-in-out` | `cubic-bezier` | `step-start` | `step-end` | `steps`, [具体含义](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 要靠数学知识
  - https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function

#### 注意：并不是所有属性都能过渡
- `display: none => block` 没法过渡
- 一般改成 `visibility: hidden => visible` （不要问为什么）
  - `display` 和 `visibility` 的区别自己搜一下
  - `opacity` 可以改变透明度过渡，但是一般在动画完成之后 `remove`
  - `ontransitionend` 
- `background` 颜色可以过渡吗？
  - 任何颜色都可以
- `opacity` 透明度可以过渡吗？
  - 可以，只要有规律就可以过渡的

#### 过渡必须要有起始
- 一般只有一次动画，或者两次
- 比如 `hover` 和非 `hover` 状态的过渡

#### 除了起始，还可以有中间点
##### 两种方法
1. 使用两字 `transform`
   - `.a === transform ===> .b`
   - `.b === transform ===> .c`
   - 如何知道到了中间点呢？
   - 用 `setTimeout` 或者监听 `transitionend` 事件
   - 示例：http://js.jirengu.com/buwah/1/edit?html,css,js,output
2. 使用 `animation`
   - 声明关键帧
   - 添加动画
   - 示例：http://js.jirengu.com/peran/1/edit?html,css,output
##### animation
```css
#demo.start{
  animation: xxx 1.5s;
}


@keyframes xxx {
  0% {
    transform: none;
  }
  66.66%{
    transform: translateX(200px);
  }
  100%{
    transform: translateX(200px) translateY(100px);
  }
}
```
- 如何让动画停在最后一帧
  - 搜索 css animation stop at end
  - [网友给出的答案](https://stackoverflow.com/a/12991203/1262580) 是加个 `forwards`
  - JSBin 演示： http://js.jirengu.com/lodoy/1/edit?html,css,output

##### `@keyframes` 完整语法

标准写法
- 搜搜 `keyframes MDN` 讲的很清楚+
  - https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
- 一种写法是 from to
- 另一种写法是百分数

![1](https://img.onmicrosoft.cn/2022-06-20/1.png)

##### animation

- https://developer.mozilla.org/en-US/docs/Web/CSS/animation

缩写语法
- `animation: 时长 | 过渡方式 | 延迟 | 次数 | 方向 |填充模式 |　是否暂停　｜　动画名;`
- 时长：`1s` 或者 `1000ms`
- 过渡方式：跟 `transition` 取值一样，如 `linear`
- 次数：`3` 或者 `2.4` 或者 `infinite`
  - `infinite` 无线的
- 方向： `reverse` | `alternate` | `alternate-reverse`
  - 反向 交替 交替反向
- 填充模式：`none` | `forwards` | `backwards` | `both`
- 是否暂停：`paused` | `running`
  - http://js.jirengu.com/peran/2/edit?html,css,output
- 以上所有属性都有对应的单独属性