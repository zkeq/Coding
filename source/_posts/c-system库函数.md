---
title: c++ system库函数
tags: [基础语法]
description: 本节课主要学习了<br>system库函数
date: 2021-12-20 00:24:02
categories: cpp
cover: https://ik.imagekit.io/zkeq/2021-12-19/4.png
---
### system 库函数

##### 作用

- 在程序中启动另一个程序
- `参数`：要的是待启动程序的路径名
- win平台写路径的时候 用 `//` 或者 `\`

```c++
c#include <stdio.h>
#include <stdlib.h>
int main()
{
        //syetem启动程序，如果这个程序系统可以找到，不用加路径，
        //如果环境变量找不到，需要加路径
        //windows路径以\\  或 /
        //system("mspaint");//启动画图板
        //system("C:\\Users\\Administrator\\Desktop\\c++13\\hello.exe");
        system("C:/Users/Administrator/Desktop/c++13/hello.exe");
        printf("hello worldfbahfoahfoooooooooooooooooooooo\n");//打印到终端
        return 0;
}
```

#### 详解

```c++
#include <stdlib.h>
int system(const char *command);
功能：在已经运行的程序中执行另外一个外部程序
参数：外部可执行程序名字
返回值：
成功：0
失败：任意数字
```

#### 示例代码

```c++
#include <stdio.h>
#include <stdlib.h>

int main()
{
	//system("calc"); //windows平台 (注意/是转义字符)
	system("ls"); //Linux平台, 需要头文件#include <stdlib.h>

	return 0;
}
```

#### 自己尝试代码

```c++
#include <stdio.h>
#include <stdint.h>
int main()
{
	system("d://cpp//hello.exe"); //启动上一个编译的程序
	printf("hello world\n"); //打印到终端
	return 0;
}
```

