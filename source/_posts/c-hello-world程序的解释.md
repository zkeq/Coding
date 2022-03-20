---
title: c++ hello world程序的解释
tags: [基础语法]
description: 本节课主要学习了<br>hello world程序的解释
date: 2021-12-20 00:23:53
categories: cpp
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-12-19/4.png
---
### 代码

```c++
//# 预处理指令，在预编译时处理
//#include <stdio.h> 包含stdio.h文件  stdio.h类似于菜单
// 两个斜杠是注释
//符号与（）结和 代表这个是一个函数
//main() main函数也叫主函数 整个程序中仅且只有一个main函数，程序从main函数
//开始执行
//int  代表main函数结束之后的返回值类型
//return  结束这个函数，然后返回值，返回值的类型和函数定义时返回值类型一致
//{}里面的是函数体，所有需要执行的代码必须写在{}中
//每一条代码必须以分号；结尾
//printf是一个库函数，printf +（）就是函数调用,括号里面是传入的参数

#include <stdio.h>
int main()   # C语言可以不写int,但c++一定要写
{
	printf("hello world\n"); //打印到终端
	return 0;
}
```

### 代码分析

1.  `include`头文件包含
    -  `#include`的意思是头文件包含，`#include <stdio.h>`代表包含`stdio.h`这个头文件
    -  使用C语言库函数需要提前包含库函数对应的头文件，如这里使用了`printf()`函数，需要包含`stdio.h`头文件
    -  可以通过`man 3 printf`查看`printf`所需的头文件
2.  `#include< >` 与 `#include ""`的区别：
    -  `< >` 表示系统直接按系统指定的目录检索
    -  `""` 表示系统先在 `""` 指定的路径(没写路径代表当前路径)查找头文件，如果找不到，再按系统指定的目录检索
        `stdio.h`是在操作系统的系统目录下：
        ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-12-19/1.png)
3.  `main`函数
    - 一个完整的C语言程序，是由一个、且只能有一个main()函数(又称主函数，必须有)和若干个其他函数结合而成（可选）。
    -  main函数是C语言程序的入口，程序是从main函数开始执行。
4.  `{}` 括号，程序体和代码块
    -  `{}`叫代码块，一个代码块内部可以有一条或者多条语句
    -  C语言每句可执行代码都是`"**;**"`分号结尾
    -  所有的`#`开头的行，都代表预编译指令，预编译指令行结尾是没有分号的
    -  所有的可执行语句必须是在代码块里面
5.  `注释`
    - `//`叫行注释，注释的内容编译器是忽略的，注释主要的作用是在代码中加一些说明和解释，这样有利于代码的阅读
    -  `/**/`叫块注释
    -  块注释是C语言标准的注释方法
    -  行注释是从C++语言借鉴过来的
6.  `printf`函数
    - `printf`是C语言库函数，功能是向标准输出设备输出一个字符串
    - `printf(“hello world\n”);`  // `\n`的意思是回车换行
7.  `return`语句
    - `return`代表函数执行完毕，返回`return`代表函数的终止
    - 如果`main`定义的时候前面是`int`，那么`return`后面就需要写一个整数；如果`main`定义的时候前面是`void`，那么`return`后面什么也不需要写
    - 在`main`函数中`return 0`代表程序执行成功，`return -1`代表程序执行失败
    - `int main()`和`void main()`在C语言中是一样的，`但C++只接受int main这种定义方式`