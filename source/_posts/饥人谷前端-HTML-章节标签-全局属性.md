---
title: 饥人谷前端 | HTML 章节标签 & 全局属性
tags: [HTML]
description: 本节课主要学习了<br>一些章节标签的划分和全局属性的罗列
date: 2022-06-15 17:35:40
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
---


### 章节标签

- 表示文章/书的层级
  - 标题` h1 ~ h6`
  - 章节` section`
  - 文章` article`
  - 段落` p`
  - 头部 `header`
  - 脚部 `footer`
  - 主要内容` main`
  - 旁支分支` aside`
  - 划分` div`

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>顶部广告</header>

    <div>

      <main>
        <h1>文章标题</h1>
        <h2>副标题</h2>

        <section>
          <h2>第一章</h2>
          <p>
            这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话
          </p>
        </section>

        <section>
          <h3>1.1 节</h3>
          <p>一段话</p>
        </section>
        <section>
          <h3>1.2 节</h3>
          <p>另一段话</p>
        </section>
      </main>

      <aside>参考资料： 1 2 3</aside>

    </div>

    <footer>&copy; 饥人谷版权所有</footer>
  </body>
</html>

```

![1](https://img.onmicrosoft.cn/2022-06-15/2.png)

### 全局属性

- 所有标签都有的属性
  - class
  - contenteditable
  - hidden
  - id
  - style
  - tabindex （`0` 是最后一个，`-1` 不要找到）
  - title
- `class` 用 **点** 的时候，只要作为一部分，就会匹配
- `style` 标签 也可以被看见
- ~~全页面唯一用 `id` 全页面不唯一用 `class`~~ (不到万不得已，不要用 `id`)
- 有多个 `相同 id` 的元素的时候，`css` 不报错，但是用 `js` 获取元素的时候会报错！
- `window.` 里面的单词用作 `id` 时，不可直接调用 （不可 XXX.style.xxxxx）
- `style` 的优先级比 `css` 高，`js` 可以覆盖 `css`

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .middle{
            background-color: black;
            color: aliceblue;
        }
        .bordered{
            border: 10px solid red;
        }
        [id=xxx]{
            border: 10px solid yellow;
        }
        #xxx{
            border: 10px solid yellow;
            /* 单行文字溢出怎么写 */
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    </style>
  </head>
  <body>
    <!-- title 无论多长 都会显示出来 -->
    <header id="xxx" title="完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容完整的内容" tabindex=1>顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告顶部广告</header>

    <style contenteditable >
        style{
            display: block;
            border: 1px solid red;
        }
        .middle{
            background-color: black;
            color: aliceblue;
        }
        .bordered{
            border: 10px solid red;
        }
    </style>

    <div class="middle bordered" contenteditable tabindex=2>

      <main>
        <h1>文章标题</h1>
        <h2>副标题</h2>

        <section>
          <h2>第一章</h2>
          <p>
            这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话
          </p>
        </section>

        <section hidden>
          <h3>1.1 节</h3>
          <p>一段话</p>
        </section>
        <section>
          <h3>1.2 节</h3>
          <p>另一段话</p>
        </section>
      </main>

      <aside id="xxx">参考资料： 1 2 3</aside>

    </div>

    <footer tabindex=3>&copy; 饥人谷版权所有</footer>
  </body>
</html>

```

![3](https://img.onmicrosoft.cn/2022-06-15/3.png)
