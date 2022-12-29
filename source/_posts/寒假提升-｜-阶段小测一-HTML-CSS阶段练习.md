---
title: 寒假提升 ｜ 阶段小测一 HTML+CSS阶段练习
tags:
  - 寒假提升
categories:
  - 寒假提升
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2022/12/12/11a013bd-6526-457f-80c4-a1d2204e0d52.png
date: 2022-12-29 14:53:30
---

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-0"></iframe>

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-1"></iframe>

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2"></iframe>

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-3"></iframe>

### 00_额外知识补充

#### 02_line-height对行内非替换元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      background-color: #f00;
      color: #fff;

      line-height: 50px;
    }
  </style>
</head>
<body>
  
  <span class="box">哈哈哈哈</span>

</body>
</html>
```

#### 03_块级元素中嵌套img

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      background-color: orange;
    }

    img {
      vertical-align: top;
    }
  </style>
</head>
<body>
  
  <div class="box">
    <img src="../day_02_03/images/banner_02.jpeg" alt="">
    xxxxx
  </div>

</body>
</html>
```

#### 04_块级元素中的居中对齐

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
      background-color: orange;
      line-height: 200px;
    }

    span {
      background-color: #0f0;
      display: inline-block;
      height: 60px;
      line-height: 60px;
      /* line-height: 200px; */

      /* font-size: 50px; */
    }
  </style>
</head>
<body>
  
  <div class="box">
    fdafdafdasfxxxxxxx
    <span>spanxxbbbxxxx</span>
  </div>

</body>
</html>
```

05_box-sizing的应用场景

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: orange;

      /* 没有添加box-sizing: 空间 水平: 240px 垂直: 240px */
      border: 20px solid #f00;

      /* 添加box-sizing: border就会算在width/height */
      /* box-sizing: 在生效时, 有一个前提, 有明确的设置宽度和高度 */
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  
  <!-- 1. 需要添加box-sizing的场景 -->
  <div class="box"></div>

</body>
</html>
```

#### 06_box-sizing的无作用
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container {
      position: relative;
      display: flex;
      width: 300px;
      height: 300px;
      background-color: orange;
    }

    /* .container .box {
      height: 200px;
      background-color: #f00;

      box-sizing: border-box;
      border-right: 30px solid #0f0;
      padding-right: 30px;
    } */

    /* .container .box2 {
      position: absolute;
      width: 100px;
      height: 100px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: #f00;

      box-sizing: border-box;
      border: 10px solid #0f0;
    } */

    .container .box3 {
      width: 100px;
      background-color: #f00;
      border-top: 30px solid #0f0;
      box-sizing: border-box;
    }

    .container .box4 {
      flex: 1; /* flex: 1 -> flex-grow: 1 */
      background-color: purple;
      border: 30px solid skyblue;
    }
  </style>
</head>
<body>
  
  <!-- 1.块级盒子的嵌套 -->
  <!-- <div class="container">
    <div class="box">fdasfdasfda我是coderwhy, 哈哈哈哈,呵呵呵呵呵呵</div>
  </div> -->


  <!-- 2.定位的案例 -->
  <!-- <div class="container">
    <div class="box2"></div>
  </div> -->

  
  <!-- 3.flex布局 -->
  <div class="container">
    <div class="box3"></div>
    <div class="box4"></div>
  </div>

</body>
</html>
```

#### 07_a中嵌套div的现象.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    a {
      display: inline-block;
      width: 300px;
      height: 300px;
      background-color: #f00;
    }
  </style>
</head>
<body>
  
  <!-- 规范: 行内非替换元素不要嵌套块级元素 -->
  <a href="#">
    <div>divdivdivdiv</div>
    <p>pppppppp</p>
  </a>

</body>
</html>
```

### 01_其他案例

#### 01_小米界面布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小米官网</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <style>
    .dress {
      margin-top: 30px;
    }

    .dress .header {
      height: 58px;
      line-height: 58px;
    }

    .dress .header .left-area {
      float: left;
    }

    .dress .header .right-area  {
      float: right;
      font-size: 14px;
    }

    .dress .header .right-area .item {
      margin-left: 15px;
    }

    .dress .header .right-area .item:hover,
    .dress .header .right-area .item.active {
      padding: 3px 0;
      border-bottom: 2px solid red;
      color: red;
    }

    /* 列表内容 */
    .dress .list {
      margin-right: -14px;
    }

    .dress .list .item {
      float: left;
      /* position: relative;
      top: 0; */

      /* box model */
      width: 234px;
      height: 300px;
      margin-right: 14px;
      margin-bottom: 14px;

      background-color: #f00;

      /* 动画 */
      transition: all 0.3s ease-in;
    }

    .dress .list .item.item1 {
      height: 614px;
    }

    .dress .list .item.item9, 
    .dress .list .item.item10 {
      height: 143px;
    }

    .dress .list .item:hover {
      box-shadow: 0 15px 30px rgba(0,255,0,1);
      /* top: -2px; */
      transform: translateY(-2px);
    }

    .dress .list .item a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  
  <div class="mi_wrapper dress">
    <div class="header clear_fix">
      <div class="left-area">
        <h3 class="title">智能穿戴</h3>
      </div>
      <div class="right-area">
        <a class="item active hot" href="#">热门</a>
        <a class="item info" href="#">穿戴</a>
      </div>
    </div>
    <div>
      <ul class="list clear_fix">
        <li class="item item1"><a href="#">1</a></li>
        <li class="item item2"><a href="#">2</a></li>
        <li class="item item3"><a href="#">3</a></li>
        <li class="item item4"><a href="#">4</a></li>
        <li class="item item5"><a href="#">5</a></li>
        <li class="item item6"><a href="#">6</a></li>
        <li class="item item7"><a href="#">7</a></li>
        <li class="item item8"><a href="#">8</a></li>
        <li class="item item9"><a href="#">9</a></li>
        <li class="item item10"><a href="#">10</a></li>
      </ul>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-1#/7182467122126127141"></iframe>

#### 02_考拉界面布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>考拉布局</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <style>
    .sport {
      margin-top: 20px;
      background-color: orange;
    }

    .sport .item {
      float: left;
      height: 541px;
    }

    .sport .item.left {
      width: 330px;
      background-color: purple;
    }

    .sport .item.center {
      width: 550px;
    }

    .sport .center .center-item {
      float: left;
      width: 275px;
      height: 271px;

      box-sizing: border-box;
      border: 1px solid #000;
      border-left: none;
    }

    .sport .center .center-item:nth-last-child(-n+2) {
      margin-top: -1px;
    }

    .sport .item.right {
      width: 220px;
    }

    .sport .right .item {
      float: left;
      width: 220px;
      height: 121px;

      box-sizing: border-box;
      border: 1px solid #000;
      border-left: none;
      margin-top: -1px;
    }

    .sport .right .item.header {
      height: 61px;
      margin-top: 0;
    }
  </style>
</head>
<body>
  
  <div class="kl_wrapper sport">
    <div class="item left"></div>
    <div class="item center">
      <div class="center-item">1</div>
      <div class="center-item">2</div>
      <div class="center-item">3</div>
      <div class="center-item">4</div>
    </div>
    <div class="item right">
      <div class="item header">header</div>
      <!-- .item{$}*4 -->
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-1#/7182467592953528376"></iframe>

### 02_网易云分段

#### 01_网易云-header

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网易云的top</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <style>
  </style>
</head>
<body>

  <div class="top">
    <div class="topbar wrapper_01">
      <div class="bar-left">
        <h1 class="logo">
          <a href="#">网易云音乐</a>
        </h1>
        <ul class="list">
          <li><a href="#" class="item active">发现音乐</a></li>
          <li><a href="#" class="item">我的音乐</a></li>
          <li><a href="#" class="item">关注</a></li>
          <li><a href="#" class="item">商城</a></li>
          <li><a href="#" class="item">音乐人</a></li>
          <li>
            <a href="#" class="item">
              下载客户端
              <i class="topbar_sprite topbar_icon_hot icon-hot"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="bar-right">
        <div class="search">
          <input type="text" placeholder="音乐/视频/电台/用户">
        </div>
        <div class="anthor">
          <a href="#">创作者中心</a>
        </div>
        <div class="login">
          <a href="#">登录</a>
        </div>
      </div>
    </div>
  </div>

  <div class="nav">
    <div class="navbar wrapper_01">
      <!-- 如果block元素中是没有内容, 那么line-height继承过来也是不生效 -->
      <!-- ul>(li>a[href=#].item)*6 -->
      <ul class="list">
        <li><a href="#" class="item active"><span>推荐</span></a></li>
        <li><a href="#" class="item"><span>排行榜</span></a></li>
        <li><a href="#" class="item"><span>歌单</span></a></li>
        <li><a href="#" class="item"><span>主播电台</span></a></li>
        <li><a href="#" class="item"><span>歌手</span></a></li>
        <li><a href="#" class="item"><span>新碟上架</span></a></li>
      </ul>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182468020731084859"></iframe>

#### 02_网易云-banner.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网易云-轮播图</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <style>
    .banner {
      background: url(./images/banner_bg_02.jpeg) center center / 6000px;
    }

    .banner .area {
      position: relative;
      height: 285px;
      background-color: orange;
    }

    .banner .area .area-left {
      position: relative;
      width: 730px;
    }

    /* 图片列表 */
    .banner .area-left .img-list {
      display: flex;
      overflow: hidden;
    }

    .banner .area-left .img-list li {
      flex-shrink: 0;
      width: 100%;
    }

    .banner .area-left .img-list .item {
      display: block;
    }

    .banner .area-left .img-list .item img {
      width: 100%;
      height: 285px;
    }

    /* 点的列表 */
    .banner .area-left .dots-list {
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    .banner .area-left .dots-list li {
      margin: 0 2px;
    }

    .banner .area-left .dots-list .item {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(./images/banner_sprite.png) 3px -343px;
    }

    .banner .area-left .dots-list .item.active,
    .banner .area-left .dots-list .item:hover {
      background-position: -16px -343px;
    }

    /* 右侧的内容 */
    .banner .area-right {
      position: absolute;
      right: -1px;
      top: 0;
      bottom: 0;
      width: 254px;
      background: url(./images/download_sprite.png);
    }

    .banner .area-right .download {
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      text-indent: -9999px;
    }

    .banner .area-right .download:hover {
      background: url(./images/download_sprite.png) 0 -290px;
    }

    .banner .area-right .desc {
      margin-top: 10px;
      text-align: center;
      font-size: 12px;
      color: #8d8d8d;
    }

    /* 两个控制按钮 */
    .banner .area .control {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 37px;
      height: 63px;
      margin: auto 0;
      background-image: url(./images/banner_sprite.png);
    }

    .banner .area .control.left {
      left: -70px;
      background-position: 0 -360px;
    }
    .banner .area .control.left:hover {
      background-position: 0 -430px;
    }

    .banner .area .control.right {
      right: -70px;
      background-position: 0 -508px;
    }
    .banner .area .control.right:hover {
      background-position: 0 -578px;
    }
  </style>
</head>
<body>
  
  <div class="banner">
    <div class="area wrapper_03">
      <div class="area-left">
        <ul class="img-list">
          <li>
            <a class="item" href="#">
              <img src="./images/banner_02.jpeg" alt="">
            </a>
          </li>
          <li>
            <a class="item" href="#">
              <img src="./images/banner_02.jpeg" alt="">
            </a>
          </li>
          <li>
            <a class="item" href="#">
              <img src="./images/banner_02.jpeg" alt="">
            </a>
          </li>
          <li>
            <a class="item" href="#">
              <img src="./images/banner_02.jpeg" alt="">
            </a>
          </li>
        </ul>
        
        <ul class="dots-list">
          <li><a class="item active" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
          <li><a class="item" href=""></a></li>
        </ul>
      </div>
      <div class="area-right">
        <a class="download" href="#">下载客户端</a>
        <p class="desc">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
      <a class="control  left" href="#"></a>
      <a class="control right" href="#"></a>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182469912420581431"></iframe>

#### 03_网易云-main-right

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网易云的主要区域</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/header.css">
  <style>
    .main .area {
      display: flex;
      justify-content: space-between;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      background-image: url(./images/main_bg.png);
    }

    /* 左侧区域 */
    .main .area-left {
      width: 729px;
    }

    /* 右侧区域 */
    .main .area-right {
      width: 250px;
    }

    .main .area-right .user-login {
      width: 250px;
      height: 126px;
      background: url(./images/main_sprite.png) 0 0;
    }

    .main .area-right .user-login .desc {
      width: 205px;
      margin: 0 auto;
      padding-top: 16px;
      color: #666;
      font-size: 12px;
      line-height: 22px;
    }

    .main .area-right .user-login .btn {
      display: block;
      width: 100px;
      height: 31px;
      margin: 15px auto 0;
      line-height: 31px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: url(./images/main_sprite.png) 0 -195px;
      text-shadow: 0 1px 0 #8a060b;
    }

    .main .settle-singer {
      padding: 20px;
    }

    .main .settle-singer .list {
      padding: 5px 0;
    }

    .main .settle-singer .list .item {
      display: flex;
      /* align-items: center; */
      width: 210px;
      height: 62px;
      margin-top: 15px;
      background-color: #fafafa;
    }

    .main .settle-singer .list .item .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 3px 12px;
      border: 1px solid #e9e9e9;
      border-left: none;
      overflow: hidden;
    }

    .main .settle-singer .item .info .singer {
      font-size: 14px;
      font-weight: 700;
      color: #000;
    }

    .main .settle-singer .item .info .desc {
      font-size: 12px;
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .main .hot-anchor {
      padding: 20px;
    }
  </style>
</head>
<body>
  
  <div class="main">
    <div class="area wrapper_02">
      <div class="area-left">
      </div>
      <div class="area-right">
        <div class="user-login">
          <p class="desc">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </p>
          <a class="btn" href="#">用户登录</a>
        </div>
        <div class="settle-singer">
          <div class="header_type_01">
            <h3 class="title">入驻歌手</h3>
            <a class="more" href="#">查看全部 &gt;</a>
          </div>
          <ul class="list">
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹fdafdafadfafa</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="hot-anchor">
          <div class="header_type_01">
            <h3 class="title">热门主播</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182470138803781693"></iframe>

#### 04_网易云-按钮实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <style>
    body {
      text-align: center;
      padding-top: 50px;
    }

    .apply {
      display: inline-block;
      width: 210px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      color: #000;
      box-sizing: border-box;
      border-radius: 4px;
      overflow: hidden;
      /* border: 1px solid #aaa;
      border-radius: 3px; */

      background-color: #fff;

      /* background: url(./images/btn_sprite.png) right -100px no-repeat; */
      /* padding-right: 5px; */
    }

    .apply > i {
      display: block;
      height: 31px;
      /* background: url(./images/btn_sprite.png) 0 -59px;
      padding-left: 3px; */
    }

    .btn {
      width: 100px;
    }
  </style>
</head>
<body>
  
  <a class="btn_sprite btn_type_01_sup apply" href="#">
    <i class="btn_sprite btn_type_01_sub">申请成为网易音乐人</i>
  </a>

  <!-- 第二个按钮 -->
  <a class="btn_sprite btn_type_01_sup btn" href="#">
    <i class="btn_sprite btn_type_01_sub">我是按钮</i>
  </a>

  <!-- 其他的按钮 -->
  <a class="btn_sprite btn_type_favor_sup favor" href="#">
    <i class="btn_sprite btn_type_favor_sub">(39134325232772)</i>
  </a>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182470569181315132"></iframe>

#### 05_网易云-main-left

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网易云的主要区域</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/header.css">
  <style>
    .main .area {
      display: flex;
      justify-content: space-between;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      background-image: url(./images/main_bg.png);
    }

    /* 左侧区域 */
    .main .area-left {
      width: 729px;
      padding: 20px 20px 40px;
    }

    /* 右侧区域 */
    .main .area-right {
      width: 250px;
    }

    .main .area-right .user-login {
      width: 250px;
      height: 126px;
      background: url(./images/main_sprite.png) 0 0;
    }

    .main .area-right .user-login .desc {
      width: 205px;
      margin: 0 auto;
      padding-top: 16px;
      color: #666;
      font-size: 12px;
      line-height: 22px;
    }

    .main .area-right .user-login .btn {
      display: block;
      width: 100px;
      height: 31px;
      margin: 15px auto 0;
      line-height: 31px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: url(./images/main_sprite.png) 0 -195px;
      text-shadow: 0 1px 0 #8a060b;
    }

    .main .settle-singer {
      padding: 20px;
    }

    .main .settle-singer .list {
      padding: 5px 0;
    }

    .main .settle-singer .list .item {
      display: flex;
      /* align-items: center; */
      width: 210px;
      height: 62px;
      margin-top: 15px;
      background-color: #fafafa;
    }

    .main .settle-singer .list .item .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 3px 12px;
      border: 1px solid #e9e9e9;
      border-left: none;
      overflow: hidden;
    }

    .main .settle-singer .item .info .singer {
      font-size: 14px;
      font-weight: 700;
      color: #000;
    }

    .main .settle-singer .item .info .desc {
      font-size: 12px;
      color: #666;

      /* 文本超出后显示... */
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .main .hot-anchor {
      padding: 20px;
    }
  </style>
</head>
<body>
  
  <div class="main">
    <div class="area wrapper_02">
      <div class="area-left">
        <div class="recommend-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">热门推荐</h2>
              <ul class="keywords">
                <li><a class="item" href="#">华语</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">流行</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">摇滚</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">民谣</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">电子</a></li>
              </ul>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>
        </div>
        <div class="disc-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">新碟上架</h2>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>
        </div>
        <div class="rank-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">榜单</h2>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="area-right">
        <div class="user-login">
          <p class="desc">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </p>
          <a class="btn" href="#">用户登录</a>
        </div>
        <div class="settle-singer">
          <div class="header_type_01">
            <h3 class="title">入驻歌手</h3>
            <a class="more" href="#">查看全部 &gt;</a>
          </div>
          <ul class="list">
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹发发到付发发</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="hot-anchor">
          <div class="header_type_01">
            <h3 class="title">热门主播</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182470934014459965"></iframe>

#### 06_网易云-main-left-content

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网易云的主要区域</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/header.css">

  <link rel="stylesheet" href="./css/main-area-right.css">
  <style>
    .main > .area {
      display: flex;
      justify-content: space-between;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      background-image: url(./images/main_bg.png);
    }

    /* 左侧区域 */
    .main .area-left {
      width: 729px;
      padding: 20px 20px 40px;
    }

    .recommend-section .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px 2px;
    }

    .recommend-section .list .item {
      width: 140px;
      margin-bottom: 30px;
    }

    .recommend-section .list .item .top {
      position: relative;
    }

    .recommend-section .list .item .top .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-image: url(./images/cover_sprite.png);
      background-position: 0 0;
    }

    .recommend-section .list .item .top .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 27px;
      padding-left: 10px;
      line-height: 27px;

      font-size: 12px;
      color: #ccc;

      background-image: url(./images/cover_sprite.png);
      background-position: 0 -537px;
    }

    .recommend-section .list .item .top .info .icon-music {
      position: relative;
      top: 1px;
    }

    .recommend-section .list .item .top .info .count {
      margin-left: 4px;
    }

    .recommend-section .list .item .top .info .icon-play {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto 0;
    }

    /* 底部的样式 */
    .recommend-section .list .item .bottom {
      display: block;
      margin-top: 8px;
      font-size: 14px;
    }

    .recommend-section .list .item .bottom:hover {
      text-decoration: underline;
    }

    .recommend-section .list .item .bottom .icon-radio {
      position: relative;
      top: 2px;
    }

    /* 新碟上架 */
    .disc-section .content {
      height: 186px;
      margin: 20px 0;
      box-sizing: border-box;
      border: 1px solid #d3d3d3;
    }

    .disc-section .content .inner {
      position: relative;
      height: 100%;
      box-sizing: border-box;
      padding: 0 25px;
      border: 1px solid #fff;
      background-color: #f5f5f5;
    }

    .disc-section .inner .roller {
      display: flex;
      height: 100%;
      overflow: hidden;
    }

    .disc-section .inner .roller .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-top: 10px;
      flex-shrink: 0;
    }

    .disc-section .roller .list .item {
      width: 118px;
      height: 150px;
      background: url(./images/main_sprite.png) no-repeat -260px 100px;
    }

    .disc-section .roller .list .item .album {
      position: relative;
    }

    .disc-section .roller .list .item .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url(./images/cover_sprite.png) no-repeat 0 -570px;
    }

    .disc-section .roller .item .album .play {
      display: none;
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 22px;
      height: 22px;
      background: url(./images/icon_sprite.png) 0 -85px;
    }

    .disc-section .roller .item .album:hover .play {
      display: block;
    }

    .disc-section .roller .list .item a {
      display: block;
      margin-top: 5px;
      padding-right: 10px;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .disc-section .roller .list .item a:hover {
      text-decoration: underline;
    }

    .disc-section .roller .list .item a.title {
      color: #000;
      margin-top: 8px;
    }

    .disc-section .roller .list .item a.anchor {
      color: #666;
    }

    .disc-section .inner .control {
      position: absolute;
      width: 17px;
      height: 17px;
      top: 72px;
      bottom: 0;
      background-image: url(./images/main_sprite.png);
    }

    .disc-section .inner .control-left {
      left: 5px;
      background-position: -260px -75px;
    }

    .disc-section .inner .control-right {
      right: 5px;
      background-position: -320px -75px;
    }
  </style>
</head>
<body>
  
  <div class="main">
    <div class="area wrapper_02">
      <div class="area-left">
        <div class="recommend-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">热门推荐</h2>
              <ul class="keywords">
                <li><a class="item" href="#">华语</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">流行</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">摇滚</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">民谣</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">电子</a></li>
              </ul>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
          </div>
        </div>
        <div class="disc-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">新碟上架</h2>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>

          <div class="content">
            <div class="inner">
              <div class="roller">
                <ul class="list">
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                </ul>
                <ul class="list">2</ul>
              </div>
              <a class="control control-left" href="#"></a>
              <a class="control control-right" href="#"></a>
            </div>
          </div>

        </div>
        <div class="rank-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">榜单</h2>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="area-right">
        <div class="user-login">
          <p class="desc">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </p>
          <a class="btn" href="#">用户登录</a>
        </div>
        <div class="settle-singer">
          <div class="header_type_01">
            <h3 class="title">入驻歌手</h3>
            <a class="more" href="#">查看全部 &gt;</a>
          </div>
          <ul class="list">
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹发发到付发发</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="hot-anchor">
          <div class="header_type_01">
            <h3 class="title">热门主播</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182471175308574775"></iframe>

#### 07_网易云-main-left-rank

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网易云的主要区域</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/header.css">

  <link rel="stylesheet" href="./css/main-area-right.css">
  <style>

    /* 左侧区域 */
    .main .area-left {
      width: 729px;
      padding: 20px 20px 40px;
    }

    .recommend-section .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px 2px;
    }

    .recommend-section .list .item {
      width: 140px;
      margin-bottom: 30px;
    }

    .recommend-section .list .item .top {
      position: relative;
    }

    .recommend-section .list .item .top .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-image: url(./images/cover_sprite.png);
      background-position: 0 0;
    }

    .recommend-section .list .item .top .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 27px;
      padding-left: 10px;
      line-height: 27px;

      font-size: 12px;
      color: #ccc;

      background-image: url(./images/cover_sprite.png);
      background-position: 0 -537px;
    }

    .recommend-section .list .item .top .info .icon-music {
      position: relative;
      top: 1px;
    }

    .recommend-section .list .item .top .info .count {
      margin-left: 4px;
    }

    .recommend-section .list .item .top .info .icon-play {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto 0;
    }

    /* 底部的样式 */
    .recommend-section .list .item .bottom {
      display: block;
      margin-top: 8px;
      font-size: 14px;
    }

    .recommend-section .list .item .bottom:hover {
      text-decoration: underline;
    }

    .recommend-section .list .item .bottom .icon-radio {
      position: relative;
      top: 2px;
    }

    /* 新碟上架 */
    .disc-section .content {
      height: 186px;
      margin: 20px 0;
      box-sizing: border-box;
      border: 1px solid #d3d3d3;
    }

    .disc-section .content .inner {
      position: relative;
      height: 100%;
      box-sizing: border-box;
      padding: 0 25px;
      border: 1px solid #fff;
      background-color: #f5f5f5;
    }

    .disc-section .inner .roller {
      display: flex;
      height: 100%;
      overflow: hidden;
    }

    .disc-section .inner .roller .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-top: 10px;
      flex-shrink: 0;
    }

    .disc-section .roller .list .item {
      width: 118px;
      height: 150px;
      background: url(./images/main_sprite.png) no-repeat -260px 100px;
    }

    .disc-section .roller .list .item .album {
      position: relative;
    }

    .disc-section .roller .list .item .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url(./images/cover_sprite.png) no-repeat 0 -570px;
    }

    .disc-section .roller .item .album .play {
      display: none;
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 22px;
      height: 22px;
      background: url(./images/icon_sprite.png) 0 -85px;
    }

    .disc-section .roller .item .album:hover .play {
      display: block;
    }

    .disc-section .roller .list .item a {
      display: block;
      margin-top: 5px;
      padding-right: 10px;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .disc-section .roller .list .item a:hover {
      text-decoration: underline;
    }

    .disc-section .roller .list .item a.title {
      color: #000;
      margin-top: 8px;
    }

    .disc-section .roller .list .item a.anchor {
      color: #666;
    }

    .disc-section .inner .control {
      position: absolute;
      width: 17px;
      height: 17px;
      top: 72px;
      bottom: 0;
      background-image: url(./images/main_sprite.png);
    }

    .disc-section .inner .control-left {
      left: 5px;
      background-position: -260px -75px;
    }

    .disc-section .inner .control-right {
      right: 5px;
      background-position: -320px -75px;
    }

    /* rank-section */
    .rank-section .content {
      display: flex;
      height: 472px;
      margin-top: 20px;
      background: url(./images/rank_bg.png) no-repeat;
    }

    .rank-section .content .rank {
      width: 230px;
    }

    .rank-section .content .rank .header {
      display: flex;
      height: 120px;
      box-sizing: border-box;
      padding: 20px 0 0 20px;
    }

    .rank-section .rank .header .album {
      position: relative;
      width: 80px;
      height: 80px;
    }

    .rank-section .rank .header .album img {
      width: 100%;
      height: 100%;
    }

    .rank-section .rank .header .album .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url(./images/cover_sprite.png) no-repeat -145px -57px;
    }

    .rank-section .rank .header .info {
      padding: 10px 0 0 12px;
    }

    .rank-section .rank .header .info .title {
      color: #333;
    }

    .rank-section .rank .header .info .operation {
      margin-top: 12px;
    }

    .rank-section .rank .header .info .btn {
      display: inline-block;
      width: 22px;
      height: 22px;
      background: url(./images/main_sprite.png) no-repeat;
    }

    .rank-section .rank .header .info .btn.play {
      background-position: -267px -205px;
    }

    .rank-section .rank .header .info .btn.play:hover {
      background-position: -267px -235px;
    }

    .rank-section .rank .header .info .btn.favor {
      background-position: -300px -205px;
      margin-left: 8px;
    }

    .rank-section .rank .header .info .btn.favor:hover {
      background-position: -300px -235px;
    }

    .rank-section .rank .list {
      padding-left: 12px;
    }

    .rank-section .rank .list .item {
      display: flex;
      height: 32px;
      line-height: 32px;
      padding-right: 5px;
    }

    .rank-section .rank .list .item .no {
      width: 35px;
      font-size: 16px;
      color: #666;
      text-align: center;
    }

    .rank-section .rank .list .item:nth-child(-n+3) .no {
      color: #c10d0c;
    }

    .rank-section .rank .list .item .song {
      flex: 1;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .rank-section .rank .list .item .song:hover {
      text-decoration: underline;
    }

    .rank-section .rank .list .item .operation {
      display: none;
      align-items: center;
      width: 82px;
    }

    .rank-section .rank .list .item:hover .operation {
      display: flex;
    }

    .rank-section .rank .list .item .operation .btn {
      width: 17px;
      height: 17px;
      margin-right: 8px;
      background: url(./images/main_sprite.png) no-repeat;
    }

    .rank-section .rank .list .item .operation .btn.play {
      background-position: -267px -268px;
    }

    .rank-section .rank .list .item .operation .btn.add {
      background: url(./images/iconall_sprite.png) no-repeat;
      background-position: 2px -698px;
    }

    .rank-section .rank .list .item .operation .btn.favor {
      background-position: -297px -268px;
    }

    .rank-section .rank .list .more {
      height: 32px;
      line-height: 32px;
      text-align: right;
      padding-right: 32px;
    }

    .rank-section .rank .list .more a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  
  <div class="main">
    <div class="area wrapper_02">
      <div class="area-left">
        <div class="recommend-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">热门推荐</h2>
              <ul class="keywords">
                <li><a class="item" href="#">华语</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">流行</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">摇滚</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">民谣</a></li>
                <li class="line">|</li>
                <li><a class="item" href="#">电子</a></li>
              </ul>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
            <div class="item">
              <div class="top">
                <img src="./images/recommend_album_01.jpeg" alt="音乐封面">
                <a class="cover" href="#"></a>
                <div class="info">
                  <i class="icon_sprite icon_sprite_music icon-music"></i>
                  <span class="count">62万</span>
                  <i class="icon_sprite icon_sprite_play_01 icon-play"></i>
                </div>
              </div>
              <a class="bottom" href="#">
                <i class="iconall_sprite iconall_sprite_radio icon-radio"></i>
                天气好的话，把耳机分给我一半吧
              </a>
            </div>
          </div>
        </div>
        <div class="disc-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">新碟上架</h2>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>

          <div class="content">
            <div class="inner">
              <div class="roller">
                <ul class="list">
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                  <li class="item">
                    <div class="album">
                      <img src="./images/newdisc_album_01.jpeg" alt="">
                      <a class="cover" href="#"></a>
                      <a class="play" href="#"></a>
                    </div>
                    <a class="title" href="#">原神-佚落迁忘之岛 Islands of the Lost and Forgotten</a>
                    <a class="anchor" href="#">HOYO-MiX</a>
                  </li>
                </ul>
                <ul class="list">2</ul>
              </div>
              <a class="control control-left" href="#"></a>
              <a class="control control-right" href="#"></a>
            </div>
          </div>

        </div>
        <div class="rank-section">
          <div class="header_type_02">
            <div class="area_left">
              <h2 class="title">榜单</h2>
            </div>
            <div class="area_right">
              <a class="more" href="#">更多</a>
            </div>
          </div>

          <div class="content">
            <dl class="rank up-rank">
              <dt class="header">
                <div class="album">
                  <img src="./images/rank_up.jpeg" alt="飙升榜">
                  <a class="cover" href="#"></a>
                </div>
                <div class="info">
                  <h3 class="title">飙升榜</h3>
                  <div class="operation">
                    <a class="btn play" href="#"></a>
                    <a class="btn favor" href="#"></a>
                  </div>
                </div>
              </dt>
              <dd class="list up-list">
                <ol>
                  <li class="item">
                    <!-- Java: Student -> sno(numero序号) -->
                    <span class="no">1</span>
                    <a class="song" href="#">再等冬天(Memories)</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">9</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">10</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                </ol>
                <div class="more">
                  <a href="#">查看全部 &gt;</a>
                </div>
              </dd>
            </dl>
            <dl class="rank up-rank">
              <dt class="header">
                <div class="album">
                  <img src="./images/rank_new.jpeg" alt="新歌榜">
                  <a class="cover" href="#"></a>
                </div>
                <div class="info">
                  <h3 class="title">新歌榜</h3>
                  <div class="operation">
                    <a class="btn play" href="#"></a>
                    <a class="btn favor" href="#"></a>
                  </div>
                </div>
              </dt>
              <dd class="list new-list">
                <ol>
                  <li class="item">
                    <!-- Java: Student -> sno(numero序号) -->
                    <span class="no">1</span>
                    <a class="song" href="#">再等冬天(Memories)</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">9</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">10</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                </ol>
                <div class="more">
                  <a href="#">查看全部 &gt;</a>
                </div>
              </dd>
            </dl>
            <dl class="rank origin-rank">
              <dt class="header">
                <div class="album">
                  <img src="./images/rank_origin.jpeg" alt="原创榜">
                  <a class="cover" href="#"></a>
                </div>
                <div class="info">
                  <h3 class="title">原创榜</h3>
                  <div class="operation">
                    <a class="btn play" href="#"></a>
                    <a class="btn favor" href="#"></a>
                  </div>
                </div>
              </dt>
              <dd class="list up-list">
                <ol>
                  <li class="item">
                    <!-- Java: Student -> sno(numero序号) -->
                    <span class="no">1</span>
                    <a class="song" href="#">再等冬天(Memories)</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">2</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">9</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                  <li class="item">
                    <span class="no">10</span>
                    <a class="song" href="#">再等冬天</a>
                    <div class="operation">
                      <a class="btn play" href="#"></a>
                      <a class="btn add" href="#"></a>
                      <a class="btn favor" href="#"></a>
                    </div>
                  </li>
                </ol>
                <div class="more">
                  <a href="#">查看全部 &gt;</a>
                </div>
              </dd>
            </dl>
          </div>

        </div>
      </div>
      <div class="area-right">
        <div class="user-login">
          <p class="desc">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </p>
          <a class="btn" href="#">用户登录</a>
        </div>
        <div class="settle-singer">
          <div class="header_type_01">
            <h3 class="title">入驻歌手</h3>
            <a class="more" href="#">查看全部 &gt;</a>
          </div>
          <ul class="list">
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹发发到付发发</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a class="item" href="#">
                <div class="album">
                  <img src="./images/singer_01.jpeg" alt="">
                </div>
                <div class="info">
                  <div class="singer">张惠妹aMEI</div>
                  <div class="desc">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="hot-anchor">
          <div class="header_type_01">
            <h3 class="title">热门主播</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-2#/7182471543480385573"></iframe>

### 03_网易云音乐

- 在线此链接体验：https://img.onmicrosoft.cn/2022-12-28/day4-6/code/03_ncm/index.html

<iframe width="100%" scrolling=no height="500" frameborder="0" src="https://code.onmicrosoft.cn/ex-3#/7182471838402871299"></iframe>
