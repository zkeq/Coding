---
title: 饥人谷前端 | CSS 定位
tags: [CSS]
description: 本节课主要学习了<br>CSS 定位
date: 2022-06-17 16:31:58
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
> 布局是屏幕平面上的
> 
> 定位是 **垂直于屏幕** 的

还得从 文档流 和 盒模型开始说起

### 复习一下盒模型（见图）
![13](https://img.onmicrosoft.cn/2022-06-17/13.png)

- 背景颜色在 border 的外边距

### 问两个问题

#### 背景的范围是从哪到哪？
- A. `border` 内边沿围成的区域
- B. `border` 外边沿围成的区域
- 如何验证自己的猜想？border 半透明调试

#### 从左边看一个 div，是什么样子？
- `background` 在文字的后面
- 然后呢？
  - 文字在 `border` 上面 `border` 在 `background` 上面
- 如何验证自己的猜想？[用代码证明](http://js.jirengu.co m/meriv/1/edit?html,css,output) 即可

### 一个 DIV 的分层
![14](https://img.onmicrosoft.cn/2022-06-17/14.png)
![15](https://img.onmicrosoft.cn/2022-06-17/15.png)

- 不管文字在哪 都是后出现的盖住先出现的

浮动元素脱离文档流
- 其实就是浮起来了一点点

### 新属性 - position
#### position
- `static` 默认值，待在文档流里
- `relative` 相对定位，升起来，但不脱离文档流
  - 占的位置不变 只是显示的地方跟原来的有偏移
- `absolute` 绝对定位，定位基准是祖先里的非 `static`
- `fixed` 固定定位，定位基准是 `viewpoint （有诈）`
- `sticky` 粘性定位，不好描述直接举例

#### 经验
- 如果你写了 `absolute`，一般都得补一个 `relative`
- 如果你写了 `absolute` 或 `fixed`，一定要补 `top` 和 `left`
- `sticky` 兼容性很差，主要用于面试装逼

##### position: relative

- 还是在文档流里面 只不过可以有一定的偏移量
  - 占的位置不变 只是显示的地方跟原来的有偏移

使用场景
- 用在做位移（很少用）
  - 用 `flex` 之类的属性代替了
- 用于给 `absolute` 元素做爸爸（一会讲）

配合 z-index
- `z-index`: `auto 默认值`，不创建新层叠上下文
- `z-index`: `0 / 1 / 2 `
- `z-index`: `-1 / -2`
- 默认每个元素计算出来的值 `z-index` 值是 0，但 `auto` 不可写为 0

经验
- 写 `z-index: 9999` 的都是彩笔
- 学会管理 `z-index`

##### position: absolute

使用场景
- 脱离原来的位置，另起一层，比如对话框的关闭按钮
  - 父元素加 `relative` 子元素加 `absolute` ,`top: 0;right: 0` 可以做出来关闭按钮
    - 会找祖先元素中第一个含有 `relative` 的元素
- 鼠标提示
![17](https://img.onmicrosoft.cn/2022-06-17/1.jpg)

> `white-space: nowrap;` 文字内容不准换行

配合 `z-index`
- 这个和 `relative` 的` z-index` 是同一套

经验
- 很多彩笔都以为 `absolute` 是相对于 `relative` 定位的
  - `absolute` 相对于祖先元素中最近的一个定位元素定位的
    - 只要不是 `static`， 就是定位元素
- 某些浏览器上如果不写 `top` / `left` 会位置错乱（四个位置至少写俩）
- 善用 `left: 100%`
- 善用 `left: 50%` ; 加负 `margin`

> 如何展示一个 `hover` 内容？
> - 在控制台选中元素，选择 `:hov` 再选择 `:hover`


position: fixed

使用场景
- 烦人的广告
- 回到顶部按钮

配合 z-index

经验
- 手机上尽量不要用这个属性，坑很多
- 不信你搜一下 [ 移动端 fixed ]

position: sticky
- 粘性定位





