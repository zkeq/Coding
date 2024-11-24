---
title: 日常｜IMYAI文本处理工具箱开源随记
date: 2024-11-24 12:26:49
tags: 日常
categories: 日常
description: OpenSource for tool.imyaigc.com , 分享技术细节随想.
cover: https://img.onmicrosoft.cn/ke/202411241238765.png
---

好久不见, 朋友们 有段事件不写博客了, 大概一年多的时间了 其中有半年时间 是在专心备考考试 之后便进入到了工作阶段 变得更没有闲暇时间 从四月份到现在 陆陆续续为公司贡献了各种各样的项目 正好赶上公司有开源的想法 随之将刚入职贡献的项目开源出来给大家使用.

### TL; DR

- 在线预览网址: https://tool.imyaigc.com
- 开源地址 (已支持 docker 一键部署): https://github.com/zkeq/ai-markdown-text-toolkit

![tool.imyaigc.com_](https://img.onmicrosoft.cn/ke/202411241244753.png)

![tool.imyaigc.com_ (1)](https://img.onmicrosoft.cn/ke/202411241246416.png)

代码部分其实比较简单, 这里想为大家讲解的是我自己构思的一种自适应布局 感觉挺有意思的 因为项目涉及到各种各样几十个按钮的摆放 

### 0.0 原本实现效果

怎么样在所有项目上美观好看成了一个问题 一开始的布局是这样的

![image-20241124125018493](https://img.onmicrosoft.cn/ke/202411241250580.png)

就是把按钮分成了四排 很简单的一种布局 不足一排的就让他换行 但是在手机端 小屏幕 上面视觉效果非常不好

![image-20241124125633441](https://img.onmicrosoft.cn/ke/202411241256525.png)

### 1.0 多行 flex 布局 正常文档流

然后尝试使用正常的文档流 也就是把所有的按钮都放在一个盒子里面 使用多行 flex 布局 最后变成了如下效果

![image-20241124125956450](https://img.onmicrosoft.cn/ke/202411241259513.png)

虽然项目初版实现了 但是这会出现一个问题 那就是总给人一种很拥挤的感觉 感觉不是很理想 但是差不多可以用了 但是总感觉不太完美 我想找到一种 根据按钮的字数多少来达到相同视觉效果的一种布局 于是我开始将目光转向 grid

### 2.0 初试 grid 布局

grid 布局 也就是网格布局 他的定义就是将文档分成几份几份的 感觉非常符合我的需求 于是将代码修改为 grid 布局 实现了如下效果

- https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid

![image-20241124130538069](https://img.onmicrosoft.cn/ke/202411241305144.png)

但是出现了一个问题 那就是不足一行的地方会有空白 非常不美观 如下图所示

![image-20241124130648302](https://img.onmicrosoft.cn/ke/202411241306365.png)

通过上图可以看出 grid 布局 完美的将每个按钮平均分成了很多份 但是这么大的空隙 肯定是没办法接受的 于是再次想办法改进

### 2.1 grid 布局升级版!

有没有办法 既保留 grid 布局这种几份几份的概念 但是仍然让每一行铺满 构思良久 终于想到了如下解决办法

那就是使用 JS + Grid 布局 在这里用了一个类似 tailwindcss 的概念 具体实现如下

首先 根据每个按钮的字数 将每个按钮应该占有的份数定义出来 然后 设定几个 hooks 表示在 多少尺寸的时候 应该显示多少份 例如 1000px的时候最多显示 16份 800px的时候最多显示12份 然后调控到所有屏幕均符合比例的一种状态 

接着 去写 JS 代码 将各个按钮依次添加到每一排 然后去判断加上该按钮的份数之后 是否超过了定义的份数 如果超过了 那么就新起一排 

代码实现起来 逻辑如下

#### 2.1.1 定义各个按钮的份数 代码

```js
let buttons = [
          {
              "col": "col-7",
              "onclick": "improveForm()",
              "text": "Markdown文本一键转换普通文本"
          },
          {
              "col": "col-3",
              "onclick": "AIimproveForm()",
              "text": "AI一键优化"
          },
          {
              "col": "col-3",
              "onclick": "AIConfig()",
              "text": "AI预设配置"
          },
          {
              "col": "col-3",
              "onclick": "saveForm()",
              "text": "另存为文件"
          },
          {
              "col": "col-2",
              "onclick": "undoBtn()",
              "text": "撤销"
          },
          {
              "col": "col-2",
              "onclick": "redoBtn()",
              "text": "还原"
          },
          {
              "col": "col-2",
              "onclick": "copyForm()",
              "text": "复制"
          },
          {
              "col": "col-2",
              "onclick": "cutForm()",
              "text": "剪切"
          },
          {
              "col": "col-2",
              "onclick": "resetForm()",
              "text": "清空"
          },
          {
              "col": "col-3",
              "onclick": "autoIndent()",
              "text": "一键排版"
          },
          {
              "col": "col-3",
              "onclick": "deleteBlankLine()",
              "text": "删除空行"
          },
          {
              "col": "col-3",
              "onclick": "addBlank()",
              "text": "添加空行"
          },
          {
              "col": "col-3",
              "onclick": "deleteChinese()",
              "text": "清除中文"
          },
          {
              "col": "col-3",
              "onclick": "deleteEnglish()",
              "text": "清除英文"
          },
          {
              "col": "col-3",
              "onclick": "deleteNumber()",
              "text": "清除数字"
          },
          {
              "col": "col-3",
              "onclick": "deleteSymbol()",
              "text": "清除符号"
          },
          {
              "col": "col-3",
              "onclick": "deleteBlank()",
              "text": "清除空格"
          },
          {
              "col": "col-3",
              "onclick": "muchBlankSaveOne()",
              "text": "多空保一"
          },
          {
              "col": "col-3",
              "onclick": "deleteLineBreak()",
              "text": "删除换行"
          },
          {
              "col": "col-6",
              "onclick": "EnglishPunctuationToChinese()",
              "text": "英文标点转中文"
          },
          {
              "col": "col-6",
              "onclick": "ChinesePunctuationToEnglish()",
              "text": "中文标点转英文"
          },
          {
              "col": "col-2",
              "onclick": "AllCapital()",
              "text": "全大写"
          },
          {
              "col": "col-2",
              "onclick": "AllLower()",
              "text": "全小写"
          },
          {
              "col": "col-4",
              "onclick": "WordCapital()",
              "text": "单词首字母大写"
          },
          {
              "col": "col-5",
              "onclick": "WordLower()",
              "text": "单词首字母小写"
          },
          {
              "col": "col-5",
              "onclick": "SentenceCapital()",
              "text": "句首字母大写"
          },
          {
              "col": "col-7",
              "onclick": "WordToPinyinWithIntonation()",
              "text": "文字转拼音(带声调)"
          },
          {
              "col": "col-7",
              "onclick": "WordToPinyinNoIntonation()",
              "text": "文字转拼音(不带声调)"
          },
          {
              "col": "col-7",
              "onclick": "WordToPinyinWithNumberIntonation()",
              "text": "文字转拼音(声调数字)"
          },
          {
              "col": "col-7",
              "onclick": "WordToPinyinWithAlphabet()",
              "text": "文字转拼音(首字母)"
          },
          {
              "col": "col-7",
              "onclick": "AddSpacesBetweenChineseAndEnglish()",
              "text": "中英文之间加空格"
          }
      ];

```

#### 2.1.2 定义grid布局的一些hooks

```js
      const gridConfig = {
          "default": 26,
          "breakpoints": {
              "1200px": 24,
              "992px": 19,
              "768px": 15,
              "576px": 12
          }
      };

      function getGridColumns() {
          const width = window.innerWidth;
          if (width <= 576) return gridConfig.breakpoints["576px"];
          if (width <= 768) return gridConfig.breakpoints["768px"];
          if (width <= 992) return gridConfig.breakpoints["992px"];
          if (width <= 1200) return gridConfig.breakpoints["1200px"];
          return gridConfig.default;
      }
```

#### 2.1.3 创建 buttons 代码

```js
  function createButton(button) {
    let btn = document.createElement("button");
    btn.className = `grid-item button is-primary is-rounded is-small ${button.col}`;
    btn.onclick = () => {
      eval(button.onclick);
    };
    btn.innerText = button.text;
    if (btn.innerText === "AI一键优化") {
      btn.id = "aiBtn";
    }
    return btn;
  }


  function renderButtons() {
    const container = document.getElementById("mainButtons");
    container.innerHTML = ""; // Clear existing buttons

    let storedButtonIds = localStorage.getItem("buttonsOrder");
    if (storedButtonIds) {
      const buttonIds = JSON.parse(storedButtonIds);
      buttons.sort((a, b) => buttonIds.indexOf(a.onclick) - buttonIds.indexOf(b.onclick));
    }

    let currentRow = document.createElement("div");
    let currentCols = 0;
    const maxCols = getGridColumns();

    buttons.forEach(button => {
      const colSpan = parseInt(button.col.split('-')[1]);
      if (currentCols + colSpan > maxCols) {
        currentRow.className = `grid-container grid-template-columns-${currentCols}`;
        container.appendChild(currentRow);
        currentRow = document.createElement("div");
        currentCols = 0;
      }
      let btn = createButton(button);
      btn.setAttribute("draggable", true);
      currentRow.appendChild(btn);
      currentCols += colSpan;
    });

    if (currentCols > 0) {
      currentRow.className = `grid-container grid-template-columns-${currentCols}`;
      container.appendChild(currentRow);
    }

    if (!localStorage.getItem("introCompleted") && !document.querySelector(".introjs-tooltip")) {
      InitIntro();
    }
  }

window.addEventListener("resize", renderButtons);
document.addEventListener("DOMContentLoaded", renderButtons);
```

当然 还有一些 CSS 用于实现全部所用到份数

```css
.grid-container {
    display: grid;
    gap: 10px;
    padding: 10px;
    justify-content: space-between;
}

.grid-container.grid-template-columns-1 { grid-template-columns: repeat(1, 1fr); }
.grid-container.grid-template-columns-2 { grid-template-columns: repeat(2, 1fr); }
.grid-container.grid-template-columns-3 { grid-template-columns: repeat(3, 1fr); }
.grid-container.grid-template-columns-4 { grid-template-columns: repeat(4, 1fr); }
.grid-container.grid-template-columns-5 { grid-template-columns: repeat(5, 1fr); }
.grid-container.grid-template-columns-6 { grid-template-columns: repeat(6, 1fr); }
.grid-container.grid-template-columns-7 { grid-template-columns: repeat(7, 1fr); }
.grid-container.grid-template-columns-8 { grid-template-columns: repeat(8, 1fr); }
.grid-container.grid-template-columns-9 { grid-template-columns: repeat(9, 1fr); }
.grid-container.grid-template-columns-10 { grid-template-columns: repeat(10, 1fr); }
.grid-container.grid-template-columns-11 { grid-template-columns: repeat(11, 1fr); }
.grid-container.grid-template-columns-12 { grid-template-columns: repeat(12, 1fr); }
.grid-container.grid-template-columns-13 { grid-template-columns: repeat(13, 1fr); }
.grid-container.grid-template-columns-14 { grid-template-columns: repeat(14, 1fr); }
.grid-container.grid-template-columns-15 { grid-template-columns: repeat(15, 1fr); }
.grid-container.grid-template-columns-16 { grid-template-columns: repeat(16, 1fr); }
.grid-container.grid-template-columns-17 { grid-template-columns: repeat(17, 1fr); }
.grid-container.grid-template-columns-18 { grid-template-columns: repeat(18, 1fr); }
.grid-container.grid-template-columns-19 { grid-template-columns: repeat(19, 1fr); }
.grid-container.grid-template-columns-20 { grid-template-columns: repeat(20, 1fr); }
.grid-container.grid-template-columns-21 { grid-template-columns: repeat(21, 1fr); }
.grid-container.grid-template-columns-22 { grid-template-columns: repeat(22, 1fr); }
.grid-container.grid-template-columns-23 { grid-template-columns: repeat(23, 1fr); }
.grid-container.grid-template-columns-24 { grid-template-columns: repeat(24, 1fr); }
.grid-container.grid-template-columns-25 { grid-template-columns: repeat(25, 1fr); }
.grid-container.grid-template-columns-26 { grid-template-columns: repeat(26, 1fr); }
.grid-container.grid-template-columns-27 { grid-template-columns: repeat(27, 1fr); }
.grid-container.grid-template-columns-28 { grid-template-columns: repeat(28, 1fr); }
.grid-container.grid-template-columns-29 { grid-template-columns: repeat(29, 1fr); }
.grid-container.grid-template-columns-30 { grid-template-columns: repeat(30, 1fr); }
.grid-container.grid-template-columns-31 { grid-template-columns: repeat(31, 1fr); }
.grid-container.grid-template-columns-32 { grid-template-columns: repeat(32, 1fr); }
```

然后就实现了在各个屏幕下都能正常显示的效果

![image-20241124132053438](https://img.onmicrosoft.cn/ke/202411241320477.png)

![image-20241124132042888](https://img.onmicrosoft.cn/ke/202411241320956.png)

![image-20241124132114735](https://img.onmicrosoft.cn/ke/202411241321015.jpeg)

### 2.2 增加一些拖拽效果

代码不是很难 粘贴如下 同时适配了移动端

```js
	function enableDragAndDrop() {
          const container = document.getElementById("mainButtons");
          let dragged;

          container.addEventListener("dragstart", function(event) {
              dragged = event.target;
              event.target.style.opacity = 0.5;
          });

          container.addEventListener("dragend", function(event) {
              event.target.style.opacity = "";
          });

          container.addEventListener("dragover", function(event) {
              event.preventDefault();
          });

          container.addEventListener("dragenter", function(event) {
              if (event.target.className.includes("grid-item")) {
                  event.target.style.border = "2px dashed #000";
              }
          });

          container.addEventListener("dragleave", function(event) {
              if (event.target.className.includes("grid-item")) {
                  event.target.style.border = "";
              }
          });

          container.addEventListener("drop", function(event) {
              event.preventDefault();
              if (event.target.className.includes("grid-item")) {
                  event.target.style.border = "";
                  if (dragged !== event.target) {
                      let allButtons = Array.from(container.querySelectorAll(".grid-item"));
                      let draggedIndex = allButtons.indexOf(dragged);
                      let targetIndex = allButtons.indexOf(event.target);


                      // Update buttons array
                      buttons.splice(targetIndex, 0, buttons.splice(draggedIndex, 1)[0]);

                      // Save new order of button IDs to localStorage
                      const buttonIds = buttons.map(button => button.onclick);
                      localStorage.setItem("buttonsOrder", JSON.stringify(buttonIds));

                      // Re-render buttons
                      renderButtons();
                  }
              }
          });

          let touchTimeout;

          container.addEventListener("touchstart", function(event) {
              if (event.target.className.includes("grid-item")) {
                  touchStartX = event.touches[0].clientX;
                  touchStartY = event.touches[0].clientY;

                  touchTimeout = setTimeout(() => {
                      dragged = event.target;
                      event.target.style.opacity = 0.5;
                  }, 1200);
              }
          });

          container.addEventListener("touchmove", function(event) {
              if (touchTimeout) {
                  clearTimeout(touchTimeout);
                  touchTimeout = null;
              }

              if (dragged) {
                  event.preventDefault();
                  let touch = event.touches[0];
                  let target = document.elementFromPoint(touch.clientX, touch.clientY);
                  if (target && target.className.includes("grid-item")) {
                      target.style.border = "2px dashed #000";
                  }
              }
          });

          container.addEventListener("touchend", function(event) {
              if (touchTimeout) {
                  clearTimeout(touchTimeout);
                  touchTimeout = null;
              }

              if (dragged) {
                  let touch = event.changedTouches[0];
                  let target = document.elementFromPoint(touch.clientX, touch.clientY);
                  if (target && target.className.includes("grid-item")) {
                      target.style.border = "";
                      if (dragged !== target) {
                          let allButtons = Array.from(container.querySelectorAll(".grid-item"));
                          let draggedIndex = allButtons.indexOf(dragged);
                          let targetIndex = allButtons.indexOf(target);

                          // Update buttons array
                          buttons.splice(targetIndex, 0, buttons.splice(draggedIndex, 1)[0]);

                          // Save new order of button IDs to localStorage
                          const buttonIds = buttons.map(button => button.onclick);
                          localStorage.setItem("buttonsOrder", JSON.stringify(buttonIds));

                          // Re-render buttons
                          renderButtons();
                      }
                  }
                  dragged.style.opacity = "";
                  dragged = null;
              }
          });
      }
```

### 2.3 使用 Intro.js 实现开屏引导功能

![image-20241124132349510](https://img.onmicrosoft.cn/ke/202411241323577.png)

代码如下 难点是如何实现第一行按钮和第二行按钮跨行框选 这里新建一个 新的 div 来实现

```js
 function createBoundingDiv(element1, element2) {
          const rect1 = element1.getBoundingClientRect();
          const rect2 = element2.getBoundingClientRect();

          const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;

          const minX = Math.min(rect1.left, rect2.left) + scrollX;
          const minY = Math.min(rect1.top, rect2.top) + scrollY;
          const maxX = Math.max(rect1.right, rect2.right) + scrollX;
          const maxY = Math.max(rect1.bottom, rect2.bottom) + scrollY;

          const boundingDiv = document.createElement('div');
          boundingDiv.style.position = 'absolute';
          boundingDiv.style.left = `${minX}px`;
          boundingDiv.style.top = `${minY}px`;
          boundingDiv.style.width = `${maxX - minX}px`;
          boundingDiv.style.height = `${maxY - minY}px`;
          boundingDiv.style.zIndex = "-1";

          document.body.appendChild(boundingDiv);

          return boundingDiv;
      }

      let firstStepBoundingDiv = null;
      let secondStepBoundingDiv = null;

      function createIntroBtnDiv() {
          const element1 = document.getElementsByClassName('grid-container')[0].children[0];
          const element2 = document.getElementsByClassName('grid-container')[1].children[0];
          firstStepBoundingDiv = createBoundingDiv(element1, element2);
      }

      function createTextareaResizeDiv() {
          const textarea = document.querySelector('textarea');
          const rect = textarea.getBoundingClientRect();

          const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;

          const left = rect.right - 80 + scrollX;
          const top = rect.bottom - 60 + scrollY;
          const width = 160;
          const height = 120;

          const boundingDiv = document.createElement('div');
          boundingDiv.style.position = 'absolute';
          boundingDiv.style.left = `${left}px`;
          boundingDiv.style.top = `${top}px`;
          boundingDiv.style.width = `${width}px`;
          boundingDiv.style.height = `${height}px`;
          boundingDiv.style.zIndex = "-1";

          document.body.appendChild(boundingDiv);

          secondStepBoundingDiv = boundingDiv;
      }

      function destroyIntroBtnDiv() {
          if (firstStepBoundingDiv) {
              firstStepBoundingDiv.remove();
              firstStepBoundingDiv = null;
          }
          if (secondStepBoundingDiv) {
              secondStepBoundingDiv.remove();
              secondStepBoundingDiv = null;
          }
          localStorage.setItem("introCompleted", "true");
      }

      function InitIntro() {
          createIntroBtnDiv();
          createTextareaResizeDiv();
          introJs().setOptions({
              steps: [
                  {
                      title: '新功能上线啦',
                      element: firstStepBoundingDiv,
                      intro: "<p>支持按钮拖拽排序！按住按钮就可以调整位置，可以把你喜欢的常用的按钮提前啦~<p><img src=\"/image/step1.gif\">"
                  },
                  {
                      title: '调整大小功能',
                      element: secondStepBoundingDiv,
                      intro: "<p>现在可以通过拖动右下角来调整文本框的大小！<p><img src=\"/image/step2.gif\">"
                  }
              ]
          }).oncomplete(destroyIntroBtnDiv)
              .onexit(destroyIntroBtnDiv)
              .start();
      }

      function resizeBoundingDivs() {
          if (firstStepBoundingDiv) {
              const element1 = document.getElementsByClassName('grid-container')[0].children[0];
              const element2 = document.getElementsByClassName('grid-container')[1].children[0];
              const rect1 = element1.getBoundingClientRect();
              const rect2 = element2.getBoundingClientRect();

              const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
              const scrollY = window.pageYOffset || document.documentElement.scrollTop;

              const minX = Math.min(rect1.left, rect2.left) + scrollX;
              const minY = Math.min(rect1.top, rect2.top) + scrollY;
              const maxX = Math.max(rect1.right, rect2.right) + scrollX;
              const maxY = Math.max(rect1.bottom, rect2.bottom) + scrollY;

              firstStepBoundingDiv.style.left = `${minX}px`;
              firstStepBoundingDiv.style.top = `${minY}px`;
              firstStepBoundingDiv.style.width = `${maxX - minX}px`;
              firstStepBoundingDiv.style.height = `${maxY - minY}px`;
          }

          if (secondStepBoundingDiv) {
              const textarea = document.querySelector('textarea');
              const rect = textarea.getBoundingClientRect();

              const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
              const scrollY = window.pageYOffset || document.documentElement.scrollTop;

              const left = rect.right - 80 + scrollX;
              const top = rect.bottom - 60 + scrollY;
              const width = 160;
              const height = 120;

              secondStepBoundingDiv.style.left = `${left}px`;
              secondStepBoundingDiv.style.top = `${top}px`;
              secondStepBoundingDiv.style.width = `${width}px`;
              secondStepBoundingDiv.style.height = `${height}px`;
          }
      }

      window.addEventListener('resize', resizeBoundingDivs);
      document.addEventListener("DOMContentLoaded", enableDragAndDrop);

```

### 2.4 网站同时接入了AI功能 这里也简略实现了一版 POST Stream 流的使用

>  后端很简单 但是也不太规范 每次返回的内容需要自行截断 迫不得已使用此种方案

```js
let AiBtnLive = true;

    function AIimproveForm() {
      if (!AiBtnLive) {
        Notiflix.Notify.warning("AI正在处理中，请稍后再试！");
        return;
      }
      let markdownText = document.getElementById("content").value;
      // 使按钮变成不可点击的状态 显示 Loading
      document.querySelector("#aiBtn").innerText = "处理中...";

      AiBtnLive = false;

      let timestamp = new Date().getTime();

      data = {
        text: markdownText,
        timestamp: timestamp,
        prefix: localStorage.getItem("ai_prefix") || null,
      };

      document.getElementById("content").value = "";

      Notiflix.Notify.info("AI正在处理中，请稍后...");

      fetch("/api/improve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          const reader = response.body.getReader();
          let decoder = new TextDecoder("utf-8");
          let data = "";

          return new ReadableStream({
            start(controller) {
              function push() {
                reader.read().then(({ done, value }) => {
                  if (done) {
                    // 处理剩余的数据
                    if (data.length > 0) {
                      CountChineseCharacters();
                      pushUndoStack();
                      AiBtnLive = true;
                      document.querySelector("#aiBtn").innerText =
                        "AI一键优化";
                      Notiflix.Notify.success("AI处理完成!");
                    }
                    controller.close();
                    return;
                  }

                  data += decoder.decode(value, { stream: true });

                  try {
                    _data = JSON.parse(data);
                    if (_data?.error?.type === "one_api_error") {
                      Notiflix.Notify.failure(
                        "AI接口出现异常，当前分组无可用渠道，请联系系统管理员修复"
                      );
                      document.getElementById("content").value +=
                        markdownText;
                      CountChineseCharacters();
                      pushUndoStack();
                      AiBtnLive = true;
                      document.querySelector("#aiBtn").innerText =
                        "AI一键优化";
                      return;
                    } else if (!_data.model) {
                      Notiflix.Notify.failure("AI处理失败，请稍后再试！");
                      document.getElementById("content").value +=
                        markdownText;
                      CountChineseCharacters();
                      pushUndoStack();
                      AiBtnLive = true;
                      document.querySelector("#aiBtn").innerText =
                        "AI一键优化";
                    }
                  } catch { }

                  let boundary = data.indexOf("data: ");
                  while (boundary !== -1) {
                    let piece = data.slice(0, boundary);

                    if (piece !== "") {
                      let stream = JSON.parse(piece).choices[0].delta.content;
                      if (stream) {
                        document.getElementById("content").value += stream;
                      }
                      CountChineseCharacters();
                    }

                    data = data.slice(boundary + 6);
                    boundary = data.indexOf("data: ");
                  }

                  push();
                });
              }
              push();
            },
          });
        })
        .catch((err) => {
          Notiflix.Notify.failure("AI处理失败，请稍后再试！");
          document.getElementById("content").value += markdownText;
          CountChineseCharacters();
          pushUndoStack();
          AiBtnLive = true;
          document.querySelector("#aiBtn").innerText = "AI一键优化";
        });
    }
```

### 2.5 成品地址

再放一个官方地址体验: 

- https://tool.imyaigc.com

项目开源地址 (已支持docker一键部署): 

- https://github.com/zkeq/ai-markdown-text-toolkit

### 3.0 特别鸣谢

- 感谢 [@xcsoft]([soxft (xcsoft)](https://github.com/soxft)) 大佬为本项目构建 Docker 镜像, 使其可以一键部署.
- 项目具体文档请移步: https://github.com/zkeq/ai-markdown-text-toolkit
