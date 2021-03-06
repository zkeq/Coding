---
title: JAVA 数据类型
date: 2021-09-23 21:46:17
tags: [数据类型]
categories: Java
cover: https://img.onmicrosoft.cn/2021-9-23/1.jpg
---

### 数据类型

#### 4.1  计算机的存储单元

> 我们知道计算机是可以用来存储数据的，但是无论是内存还是硬盘，计算机存储设备的最小信息单元叫“位（bit）”，我们又称之为“比特位”，通常用小写的字母”b”表示。而计算机中最基本的存储单元叫“字节（byte）”，
>
> 通常用大写字母”B”表示，字节是由连续的8个位组成。
>
> 除了字节外还有一些常用的存储单位，其换算单位如下：
>
> 1B（字节） = 8bit
>
> 1KB = 1024B
>
> 1MB = 1024KB
>
> 1GB = 1024MB
>
> 1TB = 1024GB

#### 4.2 数据类型

> Java是一个强类型语言，Java中的数据必须明确数据类型。在Java中的数据类型包括基本数据类型和引用数据类型两种。

#### 4.3 数据类型内存占用和取值范围

| 数据类型 | 关键字       | 内存占用 | 取值范围                                                     |
| :------- | ------------ | -------- | :----------------------------------------------------------- |
| 整数类型 | byte         | 1        | -128~127                                                     |
|          | short        | 2        | -32768~32767                                                 |
|          | int(默认)    | 4        | -2的31次方到2的31次方-1                                      |
|          | long         | 8        | -2的63次方到2的63次方-1                                      |
| 浮点类型 | float        | 4        | 负数：-3.402823E+38到-1.401298E-45                                                             正数：   1.401298E-45到3.402823E+38 |
|          | double(默认) | 8        | 负数：-1.797693E+308到-4.9000000E-324                                              正数：4.9000000E-324   到1.797693E+308 |
| 字符类型 | char         | 2        | 0-65535                                                      |
| 布尔类型 | boolean      | 1        | true，false                                                  |

#### 4.4 说明：

- ​	e+38表示是乘以10的38次方，同样，e-45表示乘以10的负45次方。

- ​	在java中整数默认是int类型，浮点数默认是double类型。
