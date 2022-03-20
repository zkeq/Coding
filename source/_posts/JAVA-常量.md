---
title: JAVA 常量
date: 2021-09-23 21:46:05
tags: [常量变量]
categories: Java
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-23/1.jpg
---

### 常量

#### 3.1 常量概述

- 常量 : 在程序运行过程中,其值不可发生改变的量

#### 3.2 Java中的常量分类：

- ​	**字符串常量**  用双引号括起来的多个字符（可以包含0个、一个或多个），例如"a"、"abc"、"中国"等
- ​	**整数常量**  整数，例如：-10、0、88等

- ​	**小数常量**  小数，例如：-5.5、1.0、88.88等

- ​	**字符常量**  用单引号括起来的一个字符，例如：'a'、'5'、'B'、'中'等

- ​	**布尔常量**  布尔值，表示真假，只有两个值true和false

- ​	**空常量**  一个特殊的值，空值，值为null

- 除空常量外，其他常量均可使用输出语句直接输出。

#### 3.3 代码

```java
/*
	常量：
		在程序运行过程中，其值不可以发生改变的量。

	常量分类：
		字符串常量：	用双引号括起来的内容。"HelloWorld","黑马程序员"
		整数常量：		不带小数的数字。666,-88
		小数常量：		带小数的数字。13.14,-5.21
		字符常量：		用单引号括起来的内容。'A','0','我'
		布尔常量：		布尔值，表示真假。true,false
		空常量：		一个特殊的值，空值。null
*/
public class ConstantDemo {
	public static void main(String[] args) {
		//字符串常量
		System.out.println("HelloWorld");
		System.out.println("黑马程序员");
		System.out.println("--------");
		
		
		//整数常量
		System.out.println(666);
		System.out.println(-88);
		System.out.println("--------");
		
		//小数常量
		System.out.println(13.14);
		System.out.println(-5.21);
		System.out.println("--------");
		
		//字符常量
		System.out.println('A');
		System.out.println('0');
		System.out.println('我');
		System.out.println("--------");
		
		//布尔常量
		System.out.println(true);
		System.out.println(false);
		System.out.println("--------");
		
		//空常量
		//空常量是不能直接输出的
		//System.out.println(null);
	}
}
```

#### 3.4 注意事项

- 空常量是不能直接输出的
