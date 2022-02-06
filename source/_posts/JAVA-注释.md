---
title: JAVA 注释
date: 2021-09-23 21:44:59
tags: [常量变量,数据类型]
categories: Java
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-23/1.jpg
---

### 注释

#### 1.1 注释概述

- 注释是在程序指定位置添加的说明性信息

- 注释不参与程序运行,只起到说明作用

#### 1.2 注释分类

- 单行注释:
  - 格式 :  `// 注释信息`
- 多行注释
  - 格式: `/* 注释信息*/`
- 文档注释
  - 格式: /** 注释信息 */
  - 文档注释目前用不上,暂不讲解.

#### 1.3 注意事项

- 注意：多行注释不能嵌套使用。

#### 1.4 代码

```java
/*
	Java程序中最基本的组成单位是类。
	
	类的定义格式：
		public class 类名 {
			
		}
		
	这是我定义的HelloWorld类
*/
public class HelloWorld {
	/*
		这是main方法
		main方法是程序的入口方法，代码的执行是从main方法开始的
	*/
	public static void main(String[] args) {
		// 这是输出语句，""里面的内容是可以改变的
		System.out.println("itheima");
	}
}
```

