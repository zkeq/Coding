---
title: Python Python中的虚拟环境
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>Python中的虚拟环境
date: 2021-11-12 02:07:29
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

### Python中的虚拟环境

- 认识虚拟环境
- Python中的虚拟环境工具

#### 认识虚拟环境

- 各个版本互不干扰,互不相等
- python可能版本不同  系统环境不同
- 创建的每一个项目都是各自的虚拟环境

#### Python中的虚拟环境工具

- `Virtualenv`
- `pyenv`

#### `virtualenv`(另一个较为复杂)

- 命令行下使用
- `pip install virtualenv`
- 选择目录
- `virtualenv -p python3 penv`
- `./penv/bin/active`
- win系统可以`在bin文件夹下`输入`active`  `回车`**进入虚拟环境*
- `deacitve`(退出虚拟环境)

> 装这个插件.......Windows配置环境配置了半个多小时(想买mac或者重开成Linux了呜呜呜)
