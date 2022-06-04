---
title: JAVA 标识符 和 类型转换
date: 2021-09-23 21:47:02
tags: [常量变量,数据类型]
categories: Java
cover: https://img.onmicrosoft.cn/2021-9-23/1.jpg
---

#### 6.1 标识符（记忆、理解）

###### 标识符是用户编程时使用的名字，用于给类、方法、变量、常量等命名。

###### Java中标识符的组成规则：

- ​	由字母、数字、下划线“_”、美元符号“$”组成，第一个字符不能是数字。

- ​	不能使用java中的关键字作为标识符。	

- ​	标识符对大小写敏感（区分大小写）。


##### Java中标识符的命名约定：

- ​	小驼峰式命名：变量名、方法名

  ​			首字母小写，从第二个单词开始每个单词的首字母大写。

- ​	大驼峰式命名：类名

  ​			每个单词的首字母都大写。

##### 另外，标识符的命名最好可以做到见名知意

- ​		例如：username、studentNumber等。

#### 7.1 类型转换（理解）

###### 在Java中，一些数据类型之间是可以相互转换的。分为两种情况：自动类型转换和强制类型转换。

##### 自动类型转换：

​	把一个表示数据范围小的数值或者变量赋值给另一个表示数据范围大的变量。这种转换方式是自动的，直接书写即可。例如：

```java
double num = 10; // 将int类型的10直接赋值给double类型
System.out.println(num); // 输出10.0
```

##### 强制类型转换：(不建议 因为会有数据丢失)

###### 	把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量。

###### 	强制类型转换格式：目标数据类型 变量名 = (目标数据类型)值或者变量;

###### 	例如：

```java
double num1 = 5.5;
int num2 = (int) num1; // 将double类型的num1强制转换为int类型
System.out.println(num2); // 输出5（小数位直接舍弃）
```

![1543196882672](https://img.onmicrosoft.cn/2021-9-23/2.png)

###### 说明：

1. char类型的数据转换为int类型是按照码表中对应的int值进行计算的。比如在ASCII码表中，'a'对应97。

```java
int a = 'a';
System.out.println(a); // 将输出97
```

2. 整数默认是int类型，byte、short和char类型数据参与运算均会自动转换为int类型。

```java
byte b1 = 10;
byte b2 = 20;
byte b3 = b1 + b2; 
// 第三行代码会报错，b1和b2会自动转换为int类型，计算结果为int，int赋值给byte需要强制类型转换。
// 修改为:
int num = b1 + b2;
// 或者：
byte b3 = (byte) (b1 + b2);
```

- boolean类型不能与其他基本数据类型相互转换。

##### 代码

```java
/*
	类型转换
*/
public class ConversionDemo {
	public static void main(String[] args) {
		//自动类型转换
		double d = 10;
		System.out.println(d);
		
		//定义byte类型的变量
		byte b = 10;
		short s = b;
		int i = b;
		
		//这是不可以的，类型不兼容
		//char c = b;
		
		//强制类型转换
		int k = (int)88.88;
		System.out.println(k);
	}
}
```
