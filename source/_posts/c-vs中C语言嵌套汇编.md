---
title: c++ vs中C语言嵌套汇编
tags: [基础语法]
description: 本节课主要学习了<br>vs中C语言嵌套汇编(无实操)
date: 2021-12-20 00:24:19
categories: cpp
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-12-19/4.png
---
vs 中c语言嵌套汇编

`本节代码自己没有执行过...2022vs编辑器好像不允许64位汇编. :(`

```c++
#include <stdio.h>

int main()
{
	//定义整型变量a, b, c
	int a=3;
	int b=4;
	int c=;
	// 调试时设置断点,断点的意义在于使程序运行至断点时停止,使其可以人为停止
	__asm
	{
		mov a, 3	//3的值放在a对应内存的位置
		mov b, 4	//4的值放在b对应内存的位置
		mov eax, a	//把a内存的值放在eax寄存器
		add eax, b	//eax和b相加，结果放在eax
		mov c, eax	//eax的值放在c中
	}

	printf("%d\n", c);//把c的值输出

	return 0;//成功完成
}

```

