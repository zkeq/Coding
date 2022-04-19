---
title: MySQL | 什么是 SQL 语言？
tags: [MySQL]
description: 本节课主要学习了<br> 什么是 Mysql 语言 以及入门的知识。
date: 2022-04-19 20:22:21
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

#### 什么是 `SQL` 语言？

- `SQL`  是用于访问和处理数据的标准的计算机语言
  - 不能通用的叫 `方言`

| 名称                  | 功能                       |
| --------------------- | -------------------------- |
| `DML`（数据操作语言） | 添加，删除，修改，查询     |
| `DCL`（数据控制语言） | 用户，权限，事务           |
| `DDL`（数据定义语言） | 逻辑库，数据库，视图，索引 |

#### SQL 语句注意事项

- SQL 语句不区分大小写，但是 字符串 区分大小写。
  - `SELECT "HelloWorld" ;`
  - 关键字    非关键词
  - 推荐 关键字大写，这样写出来的才错落有致
- SQL 语句必须以分号结尾。
- SQL 语句中的空白和换行没有限制，但是不能破坏语法。

#### SQL 语句的注释

- SQL 语句的注释有两种，分别如下：
  1. `# 这是一段注释` （适合单行）
  2. `/* 这是另一端注释 */` （适合多行）

#### 创建逻辑库

![03](https://ik.imagekit.io/zkeq/2022-04-19/03.png)

#### 创建数据表

![04](https://ik.imagekit.io/zkeq/2022-04-19/04.png)

![05](https://ik.imagekit.io/zkeq/2022-04-19/05.png)

![06](https://ik.imagekit.io/zkeq/2022-04-19/06.png)

![07](https://ik.imagekit.io/zkeq/2022-04-19/07.png)

```mysql
USE test;
CREATE TABLE student(
	id INT UNSIGNED PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	sex CHAR(1) NOT NULL,
	brithday DATE NOT NULL,
	tel CHAR(11) NOT NULL,
	remark VARCHAR(200)
) ;

INSERT INTO student VALUES(1, "李强", "男", "1995-05-15", "13312345678", NULL);
```

#### 数据库的其他操作

![08](https://ik.imagekit.io/zkeq/2022-04-19/08.png)

```mysql
SHOW TABLES;
DESC student;
SHOW CREATE TABLE student;
DROP TABLE student;
```

