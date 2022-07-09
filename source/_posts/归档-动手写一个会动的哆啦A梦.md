---
title: 归档 | 原生JS实现会动代码之哆啦A梦
tags: [JS,CSS,归档]
description: 使用 CSS 写一个的哆啦A梦
date: 2022-07-09 18:35:46
categories: 归档
cover: https://img.onmicrosoft.cn/2022-07-09/3.png
---

### TL;DR

- 项目官网：https://doraemon.jirengu.maylove.pub
- 源码地址：https://github.com/zkeq/Doraemon

### 实现原理

```js
      textDom.innerHTML =  cssString.substring(0, textStartIndex);
      styleDom.innerHTML = cssString.substring(0, textStartIndex);
```

没啥好说的
完整 js 放一下

```js
const cssString = `
.doraemon {
  display: flex;
  flex-direction: column;
}
.head {
  width: 8em;
  height: 7em;
  border: var(--border);
  border-top-left-radius: 4em 4em;
  border-top-right-radius: 4em 4em;
  border-bottom-left-radius: 2em 3em;
  border-bottom-right-radius: 2em 3em;
  margin-left: 1em;
  position: relative;
  background-color: var(--clothes-color);
  background-image: var(--head-color);
  z-index: 2;
  box-shadow: -11px 12px 17px -4px rgba(0, 0, 0, 0.3);
}
.face {
  height: 4.5em;
  width: 6.5em;
  border: var(--border);
  border-top-left-radius: 4em 4em;
  border-top-right-radius: 4em 4em;
  border-bottom-left-radius: 3em 3em;
  border-bottom-right-radius: 3em 3em;
  position: absolute;
  bottom: 0;
  left: 0.7em;
  background-color: var(--skin-color);
  box-shadow: -5px 14px 8px -9px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(45deg, #ddd, #fff 28%, #fff);
}
.eye {
  width: 1.9em;
  height: 2.2em;
  border: var(--border);
  border-radius: 48%;
  position: absolute;
  top: -1.4em;
  background-color: var(--skin-color);
}
.eye::after {
  content: "";
  display: block;
  width: 0.3em;
  height: 0.5em;
  border: var(--border);
  border-radius: 50%;
  position: absolute;
  bottom: 0.3em;
  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(0,0,0,1) 24%);
}
.eye.left {
  left: 1.3em;
}
.eye.left::after {
  right: 0.4em;
}
.eye.right {
  right: 1.3em;
}
.eye.right::after {
  left: 0.4em;
}
.nose {
  width: 0.93em;
  height: 0.93em;
  border: var(--border);
  border-radius: 50%;
  position: absolute;
  left: 2.73em;
  top: 0.5em;
  text-align: center;
  background: var(--nose-color);
}
.nose::after {
  content: "";
  display: inline-block;
  border: 0.03em solid;
  width: 0;
  height: 2.2em;
  position: relative;
  top: 0.82em;
}
.mousetache {
  position: relative;
  top: 1em;
  right: -0.2em;
  width: 6em;
  height: 2em;
  padding: 0 0.5em;
  display: flex;
  justify-content: space-between;
}
.mousetache .left span:nth-child(1),
.mousetache .right span:nth-child(3) {
  transform: rotate(21deg);
}
.mousetache .left span:nth-child(3),
.mousetache .right span:nth-child(1) {
  transform: rotate(-21deg);
}
.mousetache span {
  display: block;
  width: 1.3em;
  background: var(--border-color);
  border: 0.02em solid var(--border-color);
  margin: 0.4em 0px;
}
.mouth {
  width: 4.5em;
  height: 2.2em;
  position: absolute;
  bottom: 0.72em;
  left: 0.94em;
  border: var(--border);
  border-radius: 132%;
  border-color: var(--border-color);
  border-top: none;
  border-left: none;
  border-right: none;
}
@media screen and (max-width: 414px) {
  .mouth {
    bottom: 0.6em;
  }
}
.mouth::before,
.mouth::after {
  content: "";
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  background-color: var(--skin-color);
  position: relative;
  top: 0.5em;
}
.mouth::before {
  left: -0.1em;
}
.mouth::after {
  right: -3.7em;
}
.choker {
  width: 6em;
  height: 0.6em;
  border: var(--border);
  border-radius: 8px;
  margin-left: 2em;
  margin-top: -6px;
  background: var(--choker-color);
  text-align: center;
  z-index: 2;
}
.choker > .bell {
  width: 1em;
  height: 1em;
  border: var(--border);
  border-radius: 50%;
  display: inline-block;
  margin-top: 0.2em;
  background: var(--bell-color);
  position: relative;
  text-align: center;
  overflow: hidden;
}
.bell > .dot {
  width: 0.26em;
  height: 0.22em;
  display: inline-block;
  vertical-align: 0.32em;
  border-radius: 50%;
  background-color: var(--border-color);
  position: relative;
}
.bell > .dot::after {
  content: "";
  position: absolute;
  border: 0.04em solid var(--border-color);
  height: 0.5em;
  left: 0.089em;
}
.bell::before {
  content: "";
  position: absolute;
  width: 100%;
  padding: 0.023em;
  border: var(--border);
  left: 0;
  top: 0.23em;
  border-left: none;
  border-right: none;
}
.body {
  width: 10em;
  margin-left: 0.5em;
  position: relative;
  display: flex;
}
.arm {
  width: 1.2em;
  height: 2.6em;
  border: var(--border);
  position: relative;
  background-color: var(--clothes-color);
}
.arm.left {
  transform: rotate(57deg);
  left: 0.6em;
  top: -0.2em;
  box-shadow: -11px 12px 17px -4px rgba(0, 0, 0, 0.3);
  background-color: var(--arm-left);
}
.arm.right {
  transform: rotate(-117deg);
  top: -0.9em;
  background-color: var(--arm-right);
}
.arm::after {
  content: "";
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  border: var(--border);
  border-radius: 50%;
  position: absolute;
  bottom: -0.7em;
  left: -0.2em;
  background-color: var(--skin-color);
}
.arm.left::after {
  background-image: linear-gradient(
    0deg,
    #999,
    #ddd 6%,
    #eee 19%,
    #fff 50%,
    #fff 80%,
    #eee 90%,
    #ddd 93%,
    #999
  );
}
.arm.right::after {
  background-image: linear-gradient(
    27deg,
    #999,
    #ddd 6%,
    #eee 19%,
    #fff 50%,
    #fff 80%,
    #eee 90%,
    #ddd 93%,
    #999
  );
}
.main-body {
  width: 5.6em;
  height: 4.5em;
  margin-left: 0.52em;
  border: var(--border);
  text-align: center;
  z-index: 1;
  background: var(--body-color);
  position: relative;
}
.main-body::before,
.main-body::after {
  content: "";
  position: absolute;
  height: 1.2em;
  width: var(--border-width);
  background-color: var(--clothes-color);
}
.main-body::before {
  top: 0;
  height: 1.25em;
  right: 100%;
  background-color: var(--arm-left);
}
.main-body::after {
  top: 0;
  left: 100%;
  background-color: var(--arm-right);
}
.belly {
  display: inline-block;
  width: 4.5em;
  height: 4.3em;
  border: var(--border);
  border-radius: 50%;
  margin-top: -1em;
  text-align: center;
  background-color: var(--skin-color);
}
.belly > .pocket {
  display: inline-block;
  width: 3.4em;
  height: 1.8em;
  border: var(--border);
  position: relative;
  bottom: -2em;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  background-color: var(--skin-color);
}
.feet {
  display: flex;
  margin: 0.7em -0.5em 0 -0.5em;
}
.feet::before {
  content: "";
  position: relative;
  width: 0.5em;
  height: 0.7em;
  border: var(--border);
  left: 50%;
  top: -0.3em;
  transform: translateX(-50%);
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-bottom: none;
  background: var(--bg-color);
}
.foot {
  width: 3.15em;
  height: 0.8em;
  border: var(--border);
  z-index: 1;
  background-color: var(--skin-color);
  background-image: linear-gradient(45deg, #ddd, #fff 28%, #fff);
  box-shadow: -31px -17px 26px -10px rgba(0, 0, 0, 0.3);
}
.foot.left {
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.2em;
  border-bottom-left-radius: 0.8em;
  border-bottom-right-radius: 1em;
  margin-left: -0.6em;
}
.foot.right {
  border-top-right-radius: 1.5em;
  border-top-left-radius: 1.2em;
  border-bottom-right-radius: 0.8em;
  border-bottom-left-radius: 1em;
  margin-left: 0.17em;
}
`;

let codeString = '';

const textDom = document.querySelector('.text');
const styleDom = document.querySelector('.doraemon-style');
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const progressBar = document.querySelector('.progress-bar');

let textStartIndex = 0;
let range = 3;
let timer = null;

const { width: finalWidth } = document.querySelector('body').getBoundingClientRect();
const updateProgress = (progress) => {
  progressBar.style.width = `${finalWidth * progress}px`;
};
let init = 0;
const len = cssString.length;
const play = () => {
  if (init === 0) {
    auio = "https://media.onmicrosoft.cn/doraemon.mp3";
    auio = new Audio(auio);
    auio.loop = true;
    auio.volume = 1;
    init = 1;
  }
  auio.play();
  if (textStartIndex >= len) {
    textStartIndex = 0;
  }
  if (timer) return;

  timer = setInterval(() => {
    textStartIndex += range;
    if (textStartIndex > len) {
      playButton.innerHTML = '重放'
      textDom.innerHTML =  cssString.substring(0, len);
      styleDom.innerHTML = cssString.substring(0, len);
      updateProgress(1);
      // textDom.scrollTop = textDom.scrollHeight;
      hljs.highlightAll();
      window.clearInterval(timer);
      timer = null;
    } else {
      // if (cssString[textStartIndex] === "\n") {
      //   codeString += "<br>";
      // } else if (cssString[textStartIndex] === " ") {
      //   codeString += "&nbsp;";
      // } else {
      //   codeString += cssString[textStartIndex];
      // }
      playButton.innerHTML = '播放'
      textDom.innerHTML =  cssString.substring(0, textStartIndex);
      styleDom.innerHTML = cssString.substring(0, textStartIndex);
      updateProgress(textStartIndex / len);
      textDom.scrollTop = textDom.scrollHeight;
      hljs.highlightAll();
    }
  }, 0);
};

const stop = () => {
  window.clearInterval(timer);
  auio.pause();
  timer = null;
};

playButton.onclick = play;
stopButton.onclick = stop;


function change_range(e) {
  range = Number(e);
}
```