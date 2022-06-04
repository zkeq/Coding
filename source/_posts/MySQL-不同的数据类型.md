---
title: MySQL | 不同的数据类型
tags: [MySQL]
description: 本节课主要学习了<br> 不同的数据类型（数字、字符串、日期类型）
date: 2022-04-19 22:15:43
categories: MySQL
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

### 数据定义语言：数据类型

##### 数据类型：数字

| 类型        | 大小     | 说明             |
| ----------- | -------- | ---------------- |
| `TINYINT`   | 1字节 ^1 | 小整数           |
| `SMALLINT`  | 2字节    | 普通整数         |
| `MEDIUMINT` | 3字节    | 普通整数         |
| `INT`       | 4字节    | 较大整数         |
| `BIGINT`    | 8字节    | 大整数           |
| `FLOAT`     | 4字节    | 单精度浮点数     |
| `DOUBLE`    | 8字节    | 双精度浮点数     |
| `DECIMAL`   | -------- | `DECIMAL(10, 2)` |

1^ : `(-2^7  --- +2^7-1)`

###### 不精确的浮点数

- 十进制的浮点数无法在计算机中用二进制精确表达

![09](https://img.onmicrosoft.cn/2022-04-19/09.png)

```SQL
CREATE TABLE temp(
	id INT UNSIGNED PRIMARY KEY,
	num FLOAT(20,10)
)
0.2 ----> 0.2000000030
```

```SQL
DROP TABLE temp
CREATE TABLE temp(
	id INT UNSIGNED PRIMARY KEY,
	num DECIMAL(20,10)
)
0.2 ----> 0.2000000000
```

##### 数据类型：字符串

| 类型         | 大小                | 说明             |
| ------------ | ------------------- | ---------------- |
| `CHAR`       | 1 - 255 字符        | 固定长度字符串   |
| `VARCHAR`    | 1 - 65535 字符      | 不固定长度字符串 |
| `TEXT`       | 1 - 65535 字符      | 不确定长度字符串 |
| `MEDIUMTEXT` | 1 - 1 千 6 百万字符 | 不确定长度字符串 |
| `LONGTEXT`   | 1 - 42 亿字符       | 不确定长度字符串 |

##### 数据类型：日期类型

| 类型        | 大小   | 说明     |
| ----------- | ------ | -------- |
| `DATE`      | 3 字节 | 日期     |
| `TIME`      | 3 字节 | 时间     |
| `YEAR`      | 1 字节 | 年份     |
| `DATETIME`  | 8 字节 | 日期时间 |
| `TIMESTAMP` | 4 字节 | 时间戳   |

