---
title: JAVA 变量
date: 2021-09-23 21:46:31
tags: [常量变量]
categories: Java
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-23/1.jpg
---

### 变量

#### 5.1  变量概述  

- 变量：在程序运行过程中，其值可以发生改变的量。


`从本质上讲，变量是内存中的一小块区域，其值可以在一定范围内变化。`

- 变量的定义格式：

```java
数据类型 变量名 = 初始化值; // 声明变量并赋值
int age = 18;
System.out.println(age);
```

或者

```java
// 先声明，后赋值（使用前赋值即可）
数据类型 变量名;
变量名 = 初始化值;
double money;
money = 55.5;
System.out.println(money);
```

还可以在同一行定义多个同一种数据类型的变量，中间使用逗号隔开。但不建议使用这种方式，降低程序的可读性。

```java
int a = 10, b = 20; // 定义int类型的变量a和b，中间使用逗号隔开
System.out.println(a);
System.out.println(b);

int c,d; // 声明int类型的变量c和d，中间使用逗号隔开
c = 30;
d = 40;
System.out.println(c);
System.out.println(d);
```

变量的使用：通过变量名访问即可。

#### 5.2 使用变量时的注意事项

1. 在同一对花括号中，变量名不能重复。
2. 变量在使用之前，必须初始化（赋值）。
3. 定义`long`类型的变量时，需要在整数的后面加`L`（大小写均可，建议大写）。因为整数默认是`int`类型，整数太大可能超出`int`范围。
4. 定义`float`类型的变量时，需要在小数的后面加`F`（大小写均可，建议大写）。因为浮点数的默认类型是`double`， `double`的取值范围是大于`的，类型不兼容。

#### 5.3代码

###### 案例一

```java
/*
	变量定义格式：
		数据类型 变量名 = 变量值;
		
	基本数据类型：
		byte,short,int,long,float,double,char,boolean
		
	变量的使用：
		取值格式：变量名
		
		修改值格式：变量名 = 变量值;
*/
public class VariableDemo01 {
	public static void main(String[] args) {
		//定义变量
		int a = 10;
		
		//输出变量
		System.out.println(a);
		
		//修改变量
		a = 20;
		System.out.println(a);
	}
}
```

###### 案例二

```java
/*
	变量使用的注意事项：
		名字不能重复
		变量未赋值，不能使用
		long类型的变量定义的时候，为了防止整数过大，后面要加L
		float类型的变量定义的时候，为了防止类型不兼容，后面要加F
*/
public class VariableDemo02 {
	public static void main(String[] args) {
		//定义byte类型的变量
		byte b = 10;
		System.out.println(b);
		
		//定义short类型的变量
		short s = 100;
		System.out.println(s);
		
		//定义int类型的变量
		int i = 10000;
		System.out.println(i);
		
		//定义double类型的变量
		double d = 13.14;
		System.out.println(d);
		
		//定义char类型的变量
		char c = 'a';
		System.out.println(c);
		
		//定义boolean类型的变量
		//boolean b = true;
		//System.out.println(b);
		boolean bb = true;
		System.out.println(bb);
		System.out.println("--------");
		
		//定义long类型的变量
		long l = 10000000000L;
		System.out.println(l);
		System.out.println("--------");
		
		//定义float类型的变量
		float f = 13.14F;
		System.out.println(f);
	}	
}
```

